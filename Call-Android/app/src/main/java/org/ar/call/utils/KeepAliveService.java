package org.ar.call.utils;

import android.app.Activity;
import android.app.Notification;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Intent;
import android.os.IBinder;

import com.ycbjie.notificationlib.NotificationUtils;

import org.ar.call.CallApp;
import org.ar.call.MainActivity;
import org.ar.call.R;
import org.ar.call.multi.MultiVideosActivity;
import org.ar.call.p2p.VideoActivity;


public class KeepAliveService extends Service {


    public static void start(Activity activity){
        Intent intent = new Intent(activity, KeepAliveService.class);
        activity.startService(intent);
    }

    public static void stop(Activity activity){
        Intent intent = new Intent(activity, KeepAliveService.class);
        activity.stopService(intent);
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        // TODO 可能的需求：点击通知跳转
        return super.onStartCommand(intent, flags, startId);
    }

    @Override
    public void onStart(Intent intent, int startId) {
        super.onStart(intent, startId);

    }

    @Override
    public void onCreate() {
        super.onCreate();
        createNotification();

    }

    private void createNotification(){
        NotificationUtils notificationUtils = new NotificationUtils(this);
        PendingIntent pendingIntent = PendingIntent.getActivity(
                this, 0,
                new Intent(),
                PendingIntent.FLAG_UPDATE_CURRENT);
        Notification notification = notificationUtils.setContentIntent(pendingIntent).getNotification("ARCall",
                "通话中....", R.drawable.img_accept);
        startForeground(10,notification);
    }
}
