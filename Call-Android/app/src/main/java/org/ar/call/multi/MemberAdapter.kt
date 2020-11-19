package org.ar.call.multi

import android.widget.RelativeLayout
import com.chad.library.adapter.base.BaseQuickAdapter
import com.chad.library.adapter.base.BaseViewHolder
import org.ar.call.R

class MemberAdapter :BaseQuickAdapter<RtcMember,BaseViewHolder>(R.layout.item_member) {


    override fun convert(helper: BaseViewHolder?, item: RtcMember?) {
        val videoGroup = helper?.getView<RelativeLayout>(R.id.rl_video)
        videoGroup?.removeAllViews()
        val canvans = helper?.itemView?.context?.let { item?.getVideoCanvas(it) }
        if (canvans?.view?.parent!=null){
            val parent= canvans.view?.parent as RelativeLayout
            parent.removeView(canvans.view)
        }
        videoGroup?.addView(canvans?.view)
        helper?.setText(R.id.tv_uid,item?.userId)
        helper?.setVisible(R.id.iv_video_close,!item?.isOpenVideo!!)
        helper?.setVisible(R.id.rl_wait,item?.isWaiting!!)
        if (!item?.isWaiting!!){
            helper?.setVisible(R.id.iv_audio,true)
        } else{
            helper?.setVisible(R.id.iv_audio,false)
        }
        if (item.isOpenAudio!!){
            helper?.setBackgroundRes(R.id.iv_audio,R.drawable.mic_open)
        }else{
            helper?.setBackgroundRes(R.id.iv_audio,R.drawable.mic_close)
        }
    }
}