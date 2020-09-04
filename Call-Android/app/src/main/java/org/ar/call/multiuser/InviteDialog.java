package org.ar.call.multiuser;

import android.app.Dialog;
import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.gson.Gson;

import org.ar.call.CallApplication;
import org.ar.call.R;
import org.ar.call.utils.SpUtil;
import org.ar.call.weight.VerificationCodeView;
import org.ar.rtm.ErrorInfo;
import org.ar.rtm.LocalInvitation;
import org.ar.rtm.RemoteInvitation;
import org.ar.rtm.ResultCallback;
import org.ar.rtm.RtmCallEventListener;
import org.ar.rtm.RtmCallManager;
import org.ar.rtm.RtmClient;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class InviteDialog extends Dialog implements RtmCallEventListener {
    private static final String TAG ="InviteDialog";
    private String channelId;
    private Object object =new Object();
    private boolean isOnline;
    private RtmCallManager rtmCallManager;
    private RtmClient rtmClient;
    private Context mContent;
    private Button mCancel,mConfirm;
    private VerificationCodeView etInvite;
    private List<String> mUserIdList;
    private String userId;
    public interface InviteCallBack{
        void invite(String uid);
    }
    private InviteCallBack callBack;

    public InviteDialog(@NonNull Context context,List<String> userIdList,String channelId,InviteCallBack inviteCallBack) {
        super(context,R.style.dialog);
        mContent =context;
        mUserIdList =userIdList;
        callBack =inviteCallBack;
        this.channelId =channelId;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.invite_dialog);
        CallApplication.the().getCallManager().registerCallListener(this);
        rtmClient = CallApplication.the().getCallManager().getRtmClient();
        rtmCallManager= CallApplication.the().getCallManager().getRtmCallManager();
        userId = CallApplication.the().getUserId();
        mCancel =findViewById(R.id.btn_invite_cancel);
        mConfirm =findViewById(R.id.btn_invite_confirm);
        etInvite =findViewById(R.id.et_invite);
        mConfirm.setEnabled(false);
        mConfirm.setTextColor(mContent.getResources().getColor(R.color.invite_color_unfocus));
        setListener();
    }

    private void setListener(){
        mCancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dismiss();
            }
        });
        mConfirm.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (checkID()){
                    inviteUser();
                    if (!checkIdOnLine()){
                        callBack.invite(etInvite.getInputContent());
                    }
                    dismiss();
                }
                mConfirm.setEnabled(false);
                mConfirm.setTextColor(mContent.getResources().getColor(R.color.invite_color_unfocus));
                etInvite.clearInputContent();

            }
        });

        etInvite.setInputCompleteListener(new VerificationCodeView.InputCompleteListener() {
            @Override
            public void inputComplete() {
                if (etInvite.getInputContent().length() == 4) {
                    mConfirm.setTextColor(mContent.getResources().getColor(R.color.colorAccent));
                    mConfirm.setEnabled(true);
                }
            }
            @Override
            public void deleteContent() {
                if (etInvite.getInputContent().length() < 4) {
                }
            }
        });
    }

    private void inviteUser(){
        JSONObject param =new JSONObject();
        JSONArray jsonArray =new JSONArray();
        try {
            param.put("Mode",0);
            param.put("Conference",true);
            param.put("UserId",userId);
            param.put("ChanId", channelId);
            if (checkIdOnLine()){
                mUserIdList.add(etInvite.getInputContent());
            }
            if (!mUserIdList.contains(userId)){
                mUserIdList.add(userId);
            }
            for (String uid :mUserIdList){
                jsonArray.put(uid);
            }
            param.put("UserData",jsonArray);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        for (String id:mUserIdList) {
            Log.i(TAG, "inviteUser: id="+id);
        }
        LocalInvitation localInvitation = rtmCallManager.createLocalInvitation(etInvite.getInputContent());
        localInvitation.setContent(param.toString());
        rtmCallManager.sendLocalInvitation(localInvitation, new ResultCallback<Void>() {
            @Override
            public void onSuccess(Void var1) {
                new Thread(new Runnable() {
                    @Override
                    public void run() {

                    }
                });
            }
            @Override
            public void onFailure(ErrorInfo var1) {

            }
        });
    }

    private boolean checkID(){
        if (mUserIdList.contains(etInvite.getInputContent())){
            Toast.makeText(mContent, etInvite.getInputContent()+"通话中...", Toast.LENGTH_SHORT).show();
            return false;
        }
        if (userId.equals(etInvite.getInputContent())){
            Toast.makeText(mContent, "不能呼叫自己", Toast.LENGTH_SHORT).show();
            return false;
        }
        return true;
    }

    private boolean checkIdOnLine(){
        Set<String> queryList = new HashSet<>();
        queryList.add(etInvite.getInputContent());
        synchronized (object) {
            rtmClient.queryPeersOnlineStatus(queryList, new ResultCallback<Map<String, Boolean>>() {
                @Override
                public void onSuccess(Map<String, Boolean> stringBooleanMap) {
                    synchronized (object) {
                        isOnline = stringBooleanMap.get(etInvite.getInputContent());
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
        }
        return isOnline;
    }

    @Override
    public void onLocalInvitationReceivedByPeer(LocalInvitation var1) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "onLocalInvitationReceivedByPeer: --->");
            }
        });
    }

    @Override
    public void onLocalInvitationAccepted(LocalInvitation var1, String var2) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "onLocalInvitationAccepted: --->");
            }
        });
    }

    @Override
    public void onLocalInvitationRefused(LocalInvitation var1, String var2) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "onLocalInvitationRefused: --->");
            }
        });
    }

    @Override
    public void onLocalInvitationCanceled(LocalInvitation var1) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "onLocalInvitationCanceled: --->");
            }
        });
    }

    @Override
    public void onLocalInvitationFailure(LocalInvitation var1, int var2) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "onLocalInvitationFailure: --->");
            }
        });
    }

    @Override
    public void onRemoteInvitationReceived(RemoteInvitation var1) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "onRemoteInvitationReceived: --->");
            }
        });
    }

    @Override
    public void onRemoteInvitationAccepted(RemoteInvitation var1) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "onRemoteInvitationAccepted: --->");
            }
        });
    }

    @Override
    public void onRemoteInvitationRefused(RemoteInvitation var1) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "onRemoteInvitationRefused: --->");
            }
        });
    }

    @Override
    public void onRemoteInvitationCanceled(RemoteInvitation var1) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "onRemoteInvitationCanceled: --->");
            }
        });
    }

    @Override
    public void onRemoteInvitationFailure(RemoteInvitation var1, int var2) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "onRemoteInvitationFailure: --->");
            }
        });

    }

    @Override
    protected void onStop() {
        super.onStop();
        CallApplication.the().getCallManager().unregisterCallListener(this);
    }
}
