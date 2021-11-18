package org.ar.call.vm

import android.content.Context
import android.util.Log
import android.view.TextureView
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import io.anyrtc.tanke.utils.Interval
import org.ar.call.utils.Constans
import org.ar.call.utils.SpUtil
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.ar.call.BuildConfig
import org.ar.call.bean.VideoDebugData
import org.ar.call.utils.getSpValue
import org.ar.rtc.Constants
import org.ar.rtc.IRtcEngineEventHandler
import org.ar.rtc.RtcEngine
import org.ar.rtc.VideoEncoderConfiguration
import org.ar.rtc.video.CameraCapturerConfiguration
import org.ar.rtc.video.VideoCanvas
import org.json.JSONObject
import java.util.concurrent.TimeUnit

class RtcVM :ViewModel(){

    var rtcEngine: RtcEngine? = null
    private var channelId = ""
    private var userId = ""
    var inMeeting = false //是否正在通话中
    private var haveMemberJoin = false //是否有人加入？用来判断 加入频道后 对方可能因为某些原因 10秒内都未能加入通话 则退出本次通话

    val joinState = MutableLiveData<Int>()
    val remoteVideoDecode = MutableLiveData<String>()
    val remoteVideoState = MutableLiveData<Pair<String,Int>>()
    val remoteAudioState = MutableLiveData<Pair<String,Int>>()
    val userJoin = MutableLiveData<String>()
    val nobodyComeIn = MutableLiveData<Boolean>()
    val userOffline = MutableLiveData<Int>()

    val localVideoDebugData = VideoDebugData()
    val remoteVideoDebugData = VideoDebugData()

    val localVideoStatusObserver = MutableLiveData<VideoDebugData>()
    val remoteVideoStatusObserver = MutableLiveData<VideoDebugData>()



    private val userOfflineInterval by lazy { Interval(10, 1, TimeUnit.SECONDS, 1) }//收到对方异常离开 倒计10秒 10秒内对方还未恢复 则退出


    fun initRTC(context: Context,callType:Int,chanID:String,uid:String){
        rtcEngine = RtcEngine.create(context, BuildConfig.APPID,RtcEvent())
//        rtcEngine?.let {
//            it.setParameters("{\"Cmd\":\"ConfPriCloudAddr\", \"ServerAdd\":\"xxx\", \"Port\": 6080}")
//        }
        rtcEngine?.let {
            var isOpen = SpUtil.get().getBoolean(Constans.OPEN_DENOISE,true)
            if (isOpen){
                it.setParameters(JSONObject().apply {
                    put("Cmd", "SetAudioAiNoise")
                    put("Enable", 1)
                }.toString())
            }
            if (callType == Constans.VIDEO_MODE){//如果是视频模式
                it.setCameraCapturerConfiguration(CameraCapturerConfiguration(CameraCapturerConfiguration.CD_1280x720,CameraCapturerConfiguration.CAMERA_DIRECTION.CAMERA_FRONT))
                val videoEncoderConfiguration = VideoEncoderConfiguration()
                when (getSpValue(Constans.KEY_FRAME)) {
                    1 -> {
                        videoEncoderConfiguration.frameRate = 24
                    }
                    2 -> {
                        videoEncoderConfiguration.frameRate = 15
                    }
                    3 -> {
                        videoEncoderConfiguration.frameRate = 7
                    }
                }
                when (getSpValue(Constans.KEY_DIMENS)) {
                    1 -> {
                        videoEncoderConfiguration.dimensions = VideoEncoderConfiguration.VD_320x240
                    }
                    2 -> {
                        videoEncoderConfiguration.dimensions = VideoEncoderConfiguration.VD_480x360
                    }
                    3 -> {
                        videoEncoderConfiguration.dimensions = VideoEncoderConfiguration.VD_1280x720
                    }
                }
                videoEncoderConfiguration.bitrate = 2000
                it.setVideoEncoderConfiguration(videoEncoderConfiguration)
                it.enableVideo()
            }
        }
        channelId = chanID
        userId = uid

    }

    fun setupLocalVideo(textureView: TextureView){
        rtcEngine?.let {
            viewModelScope.launch {
                delay(200)
                it.setupLocalVideo(
                    VideoCanvas(textureView,
                        Constants.RENDER_MODE_HIDDEN,"","",
                        Constants.VIDEO_MIRROR_MODE_ENABLED)
                )
                it.startPreview()
            }

        }
    }

    fun setupLocalVideo(canvas: VideoCanvas){
        rtcEngine?.let {
            viewModelScope.launch {
                it.setupLocalVideo(
                    canvas
                )
                it.startPreview()
            }

        }
    }

    fun setupRemoteVideo(uid:String,textureView: TextureView){
        rtcEngine?.let {
            it.setupRemoteVideo(VideoCanvas(textureView,Constants.RENDER_MODE_FIT,uid))
        }
    }
    fun setupRemoteVideo(videoCanvas: VideoCanvas){
            rtcEngine?.let {
                it.setupRemoteVideo(videoCanvas)
        }

    }

    fun setEnableSpeakerphone(open:Boolean){
        rtcEngine?.setEnableSpeakerphone(open)
    }

    fun joinChannel(){
        rtcEngine?.joinChannel("",channelId,"",userId)
    }

    fun leaveChannel(){
        rtcEngine?.leaveChannel()
    }

    fun muteLocalAudioStream(mute:Boolean){
        rtcEngine?.muteLocalAudioStream(mute)
    }
    fun muteLocalVideoStream(mute:Boolean){
        rtcEngine?.muteLocalVideoStream(mute)
    }

    fun disableVideo(){
        rtcEngine?.disableVideo()
    }

    private inner class RtcEvent :IRtcEngineEventHandler(){

        override fun onJoinChannelSuccess(channel: String?, uid: String?, elapsed: Int) {
            super.onJoinChannelSuccess(channel, uid, elapsed)
            viewModelScope.launch {
                joinState.value = 0
                Interval(10, 1, TimeUnit.SECONDS, 1).finish {
                    if (!haveMemberJoin){
                        nobodyComeIn.value = true
                    }
                }.start()
            }
        }

        override fun onFirstRemoteVideoDecoded(
            uid: String?,
            width: Int,
            height: Int,
            elapsed: Int
        ) {
            super.onFirstRemoteVideoDecoded(uid, width, height, elapsed)
            viewModelScope.launch {
                remoteVideoDecode.value = uid
            }
        }

        override fun onRemoteVideoStats(stats: RemoteVideoStats?) {
            super.onRemoteVideoStats(stats)
            viewModelScope.launch {
                remoteVideoDebugData.dimens="分辨率：${stats?.width} x ${stats?.height}"
                remoteVideoDebugData.frame = "帧率：${stats?.decoderOutputFrameRate}"
                remoteVideoDebugData.videoRecLoss = "视频接收丢包：${stats?.packetLossRate}%"
                remoteVideoDebugData.recVideoBitrate=stats!!.receivedBitrate
                localVideoDebugData.recAudioBitrate=stats!!.receivedBitrate
                localVideoStatusObserver.value=localVideoDebugData
                remoteVideoStatusObserver.value=remoteVideoDebugData
            }
        }


        override fun onLocalAudioStats(stats: LocalAudioStats?) {
            super.onLocalAudioStats(stats)
            viewModelScope.launch {
                localVideoDebugData.audioSendLoss="音频发送丢包：${stats!!.txPacketLossRate}%"
                localVideoDebugData.sendAudioBitrate=stats?.sentBitrate
                localVideoStatusObserver.value = localVideoDebugData
            }

        }
        override fun onRtcStats(stats: RtcStats?) {
            super.onRtcStats(stats)
            viewModelScope.launch {
                localVideoDebugData.rtt="网络延迟 RTT：${stats!!.lastmileDelay} "
                localVideoStatusObserver.value = localVideoDebugData
            }
        }


        override fun onLocalVideoStats(stats: LocalVideoStats?) {
            super.onLocalVideoStats(stats)
            viewModelScope.launch {
                localVideoDebugData.dimens="分辨率：${stats?.encodedFrameWidth} x ${stats?.encodedFrameHeight}"
                localVideoDebugData.frame="帧率：${stats?.sentFrameRate}"
                localVideoDebugData.videoSendLoss = "视频发送丢包：${stats?.txPacketLossRate}%"
                localVideoDebugData.sendVideoBitrate=stats!!.sentBitrate
                localVideoStatusObserver.value = localVideoDebugData
            }

        }
        override fun onRemoteVideoStateChanged(
            uid: String?,
            state: Int,
            reason: Int,
            elapsed: Int
        ) {
            super.onRemoteVideoStateChanged(uid, state, reason, elapsed)
            if (reason == 5 || reason ==6){
                viewModelScope.launch {
                    remoteVideoState.value=Pair(uid!!,reason)
                }
            }
        }

        override fun onRemoteAudioStats(stats: RemoteAudioStats?) {
            super.onRemoteAudioStats(stats)
            viewModelScope.launch {
                remoteVideoDebugData.audioRecLoss = "音频接收丢包：${stats?.audioLossRate}%"
                remoteVideoDebugData.recAudioBitrate=stats!!.receivedBitrate
                localVideoDebugData.recAudioBitrate=stats!!.receivedBitrate
                localVideoStatusObserver.value=localVideoDebugData
                remoteVideoStatusObserver.value=remoteVideoDebugData
            }
        }

        override fun onRemoteAudioStateChanged(
            uid: String?,
            state: Int,
            reason: Int,
            elapsed: Int
        ) {
            super.onRemoteAudioStateChanged(uid, state, reason, elapsed)
            if (reason == 5 || reason==6){
                viewModelScope.launch {
                    remoteAudioState.value = Pair(uid!!,reason)
                }
            }
        }

        override fun onUserJoined(uid: String?, elapsed: Int) {
            super.onUserJoined(uid, elapsed)
            viewModelScope.launch {
                userJoin.value=uid
                haveMemberJoin = true
                userOfflineInterval.cancel()
            }
        }

        override fun onUserOffline(uid: String?, reason: Int) {
            super.onUserOffline(uid, reason)
            viewModelScope.launch {
                haveMemberJoin = false
                if (reason ==1){//异常 则继续等待10秒 10秒内它还未恢复（【恢复会走】onUserJoin）则离开
                    userOffline.value =1
                    userOfflineInterval.finish {
                        if (it==10L){
                            userOffline.value =-1
                        }
                    }.start()
                }
                //reason 1 正常 2 异常

            }

        }
    }

    override fun onCleared() {
        super.onCleared()
        RtcEngine.destroy()
    }

}