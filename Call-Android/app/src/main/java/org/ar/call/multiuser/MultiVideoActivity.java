package org.ar.call.multiuser;

import android.Manifest;
import android.annotation.TargetApi;
import android.app.ActivityManager;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.media.MediaPlayer;
import android.os.Build;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.telecom.Call;
import android.util.Log;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.TextureView;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.Chronometer;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.collection.ArraySet;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
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
import org.ar.call.p2p.VideoActivity;
import org.ar.call.utils.ARVideoGroup;
import org.ar.call.utils.SpUtil;
import org.ar.call.utils.StatusBarUtil;
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
import org.ar.rtm.RtmChannel;
import org.ar.rtm.RtmChannelAttribute;
import org.ar.rtm.RtmChannelListener;
import org.ar.rtm.RtmChannelMember;
import org.ar.rtm.RtmClient;
import org.ar.rtm.RtmClientListener;
import org.ar.rtm.RtmMessage;
import org.ar.rtm.SendMessageOptions;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import static org.ar.call.CallApplication.RTC_APPID;

public class MultiVideoActivity extends BaseActivity implements View.OnClickListener,RtmChannelListener{
    private final static String TAG ="MultiVideoActivity";
    private RtmCallManager rtmCallManager;
    private RtmClient rtmClient;
    private RtmChannel rtmChannel;
    private List<LocalInvitation> mLocalInvitationList;
    private List<RemoteInvitation> mRemoteInvitationList;
    private boolean isCall; //true为主叫,false为被叫
    private Toast mToast;
    private MediaPlayer player;
    private InviteDialog inviteDialog;
    private RtcEngine mRtcEngine;
    private ARVideoGroup arVideoGroup;
    private List<String> mUserIdList;
    private String channelMultiId;
    private String userMultiId;
    private String mUserContent;
    private boolean isCamera;
    private RelativeLayout relativeLayoutVideo;
    private Button multiAudio,multiSpeak,multiVideo,multiSwitch,multiHangUp;
    private Button mBtnPackUp,mBtnInvite;
    private TextView mTextWaiting;
    private Chronometer mChronometer;
    private InviteDialog.InviteCallBack inviteCallBack;
    private boolean isOpenCamera,isOpenMicrophone;
    private static final String[] REQUESTED_PERMISSIONS = {
            Manifest.permission.RECORD_AUDIO,
            Manifest.permission.CAMERA,
            Manifest.permission.WRITE_EXTERNAL_STORAGE
    };
    private static final int PERMISSION_REQ_ID = 22;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        StatusBarUtil.setStatusBarColor(MultiVideoActivity.this, R.color.video_title);
        setContentView(R.layout.activity_multi_video);
        initView();
        init();
        if (checkSelfPermission(REQUESTED_PERMISSIONS[0], PERMISSION_REQ_ID) &&
                checkSelfPermission(REQUESTED_PERMISSIONS[1], PERMISSION_REQ_ID) &&
                checkSelfPermission(REQUESTED_PERMISSIONS[2], PERMISSION_REQ_ID)) {
            initEngineAndJoinChannel();
        }
    }

    private void initView() {
        relativeLayoutVideo =findViewById(R.id.rl_multi_video);
        multiAudio =findViewById(R.id.btn_multi_audio);
        multiSpeak =findViewById(R.id.btn_multi_speak);
        multiSwitch =findViewById(R.id.btn_multi_switch);
        multiVideo =findViewById(R.id.btn_multi_video);
        multiHangUp =findViewById(R.id.btn_multi_video_hang_up);
        mBtnPackUp =findViewById(R.id.btn_multi_pack_up);
        mBtnInvite=findViewById(R.id.btn_multi_invite);
        mTextWaiting =findViewById(R.id.multi_waiting);
        mChronometer =findViewById(R.id.multi_chronometer);
        arVideoGroup =new ARVideoGroup(this,relativeLayoutVideo);
        CallApplication.the().getCallManager().registerChannelListener(this);
        rtmClient = CallApplication.the().getCallManager().getRtmClient();
        rtmCallManager=CallApplication.the().getCallManager().getRtmCallManager();
        mLocalInvitationList =new ArrayList<>();
        mRemoteInvitationList =new ArrayList<>();
        multiSpeak.setSelected(true);
        multiAudio.setOnClickListener(this);
        multiSpeak.setOnClickListener(this);
        multiSwitch.setOnClickListener(this);
        multiVideo.setOnClickListener(this);
        multiHangUp.setOnClickListener(this);
        mBtnPackUp.setOnClickListener(this);
        mBtnInvite.setOnClickListener(this);
    }

    private void init(){
        mUserContent = getIntent().getStringExtra("MultiContent");
        userMultiId= getIntent().getStringExtra("userMultiId");
        isCall =getIntent().getBooleanExtra("isCall",false);
        MultiUserBean multiUserBean =new Gson().fromJson(mUserContent,MultiUserBean.class);
        channelMultiId =multiUserBean.getChanId();
        mUserIdList = multiUserBean.getUserData();
        isOpenCamera =SpUtil.getBoolean("isOpenCamera",true);
        isOpenMicrophone =SpUtil.getBoolean("isOpenMicrophone",true);
        rtmChannel =CallApplication.the().getCallManager().createChannel(channelMultiId);
        if (isCall){
            if (mUserIdList.contains(userMultiId)){
                mUserIdList.remove(userMultiId);
            }
            startRing();
            multiUserCall();
            joinRtmChannel();
        }else {
            mTextWaiting.setVisibility(View.GONE);
            if (mChronometer !=null){
                mChronometer.setVisibility(View.VISIBLE);
                mChronometer.start();
            }
            if (mUserIdList.contains(userMultiId)){
                mUserIdList.remove(userMultiId);
            }
        }
        initInviteCallBack();
        downTimerRemoveView(false,"");

    }

    private void initEngineAndJoinChannel() {
        initializeEngine();
        setupVideoConfig();
        setShowView();
        joinChannel();
        Log.i(TAG, "initEngineAndJoinChannel: zhao isOpenCamera ="+isOpenCamera+",isOpenMicrophone ="+isOpenMicrophone);
        if (isOpenCamera){
            setupLocalVideo();
        }else {
            multiVideo.setSelected(!isOpenCamera);
            multiVideo.setText("打开摄像头");
            arVideoGroup.setVisibility("local",true);
            multiSwitch.setVisibility(View.INVISIBLE);
            isCamera =true;
        }
        if (!isOpenMicrophone){
            multiAudio.setSelected(!isOpenMicrophone);
            mRtcEngine.muteLocalAudioStream(true);
            arVideoGroup.setMicState("local",false);
        }
    }

    private void initInviteCallBack(){
        inviteCallBack =new InviteDialog.InviteCallBack() {
            @Override
            public void invite(String uid) {
                Log.i(TAG, "invite: inviteCallBack  ---->");
                if (!arVideoGroup.getM_list_video().containsKey(uid)){
                    TextureView mUidView = RtcEngine.CreateRendererView(getBaseContext());
                    arVideoGroup.addView(uid,mUidView,false);
                    arVideoGroup.setTextUid(uid,false);
                    arVideoGroup.setMicState(uid,false);
                    arVideoGroup.startRotate(uid);
                }
                if (!mUserIdList.contains(uid)){
                    mUserIdList.add(uid);
                }
                JSONObject param =new JSONObject();
                try {
                    param.put("Cmd","Invitation");
                    param.put("UserId",uid);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                rtmChannel.sendMessage(rtmClient.createMessage(param.toString()), null, new ResultCallback<Void>() {
                    @Override
                    public void onSuccess(Void var1) {
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                            }
                        });
                    }
                    @Override
                    public void onFailure(ErrorInfo var1) {
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                            }
                        });
                    }
                });
                downTimerRemoveView(true,uid);
            }
        };
    }

    /**
     * 倒计时60s,移除不在线的视图
     */
    private void downTimerRemoveView(boolean isInvite,String uid){
        List<String> userList =new ArrayList<>();
        for (String id: mUserIdList){
            if (!userList.contains(id)){
                userList.add(id);
            }
        }
        CountDownTimer mCountDownTimer =new CountDownTimer(30*1000,1000) {
            @Override
            public void onTick(long millisUntilFinished) {
                Log.i(TAG, "onTick:   --->"+millisUntilFinished);
                queryOffline(isInvite,uid,userList,false);
            }

            @Override
            public void onFinish() {
                queryOffline(isInvite,uid,userList,true);
            }
        };
        mCountDownTimer.start();
    }

    private void setShowView(){
        TextureView mLocalView = mRtcEngine.CreateRendererView(getBaseContext());
        arVideoGroup.addView("local",mLocalView,false);
        arVideoGroup.setTextUid("local",true);
        arVideoGroup.setMicState("local",true);
        for (String uid :mUserIdList) {
            if (!arVideoGroup.getM_list_video().containsKey(uid)){
                TextureView mUidView = mRtcEngine.CreateRendererView(getBaseContext());
                arVideoGroup.addView(uid,mUidView,false);
                arVideoGroup.setTextUid(uid,false);
                arVideoGroup.setMicState(uid,false);
                arVideoGroup.startRotate(uid);
            }
        }
    }

    private final IRtcEngineEventHandler mRtcEventHandler = new IRtcEngineEventHandler() {
        @Override
        public void onJoinChannelSuccess(String channel, final String uid, int elapsed) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Log.i(TAG, " zhao onJoinChannelSuccess: ---->");
                }
            });
        }

        @Override
        public void onUserJoined(String uid, int elapsed) {
            super.onUserJoined(uid, elapsed);
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (EasyFloat.getAppFloatView() !=null){
                        EasyFloat.getAppFloatView().findViewById(R.id.text_multi_wait).setVisibility(View.GONE);
                        Chronometer chr =EasyFloat.getAppFloatView().findViewById(R.id.chr_multi_time);
                        chr.setVisibility(View.VISIBLE);
                        chr.setBase(mChronometer.getBase());
                        chr.start();
                    }
                    if (!uid.equals(userMultiId)){
                        if (mChronometer != null){
                            mTextWaiting.setVisibility(View.GONE);
                            mChronometer.setVisibility(View.VISIBLE);
                            mChronometer.start();
                        }
                    }
                    arVideoGroup.setTextUid(uid,true);
                    arVideoGroup.setMicState(uid,true);
                    arVideoGroup.stopRotate(uid);
                    if (!isOpenCamera){
                        mRtcEngine.muteLocalVideoStream(true);
                    }
                }
            });
        }

        @Override
        public void onFirstRemoteVideoDecoded(final String uid, int width, int height, int elapsed) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    setupRemoteVideo(uid);
                    Log.i(TAG, "run:onFirstRemoteVideoDecoded  uid ="+uid);
                }
            });
        }

        @Override
        public void onUserOffline(final String uid, int reason) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    removeRemoteVideo(uid);
                }
            });
        }

        @Override
        public void onRemoteVideoStateChanged(String uid, int state, int reason, int elapsed) {
            super.onRemoteVideoStateChanged(uid, state, reason, elapsed);
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    //摄像头开关
                    Log.i(TAG, "zhao onRemoteVideoStateChanged: reason ="+reason+",uid ="+uid);
                    if (reason == Constants.REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED){
                        arVideoGroup.setVisibility(uid,false);
                    }else if (reason ==Constants.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED){
                        arVideoGroup.setVisibility(uid,true);
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
                    //麦克风开关
                    Log.i(TAG, "onRemoteAudioStateChanged: reason ="+reason+",uid ="+uid);
                    if (reason == Constants.REMOTE_AUDIO_REASON_REMOTE_MUTED){
                        arVideoGroup.setMicState(uid,false);
                    }else if (reason ==Constants.REMOTE_AUDIO_REASON_REMOTE_UNMUTED){
                        arVideoGroup.setMicState(uid,true);
                    }
                }
            });
        }
    };

    private void setupRemoteVideo(String uid) {
        mRtcEngine.setRemoteVideoStreamType(uid,1);
        mRtcEngine.setupRemoteVideo(new VideoCanvas(arVideoGroup.getView(uid),
                Constants.RENDER_MODE_HIDDEN, channelMultiId, uid,Constants.VIDEO_MIRROR_MODE_DISABLED));
//            updateRemoteVideoMode(false);
    }

    private void removeRemoteVideo(String uid) {
        if (arVideoGroup.getM_list_video().containsKey(uid)){
            arVideoGroup.stopRotate(uid);
            arVideoGroup.removeView(uid);
        }
        if (mUserIdList.contains(uid)){
            mUserIdList.remove(uid);
        }
        if (arVideoGroup.getM_list_video().size() ==1){
            showToast("视频已结束");
            release();
        }
        //updateRemoteVideoMode(false);
    }

    private void initializeEngine() {
        try {
            mRtcEngine = RtcEngine.create(getBaseContext(), RTC_APPID, mRtcEventHandler);
        } catch (Exception e) {
            Log.e(TAG, Log.getStackTraceString(e));
            throw new RuntimeException("NEED TO check rtc sdk init fatal error\n" + Log.getStackTraceString(e));
        }
    }

    private void setupVideoConfig() {
        mRtcEngine.enableVideo();
        mRtcEngine.setVideoEncoderConfiguration(new VideoEncoderConfiguration(
                VideoEncoderConfiguration.VD_640x480,
                VideoEncoderConfiguration.FRAME_RATE.FRAME_RATE_FPS_15,
                VideoEncoderConfiguration.STANDARD_BITRATE,
                VideoEncoderConfiguration.ORIENTATION_MODE.ORIENTATION_MODE_FIXED_PORTRAIT));
    }

    private void removeVideo(String uid){
        arVideoGroup.removeView(uid);
    }

    private void joinChannel() {
        mRtcEngine.enableDualStreamMode(true);
        mRtcEngine.setChannelProfile(Constants.CHANNEL_PROFILE_LIVE_BROADCASTING);
        mRtcEngine.setClientRole(Constants.CLIENT_ROLE_BROADCASTER);
        mRtcEngine.joinChannel("", channelMultiId, "Extra Optional Data",userMultiId);
        mRtcEngine.setEnableSpeakerphone(true);
    }

    private void setupLocalVideo() {
        mRtcEngine.setupLocalVideo(new VideoCanvas(arVideoGroup.getView("local"), Constants.RENDER_MODE_HIDDEN,
                channelMultiId, userMultiId,Constants.VIDEO_MIRROR_MODE_AUTO));
        mRtcEngine.startPreview();
    }

    public void updateRemoteVideoMode(boolean isBigStream){
        Iterator<Map.Entry<String, ARVideoGroup.VideoView>> iter = arVideoGroup.getM_list_video().entrySet().iterator();
        while (iter.hasNext()) {
            Map.Entry<String, ARVideoGroup.VideoView> entry = iter.next();
            ARVideoGroup.VideoView render = entry.getValue();
            if (!render.videoId.equals(userMultiId)) {
                if (render.isBigStream != isBigStream) {
                    render.isBigStream = isBigStream;
                    mRtcEngine.setRemoteVideoStreamType(render.videoId, isBigStream ? 0 : 1);
                    Log.d("大小流","设置"+render.videoId+"为"+(isBigStream ?"大流":"小流"));
                }
            }
        }
    }

    private boolean checkSelfPermission(String permission, int requestCode) {
        if (ContextCompat.checkSelfPermission(this, permission) !=
                PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, REQUESTED_PERMISSIONS, requestCode);
            return false;
        }
        return true;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode,
                                           @NonNull String[] permissions, @NonNull int[] grantResults) {

        if (requestCode == PERMISSION_REQ_ID) {
            if (grantResults[0] != PackageManager.PERMISSION_GRANTED ||
                    grantResults[1] != PackageManager.PERMISSION_GRANTED ||
                    grantResults[2] != PackageManager.PERMISSION_GRANTED) {
                showToast("Need permissions " + Manifest.permission.RECORD_AUDIO +
                        "/" + Manifest.permission.CAMERA + "/" + Manifest.permission.WRITE_EXTERNAL_STORAGE);
                finish();
                return;
            }
            initEngineAndJoinChannel();
        }
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()){
            case R.id.btn_multi_audio:
                multiAudio.setSelected(!multiAudio.isSelected());
                mRtcEngine.muteLocalAudioStream(multiAudio.isSelected());
                if (multiAudio.isSelected()){
                    arVideoGroup.setMicState("local",false);
                }else {
                    arVideoGroup.setMicState("local",true);
                }
                break;
            case R.id.btn_multi_speak:
                multiSpeak.setSelected(!multiSpeak.isSelected());
                mRtcEngine.setEnableSpeakerphone(multiSpeak.isSelected());
                break;
            case R.id.btn_multi_video:
                multiVideo.setSelected(!multiVideo.isSelected());
                mRtcEngine.muteLocalVideoStream(multiVideo.isSelected());
                if (multiVideo.isSelected()){
                    arVideoGroup.setVisibility("local",false);
                    multiVideo.setText("打开摄像头");
                    multiSwitch.setVisibility(View.INVISIBLE);
                }else {
                    arVideoGroup.setVisibility("local",true);
                    multiVideo.setText("关闭摄像头");
                    multiSwitch.setVisibility(View.VISIBLE);
                }
                if (isCamera){
                    setupLocalVideo();
                    isCamera =false;
                }
                break;
            case R.id.btn_multi_switch:
                multiSwitch.setSelected(!multiSwitch.isSelected());
                if (mRtcEngine != null) {
                    mRtcEngine.switchCamera();
                }
                break;
            case R.id.btn_multi_video_hang_up:
                hangUpRelease();
                break;
            case R.id.btn_multi_pack_up:
                showSmallScreen();
                break;
            case R.id.btn_multi_invite:
                inviteDialog =new InviteDialog(this,mUserIdList,channelMultiId,inviteCallBack);
                inviteDialog.show();
                break;
            default:
                break;
        }
    }

    public void hangUpRelease() {
        mLocalInvitationList =CallApplication.the().getCallManager().getLocalInvitationList();
        mRemoteInvitationList =CallApplication.the().getCallManager().getRemoteInvitationList();
        if (isCall){
            for (LocalInvitation localInvitation: mLocalInvitationList){
                rtmCallManager.cancelLocalInvitation(localInvitation, new ResultCallback<Void>() {
                    @Override
                    public void onSuccess(Void var1) {
                    }
                    @Override
                    public void onFailure(ErrorInfo var1) {
                    }
                });
            }
        }else {
            for (RemoteInvitation remoteInvitation: mRemoteInvitationList){
                rtmCallManager.refuseRemoteInvitation(remoteInvitation, new ResultCallback<Void>() {
                    @Override
                    public void onSuccess(Void var1) {
                    }
                    @Override
                    public void onFailure(ErrorInfo var1) {
                    }
                });
            }
        }
        for (String id:mUserIdList){
            arVideoGroup.stopRotate(id);
        }
        release();
    }

    private void release(){
        stopRing();
        CallApplication.the().getCallManager().releaseChannel();
        arVideoGroup.removeAllView();
        if (mRtcEngine !=null){
            mRtcEngine.leaveChannel();
        }
        finish();
    }

    private void multiUserCall(){
        for (String id : mUserIdList){
            LocalInvitation localInvitation = rtmCallManager.createLocalInvitation(id);
            localInvitation.setContent(mUserContent);
            rtmCallManager.sendLocalInvitation(localInvitation, new ResultCallback<Void>() {
                @Override
                public void onSuccess(Void var1) {
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            Log.i(TAG, "multiUserCall: onSuccess ---->");
                        }
                    });
                }
                @Override
                public void onFailure(ErrorInfo var1) {
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            Log.i(TAG, "multiUserCall: onFailure ---->");
                        }
                    });
                }
            });
        }
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode==KeyEvent.KEYCODE_BACK){
            showExitDialog();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    public void showExitDialog() {
        MessageDialog.show(this, "提示", "确定要退出吗？", "确定")
            .setCancelButton("取消", (baseDialog, v) ->{
                baseDialog.doDismiss();
                return true;
            })
            .setOnOkButtonClickListener((baseDialog, v) -> {
                hangUpRelease();
                return true;
        });
    }

    public void showSmallScreen() {
        int version = android.os.Build.VERSION.SDK_INT;
        if (version < 21) {
            showToast("暂不支持该设备");
            return;
        }
        if (!PermissionUtils.checkPermission(MultiVideoActivity.this)) {
            PermissionUtils.requestPermission(MultiVideoActivity.this, new OnPermissionResult() {
                @Override
                public void permissionResult(boolean b) {
                    if (!b) {
                        showToast("请打开悬浮窗权限");
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
                .setLayout(R.layout.float_multi_video_window, new OnInvokeView() {
                    @Override
                    public void invoke(View view) {
                        final RelativeLayout rlRoot = view.findViewById(R.id.rl_multi_root);
                        TextView textView =view.findViewById(R.id.text_multi_wait);
                        Chronometer chr = view.findViewById(R.id.chr_multi_time);
                        if (mChronometer.getVisibility() ==View.VISIBLE){
                            textView.setVisibility(View.GONE);
                            chr.setVisibility(View.VISIBLE);
                            chr.setBase(mChronometer.getBase());
                            chr.start();
                        }else {
                            textView.setVisibility(View.VISIBLE);
                            chr.setVisibility(View.GONE);
                        }
                        rlRoot.setOnClickListener(new View.OnClickListener() {
                            @Override
                            public void onClick(View v) {
                                EasyFloat.dismissAppFloat();
                                chr.stop();
                                if (Build.VERSION.SDK_INT >= 29) {
                                    startActivity(new Intent(MultiVideoActivity.this, MultiVideoActivity.class));
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

    @TargetApi(11)
    protected void moveToFront() {
        if (Build.VERSION.SDK_INT >= 11) { // honeycomb
            ActivityManager manager = (ActivityManager) getSystemService(Context.ACTIVITY_SERVICE);
            List<ActivityManager.RunningTaskInfo> recentTasks = manager.getRunningTasks(Integer.MAX_VALUE);
            for (int i = 0; i < recentTasks.size(); i++) {
                // bring to front
                if (recentTasks.get(i).baseActivity.toShortString().indexOf("org.ar.call.multiuser.MultiVideoActivity") > -1) {
                    manager.moveTaskToFront(recentTasks.get(i).id, ActivityManager.MOVE_TASK_WITH_HOME);
                }
            }
        }
    }

    private void showToast(String msg){
        if (mToast != null) {
            mToast.setText(msg);
            mToast.setDuration(Toast.LENGTH_SHORT);
            mToast.show();
        } else {
            mToast = Toast.makeText(this,msg,Toast.LENGTH_SHORT);
            mToast.show();
        }
    }

    private void startRing() {
        try {
            if (player ==null){
                player = MediaPlayer.create(this, R.raw.video_request);
                //循环播放
                player.setLooping(true);
                player.start();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 停止播放铃音
     */
    private void stopRing() {
        try {
            if (player!= null) {
                player.stop();
                player.release();
                player = null;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void joinRtmChannel(){
        Log.i(TAG, "joinRtmChannel: channelMultiId ="+channelMultiId);
        rtmChannel.join(new ResultCallback<Void>() {
            @Override
            public void onSuccess(Void var1) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                    }
                });
            }

            @Override
            public void onFailure(ErrorInfo var1) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                    }
                });
            }
        });
    }

    public void queryOffline(boolean isInvite,String uid,List<String> userList,boolean isRemove) {
        if (userList.size() ==0){
            return;
        }
        Set<String> queryList = new HashSet<>();
        if (isInvite){
            queryList.add(uid);
        }else {
            for (String id: userList){
                queryList.add(id);
            }
        }
        rtmClient.queryPeersOnlineStatus(queryList, new ResultCallback<Map<String, Boolean>>() {
            @Override
            public void onSuccess(final Map<String, Boolean> var1) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        if (var1.size()>0){
                            for(Map.Entry<String, Boolean> entry : var1.entrySet()){
                                String mapKey = entry.getKey();
                                boolean mapValue = entry.getValue();
                                Log.i(TAG, "run: PeersOnline key="+mapKey+",Val ="+mapValue);
                                if (!mapValue){
                                    if (isRemove){
                                        arVideoGroup.setUnmannedText(mapKey,"无人接听");
                                        removeRemoteVideo(mapKey);
                                    }else {
                                        arVideoGroup.setUnmannedText(mapKey,"用户不在线");
                                    }
                                }else {
                                    if (!isRemove){
                                        arVideoGroup.setUnmannedText(mapKey,"等待接听");
                                    }
                                }
                            }
                        }
                    }
                });
            }

            @Override
            public void onFailure(ErrorInfo var1) {

            }
        });
    }

    @Override
    public void onLocalInvitationReceivedByPeer(LocalInvitation local) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onLocalInvitationReceivedByPeer --->"+local.getCalleeId());
                if (!mLocalInvitationList.contains(local)){
                    mLocalInvitationList.add(local);
                }
            }
        });
    }

    @Override
    public void onLocalInvitationAccepted(LocalInvitation var1, String var2) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                stopRing();
                Log.i(TAG, "run: onLocalInvitationAccepted --->");
            }
        });
    }

    @Override
    public void onLocalInvitationRefused(LocalInvitation var1, String var2) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                String cmd ="";
                try {
                    JSONObject jsonObject =new JSONObject(var1.getResponse());
                    cmd =jsonObject.getString("Cmd");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                Log.i(TAG, "run: onLocalInvitationRefused =="+cmd+",is ="+cmd.equals("Calling"));
                if (cmd.equals("Calling")){
                    stopRing();
                    arVideoGroup.removeAllView();
                    showToast("对方正在通话中...");
                    finish();
                    return;
                }
                if (mUserIdList.contains(var1.getCalleeId())){
                    mUserIdList.remove(var1.getCalleeId());
                }
                arVideoGroup.removeView(var1.getCalleeId());
                if (mUserIdList.size() ==0){
                    stopRing();
                    arVideoGroup.removeAllView();
                    showToast("无人接听");
                    finish();
                }else {
                    showToast(var1.getCalleeId()+"已拒绝");
                }
            }
        });
    }

    @Override
    public void onLocalInvitationCanceled(LocalInvitation var1) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onLocalInvitationCanceled --->");
            }
        });
    }

    @Override
    public void onLocalInvitationFailure(LocalInvitation var1, int var2) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onLocalInvitationFailure --->");
            }
        });
    }

    @Override
    public void onRemoteInvitationReceived(RemoteInvitation remote) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onRemoteInvitationReceived --->"+isCall);
                if (isCall){
                    JSONObject params = new JSONObject();
                    try {
                        params.put("Cmd","Calling");
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                    remote.setResponse(params.toString());
                    rtmCallManager.refuseRemoteInvitation(remote,null);
                }
            }
        });
    }

    @Override
    public void onRemoteInvitationAccepted(RemoteInvitation var1) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onRemoteInvitationAccepted --->");
            }
        });
    }

    @Override
    public void onRemoteInvitationRefused(RemoteInvitation var1) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onRemoteInvitationRefused --->");
            }
        });
    }

    @Override
    public void onRemoteInvitationCanceled(RemoteInvitation var1) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onRemoteInvitationCanceled --->");
            }
        });
    }

    @Override
    public void onRemoteInvitationFailure(RemoteInvitation var1, int var2) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onRemoteInvitationFailure --->");
            }
        });
    }

    @Override
    public void onConnectionStateChanged(int var1, int var2) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onConnectionStateChanged --->");
            }
        });
    }

    @Override
    public void onMessageReceived(RtmMessage var1, String var2) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onMessageReceived --->");
            }
        });
    }

    @Override
    public void onTokenExpired() {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onTokenExpired --->");
            }
        });
    }

    @Override
    public void onPeersOnlineStatusChanged(Map<String, Integer> map) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onPeersOnlineStatusChanged --->");
            }
        });
    }

    /**
     * 频道成员人数更新回调。返回最新频道成员人数
     * @param var1 最新频道成员人数
     */
    @Override
    public void onMemberCountUpdated(int var1) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "joinRtmChannel: var1 ="+var1);
            }
        });
    }

    /**
     * 频道属性更新回调。返回所在频道的所有属性。
     * @param var1 当前频道的所有属性
     */
    @Override
    public void onAttributesUpdated(List<RtmChannelAttribute> var1) {
    }

    /**
     * 收到频道消息回调
     * @param var1 接收到的频道消息
     * @param var2 频道消息发送者
     */
    @Override
    public void onMessageReceived(RtmMessage var1, RtmChannelMember var2) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                String uid ="";
                String cmd ="";
                try {
                    JSONObject jsonObject =new JSONObject(var1.getText());
                    uid = jsonObject.getString("UserId");
                    cmd =jsonObject.getString("Cmd");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                if (cmd.equals("Invitation")){
                    if (!arVideoGroup.getM_list_video().containsKey(uid)){
                        TextureView mUidView = RtcEngine.CreateRendererView(getBaseContext());
                        arVideoGroup.addView(uid,mUidView,false);
                        arVideoGroup.setTextUid(uid,false);
                        arVideoGroup.setMicState(uid,false);
                        arVideoGroup.startRotate(uid);
                    }
                    downTimerRemoveView(true,uid);
                }

            }
        });
    }

    /**
     * 远端用户加入频道回调
     * @param rtmChannelMember 当有远端用户调用 join 方法成功加入频道时，在相同频道的本地用户会收到此回调
     */
    @Override
    public void onMemberJoined(RtmChannelMember rtmChannelMember) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                stopRing();
                Log.i(TAG, "onMemberJoined: uid ---->"+rtmChannelMember.getUserId());
                if (!arVideoGroup.getM_list_video().containsKey(rtmChannelMember.getUserId())){
                    TextureView mUidView = RtcEngine.CreateRendererView(getBaseContext());
                    arVideoGroup.addView(rtmChannelMember.getUserId(),mUidView,false);
                    arVideoGroup.setTextUid(rtmChannelMember.getUserId(),false);
                    arVideoGroup.setMicState(rtmChannelMember.getUserId(),false);
                    arVideoGroup.startRotate(rtmChannelMember.getUserId());
                }
            }
        });
    }

    /**
     * 频道成员离开频道回调。
     * @param rtmChannelMember 离开频道的频道成员
     */
    @Override
    public void onMemberLeft(RtmChannelMember rtmChannelMember) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "onMemberLeft: zhao --->");
                removeRemoteVideo(rtmChannelMember.getUserId());
            }
        });
    }

    @Override
    protected void onStop() {
        super.onStop();
        CallApplication.the().getCallManager().unregisterChannelListener(this);
        stopRing();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mChronometer !=null){
            mChronometer.stop();
        }
        if (mRtcEngine!=null) {
            mRtcEngine.leaveChannel();
        }
        CallApplication.the().getCallManager().releaseChannel();
        RtcEngine.destroy();
    }
}

