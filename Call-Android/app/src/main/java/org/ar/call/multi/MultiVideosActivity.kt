package org.ar.call.multi

import android.annotation.TargetApi
import android.app.ActivityManager
import android.content.Intent
import android.media.MediaPlayer
import android.os.Build
import android.os.Bundle
import android.os.Looper
import android.util.Log
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
import kotlinx.coroutines.*
import org.ar.call.BaseActivity
import org.ar.call.CallApplication
import org.ar.call.R
import org.ar.call.utils.SpUtil
import org.ar.rtc.Constants
import org.ar.rtc.IRtcEngineEventHandler
import org.ar.rtc.RtcEngine
import org.ar.rtm.*
import org.json.JSONArray
import org.json.JSONObject
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine


class MultiVideosActivity : BaseActivity(), RtmChannelListener {

    private var player:MediaPlayer? =null
    private lateinit var rvVideo: RecyclerView
    private lateinit var tvWaiting: TextView
    private lateinit var btnInvite: ImageView
    private lateinit var btnAudio: Button
    private lateinit var btnVideo: Button
    private lateinit var btnSpeak: Button
    private lateinit var btnHangUp: Button
    private lateinit var btnSwitch: Button
    private lateinit var chronometer: Chronometer


    private val mineUserId = CallApplication.the().userId
    private var callArray: ArrayList<String>? = null
    private var channelId: String = ""
    private var isCall: Boolean = false

    private var rtcEngine: RtcEngine? = null
    private var rtmChannel: RtmChannel? = null
    private val rtmClient = CallApplication.the().callManager.rtmClient
    private val rtmCallManager = CallApplication.the().callManager.rtmCallManager
    private val localInvitationList: ArrayList<LocalInvitation>? = ArrayList() //主叫需要呼叫的

    private lateinit var memberAdapter: MemberAdapter
    private val mainScope = MainScope()



    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        setContentView(R.layout.activity_multi_videos)
        ImmersionBar.with(this).statusBarColor(R.color.video_title).statusBarDarkFont(false, 0.2f).keyboardEnable(true).init()
        rvVideo = findViewById(R.id.rv_video)
        btnInvite = findViewById(R.id.btn_invite)
        btnAudio = findViewById(R.id.btn_audio)
        btnSpeak = findViewById(R.id.btn_speak)
        btnVideo = findViewById(R.id.btn_video)
        btnHangUp = findViewById(R.id.btn_hang_up)
        btnSwitch = findViewById(R.id.btn_switch)
        tvWaiting = findViewById(R.id.tv_waiting)
        chronometer = findViewById(R.id.chronometer)

        callArray = intent.getStringArrayListExtra("callArray")
        channelId = intent.getStringExtra("channelId")
        isCall = intent.getBooleanExtra("isCall", false)
        joinRTMChannel(channelId)
        CallApplication.the().callManager.registerChannelListener(this)
        initRTC()

        memberAdapter = MemberAdapter()
        rvVideo.layoutManager = GridLayoutManager(this, 3)

        rvVideo.adapter = memberAdapter

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
                val localInvitation = rtmCallManager.createLocalInvitation(it)
                localInvitation?.content = content
                localInvitationList?.add(localInvitation!!)
                rtmCallManager.sendLocalInvitation(localInvitation!!, null)
            }
        }

    }

    fun initRTC() {//初始化RTC
        rtcEngine = RtcEngine.create(this, CallApplication.RTC_APPID, rtcEvent)
        rtcEngine?.enableVideo()
        rtcEngine?.joinChannel("", channelId, "", mineUserId)
        btnSpeak.isSelected = !btnSpeak.isSelected
        rtcEngine?.setEnableSpeakerphone(btnSpeak.isSelected)
    }

    private fun joinRTMChannel(channelId: String) {//初始化RTM
        rtmChannel = CallApplication.the().callManager.createChannel(channelId)
        rtmChannel?.join(null)
    }


    private val rtcEvent: IRtcEngineEventHandler = object : IRtcEngineEventHandler() {

        override fun onJoinChannelSuccess(channel: String?, uid: String?, elapsed: Int) {
            super.onJoinChannelSuccess(channel, uid, elapsed)
            runOnUiThread {
                rtcEngine?.setupLocalVideo(memberAdapter.getItem(0)?.canvas)
                val isOpenCamera = SpUtil.getBoolean("isOpenCamera", true)
                val isOpenAudio = SpUtil.getBoolean("isOpenMicrophone", true)
                if (!isOpenCamera){
                    rtcEngine?.muteLocalVideoStream(true)
                    btnVideo.isSelected = true
                    memberAdapter.getItem(0)?.isOpenVideo=true
                    memberAdapter.getViewByPosition(rvVideo, 0, R.id.iv_video_close)!!.visibility = (if (btnVideo.isSelected) {
                        View.VISIBLE
                    } else {
                        View.GONE
                    })
                }
                if (!isOpenAudio){
                    rtcEngine?.muteLocalAudioStream(true)
                    btnAudio.isSelected = true
                    memberAdapter.getItem(0)?.isOpenAudio=false
                    memberAdapter.getViewByPosition(rvVideo, 0, R.id.iv_audio)!!.setBackgroundResource(if (btnAudio.isSelected) {
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
                stopRing()
                tvWaiting.visibility = View.GONE
                chronometer.visibility = View.VISIBLE
                chronometer.start()
                memberAdapter.data.forEachIndexed { index, rtcMember ->
                    if (rtcMember.userId == uid) {
                        rtcEngine?.setupRemoteVideo(rtcMember.canvas)
                        memberAdapter.getItem(index)?.isWaiting=false
                        memberAdapter.getItem(index)?.isOpenAudio=true

                        if (memberAdapter.getViewByPosition(rvVideo, index, R.id.rl_wait) != null) {
                            memberAdapter.getViewByPosition(rvVideo, index, R.id.rl_wait)!!.visibility = View.GONE
                            memberAdapter.getViewByPosition(rvVideo, index, R.id.iv_audio)!!.visibility = View.VISIBLE
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
                                memberAdapter.getItem(index)?.isOpenAudio=false
                                memberAdapter.getViewByPosition(rvVideo, index, R.id.iv_audio)!!.setBackgroundResource(R.drawable.mic_close)
                            } else if (reason == Constants.REMOTE_AUDIO_REASON_REMOTE_UNMUTED) {
                                memberAdapter.getItem(index)?.isOpenAudio=true
                                memberAdapter.getViewByPosition(rvVideo, index, R.id.iv_audio)!!.setBackgroundResource(R.drawable.mic_open)
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
                                memberAdapter.getItem(index)?.isOpenVideo=false
                                memberAdapter.getViewByPosition(rvVideo, index, R.id.iv_video_close)!!.visibility = View.VISIBLE
                            } else if (reason == Constants.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED) {
                                memberAdapter.getItem(index)?.isOpenVideo=true
                                memberAdapter.getViewByPosition(rvVideo, index, R.id.iv_video_close)!!.visibility = View.GONE
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
            if (memberAdapter.data.size == 1) {//only self
                toast("通话已结束")
                finish()
            }
        }
    }

    fun toast(tip: String) {
        Toast.makeText(this, tip, Toast.LENGTH_SHORT).show()
    }

    fun removeMember(userId: String){
        var leftIndex = -1
        memberAdapter.data.forEachIndexed { index, rtcMember ->
            if (userId== rtcMember.userId) {
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
    }

    override fun onDestroy() {
        super.onDestroy()
        stopRing()
        mainScope.cancel()
        CallApplication.the().callManager.releaseChannel()
        RtcEngine.destroy()
        CallApplication.the().callManager.unregisterChannelListener(this)
    }

    fun switchCamera(view: View) {
        rtcEngine?.switchCamera()
    }

    fun hangUp(view: View) {
        if (isCall) {//如果是主叫 需要把呼叫的一些对象取消 否则再次无法呼叫
            localInvitationList?.forEach {
                rtmCallManager.cancelLocalInvitation(it, null)
            }
        }
        memberAdapter.data.forEach {
            it.release()
        }
        rtcEngine?.leaveChannel()
        finish()
    }

    fun muteAudio(view: View) {
        btnAudio.isSelected = !btnAudio.isSelected
        rtcEngine?.muteLocalAudioStream(btnAudio.isSelected)
        memberAdapter.getItem(0)?.isOpenAudio=!btnAudio.isSelected
        memberAdapter.getViewByPosition(rvVideo, 0, R.id.iv_audio)!!.setBackgroundResource(if (btnAudio.isSelected) {
            R.drawable.mic_close
        } else {
            R.drawable.mic_open
        })
    }

    fun openSpeak(view: View) {
        btnSpeak.isSelected = !btnSpeak.isSelected
        rtcEngine?.setEnableSpeakerphone(btnSpeak.isSelected)
    }

    fun muteVideo(view: View) {
        btnVideo.isSelected = !btnVideo.isSelected
        rtcEngine?.muteLocalVideoStream(btnVideo.isSelected)
        memberAdapter.getItem(0)?.isOpenVideo=!btnVideo.isSelected
        memberAdapter.getViewByPosition(rvVideo, 0, R.id.iv_video_close)!!.visibility = (if (btnVideo.isSelected) {
            View.VISIBLE
        } else {
            View.GONE
        })
    }

    override fun onRemoteInvitationReceived(remote: RemoteInvitation?) {
        super.onRemoteInvitationReceived(remote)
        runOnUiThread {
            val param = JSONObject().apply {
                put("Cmd", "Calling")
            }
            remote?.response = param.toString()
            remote?.let {
                rtmCallManager.refuseRemoteInvitation(it, null)
            }
        }
    }

    override fun onLocalInvitationRefused(var1: LocalInvitation?, var2: String?) {
        super.onLocalInvitationRefused(var1, var2)
        runOnUiThread {
            toast("${var1?.calleeId}拒绝了呼叫邀请")
            removeMember(var1?.calleeId.toString())
        }
    }

    fun Invite(view: View) {
        CustomDialog.show(this, R.layout.dialog_invite) { dialog, v ->
            val etId = v.findViewById<org.ar.call.weight.VerificationCodeView>(R.id.et_invite)
            v.findViewById<TextView>(R.id.tv_invite_confirm).setOnClickListener {
                if (callArray?.contains(etId.inputContent)!!){
                    toast("用户已在通话中")
                    return@setOnClickListener
                }
                mainScope.launch() {
                    val isOnlne = queryOnlineMember(etId.inputContent)
                        if (!isOnlne){
                            toast("该用户不在线")
                        }else{
                            memberAdapter.addData(RtcMember.Factory.create(etId.inputContent))
                            callArray?.add(etId.inputContent)
                            val params = JSONObject()
                            val arr = JSONArray()
                            arr.put(mineUserId)
                            params.put("Mode", 0)
                            params.put("Conference", true)
                            params.put("ChanId", channelId)
                            callArray?.forEach{
                                arr.put(it)
                            }
                            params.put("UserData", arr)
                            val localInvitation = rtmCallManager.createLocalInvitation(etId.inputContent)
                            localInvitation?.content = params.toString()
                            localInvitationList?.add(localInvitation!!)
                            rtmCallManager.sendLocalInvitation(localInvitation!!, null)
                            dialog.doDismiss()
                    }

                }


            }
            v.findViewById<TextView>(R.id.tv_invite_cancel).setOnClickListener {
                dialog.doDismiss()
            }
        }
    }

    private suspend fun queryOnlineMember(userId: String): Boolean = suspendCoroutine{ continuation ->
        val query = setOf(userId)
        rtmClient.queryPeersOnlineStatus(query, object : ResultCallback<MutableMap<String, Boolean>> {
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
                player!!.isLooping=true
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
        if (Build.VERSION.SDK_INT<21){
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
        moveTaskToBack(true)
        EasyFloat.with(this)
                .setShowPattern(ShowPattern.FOREGROUND)
                .setDragEnable(true)
                .setGravity(Gravity.RIGHT)
                .setSidePattern(SidePattern.RESULT_SIDE)
                .setLayout(R.layout.float_multi_video_window, OnInvokeView { view ->
                    val rlRoot = view.findViewById<RelativeLayout>(R.id.rl_multi_root)
                    val textView = view.findViewById<TextView>(R.id.text_multi_wait)
                    val chr = view.findViewById<Chronometer>(R.id.chr_multi_time)
                    if (chronometer.visibility == View.VISIBLE) {
                        textView.visibility = View.GONE
                        chr.visibility = View.VISIBLE
                        chr.base = chronometer.base
                        chr.start()
                    } else {
                        textView.visibility = View.VISIBLE
                        chr.visibility = View.GONE
                    }
                    rlRoot.setOnClickListener {
                        EasyFloat.dismissAppFloat()
                        chr.stop()
                        if (Build.VERSION.SDK_INT >= 29) {
                            startActivity(Intent(this, MultiVideosActivity::class.java))
                        } else {
                            moveToFront()
                        }
                    }
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
    @TargetApi(11)
    private fun moveToFront() {
        // honeycomb
        val manager = getSystemService(ACTIVITY_SERVICE) as ActivityManager
        val recentTasks = manager.getRunningTasks(Int.MAX_VALUE)
        for (i in recentTasks.indices) {
            // bring to front
            if (recentTasks[i].baseActivity!!.toShortString().indexOf("org.ar.call.multi.MultiVideosActivity") > -1) {
                manager.moveTaskToFront(recentTasks[i].id, ActivityManager.MOVE_TASK_WITH_HOME)
            }
        }
    }
}