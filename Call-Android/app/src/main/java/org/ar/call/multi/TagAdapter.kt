package org.ar.call.multi

import com.chad.library.adapter.base.BaseQuickAdapter
import com.chad.library.adapter.base.BaseViewHolder
import org.ar.call.R

class TagAdapter : BaseQuickAdapter<String,BaseViewHolder>(R.layout.item_tag){


    override fun convert(helper: BaseViewHolder?, item: String?) {
        helper?.setText(R.id.tv_tag,item)
        helper?.addOnClickListener(R.id.iv_delete_tag)
    }
}