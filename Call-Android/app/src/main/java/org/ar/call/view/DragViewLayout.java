package org.ar.call.view;

import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.widget.RelativeLayout;

import androidx.customview.widget.ViewDragHelper;

public class DragViewLayout extends RelativeLayout {
    private ViewDragHelper viewDragHelper;
    private Context mContext;
    private int lastLeft=-1,lastTop=-1;

    public DragViewLayout(Context context, AttributeSet attrs) {
        super(context, attrs);
        mContext = context;
            viewDragHelper = ViewDragHelper.create(this, 1.0f, new ViewDragHelper.Callback() {
                @Override
                public boolean tryCaptureView(View child, int pointerId) {
                   if (null!=child.getTag()){
                       if (child.getTag().toString().equals("local")||child.getTag().toString().equals("remote")||child.getTag().toString().equals("local_log")||child.getTag().toString().equals("remote_log")){
                           return true;
                       }
                   }
                    return false;
                }

                @Override
                public int clampViewPositionHorizontal(View child, int left, int dx) {
                    int paddingleft = getPaddingLeft();
                    if (left < paddingleft) {
                        return paddingleft;
                    }

                    int pos = getWidth() - child.getWidth() - getPaddingRight();
                    if (left > pos) {
                        return pos;
                    }
                    return left;

                }

                @Override
                public int clampViewPositionVertical(View child, int top, int dy) {
                    //控制子view拖曳不能超过最顶部
                    int paddingTop = getPaddingTop();
                    if (top < paddingTop) {
                        return paddingTop;
                    }

                    //控制子view不能越出底部的边界。
                    int pos = getHeight() - child.getHeight() - getPaddingBottom();
                    if (top > pos) {
                        return pos;
                    }

                    //其他情况正常，直接返回Android系统计算的top即可。
                    return top;

                }


                @Override
                public void onViewPositionChanged(View changedView, int left, int top, int dx, int dy) {
                    super.onViewPositionChanged(changedView, left, top, dx, dy);
                    Log.d("onViewPositionChanged","left="+left+"==top:"+top+"dx=="+dx+"==dy=="+dy);
                    lastLeft=left;
                    lastTop=top;
                }

                //当手指释放的时候回调
                @Override
                public void onViewReleased(View releasedChild, float xvel, float yvel) {
                }

                @Override
                public int getViewVerticalDragRange(View child) {
                    return getMeasuredHeight() - child.getMeasuredHeight();
                }

                @Override
                public int getViewHorizontalDragRange(View child) {
                    return getMeasuredWidth() - child.getMeasuredWidth();
                }
            });
    }

    @Override
    public boolean onInterceptTouchEvent(MotionEvent event) {
            return viewDragHelper.shouldInterceptTouchEvent(event);
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
            viewDragHelper.processTouchEvent(event);
        return true;
    }

    @Override
    public void computeScroll() {
            if (viewDragHelper.continueSettling(true)) {
                invalidate();
            }
    }

    public int getLastLeft() {
        return lastLeft;
    }

    public int getLastTop() {
        return lastTop;
    }
}