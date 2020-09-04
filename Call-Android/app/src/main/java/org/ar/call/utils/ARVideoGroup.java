package org.ar.call.utils;


import android.app.Activity;
import android.content.Context;
import android.graphics.Point;
import android.os.Build;
import android.util.Log;
import android.view.Display;
import android.view.TextureView;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import org.ar.call.CallApplication;
import org.ar.call.R;
import org.webrtc.PercentFrameLayout;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class ARVideoGroup {
    private static final String TAG ="ARVideoGroup";
    //所有视频View的容器
    public RelativeLayout m_rl_video_group;
    //所有视频的集合
    public LinkedHashMap<String, VideoView> m_list_video;
    //1大1小时小像距屏幕右边的间隔
    private int HSPACE = 2;
    //1大1小时小像距屏幕上边的间隔
    private int VSPACE = 2;
    //视频View的宽
    private int VIDEO_WIDTH;
    //视频View的高
    private int VIDEO_HEIGHT;
    //屏幕宽
    private int SCREEN_WIDTH;
    //屏幕高
    private int SCREEN_HEIGHT;
    //一排要显示多少个像  会影响小像显示的大小
    private int VIDEO_NUM = 3;

    private Activity activity;

    public ARVideoGroup(Activity activity, RelativeLayout m_rl_video_group) {
        this.m_rl_video_group = m_rl_video_group;
        m_list_video = new LinkedHashMap<>();
        this.activity =activity;
        Point size = new Point();
        Display display = activity.getWindowManager().getDefaultDisplay();
        if (Build.VERSION.SDK_INT >= 17)
            display.getRealSize(size);
        else
            display.getSize(size);
        SCREEN_WIDTH = size.x;
        SCREEN_HEIGHT = size.y;
        ResetVideoSize();
    }



    public LinkedHashMap<String, VideoView> getM_list_video() {
        return m_list_video;
    }

    //一个VideoView 就是一个装了视频View对象
    public class VideoView {
        public String videoId;
        public TextureView videoView;
        public PercentFrameLayout mLayout;
        public ImageView ivMic,ivWait;
        public TextView tvUid,TvUnmanned;
        private Context context;
        private RelativeLayout fl_video;
        public int index;//下标 用于计算位置
        public boolean isBigStream;
        public View view =null;
        public Animation animation;



        public VideoView(String videoId, TextureView videoView, boolean isBigStream) {
            this.videoId = videoId;
            this.videoView = videoView;
            this.context = videoView.getContext();
            this.isBigStream=isBigStream;
            animation = AnimationUtils.loadAnimation(activity,R.anim.animation_rotate);
            mLayout = new PercentFrameLayout(context);
            mLayout.setLayoutParams(new RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT, RelativeLayout.LayoutParams.MATCH_PARENT));
            view = View.inflate(context, R.layout.layout_video, null);//这个View可完全自定义 需要显示名字或者其他图标可以在里面加
            fl_video = view.findViewById(R.id.fl_video);
            TvUnmanned=view.findViewById(R.id.tv_multi_unmanned);
            ivWait=view.findViewById(R.id.iv_multi_wait);
            ivMic=view.findViewById(R.id.iv_layout_mic);
            tvUid =view.findViewById(R.id.tv_layout_uid);
            fl_video.addView(videoView);//将视频View添加到布局中
            mLayout.addView(view);//添加到百分比布局中
        }

        public boolean isBigStream() {
            return isBigStream;
        }

        public void setBigStream(boolean bigStream) {
            isBigStream = bigStream;
        }
    }


    public void addView(String vieoId, TextureView video, boolean isBigStream) {
        VideoView videoView = new VideoView(vieoId, video,isBigStream);
        m_list_video.put(vieoId, videoView);
        m_rl_video_group.addView(videoView.mLayout);//将布局添加到从外面传进来的布局中
        updateLayout();
    }


    public TextureView getView(String viewId) {
        if (m_list_video.containsKey(viewId)){
            return m_list_video.get(viewId).videoView;
        }
        return null;
    }

    public void removeView(String vieoId) {
        if (m_list_video.containsKey(vieoId)) {
            m_rl_video_group.removeView(m_list_video.get(vieoId).mLayout);
            m_rl_video_group.requestLayout();
        }
        m_list_video.remove(vieoId);
        updateLayout();
    }

    public void removeAllView() {
        m_rl_video_group.removeAllViews();
        m_list_video.clear();
    }

    public void setVisibility(String viewId,boolean isVisible){
        if (m_list_video.containsKey(viewId)){
            m_list_video.get(viewId).ivWait.setBackgroundResource(R.drawable.logo_blue);
            m_list_video.get(viewId).TvUnmanned.setVisibility(View.GONE);
            m_list_video.get(viewId).fl_video.setBackgroundResource(R.color.video_bg);
            stopRotate(viewId);
            if (isVisible){
                m_list_video.get(viewId).videoView.setVisibility(View.VISIBLE);
            }else {
                m_list_video.get(viewId).videoView.setVisibility(View.GONE);
            }
        }
    }

    public void setUnmannedText(String viewId,String text){
        if (m_list_video.containsKey(viewId)){
            m_list_video.get(viewId).TvUnmanned.setText(text);
        }
    }

    public void setMicState(String viewId,boolean isMic){
        if (m_list_video.containsKey(viewId)){
            if (isMic){
                m_list_video.get(viewId).ivMic.setBackgroundResource(R.drawable.mic_open);
            }else {
                m_list_video.get(viewId).ivMic.setBackgroundResource(R.drawable.mic_close);
            }
        }
    }

    public void setTextUid(String viewId,boolean isMic){
        if (m_list_video.containsKey(viewId)){
            if (viewId.equals("local")){
                m_list_video.get(viewId).tvUid.setText(CallApplication.the().getUserId());
            }else {
                m_list_video.get(viewId).tvUid.setText(viewId);
            }
            if (isMic){
                m_list_video.get(viewId).ivMic.setVisibility(View.VISIBLE);
            }else {
                m_list_video.get(viewId).ivMic.setVisibility(View.GONE);
            }
        }
    }

    public void startRotate(String viewId){
        if (m_list_video.containsKey(viewId)){
            m_list_video.get(viewId).ivWait.startAnimation(m_list_video.get(viewId).animation);
        }
    }

    public void stopRotate(String viewId){
        if (m_list_video.containsKey(viewId)){
            m_list_video.get(viewId).ivWait.clearAnimation();
        }
    }

    //更新布局  1大1小  九宫格 4x4
//    private void updateLayout() {
//        ResetVideoSize();
//        //改变位置 大小 自己修改
//        List<Map.Entry<String, VideoView>> list = new ArrayList<Map.Entry<String, VideoView>>(m_list_video.entrySet());
//        for (int i = 0; i < list.size(); i++) {//排序
//            list.get(i).getValue().index = i;
//        }
//        if (m_list_video.size() <= 2) {//1个本地像和1个远程像
//            Iterator<Map.Entry<String, VideoView>> iter = m_list_video.entrySet().iterator();
//            while (iter.hasNext()) {
//                Map.Entry<String, VideoView> entry = iter.next();
//                VideoView render = entry.getValue();
//                if (render.index == 0) {
//                    render.mLayout.setPosition(100 - VIDEO_WIDTH - HSPACE, VSPACE, VIDEO_WIDTH, VIDEO_HEIGHT);
//                    render.mLayout.bringToFront();
//                } else {
//                    render.mLayout.setPosition(0, 0, 100, 100);
//                }
//                render.mLayout.requestLayout();
//            }
//            m_rl_video_group.requestLayout();
//        } else {
//            if (m_list_video.size() <= 9) {//3个及以上
//                Iterator<Map.Entry<String, VideoView>> iter = m_list_video.entrySet().iterator();
//                while (iter.hasNext()) {
//                    Map.Entry<String, VideoView> entry = iter.next();
//                    VideoView render = entry.getValue();
//                    int row = render.index / 3;
//                    int col = render.index % 3;
//                    int X = VIDEO_WIDTH * col;
//                    int Y = VIDEO_HEIGHT * row;
//                    render.mLayout.setPosition(X, Y, VIDEO_WIDTH, VIDEO_HEIGHT);
//                    render.mLayout.requestLayout();
//                }
//                m_rl_video_group.requestLayout();
//            } else {
//                Iterator<Map.Entry<String, VideoView>> iter = m_list_video.entrySet().iterator();
//                while (iter.hasNext()) {
//                    Map.Entry<String, VideoView> entry = iter.next();
//                    VideoView render = entry.getValue();
//                    int row = render.index / 4;
//                    int col = render.index % 4;
//                    int X = VIDEO_WIDTH * col;
//                    int Y = VIDEO_HEIGHT * row;
//                    render.mLayout.setPosition(X, Y, VIDEO_WIDTH, VIDEO_HEIGHT);
//                    render.mLayout.requestLayout();
//                }
//                m_rl_video_group.requestLayout();
//            }
//        }
//    }

//    //按4:3的比例计算VIDEO_WIDTH VIDEO_HEIGHT
//    private void ResetVideoSize() {
//        //4:3比例
//        if (m_list_video.size() < 3) {
//            VIDEO_WIDTH = (int) (((SCREEN_WIDTH / VIDEO_NUM)) / (SCREEN_WIDTH / 100f));
//            VIDEO_HEIGHT = (int) (((SCREEN_WIDTH / VIDEO_NUM)) * 1.333333f) / (SCREEN_HEIGHT / 100);
//        } else {
//            if (m_list_video.size() <= 9) {
//                VIDEO_WIDTH = (int) (((SCREEN_WIDTH / 3)) / (SCREEN_WIDTH / 100f));
//                VIDEO_HEIGHT = (int) (((SCREEN_WIDTH / 3)) / (SCREEN_HEIGHT / 100f));
//            } else {
//                VIDEO_WIDTH = (int) (((SCREEN_WIDTH / 4)) / (SCREEN_WIDTH / 100f));
//                VIDEO_HEIGHT = (int) (((SCREEN_WIDTH / 4)) / (SCREEN_HEIGHT / 100f));
//            }
//        }
//
//    }
    //按4:3的比例计算VIDEO_WIDTH VIDEO_HEIGHT


    private void ResetVideoSize() {
        //4:3比例
        if (m_list_video.size() <=4) {
            VIDEO_WIDTH = (int) (((SCREEN_WIDTH / 2)) / (SCREEN_WIDTH / 100f));
            VIDEO_HEIGHT = (int) (((SCREEN_WIDTH / 2)) / (SCREEN_WIDTH / 100f));
        } else {
            if (m_list_video.size() <= 9) {
                VIDEO_WIDTH = (int) (((SCREEN_WIDTH / 3)) / (SCREEN_WIDTH / 100f));
                VIDEO_HEIGHT = (int) (((SCREEN_WIDTH / 3)) / (SCREEN_WIDTH / 100f));
            } else if (m_list_video.size() <= 16){
                VIDEO_WIDTH = (int) (((SCREEN_WIDTH / 4)) / (SCREEN_WIDTH / 100f));
                VIDEO_HEIGHT = (int) (((SCREEN_WIDTH / 4)) / (SCREEN_WIDTH / 100f));
            }else if (m_list_video.size() <= 25){
                VIDEO_WIDTH = (int) (((SCREEN_WIDTH / 5)) / (SCREEN_WIDTH / 100f));
                VIDEO_HEIGHT = (int) (((SCREEN_WIDTH / 5)) / (SCREEN_WIDTH / 100f));
            }else if (m_list_video.size() <= 36){
                VIDEO_WIDTH = (int) (((SCREEN_WIDTH / 6)) / (SCREEN_WIDTH / 100f));
                VIDEO_HEIGHT = (int) (((SCREEN_WIDTH / 6)) / (SCREEN_WIDTH / 100f));
            }else {
                VIDEO_WIDTH = (int) (((SCREEN_WIDTH / 10)) / (SCREEN_WIDTH / 100f));
                VIDEO_HEIGHT = (int) (((SCREEN_WIDTH / 10)) / (SCREEN_WIDTH / 100f));
            }
        }
        Log.i(TAG, "ResetVideoSize: VIDEO_WIDTH ="+VIDEO_WIDTH+",VIDEO_HEIGHT ="+VIDEO_HEIGHT+",SCREEN_WIDTH ="+SCREEN_WIDTH+",SCREEN_HEIGHT="+SCREEN_HEIGHT);
    }
    private void updateLayout() {
        ResetVideoSize();
        //改变位置 大小 自己修改
        List<Map.Entry<String, VideoView>> list = new ArrayList<Map.Entry<String, VideoView>>(m_list_video.entrySet());
        for (int i = 0; i < list.size(); i++) {//排序
            list.get(i).getValue().index = i;
        }
        if (m_list_video.size() <= 4) {//1个本地像和1个远程像
                /*if (list.size()==1){
                    Iterator<Map.Entry<String, VideoView>> iter = m_list_video.entrySet().iterator();
                    while (iter.hasNext()) {
                        Map.Entry<String, VideoView> entry = iter.next();
                        VideoView render = entry.getValue();
                        render.mLayout.setPosition(0, 0, 100, 100);
                        render.mLayout.requestLayout();
                    }
                }else*/
                if (list.size()==1 || list.size()==2){
                    Iterator<Map.Entry<String, VideoView>> iter = m_list_video.entrySet().iterator();
                    while (iter.hasNext()) {
                        Map.Entry<String, VideoView> entry = iter.next();
                        VideoView render = entry.getValue();
                        if (render.index == 0) {
                            render.mLayout.setPosition(0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
                        } else {
                            render.mLayout.setPosition(VIDEO_WIDTH, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
                        }
                        render.mLayout.requestLayout();
                    }
                }else if (list.size()==3){
                    Iterator<Map.Entry<String, VideoView>> iter = m_list_video.entrySet().iterator();
                    while (iter.hasNext()) {
                        Map.Entry<String, VideoView> entry = iter.next();
                        VideoView render = entry.getValue();
                        if (render.index == 0) {
                            render.mLayout.setPosition(0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
                        } else if (render.index == 1) {
                            render.mLayout.setPosition(VIDEO_WIDTH, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
                        } else if (render.index == 2) {
                            render.mLayout.setPosition(0,  VIDEO_HEIGHT, VIDEO_WIDTH, VIDEO_HEIGHT);
                        }
                        render.mLayout.requestLayout();
                    }
                }else if (list.size()==4) {
                    Iterator<Map.Entry<String, VideoView>> iter = m_list_video.entrySet().iterator();
                    while (iter.hasNext()) {
                        Map.Entry<String, VideoView> entry = iter.next();
                        VideoView render = entry.getValue();
                        if (render.index == 0) {
                            render.mLayout.setPosition(0, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
                        } else if (render.index == 1) {
                            render.mLayout.setPosition(VIDEO_WIDTH, 0, VIDEO_WIDTH, VIDEO_HEIGHT);
                        } else if (render.index == 2) {
                            render.mLayout.setPosition(0,  VIDEO_HEIGHT, VIDEO_WIDTH, VIDEO_HEIGHT);
                        } else if (render.index == 3) {
                            render.mLayout.setPosition(VIDEO_WIDTH, VIDEO_HEIGHT, VIDEO_WIDTH, VIDEO_HEIGHT);
                        }
                        render.mLayout.requestLayout();
                    }
                }
            Log.d("位置大小 小于4个时","WIDTH="+VIDEO_WIDTH+"HEIGHT="+VIDEO_HEIGHT);
            m_rl_video_group.requestLayout();
        }else {
            if (m_list_video.size() <= 9) {//4个及以上
                Iterator<Map.Entry<String, VideoView>> iter = m_list_video.entrySet().iterator();
                while (iter.hasNext()) {
                    Map.Entry<String, VideoView> entry = iter.next();
                    VideoView render = entry.getValue();
                    int row = render.index / 3;
                    int col = render.index % 3;
                    int X = VIDEO_WIDTH * col;
                    int Y = VIDEO_HEIGHT * row;
                    render.mLayout.setPosition(X, Y, VIDEO_WIDTH, VIDEO_HEIGHT);
                    render.mLayout.requestLayout();
                    Log.d("位置大小 小于9个时","X="+X+"Y="+Y+"WIDTH="+VIDEO_WIDTH+"HEIGHT="+VIDEO_HEIGHT);
                }
                m_rl_video_group.requestLayout();
            } else if (m_list_video.size() <= 16){
                Iterator<Map.Entry<String, VideoView>> iter = m_list_video.entrySet().iterator();
                while (iter.hasNext()) {
                    Map.Entry<String, VideoView> entry = iter.next();
                    VideoView render = entry.getValue();
                    int row = render.index / 4;
                    int col = render.index % 4;
                    int X = VIDEO_WIDTH * col;
                    int Y = VIDEO_HEIGHT * row;
                    render.mLayout.setPosition(X, Y, VIDEO_WIDTH, VIDEO_HEIGHT);
                    render.mLayout.requestLayout();
                    Log.d("位置大小 大于9个时","X="+X+"Y="+Y+"WIDTH="+VIDEO_WIDTH+"HEIGHT="+VIDEO_HEIGHT);
                }
                m_rl_video_group.requestLayout();
            }else if (m_list_video.size() <= 25){
                Iterator<Map.Entry<String, VideoView>> iter = m_list_video.entrySet().iterator();
                while (iter.hasNext()) {
                    Map.Entry<String, VideoView> entry = iter.next();
                    VideoView render = entry.getValue();
                    int row = render.index / 5;
                    int col = render.index % 5;
                    int X = VIDEO_WIDTH * col;
                    int Y = VIDEO_HEIGHT * row;
                    render.mLayout.setPosition(X, Y, VIDEO_WIDTH, VIDEO_HEIGHT);
                    render.mLayout.requestLayout();
                    Log.d("位置大小 大于9个时","X="+X+"Y="+Y+"WIDTH="+VIDEO_WIDTH+"HEIGHT="+VIDEO_HEIGHT);
                }
                m_rl_video_group.requestLayout();
            }else if (m_list_video.size() <= 36){
                Iterator<Map.Entry<String, VideoView>> iter = m_list_video.entrySet().iterator();
                while (iter.hasNext()) {
                    Map.Entry<String, VideoView> entry = iter.next();
                    VideoView render = entry.getValue();
                    int row = render.index / 6;
                    int col = render.index % 6;
                    int X = VIDEO_WIDTH * col;
                    int Y = VIDEO_HEIGHT * row;
                    render.mLayout.setPosition(X, Y, VIDEO_WIDTH, VIDEO_HEIGHT);
                    render.mLayout.requestLayout();
                    Log.d("位置大小 大于9个时","X="+X+"Y="+Y+"WIDTH="+VIDEO_WIDTH+"HEIGHT="+VIDEO_HEIGHT);
                }
                m_rl_video_group.requestLayout();
            }else {
                Iterator<Map.Entry<String, VideoView>> iter = m_list_video.entrySet().iterator();
                while (iter.hasNext()) {
                    Map.Entry<String, VideoView> entry = iter.next();
                    VideoView render = entry.getValue();
                    int row = render.index / 10;
                    int col = render.index % 10;
                    int X = VIDEO_WIDTH * col;
                    int Y = VIDEO_HEIGHT * row;
                    render.mLayout.setPosition(X, Y, VIDEO_WIDTH, VIDEO_HEIGHT);
                    render.mLayout.requestLayout();
                    Log.d("位置大小 大于9个时","X="+X+"Y="+Y+"WIDTH="+VIDEO_WIDTH+"HEIGHT="+VIDEO_HEIGHT);
                }
                m_rl_video_group.requestLayout();
            }
        }

    }

}
