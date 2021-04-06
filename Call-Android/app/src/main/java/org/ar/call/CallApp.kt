package org.ar.call

import android.app.Activity
import android.app.Application
import android.content.Context
import android.content.Intent
import android.os.Bundle
import com.kongzue.dialog.util.DialogSettings
import com.lzf.easyfloat.EasyFloat
import org.ar.call.multi.MultiVideosActivity
import org.ar.call.p2p.VideoActivity
import org.ar.call.utils.Constans
import org.ar.call.utils.NotificationUtil
import org.ar.call.utils.SpUtil
import kotlin.properties.Delegates

class CallApp : Application(),Application.ActivityLifecycleCallbacks{

    val userId = ((Math.random()*9+1)*1000L).toInt().toString()

    var multiMeetingActivityTaskId = -1
    var multiMainActivityTaskId =-1

    var p2pMainActivityTaskId = -1
    var p2pMeetingActivityTaskId = -1

    var indexActivityTaskId = -1

    var mActivityCount = 0
    var curActivity : Activity? = null


    companion object{
        var callApp : CallApp by Delegates.notNull()
    }

    override fun onCreate() {
        super.onCreate()
        callApp = this
        SpUtil.init(this)
        NotificationUtil.createNotificationChannel()
        RtmManager.instance.init(this)
        RtcManager.instance.init(this)
        DialogSettings.style = DialogSettings.STYLE.STYLE_IOS
        EasyFloat.init(this)
        registerActivityLifecycleCallbacks(this)

    }

    fun getChannelId():String{
        return ((Math.random()*9+1)* 100000000L).toLong().toString()
    }



    override fun onActivityCreated(activity: Activity, savedInstanceState: Bundle?) {

    }

    override fun onActivityStarted(activity: Activity) {
        mActivityCount++


        if (activity is MultiVideosActivity) {
            multiMeetingActivityTaskId = activity.getTaskId()
        }
        if (activity is VideoActivity) {
            p2pMeetingActivityTaskId = activity.getTaskId()
        }

        if (activity.javaClass.name ==  "org.ar.call.MainActivity"){
            indexActivityTaskId = activity.taskId
        }
        if (activity.javaClass.name == "org.ar.call.multi.MultiCallActivity") {
            multiMainActivityTaskId = activity.taskId
        }
        if (activity.javaClass.name == "org.ar.call.p2p.CallActivity") {
            p2pMainActivityTaskId = activity.taskId
        }

        checkState(activity)

    }

    override fun onActivityResumed(activity: Activity) {
        curActivity = activity
    }

    override fun onActivityPaused(activity: Activity) {
    }

    override fun onActivityStopped(activity: Activity) {
        mActivityCount--
    }

    override fun onActivitySaveInstanceState(activity: Activity, outState: Bundle) {
    }

    override fun onActivityDestroyed(activity: Activity) {
    }

    private fun checkState(activity: Activity) {
        if (activity.callingActivity?.className == VideoActivity::class.java.name || activity is VideoActivity) {
            return
        }
        if (activity.callingActivity?.className == MultiVideosActivity::class.java.name || activity is MultiVideosActivity) {
            return
        }
        if (RtcManager.instance.inMeeting && !RtcManager.instance.windowMode) {
            startInStack(activity)
        }
    }

    private fun startInStack(context: Context) {
        when(RtcManager.instance.callMode){
            Constans.SINGLE_MODE->{
                if (p2pMeetingActivityTaskId == -1){
                    return
                }
                val intent = Intent(context,VideoActivity::class.java)
                context.startActivity(intent)
            }
            Constans.MEETING_MODE->{
                if (multiMeetingActivityTaskId == -1){
                    return
                }
                val intent = Intent(context,MultiVideosActivity::class.java)
                context.startActivity(intent)
            }
        }
    }
}