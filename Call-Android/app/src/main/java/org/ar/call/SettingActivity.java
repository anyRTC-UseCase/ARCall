package org.ar.call;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.gyf.immersionbar.ImmersionBar;
import com.kongzue.dialog.interfaces.OnMenuItemClickListener;
import com.kongzue.dialog.v3.BottomMenu;

import org.ar.call.p2p.VideoActivity;
import org.ar.call.multi.MultiCallActivity;
import org.ar.call.utils.SpUtil;
import org.ar.rtm.RemoteInvitation;
import org.json.JSONException;
import org.json.JSONObject;

public class SettingActivity extends BaseActivity  {

    private TextView tvXY,tvFrame;
    private Button mBtnCamera,mBtnMicrophone;
    private boolean isOpenCamera,isOpenMicrophone;
    private boolean isP2P;
    private LinearLayout llSettingResolution,llSettingCamera;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_setting);
        Intent intent =getIntent();
        isP2P =intent.getBooleanExtra("isP2P",false);
        ImmersionBar.with(this).statusBarDarkFont(true,0.2f).statusBarColor(R.color.white).init();
        init();
    }

    private void init(){
        tvXY = findViewById(R.id.tv_xy);
        tvFrame = findViewById(R.id.tv_frame);
        mBtnCamera =findViewById(R.id.setting_camera);
        mBtnMicrophone =findViewById(R.id.setting_microphone);
        llSettingResolution =findViewById(R.id.ll_setting_resolution);
        llSettingCamera =findViewById(R.id.ll_setting_camera);
        if (isP2P){
            llSettingResolution.setVisibility(View.VISIBLE);
            llSettingCamera.setVisibility(View.GONE);
            refresh();
        }else {
            llSettingResolution.setVisibility(View.GONE);
            llSettingCamera.setVisibility(View.VISIBLE);
            isOpenCamera =SpUtil.getBoolean("isOpenCamera",true);
            isOpenMicrophone =SpUtil.getBoolean("isOpenMicrophone",true);
            if (isOpenCamera){
                mBtnCamera.setBackgroundResource(R.drawable.open);
            }else {
                mBtnCamera.setBackgroundResource(R.drawable.close);
            }
            if (isOpenMicrophone){
                mBtnMicrophone.setBackgroundResource(R.drawable.open);
            }else {
                mBtnMicrophone.setBackgroundResource(R.drawable.close);
            }
        }

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }

    public void openCamera(View view){
        if (isOpenCamera){
            mBtnCamera.setBackgroundResource(R.drawable.close);
        }else {
            mBtnCamera.setBackgroundResource(R.drawable.open);
        }
        isOpenCamera =!isOpenCamera;
        SpUtil.putBoolean("isOpenCamera",isOpenCamera);
    }

    public void closeMicrophone(View view){
        if (isOpenMicrophone){
            mBtnMicrophone.setBackgroundResource(R.drawable.close);
        }else {
            mBtnMicrophone.setBackgroundResource(R.drawable.open);
        }
        isOpenMicrophone =!isOpenMicrophone;
        SpUtil.putBoolean("isOpenMicrophone",isOpenMicrophone);
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
    public void onRemoteInvitationReceived(RemoteInvitation remoteInvitation) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    try {
                        JSONObject jsonObject = new JSONObject(remoteInvitation.getContent());
                        boolean isConference = jsonObject.getBoolean("Conference");
                        if (!isConference){
                            Intent i = new Intent(SettingActivity.this, VideoActivity.class);
                            i.putExtra("RecCall",true);
                            startActivity(i);
                            finish();
                        }else {
                            Intent i = new Intent(SettingActivity.this, MultiCallActivity.class);
                            i.putExtra("RecCall",true);
                            startActivity(i);
                            finish();
                        }
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            });
    }

}