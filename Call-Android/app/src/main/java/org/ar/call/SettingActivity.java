package org.ar.call;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import com.gyf.immersionbar.ImmersionBar;
import com.kongzue.dialog.interfaces.OnMenuItemClickListener;
import com.kongzue.dialog.v3.BottomMenu;

import org.ar.call.p2p.CallActivity;
import org.ar.call.utils.SpUtil;
import org.ar.rtm.LocalInvitation;
import org.ar.rtm.RemoteInvitation;
import org.ar.rtm.RtmCallEventListener;

public class SettingActivity extends AppCompatActivity implements RtmCallEventListener {

    private TextView tvXY,tvFrame;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_setting);
        ImmersionBar.with(this).statusBarDarkFont(true,0.2f).statusBarColor(R.color.white).init();
        tvXY = findViewById(R.id.tv_xy);
        tvFrame = findViewById(R.id.tv_frame);
        refresh();
        CallApplication.the().getCallManager().registerCallListener(this);

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        CallApplication.the().getCallManager().unregisterCallListener(this);
    }

    private void refresh() {
        int spFrame = SpUtil.getInt("frame");
        if (spFrame == 1){
            tvFrame.setText("15");
        }else if (spFrame ==2){
            tvFrame.setText("24");
        }else if (spFrame == 3){
            tvFrame.setText("30");
        }
        int spSize = SpUtil.getInt("size");
        if (spSize == 1){
            tvXY.setText("240 * 320");
        }else if (spSize ==2){
            tvXY.setText("480 * 640");
        }else if (spSize == 3){
            tvXY.setText("720 * 1280");
        }
    }

    public void Back(View view) {
        finish();
    }

    public void FenBianLv(View view) {
        BottomMenu.show(this, new String[]{"240 * 320", "480 * 640", "720 * 1280"}, new OnMenuItemClickListener() {
            @Override
            public void onClick(String text, int index) {
                SpUtil.putInt("size",index+1);
                refresh();
                Toast.makeText(SettingActivity.this,"设置成功",Toast.LENGTH_SHORT).show();
            }
        }).setTitle("请选择分辨率");
    }

    public void Frame(View view) {
        BottomMenu.show(this, new String[]{"15", "24", "30"}, new OnMenuItemClickListener() {
            @Override
            public void onClick(String text, int index) {
                SpUtil.putInt("frame",index+1);
                refresh();
                Toast.makeText(SettingActivity.this,"设置成功",Toast.LENGTH_SHORT).show();
            }
        }).setTitle("请选择帧率");

    }

    @Override
    public void onLocalInvitationReceivedByPeer(LocalInvitation localInvitation) {

    }

    @Override
    public void onLocalInvitationAccepted(LocalInvitation localInvitation, String s) {

    }

    @Override
    public void onLocalInvitationRefused(LocalInvitation localInvitation, String s) {

    }

    @Override
    public void onLocalInvitationCanceled(LocalInvitation localInvitation) {

    }

    @Override
    public void onLocalInvitationFailure(LocalInvitation localInvitation, int i) {

    }

    @Override
    public void onRemoteInvitationReceived(RemoteInvitation remoteInvitation) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Intent i = new Intent(SettingActivity.this, CallActivity.class);
                    i.putExtra("RecCall",true);
                    startActivity(i);
                    finish();
                }
            });
    }

    @Override
    public void onRemoteInvitationAccepted(RemoteInvitation remoteInvitation) {

    }

    @Override
    public void onRemoteInvitationRefused(RemoteInvitation remoteInvitation) {

    }

    @Override
    public void onRemoteInvitationCanceled(RemoteInvitation remoteInvitation) {

    }

    @Override
    public void onRemoteInvitationFailure(RemoteInvitation remoteInvitation, int i) {

    }
}