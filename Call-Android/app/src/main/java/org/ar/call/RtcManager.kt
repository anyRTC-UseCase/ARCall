package org.ar.call

import android.content.Context
import android.view.TextureView
import org.ar.call.utils.Constans
import org.ar.call.utils.SpUtil
import org.ar.rtc.Constants
import org.ar.rtc.IRtcEngineEventHandler
import org.ar.rtc.RtcEngine
import org.ar.rtc.VideoEncoderConfiguration
import org.ar.rtc.video.VideoCanvas
import org.json.JSONObject

class RtcManager private constructor(){

    private val rtcEventList = mutableListOf<IRtcEngineEventHandler>()

    private var rtcEngine : RtcEngine ? =null

    fun getRtcEngine():RtcEngine?{
        return  rtcEngine
    }

    //  <是否在通话中>
    public var inMeeting = false

    //  <是否是悬浮窗模式>
    public var windowMode = false

    // <呼叫类型>
    public var callMode = -1

    fun init(context: Context){
        rtcEngine = RtcEngine.create(context,BuildConfig.APPID,RtcEvent())
        var isOpen = SpUtil.getBoolean(Constans.OPEN_DENOISE)
        if (isOpen){
            rtcEngine!!.setParameters(JSONObject().apply {
                put("Cmd", "SetAudioAiNoise")
                put("Enable", 1)
            }.toString())
        }
    }

     fun enableVideo(){
        val videoEncoderConfiguration = VideoEncoderConfiguration()
        when (SpUtil.getInt("frame")) {
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
        when (SpUtil.getInt("size")) {
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
        videoEncoderConfiguration.bitrate = 1000
        rtcEngine?.setVideoEncoderConfiguration(videoEncoderConfiguration)
        rtcEngine?.enableVideo()
    }


    fun setupLocalVideo(textureView: TextureView){
        rtcEngine?.setupLocalVideo(VideoCanvas(textureView,Constants.RENDER_MODE_HIDDEN,"","",Constants.VIDEO_MIRROR_MODE_ENABLED))
        rtcEngine?.startPreview()
    }
    fun setupLocalVideo(cavans:VideoCanvas){
        rtcEngine?.setupLocalVideo(cavans)
        rtcEngine?.startPreview()
    }

    fun setupRemoteVideo(cavans:VideoCanvas){
        rtcEngine?.setupRemoteVideo(cavans)
    }

    fun disableVideo(){
        rtcEngine?.disableVideo()
    }

    fun enableAIDeNoise(enable:Int){
        rtcEngine?.setParameters(JSONObject().apply {
            put("Cmd", "SetAudioAiNoise")
            put("Enable", enable)
        }.toString())
    }



    fun release(){
        RtcEngine.destroy()
    }

    fun registerRtcEvent(rtcEvent:IRtcEngineEventHandler){
        if (rtcEvent !in rtcEventList){
            rtcEventList.add(rtcEvent)
        }
    }

    fun unRegisterRtcEvent(rtcEvent:IRtcEngineEventHandler){
        rtcEventList.remove(rtcEvent)
    }


    private inner class RtcEvent: IRtcEngineEventHandler() {

        override fun onJoinChannelSuccess(channel: String?, uid: String?, elapsed: Int) {
            super.onJoinChannelSuccess(channel, uid, elapsed)
            rtcEventList.forEach {
                it.onJoinChannelSuccess(channel, uid, elapsed)
            }
        }

        override fun onUserJoined(uid: String?, elapsed: Int) {
            super.onUserJoined(uid, elapsed)
            rtcEventList.forEach {
                it.onUserJoined( uid, elapsed)
            }
        }

        override fun onFirstRemoteVideoDecoded(uid: String?, width: Int, height: Int, elapsed: Int) {
            super.onFirstRemoteVideoDecoded(uid, width, height, elapsed)
            rtcEventList.forEach {
                it.onFirstRemoteVideoDecoded(uid, width, height, elapsed)
            }
        }

        override fun onRemoteVideoStateChanged(uid: String?, state: Int, reason: Int, elapsed: Int) {
            super.onRemoteVideoStateChanged(uid, state, reason, elapsed)
            rtcEventList.forEach {
                it.onRemoteVideoStateChanged(uid, state, reason, elapsed)
            }
        }

        override fun onRemoteAudioStateChanged(uid: String?, state: Int, reason: Int, elapsed: Int) {
            super.onRemoteAudioStateChanged(uid, state, reason, elapsed)
            rtcEventList.forEach {
                it.onRemoteAudioStateChanged(uid, state, reason, elapsed)
            }
        }

    }

    companion object {
        val instance: RtcManager by lazy() {
            RtcManager()
        }
    }
}