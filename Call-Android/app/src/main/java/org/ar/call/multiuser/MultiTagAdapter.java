package org.ar.call.multiuser;

import com.chad.library.adapter.base.BaseQuickAdapter;
import com.chad.library.adapter.base.BaseViewHolder;

import org.ar.call.R;

public class MultiTagAdapter extends BaseQuickAdapter<MultiTagBean, BaseViewHolder> {

    public MultiTagAdapter() {
        super(R.layout.item_tag);
    }

    @Override
    protected void convert(BaseViewHolder helper, MultiTagBean item) {
        helper.setText(R.id.tv_tag,item.getContent());
        helper.addOnClickListener(R.id.iv_delete_tag);
    }
}
