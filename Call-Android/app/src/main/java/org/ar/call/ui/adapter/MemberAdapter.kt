package org.ar.call.ui.adapter

import android.widget.RelativeLayout
import com.chad.library.adapter.base.BaseQuickAdapter
import com.chad.library.adapter.base.viewholder.BaseViewHolder
import org.ar.call.R
import org.ar.call.bean.MemberAVStatus
import org.ar.call.bean.RtcMember

class MemberAdapter :BaseQuickAdapter<RtcMember, BaseViewHolder>(R.layout.item_member) {



    override fun convert(holder: BaseViewHolder, item: RtcMember) {
        val videoGroup = holder.getView<RelativeLayout>(R.id.rl_video)
        videoGroup.removeAllViews()
        val canvans = holder.itemView.context.let { item.getVideoCanvas(it) }
        if (canvans.view.parent!=null){
            val parent= canvans.view.parent as RelativeLayout
            parent.removeView(canvans.view)
        }
        videoGroup.addView(canvans.view)
        holder.setText(R.id.tv_uid,item.userId)
        holder.setVisible(R.id.iv_video_close,!item.isOpenVideo!!)
        holder.setVisible(R.id.rl_wait,item.isWaiting!!)
        if (item.isOpenAudio!!){
            holder.setBackgroundResource(R.id.iv_audio, R.drawable.mic_open)
        }else{
            holder.setBackgroundResource(R.id.iv_audio, R.drawable.mic_close)
        }
    }

    override fun convert(holder: BaseViewHolder, item: org.ar.call.bean.RtcMember, payloads: List<Any>) {
        super.convert(holder, item, payloads)
        if (payloads.isNullOrEmpty()){
            convert(holder,item)
            return
        }
        payloads.forEach {
            when(val payload = it as MemberAVStatus){
                MemberAVStatus.VIDEO ->{
                    holder.setVisible(R.id.iv_video_close,!(payload.data as Boolean))
                }
                MemberAVStatus.WAITING ->{
                    holder.setVisible(R.id.rl_wait,(payload.data as Boolean))
                }
                MemberAVStatus.AUDIO ->{
                    if ((payload.data as Boolean)){
                        holder.setBackgroundResource(R.id.iv_audio, R.drawable.mic_open)
                    }else{
                        holder.setBackgroundResource(R.id.iv_audio, R.drawable.mic_close)
                    }
                }
            }
        }
    }


}