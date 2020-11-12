package org.ar.call.p2p;


import android.Manifest;
import android.annotation.TargetApi;
import android.app.ActivityManager;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.media.MediaPlayer;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.text.TextUtils;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.TextureView;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.Chronometer;
import android.widget.FrameLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import androidx.collection.ArraySet;
import androidx.recyclerview.widget.RecyclerView;

import com.gyf.immersionbar.ImmersionBar;
import com.kongzue.dialog.v3.MessageDialog;
import com.lzf.easyfloat.EasyFloat;
import com.lzf.easyfloat.enums.ShowPattern;
import com.lzf.easyfloat.enums.SidePattern;
import com.lzf.easyfloat.interfaces.OnFloatCallbacks;
import com.lzf.easyfloat.interfaces.OnInvokeView;
import com.lzf.easyfloat.interfaces.OnPermissionResult;
import com.lzf.easyfloat.permission.PermissionUtils;

import org.ar.call.BaseActivity;
import org.ar.call.CallApplication;
import org.ar.call.R;
import org.ar.call.utils.Constans;
import org.ar.call.utils.DensityUtil;
import org.ar.call.utils.SpUtil;
import org.ar.call.weight.DragViewLayout;
import org.ar.rtc.Constants;
import org.ar.rtc.IRtcEngineEventHandler;
import org.ar.rtc.RtcEngine;
import org.ar.rtc.VideoEncoderConfiguration;
import org.ar.rtc.video.VideoCanvas;
import org.ar.rtm.ErrorInfo;
import org.ar.rtm.LocalInvitation;
import org.ar.rtm.RemoteInvitation;
import org.ar.rtm.ResultCallback;
import org.ar.rtm.RtmCallEventListener;
import org.ar.rtm.RtmCallManager;
import org.ar.rtm.RtmClient;
import org.ar.rtm.RtmClientListener;
import org.ar.rtm.RtmMessage;
import org.ar.rtm.SendMessageOptions;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import static org.ar.call.CallApplication.RTC_APPID;

public class VideoActivity extends BaseActivity  {

    private FrameLayout flVideoGroup;
    private Button ibtnAudio, ibtnVideo, ibtnSpeak, ibtnSwitch;


    private String channelId;
    private String userId;
    private String remoteUserId;
    private DragViewLayout rlVideo;
    private RelativeLayout rlBtnGroup, rl_remote_video, rl_local_video;
    //    private ARVideoGroup videoGroup;

    //语音模式
    private FrameLayout flAudioGroup;
    private Button a_btnAudio,  a_btnSpeak;
    private TextView tv_remote_audio_user;
    private Chronometer chronometer;


    private RtcEngine mRtcEngine;
    private RtmClient rtmClient;
    private RtmCallManager rtmCallManager;
    private String remoteVideoId = "";
    private int callMode;

    private boolean isSmall = false;//是否缩小
    private static final int PERMISSION_REQ_ID = 22;
    private static final String[] REQUESTED_PERMISSIONS = {
            Manifest.permission.RECORD_AUDIO,
            Manifest.permission.CAMERA,
            Manifest.permission.WRITE_EXTERNAL_STORAGE
    };
    private HashMap<String, TextureView> videoList = new HashMap<>();



    //呼叫等待页面
    private Button btnHangup, btnAccept, btnCall,btnSwitchAudio;
    private MediaPlayer player;
    private TextView tvUserPre;
    private TextView tvState;
    private RelativeLayout rlCall,rl_video_preview;
    private LocalInvitation localInvitation;
    private RemoteInvitation remoteInvitation;
    private boolean isCall = false; //true 主动呼叫 false 被呼叫
    private boolean isConference;
    private boolean isOpenAIDenoise;
    private boolean isWaiting = false;
    private boolean isCalling = false;





    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        setContentView(R.layout.activity_video);
        ImmersionBar.with(this).statusBarDarkFont(false, 0.2f).keyboardEnable(true).init();
        ibtnAudio = findViewById(R.id.ibtn_audio);
        ibtnVideo = findViewById(R.id.ibtn_video);
        ibtnSpeak = findViewById(R.id.ibtn_speak);
        ibtnSwitch = findViewById(R.id.btn_switch);
        a_btnAudio = findViewById(R.id.ibtn_audio_audio);
        a_btnSpeak = findViewById(R.id.ibtn_audio_speak);
        tv_remote_audio_user = findViewById(R.id.tv_remote_audio_user);
        chronometer = findViewById(R.id.chronometer);
        flAudioGroup = findViewById(R.id.fl_audio_group);
        flVideoGroup = findViewById(R.id.fl_video_group);
        rlVideo = findViewById(R.id.rl_video);
        rlBtnGroup = findViewById(R.id.rl_btn_group);
        rl_remote_video = findViewById(R.id.rl_remote_video);
        rl_local_video = findViewById(R.id.rl_local_video);

        //呼叫等待页面
        userId = CallApplication.the().getUserId();
        btnCall = findViewById(R.id.btn_call);
        btnSwitchAudio = findViewById(R.id.btn_switch_audio);
        rl_video_preview = findViewById(R.id.rl_video_preview);
        rlCall = findViewById(R.id.rl_call_pre);
        tvUserPre = findViewById(R.id.tv_user_pre);
        tvState = findViewById(R.id.tv_state);
        btnAccept = findViewById(R.id.btn_accept);
        btnHangup = findViewById(R.id.btn_hangup);
        rtmClient = CallApplication.the().getCallManager().getRtmClient();
        rtmCallManager = CallApplication.the().getCallManager().getRtmCallManager();


        isCall = !getIntent().getBooleanExtra("RecCall",false);
        if (isCall){
            localInvitation = CallApplication.the().getCallManager().getLocalInvitation();
            try {
                JSONObject jsonObject = new JSONObject(localInvitation.getContent());
                callMode = jsonObject.getInt("Mode");
                channelId = jsonObject.getString("ChanId");
                userId = CallApplication.the().getUserId();
                remoteUserId = localInvitation.getCalleeId();
            } catch (JSONException e) {
                e.printStackTrace();
            }
            tvState.setText(callMode ==Constans.AUDIO_MODE ? "语音呼叫中" :"视频呼叫中");
            Subscribe(localInvitation.getCalleeId());
            showCallLayout(false,localInvitation.getCalleeId());
            rtmCallManager.sendLocalInvitation(localInvitation, new ResultCallback<Void>() {
                @Override
                public void onSuccess(Void var1) {

                }

                @Override
                public void onFailure(ErrorInfo var1) {

                }
            });




        }else {
            remoteInvitation = CallApplication.the().getCallManager().getRemoteInvitation();
            try {
                JSONObject jsonObject = new JSONObject(remoteInvitation.getContent());
                callMode = jsonObject.getInt("Mode");
                channelId = jsonObject.getString("ChanId");
                userId = CallApplication.the().getUserId();
                remoteUserId = remoteInvitation.getCallerId();
            } catch (JSONException e) {
                e.printStackTrace();
            }
            tvState.setText(callMode ==Constans.AUDIO_MODE ? "收到语音呼叫邀请" :"收到视频呼叫邀请");
            Subscribe(remoteInvitation.getCallerId());
            showCallLayout(true,remoteInvitation.getCallerId());
        }

        if (callMode == Constans.VIDEO_MODE){
            rl_video_preview.setVisibility(View.VISIBLE);
            initializeEngine();
            mRtcEngine.enableVideo();
            TextureView mLocalView = RtcEngine.CreateRendererView(this);
            rl_video_preview.addView(mLocalView,0);
            mRtcEngine.setupLocalVideo(new VideoCanvas(mLocalView, Constants.RENDER_MODE_HIDDEN, channelId, userId, Constants.VIDEO_MIRROR_MODE_AUTO));
            mRtcEngine.startPreview();
        }
        startRing();

        setNeedUnRegister(false);//单独处理 悬浮窗打开会走onStop 避免取消注册了回调 收不到消息
    }

    private void startRing() {
        try {
            player = MediaPlayer.create(this, R.raw.video_request);
            //循环播放
            player.setLooping(true);
            player.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    /**
     *
     * @param isCalled 是否是被叫
     * @param callId
     */
    private void showCallLayout(boolean isCalled,String callId) {
        tvUserPre.setText(callId);
        btnHangup.setVisibility(View.VISIBLE);
        btnAccept.setVisibility(isCalled ? View.VISIBLE :View.GONE);
        if (isCalled){//被叫
            if (callMode == Constans.VIDEO_MODE){//如果是视频呼叫
                btnSwitchAudio.setVisibility(View.VISIBLE);//则显示语音接听按钮
            }else {
                btnSwitchAudio.setVisibility(View.GONE);
            }
            RelativeLayout.LayoutParams layoutParams = (RelativeLayout.LayoutParams) btnHangup.getLayoutParams();
            layoutParams.removeRule(RelativeLayout.CENTER_HORIZONTAL);
            layoutParams.addRule(RelativeLayout.ALIGN_PARENT_LEFT);
            layoutParams.setMargins(DensityUtil.dip2px(this,35),0,0,0);
            btnHangup.setLayoutParams(layoutParams);
        }else {
            RelativeLayout.LayoutParams layoutParams = (RelativeLayout.LayoutParams) btnHangup.getLayoutParams();
            layoutParams.removeRule(RelativeLayout.ALIGN_PARENT_LEFT);
            layoutParams.addRule(RelativeLayout.CENTER_HORIZONTAL);
            btnHangup.setLayoutParams(layoutParams);
            btnHangup.requestLayout();
            btnSwitchAudio.setVisibility(View.GONE);
        }
    }

    private void stopRing() {
        try {
            if (null != player) {
                player.stop();
                player.release();
                player = null;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void initEngineAndJoinChannel() {
        isWaiting = false;
        isCalling =true;
        stopRing();
        if (callMode == Constans.AUDIO_MODE){
            initializeEngine();
            flVideoGroup.setVisibility(View.GONE);
            flAudioGroup.setVisibility(View.VISIBLE);
            tv_remote_audio_user.setText(remoteUserId);
        }else {
            flVideoGroup.setVisibility(View.VISIBLE);
            flAudioGroup.setVisibility(View.GONE);
            DisplayMetrics outMetrics = new DisplayMetrics();
            getWindowManager().getDefaultDisplay().getMetrics(outMetrics);
            int widthPixels = outMetrics.widthPixels;
            RelativeLayout.MarginLayoutParams marginLayoutParams = (RelativeLayout.MarginLayoutParams) rl_local_video.getLayoutParams();
            marginLayoutParams.topMargin = DensityUtil.dip2px(VideoActivity.this, 12);
            marginLayoutParams.leftMargin = widthPixels - DensityUtil.dip2px(VideoActivity.this, 90 + 12);//90是View的宽  12 是margin
            rl_local_video.setLayoutParams(marginLayoutParams);
        }
        if (callMode == Constans.VIDEO_MODE) {
            rl_video_preview.removeAllViews();
            Toast.makeText(VideoActivity.this,"声音将通过扬声器播放",Toast.LENGTH_SHORT).show();
            setupVideoConfig();
            rl_local_video.postDelayed(new Runnable() {
                @Override
                public void run() {
                    setupLocalVideo();
                }
            },1000);
            mRtcEngine.setEnableSpeakerphone(true);
        }else {
            Toast.makeText(VideoActivity.this,"声音将通过听筒播放",Toast.LENGTH_SHORT).show();
            mRtcEngine.setEnableSpeakerphone(false);
        }
        joinChannel();
    }

    private void initializeEngine() {
            mRtcEngine = RtcEngine.create(this, RTC_APPID, mRtcEventHandler);
    }

    private void setupVideoConfig() {
        mRtcEngine.enableVideo();
        VideoEncoderConfiguration videoEncoderConfiguration = new VideoEncoderConfiguration();
        int spFrame = SpUtil.getInt("frame");
        if (spFrame == 1) {
            videoEncoderConfiguration.frameRate = 24;
        } else if (spFrame == 2) {
            videoEncoderConfiguration.frameRate = 15;
        } else if (spFrame == 3) {
            videoEncoderConfiguration.frameRate = 7;
        }
        int spSize = SpUtil.getInt("size");
        if (spSize == 1) {
            videoEncoderConfiguration.dimensions = VideoEncoderConfiguration.VD_320x240;
        } else if (spSize == 2) {
            videoEncoderConfiguration.dimensions = VideoEncoderConfiguration.VD_480x360;
        } else if (spSize == 3) {
            videoEncoderConfiguration.dimensions = VideoEncoderConfiguration.VD_960x720;
        }
        videoEncoderConfiguration.bitrate = 1000;
        mRtcEngine.setVideoEncoderConfiguration(videoEncoderConfiguration);
        isOpenAIDenoise =SpUtil.getBoolean("isOpenAIDenoise",false);
        JSONObject jsonParams =new JSONObject();
        try {
            if (isOpenAIDenoise){
                jsonParams.put("Cmd","SetAudioAiNoise");
                jsonParams.put("Enable",1);//1 开启智能降噪 0 关闭智能降噪
            }else {
                jsonParams.put("Cmd","SetAudioAiNoise");
                jsonParams.put("Enable",0);//1 开启智能降噪 0 关闭智能降噪
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
        mRtcEngine.setParameters(jsonParams.toString());
    }

    private void joinChannel() {
        mRtcEngine.joinChannel("",channelId,"",userId);

    }

    private void setupLocalVideo() {
        TextureView mLocalView = RtcEngine.CreateRendererView(this);
        if (rl_local_video.getChildCount() == 2) {
            rl_local_video.removeViewAt(1);
        }
        if (videoList.containsKey("local")) {
            videoList.remove("local");
        }
        rl_local_video.addView(mLocalView, 1);
        rl_local_video.setTag("local");
        videoList.put("local", mLocalView);
        mRtcEngine.setupLocalVideo(new VideoCanvas(mLocalView, Constants.RENDER_MODE_HIDDEN, channelId, userId, Constants.VIDEO_MIRROR_MODE_AUTO));

    }

    private void setupRemoteVideo(String uid) {
        TextureView mRemoteView = RtcEngine.CreateRendererView(this);
        if (rl_remote_video.getChildCount() == 2) {
            rl_remote_video.removeViewAt(1);
        }
        if (videoList.containsKey("remote")) {
            videoList.remove("remote");
        }
        rl_remote_video.addView(mRemoteView, 1);
        videoList.put("remote", mRemoteView);
        mRtcEngine.setupRemoteVideo(new VideoCanvas(mRemoteView, Constants.RENDER_MODE_HIDDEN, channelId, uid, Constants.VIDEO_MIRROR_MODE_DISABLED));
    }

    private void removeRemoteVideo(String uid) {
        rl_remote_video.removeViewAt(1);
    }


    private void showLongToast(final String msg) {
        this.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(getApplicationContext(), msg, Toast.LENGTH_SHORT).show();
            }
        });
    }

    private final IRtcEngineEventHandler mRtcEventHandler = new IRtcEngineEventHandler() {
        @Override
        public void onJoinChannelSuccess(final String channel, final String uid, int elapsed) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (chronometer!=null) {
                        chronometer.start();
                    }
                }
            });
        }

        @Override
        public void onUserJoined(final String uid, int elapsed) {
            super.onUserJoined(uid, elapsed);
            runOnUiThread(new Runnable() {
                @Override
                public void run() {

                }
            });
        }


        @Override
        public void onFirstRemoteVideoDecoded(final String uid, int width, int height, int elapsed) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {//对方视频第一帧
                    remoteVideoId = uid;
                    setupRemoteVideo(uid);
                }
            });
        }

        @Override
        public void onUserOffline(final String uid, int reason) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
//                    Toast.makeText(VideoActivity.this,"对方已挂断",Toast.LENGTH_SHORT).show();
//                    release();
                }
            });
        }

        @Override
        public void onRemoteVideoStateChanged(String uid, int state, int reason, int elapsed) {
            super.onRemoteVideoStateChanged(uid, state, reason, elapsed);
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (reason == 5 || reason == 6) {
                        if (rl_local_video.getTag()==null){
                            return;
                        }
                        if (rl_local_video.getTag().equals("remote")) {
                            if (rl_local_video.getChildAt(1) != null) {
                                rl_local_video.getChildAt(1).setVisibility(reason == 6 ? View.VISIBLE : View.INVISIBLE);

                            }

                        } else {
                            if (rl_remote_video.getChildAt(1) != null) {
                                rl_remote_video.getChildAt(1).setVisibility(reason == 6 ? View.VISIBLE : View.INVISIBLE);
                            }

                        }
                    }
                }
            });

        }

        @Override
        public void onRemoteAudioStateChanged(String uid, int state, int reason, int elapsed) {
            super.onRemoteAudioStateChanged(uid, state, reason, elapsed);
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                }
            });
        }

        @Override
        public void onRemoteVideoStats(RemoteVideoStats stats) {
            super.onRemoteVideoStats(stats);
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Log.d("VideoActivity", "丢包率：" + stats.packetLossRate);
                }
            });
        }

        @Override
        public void onRtcStats(RtcStats stats) {
            super.onRtcStats(stats);
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Log.d("RtcStats",
                            "RTT:"+stats.gatewayRtt+"\n"
                                    +"txPacketLossRate:"+stats.txPacketLossRate+"\n"
                                    +"rxPacketLossRate:"+stats.rxPacketLossRate);
                }
            });
        }

        @Override
        public void onWarning(int warn) {
            super.onWarning(warn);
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                }
            });
        }

        @Override
        public void onError(final int err) {
            super.onError(err);
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                }
            });
        }
    };


    public void Leave(View view) {
        release();
    }

    public void release() {
        if (EasyFloat.appFloatIsShow()) {
            EasyFloat.dismissAppFloat();
            isSmall = false;
        }
        if (callMode ==Constans.VIDEO_MODE){
            rlVideo.removeAllViews();
        }
        mRtcEngine.leaveChannel();
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("Cmd","EndCall");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        RtmMessage message = rtmClient.createMessage(jsonObject.toString());
        rtmClient.sendMessageToPeer(remoteUserId,message,new SendMessageOptions(),null);
        finish();
    }

    public void Small(View view) {
        int version = android.os.Build.VERSION.SDK_INT;
        if (version < 21) {
            showLongToast("暂不支持该设备");
            return;
        }
        if (videoList.size() <= 1) {
            showLongToast("只有1人，不能最小化");
            return;
        }
        if (!PermissionUtils.checkPermission(VideoActivity.this)) {
            PermissionUtils.requestPermission(VideoActivity.this, new OnPermissionResult() {
                @Override
                public void permissionResult(boolean b) {
                    if (!b) {
                        showLongToast("请打开悬浮窗权限");
                    }
                }
            });
            return;
        }
        moveTaskToBack(true);
        isSmall = true;
        rl_local_video.removeViewAt(1);
        rl_remote_video.removeViewAt(1);
        showFloatWindow();

    }

    @TargetApi(11)
    protected void moveToFront() {
        if (Build.VERSION.SDK_INT >= 11) { // honeycomb
            ActivityManager manager = (ActivityManager) getSystemService(Context.ACTIVITY_SERVICE);
            List<ActivityManager.RunningTaskInfo> recentTasks = manager.getRunningTasks(Integer.MAX_VALUE);
            for (int i = 0; i < recentTasks.size(); i++) {
                // bring to front
                if (recentTasks.get(i).baseActivity.toShortString().indexOf("org.ar.call.p2p.VideoActivity") > -1) {
                    manager.moveTaskToFront(recentTasks.get(i).id, ActivityManager.MOVE_TASK_WITH_HOME);
                }
            }

        }

    }


    public void showFloatWindow() {
        EasyFloat.with(this)
                .setShowPattern(ShowPattern.FOREGROUND)
                .setDragEnable(true)
                .setGravity(Gravity.RIGHT)
                .setSidePattern(SidePattern.RESULT_SIDE)
                .setLayout(R.layout.float_window, new OnInvokeView() {
                    @Override
                    public void invoke(View view) {
                        final RelativeLayout rl_float_video = view.findViewById(R.id.rl_float_video);
                        rl_float_video.removeAllViews();
                        TextureView mRemoteView = RtcEngine.CreateRendererView(getBaseContext());
                        rl_float_video.addView(mRemoteView);
                        mRtcEngine.setupRemoteVideo(new VideoCanvas(mRemoteView, VideoCanvas.RENDER_MODE_HIDDEN, channelId, remoteVideoId, Constants.VIDEO_MIRROR_MODE_DISABLED));
                        rl_float_video.setOnClickListener(new View.OnClickListener() {
                            @Override
                            public void onClick(View v) {
                                EasyFloat.dismissAppFloat();
                                isSmall = false;
                                if (Build.VERSION.SDK_INT >= 29) {
                                    startActivity(new Intent(VideoActivity.this, VideoActivity.class));
                                } else {
                                    moveToFront();
                                }
                                if (rlVideo.getLastLeft() != -1) {
                                    RelativeLayout.MarginLayoutParams marginLayoutParams = (RelativeLayout.MarginLayoutParams) rl_local_video.getLayoutParams();
                                    marginLayoutParams.leftMargin = rlVideo.getLastLeft();
                                    marginLayoutParams.topMargin = rlVideo.getLastTop();
                                    rl_local_video.setLayoutParams(marginLayoutParams);
                                }
                                setupLocalVideo();
                                setupRemoteVideo(remoteVideoId);
                            }
                        });

                    }
                }).registerCallbacks(new OnFloatCallbacks() {
            @Override
            public void createdResult(boolean b, String s, View view) {

            }

            @Override
            public void show(View view) {

            }

            @Override
            public void hide(View view) {

            }

            @Override
            public void dismiss() {

            }

            @Override
            public void touchEvent(View view, MotionEvent motionEvent) {

            }

            @Override
            public void drag(View view, MotionEvent motionEvent) {

            }

            @Override
            public void dragEnd(View view) {

            }
        }).show();
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            if (rlCall.getVisibility()==View.VISIBLE){
                Back();
            }else {
                release();
            }

            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    protected void onResume() {
        super.onResume();
        isWaiting = true;
    }


    @Override
    protected void onDestroy() {
        super.onDestroy();
        stopRing();
        isWaiting = false;
        isCalling = false;
        CallApplication.the().getCallManager().unregisterCallListener(this);
        CallApplication.the().getCallManager().unregisterListener(this);
        if (callMode==Constans.AUDIO_MODE&&chronometer!=null){
            chronometer.stop();
        }
        UnSubscribe(remoteUserId);
        RtcEngine.destroy();

    }

    @Override
    public boolean moveTaskToBack(boolean nonRoot) {
        return super.moveTaskToBack(nonRoot);
    }

    public void SwitchCamera(View view) {
        ibtnSwitch.setSelected(!ibtnSwitch.isSelected());
        if (mRtcEngine != null) {
            mRtcEngine.switchCamera();
        }
    }

    public void SwitchSpeak(View view) {
        ibtnSpeak.setSelected(!ibtnSpeak.isSelected());
        mRtcEngine.setEnableSpeakerphone(ibtnSpeak.isSelected());
    }

    public void MuteLocalVideo(View view) {
        ibtnVideo.setSelected(!ibtnVideo.isSelected());
        mRtcEngine.muteLocalVideoStream(ibtnVideo.isSelected());
        if (rl_local_video.getTag().equals("local")) {
            rl_local_video.getChildAt(1).setVisibility(!ibtnVideo.isSelected() ? View.VISIBLE : View.INVISIBLE);
        } else {
            rl_remote_video.getChildAt(1).setVisibility(!ibtnVideo.isSelected() ? View.VISIBLE : View.INVISIBLE);
        }
    }

    public void MuteLocalAudio(View view) {
        ibtnAudio.setSelected(!ibtnAudio.isSelected());
        mRtcEngine.muteLocalAudioStream(ibtnAudio.isSelected());
    }


    @Override
    public void onConnectionStateChanged(int state, int i1) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (state==4){
                    release();
                    Toast.makeText(VideoActivity.this,"网络异常",Toast.LENGTH_SHORT).show();
                }else if (state==5){
                    release();
                    Toast.makeText(VideoActivity.this,"已在其他设备登录",Toast.LENGTH_SHORT).show();
                }
            }
        });
    }


    @Override
    public void onMessageReceived(RtmMessage rtmMessage, String s) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    JSONObject jsonObject = new JSONObject(rtmMessage.getText());
                    String cmd = jsonObject.getString("Cmd");
                    if (cmd.equals("EndCall")){
                        Toast.makeText(VideoActivity.this,"对方已挂断",Toast.LENGTH_SHORT).show();
                        release();
                    }else  if (cmd.equals("SwitchAudio")){
                        showAudioMode();

                    }
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        });
    }

    @Override
    public void onTokenExpired() {

    }



    //切换大小视图
    public void SwitchVideo(View view) {
        if (videoList.size() < 2) {
            return;
        }


        rl_remote_video.removeViewAt(1);
        rl_local_video.removeViewAt(1);
        if (rlVideo.getLastLeft() != -1) {
            RelativeLayout.MarginLayoutParams marginLayoutParams = (RelativeLayout.MarginLayoutParams) rl_local_video.getLayoutParams();
            marginLayoutParams.leftMargin = rlVideo.getLastLeft();
            marginLayoutParams.topMargin = rlVideo.getLastTop();
            rl_local_video.setLayoutParams(marginLayoutParams);
        }
        if (rl_local_video.getTag().toString().equals("local")) {
            rl_remote_video.addView(videoList.get("local"), 1);
            rl_local_video.addView(videoList.get("remote"), 1);
            rl_local_video.setTag("remote");
        } else {
            rl_remote_video.addView(videoList.get("remote"), 1);
            rl_local_video.addView(videoList.get("local"), 1);
            rl_local_video.setTag("local");
        }


    }

    public void RemoteViewOnclick(View view) {
        if (rlBtnGroup.getVisibility() == View.VISIBLE) {
            rlBtnGroup.setVisibility(View.GONE);
        } else {
            rlBtnGroup.setVisibility(View.VISIBLE);
        }
    }

    private void Subscribe(String peerId){
        Set<String> list = new ArraySet<>();
        list.add(peerId);
        rtmClient.subscribePeersOnlineStatus(list,null);
    }

    public void UnSubscribe(String peerId){
        Set<String> list = new ArraySet<>();
        list.add(peerId);
        rtmClient.unsubscribePeersOnlineStatus(list,null);
    }

    public void AudioLeave(View view) {
       release();
    }

    public void AudioSwitchSpeak(View view)
    {
        a_btnSpeak.setSelected(!a_btnSpeak.isSelected());
        mRtcEngine.setEnableSpeakerphone(a_btnSpeak.isSelected());
    }

    public void AudioMuteLocalAudio(View view) {
        a_btnAudio.setSelected(!a_btnAudio.isSelected());
        mRtcEngine.muteLocalAudioStream(a_btnAudio.isSelected());
    }
    public void showTipDialog(String tips) {
        MessageDialog.show(this, "提示", tips, "确定");
    }

    @Override
    public void onLocalInvitationCanceled(LocalInvitation localInvitation) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {//你取消了通话
                finish();
            }
        });
    }

    @Override
    public void onLocalInvitationRefused(LocalInvitation localInvitation, String s) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (!TextUtils.isEmpty(s)){
                    try {
                        JSONObject jsonObject = new JSONObject(s);
                        if (jsonObject.has("Cmd")){
                            String reason = jsonObject.getString("Cmd");
                            if (reason.equals("Calling")){
                                Toast.makeText(VideoActivity.this,"对方正忙",Toast.LENGTH_SHORT).show();
                            }
                        }
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }else {
                    Toast.makeText(VideoActivity.this,"对方拒绝通话",Toast.LENGTH_SHORT).show();
                }
                finish();
            }
        });
    }

    @Override
    public void onLocalInvitationAccepted(final LocalInvitation local, String s) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                //被叫已接受呼叫邀请。这时候还需要判断一下 对方是不是切换到语音接听了
                try {
                    JSONObject jsonObject = new JSONObject(s);
                    callMode = jsonObject.getInt("Mode");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                rlCall.setVisibility(View.GONE);
                initEngineAndJoinChannel();
            }
        });
    }

    @Override
    public void onLocalInvitationReceivedByPeer(LocalInvitation var1) {

    }

    @Override
    public void onLocalInvitationFailure(LocalInvitation localInvitation, int i) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(VideoActivity.this,"对方未能接通呼叫",Toast.LENGTH_SHORT).show();
                finish();
            }
        });
    }
    @Override
    public void onRemoteInvitationReceived(RemoteInvitation var1) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (isWaiting||isCalling){
                    JSONObject params = new JSONObject();
                    try {
                        params.put("Cmd","Calling");
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                    var1.setResponse(params.toString());
                    rtmCallManager.refuseRemoteInvitation(var1,null);
                }
            }
        });
    }

    @Override
    public void onRemoteInvitationAccepted(final RemoteInvitation remote) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {//接受呼叫邀请成
                rlCall.setVisibility(View.GONE);
               initEngineAndJoinChannel();
            }
        });
    }


    @Override
    public void onRemoteInvitationRefused(RemoteInvitation remoteInvitation) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {//你拒绝了对方
                if (isCalling){//正在通话中
                    return;
                }else {
                    UnSubscribe(remoteInvitation.getCallerId());
                    finish();
                }
            }
        });
    }

    @Override
    public void onRemoteInvitationCanceled(RemoteInvitation remoteInvitation) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                    Toast.makeText(VideoActivity.this,"对方已取消呼叫",Toast.LENGTH_SHORT).show();
                    UnSubscribe(remoteInvitation.getCallerId());
                    finish();
            }
        });
    }
    @Override
    public void onRemoteInvitationFailure(RemoteInvitation var1, int var2) {

    }


    @Override
    public void onPeersOnlineStatusChanged(Map<String, Integer> map) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                for(Map.Entry<String, Integer> entry : map.entrySet()){
                    String mapKey = entry.getKey();
                    Integer mapValue = entry.getValue();
                    Log.d("订阅","订阅的人："+mapKey+"状态改变回调"+(mapValue==0?"在线":"不在线"));
                }
                if (map.containsKey(remoteUserId)){
                    if (map.get(remoteUserId)!=0){//离线了
                            //如果正在呼叫界面
                        if (isWaiting) {
                            if (isCall) {//如果是主动呼叫
                                rtmCallManager.cancelLocalInvitation(localInvitation, null);
                            } else {
                                rtmCallManager.refuseRemoteInvitation(remoteInvitation, null);
                            }
                        }
                            UnSubscribe(remoteUserId);
                            Toast.makeText(VideoActivity.this,"对方已离线",Toast.LENGTH_SHORT).show();
                            finish();
                    }
                }
            }
        });
    }

    public void AudioSmall(View view) {
        int version = android.os.Build.VERSION.SDK_INT;
        if (version < 21) {
            showLongToast("暂不支持该设备");
            return;
        }
        if (!PermissionUtils.checkPermission(VideoActivity.this)) {
            PermissionUtils.requestPermission(VideoActivity.this, new OnPermissionResult() {
                @Override
                public void permissionResult(boolean b) {
                    if (!b) {
                        showLongToast("请打开悬浮窗权限");
                    }
                }
            });
            return;
        }
        moveTaskToBack(true);
        isSmall = true;
            EasyFloat.with(this)
                    .setShowPattern(ShowPattern.FOREGROUND)
                    .setDragEnable(true)
                    .setGravity(Gravity.RIGHT)
                    .setSidePattern(SidePattern.RESULT_SIDE)
                    .setLayout(R.layout.float_audio_window, new OnInvokeView() {
                        @Override
                        public void invoke(View view) {
                            final RelativeLayout rlRoot = view.findViewById(R.id.rl_root);
                            Chronometer chr = view.findViewById(R.id.chr_time);
                            chr.setBase(chronometer.getBase());
                            chr.start();
                            rlRoot.setOnClickListener(new View.OnClickListener() {
                                @Override
                                public void onClick(View v) {
                                    EasyFloat.dismissAppFloat();
                                    isSmall = false;
                                    chr.stop();
                                    if (Build.VERSION.SDK_INT >= 29) {
                                        startActivity(new Intent(VideoActivity.this, VideoActivity.class));
                                    } else {
                                        moveToFront();
                                    }


                                }
                            });

                        }
                    }).registerCallbacks(new OnFloatCallbacks() {
                @Override
                public void createdResult(boolean b, String s, View view) {

                }

                @Override
                public void show(View view) {

                }

                @Override
                public void hide(View view) {

                }

                @Override
                public void dismiss() {

                }

                @Override
                public void touchEvent(View view, MotionEvent motionEvent) {

                }

                @Override
                public void drag(View view, MotionEvent motionEvent) {

                }

                @Override
                public void dragEnd(View view) {

                }
            }).show();
    }

    public void SwitchAudioInVideo(View view) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("Cmd","SwitchAudio");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        RtmMessage message = rtmClient.createMessage(jsonObject.toString());
        rtmClient.sendMessageToPeer(remoteUserId, message, new SendMessageOptions(), new ResultCallback<Void>() {
            @Override
            public void onSuccess(Void var1) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                       showAudioMode();
                    }
                });
            }

            @Override
            public void onFailure(ErrorInfo var1) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        Toast.makeText(VideoActivity.this,"切换失败",Toast.LENGTH_SHORT).show();
                    }
                });
            }
        });
    }

    //切到语音模式
    public void showAudioMode(){
        if (flAudioGroup.getVisibility()==View.GONE) {//防止2个人一起切换的时候 重复走
            flVideoGroup.setVisibility(View.GONE);
            flAudioGroup.setVisibility(View.VISIBLE);
            tv_remote_audio_user.setText(remoteUserId);
            mRtcEngine.disableVideo();
            mRtcEngine.setEnableSpeakerphone(false);
            if (EasyFloat.appFloatIsShow()) {
                EasyFloat.dismissAppFloat();
                isSmall = false;
            }
            rlVideo.removeAllViews();
            callMode = Constans.AUDIO_MODE;
            Toast.makeText(VideoActivity.this,"声音将通过听筒播放",Toast.LENGTH_SHORT).show();
        }

    }

    public void HangUp(View view) {
        if (isCall) {
            rtmCallManager.cancelLocalInvitation(localInvitation, new ResultCallback<Void>() {
                @Override
                public void onSuccess(Void var1) {

                }

                @Override
                public void onFailure(ErrorInfo var1) {
                }
            });
        } else {
            rtmCallManager.refuseRemoteInvitation(remoteInvitation, new ResultCallback<Void>() {
                @Override
                public void onSuccess(Void aVoid) {

                }

                @Override
                public void onFailure(ErrorInfo errorInfo) {

                }
            });
        }
    }

    public void Accept(View view) {//视频模式下的同意按钮
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("Mode",callMode);//收到的是什么类型就回什么类型
            jsonObject.put("Conference",false);
            jsonObject.put("UserData","");
            jsonObject.put("SipData","");

        } catch (JSONException e) {
            e.printStackTrace();
        }
        remoteInvitation.setResponse(jsonObject.toString());
        rtmCallManager.acceptRemoteInvitation(remoteInvitation, null);
    }


    private void Back() {
        if (rlCall.getVisibility() == View.VISIBLE) {
            if (isCall) {
                rtmCallManager.cancelLocalInvitation(localInvitation, new ResultCallback<Void>() {
                    @Override
                    public void onSuccess(Void var1) {

                    }

                    @Override
                    public void onFailure(ErrorInfo var1) {
                    }
                });
            } else {
                rtmCallManager.refuseRemoteInvitation(remoteInvitation, new ResultCallback<Void>() {
                    @Override
                    public void onSuccess(Void aVoid) {

                    }

                    @Override
                    public void onFailure(ErrorInfo errorInfo) {

                    }
                });
            }
        }
        else {
            finish();
        }
    }

    public void SwitchAudio(View view) {//这个按钮可见 说明是视频模式 点击这个按钮说明被叫转语音模式
        callMode = Constans.AUDIO_MODE;
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("Mode",callMode);//收到的是什么类型就回什么类型
            jsonObject.put("Conference",false);
            jsonObject.put("UserData","");
            jsonObject.put("SipData","");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        remoteInvitation.setResponse(jsonObject.toString());
        rtmCallManager.acceptRemoteInvitation(remoteInvitation, null);
        rl_video_preview.removeAllViews();
        mRtcEngine.disableVideo();
        stopRing();
    }



    public void CallWaitSmall(View view) {
        int version = android.os.Build.VERSION.SDK_INT;
        if (version < 21) {
            showLongToast("暂不支持该设备");
            return;
        }
        if (!PermissionUtils.checkPermission(VideoActivity.this)) {
            PermissionUtils.requestPermission(VideoActivity.this, new OnPermissionResult() {
                @Override
                public void permissionResult(boolean b) {
                    if (!b) {
                        showLongToast("请打开悬浮窗权限");
                    }
                }
            });
            return;
        }
        moveTaskToBack(true);
        EasyFloat.with(this)
                .setShowPattern(ShowPattern.FOREGROUND)
                .setDragEnable(true)
                .setGravity(Gravity.RIGHT)
                .setSidePattern(SidePattern.RESULT_SIDE)
                .setLayout(R.layout.float_audio_window, new OnInvokeView() {
                    @Override
                    public void invoke(View view) {
                        final RelativeLayout rlRoot = view.findViewById(R.id.rl_root);


                        rlRoot.setOnClickListener(new View.OnClickListener() {
                            @Override
                            public void onClick(View v) {
                                EasyFloat.dismissAppFloat();
                                if (Build.VERSION.SDK_INT >= 29) {
                                    startActivity(new Intent(VideoActivity.this, VideoActivity.class));
                                } else {
                                    moveToFront();
                                }


                            }
                        });

                    }
                }).registerCallbacks(new OnFloatCallbacks() {
            @Override
            public void createdResult(boolean b, String s, View view) {

            }

            @Override
            public void show(View view) {

            }

            @Override
            public void hide(View view) {

            }

            @Override
            public void dismiss() {

            }

            @Override
            public void touchEvent(View view, MotionEvent motionEvent) {

            }

            @Override
            public void drag(View view, MotionEvent motionEvent) {

            }

            @Override
            public void dragEnd(View view) {

            }
        }).show();
    }

    @Override
    protected void onStop() {//单独处理这个页面
        super.onStop();
    }
}