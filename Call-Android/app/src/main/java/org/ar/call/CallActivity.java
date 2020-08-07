package org.ar.call;

import androidx.appcompat.app.AppCompatActivity;
import androidx.collection.ArraySet;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Point;
import android.graphics.Rect;
import android.media.MediaPlayer;
import android.os.Build;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.Display;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewTreeObserver;
import android.view.WindowManager;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.RadioGroup;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;


import com.gyf.immersionbar.ImmersionBar;
import com.gyf.immersionbar.OnKeyboardListener;
import com.kongzue.dialog.interfaces.OnDialogButtonClickListener;
import com.kongzue.dialog.interfaces.OnDismissListener;
import com.kongzue.dialog.util.BaseDialog;
import com.kongzue.dialog.v3.FullScreenDialog;
import com.kongzue.dialog.v3.MessageDialog;
import com.kongzue.dialog.v3.TipDialog;
import com.lzf.easyfloat.EasyFloat;
import com.tuo.customview.VerificationCodeView;

import org.ar.rtm.ErrorInfo;
import org.ar.rtm.LocalInvitation;
import org.ar.rtm.RemoteInvitation;
import org.ar.rtm.ResultCallback;
import org.ar.rtm.RtmCallEventListener;
import org.ar.rtm.RtmCallManager;
import org.ar.rtm.RtmClient;
import org.ar.rtm.RtmClientListener;
import org.ar.rtm.RtmMessage;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class CallActivity extends AppCompatActivity implements RtmCallEventListener, RtmClientListener {

    private Object object = new Object();
    private String userId;
    private VerificationCodeView callEditText;
    private TextView tvUserId;
    private ImageView tvUserIcon;
    private View bottomView;
    private TextView tvUserPre;
    private TextView tvState;
    private int type;
    private Button btnHangup, btnAccept, btnCall;
    private MediaPlayer player;

    private String callId;
    private RtmCallManager rtmCallManager;
    private RtmClient rtmClient;


    private RelativeLayout rlInput, rlCall;

    private LocalInvitation localInvitation;
    private RemoteInvitation remoteInvitation;

    private boolean isOnline = false;

    private boolean isCall = false; //true 主动呼叫 false 被呼叫
    private String subPeerId="";//订阅的人的ID 用于判断对方是不是离线了

    private boolean isReconnect = false;
    private MessageDialog reconnectDialog;

    private int screenHeight = 0;

    //处理软件盘
    private int mOldKeyboardHeight = -1;
    private int mNowKeyboardHeight = -1;
    private int mScreenHeight = 0;
    private int mMarginKeyboard = 0;
    private int mAnchorOriginBottom;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        setContentView(R.layout.activity_call);
        bottomView = findViewById(R.id.bottom_view);
        tvUserId = findViewById(R.id.tv_user);
        userId = getIntent().getStringExtra("user");
        tvUserId.setText("您的呼叫ID:" + userId);
        rlInput = findViewById(R.id.rl_input);
        btnCall = findViewById(R.id.btn_call);


        tvUserIcon = findViewById(R.id.iv_user);
        tvUserPre = findViewById(R.id.tv_user_pre);
        tvState = findViewById(R.id.tv_state);
        btnAccept = findViewById(R.id.btn_accept);
        btnHangup = findViewById(R.id.btn_hangup);
        callEditText = findViewById(R.id.et_user);

        ImmersionBar.with(this).statusBarDarkFont(false, 0.2f).keyboardEnable(false).init();
        Rect r = new Rect();
        getWindow().getDecorView().getWindowVisibleDisplayFrame(r);
        screenHeight = r.bottom;
        new KeyBoardHeightProvider(this).init().setHeightListener(height -> {
            if (height > 100) {
                int[] location = new int[2];
                btnCall.getLocationInWindow(location);
                mAnchorOriginBottom = location[1] + btnCall.getHeight();
                int offsetY = mAnchorOriginBottom - (screenHeight - height)+50;
                btnCall.setTranslationY(-offsetY);//让按钮移动上去
            } else {
                btnCall.setTranslationY(0);
            }
        });


        callEditText.setInputCompleteListener(new VerificationCodeView.InputCompleteListener() {
            @Override
            public void inputComplete() {
                if (callEditText.getInputContent().length() == 4) {
                    btnCall.setSelected(true);
                }

            }

            @Override
            public void deleteContent() {
                if (callEditText.getInputContent().length() < 4) {
                    btnCall.setSelected(false);
                }
            }
        });
        rlCall = findViewById(R.id.rl_call_pre);

        rtmClient = CallApplication.the().getCallManager().getRtmClient();
        rtmCallManager = CallApplication.the().getCallManager().getRtmClient().getRtmCallManager();
        rtmCallManager.setEventListener(this);

        CallApplication.the().getCallManager().registerListener(this);
    }

    public void Call(View view) {
        if (EasyFloat.appFloatIsShow()) {
            Toast.makeText(this, "有通话正在进行", Toast.LENGTH_SHORT).show();
            return;
        }

        if (TextUtils.isEmpty(callEditText.getInputContent())) {
            Toast.makeText(this, "请输入需要呼叫的Id", Toast.LENGTH_SHORT).show();
            return;
        }
        if (callEditText.getInputContent().equals(userId)) {
            Toast.makeText(this, "不能呼叫自己", Toast.LENGTH_SHORT).show();
            return;
        }
        Set<String> queryList = new HashSet<>();
        queryList.add(callEditText.getInputContent());
        synchronized (object) {
            rtmClient.queryPeersOnlineStatus(queryList, new ResultCallback<Map<String, Boolean>>() {
                @Override
                public void onSuccess(Map<String, Boolean> stringBooleanMap) {
                    synchronized (object) {
                        isOnline = stringBooleanMap.get(callEditText.getInputContent());
                        object.notify();
                    }
                }

                @Override
                public void onFailure(ErrorInfo errorInfo) {

                }
            });
            try {
                object.wait(2000);//2秒还未查到就唤醒
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            if (!isOnline) {
                showTipDialog("对方不在线");
            } else {
                showCallLayout(false,callEditText.getInputContent());
                tvState.setText("呼叫中");

                Call();
            }

        }


    }


    public void Call() {
        hideSoftKeyboard();
        isCall = true;
        Subscribe(callEditText.getInputContent());
        localInvitation = rtmCallManager.createLocalInvitation(callEditText.getInputContent());
        localInvitation.setContent(String.valueOf((int) ((Math.random() * 9 + 1) * 100000000)));
        rtmCallManager.sendLocalInvitation(localInvitation, new ResultCallback<Void>() {
            @Override
            public void onSuccess(Void var1) {

            }

            @Override
            public void onFailure(ErrorInfo var1) {

            }
        });
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
            CallApplication.the().getCallManager().setCall(false);
            UnSubscribe(remoteInvitation.getCallerId());
            resetCall();
        }
    }

    public void Accept(View view) {
        rtmCallManager.acceptRemoteInvitation(remoteInvitation, null);

    }

    @Override
    public void onLocalInvitationReceivedByPeer(final LocalInvitation localInvitation) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (localInvitation.getState() == 1) {
//                  showToast("已发送邀请");
                } else if (localInvitation.getState() == 2) {
//                    showToast("对方已经收到邀请");

                }
            }
        });
    }

    @Override
    public void onLocalInvitationAccepted(final LocalInvitation local, String s) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Intent i = new Intent(CallActivity.this, VideoActivity.class);
                i.putExtra("channelId", local.getContent());
                i.putExtra("remoteUserId", local.getCalleeId());//对方的id
                i.putExtra("userId", userId);
                startActivity(i);
                UnSubscribe(subPeerId);
                resetCall();
            }
        });
    }

    @Override
    public void onLocalInvitationRefused(LocalInvitation localInvitation, String s) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (!TextUtils.isEmpty(s)&&s.equals("calling")){
                    showTipDialog("对方正在通话中");
                }else {
                    showTipDialog("对方拒绝通话");
                }
                CallApplication.the().getCallManager().setCall(false);
                resetCall();
            }
        });
    }

    @Override
    public void onLocalInvitationCanceled(LocalInvitation localInvitation) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {//你取消了通话
                CallApplication.the().getCallManager().setCall(false);
                resetCall();
            }
        });
    }

    @Override
    public void onLocalInvitationFailure(LocalInvitation localInvitation, int i) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                showTipDialog("对方未能接通呼叫");
                CallApplication.the().getCallManager().setCall(false);
                resetCall();
            }
        });
    }

    @Override
    public void onRemoteInvitationReceived(final RemoteInvitation remote) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (CallApplication.the().getCallManager().isCall()){
                    remote.setResponse("calling");
                    rtmCallManager.refuseRemoteInvitation(remote,null);
                    return;
                }
                remoteInvitation = remote;
                tvState.setText("收到呼叫");
                Subscribe(remote.getCallerId());
                showCallLayout(true,remote.getCallerId());
            }
        });
    }

    /**
     *
     * @param isCalled 是否是被叫
     * @param callId
     */
    private void showCallLayout(boolean isCalled,String callId) {
        startRing();
        hideSoftKeyboard();
        rlInput.setVisibility(View.GONE);
        rlCall.setVisibility(View.VISIBLE);
        tvUserPre.setText(callId);
        btnHangup.setVisibility(View.VISIBLE);
        btnAccept.setVisibility(isCalled ? View.VISIBLE :View.GONE);
        CallApplication.the().getCallManager().setCall(true);
    }

    @Override
    public void onRemoteInvitationAccepted(final RemoteInvitation remote) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Intent i = new Intent(CallActivity.this, VideoActivity.class);
                i.putExtra("channelId", remote.getContent());
                i.putExtra("remoteUserId", remote.getCallerId());//对方的ID
                i.putExtra("userId", userId);
                startActivity(i);
                UnSubscribe(subPeerId);
                resetCall();
            }
        });
    }

    @Override
    public void onRemoteInvitationRefused(RemoteInvitation remoteInvitation) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {//你拒绝了对方
            }
        });
    }

    @Override
    public void onRemoteInvitationCanceled(RemoteInvitation remoteInvitation) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                CallApplication.the().getCallManager().setCall(false);
                showTipDialog("对方已取消呼叫");
                UnSubscribe(remoteInvitation.getCallerId());
                resetCall();
            }
        });
    }

    @Override
    public void onRemoteInvitationFailure(RemoteInvitation remoteInvitation, int i) {

    }

    @Override
    public void onConnectionStateChanged(int state, int i1) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (state==4){
                    isReconnect = true;
                    reconnectDialog=MessageDialog.build(CallActivity.this)
                            .setTitle("提示")
                            .setMessage("正在重连....")
                            .setOnOkButtonClickListener((baseDialog, v) -> true)
                            .setCancelable(false);
                    reconnectDialog.show();
                    resetCall();
                }else if (state ==3){
                    if (isReconnect){
                        if (reconnectDialog!=null){
                            reconnectDialog.doDismiss();
                        }
                        isReconnect= false;
                        TipDialog.show(CallActivity.this, "重连成功！", TipDialog.TYPE.SUCCESS).setOnDismissListener(new OnDismissListener() {
                            @Override
                            public void onDismiss() {
                            }
                        });
                    }
                }
            }
        });
    }

    @Override
    public void onMessageReceived(RtmMessage rtmMessage, String s) {

    }

    @Override
    public void onTokenExpired() {

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
                if (map.containsKey(subPeerId)){
                    if (map.get(subPeerId)!=0){//离线了
                        if (CallApplication.the().getCallManager().isCall()){
                            //如果正在呼叫界面
                            if (isCall){//如果是主动呼叫
                                rtmCallManager.cancelLocalInvitation(localInvitation,null);
                            }else {
                                rtmCallManager.refuseRemoteInvitation(remoteInvitation,null);
                            }
                            UnSubscribe(subPeerId);
                            showTipDialog("对方已离线");
                            resetCall();
                        }
                    }
                }
            }
        });
    }

    private void showToast(String msg) {
        Toast.makeText(CallActivity.this, msg, Toast.LENGTH_SHORT).show();
    }

    private void resetCall() {
        stopRing();
        rlCall.setVisibility(View.GONE);
        rlInput.setVisibility(View.VISIBLE);
        btnHangup.setVisibility(View.GONE);
        btnAccept.setVisibility(View.GONE);
        localInvitation = null;
        remoteInvitation = null;
        isCall = false;

    }


    public void Setting(View view) {
        startActivity(new Intent(this, SettingActivity.class));
    }

    public void showTipDialog(String tips) {
        MessageDialog.show(this, "提示", tips, "确定");
    }




    public void hideSoftKeyboard() {
            InputMethodManager inputMethodManager = (InputMethodManager) this.getSystemService(Activity.INPUT_METHOD_SERVICE);
            if (inputMethodManager != null) {
                inputMethodManager.hideSoftInputFromWindow(callEditText.getWindowToken(), 0);
            }
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
     * 停止播放铃音
     */
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


    private void Subscribe(String peerId){
        subPeerId =peerId;
        Set<String> list = new ArraySet<>();
        list.add(peerId);
        rtmClient.subscribePeersOnlineStatus(list,null);
    }

    public void UnSubscribe(String peerId){
        subPeerId="";
        Set<String> list = new ArraySet<>();
        list.add(peerId);
        rtmClient.unsubscribePeersOnlineStatus(list,null);
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
                } )
                .setOnOkButtonClickListener((baseDialog, v) -> {
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
                        return true;
                    }
                    rtmClient.logout(null);
                    CallApplication.the().getCallManager().getRtmClient().release();
                    System.exit(0);
                    finish();
                    baseDialog.doDismiss();
                    return true;
                });
    }
}