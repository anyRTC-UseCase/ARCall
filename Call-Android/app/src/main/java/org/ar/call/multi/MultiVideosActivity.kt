package org.ar.call.multi

import android.app.ActivityManager
import android.content.Context
import android.content.Intent
import android.media.MediaPlayer
import android.os.Build
import android.os.Bundle
import android.view.Gravity
import android.view.MotionEvent
import android.view.View
import android.view.WindowManager
import android.widget.*
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.gyf.immersionbar.ImmersionBar
import com.kongzue.dialog.v3.CustomDialog
import com.lzf.easyfloat.EasyFloat
import com.lzf.easyfloat.enums.ShowPattern
import com.lzf.easyfloat.enums.SidePattern
import com.lzf.easyfloat.interfaces.OnFloatCallbacks
import com.lzf.easyfloat.interfaces.OnInvokeView
import com.lzf.easyfloat.interfaces.OnPermissionResult
import com.lzf.easyfloat.permission.PermissionUtils.checkPermission
import com.lzf.easyfloat.permission.PermissionUtils.requestPermission
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch
import org.ar.call.*
import org.ar.call.R
import org.ar.call.RtcManager.Companion.instance
import org.ar.call.databinding.ActivityMultiVideosBinding
import org.ar.call.p2p.VideoActivity
import org.ar.call.utils.Constans
import org.ar.call.utils.KeepAliveService
import org.ar.call.utils.SpUtil
import org.ar.rtc.Constants
import org.ar.rtc.IRtcEngineEventHandler
import org.ar.rtm.*
import org.json.JSONArray
import org.json.JSONObject
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine


class MultiVideosActivity : BaseActivity(), RtmChannelListener{

    private var player: MediaPlayer? = null
    private lateinit var binding: ActivityMultiVideosBinding

    private val mineUserId =CallApp.callApp.userId
    private var callArray: ArrayList<String>? = null
    private var channelId: String = ""
    private var isCall: Boolean = false

    private var rtmChannel: RtmChannel? = null
    private val rtmClient = RtmManager.instance.getRtmClient()
    private val rtmCallManager = RtmManager.instance.getCallManager()
    private val localInvitationList: ArrayList<LocalInvitation> = ArrayList() //主叫需要呼叫的

    private lateinit var memberAdapter: MemberAdapter
    private val mainScope = MainScope()


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        binding = ActivityMultiVideosBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
        ImmersionBar.with(this).statusBarColor(R.color.video_title).statusBarDarkFont(false, 0.2f).keyboardEnable(true).init()
      

        callArray = intent.getStringArrayListExtra("callArray")
        channelId = intent.getStringExtra("channelId")
        isCall = intent.getBooleanExtra("isCall", false)
        joinRTMChannel(channelId)
        RtmManager.instance.registerChannelEvent(this)
        initRTC()

        memberAdapter = MemberAdapter()
        binding.rvVideo.layoutManager = GridLayoutManager(this, 3)

        binding.rvVideo.adapter = memberAdapter

        memberAdapter.addData(RtcMember.Factory.create(mineUserId).also {
            it.isWaiting = false
            it.isOpenAudio = true
            it.isOpenVideo = true
        })
        callArray?.forEach {
            memberAdapter.addData(RtcMember.Factory.create(it))//将所有人的视图添加
            if (isCall) {//如果是主叫 呼叫所有人
                startRing()
                val content = intent.getStringExtra("content")
                val localInvitation = rtmCallManager?.createLocalInvitation(it)
                localInvitation?.content = content
                localInvitationList?.add(localInvitation!!)
                rtmCallManager?.sendLocalInvitation(localInvitation!!, null)
            }
        }

    }

    fun initRTC() {//初始化RTC
        RtcManager.instance.enableVideo()
        RtcManager.instance.getRtcEngine()?.joinChannel("", channelId, "", mineUserId)
        binding.btnSpeak.isSelected = !binding.btnSpeak.isSelected
        RtcManager.instance.getRtcEngine()?.setEnableSpeakerphone(binding.btnSpeak.isSelected)
    }

    private fun joinRTMChannel(channelId: String) {//初始化RTM
        rtmChannel = RtmManager.instance.createChannel(channelId)
        rtmChannel?.join(null)
    }


    private val rtcEvent: IRtcEngineEventHandler = object : IRtcEngineEventHandler() {

        override fun onJoinChannelSuccess(channel: String?, uid: String?, elapsed: Int) {
            super.onJoinChannelSuccess(channel, uid, elapsed)
            runOnUiThread {
                RtcManager.instance.inMeeting = true
                RtcManager.instance.callMode = Constans.MEETING_MODE
                memberAdapter.getItem(0)?.canvas?.let { RtcManager.instance.setupLocalVideo(it) }
                val isOpenCamera = SpUtil.getBoolean(Constans.KEY_OPEN_CAMERA, true)
                val isOpenAudio = SpUtil.getBoolean(Constans.KEY_OPEN_MIC, true)
                if (!isOpenCamera) {
                    RtcManager.instance.getRtcEngine()?.muteLocalVideoStream(true)
                    binding.btnVideo.isSelected = true
                    memberAdapter.getItem(0)?.isOpenVideo = true
                    memberAdapter.getViewByPosition(binding.rvVideo, 0, R.id.iv_video_close)!!.visibility = (if (binding.btnVideo.isSelected) {
                        View.VISIBLE
                    } else {
                        View.GONE
                    })
                }
                if (!isOpenAudio) {
                    RtcManager.instance.getRtcEngine()?.muteLocalAudioStream(true)
                    binding.btnAudio.isSelected = true
                    memberAdapter.getItem(0)?.isOpenAudio = false
                    memberAdapter.getViewByPosition(binding.rvVideo, 0, R.id.iv_audio)!!.setBackgroundResource(if (binding.btnAudio.isSelected) {
                        R.drawable.mic_close
                    } else {
                        R.drawable.mic_open
                    })
                }

            }

        }


        override fun onFirstRemoteVideoDecoded(uid: String?, width: Int, height: Int, elapsed: Int) {
            super.onFirstRemoteVideoDecoded(uid, width, height, elapsed)
            runOnUiThread {
                memberAdapter.data.forEachIndexed { index, rtcMember ->
                    if (rtcMember.userId == uid) {
                        rtcMember.canvas?.let { RtcManager.instance.setupRemoteVideo(it) }
                        memberAdapter.getItem(index)?.isWaiting = false
                        memberAdapter.getItem(index)?.isOpenAudio = true
                        memberAdapter.getViewByPosition(binding.rvVideo, index, R.id.iv_audio)!!.visibility = View.VISIBLE
                        return@forEachIndexed
                    }
                }

            }
        }

        override fun onUserJoined(uid: String?, elapsed: Int) {
            super.onUserJoined(uid, elapsed)
            runOnUiThread {
                stopRing()
                binding.tvWaiting.visibility = View.GONE
                binding.chronometer.visibility = View.VISIBLE
                binding.chronometer.start()
                memberAdapter.data.forEachIndexed { index, rtcMember ->
                    if (rtcMember.userId == uid) {
                        if (memberAdapter.getViewByPosition(binding.rvVideo, index, R.id.rl_wait) != null) {
                            memberAdapter.getViewByPosition(binding.rvVideo, index, R.id.rl_wait)!!.visibility = View.GONE
                        }
                        return@forEachIndexed
                    }
                }
            }
        }

        override fun onRemoteAudioStateChanged(uid: String?, state: Int, reason: Int, elapsed: Int) {
            super.onRemoteAudioStateChanged(uid, state, reason, elapsed)
            runOnUiThread {

                if (reason == Constants.REMOTE_AUDIO_REASON_REMOTE_MUTED || reason == Constants.REMOTE_AUDIO_REASON_REMOTE_UNMUTED) {
                    memberAdapter.data.forEachIndexed { index, rtcMember ->
                        if (rtcMember.userId == uid) {
                            if (reason == Constants.REMOTE_AUDIO_REASON_REMOTE_MUTED) {
                                memberAdapter.getItem(index)?.isOpenAudio = false
                                memberAdapter.getViewByPosition(binding.rvVideo, index, R.id.iv_audio)!!.setBackgroundResource(R.drawable.mic_close)
                            } else if (reason == Constants.REMOTE_AUDIO_REASON_REMOTE_UNMUTED) {
                                memberAdapter.getItem(index)?.isOpenAudio = true
                                memberAdapter.getViewByPosition(binding.rvVideo, index, R.id.iv_audio)!!.setBackgroundResource(R.drawable.mic_open)
                            }
                            return@forEachIndexed
                        }
                    }
                }
            }
        }

        override fun onRemoteVideoStateChanged(uid: String?, state: Int, reason: Int, elapsed: Int) {
            super.onRemoteVideoStateChanged(uid, state, reason, elapsed)
            runOnUiThread {
                if (reason == Constants.REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED || reason == Constants.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED) {
                    memberAdapter.data.forEachIndexed { index, rtcMember ->
                        if (rtcMember.userId == uid) {
                            if (reason == Constants.REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED) {
                                memberAdapter.getItem(index)?.isOpenVideo = false
                                memberAdapter.getViewByPosition(binding.rvVideo, index, R.id.iv_video_close)!!.visibility = View.VISIBLE
                            } else if (reason == Constants.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED) {
                                memberAdapter.getItem(index)?.isOpenVideo = true
                                memberAdapter.getViewByPosition(binding.rvVideo, index, R.id.iv_video_close)!!.visibility = View.GONE
                            }
                            return@forEachIndexed
                        }
                    }
                }
            }
        }

    }

    override fun onMemberCountUpdated(var1: Int) {

    }

    override fun onAttributesUpdated(var1: MutableList<RtmChannelAttribute>?) {
    }

    override fun onMessageReceived(var1: RtmMessage?, var2: RtmChannelMember?) {
    }

    override fun onMemberJoined(var1: RtmChannelMember?) {
        runOnUiThread {
            if (!callArray?.contains(var1?.userId.toString())!!) {
                memberAdapter.addData(RtcMember.Factory.create(var1?.userId.toString()))
                callArray?.add(var1?.userId.toString())//邀请的人可能是
            }
        }

    }

    override fun onMemberLeft(var1: RtmChannelMember?) {
        runOnUiThread {
            removeMember(var1?.userId.toString())
        }
    }

    override fun onLocalInvitationAccepted(var1: LocalInvitation, var2: String) {
        super.onLocalInvitationCanceled(var1)
        localInvitationList.remove(var1)//意味着呼叫流程结束 挂断的时候不需要再取消了
    }

    override fun onLocalInvitationCanceled(var1: LocalInvitation) {
        super.onLocalInvitationCanceled(var1)
        localInvitationList.remove(var1)
    }

    override fun onLocalInvitationFailure(var1: LocalInvitation, var2: Int) {
        super.onLocalInvitationFailure(var1, var2)
        localInvitationList.remove(var1)
    }
    override fun onLocalInvitationRefused(var1: LocalInvitation, var2: String) {
        super.onLocalInvitationRefused(var1, var2)
        runOnUiThread {
            toast("${var1?.calleeId}拒绝了呼叫邀请")
            removeMember(var1?.calleeId.toString())
            localInvitationList.remove(var1)
        }
    }



    fun toast(tip: String) {
        Toast.makeText(this, tip, Toast.LENGTH_SHORT).show()
    }

    private fun removeMember(userId: String) {
        var leftIndex = -1
        memberAdapter.data.forEachIndexed { index, rtcMember ->
            if (userId == rtcMember.userId) {
                rtcMember.release()
                leftIndex = index
            }
        }
        if (leftIndex != -1) {
            memberAdapter.remove(leftIndex)
        }
        if (callArray?.contains(userId)!!) {
            callArray?.remove(userId)
        }
        if (memberAdapter.data.size == 1) {//only self
            RtcManager.instance.inMeeting = false
            toast("通话已结束")
            dismissFloatWindow()
            finish()
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        KeepAliveService.stop(this)
        stopRing()
        mainScope.cancel()
        RtcManager.instance.inMeeting = false
        RtcManager.instance.callMode = -1
        RtcManager.instance.unRegisterRtcEvent(rtcEvent)
        RtcManager.instance.getRtcEngine()?.leaveChannel()
        RtcManager.instance.disableVideo()
        RtmManager.instance.releaseChannel()
        RtmManager.instance.unRegisterChannelEvent(this)
    }

    override fun onResume() {
        super.onResume()
        KeepAliveService.stop(this)
        RtcManager.instance.registerRtcEvent(rtcEvent)
    }

    fun switchCamera(view: View) {
        RtcManager.instance.getRtcEngine()?.switchCamera()
    }

    fun hangUp(view: View) {
        if (isCall) {//如果是主叫 需要把呼叫的一些对象取消 否则再次无法呼叫
            localInvitationList?.forEach {
                rtmCallManager?.cancelLocalInvitation(it, null)
            }
        }
        memberAdapter.data.forEach {
            it.release()
        }
        RtcManager.instance.inMeeting = false
        finish()
    }

    fun muteAudio(view: View) {
        binding.btnAudio.isSelected = !binding.btnAudio.isSelected
        RtcManager.instance.getRtcEngine()?.muteLocalAudioStream(binding.btnAudio.isSelected)
        memberAdapter.getItem(0)?.isOpenAudio = !binding.btnAudio.isSelected
        memberAdapter.getViewByPosition(binding.rvVideo, 0, R.id.iv_audio)!!.setBackgroundResource(if (binding.btnAudio.isSelected) {
            R.drawable.mic_close
        } else {
            R.drawable.mic_open
        })
    }

    fun openSpeak(view: View) {
        binding.btnSpeak.isSelected = !binding.btnSpeak.isSelected
        RtcManager.instance.getRtcEngine()?.setEnableSpeakerphone(binding.btnSpeak.isSelected)
    }

    fun muteVideo(view: View) {
        binding.btnVideo.isSelected = !binding.btnVideo.isSelected
        RtcManager.instance.getRtcEngine()?.muteLocalVideoStream(binding.btnVideo.isSelected)
        memberAdapter.getItem(0)?.isOpenVideo = !binding.btnVideo.isSelected
        memberAdapter.getViewByPosition(binding.rvVideo, 0, R.id.iv_video_close)!!.visibility = (if (binding.btnVideo.isSelected) {
            View.VISIBLE
        } else {
            View.GONE
        })
    }

    override fun onRemoteInvitationReceived(remote: RemoteInvitation) {
        super.onRemoteInvitationReceived(remote)
        runOnUiThread {
            val param = JSONObject().apply {
                put("Cmd", "Calling")
            }
            remote?.response = param.toString()
            remote?.let {
                rtmCallManager?.refuseRemoteInvitation(it, null)
            }
        }
    }



    fun Invite(view: View) {
        CustomDialog.show(this, R.layout.dialog_invite) { dialog, v ->
            val etId = v.findViewById<org.ar.call.weight.VerificationCodeView>(R.id.et_invite)
            v.findViewById<TextView>(R.id.tv_invite_confirm).setOnClickListener {
                if (callArray?.contains(etId.inputContent)!!) {
                    toast("用户已在通话中")
                    return@setOnClickListener
                }
                mainScope.launch() {
                    val isOnlne = queryOnlineMember(etId.inputContent)
                    if (!isOnlne) {
                        toast("该用户不在线")
                    } else {
                        memberAdapter.addData(RtcMember.Factory.create(etId.inputContent))
                        callArray?.add(etId.inputContent)
                        val params = JSONObject()
                        val arr = JSONArray()
                        arr.put(mineUserId)
                        params.put("Mode", 0)
                        params.put("Conference", true)
                        params.put("ChanId", channelId)
                        callArray?.forEach {
                            arr.put(it)
                        }
                        params.put("UserData", arr)
                        val localInvitation = rtmCallManager?.createLocalInvitation(etId.inputContent)
                        localInvitation?.content = params.toString()
                        localInvitationList?.add(localInvitation!!)
                        rtmCallManager?.sendLocalInvitation(localInvitation!!, null)
                        dialog.doDismiss()
                    }

                }


            }
            v.findViewById<TextView>(R.id.tv_invite_cancel).setOnClickListener {
                dialog.doDismiss()
            }
        }
    }

    private suspend fun queryOnlineMember(userId: String): Boolean = suspendCoroutine { continuation ->
        val query = setOf(userId)
        rtmClient?.queryPeersOnlineStatus(query, object : ResultCallback<MutableMap<String, Boolean>> {
            override fun onSuccess(var1: MutableMap<String, Boolean>?) {
                var1?.forEach {
                    continuation.resume(it.value)
                }

            }

            override fun onFailure(var1: ErrorInfo?) {
                continuation.resume(false)
            }
        })

    }

    private fun startRing() {
        try {
            if (player == null) {
                player = MediaPlayer.create(this, R.raw.video_request)
                player!!.isLooping = true
                player!!.start()
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    /**
     * 停止播放铃音
     */
    private fun stopRing() {
        try {
            if (player != null) {
                player!!.stop()
                player!!.release()
                player = null
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    fun small(view: View) {
        if (Build.VERSION.SDK_INT < 21) {
            toast("不支持该设备")
            return
        }
        if (!checkPermission(this)) {
            requestPermission(this, object : OnPermissionResult {
                override fun permissionResult(b: Boolean) {
                    if (!b) {
                        toast("请打开悬浮窗权限")
                    }
                }
            })
            return
        }
        instance.windowMode = true
        val activityManager = getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
        activityManager.moveTaskToFront(CallApp.callApp.multiMainActivityTaskId, ActivityManager.MOVE_TASK_NO_USER_ACTION)
        EasyFloat.with(this)
                .setShowPattern(ShowPattern.FOREGROUND)
                .setDragEnable(true)
                .setGravity(Gravity.RIGHT)
                .setSidePattern(SidePattern.RESULT_SIDE)
                .setLayout(R.layout.float_multi_video_window, OnInvokeView { view ->
                    val rlRoot = view.findViewById<RelativeLayout>(R.id.rl_multi_root)
                    val textView = view.findViewById<TextView>(R.id.text_multi_wait)
                    val chr = view.findViewById<Chronometer>(R.id.chr_multi_time)
                    if (binding.chronometer.visibility == View.VISIBLE) {
                        textView.visibility = View.GONE
                        chr.visibility = View.VISIBLE
                        chr.base = binding.chronometer.base
                        chr.start()
                    } else {
                        textView.visibility = View.VISIBLE
                        chr.visibility = View.GONE
                    }
                    rlRoot.setOnClickListener {
                        dismissFloatWindow()
                        chr.stop()
                        if (CallApp.callApp.multiMeetingActivityTaskId == -1) {
                            return@setOnClickListener
                        }
                        val intent = Intent(CallApp.callApp.curActivity, MultiVideosActivity::class.java)
                        CallApp.callApp.curActivity?.startActivity(intent)
//                        val activityManager = getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
//                        activityManager.moveTaskToFront(CallApp.callApp.multiMainActivityTaskId, ActivityManager.MOVE_TASK_NO_USER_ACTION)
//                        activityManager.moveTaskToFront(CallApp.callApp.multiMeetingActivityTaskId, ActivityManager.MOVE_TASK_NO_USER_ACTION)


                    }
                }).registerCallbacks(object : OnFloatCallbacks {
                    override fun createdResult(b: Boolean, s: String?, view: View?) {}
                    override fun show(view: View) {

                    }
                    override fun hide(view: View) {}
                    override fun dismiss() {
                    }
                    override fun touchEvent(view: View, motionEvent: MotionEvent) {}
                    override fun drag(view: View, motionEvent: MotionEvent) {}
                    override fun dragEnd(view: View) {}
                }).show()
    }

    private fun dismissFloatWindow(){
        instance.windowMode = false
        if (EasyFloat.appFloatIsShow()){
            EasyFloat.dismissAppFloat()
        }
    }
    override fun onStop() {
        super.onStop()
        KeepAliveService.start(this)
    }



}