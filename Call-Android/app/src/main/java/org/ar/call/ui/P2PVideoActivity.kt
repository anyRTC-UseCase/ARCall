package org.ar.call.ui

import android.media.MediaPlayer
import android.os.Bundle
import android.util.DisplayMetrics
import android.view.TextureView
import android.view.View
import android.view.ViewGroup
import android.widget.RelativeLayout
import android.widget.Toast
import androidx.activity.viewModels
import com.gyf.immersionbar.ImmersionBar
import org.ar.call.*
import org.ar.call.databinding.ActivityP2PvideoBinding
import org.ar.call.utils.*
import org.ar.call.vm.RtcVM
import org.ar.rtc.RtcEngine
import org.ar.rtc.VideoEncoderConfiguration
import org.ar.rtm.LocalInvitation
import org.ar.rtm.RemoteInvitation
import org.ar.rtm.RtmMessage
import org.json.JSONObject
import java.util.HashMap

class P2PVideoActivity : BaseActivity() {
    private val binding by lazy { ActivityP2PvideoBinding.inflate(layoutInflater) }

    private val rtcVM: RtcVM by viewModels()

    private var player: MediaPlayer? = null

    private var isCalled = false //是否是被呼叫
    private var callMode = 0 //通话模式 0视频 1音频
    private var remoteUserId = ""

    private var isWaiting = false
    private var isCalling = false
    private val videoList = HashMap<String, TextureView?>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(binding.root)
        ImmersionBar.with(this).statusBarDarkFont(false, 0.2f).keyboardEnable(true).init()

        isCalled = intent.getBooleanExtra("isCalled",false)

        if (!isCalled){//如果是主动呼叫
            callViewModel.localInvitation?.let {
                val contentJSON = JSONObject(it.content)
                callMode = contentJSON.getInt("Mode")
                remoteUserId = it.calleeId
                rtcVM.initRTC(this,callMode,contentJSON.getString("ChanId"),callViewModel.userId)
                callViewModel.subscribe(remoteUserId)
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
                binding.tvState.text=(if (callMode == Constans.AUDIO_MODE) "收到语音呼叫邀请" else "收到视频呼叫邀请")
                callViewModel.subscribe(remoteUserId)
                showCallLayout()
            }?:run {
                toast("error...")
                finish()
            }
        }

        initOnclick()
        initLiveData()


    }



    private fun showCallLayout(){
        binding.run {
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
                binding.btnHangup.layoutParams = layoutParams

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
                val reasonJSON = JSONObject(var2)
                if (reasonJSON.has("Cmd")){
                    val reason = reasonJSON.getString("Cmd")
                    if (reason=="Calling"){
                        showError("对方正忙")
                    }
                }else{
                    toast("对方拒绝通话")
                }
            finish()
        }
    }

    override fun onLocalInvitationAccepted(var1: LocalInvitation?, var2: String?) {
        super.onLocalInvitationAccepted(var1, var2)
        runOnUiThread {
            val infoJSON = JSONObject(var2)
            callMode = infoJSON.getInt("Mode")//这里还需要获取一下通话模式 因为对方可以语音接听
            binding.rlCallPre.gone()
            joinRTC(infoJSON)

        }
    }

    override fun onLocalInvitationCanceled(var1: LocalInvitation?) {
        super.onLocalInvitationCanceled(var1)
        runOnUiThread {
            callViewModel.unSubscribe(remoteUserId)
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
            binding.rlCallPre.gone()
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
            if (isCalling||isWaiting){

            }else{
                rtcVM.inMeeting = false
                var1?.let {
                    callViewModel.unSubscribe(it.callerId)
                }
                finish()

            }
        }
    }

    override fun onRemoteInvitationCanceled(var1: RemoteInvitation?) {
        super.onRemoteInvitationCanceled(var1)
        runOnUiThread {
            rtcVM.inMeeting = false
            toast("对方已取消呼叫")
            var1?.let {
                callViewModel.unSubscribe(it.callerId)
            }
            finish()
        }
    }

    override fun onPeersOnlineStatusChanged(map: MutableMap<String, Int>?) {
        super.onPeersOnlineStatusChanged(map)
        runOnUiThread {
            map?.let {
                if (map.containsKey(remoteUserId)) {
                    if (map[remoteUserId] != 0) { //离线了
                        //如果正在呼叫界面
                        if (isWaiting) {
                            if (!isCalled) { //如果是主动呼叫
                                callViewModel.cancle()
                            } else {
                                callViewModel.currentRemoteInvitation?.let {
                                    callViewModel.refuse(it)
                                }
                            }
                        }
                        callViewModel.unSubscribe(remoteUserId)
                        rtcVM.inMeeting = false
                        toast("对方已离线")
                        finish()
                    }
                }
            }

        }
    }


    override fun onMessageReceived(message: RtmMessage?) {
        super.onMessageReceived(message)
        runOnUiThread {
            message?.let {
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
    private fun joinRTC(infoJSON:JSONObject){
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
        isWaiting = false
        isCalling = true
        stopRing()
        binding.run {
            if (callMode == Constans.AUDIO_MODE) {
                flVideoGroup.visibility = View.GONE
                flAudioGroup.visibility = View.VISIBLE
                tvRemoteAudioUser.text = remoteUserId
                Toast.makeText(this@P2PVideoActivity, "声音将通过听筒播放", Toast.LENGTH_SHORT).show()
                rtcVM.setEnableSpeakerphone(false)
            } else {
                flVideoGroup.visibility = View.VISIBLE
                flAudioGroup.visibility = View.GONE
                val outMetrics = DisplayMetrics()
                windowManager.defaultDisplay.getMetrics(outMetrics)
                val widthPixels = outMetrics.widthPixels
                val marginLayoutParams = binding.rlLocalVideo.layoutParams as ViewGroup.MarginLayoutParams
                marginLayoutParams.topMargin = 12f.dp2px()
                marginLayoutParams.leftMargin = widthPixels - 102f.dp2px() //90是View的宽  12 是margin
                binding.rlLocalVideo.layoutParams = marginLayoutParams
                rlVideoPreview.removeAllViews()
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
            rtcVM.joinChannel()
        }


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
        rtcVM.setupLocalVideo(mLocalView)
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
       rtcVM.setupRemoteVideo(uid,mRemoteView)
    }

    private fun initOnclick(){
        binding.run {
            ibtnAudioAudio.setOnClickListener {
                it.isSelected=!it.isSelected
                rtcVM.muteLocalAudioStream(it.isSelected)
            }
            ibtnAudioHangUp.setOnClickListener {
                leave()
            }
            ibtnAudioSpeak.setOnClickListener {
                ibtnAudioSpeak.isSelected = !ibtnAudioSpeak.isSelected
                rtcVM.setEnableSpeakerphone(ibtnAudioSpeak.isSelected)
            }
            rlRemoteVideo.setOnClickListener {
                if (rlBtnGroup.visibility == View.VISIBLE) {
                    rlBtnGroup.gone()
                } else {
                    rlBtnGroup.show()
                }
            }
            rlLocalVideo.setOnClickListener {
                switchVideo()
            }
            ibtnAudio.setOnClickListener {
                ibtnAudio.isSelected = !ibtnAudio.isSelected
                rtcVM.muteLocalAudioStream(ibtnAudio.isSelected)
            }
            ibtnSwitchAudio.setOnClickListener {
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
            ibtnHangUp.setOnClickListener {
                leave()
            }
            ibtnVideo.setOnClickListener {
                ibtnVideo.isSelected = ibtnVideo.isSelected
                rtcVM.muteLocalVideoStream(ibtnVideo.isSelected)
                if (rlLocalVideo.tag == "local") {
                    rlLocalVideo.getChildAt(1).visibility = if (!ibtnVideo.isSelected) View.VISIBLE else View.INVISIBLE
                } else {
                    binding.rlRemoteVideo.getChildAt(1).visibility = if (!ibtnVideo.isSelected) View.VISIBLE else View.INVISIBLE
                }
            }
            btnSwitch.setOnClickListener { 
                rtcVM.rtcEngine?.switchCamera()
            }
            ibtnSpeak.setOnClickListener {
                ibtnSpeak.isSelected = !ibtnSpeak.isSelected
                rtcVM.setEnableSpeakerphone(ibtnSpeak.isSelected)
            }
            btnHangup.setOnClickListener { 
                rtcVM.inMeeting = false
                isWaiting = false
                isCalling = false
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

                rlVideoPreview.removeAllViews()
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
                if (binding.rlLocalVideo.tag == null) {
                    return@observe
                }
                if (binding.rlLocalVideo.tag == "remote") {
                    if (binding.rlLocalVideo.getChildAt(1) != null) {
                        binding.rlLocalVideo.getChildAt(1).visibility = if (it.second == 6) View.VISIBLE else View.INVISIBLE
                    }
                } else {
                    if (binding.rlRemoteVideo.getChildAt(1) != null) {
                        binding.rlRemoteVideo.getChildAt(1).visibility = if (it.second == 6) View.VISIBLE else View.INVISIBLE
                    }
                }
        })



    }

    private fun switchVideo(){
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
       rtcVM.setupLocalVideo(mLocalView)
        if (binding.rlVideo.lastLeft != -1) {
            val marginLayoutParams = binding.rlLocalVideo.layoutParams as ViewGroup.MarginLayoutParams
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
    
    private fun showAudioModel(){
        binding.run {
            if (flAudioGroup.visibility == View.GONE) { //防止2个人一起切换的时候 重复走
                flVideoGroup.gone()
                flAudioGroup.show()
                tvRemoteAudioUser.text = remoteUserId
                rtcVM.disableVideo()
                rtcVM.setEnableSpeakerphone(false)
                rlVideo.removeAllViews()
                callMode = Constans.AUDIO_MODE
                Toast.makeText(this@P2PVideoActivity, "声音将通过听筒播放", Toast.LENGTH_SHORT).show()
            }
        }
    }
    private fun leave(needSendMessage:Boolean = true){
        rtcVM.inMeeting = false
        if (callMode == Constans.VIDEO_MODE){
            binding.rlVideo.removeAllViews()
        }
        if (needSendMessage) {
            callViewModel.sendMessage(remoteUserId, JSONObject().apply {
                put("Cmd", "EndCall")
            }.toString()) {}
        }
        finish()
    }

    override fun onDestroy() {
        super.onDestroy()
        stopRing()
    }

    override fun onResume() {
        super.onResume()
        isWaiting = true
    }

}