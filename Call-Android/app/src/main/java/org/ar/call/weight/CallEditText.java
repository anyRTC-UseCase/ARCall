package org.ar.call.weight;

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.text.Editable;
import android.text.InputFilter;
import android.text.InputType;
import android.text.TextPaint;
import android.text.TextUtils;
import android.text.TextWatcher;
import android.util.AttributeSet;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.PopupWindow;
import android.widget.TextView;
import android.widget.Toast;

import org.ar.call.R;
import org.ar.call.utils.DensityUtil;

import java.util.ArrayList;
import java.util.regex.Pattern;

import androidx.annotation.Nullable;
import androidx.appcompat.widget.AppCompatEditText;

public class CallEditText extends LinearLayout implements TextWatcher, View.OnClickListener, View.OnLongClickListener {
    private int editViewNum = 4; //默认输入框数量
    private ArrayList<TextView> mTextViewsList = new ArrayList<>(); //存储EditText对象
    private Context mContext;
    private EditText mEditText;
    private int borderSize = 50; //方格边框大小
    private int borderMargin = 10; //方格间距
    private int textSize = 8; //字体大小
    private int textColor = 0xff; //字体颜色
    private int inputType = InputType.TYPE_CLASS_NUMBER;
    private inputEndListener callBack;

    public CallEditText(Context context) {
        super(context);
        init(context);
    }

    public CallEditText(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        initData(context, attrs);
        init(context);
    }

    public CallEditText(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        initData(context, attrs);
        init(context);
    }

    private void initData(Context context, AttributeSet attrs) {
        TypedArray array = context.obtainStyledAttributes(attrs, R.styleable.CodeEditView);
        borderSize = array.getInteger(R.styleable.CodeEditView_borderSize, 50);
        borderMargin = array.getInteger(R.styleable.CodeEditView_borderMargin, 10);
        textSize = array.getInteger(R.styleable.CodeEditView_textSize, 8);
        textColor = array.getColor(R.styleable.CodeEditView_textColor, Color.BLACK);
        editViewNum = array.getInteger(R.styleable.CodeEditView_borderNum, 4);
    }

    /**
     * 获取输入框内容
     */
    public String getText() {
        return mEditText.getText().toString();
    }

    public void setOnInputEndCallBack(inputEndListener onInputEndCallBack) {
        callBack = onInputEndCallBack;
    }

    /**
     * 长按弹出PopupWindow,用来粘贴文本
     */
    @Override
    public boolean onLongClick(View v) {
        showPopupWindow();
        return true;
    }

    private void showPopupWindow() {
        View popupwindow = LayoutInflater.from(mContext).inflate(R.layout.popupwindow_view, null);
        final PopupWindow popupWindow = new PopupWindow(popupwindow, LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT, true);
        popupWindow.showAsDropDown(this, getWidth() / 2, DensityUtil.dip2px(mContext, 5));
        popupwindow.findViewById(R.id.paste).setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                popupWindow.dismiss();
                pasteTextToView();
            }
        });
    }

    /**
     * 粘贴内容到文本框
     */
    private void pasteTextToView() {
        if (getPasetText() != null && !TextUtils.isEmpty(getPasetText()) && isInteger(getPasetText())) {
            //纯数字
            char[] chars = getPasetText().substring(0, editViewNum).toCharArray();
            mEditText.setText(getPasetText().substring(0, editViewNum));
            for (int i = 0; i < chars.length; i++) {
                mTextViewsList.get(i).setText(String.valueOf(chars[i]));
            }
        } else {
            Toast.makeText(mContext, "粘贴的文本必须为纯数字", Toast.LENGTH_SHORT).show();
        }
    }

    public static boolean isInteger(String str) {
        Pattern pattern = Pattern.compile("^[-\\+]?[\\d]*$");
        return pattern.matcher(str).matches();
    }

    public String getPasetText() {
        android.content.ClipboardManager clipboard = (ClipboardManager) mContext.getSystemService(Context.CLIPBOARD_SERVICE);
        ClipData clipData = clipboard.getPrimaryClip();
        if (clipData != null && clipData.getItemCount() > 0) {
            CharSequence text = clipData.getItemAt(0).getText();
            return text.toString().trim();
        }
        return "";
    }

    public interface inputEndListener {
        void input(String text);

        void afterTextChanged(String text);
    }

    private void init(final Context context) {
        mContext = context;
        initEditText(context);
        //设置方格间距
        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(
                DensityUtil.dip2px(mContext, borderSize), DensityUtil.dip2px(mContext, borderSize));
        params.setMargins(DensityUtil.dip2px(mContext, borderMargin), 0, 0, 0);
        //设置方格文字
        for (int i = 0; i < editViewNum; i++) {
            TextView textView = new TextView(mContext);
            textView.setBackgroundResource(R.drawable.shape_border_normal);
            textView.setGravity(Gravity.CENTER);
            textView.setTextSize(DensityUtil.sp2px(mContext, textSize));
            textView.getPaint().setFakeBoldText(true);
            textView.setLayoutParams(params);
            textView.setInputType(inputType);
            textView.setTextColor(textColor);
            textView.setOnClickListener(this);
            textView.setOnLongClickListener(this);
            mTextViewsList.add(textView);
            addView(textView);
        }

//        //显示隐藏软键盘
//        new android.os.Handler().postDelayed(new Runnable() {
//            @Override
//            public void run() {
//                mEditText.setFocusable(true);
//                mEditText.setFocusableInTouchMode(true);
//                mEditText.requestFocus();
//                InputMethodManager imm = (InputMethodManager) mContext.getSystemService(Context.INPUT_METHOD_SERVICE);
//                imm.toggleSoftInput(0, InputMethodManager.HIDE_NOT_ALWAYS);
//            }
//        }, 500);

        //监听删除键
        mEditText.setOnKeyListener(new OnKeyListener() {
            @Override
            public boolean onKey(View v, int keyCode, KeyEvent event) {
                if (keyCode == KeyEvent.KEYCODE_DEL) {
                    if (mEditText.getText().length() >= mTextViewsList.size()) return false;
                    mTextViewsList.get(mEditText.getText().length()).setText("");
                }
                return false;
            }
        });

        this.setOnLongClickListener(this);
    }

    private void initEditText(Context context) {
        mEditText = new EditText(context);
        mEditText.setBackgroundColor(Color.parseColor("#00000000"));
        mEditText.setMaxLines(1);
        mEditText.setInputType(inputType);
        mEditText.setFilters(new InputFilter[]{new InputFilter.LengthFilter(editViewNum)});
        mEditText.addTextChangedListener(this);
        mEditText.setTextSize(0);
        mEditText.setHeight(1);
        mEditText.setWidth(1);
        addView(mEditText);
    }

    //清空文字
    public void clearText() {
        mEditText.setText("");
        for (TextView textView : mTextViewsList) {
            textView.setText("");
        }
    }

    @Override
    public void beforeTextChanged(CharSequence s, int start, int count, int after) {
    }

    @Override
    public void onTextChanged(CharSequence s, int start, int before, int count) {
    }

    @Override
    public void afterTextChanged(Editable s) {
        if (callBack != null) {
            callBack.afterTextChanged(s.toString());
        }
        if (s.length() <= 1) {
            mTextViewsList.get(0).setText(s);
        } else {
            mTextViewsList.get(mEditText.getText().length() - 1).setText(s.subSequence(s.length() - 1, s.length()));
        }
        if (s.length() == editViewNum) {
            if (callBack != null) {
                callBack.input(mEditText.getText().toString());
            }
        }
    }

    @Override
    public void onClick(View v) { //TextView点击时获取焦点弹出输入法
        mEditText.setFocusable(true);
        mEditText.setFocusableInTouchMode(true);
        mEditText.requestFocus();
        InputMethodManager imm = (InputMethodManager) mContext.getSystemService(Context.INPUT_METHOD_SERVICE);
        imm.toggleSoftInput(0, InputMethodManager.HIDE_NOT_ALWAYS);
    }
}