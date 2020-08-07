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
    private List<RtmClientListener> mListenerList = new ArrayList<>();
    private boolean isCall = false;
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
        } catch (Exception e) {
            e.printStackTrace();
        }
    }




    public RtmClient getRtmClient() {
        return rtmClient;
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
