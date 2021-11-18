package org.ar.call.ui

import android.app.PictureInPictureParams
import android.content.pm.PackageManager
import android.content.res.Configuration
import android.media.MediaPlayer
import android.os.Build
import android.os.Bundle
import android.util.DisplayMetrics
import android.util.Rational
import android.view.TextureView
import android.view.View
import android.view.ViewGroup
import android.widget.RelativeLayout
import android.widget.Toast
import androidx.activity.viewModels
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.ar.call.*
import org.ar.call.bean.VideoDebugData
import org.ar.call.utils.*
import org.ar.call.vm.RtcVM
import org.ar.rtc.RtcEngine
import org.ar.rtc.VideoEncoderConfiguration
import org.ar.rtm.LocalInvitation
import org.ar.rtm.RemoteInvitation
import org.ar.rtm.RtmMessage
import org.json.JSONObject
import org.webrtc.TextureViewRenderer
import java.util.HashMap

class P2PVideoActivity : BaseActivity() {
    private val binding by lazy { org.ar.call.databinding.ActivityP2PvideoBinding.inflate(layoutInflater) }
    private val bindingReceive by lazy { org.ar.call.databinding.LayoutReceivedSingleCallBinding.inflate(layoutInflater) }
    private val bindingAudio by lazy { org.ar.call.databinding.LayoutAudioBinding.inflate(layoutInflater) }
    private val bindingVideo by lazy { org.ar.call.databinding.LayoutVideoBinding.inflate(layoutInflater) }

    private val rtcVM: RtcVM by viewModels()

    private var player: MediaPlayer? = null

    private var isCalled = false //是否是被呼叫
    private var callMode = 0 //通话模式 0视频 1音频
    private var remoteUserId = ""

    private val videoList = HashMap<String, TextureView?>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(binding.root)
        isCalled = intent.getBooleanExtra("isCalled",false)
        binding.root.addView(bindingReceive.root)
        callViewModel.isWaiting = true
        if (!isCalled){//如果是主动呼叫
            callViewModel.localInvitation?.let {
                val contentJSON = JSONObject(it.content)
                callMode = contentJSON.getInt("Mode")
                remoteUserId = it.calleeId
                rtcVM.initRTC(this,callMode,contentJSON.getString("ChanId"),callViewModel.userId)
                showCallLayout()
                callViewModel.call()
            }?:run {
                toast("error...")
                finish()
            }
        }else{//被呼叫
            callViewModel.currentRemoteInvitation?.let {
                val contentJSON = JSONObject(it.content)
                callMode = contentJSON.getInt("Mode")
                remoteUserId = it.callerId
                rtcVM.initRTC(this,callMode,contentJSON.getString("ChanId"),callViewModel.userId)
                bindingReceive.tvState.text=(if (callMode == Constans.AUDIO_MODE) "收到语音呼叫邀请" else "收到视频呼叫邀请")
                showCallLayout()
            }?:run {
                toast("error...")
                finish()
            }
        }
        callViewModel.callingUid = remoteUserId
        initOnclick()
        initLiveData()
        val openAVData=SpUtil.get().getBoolean(Constans.OPEN_AVDATA, false)
        if (openAVData&&callMode==0){
            bindingVideo.tvLoaclStatus.visibility= View.VISIBLE
            bindingVideo.tvRemoteStatus.visibility= View.VISIBLE
        }else{
            bindingVideo.tvLoaclStatus.visibility= View.GONE
            bindingVideo.tvRemoteStatus.visibility= View.GONE
        }
    }



    private fun showCallLayout(){
        bindingReceive.run {
            tvUserPre.text = remoteUserId
            btnHangup.show()
            if (isCalled){
                btnAccept.show()
                if (callMode== Constans.VIDEO_MODE){
                    btnSwitchAudio.show()
                }else{
                    btnSwitchAudio.gone()
                }
                val layoutParams = btnHangup.layoutParams as RelativeLayout.LayoutParams
                layoutParams.removeRule(RelativeLayout.CENTER_HORIZONTAL)
                layoutParams.addRule(RelativeLayout.ALIGN_PARENT_LEFT)
                layoutParams.setMargins(35f.dp2px(), 0, 0, 0)
                btnHangup.layoutParams = layoutParams

            }else{
                btnAccept.gone()
                val layoutParams = btnHangup.layoutParams as RelativeLayout.LayoutParams
                layoutParams.removeRule(RelativeLayout.ALIGN_PARENT_LEFT)
                layoutParams.addRule(RelativeLayout.CENTER_HORIZONTAL)
                btnHangup.layoutParams = layoutParams
                btnHangup.requestLayout()
                btnSwitchAudio.gone()
            }
            if (callMode == Constans.VIDEO_MODE){
                rlVideoPreview.show()
                val localPreview = RtcEngine.CreateRendererView(this@P2PVideoActivity)
                rtcVM.setupLocalVideo(localPreview)
                rlVideoPreview.addView(localPreview,0)
            }
        }
        startRing()
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

    private fun stopRing() {
        try {
            player?.let {
                it.stop()
                it.release()
            }
            player = null
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }


    //主叫收到对方拒绝
    override fun onLocalInvitationRefused(var1: LocalInvitation?, var2: String?) {
        super.onLocalInvitationRefused(var1, var2)
        runOnUiThread {
            if(var2.isNullOrEmpty()){
                toast("对方拒绝通话")
            }else{
                val reasonJSON = JSONObject(var2)
                if (reasonJSON.has("Cmd")){
                    val reason = reasonJSON.getString("Cmd")
                    if (reason=="Calling"){
                        showError("对方正忙")
                    }
                }
            }
            finish()
        }
    }

    override fun onLocalInvitationAccepted(var1: LocalInvitation?, var2: String?) {
        super.onLocalInvitationAccepted(var1, var2)
        runOnUiThread {
            val infoJSON = JSONObject(var2)
            callMode = infoJSON.getInt("Mode")//这里还需要获取一下通话模式 因为对方可以语音接听
            joinRTC(infoJSON)

        }
    }

    override fun onLocalInvitationCanceled(var1: LocalInvitation?) {
        super.onLocalInvitationCanceled(var1)
        runOnUiThread {
            finish()
        }
    }

    override fun onLocalInvitationFailure(var1: LocalInvitation?, var2: Int) {
        super.onLocalInvitationFailure(var1, var2)
        runOnUiThread {
            rtcVM.inMeeting = false
            toast("对方未能接通呼叫")
            finish()
        }
    }

    override fun onRemoteInvitationAccepted(var1: RemoteInvitation?) {
        super.onRemoteInvitationAccepted(var1)
        runOnUiThread {
            joinRTC(JSONObject(var1?.content))
        }
    }

    override fun onRemoteInvitationReceived(var1: RemoteInvitation?) {
        runOnUiThread {
                callViewModel.refuse(var1!!,JSONObject().apply {
                    put("Cmd","Calling")
                }.toString())
        }
    }


    override fun onRemoteInvitationRefused(var1: RemoteInvitation?) {
        super.onRemoteInvitationRefused(var1)
        runOnUiThread {
            if (callViewModel.isCalling||callViewModel.isWaiting){

            }else{
                rtcVM.inMeeting = false
                finish()

            }
        }
    }

    override fun onRemoteInvitationCanceled(var1: RemoteInvitation?) {
        super.onRemoteInvitationCanceled(var1)
        runOnUiThread {
            rtcVM.inMeeting = false
            toast("对方已取消呼叫")
            finish()
        }
    }


    override fun onMessageReceived(message: RtmMessage?,uid: String?) {
        super.onMessageReceived(message,uid)
        runOnUiThread {
            message?.let {
                if (JSONObject(it.text).has("Cmd")){
                when(JSONObject(it.text).getString("Cmd")){
                    "EndCall"->{
                        toast("对方已挂断")
                        leave(false)
                    }
                    "SwitchAudio"->{
                        showAudioModel()
                    }
                }
                }
            }

        }
    }
    private fun joinRTC(infoJSON:JSONObject){
        binding.root.removeView(bindingReceive.root)
        if (callMode == Constans.AUDIO_MODE){
            binding.root.addView(bindingAudio.root,0)
        }else{
            binding.root.addView(bindingVideo.root,0)
        }
        callViewModel.callType=callMode
        var watchParams = ""
        var vidCodec = ""
        var audCodec = ""

        //-----------------这一堆是为了适配手表⌚️---------------
        if (!infoJSON.isNull("VidCodec")){
            vidCodec = infoJSON.getString("VidCodec")
        }
        if (!infoJSON.isNull("AudCodec")){
            audCodec = infoJSON.getString("AudCodec")
        }
        if (!infoJSON.isNull("Parameters")){
            watchParams = infoJSON.getString("Parameters")
        }
        var isAppOrWeb = vidCodec.isNullOrEmpty()||vidCodec.contains("H264")||audCodec.isNullOrEmpty()||audCodec.contains("Opus")
        //-----------------这一堆是为了适配手表⌚️---------------
        callViewModel.isWaiting = false
        callViewModel.isCalling = true
        stopRing()
            if (callMode == Constans.AUDIO_MODE) {
                bindingAudio.run {
                   tvRemoteAudioUser.text = remoteUserId
                }
                Toast.makeText(this@P2PVideoActivity, "声音将通过听筒播放", Toast.LENGTH_SHORT).show()
                rtcVM.setEnableSpeakerphone(false)
            } else {
                bindingVideo.run {
                    val outMetrics = DisplayMetrics()
                    windowManager.defaultDisplay.getMetrics(outMetrics)
                    val widthPixels = outMetrics.widthPixels
                    val marginLayoutParams = rlLocalVideo.layoutParams as ViewGroup.MarginLayoutParams
                    marginLayoutParams.topMargin = 12f.dp2px()
                    marginLayoutParams.leftMargin = widthPixels - 102f.dp2px() //90是View的宽  12 是margin
                   rlLocalVideo.layoutParams = marginLayoutParams
                    setupLocalVideo()
                    Toast.makeText(this@P2PVideoActivity, "声音将通过扬声器播放", Toast.LENGTH_SHORT).show()
                    rtcVM.setEnableSpeakerphone(true)
                    if (!isAppOrWeb){//如果是⌚️
                        rtcVM.rtcEngine?.setParameters("{\"Cmd\":\"SetEncoderType\", \"VidCodecType\": 5, \"AudCodecType\": 3}")
                        watchParams?.let {
                            val json = JSONObject(it)
                            val width = json.getInt("Width")
                            val height = json.getInt("Height")
                            val fps = json.getInt("Fps")
                            val configuration = VideoEncoderConfiguration()
                            configuration.dimensions =
                                VideoEncoderConfiguration.VideoDimensions(width, height)
                            configuration.bitrate = 128
                            configuration.minBitrate = 128
                            configuration.frameRate = fps
                            configuration.minFrameRate = 1
                            rtcVM.rtcEngine?.setVideoEncoderConfiguration(configuration)
                        }
                    }
                }
            }
            rtcVM.joinChannel()


    }

    private fun setupLocalVideo() {
        val mLocalView = RtcEngine.CreateRendererView(this)
        if (bindingVideo.rlLocalVideo.childCount == 2) {
            bindingVideo.rlLocalVideo.removeViewAt(1)
        }
        if (videoList.containsKey("local")) {
            videoList.remove("local")
        }
        bindingVideo.rlLocalVideo.addView(mLocalView, 1)
        bindingVideo.rlLocalVideo.tag = "local"
        videoList["local"] = mLocalView
        rtcVM.setupLocalVideo(mLocalView)
    }

    private fun setupRemoteVideo(uid: String) {
        val mRemoteView = RtcEngine.CreateRendererView(this)
        if (bindingVideo.rlRemoteVideo.childCount == 2) {
            bindingVideo.rlRemoteVideo.removeViewAt(1)
        }
        if (videoList.containsKey("remote")) {
            videoList.remove("remote")
        }
        val params = RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT,RelativeLayout.LayoutParams.WRAP_CONTENT)
        params.addRule(RelativeLayout.CENTER_IN_PARENT)
        bindingVideo.rlRemoteVideo.addView(mRemoteView, 1,params)
        videoList["remote"] = mRemoteView
       rtcVM.setupRemoteVideo(uid,mRemoteView)
    }

    private fun initOnclick(){
        bindingAudio.run {
            btnAudio.setOnClickListener {
                it.isSelected=!it.isSelected
                rtcVM.muteLocalAudioStream(it.isSelected)
            }
            btnHangUp.setOnClickListener {
                leave()
            }
            btnSpeak.setOnClickListener {
                btnSpeak.isSelected = ! btnSpeak.isSelected
                rtcVM.setEnableSpeakerphone(btnSpeak.isSelected)
            }
        }

        bindingVideo.run {
            rlRemoteVideo.setOnClickListener {
                if (rlBtnGroup.visibility == View.VISIBLE) {
                    rlBtnGroup.gone()
                    binding.chronometer.gone()
                } else {
                    rlBtnGroup.show()
                    binding.chronometer.show()
                }
            }
            rlLocalVideo.setOnClickListener {
                switchVideo()
            }
            btnAudio.setOnClickListener {
                btnAudio.isSelected = ! btnAudio.isSelected
                rtcVM.muteLocalAudioStream(btnAudio.isSelected)

            }
            btnSwitchAudio.setOnClickListener {
                callViewModel.sendMessage(remoteUserId,JSONObject().apply {
                    put("Cmd","SwitchAudio")
                }.toString()){
                    if (it){
                        showAudioModel()
                    }else{
                        showError("切换失败")
                    }
                }
            }
            btnHangUp.setOnClickListener {
                leave()
            }
            btnVideo.setOnClickListener {
                btnVideo.isSelected = btnVideo.isSelected
                rtcVM.muteLocalVideoStream(btnVideo.isSelected)
                if (rlLocalVideo.tag == "local") {
                   rlLocalVideo.getChildAt(1).visibility = if (!btnVideo.isSelected) View.VISIBLE else View.INVISIBLE
                } else {
                   rlRemoteVideo.getChildAt(1).visibility = if (!btnVideo.isSelected) View.VISIBLE else View.INVISIBLE
                }
            }
            btnSwitchCamera.setOnClickListener {
                rtcVM.rtcEngine?.switchCamera()
            }
            btnSpeak.setOnClickListener {
                btnSpeak.isSelected = !btnSpeak.isSelected
                rtcVM.setEnableSpeakerphone(btnSpeak.isSelected)
            }
        }

        bindingReceive.run {
           btnHangup.setOnClickListener {
               rtcVM.inMeeting = false
               callViewModel.isWaiting = false
               callViewModel.isCalling = false
                if (!isCalled) {
                    callViewModel.cancle()
                } else {
                    callViewModel.currentRemoteInvitation?.let {
                        callViewModel.refuse(it)
                    }
                }
                stopRing()
            }
           btnAccept.setOnClickListener {
                callViewModel.currentRemoteInvitation?.let {
                    callViewModel.accept(it,JSONObject().apply {
                        put("Mode", callMode) //收到的是什么类型就回什么类型
                        put("Conference", false)
                        put("UserData", "")
                        put("SipData", "")
                    }.toString())
                }

            }
            btnSwitchAudio.setOnClickListener {
                callMode= Constans.AUDIO_MODE
                callViewModel.currentRemoteInvitation?.let {
                    callViewModel.accept(it,JSONObject().apply {
                        put("Mode", callMode) //更改后的模式
                        put("Conference", false)
                        put("UserData", "")
                        put("SipData", "")
                    }.toString())
                }

                bindingReceive.rlVideoPreview.removeAllViews()
                rtcVM.disableVideo()
                stopRing()
            }

        }

    }

    private fun initLiveData() {
        rtcVM.joinState.observe(this,{
            if (it==0){
                binding.chronometer.start()
            }
        })

        rtcVM.remoteVideoDecode.observe(this,{
            setupRemoteVideo(it)
        })

        rtcVM.remoteVideoState.observe(this,{
                if (bindingVideo.rlLocalVideo.tag == null) {
                    return@observe
                }
                if (bindingVideo.rlLocalVideo.tag == "remote") {
                    if (bindingVideo.rlLocalVideo.getChildAt(1) != null) {
                        bindingVideo.rlLocalVideo.getChildAt(1).visibility = if (it.second == 6) View.VISIBLE else View.INVISIBLE
                    }
                } else {
                    if (bindingVideo.rlRemoteVideo.getChildAt(1) != null) {
                        bindingVideo.rlRemoteVideo.getChildAt(1).visibility = if (it.second == 6) View.VISIBLE else View.INVISIBLE
                    }
                }
        })

        rtcVM.nobodyComeIn.observe(this,{
            lifecycleScope.launch {
                    toast("对方网络异常")
                    delay(1500)
                    leave(false)
            }
        })
        rtcVM.userOffline.observe(this,{
            if (it == 1){
                toast("对方网络异常")
            }else{
                lifecycleScope.launch {
                    toast("对方通话异常")
                    delay(1500)
                    leave(false)
                }
            }
        })
        rtcVM.localVideoStatusObserver.observe(this,{
            StringBuffer().apply {
                appendLine("本地音视频数据展示")
                appendLine(it.dimens)
                appendLine(it.frame)
                appendLine(it.rtt)
                appendLine("发送带宽：${it.sendAudioBitrate+it.sendVideoBitrate}")
                appendLine("接收带宽：${it.recAudioBitrate+it.recVideoBitrate}")
                appendLine(it.audioSendLoss)
                appendLine(it.videoSendLoss)
                bindingVideo.tvLoaclStatus.setText(this.toString())
            }
        })
        rtcVM.remoteVideoStatusObserver.observe(this,{
            StringBuffer().apply {
                appendLine("远端音视频数据展示")
                appendLine(it.dimens)
                appendLine(it.frame)
                appendLine("接收带宽：${it.recAudioBitrate+it.recVideoBitrate}")
                appendLine(it.audioRecLoss)
                appendLine(it.videoRecLoss)
                bindingVideo.tvRemoteStatus.setText(this.toString())
            }
        })


    }

    private fun switchVideo(){
        if (videoList.size < 2) {
            return
        }
        bindingVideo.rlRemoteVideo.removeViewAt(1)
        bindingVideo.rlLocalVideo.removeViewAt(1)
        val mLocalView = RtcEngine.CreateRendererView(this)
        if (videoList.containsKey("local")) {
            (videoList["local"] as TextureViewRenderer).release()
            videoList.remove("local")
        }
        videoList["local"] = mLocalView
       rtcVM.setupLocalVideo(mLocalView)
        if (bindingVideo.rlVideo.lastLeft != -1) {
            val marginLayoutParams = bindingVideo.rlLocalVideo.layoutParams as ViewGroup.MarginLayoutParams
            marginLayoutParams.leftMargin = bindingVideo.rlVideo.lastLeft
            marginLayoutParams.topMargin = bindingVideo.rlVideo.lastTop
            bindingVideo.rlLocalVideo.layoutParams = marginLayoutParams
        }
        if (bindingVideo.rlLocalVideo.tag.toString() == "local") {
            val params = RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT,RelativeLayout.LayoutParams.MATCH_PARENT)
            params.addRule(RelativeLayout.CENTER_IN_PARENT)
            bindingVideo.rlRemoteVideo.addView(videoList["local"], 1,params)
            bindingVideo.rlLocalVideo.addView(videoList["remote"], 1)
            bindingVideo.rlLocalVideo.tag = "remote"
        } else {
            val params = RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT,RelativeLayout.LayoutParams.WRAP_CONTENT)
            params.addRule(RelativeLayout.CENTER_IN_PARENT)
            bindingVideo.rlRemoteVideo.addView(videoList["remote"], 1,params)
            bindingVideo.rlLocalVideo.addView(videoList["local"], 1)
            bindingVideo.rlLocalVideo.tag = "local"
        }
    }
    
    private fun showAudioModel(){
        binding.root.removeView(bindingVideo.root)
        binding.root.addView(bindingAudio.root)
        bindingAudio.tvRemoteAudioUser.text = remoteUserId
        rtcVM.disableVideo()
        rtcVM.setEnableSpeakerphone(false)
        bindingVideo.rlVideo.removeAllViews()
        callMode = Constans.AUDIO_MODE
        callViewModel.callType=callMode
        Toast.makeText(this@P2PVideoActivity, "声音将通过听筒播放", Toast.LENGTH_SHORT).show()
    }
    private fun leave(needSendMessage:Boolean = true){
        if (needSendMessage) {
            callViewModel.sendMessage(remoteUserId, JSONObject().apply {
                put("Cmd", "EndCall")
            }.toString()) {}
        }
        rtcVM.inMeeting = false
        rtcVM.leaveChannel()
        if (callMode == Constans.VIDEO_MODE){
            bindingVideo.rlVideo.removeAllViews()
        }
        if (!isCalled) {//这里本可以不调用 但如果是断网重连进来的就需要再取消一下 否则下次无法再呼叫
            callViewModel.cancle()
        }
        finish()
    }

    override fun onDestroy() {
        super.onDestroy()
        callViewModel.isCalling = false
        callViewModel.callType=-1
        callViewModel.callingUid = ""
        stopRing()
    }

    override fun onResume() {
        super.onResume()


    }




}