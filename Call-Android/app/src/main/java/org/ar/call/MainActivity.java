package org.ar.call;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.gyf.immersionbar.ImmersionBar;
import com.kongzue.dialog.v3.MessageDialog;
import com.kongzue.dialog.v3.TipDialog;
import com.kongzue.dialog.v3.WaitDialog;
import com.yanzhenjie.permission.AndPermission;
import com.yanzhenjie.permission.runtime.Permission;

import org.ar.call.multiuser.MultiUserActivity;
import org.ar.call.p2p.CallActivity;
import org.ar.call.p2p.VideoActivity;
import org.ar.call.utils.NetCheckUtil;
import org.ar.rtm.ErrorInfo;
import org.ar.rtm.LocalInvitation;
import org.ar.rtm.RemoteInvitation;
import org.ar.rtm.ResultCallback;
import org.ar.rtm.RtmCallEventListener;
import org.ar.rtm.RtmClientListener;
import org.ar.rtm.RtmMessage;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Map;

public class MainActivity extends BaseActivity{

    private TextView tvUser;
    private String userId;
    private Button btnLogin;
    private LinearLayout llCallType;
    private boolean isLoginSuccess;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ImmersionBar.with(this).statusBarDarkFont(false,0.2f).init();
        btnLogin = findViewById(R.id.btn_login);
        llCallType = findViewById(R.id.ll_call_type);

        tvUser = findViewById(R.id.tv_user);
        userId = CallApplication.the().getUserId();
        tvUser.setText("您的呼叫ID:"+userId);
        if (!AndPermission.hasPermissions(this,Permission.RECORD_AUDIO,Permission.CAMERA,Permission.WRITE_EXTERNAL_STORAGE,Permission.READ_EXTERNAL_STORAGE)){
            AndPermission.with(this)
                    .runtime()
                    .permission(Permission.READ_EXTERNAL_STORAGE,Permission.WRITE_EXTERNAL_STORAGE,Permission.CAMERA,Permission.RECORD_AUDIO)
                    .onGranted(permissions -> {
                        // Storage permission are allowed.
                    })
                    .onDenied(permissions -> {
                        // Storage permission are not allowed.
                    })
                    .start();
        }
        Login(false);
    }

    @Override
    protected void onResume() {
        super.onResume();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }

    public void Login(boolean needTip) {
        CallApplication.the().getCallManager().getRtmClient().login("", userId, new ResultCallback<Void>() {
            @Override
            public void onSuccess(Void var1) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        isLoginSuccess =true;
                        if (needTip){
                            TipDialog.show(MainActivity.this, "登录成功！", TipDialog.TYPE.SUCCESS);
                        }
                    }
                });
            }

            @Override
            public void onFailure(final ErrorInfo var1) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        isLoginSuccess = false;
                        if (needTip) {
                            TipDialog.show(MainActivity.this, "登录失败！", TipDialog.TYPE.ERROR);
                        }
                    }
                });
            }
        });

    }


    public void showExitDialog() {
        MessageDialog.show(this, "提示", "确定要退出吗？", "确定")
                .setCancelButton("取消", (baseDialog, v) ->{
                    baseDialog.doDismiss();
                    return true;
                } )
                .setOnOkButtonClickListener((baseDialog, v) -> {
                    baseDialog.doDismiss();
                    CallApplication.the().ReleaseAll();
                    System.exit(0);
                    finish();
                    return true;
                });
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode==KeyEvent.KEYCODE_BACK){
            showExitDialog();
           return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    public void P2P(View view) {

        if (isLoginSuccess){
            if (!AndPermission.hasPermissions(this,Permission.CAMERA,Permission.RECORD_AUDIO)){
                Toast.makeText(this,"请开启相机和录音权限",Toast.LENGTH_SHORT).show();
                return;
            }
            Intent intent = new Intent(MainActivity.this, CallActivity.class);
            startActivity(intent);
        }else {
            Login(true);
        }


    }

    public void Multiple(View view) {
        if (isLoginSuccess) {
            if (!AndPermission.hasPermissions(this,Permission.CAMERA,Permission.RECORD_AUDIO)){
                Toast.makeText(this,"请开启相机和录音权限",Toast.LENGTH_SHORT).show();
                return;
            }
            Intent intent = new Intent(MainActivity.this, MultiUserActivity.class);
            startActivity(intent);
        }else {
            Login(true);
        }
    }

    @Override
    public void onRemoteInvitationReceived(RemoteInvitation remoteInvitation) {
        super.onRemoteInvitationReceived(remoteInvitation);
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    JSONObject jsonObject = new JSONObject(remoteInvitation.getContent());
                    boolean isConference = jsonObject.getBoolean("Conference");
                    if (!isConference){
                        Intent i = new Intent(MainActivity.this, VideoActivity.class);
                        i.putExtra("RecCall",true);
                        startActivity(i);
                    }else {
                        Intent i = new Intent(MainActivity.this, MultiUserActivity.class);
                        i.putExtra("RecCall",true);
                        startActivity(i);
                    }
                } catch (JSONException e) {
                    e.printStackTrace();
                }

            }
        });
    }
}