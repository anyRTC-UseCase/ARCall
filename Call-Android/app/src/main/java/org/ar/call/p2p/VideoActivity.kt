package org.ar.call.p2p

import android.Manifest
import android.app.ActivityManager
import android.content.Context
import android.content.Intent
import android.media.MediaPlayer
import android.os.Build
import android.os.Bundle
import android.text.TextUtils
import android.util.DisplayMetrics
import android.util.Log
import android.view.*
import android.view.ViewGroup.MarginLayoutParams
import android.widget.*
import androidx.collection.ArraySet
import com.gyf.immersionbar.ImmersionBar
import com.kongzue.dialog.v3.MessageDialog
import com.lzf.easyfloat.EasyFloat
import com.lzf.easyfloat.enums.ShowPattern
import com.lzf.easyfloat.enums.SidePattern
import com.lzf.easyfloat.interfaces.OnFloatCallbacks
import com.lzf.easyfloat.interfaces.OnInvokeView
import com.lzf.easyfloat.interfaces.OnPermissionResult
import com.lzf.easyfloat.permission.PermissionUtils.checkPermission
import com.lzf.easyfloat.permission.PermissionUtils.requestPermission
import org.ar.call.*
import org.ar.call.CallApp.Companion.callApp
import org.ar.call.R
import org.ar.call.databinding.ActivityVideoBinding
import org.ar.call.p2p.VideoActivity
import org.ar.call.utils.Constans
import org.ar.call.utils.DensityUtil
import org.ar.call.utils.KeepAliveService
import org.ar.call.utils.toast
import org.ar.rtc.Constants
import org.ar.rtc.IRtcEngineEventHandler
import org.ar.rtc.RtcEngine
import org.ar.rtc.VideoEncoderConfiguration
import org.ar.rtc.VideoEncoderConfiguration.VideoDimensions
import org.ar.rtc.video.VideoCanvas
import org.ar.rtm.*
import org.json.JSONException
import org.json.JSONObject
import java.util.*

class VideoActivity : BaseActivity() {

    private lateinit var binding: ActivityVideoBinding

    //语音模式
    private var rtmClient: RtmClient? = null
    private var rtmCallManager: RtmCallManager? = null
    private var remoteVideoId = ""
    private var callMode = 0
    private var isSmall = false //是否缩小
    private val videoList = HashMap<String, TextureView?>()

    //呼叫等待页面
    private var player: MediaPlayer? = null
    private var localInvitation: LocalInvitation? = null
    private var remoteInvitation: RemoteInvitation? = null
    private var isCall = false //true 主动呼叫 false 被呼叫
    private val isConference = false
    private var isWaiting = false
    private var isCalling = false
    private var userId = callApp.userId
    private var channelId = ""
    private var remoteUserId = ""
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        binding = ActivityVideoBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
        ImmersionBar.with(this).statusBarDarkFont(false, 0.2f).keyboardEnable(true).init()
        RtcManager.instance.init(this)
        //呼叫等待页面
        rtmClient = RtmManager.instance.getRtmClient()
        rtmCallManager = RtmManager.instance.getCallManager()
        isCall = !intent.getBooleanExtra("RecCall", false)
        if (isCall) {
            localInvitation = RtmManager.instance.localInvitation
            localInvitation?.let {
                val jsonObject = JSONObject(localInvitation?.content)
                callMode = jsonObject.getInt("Mode")
                channelId = jsonObject.getString("ChanId")
                userId = callApp.userId
                remoteUserId = it.calleeId
            }
            binding.tvState.text = (if (callMode == Constans.AUDIO_MODE) "语音呼叫中" else "视频呼叫中")
            Subscribe(remoteUserId)
            showCallLayout(false, localInvitation!!.calleeId)
            rtmCallManager!!.sendLocalInvitation(localInvitation!!, object : ResultCallback<Void?> {
                override fun onSuccess(var1: Void?) {}
                override fun onFailure(var1: ErrorInfo) {}
            })
        } else {
            remoteInvitation = RtmManager.instance.getRemoteInvitation()
            try {
                val jsonObject = JSONObject(remoteInvitation!!.content)
                callMode = jsonObject.getInt("Mode")
                channelId = jsonObject.getString("ChanId")
                userId = callApp.userId
                remoteUserId = remoteInvitation!!.callerId
            } catch (e: JSONException) {
                e.printStackTrace()
            }
            binding.tvState.text=(if (callMode == Constans.AUDIO_MODE) "收到语音呼叫邀请" else "收到视频呼叫邀请")
            Subscribe(remoteInvitation!!.callerId)
            showCallLayout(true, remoteInvitation!!.callerId)
        }
        RtcManager.instance.getRtcEngine()?.setEnableSpeakerphone(true)
        if (callMode == Constans.VIDEO_MODE) {
                RtcManager.instance.enableVideo()
                binding.rlVideoPreview.visibility = View.VISIBLE
                val mLocalView = RtcEngine.CreateRendererView(this)
                binding.rlVideoPreview.addView(mLocalView, 0)
                RtcManager.instance.setupLocalVideo(mLocalView)
                RtcManager.instance.getRtcEngine()?.startPreview()
        }
        startRing()
        setNeedUnRegister(false) //单独处理 悬浮窗打开会走onStop 避免取消注册了回调 收不到消息
    }

    private fun startRing() {
        try {
            player = MediaPlayer.create(this, R.raw.video_request)
            player?.let {
                it.isLooping = true
                it.start()
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    /**
     * @param isCalled 是否是被叫
     * @param callId
     */
    private fun showCallLayout(isCalled: Boolean, callId: String) {
        binding.tvUserPre.text = callId
        binding.btnHangup.visibility = View.VISIBLE
        binding.btnAccept.visibility = if (isCalled) View.VISIBLE else View.GONE
        if (isCalled) { //被叫
            if (callMode == Constans.VIDEO_MODE) { //如果是视频呼叫
                binding.btnSwitchAudio.visibility = View.VISIBLE //则显示语音接听按钮
            } else {
                binding.btnSwitchAudio.visibility = View.GONE
            }
            val layoutParams = binding.btnHangup.layoutParams as RelativeLayout.LayoutParams
            layoutParams.removeRule(RelativeLayout.CENTER_HORIZONTAL)
            layoutParams.addRule(RelativeLayout.ALIGN_PARENT_LEFT)
            layoutParams.setMargins(DensityUtil.dip2px(this, 35f), 0, 0, 0)
            binding.btnHangup.layoutParams = layoutParams
        } else {
            val layoutParams = binding.btnHangup.layoutParams as RelativeLayout.LayoutParams
            layoutParams.removeRule(RelativeLayout.ALIGN_PARENT_LEFT)
            layoutParams.addRule(RelativeLayout.CENTER_HORIZONTAL)
            binding.btnHangup.layoutParams = layoutParams
            binding.btnHangup.requestLayout()
            binding.btnSwitchAudio.visibility = View.GONE
        }
    }

    private fun stopRing() {
        try {
            if (null != player) {
                player!!.stop()
                player!!.release()
                player = null
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    private fun initEngineAndJoinChannel(isApp: Boolean, watchParams: String?) {
        isWaiting = false
        isCalling = true
        stopRing()
        if (callMode == Constans.AUDIO_MODE) {
            binding.flVideoGroup.visibility = View.GONE
            binding.flAudioGroup.visibility = View.VISIBLE
            binding.tvRemoteAudioUser!!.text = remoteUserId
        } else {
            binding.flVideoGroup.visibility = View.VISIBLE
            binding.flAudioGroup.visibility = View.GONE
            val outMetrics = DisplayMetrics()
            windowManager.defaultDisplay.getMetrics(outMetrics)
            val widthPixels = outMetrics.widthPixels
            val marginLayoutParams = binding.rlLocalVideo!!.layoutParams as MarginLayoutParams
            marginLayoutParams.topMargin = DensityUtil.dip2px(this@VideoActivity, 12f)
            marginLayoutParams.leftMargin = widthPixels - DensityUtil.dip2px(this@VideoActivity, 90 + 12.toFloat()) //90是View的宽  12 是margin
            binding.rlLocalVideo.layoutParams = marginLayoutParams
        }
        if (callMode == Constans.VIDEO_MODE) {
            binding.rlVideoPreview.removeAllViews()
            Toast.makeText(this@VideoActivity, "声音将通过扬声器播放", Toast.LENGTH_SHORT).show()
            setupLocalVideo()
            RtcManager.instance.getRtcEngine()!!.setEnableSpeakerphone(true)
        } else {
            Toast.makeText(this@VideoActivity, "声音将通过听筒播放", Toast.LENGTH_SHORT).show()
            RtcManager.instance.getRtcEngine()!!.setEnableSpeakerphone(false)
        }
        if (!isApp){
            RtcManager.instance.getRtcEngine()!!.setParameters("{\"Cmd\":\"SetEncoderType\", \"VidCodecType\": 5, \"AudCodecType\": 3}")
            if (callMode == Constans.VIDEO_MODE){
                watchParams?.let {
                    val json = JSONObject(it)
                    val width = json.getInt("Width")
                    val height = json.getInt("Height")
                    val fps = json.getInt("Fps")
                    val configuration = VideoEncoderConfiguration()
                    configuration.dimensions = VideoDimensions(width, height)
                    configuration.bitrate = 128
                    configuration.minBitrate = 128
                    configuration.frameRate = fps
                    configuration.minFrameRate = 1
                    RtcManager.instance.getRtcEngine()!!.setVideoEncoderConfiguration(configuration)
                }
            }

        }
        joinChannel()
    }

    private fun joinChannel() {
        RtcManager.instance.getRtcEngine()!!.joinChannel("", channelId, "", userId)
    }

    private fun setupLocalVideo() {
        val mLocalView = RtcEngine.CreateRendererView(this)
        if (binding.rlLocalVideo.childCount == 2) {
            binding.rlLocalVideo.removeViewAt(1)
        }
        if (videoList.containsKey("local")) {
            videoList.remove("local")
        }
        binding.rlLocalVideo.addView(mLocalView, 1)
        binding.rlLocalVideo.tag = "local"
        videoList["local"] = mLocalView
        RtcManager.instance.setupLocalVideo(mLocalView)
    }

    private fun setupRemoteVideo(uid: String) {
        val mRemoteView = RtcEngine.CreateRendererView(this)
        if (binding.rlRemoteVideo.childCount == 2) {
            binding.rlRemoteVideo.removeViewAt(1)
        }
        if (videoList.containsKey("remote")) {
            videoList.remove("remote")
        }
        binding.rlRemoteVideo.addView(mRemoteView, 1)
        videoList["remote"] = mRemoteView
        RtcManager.instance.getRtcEngine()!!.setupRemoteVideo(VideoCanvas(mRemoteView, Constants.RENDER_MODE_HIDDEN, channelId, uid, Constants.VIDEO_MIRROR_MODE_DISABLED))
    }

    private fun removeRemoteVideo(uid: String) {
        binding.rlRemoteVideo.removeViewAt(1)
    }

    private fun showLongToast(msg: String) {
        runOnUiThread { Toast.makeText(applicationContext, msg, Toast.LENGTH_SHORT).show() }
    }

    private val mRtcEventHandler: IRtcEngineEventHandler = object : IRtcEngineEventHandler() {
        override fun onJoinChannelSuccess(channel: String, uid: String, elapsed: Int) {
            runOnUiThread {
                RtcManager.instance.inMeeting = true
                RtcManager.instance.callMode = Constans.SINGLE_MODE
                binding.chronometer.start()
                toast(channelId+"频道ID")
            }
        }

        override fun onFirstRemoteVideoDecoded(uid: String, width: Int, height: Int, elapsed: Int) {
            runOnUiThread { //对方视频第一帧
                remoteVideoId = uid
                setupRemoteVideo(uid)
            }
        }

        override fun onRemoteVideoStateChanged(uid: String, state: Int, reason: Int, elapsed: Int) {
            super.onRemoteVideoStateChanged(uid, state, reason, elapsed)
            runOnUiThread(Runnable {
                if (reason == 5 || reason == 6) {
                    if (binding.rlLocalVideo.tag == null) {
                        return@Runnable
                    }
                    if (binding.rlLocalVideo.tag == "remote") {
                        if (binding.rlLocalVideo.getChildAt(1) != null) {
                            binding.rlLocalVideo.getChildAt(1).visibility = if (reason == 6) View.VISIBLE else View.INVISIBLE
                        }
                    } else {
                        if (binding.rlRemoteVideo.getChildAt(1) != null) {
                            binding.rlRemoteVideo.getChildAt(1).visibility = if (reason == 6) View.VISIBLE else View.INVISIBLE
                        }
                    }
                }
            })
        }
    }

    fun Leave(view: View?) {
        release(true)
    }

    fun release(needSendMeg: Boolean) {
        RtcManager.instance.inMeeting = false
        dismissFloatWindow()
        if (callMode == Constans.VIDEO_MODE) {
            binding.rlVideo.removeAllViews()
        }
        RtcManager.instance.disableVideo()
        RtcManager.instance.getRtcEngine()?.leaveChannel()
        if (needSendMeg) {
            val jsonObject = JSONObject()
            try {
                jsonObject.put("Cmd", "EndCall")
            } catch (e: JSONException) {
                e.printStackTrace()
            }
            val message = rtmClient!!.createMessage(jsonObject.toString())
            rtmClient!!.sendMessageToPeer(remoteUserId!!, message, SendMessageOptions(), null)
        }
        finish()
    }

    fun Small(view: View?) {
        val version = Build.VERSION.SDK_INT
        if (version < 21) {
            showLongToast("暂不支持该设备")
            return
        }
        if (videoList.size <= 1) {
            showLongToast("只有1人，不能最小化")
            return
        }
        if (!checkPermission(this@VideoActivity)) {
            requestPermission(this@VideoActivity, object : OnPermissionResult {
                override fun permissionResult(b: Boolean) {
                    if (!b) {
                        showLongToast("请打开悬浮窗权限")
                    }
                }
            })
            return
        }
        val activityManager = getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
        activityManager.moveTaskToFront(if (callApp.p2pMainActivityTaskId == -1) callApp.indexActivityTaskId else callApp.p2pMainActivityTaskId, ActivityManager.MOVE_TASK_NO_USER_ACTION)
        isSmall = true
        binding.rlRemoteVideo.removeViewAt(1)
        showFloatWindow()
    }

    fun showFloatWindow() {
        RtcManager.instance.windowMode = true
        EasyFloat.with(this)
                .setShowPattern(ShowPattern.ALL_TIME)
                .setDragEnable(true)
                .setGravity(Gravity.RIGHT)
                .setSidePattern(SidePattern.RESULT_SIDE)
                .setLayout(R.layout.float_window, OnInvokeView { view ->
                    val rl_float_video = view.findViewById<RelativeLayout>(R.id.rl_float_video)
                    rl_float_video.removeAllViews()
                    val mRemoteView = RtcEngine.CreateRendererView(baseContext)
                    rl_float_video.addView(mRemoteView)
                    RtcManager.instance.getRtcEngine()?.setupRemoteVideo(VideoCanvas(mRemoteView, VideoCanvas.RENDER_MODE_HIDDEN, channelId, remoteVideoId, Constants.VIDEO_MIRROR_MODE_DISABLED))
                    rl_float_video.setOnClickListener(View.OnClickListener {
                        dismissFloatWindow()
                        RtcManager.instance.windowMode = false
                        if (callApp.p2pMeetingActivityTaskId == -1) {
                            return@OnClickListener
                        }
                        val intent = Intent(CallApp.callApp.curActivity, VideoActivity::class.java)
                        CallApp.callApp.curActivity?.startActivity(intent)
//                        val activityManager = getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
//                        activityManager.moveTaskToFront(callApp.p2pMainActivityTaskId, ActivityManager.MOVE_TASK_NO_USER_ACTION)
//                        activityManager.moveTaskToFront(callApp.p2pMeetingActivityTaskId, ActivityManager.MOVE_TASK_NO_USER_ACTION)

                        if (binding.rlVideo.lastLeft != -1) {
                            val marginLayoutParams = binding.rlLocalVideo.layoutParams as MarginLayoutParams
                            marginLayoutParams.leftMargin = binding.rlVideo.lastLeft
                            marginLayoutParams.topMargin = binding.rlVideo.lastTop
                            binding.rlLocalVideo.layoutParams = marginLayoutParams
                        }
                        setupLocalVideo()
                        setupRemoteVideo(remoteVideoId)

                    })
                }).registerCallbacks(object : OnFloatCallbacks {
                    override fun createdResult(b: Boolean, s: String?, view: View?) {}
                    override fun show(view: View) {}
                    override fun hide(view: View) {}
                    override fun dismiss() {
                        RtcManager.instance.windowMode = false
                    }

                    override fun touchEvent(view: View, motionEvent: MotionEvent) {}
                    override fun drag(view: View, motionEvent: MotionEvent) {}
                    override fun dragEnd(view: View) {}
                }).show()
    }

    fun dismissFloatWindow() {
        RtcManager.instance.windowMode = false
        if (EasyFloat.appFloatIsShow()) {
            EasyFloat.dismissAppFloat()
            isSmall = false
        }
    }

    override fun onKeyDown(keyCode: Int, event: KeyEvent): Boolean {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            if (binding.rlCallPre.visibility == View.VISIBLE) {
                Back()
            } else {
                release(true)
            }
            return true
        }
        return super.onKeyDown(keyCode, event)
    }

    override fun onResume() {
        super.onResume()
        isWaiting = true
        KeepAliveService.stop(this)
        RtcManager.instance.registerRtcEvent(mRtcEventHandler)
    }

    override fun onDestroy() {
        super.onDestroy()
        KeepAliveService.stop(this)
        stopRing()
        isWaiting = false
        isCalling = false
        RtcManager.instance.inMeeting = false
        RtcManager.instance.callMode = -1
        RtcManager.instance.unRegisterRtcEvent(mRtcEventHandler)
        RtmManager.instance.unRegisterCallListener(this)
        RtmManager.instance.unRegisterRtmEvent(this)
        if (callMode == Constans.AUDIO_MODE && binding.chronometer != null) {
            binding.chronometer!!.stop()
        }
        RtcManager.instance.release()
        UnSubscribe(remoteUserId)
    }

    override fun moveTaskToBack(nonRoot: Boolean): Boolean {
        return super.moveTaskToBack(nonRoot)
    }

    fun SwitchCamera(view: View?) {
        binding.btnSwitch.isSelected = !binding.btnSwitch.isSelected
        RtcManager.instance.getRtcEngine()!!.switchCamera()
    }

    fun SwitchSpeak(view: View?) {

        binding.ibtnSpeak.isSelected = !binding.ibtnSpeak.isSelected
        RtcManager.instance.getRtcEngine()!!.setEnableSpeakerphone(binding.ibtnSpeak.isSelected)
    }

    fun MuteLocalVideo(view: View?) {
        binding.ibtnVideo.isSelected = binding.ibtnVideo.isSelected
        RtcManager.instance.getRtcEngine()!!.muteLocalVideoStream(binding.ibtnVideo.isSelected)
        if (binding.rlLocalVideo.tag == "local") {
            binding.rlLocalVideo.getChildAt(1).visibility = if (!binding.ibtnVideo!!.isSelected) View.VISIBLE else View.INVISIBLE
        } else {
            binding.rlRemoteVideo!!.getChildAt(1).visibility = if (!binding.ibtnVideo!!.isSelected) View.VISIBLE else View.INVISIBLE
        }
    }

    fun MuteLocalAudio(view: View?) {

        binding.ibtnAudio.isSelected = !binding.ibtnAudio.isSelected
        RtcManager.instance.getRtcEngine()!!.muteLocalAudioStream(binding.ibtnAudio.isSelected)
    }

    override fun onConnectionStateChanged(state: Int, i1: Int) {
        runOnUiThread {
            if (state == 4) {
                release(false)
                Toast.makeText(this@VideoActivity, "网络异常", Toast.LENGTH_SHORT).show()
            } else if (state == 5) {
                release(false)
                Toast.makeText(this@VideoActivity, "已在其他设备登录", Toast.LENGTH_SHORT).show()
            }
        }
    }

    override fun onMessageReceived(rtmMessage: RtmMessage, s: String) {
        runOnUiThread {
            try {
                val jsonObject = JSONObject(rtmMessage.text)
                val cmd = jsonObject.getString("Cmd")
                if (cmd == "EndCall") {
                    Toast.makeText(this@VideoActivity, "对方已挂断", Toast.LENGTH_SHORT).show()
                    release(false)
                } else if (cmd == "SwitchAudio") {
                    showAudioMode()
                }
            } catch (e: JSONException) {
                e.printStackTrace()
            }
        }
    }

    override fun onTokenExpired() {}

    //切换大小视图
    fun SwitchVideo(view: View?) {
        if (videoList.size < 2) {
            return
        }
        binding.rlRemoteVideo.removeViewAt(1)
        binding.rlLocalVideo.removeViewAt(1)
        val mLocalView = RtcEngine.CreateRendererView(this)
        if (videoList.containsKey("local")) {
            videoList.remove("local")
        }
        videoList["local"] = mLocalView
        RtcManager.instance.setupLocalVideo(mLocalView)
        if (binding.rlVideo.lastLeft != -1) {
            val marginLayoutParams = binding.rlLocalVideo.layoutParams as MarginLayoutParams
            marginLayoutParams.leftMargin = binding.rlVideo.lastLeft
            marginLayoutParams.topMargin = binding.rlVideo.lastTop
            binding.rlLocalVideo.layoutParams = marginLayoutParams
        }
        if (binding.rlLocalVideo.tag.toString() == "local") {
            binding.rlRemoteVideo.addView(videoList["local"], 1)
            binding.rlLocalVideo.addView(videoList["remote"], 1)
            binding.rlLocalVideo.tag = "remote"
        } else {
            binding.rlRemoteVideo.addView(videoList["remote"], 1)
            binding.rlLocalVideo.addView(videoList["local"], 1)
            binding.rlLocalVideo.tag = "local"
        }
    }

    fun RemoteViewOnclick(view: View?) {
        if (binding.rlBtnGroup.visibility == View.VISIBLE) {
            binding.rlBtnGroup.visibility = View.GONE
        } else {
            binding.rlBtnGroup.visibility = View.VISIBLE
        }
    }

    private fun Subscribe(peerId: String) {
        val list: MutableSet<String> = ArraySet()
        list.add(peerId)
        rtmClient!!.subscribePeersOnlineStatus(list, null)
    }

    fun UnSubscribe(peerId: String?) {
        val list: MutableSet<String?> = ArraySet()
        list.add(peerId)
        rtmClient!!.unsubscribePeersOnlineStatus(list, null)
    }

    fun AudioLeave(view: View?) {
        release(true)
    }

    fun AudioSwitchSpeak(view: View?) {
        binding.ibtnAudioSpeak.isSelected = !binding.ibtnAudioSpeak.isSelected
        RtcManager.instance.getRtcEngine()!!.setEnableSpeakerphone(binding.ibtnAudioSpeak.isSelected)
    }

    fun AudioMuteLocalAudio(view: View?) {
        binding.ibtnAudioAudio.isSelected = ! binding.ibtnAudioAudio.isSelected
        RtcManager.instance.getRtcEngine()!!.muteLocalAudioStream(binding.ibtnAudioAudio.isSelected)
    }

    fun showTipDialog(tips: String?) {
        MessageDialog.show(this, "提示", tips, "确定")
    }

    override fun onLocalInvitationCanceled(localInvitation: LocalInvitation) {
        runOnUiThread { //你取消了通话
            finish()
        }
    }

    override fun onLocalInvitationRefused(localInvitation: LocalInvitation, s: String) {
        runOnUiThread {
            if (!TextUtils.isEmpty(s)) {
                try {
                    val jsonObject = JSONObject(s)
                    if (jsonObject.has("Cmd")) {
                        val reason = jsonObject.getString("Cmd")
                        if (reason == "Calling") {
                            Toast.makeText(this@VideoActivity, "对方正忙", Toast.LENGTH_SHORT).show()
                        }
                    }
                } catch (e: JSONException) {
                    e.printStackTrace()
                }
            } else {
                Toast.makeText(this@VideoActivity, "对方拒绝通话", Toast.LENGTH_SHORT).show()
            }
            finish()
        }
    }

    override fun onLocalInvitationAccepted(local: LocalInvitation, s: String) {
        runOnUiThread { //返回给主叫：被叫已接受呼叫邀请。这时候还需要判断一下 对方是不是切换到语音接听了
            try {
                val jsonObject = JSONObject(s)
                callMode = jsonObject.getInt("Mode")
                binding.rlCallPre.visibility = View.GONE
                var watchParam:String? = null
                var vidCodec = ""
                var audCodec = ""
                if (!jsonObject.isNull("VidCodec")){
                    vidCodec =  jsonObject.getString("VidCodec")
                }
                if (!jsonObject.isNull("AudCodec")){
                    audCodec = jsonObject.getString("AudCodec")
                }
                if (!jsonObject.isNull("Parameters")){
                    watchParam = jsonObject.getString("Parameters")
                }
                var  isNotWatch = vidCodec.isNullOrEmpty()||vidCodec.contains("H264")||audCodec.isNullOrEmpty()||audCodec.contains("Opus")
                initEngineAndJoinChannel(isNotWatch, watchParam)
            } catch (e: JSONException) {
                e.printStackTrace()
            }

        }
    }

    override fun onLocalInvitationReceivedByPeer(var1: LocalInvitation) {}
    override fun onLocalInvitationFailure(localInvitation: LocalInvitation, i: Int) {
        runOnUiThread {
            RtcManager.instance.inMeeting = false
            Toast.makeText(this@VideoActivity, "对方未能接通呼叫", Toast.LENGTH_SHORT).show()
            finish()
        }
    }

    override fun onRemoteInvitationReceived(var1: RemoteInvitation) {
        runOnUiThread {
            if (isWaiting || isCalling) {
                val params = JSONObject()
                try {
                    params.put("Cmd", "Calling")
                } catch (e: JSONException) {
                    e.printStackTrace()
                }
                var1.response = params.toString()
                rtmCallManager!!.refuseRemoteInvitation(var1, null)
            }
        }
    }

    override fun onRemoteInvitationAccepted(remote: RemoteInvitation) {
        runOnUiThread { //返回给被叫：已经接受呼叫邀请
            binding.rlCallPre.visibility = View.GONE
            val jsonObject = JSONObject(remote.content)
            var watchParam:String? = null
            var vidCodec = ""
            var audCodec = ""
            if (!jsonObject.isNull("VidCodec")){
                vidCodec =  jsonObject.getString("VidCodec")
            }
            if (!jsonObject.isNull("AudCodec")){
                audCodec = jsonObject.getString("AudCodec")
            }
            if (!jsonObject.isNull("Parameters")){
                watchParam = jsonObject.getString("Parameters")
            }
            var  isApp = vidCodec.isNullOrEmpty()||vidCodec.contains("H264")||audCodec.isNullOrEmpty()||audCodec.contains("Opus")
            initEngineAndJoinChannel(isApp, watchParam)
        }
    }

    override fun onRemoteInvitationRefused(remoteInvitation: RemoteInvitation) {
        runOnUiThread(Runnable {
            //你拒绝了对方
            if (isCalling || isWaiting) { //正在通话中

            } else {
                RtcManager.instance.inMeeting = false
                UnSubscribe(remoteInvitation.callerId)
                finish()
            }
        })
    }

    override fun onRemoteInvitationCanceled(remoteInvitation: RemoteInvitation) {
        runOnUiThread {
            RtcManager.instance.inMeeting = false
            Toast.makeText(this@VideoActivity, "对方已取消呼叫", Toast.LENGTH_SHORT).show()
            UnSubscribe(remoteInvitation.callerId)
            finish()
        }
    }

    override fun onRemoteInvitationFailure(var1: RemoteInvitation, var2: Int) {}
    override fun onPeersOnlineStatusChanged(map: Map<String, Int>) {
        runOnUiThread {
            for ((mapKey, mapValue) in map) {
                Log.d("订阅", "订阅的人：" + mapKey + "状态改变回调" + if (mapValue == 0) "在线" else "不在线")
            }
            if (map.containsKey(remoteUserId)) {
                if (map[remoteUserId] != 0) { //离线了
                    //如果正在呼叫界面
                    if (isWaiting) {
                        if (isCall) { //如果是主动呼叫
                            rtmCallManager!!.cancelLocalInvitation(localInvitation!!, null)
                        } else {
                            rtmCallManager!!.refuseRemoteInvitation(remoteInvitation!!, null)
                        }
                    }
                    UnSubscribe(remoteUserId)
                    RtcManager.instance.inMeeting = false
                    Toast.makeText(this@VideoActivity, "对方已离线", Toast.LENGTH_SHORT).show()
                    finish()
                }
            }
        }
    }

    fun AudioSmall(view: View?) {
        val version = Build.VERSION.SDK_INT
        if (version < 21) {
            showLongToast("暂不支持该设备")
            return
        }
        if (!checkPermission(this@VideoActivity)) {
            requestPermission(this@VideoActivity, object : OnPermissionResult {
                override fun permissionResult(b: Boolean) {
                    if (!b) {
                        showLongToast("请打开悬浮窗权限")
                    }
                }
            })
            return
        }

        val activityManager = getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
        activityManager.moveTaskToFront(if (callApp.p2pMainActivityTaskId == -1) callApp.indexActivityTaskId else callApp.p2pMainActivityTaskId, ActivityManager.MOVE_TASK_NO_USER_ACTION)
        isSmall = true
        RtcManager.instance.windowMode = true
        EasyFloat.with(this)
                .setShowPattern(ShowPattern.ALL_TIME)
                .setDragEnable(true)
                .setGravity(Gravity.RIGHT)
                .setSidePattern(SidePattern.RESULT_SIDE)
                .setLayout(R.layout.float_audio_window, OnInvokeView { view ->
                    val rlRoot = view.findViewById<RelativeLayout>(R.id.rl_root)
                    val chr = view.findViewById<Chronometer>(R.id.chr_time)
                    chr.base = binding.chronometer.base
                    chr.start()
                    rlRoot.setOnClickListener(View.OnClickListener {
                        dismissFloatWindow()
                        chr.stop()
                        if (callApp.p2pMeetingActivityTaskId == -1) {
                            return@OnClickListener
                        }
                        val intent = Intent(CallApp.callApp.curActivity, VideoActivity::class.java)
                        CallApp.callApp.curActivity?.startActivity(intent)
//                        val activityManager = getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
//                        activityManager.moveTaskToFront(callApp.p2pMainActivityTaskId, ActivityManager.MOVE_TASK_NO_USER_ACTION)
//                        activityManager.moveTaskToFront(callApp.p2pMeetingActivityTaskId, ActivityManager.MOVE_TASK_NO_USER_ACTION)
                    })
                }).registerCallbacks(object : OnFloatCallbacks {
                    override fun createdResult(b: Boolean, s: String?, view: View?) {}
                    override fun show(view: View) {}
                    override fun hide(view: View) {}
                    override fun dismiss() {}
                    override fun touchEvent(view: View, motionEvent: MotionEvent) {}
                    override fun drag(view: View, motionEvent: MotionEvent) {}
                    override fun dragEnd(view: View) {}
                }).show()
    }

    fun SwitchAudioInVideo(view: View?) {
        val jsonObject = JSONObject()
        try {
            jsonObject.put("Cmd", "SwitchAudio")
        } catch (e: JSONException) {
            e.printStackTrace()
        }
        val message = rtmClient!!.createMessage(jsonObject.toString())
        rtmClient?.sendMessageToPeer(remoteUserId, message, SendMessageOptions(), object : ResultCallback<Void?> {
            override fun onSuccess(var1: Void?) {
                runOnUiThread { showAudioMode() }
            }

            override fun onFailure(var1: ErrorInfo) {
                runOnUiThread { Toast.makeText(this@VideoActivity, "切换失败", Toast.LENGTH_SHORT).show() }
            }
        })
    }

    //切到语音模式
    fun showAudioMode() {
        if (binding.flAudioGroup.visibility == View.GONE) { //防止2个人一起切换的时候 重复走
            binding.flVideoGroup.visibility = View.GONE
            binding.flAudioGroup.visibility = View.VISIBLE
            binding.tvRemoteAudioUser.text = remoteUserId
            RtcManager.instance.getRtcEngine()!!.disableVideo()
            RtcManager.instance.getRtcEngine()!!.setEnableSpeakerphone(false)
            if (EasyFloat.appFloatIsShow()){
                dismissFloatWindow()
                if (callApp.p2pMeetingActivityTaskId == -1) {
                    return
                }
                val intent = Intent(CallApp.callApp.curActivity, VideoActivity::class.java)
                CallApp.callApp.curActivity?.startActivity(intent)
            }

            binding.rlVideo.removeAllViews()
            callMode = Constans.AUDIO_MODE
            Toast.makeText(this@VideoActivity, "声音将通过听筒播放", Toast.LENGTH_SHORT).show()
        }
    }

    fun HangUp(view: View?) {
        RtcManager.instance.inMeeting = false
        isWaiting = false
        isCalling = false
        if (isCall) {
            rtmCallManager!!.cancelLocalInvitation(localInvitation!!, null)
        } else {
            rtmCallManager!!.refuseRemoteInvitation(remoteInvitation!!, null)
        }

    }

    fun Accept(view: View?) { //视频模式下的同意按钮
        val jsonObject = JSONObject()
        try {
            jsonObject.put("Mode", callMode) //收到的是什么类型就回什么类型
            jsonObject.put("Conference", false)
            jsonObject.put("UserData", "")
            jsonObject.put("SipData", "")
        } catch (e: JSONException) {
            e.printStackTrace()
        }
        remoteInvitation!!.response = jsonObject.toString()
        rtmCallManager!!.acceptRemoteInvitation(remoteInvitation!!, null)
    }

    private fun Back() {
        if (binding.rlCallPre!!.visibility == View.VISIBLE) {
            if (isCall) {
                rtmCallManager!!.cancelLocalInvitation(localInvitation!!, object : ResultCallback<Void?> {
                    override fun onSuccess(var1: Void?) {}
                    override fun onFailure(var1: ErrorInfo) {}
                })
            } else {
                rtmCallManager!!.refuseRemoteInvitation(remoteInvitation!!, object : ResultCallback<Void?> {
                    override fun onSuccess(aVoid: Void?) {}
                    override fun onFailure(errorInfo: ErrorInfo) {}
                })
            }
        } else {
            finish()
        }
    }

    fun SwitchAudio(view: View?) { //这个按钮可见 说明是视频模式 点击这个按钮说明被叫转语音模式
        callMode = Constans.AUDIO_MODE
        val jsonObject = JSONObject()
        try {
            jsonObject.put("Mode", callMode) //收到的是什么类型就回什么类型
            jsonObject.put("Conference", false)
            jsonObject.put("UserData", "")
            jsonObject.put("SipData", "")
        } catch (e: JSONException) {
            e.printStackTrace()
        }
        remoteInvitation!!.response = jsonObject.toString()
        rtmCallManager!!.acceptRemoteInvitation(remoteInvitation!!, null)
        binding.rlVideoPreview!!.removeAllViews()
        RtcManager.instance.getRtcEngine()!!.disableVideo()
        stopRing()
    }

    override fun onStop() { //单独处理这个页面
        super.onStop()
        KeepAliveService.start(this)
    }

    companion object {
        private val TAG = VideoActivity::class.java.simpleName
        private const val PERMISSION_REQ_ID = 22
        private val REQUESTED_PERMISSIONS = arrayOf(
                Manifest.permission.RECORD_AUDIO,
                Manifest.permission.CAMERA,
                Manifest.permission.WRITE_EXTERNAL_STORAGE
        )
    }
}