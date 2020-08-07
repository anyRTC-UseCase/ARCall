package org.ar.call;

import android.app.Application;

import com.gyf.immersionbar.ImmersionBar;
import com.kongzue.dialog.util.DialogSettings;
import com.lzf.easyfloat.EasyFloat;

import org.ar.rtc.RtcEngine;


public class CallApplication extends Application {

    public static final String RTC_APPID = "";

    public static final String RTM_APPID = "";

    private static CallApplication sInstance;

    private CallManager callManager;

    @Override
    public void onCreate() {
        super.onCreate();
        sInstance =this;
        callManager = new CallManager(this);
        callManager.init(RTM_APPID);
        DialogSettings.style = DialogSettings.STYLE.STYLE_IOS;
        SpUtil.init(this);
        EasyFloat.init(this);
    }

    public static CallApplication the() {
        return sInstance;
    }


    public CallManager getCallManager() {
        return callManager;
    }

    public void ReleaseAll(){
        if (callManager!=null){
            callManager.getRtmClient().release();
        }
    }
}
