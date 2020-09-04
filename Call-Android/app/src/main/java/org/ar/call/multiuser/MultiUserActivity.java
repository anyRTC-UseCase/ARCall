package org.ar.call.multiuser;

import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.StaggeredGridLayoutManager;
import com.chad.library.adapter.base.BaseQuickAdapter;
import com.google.gson.Gson;
import com.kongzue.dialog.v3.MessageDialog;
import com.lzf.easyfloat.EasyFloat;

import org.ar.call.BaseActivity;
import org.ar.call.CallApplication;
import org.ar.call.R;
import org.ar.call.SettingActivity;
import org.ar.call.p2p.VideoActivity;
import org.ar.call.weight.VerificationCodeView;
import org.ar.rtm.ErrorInfo;
import org.ar.rtm.LocalInvitation;
import org.ar.rtm.RemoteInvitation;
import org.ar.rtm.ResultCallback;
import org.ar.rtm.RtmCallManager;
import org.ar.rtm.RtmChannel;
import org.ar.rtm.RtmChannelAttribute;
import org.ar.rtm.RtmChannelListener;
import org.ar.rtm.RtmChannelMember;
import org.ar.rtm.RtmClient;
import org.ar.rtm.RtmMessage;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


public class MultiUserActivity extends BaseActivity implements View.OnClickListener,RtmChannelListener {
    private final static String TAG="MultiUserActivity";
    private final static int MULTI_USER_MAX=6;
    private MediaPlayer player;
    private RtmClient rtmClient;
    private RtmChannel rtmChannel;
    private RtmCallManager rtmCallManager;
    private RemoteInvitation remoteInvitation;

    private RelativeLayout rlMultiCallPre,rlMultiCall;
    private ImageView mImgBack;
    private ImageButton mBtnSetting;
    private RecyclerView mRecyclerViewTag;
    private Button mMultiCall,mBtnMultiHangUp,mBtnMultiAccept,mPackUp;
    private TextView mTvUserId,mTvMultiUserPre,mTextTip;
    private VerificationCodeView multiUserVerification;

    private MultiTagAdapter multiTagAdapter;
    private StaggeredGridLayoutManager staggeredGridLayoutManager;

    private boolean isAddSame,isAddSelf;
    private boolean isConference =false ;
    private boolean isCanceled;
    private String userId;
    private Toast mToast;
    //呼叫的全部ID和自己的ID
    private List<String> mUserIdList;
    //退出频道的ID
    private List<String> mUserLeftList;
    //设置倒计时60s
    private CountDownTimer mCountDownTimer;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        setContentView(R.layout.activity_multiuser);
        rtmClient = CallApplication.the().getCallManager().getRtmClient();
        rtmCallManager=CallApplication.the().getCallManager().getRtmCallManager();
        initView();
    }

    private void initView() {
        mImgBack =findViewById(R.id.iv_multi_back);
        mBtnSetting =findViewById(R.id.btn_setting_multi);
        mRecyclerViewTag =findViewById(R.id.multi_recycler_tag);
        mMultiCall =findViewById(R.id.btn_multi_call);
        mTvUserId =findViewById(R.id.tv_multi_user);
        mPackUp = findViewById(R.id.btn_multi_user_pack_up);
        multiUserVerification =findViewById(R.id.et_multi_user);
        rlMultiCall =findViewById(R.id.rl_multi_call);
        rlMultiCallPre =findViewById(R.id.rl_multi_call_pre);
        mBtnMultiHangUp =findViewById(R.id.btn_multi_hangup);
        mBtnMultiAccept =findViewById(R.id.btn_multi_accept);
        mTvMultiUserPre =findViewById(R.id.tv_multi_user_pre);
        mTextTip =findViewById(R.id.text_tip);
        rlMultiCall.setVisibility(View.VISIBLE);
        rlMultiCallPre.setVisibility(View.GONE);
        userId = CallApplication.the().getUserId();
        mTvUserId.setText("您的呼叫ID:"+userId);
        multiTagAdapter =new MultiTagAdapter();
        staggeredGridLayoutManager =new StaggeredGridLayoutManager(3,StaggeredGridLayoutManager.VERTICAL);
        mRecyclerViewTag.setLayoutManager(staggeredGridLayoutManager);
        mRecyclerViewTag.setAdapter(multiTagAdapter);
        initDownTimer();
        setListener();
        boolean isRecCall = getIntent().getBooleanExtra("RecCall",false);
        if (isRecCall){
            remoteInvitation = CallApplication.the().getCallManager().getRemoteInvitation();
            String channelId ="";
            MultiUserBean multiUserBean =new Gson().fromJson(remoteInvitation.getContent(),MultiUserBean.class);
            channelId =multiUserBean.getChanId();
            mUserIdList=multiUserBean.getUserData();
            joinRtmChannel(channelId);
            mCountDownTimer.start();
            showRemoteLayout(remoteInvitation);
        }
    }

    /**
     * 初始化倒计时  60s
     */
    private void initDownTimer(){
        mCountDownTimer =new CountDownTimer(60*1000,1000) {
            @Override
            public void onTick(long millisUntilFinished) {
                Log.i(TAG, "onTick: millisUntilFinished ="+millisUntilFinished);
            }

            @Override
            public void onFinish() {
                setHangUp();
                showToast("视频未接通");
            }
        };
    }

    private void setListener(){
        mImgBack.setOnClickListener(this);
        mBtnSetting.setOnClickListener(this);
        mMultiCall.setOnClickListener(this);
        mBtnMultiHangUp.setOnClickListener(this);
        mBtnMultiAccept.setOnClickListener(this);
        mPackUp.setOnClickListener(this);
        multiTagAdapter.setOnItemChildClickListener(new BaseQuickAdapter.OnItemChildClickListener() {
            @Override
            public void onItemChildClick(BaseQuickAdapter adapter, View view, int position) {
                Log.i(TAG, "onItemChildClick: pos ="+position);
                deleteId(position);
            }
        });

        multiUserVerification.setInputCompleteListener(new VerificationCodeView.InputCompleteListener() {
            @Override
            public void inputComplete() {
                addCallTag();
            }
            @Override
            public void deleteContent() {
                if (multiUserVerification.getInputContent().length() < 4) {
                }
            }
        });
    }

    private void addCallTag(){
        if (multiUserVerification.getInputContent().length() == 4) {
            if (multiTagAdapter.getItemCount()!=0){
                for (int i = 0; i <multiTagAdapter.getItemCount() ; i++) {
                    if (multiUserVerification.getInputContent().equals(multiTagAdapter.getItem(i).getContent())){
                        isAddSame =true;
                    }
                }
            }

            if (multiUserVerification.getInputContent().equals(userId)){
                isAddSelf =true;
            }

            if (EasyFloat.appFloatIsShow()) {
                Toast.makeText(this, "有通话正在进行", Toast.LENGTH_SHORT).show();
                multiUserVerification.clearInputContent();
                return;
            }

            if (multiTagAdapter.getItemCount()==MULTI_USER_MAX) {
                showTipDialog("最多只能呼叫6人");
                multiUserVerification.clearInputContent();
                return;
            }
            if (isAddSame) {
                showTipDialog("用户ID已存在");
                isAddSame =false;
                multiUserVerification.clearInputContent();
                return;
            }
            if (isAddSelf) {
                showTipDialog("不能为自己的ID");
                isAddSelf =false;
                multiUserVerification.clearInputContent();
                return;
            }
            multiTagAdapter.addData(new MultiTagBean(multiUserVerification.getInputContent()));
            mMultiCall.setSelected(true);
            mMultiCall.setEnabled(true);
            mTextTip.setVisibility(View.VISIBLE);
            multiUserVerification.clearInputContent();
        }
    }

    public void deleteId(int pos) {
        Toast.makeText(MultiUserActivity.this, "已删除ID:"+multiTagAdapter.getItem(pos).getContent(), Toast.LENGTH_SHORT).show();
        multiTagAdapter.remove(pos);
        if (multiTagAdapter.getItemCount() ==0){
            mTextTip.setVisibility(View.GONE);
            mMultiCall.setSelected(false);
            mMultiCall.setEnabled(false);
        }
    }

    private void showTipDialog(String tips) {
        MessageDialog.show(this, "提示", tips, "确定");
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

    @Override
    protected void onResume() {
        super.onResume();
        CallApplication.the().getCallManager().registerChannelListener(this);
        if (multiTagAdapter.getItemCount() !=0){
            multiTagAdapter.getData().clear();
            multiTagAdapter.notifyDataSetChanged();
        }
        if (multiUserVerification !=null){
            multiUserVerification.clearInputContent();
        }
        mTextTip.setVisibility(View.GONE);
        mMultiCall.setSelected(false);
        mMultiCall.setEnabled(false);
        mUserIdList =new ArrayList<>();
        mUserLeftList =new ArrayList<>();
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()){
            case R.id.iv_multi_back:
                finish();
                break;
            case R.id.btn_multi_user_pack_up:
                //showSmallScreen();
                break;
            case R.id.btn_setting_multi:
                Intent intent =new Intent(this, SettingActivity.class);
                intent.putExtra("ARCall",false);
                startActivity(intent);
                break;
            case R.id.btn_multi_call:
                multiUserCall();
                break;
            case R.id.btn_multi_hangup:
                mCountDownTimer.cancel();
                setHangUp();
                break;
            case R.id.btn_multi_accept:
                mCountDownTimer.cancel();
                rtmCallManager.acceptRemoteInvitation(remoteInvitation, null);
                setAccepted();
                break;
            default:
                break;
        }
    }

    private void multiUserCall(){
        JSONObject param =new JSONObject();
        JSONArray jsonArray =new JSONArray();
        String channelId =String.valueOf((int) ((Math.random() * 9 + 1) * 100000000));
        mUserIdList.add(userId);
        for (int i = 0; i < multiTagAdapter.getItemCount(); i++) {
            if (!mUserIdList.contains(multiTagAdapter.getItem(i).getContent())){
                mUserIdList.add(multiTagAdapter.getItem(i).getContent());
            }
        }
        try {
            param.put("Mode",0);
            param.put("Conference",true);
            param.put("ChanId",channelId);
            for (String uid : mUserIdList){
                jsonArray.put(uid);
            }
            param.put("UserData",jsonArray);

        } catch (JSONException e) {
            e.printStackTrace();
        }
        Intent intent =new Intent(MultiUserActivity.this,MultiVideoActivity.class);
        intent.putExtra("MultiContent", param.toString());
        intent.putExtra("userMultiId", userId);
        intent.putExtra("isCall",true);
        startActivity(intent);
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
            if (player!=null) {
                player.stop();
                player.release();
                player = null;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void setHangUp(){
        rtmCallManager.refuseRemoteInvitation(remoteInvitation, new ResultCallback<Void>() {
            @Override
            public void onSuccess(Void var1) {
            }
            @Override
            public void onFailure(ErrorInfo var1) {
            }
        });
        CallApplication.the().getCallManager().releaseChannel();
        resetCall();
    }

    private void resetCall() {
        stopRing();
        rlMultiCall.setVisibility(View.VISIBLE);
        rlMultiCallPre.setVisibility(View.GONE);
    }

    private void showRemoteLayout(RemoteInvitation remoteInvitation) {
        if (rlMultiCallPre.getVisibility() ==View.VISIBLE){
            return;
        }
        rlMultiCall.setVisibility(View.GONE);
        rlMultiCallPre.setVisibility(View.VISIBLE);
        startRing();
        MultiUserBean multiUserBean = new Gson().fromJson(remoteInvitation.getContent(),MultiUserBean.class);
        List<String> uidList = multiUserBean.getUserData();
        String textContent="";
        for (int i = 0; i <uidList.size() ; i++) {
            if (!userId.equals(uidList.get(i))){
                switch (i){
                    case 0:
                        textContent =uidList.get(0);
                        break;
                    case 1:
                        textContent +=" "+uidList.get(1);
                        break;
                    case 2:
                        textContent +=" "+uidList.get(2);
                        break;
                    case 3:
                        textContent +=" "+uidList.get(3);
                        break;
                    case 4:
                        textContent +=" "+uidList.get(4);
                        break;
                    case 5:
                        textContent +=" "+uidList.get(5);
                        break;
                    default:
                        break;
                }
            }
        }
        mTvMultiUserPre.setText(textContent);
    }

    private void setAccepted(){
        Intent intent =new Intent(MultiUserActivity.this,MultiVideoActivity.class);
        if (mUserLeftList.size() == 0){
            intent.putExtra("MultiContent", remoteInvitation.getContent());
        }else {
            MultiUserBean multiUserBean = new Gson().fromJson(remoteInvitation.getContent(),MultiUserBean.class);
            List<String> remoteUserList = multiUserBean.getUserData();
            String channelId = multiUserBean.getChanId();
            for (String uid: mUserLeftList){
                if (remoteUserList.contains(uid)){
                    remoteUserList.remove(uid);
                }
            }
            String content =new Gson().toJson(new MultiUserBean(0,true,channelId,remoteUserList));
            Log.d(TAG, "onRemoteInvitationAccepted: content = "+content);
            intent.putExtra("MultiContent", content);
        }
        intent.putExtra("userMultiId", userId);
        intent.putExtra("isCall",false);
        startActivity(intent);
        resetCall();
    }

    private void joinRtmChannel(String channelId){
        rtmChannel =CallApplication.the().getCallManager().createChannel(channelId);
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

    /**
     * 返回给主叫：被叫已收到呼叫邀请。
     * @param local 一个 LocalInvitation 对象。
     */
    @Override
    public void onLocalInvitationReceivedByPeer(LocalInvitation local) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                isCanceled =false;
                Log.i(TAG, "run: onLocalInvitationReceivedByPeer --->");
            }
        });
    }

    /**
     * 返回给主叫：被叫已接受呼叫邀请。
     * @param var1 一个 LocalInvitation 对象。
     * @param var2 LocalInvitation 的响应内容。
     */
    @Override
    public void onLocalInvitationAccepted(LocalInvitation var1, String var2) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onLocalInvitationAccepted --->");
            }
        });
    }

    /**
     * 返回给主叫：被叫已拒绝呼叫邀请。
     * @param var1 一个 LocalInvitation 对象。
     * @param var2 LocalInvitation 的响应内容。
     */
    @Override
    public void onLocalInvitationRefused(LocalInvitation var1, String var2) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                //stopRing();
                //showToast(var1.getCalleeId()+"已拒绝");
                Log.i(TAG, "run: onLocalInvitationRefused --->"+var1.getResponse());
            }
        });
    }

    /**
     * 返回给主叫：呼叫邀请已被取消。
     * @param var1 一个 LocalInvitation 对象。
     */
    @Override
    public void onLocalInvitationCanceled(LocalInvitation var1) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onLocalInvitationCanceled --->");
            }
        });
    }

    /**
     * 返回给主叫：呼叫邀请进程失败。
     * @param var1 一个 LocalInvitation 对象。
     * @param var2 错误码。详见 LocalInvitationError。
     */
    @Override
    public void onLocalInvitationFailure(LocalInvitation var1, int var2) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onLocalInvitationFailure --->");
            }
        });
    }

    /**
     * 返回给被叫：收到一个呼叫邀请。
     * @param remote 一个 RemoteInvitation 对象。
     */
    @Override
    public void onRemoteInvitationReceived(RemoteInvitation remote) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (rlMultiCallPre.getVisibility() ==View.VISIBLE){
                    return;
                }
                try {
                    JSONObject jsonObject =new JSONObject(remote.getContent());
                    isConference =jsonObject.getBoolean("Conference");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                if (isConference){
                    remoteInvitation =remote;
                    String channelId ="";
                    MultiUserBean multiUserBean =new Gson().fromJson(remote.getContent(),MultiUserBean.class);
                    channelId =multiUserBean.getChanId();
                    mUserIdList=multiUserBean.getUserData();
                    joinRtmChannel(channelId);
                    mCountDownTimer.start();
                    showRemoteLayout(remote);
                }else {
                    Intent i = new Intent(MultiUserActivity.this, VideoActivity.class);
                    i.putExtra("RecCall",true);
                    startActivity(i);
                    finish();
                }
                Log.i(TAG, "run: onRemoteInvitationReceived --->");
            }
        });
    }


    /**
     *  返回给被叫：接受呼叫邀请成功。
     * @param remoteInvitation 一个 RemoteInvitation 对象。
     */
    @Override
    public void onRemoteInvitationAccepted(RemoteInvitation remoteInvitation) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onRemoteInvitationAccepted --->");
            }
        });
    }

    /**
     * 返回给被叫：拒绝呼叫邀请成功。
     * @param var1 一个 RemoteInvitation 对象。
     */
    @Override
    public void onRemoteInvitationRefused(RemoteInvitation var1) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: onRemoteInvitationRefused --->");
            }
        });
    }

    /**
     *  返回给被叫：主叫已取消呼叫邀请。
     * @param remoteInvitation 一个 RemoteInvitation 对象。
     */
    @Override
    public void onRemoteInvitationCanceled(RemoteInvitation remoteInvitation) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
               if (isConference){
                   isCanceled =true;
               }
                Log.i(TAG, "run: onRemoteInvitationCanceled --->");
            }
        });
    }

    /**
     * 返回给被叫：来自主叫的呼叫邀请进程失败。
     * @param var1 一个 RemoteInvitation 对象。
     * @param var2 错误码。详见 RemoteInvitationError。
     */
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

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode==KeyEvent.KEYCODE_BACK){
            if (rlMultiCallPre.getVisibility() == View.VISIBLE) {
                setHangUp();
            }else {
                finish();
            }
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
                    if (rlMultiCallPre.getVisibility() == View.VISIBLE) {
                        setHangUp();
                        baseDialog.doDismiss();
                    }else {
                        baseDialog.doDismiss();
                        rtmClient.logout(null);
                        CallApplication.the().getCallManager().getRtmClient().release();
                        System.exit(0);
                        finish();
                    }
                    return true;
                });
    }

    @Override
    protected void onStop() {
        super.onStop();
        CallApplication.the().getCallManager().unregisterChannelListener(this);
        stopRing();
    }

    @Override
    public void onMemberCountUpdated(int var1) {

    }

    @Override
    public void onAttributesUpdated(List<RtmChannelAttribute> var1) {

    }

    @Override
    public void onMessageReceived(RtmMessage var1, RtmChannelMember var2) {

    }

    @Override
    public void onMemberJoined(RtmChannelMember rtmChannelMember) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "onMemberJoined: getUserId ="+rtmChannelMember.getUserId());
            }
        });

    }

    @Override
    public void onMemberLeft(RtmChannelMember rtmChannelMember) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.d(TAG, "onMemberLeft: uid ="+rtmChannelMember.getUserId());
                if (rlMultiCallPre.getVisibility() == View.VISIBLE){
                    if (!mUserLeftList.contains(rtmChannelMember.getUserId())){
                        mUserLeftList.add(rtmChannelMember.getUserId());
                    }
                }
                if (mUserIdList.contains(rtmChannelMember.getUserId())){
                    mUserIdList.remove(rtmChannelMember.getUserId());
                }
                Log.d(TAG, "onMemberLeft:remove uid ="+mUserIdList.toString());
                if (mUserIdList.size() ==1){
                    if (rlMultiCallPre.getVisibility() ==View.VISIBLE){
                        resetCall();
                        mCountDownTimer.cancel();
                        CallApplication.the().getCallManager().releaseChannel();
                        showTipDialog("对方已取消呼叫");
                    }
                }
            }
        });
    }
}
