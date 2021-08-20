package org.ar.call.vm

import android.content.Context
import android.view.TextureView
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import org.ar.call.utils.Constans
import org.ar.call.utils.SpUtil
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.ar.call.BuildConfig
import org.ar.rtc.Constants
import org.ar.rtc.IRtcEngineEventHandler
import org.ar.rtc.RtcEngine
import org.ar.rtc.VideoEncoderConfiguration
import org.ar.rtc.video.VideoCanvas
import org.json.JSONObject

class RtcVM :ViewModel(){

    var rtcEngine: RtcEngine? = null
    private var channelId = ""
    private var userId = ""
    var inMeeting = false //是否正在通话中

    val joinState = MutableLiveData<Int>()
    val remoteVideoDecode = MutableLiveData<String>()
    val remoteVideoState = MutableLiveData<Pair<String,Int>>()
    val remoteAudioState = MutableLiveData<Pair<String,Int>>()
    val userJoin = MutableLiveData<String>()

    fun initRTC(context: Context,callType:Int,chanID:String,uid:String){
        rtcEngine = RtcEngine.create(context, BuildConfig.APPID,RtcEvent())
        rtcEngine?.let {
            var isOpen = SpUtil.get().getBoolean(Constans.OPEN_DENOISE,true)
            if (isOpen){
                it.setParameters(JSONObject().apply {
                    put("Cmd", "SetAudioAiNoise")
                    put("Enable", 1)
                }.toString())
            }
            if (callType == Constans.VIDEO_MODE){//如果是视频模式
                val videoEncoderConfiguration = VideoEncoderConfiguration()
                when (SpUtil.get().getInt("frame",1)) {
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
                when (SpUtil.get().getInt("size",1)) {
                    1 -> {
                        videoEncoderConfiguration.dimensions = VideoEncoderConfiguration.VD_320x240
                    }
                    2 -> {
                        videoEncoderConfiguration.dimensions = VideoEncoderConfiguration.VD_480x360
                    }
                    3 -> {
                        videoEncoderConfiguration.dimensions = VideoEncoderConfiguration.VD_960x720
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
            it.setupRemoteVideo(VideoCanvas(textureView,Constants.RENDER_MODE_HIDDEN,uid))
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
            }
        }
    }

    override fun onCleared() {
        super.onCleared()
        RtcEngine.destroy()
    }

}