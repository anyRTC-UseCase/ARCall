package org.ar.call;

import androidx.appcompat.app.AppCompatActivity;

import android.Manifest;
import android.annotation.TargetApi;
import android.app.ActivityManager;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.TextureView;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.RelativeLayout;
import android.widget.Toast;

import com.gyf.immersionbar.ImmersionBar;
import com.kongzue.dialog.v3.MessageDialog;
import com.kongzue.dialog.v3.WaitDialog;
import com.lzf.easyfloat.EasyFloat;
import com.lzf.easyfloat.enums.ShowPattern;
import com.lzf.easyfloat.interfaces.OnFloatCallbacks;
import com.lzf.easyfloat.interfaces.OnInvokeView;
import com.lzf.easyfloat.interfaces.OnPermissionResult;
import com.lzf.easyfloat.permission.PermissionUtils;

import org.ar.rtc.Constants;
import org.ar.rtc.IRtcEngineEventHandler;
import org.ar.rtc.RtcEngine;
import org.ar.rtc.VideoEncoderConfiguration;
import org.ar.rtc.video.VideoCanvas;
import org.ar.rtm.RtmClient;
import org.ar.rtm.RtmClientListener;
import org.ar.rtm.RtmMessage;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.ar.call.CallApplication.RTC_APPID;

public class VideoActivity extends AppCompatActivity implements RtmClientListener {

    private Button ibtnAudio, ibtnVideo, ibtnSpeak, ibtnSwitch;
    private String channelId;
    private String userId;
    private String remoteUserId;
    private DragViewLayout rlVideo;
    private RelativeLayout rlBtnGroup, rl_remote_video, rl_local_video;
    //    private ARVideoGroup videoGroup;
    private RtcEngine mRtcEngine;
    private RtmClient rtmClient;
    private String remoteVideoId = "";
    private boolean isSmall = false;//是否缩小
    private static final int PERMISSION_REQ_ID = 22;
    private static final String[] REQUESTED_PERMISSIONS = {
            Manifest.permission.RECORD_AUDIO,
            Manifest.permission.CAMERA,
            Manifest.permission.WRITE_EXTERNAL_STORAGE
    };
    private HashMap<String, TextureView> videoList = new HashMap<>();


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
        channelId = getIntent().getStringExtra("channelId");
        userId = getIntent().getStringExtra("userId");
        remoteUserId = getIntent().getStringExtra("remoteUserId");
        rlVideo = findViewById(R.id.rl_video);
        rlBtnGroup = findViewById(R.id.rl_btn_group);
        rl_remote_video = findViewById(R.id.rl_remote_video);
        rl_local_video = findViewById(R.id.rl_local_video);

        DisplayMetrics outMetrics = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(outMetrics);
        int widthPixels = outMetrics.widthPixels;
        RelativeLayout.MarginLayoutParams marginLayoutParams = (RelativeLayout.MarginLayoutParams) rl_local_video.getLayoutParams();
        marginLayoutParams.topMargin = DensityUtil.dip2px(VideoActivity.this, 12);
        marginLayoutParams.leftMargin = widthPixels - DensityUtil.dip2px(VideoActivity.this, 90 + 12);//90是View的宽  12 是margin
        rl_local_video.setLayoutParams(marginLayoutParams);


        rtmClient = CallApplication.the().getCallManager().getRtmClient();
        initEngineAndJoinChannel();

    }

    private void initEngineAndJoinChannel() {
        initializeEngine();
        setupVideoConfig();
        setupLocalVideo();
        joinChannel();
    }

    private void initializeEngine() {
        try {
            mRtcEngine = RtcEngine.create(this, RTC_APPID, mRtcEventHandler);
        } catch (Exception e) {
            throw new RuntimeException("NEED TO check rtc sdk init fatal error\n" + Log.getStackTraceString(e));
        }
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
    }

    private void joinChannel() {
        mRtcEngine.joinChannel("", channelId, "Extra Optional Data", userId);

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
        mRtcEngine.startPreview();

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
                    showLongToast("加入成功" + channel);
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
                    Toast.makeText(VideoActivity.this,"对方已挂断",Toast.LENGTH_SHORT).show();
                    release();
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
                        if (rl_local_video.getTag().equals("remote")) {
                            if (rl_local_video.getChildAt(1) != null) {
                                rl_local_video.getChildAt(1).setVisibility(reason == 6 ? View.VISIBLE : View.GONE);
                            }

                        } else {
                            if (rl_remote_video.getChildAt(1) != null) {
                                rl_remote_video.getChildAt(1).setVisibility(reason == 6 ? View.VISIBLE : View.GONE);
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
        rlVideo.removeAllViews();
        mRtcEngine.leaveChannel();
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
                if (recentTasks.get(i).baseActivity.toShortString().indexOf("org.ar.call.VideoActivity") > -1) {
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
            release();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    protected void onResume() {
        super.onResume();
        CallApplication.the().getCallManager().registerListener(this);
        CallApplication.the().getCallManager().setCall(true);
    }


    @Override
    protected void onDestroy() {
        super.onDestroy();
        RtcEngine.destroy();
        CallApplication.the().getCallManager().setCall(false);
        CallApplication.the().getCallManager().unregisterListener(this);
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
            rl_local_video.getChildAt(1).setVisibility(!ibtnVideo.isSelected() ? View.VISIBLE : View.GONE);
        } else {
            rl_remote_video.getChildAt(1).setVisibility(!ibtnVideo.isSelected() ? View.VISIBLE : View.GONE);
        }
    }

    public void MuteLocalAudio(View view) {
        ibtnAudio.setSelected(!ibtnAudio.isSelected());
        mRtcEngine.muteLocalAudioStream(ibtnAudio.isSelected());
    }


    @Override
    public void onConnectionStateChanged(int i, int i1) {

    }


    @Override
    public void onMessageReceived(RtmMessage rtmMessage, String s) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
            }
        });
    }

    @Override
    public void onTokenExpired() {

    }

    @Override
    public void onPeersOnlineStatusChanged(Map<String, Integer> map) {

    }


    //切换大小视图
    public void SwitchVideo(View view) {
        if (videoList.size() < 1) {
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
            rl_local_video.addView(videoList.get("remote"), 1);
            rl_remote_video.addView(videoList.get("local"), 1);
            rl_local_video.setTag("remote");
        } else {
            rl_local_video.addView(videoList.get("local"), 1);
            rl_remote_video.addView(videoList.get("remote"), 1);
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
}