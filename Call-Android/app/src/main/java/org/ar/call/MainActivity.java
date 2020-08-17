package org.ar.call;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.gyf.immersionbar.ImmersionBar;
import com.kongzue.dialog.v3.MessageDialog;
import com.kongzue.dialog.v3.TipDialog;
import com.kongzue.dialog.v3.WaitDialog;
import com.yanzhenjie.permission.AndPermission;
import com.yanzhenjie.permission.runtime.Permission;

import org.ar.call.p2p.CallActivity;
import org.ar.call.utils.NetCheckUtil;
import org.ar.rtm.ErrorInfo;
import org.ar.rtm.ResultCallback;

public class MainActivity extends AppCompatActivity {

    private TextView tvUser;
    private String userId;
    private Button btnP2P,btnLogin,btnMultiple;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ImmersionBar.with(this).statusBarDarkFont(false,0.2f).init();
        btnP2P = findViewById(R.id.btn_p2p);
        btnLogin = findViewById(R.id.btn_login);
        btnMultiple = findViewById(R.id.btn_multiple);

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

    }


    public void Login(View view) {
        if (!AndPermission.hasPermissions(this,Permission.RECORD_AUDIO,Permission.CAMERA,Permission.WRITE_EXTERNAL_STORAGE,Permission.READ_EXTERNAL_STORAGE)){
           Toast.makeText(this,"请打开必要权限",Toast.LENGTH_SHORT).show();
           return;
        }

        if (!NetCheckUtil.checkNet(this)){
            TipDialog.show(this, "请检查网络",TipDialog.TYPE.ERROR);
            return;
        }
        WaitDialog.show(this, "正在登录...");
        CallApplication.the().getCallManager().getRtmClient().login("", userId, new ResultCallback<Void>() {
            @Override
            public void onSuccess(Void var1) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        TipDialog.show(MainActivity.this, "成功！", TipDialog.TYPE.SUCCESS);
                        btnLogin.setVisibility(View.GONE);
                        btnMultiple.setVisibility(View.VISIBLE);
                        btnP2P.setVisibility(View.VISIBLE);
                    }
                });

            }

            @Override
            public void onFailure(final ErrorInfo var1) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        TipDialog.show(MainActivity.this, "登录失败！", TipDialog.TYPE.ERROR);
//                        Toast.makeText(MainActivity.this,var1.getErrorDescription(),Toast.LENGTH_SHORT);
                    }
                });
            }
        });
    }



    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode==KeyEvent.KEYCODE_BACK){
            CallApplication.the().ReleaseAll();
            finish();
        }
        return super.onKeyDown(keyCode, event);
    }

    public void P2P(View view) {
        Intent intent = new Intent(MainActivity.this, CallActivity.class);
        startActivity(intent);
        finish();
    }

    public void Multiple(View view) {
    }
}