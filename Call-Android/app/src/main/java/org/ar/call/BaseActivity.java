package org.ar.call;

import android.os.Bundle;

import com.kongzue.dialog.interfaces.OnDismissListener;
import com.kongzue.dialog.v3.MessageDialog;
import com.kongzue.dialog.v3.TipDialog;

import org.ar.call.utils.RTManager;
import org.ar.rtm.LocalInvitation;
import org.ar.rtm.RemoteInvitation;
import org.ar.rtm.RtmCallEventListener;
import org.ar.rtm.RtmClientListener;
import org.ar.rtm.RtmMessage;

import java.util.Map;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public  abstract class BaseActivity extends AppCompatActivity implements RtmClientListener, RtmCallEventListener {

    private boolean isReconnect = false;
    private MessageDialog reconnectDialog;
    private boolean needUnRegister = true;

    public void setNeedUnRegister(boolean needUnRegister) {
        this.needUnRegister = needUnRegister;
    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        needUnRegister = true;
        RTManager.INSTANCE.registerRtmEvent(this);
        RTManager.INSTANCE.registerCallListener(this);
    }

    @Override
    protected void onResume() {
        super.onResume();
        RTManager.INSTANCE.registerRtmEvent(this);
        RTManager.INSTANCE.registerCallListener(this);
    }


    @Override
    protected void onRestart() {
        super.onRestart();
        if ( RTManager.INSTANCE.getRemoteInvitation()!=null){
            //退到后台 如果有人呼叫 回到页面重新显示
            onRemoteInvitationReceived( RTManager.INSTANCE.getRemoteInvitation());
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (needUnRegister) {
            RTManager.INSTANCE.unRegisterRtmEvent(this);
            RTManager.INSTANCE.unRegisterCallListener(this);
        }
    }

    @Override
    public void onConnectionStateChanged(int state, int var2) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (state==4){
                    isReconnect = true;
                    reconnectDialog=MessageDialog.build(BaseActivity.this)
                            .setTitle("提示")
                            .setMessage("正在重连....")
                            .setOnOkButtonClickListener((baseDialog, v) -> true)
                            .setCancelable(false);
                    reconnectDialog.show();
                }else if (state ==3){
                    if (isReconnect){
                        if (reconnectDialog!=null){
                            reconnectDialog.doDismiss();
                        }
                        isReconnect= false;
                        TipDialog.show(BaseActivity.this, "重连成功！", TipDialog.TYPE.SUCCESS).setOnDismissListener(new OnDismissListener() {
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
    public void onMessageReceived(RtmMessage var1, String var2) {

    }

    @Override
    public void onTokenExpired() {

    }

    @Override
    public void onPeersOnlineStatusChanged(Map<String, Integer> var1) {

    }

    @Override
    public void onLocalInvitationReceivedByPeer(LocalInvitation var1) {

    }

    @Override
    public void onLocalInvitationAccepted(LocalInvitation var1, String var2) {

    }

    @Override
    public void onLocalInvitationRefused(LocalInvitation var1, String var2) {

    }

    @Override
    public void onLocalInvitationCanceled(LocalInvitation var1) {

    }

    @Override
    public void onLocalInvitationFailure(LocalInvitation var1, int var2) {

    }

    @Override
    public void onRemoteInvitationReceived(RemoteInvitation var1) {

    }

    @Override
    public void onRemoteInvitationAccepted(RemoteInvitation var1) {

    }

    @Override
    public void onRemoteInvitationRefused(RemoteInvitation var1) {

    }

    @Override
    public void onRemoteInvitationCanceled(RemoteInvitation var1) {

    }

    @Override
    public void onRemoteInvitationFailure(RemoteInvitation var1, int var2) {

    }


}
