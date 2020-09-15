package org.ar.call.p2p;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Rect;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.view.WindowManager;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;


import com.gyf.immersionbar.ImmersionBar;
import com.kongzue.dialog.interfaces.OnMenuItemClickListener;
import com.kongzue.dialog.v3.BottomMenu;
import com.kongzue.dialog.v3.MessageDialog;
import com.lzf.easyfloat.EasyFloat;
import com.tuo.customview.VerificationCodeView;

import org.ar.call.BaseActivity;
import org.ar.call.CallApplication;
import org.ar.call.R;
import org.ar.call.SettingActivity;
import org.ar.call.multi.MultiCallActivity;
import org.ar.call.utils.KeyBoardHeightProvider;
import org.ar.rtm.ErrorInfo;
import org.ar.rtm.LocalInvitation;
import org.ar.rtm.RemoteInvitation;
import org.ar.rtm.ResultCallback;
import org.ar.rtm.RtmCallManager;
import org.ar.rtm.RtmClient;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.CountDownLatch;

public class CallActivity extends BaseActivity {

    private Object object = new Object();
    private String userId;
    private VerificationCodeView callEditText;
    private TextView tvUserId;
    private Button btnCall;
    private MediaPlayer player;

    private RtmCallManager rtmCallManager;
    private RtmClient rtmClient;


    private LocalInvitation localInvitation;
    private RemoteInvitation remoteInvitation;

    private boolean isOnline = false;


    private int screenHeight = 0;

    //处理软件盘
    private int mAnchorOriginBottom;

    private int CALL_TYPE;
    private boolean isConference;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        setContentView(R.layout.activity_call);
        tvUserId = findViewById(R.id.tv_user);
        userId = CallApplication.the().getUserId();
        tvUserId.setText("您的呼叫ID:" + userId);
        btnCall = findViewById(R.id.btn_call);
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
                int offsetY = mAnchorOriginBottom - (screenHeight - height) + 50;
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
        rtmClient = CallApplication.the().getCallManager().getRtmClient();
        rtmCallManager = CallApplication.the().getCallManager().getRtmCallManager();//必须登录后获取呼叫管理器实例


    }

    public void Call(View view) {
        if (EasyFloat.appFloatIsShow()) {
            Toast.makeText(this, "有通话正在进行", Toast.LENGTH_SHORT).show();
            return;
        }

        if (TextUtils.isEmpty(callEditText.getInputContent())) {
            Toast.makeText(this, "请输入需要呼叫的ID", Toast.LENGTH_SHORT).show();
            return;
        }

        if (callEditText.getInputContent().length() < 4) {
            Toast.makeText(this, "请输入4位呼叫ID", Toast.LENGTH_SHORT).show();

            return;
        }
        if (callEditText.getInputContent().equals(userId)) {
            Toast.makeText(this, "不能呼叫自己", Toast.LENGTH_SHORT).show();
            return;
        }
        Set<String> queryList = new HashSet<>();
        queryList.add(callEditText.getInputContent());
        CountDownLatch latch = new CountDownLatch(1);
        rtmClient.queryPeersOnlineStatus(queryList, new ResultCallback<Map<String, Boolean>>() {
            @Override
            public void onSuccess(Map<String, Boolean> stringBooleanMap) {
                synchronized (object) {
                    isOnline = stringBooleanMap.get(callEditText.getInputContent());
                    latch.countDown();
                }
             }

            @Override
            public void onFailure(ErrorInfo errorInfo) {

            }
        });
        try {
            latch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        if (!isOnline) {
            showTipDialog("对方不在线");
        } else {
            showCallType();
        }
    }


    public void Call(int type) {
        hideSoftKeyboard();
        localInvitation = rtmCallManager.createLocalInvitation(callEditText.getInputContent());
        JSONObject param = new JSONObject();
        try {
            param.put("Mode", type);
            param.put("Conference", false);
            param.put("ChanId", String.valueOf((int) ((Math.random() * 9 + 1) * 100000000)));
            param.put("UserData", "");
            param.put("SipData", "");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        localInvitation.setContent(param.toString());
        CALL_TYPE = type;
        CallApplication.the().getCallManager().setLocalInvitation(localInvitation);
        Intent i = new Intent(CallActivity.this, VideoActivity.class);
        i.putExtra("ReCall", false);
        startActivity(i);

    }

    public void showCallType() {
        BottomMenu.show(this, new String[]{"视频呼叫", "语音呼叫"}, new OnMenuItemClickListener() {
            @Override
            public void onClick(String text, int index) {
                Call(index);
            }
        }).setTitle("请选择呼叫类型");
    }


    @Override
    public void onRemoteInvitationReceived(final RemoteInvitation remote) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (EasyFloat.appFloatIsShow()) {//说明正在通话中 如果没打开悬浮 不会走这个页面
                    JSONObject params = new JSONObject();
                    try {
                        params.put("Cmd", "Calling");
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                    remote.setResponse(params.toString());
                    rtmCallManager.refuseRemoteInvitation(remote, null);
                    return;
                }
                try {
                    JSONObject jsonObject = new JSONObject(remote.getContent());
                    CALL_TYPE = jsonObject.getInt("Mode");
                    isConference = jsonObject.getBoolean("Conference");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                if (!isConference) {
                    Intent i = new Intent(CallActivity.this, VideoActivity.class);
                    i.putExtra("RecCall", true);
                    startActivity(i);
                } else {
                    Intent i = new Intent(CallActivity.this, MultiCallActivity.class);
                    i.putExtra("RecCall", true);
                    startActivity(i);
                    finish();
                }
            }
        });
    }


    public void Setting(View view) {
        Intent intent = new Intent(this, SettingActivity.class);
        intent.putExtra("isP2P", true);
        startActivity(intent);
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


    public void Back(View view) {
        finish();
    }
}