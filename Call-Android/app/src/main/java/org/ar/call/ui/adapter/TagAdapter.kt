package org.ar.call.ui.adapter

import com.chad.library.adapter.base.BaseQuickAdapter
import com.chad.library.adapter.base.viewholder.BaseViewHolder
import org.ar.call.R

class TagAdapter : BaseQuickAdapter<String, BaseViewHolder>(R.layout.item_tag){

    override fun convert(holder: BaseViewHolder, item: String) {
        holder.setText(R.id.tv_tag,item)
    }
}