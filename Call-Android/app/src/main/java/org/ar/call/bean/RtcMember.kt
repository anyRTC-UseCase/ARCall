package org.ar.call.bean

import android.content.Context
import android.view.ViewGroup
import org.ar.rtc.Constants
import org.ar.rtc.RtcEngine
import org.ar.rtc.video.VideoCanvas

class RtcMember private constructor(val userId:String){
    var isOpenAudio :Boolean ? = null
    var isOpenVideo :Boolean ? = null
    var isWaiting : Boolean ? =null
    var canvas:VideoCanvas? = null


    fun getVideoCanvas(context: Context): VideoCanvas {
        if (canvas ==null) {
            val surface = RtcEngine.CreateRendererView(context)
            canvas = VideoCanvas(surface, Constants.RENDER_MODE_FIT, userId)
        }
        return canvas!!
    }

    fun release(){
        canvas?.let {
            if (it.view != null && it.view.parent != null) {
                it.getView().release()
                (it.view.parent as ViewGroup).removeView(it.view)
            }
            canvas = null
        }
    }

    //生成一个默认属性的对象
    object Factory {

        fun create(userId: String): org.ar.call.bean.RtcMember {
            return org.ar.call.bean.RtcMember.Factory.create(
                userId,
                isOpenAudio = false,
                isOpenVideo = true,
                isWaiting = true
            )
        }

        private fun create(userId: String, isOpenAudio: Boolean, isOpenVideo: Boolean, isWaiting:Boolean): org.ar.call.bean.RtcMember {
            val member = RtcMember(userId)
            member.isOpenAudio = isOpenAudio
            member.isOpenVideo = isOpenVideo
            member.isWaiting = isWaiting
            return member

        }
    }
}