package org.ar.call;

import android.content.Context;

import org.ar.rtc.IRtcEngineEventHandler;
import org.ar.rtc.RtcEngine;
import org.ar.rtm.LocalInvitation;
import org.ar.rtm.RemoteInvitation;
import org.ar.rtm.RtmCallEventListener;
import org.ar.rtm.RtmCallManager;
import org.ar.rtm.RtmClient;
import org.ar.rtm.RtmClientListener;
import org.ar.rtm.RtmMessage;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.ar.call.CallApplication.RTC_APPID;

public class CallManager {

    private Context context;
    private RtmClient rtmClient;
    private RtmCallManager rtmCallManager;
    private List<RtmClientListener> mListenerList = new ArrayList<>();
    private List<RtmCallEventListener> rtmCallEventListenerList = new ArrayList<>();
    private boolean isCall = false;
    private RemoteInvitation remoteInvitation;
    public CallManager(Context context) {
        this.context = context;
      }

    public void init(String appId){
        try {
            rtmClient = RtmClient.createInstance(context, appId, new RtmClientListener() {
                @Override
                public void onConnectionStateChanged(int state, int reason) {
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
                @Override
                public void onLocalInvitationReceivedByPeer(LocalInvitation var1) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onLocalInvitationReceivedByPeer(var1);
                    }
                }

                @Override
                public void onLocalInvitationAccepted(LocalInvitation var1, String var2) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onLocalInvitationAccepted(var1,var2);
                    }
                }

                @Override
                public void onLocalInvitationRefused(LocalInvitation var1, String var2) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onLocalInvitationRefused(var1,var2);
                    }
                }

                @Override
                public void onLocalInvitationCanceled(LocalInvitation var1) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onLocalInvitationCanceled(var1);
                    }
                }

                @Override
                public void onLocalInvitationFailure(LocalInvitation var1, int var2) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onLocalInvitationFailure(var1,var2);
                    }
                }

                @Override
                public void onRemoteInvitationReceived(RemoteInvitation var1) {
                    remoteInvitation = var1;
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onRemoteInvitationReceived(var1);
                    }
                }

                @Override
                public void onRemoteInvitationAccepted(RemoteInvitation var1) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onRemoteInvitationAccepted(var1);
                    }
                }

                @Override
                public void onRemoteInvitationRefused(RemoteInvitation var1) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onRemoteInvitationRefused(var1);
                    }
                }

                @Override
                public void onRemoteInvitationCanceled(RemoteInvitation var1) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onRemoteInvitationCanceled(var1);
                    }
                }

                @Override
                public void onRemoteInvitationFailure(RemoteInvitation var1, int var2) {
                    for (RtmCallEventListener listener : rtmCallEventListenerList) {
                        listener.onRemoteInvitationFailure(var1,var2);
                    }
                }
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public RemoteInvitation getRemoteInvitation() {
        return remoteInvitation;
    }

    public RtmClient getRtmClient() {
        return rtmClient;
    }

    public RtmCallManager getRtmCallManager() {
        return rtmCallManager;
    }

    public void registerCallListener(RtmCallEventListener listener) {
        rtmCallEventListenerList.add(listener);
    }



    public void unregisterCallListener(RtmCallEventListener listener) {
        rtmCallEventListenerList.remove(listener);
    }




    public void registerListener(RtmClientListener listener) {
        mListenerList.add(listener);
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
