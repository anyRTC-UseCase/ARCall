package org.ar.call;

import android.content.Context;
import android.util.Log;

import org.ar.rtc.IRtcEngineEventHandler;
import org.ar.rtc.RtcEngine;
import org.ar.rtm.LocalInvitation;
import org.ar.rtm.RemoteInvitation;
import org.ar.rtm.RtmCallEventListener;
import org.ar.rtm.RtmCallManager;
import org.ar.rtm.RtmChannel;
import org.ar.rtm.RtmChannelAttribute;
import org.ar.rtm.RtmChannelListener;
import org.ar.rtm.RtmChannelMember;
import org.ar.rtm.RtmClient;
import org.ar.rtm.RtmClientListener;
import org.ar.rtm.RtmMessage;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


public class CallManager {

    private Context context;
    private RtmClient rtmClient;
    private RtmCallManager rtmCallManager;
    private List<RtmClientListener> mListenerList = new ArrayList<>();
    private List<RtmCallEventListener> rtmCallEventListenerList = new ArrayList<>();
    private List<RtmChannelListener> channelListeners =new ArrayList<>();
    private boolean isCall = false;
    private RemoteInvitation remoteInvitation;
    private LocalInvitation localInvitation;
    private List<LocalInvitation> localInvitationList =new ArrayList<>();
    private List<RemoteInvitation> remoteInvitationList =new ArrayList<>();
    private RtmChannel rtmChannel;

    public CallManager(Context context) {
        this.context = context;
      }

    public void init(String appId){
        try {
            rtmClient = RtmClient.createInstance(context, appId, new RtmClientListener() {
                @Override
                public void onConnectionStateChanged(int state, int reason) {
                    if (state==4){
                        remoteInvitation = null;
                    }
                    for (RtmClientListener listener : mListenerList) {
                        listener.onConnectionStateChanged(state, reason);
                    }
                }

                @Override
                public void onMessageReceived(RtmMessage rtmMessage, String s) {
                    for (RtmClientListener listener : mListenerList) {
                        listener.onMessageReceived(rtmMessage,s);
                    }
                }

                @Override
                public void onTokenExpired() {

                }

                @Override
                public void onPeersOnlineStatusChanged(Map<String, Integer> map) {
                    for (RtmClientListener listener : mListenerList) {
                        listener.onPeersOnlineStatusChanged(map);
                    }
                }
            });
            rtmCallManager=rtmClient.getRtmCallManager();
            rtmCallManager.setEventListener(new RtmCallEventListener() {

                //返回给主叫的回调：被叫已收到呼叫邀请。
                @Override
                public void onLocalInvitationReceivedByPeer(LocalInvitation var1) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onLocalInvitationReceivedByPeer(var1);
                    }
                    boolean isConference = false;
                    try {
                        JSONObject jsonObject =new JSONObject(var1.getContent());
                        isConference =jsonObject.getBoolean("Conference");
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                    if (isConference){
                        if (!localInvitationList.contains(var1)){
                            localInvitationList.add(var1);
                        }
                    }
                }
                //返回给主叫的回调：被叫已接受呼叫邀请。
                @Override
                public void onLocalInvitationAccepted(LocalInvitation var1, String var2) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onLocalInvitationAccepted(var1,var2);
                    }
                }

                //返回给主叫的回调：被叫已拒绝呼叫邀请。
                @Override
                public void onLocalInvitationRefused(LocalInvitation var1, String var2) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onLocalInvitationRefused(var1,var2);
                    }
                }

                //返回给主叫的回调：呼叫邀请已被成功取消。
                @Override
                public void onLocalInvitationCanceled(LocalInvitation var1) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onLocalInvitationCanceled(var1);
                    }
                }

                //返回给主叫的回调：发出的呼叫邀请过程失败。
                @Override
                public void onLocalInvitationFailure(LocalInvitation var1, int var2) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onLocalInvitationFailure(var1,var2);
                    }
                }

                //返回给被叫的回调：收到一条呼叫邀请。SDK 会同时返回一个 RemoteInvitation 对象供被叫管理。
                @Override
                public void onRemoteInvitationReceived(RemoteInvitation var1) {
                    remoteInvitation = var1;
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onRemoteInvitationReceived(var1);
                    }
                    boolean isConference = false;
                    try {
                        JSONObject jsonObject =new JSONObject(var1.getContent());
                        isConference =jsonObject.getBoolean("Conference");
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                    if (isConference){
                        if (!remoteInvitationList.contains(var1)){
                            remoteInvitationList.add(var1);
                        }
                    }
                }

                //返回给被叫的回调：接受呼叫邀请成功。
                @Override
                public void onRemoteInvitationAccepted(RemoteInvitation var1) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onRemoteInvitationAccepted(var1);
                    }
                    remoteInvitation =null;
                }

                //返回给被叫的回调：拒绝呼叫邀请成功。
                @Override
                public void onRemoteInvitationRefused(RemoteInvitation var1) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onRemoteInvitationRefused(var1);
                    }
                    remoteInvitation=null;
                }

                //返回给被叫的回调：主叫已取消呼叫邀请。
                @Override
                public void onRemoteInvitationCanceled(RemoteInvitation var1) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onRemoteInvitationCanceled(var1);
                    }
                    remoteInvitation =null;
                }

                //返回给被叫的回调：来自主叫的邀请过程失败。
                @Override
                public void onRemoteInvitationFailure(RemoteInvitation var1, int var2) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onRemoteInvitationFailure(var1,var2);
                    }
                    remoteInvitation =null;
                }
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public RtmChannel createChannel(String channelId){
        if (rtmChannel == null){
            rtmChannel = rtmClient.createChannel(channelId, new RtmChannelListener() {
                @Override
                public void onMemberCountUpdated(int var1) {
                    for (RtmChannelListener listener:channelListeners){
                        listener.onMemberCountUpdated(var1);
                    }
                }

                @Override
                public void onAttributesUpdated(List<RtmChannelAttribute> var1) {
                    for (RtmChannelListener listener:channelListeners){
                        listener.onAttributesUpdated(var1);
                    }
                }

                @Override
                public void onMessageReceived(RtmMessage var1, RtmChannelMember var2) {
                    for (RtmChannelListener listener:channelListeners){
                        listener.onMessageReceived(var1,var2);
                    }
                }

                @Override
                public void onMemberJoined(RtmChannelMember var1) {
                    for (RtmChannelListener listener:channelListeners){
                        listener.onMemberJoined(var1);
                    }
                }

                @Override
                public void onMemberLeft(RtmChannelMember var1) {
                    for (RtmChannelListener listener:channelListeners){
                        listener.onMemberLeft(var1);
                    }
                }
            });
        }
        return rtmChannel;
    }

    public void releaseChannel(){
        if (rtmChannel != null){
            rtmChannel.leave(null);
            rtmChannel.release();
            rtmChannel=null;
        }
    }


    public void registerChannelListener(RtmChannelListener listener) {
        channelListeners.add(listener);
    }

    public void unregisterChannelListener(RtmChannelListener listener) {
        channelListeners.remove(listener);
    }


    public RemoteInvitation getRemoteInvitation() {
        return remoteInvitation;
    }

    public List<RemoteInvitation> getRemoteInvitationList() {
        return remoteInvitationList;
    }

    public LocalInvitation getLocalInvitation() {
        return localInvitation;
    }

    public List<LocalInvitation> getLocalInvitationList() {
        return localInvitationList;
    }

    public void setLocalInvitation(LocalInvitation localInvitation) {
        this.localInvitation = localInvitation;
    }

    public RtmClient getRtmClient() {
        return rtmClient;
    }

    public RtmCallManager getRtmCallManager() {
        return rtmCallManager;
    }

    public void registerCallListener(RtmCallEventListener listener) {
        if (!rtmCallEventListenerList.contains(listener)) {
            rtmCallEventListenerList.add(listener);
        }
    }



    public void unregisterCallListener(RtmCallEventListener listener) {
        rtmCallEventListenerList.remove(listener);
    }




    public void registerListener(RtmClientListener listener) {
        if (!mListenerList.contains(listener)) {
            mListenerList.add(listener);
        }
    }



    public void unregisterListener(RtmClientListener listener) {
        mListenerList.remove(listener);
    }

    public boolean isCall() {
        return isCall;
    }

    public void setCall(boolean call) {
        isCall = call;
    }

}
