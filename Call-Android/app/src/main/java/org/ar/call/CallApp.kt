package org.ar.call

import android.app.Activity
import android.app.Application
import android.os.Bundle
import android.text.TextUtils
import com.kongzue.dialog.util.DialogSettings
import com.lzf.easyfloat.EasyFloat
import org.ar.call.multi.MultiVideosActivity
import org.ar.call.p2p.VideoActivity
import org.ar.call.utils.Constans
import org.ar.call.utils.RTManager
import org.ar.call.utils.SpUtil
import kotlin.properties.Delegates

class CallApp : Application(),Application.ActivityLifecycleCallbacks{

    val userId = ((Math.random()*9+1)*1000L).toInt().toString()

    var multiMeetingActivityTaskId = -1
    var multiMainActivityTaskId =-1

    var p2pMainActivityTaskId = -1
    var p2pMeetingActivityTaskId = -1



    companion object{
        var callApp : CallApp by Delegates.notNull()
    }

    override fun onCreate() {
        super.onCreate()
        callApp = this
        RTManager.init(this, BuildConfig.APPID)

        DialogSettings.style = DialogSettings.STYLE.STYLE_IOS
        SpUtil.init(this)
        EasyFloat.init(this)
        registerActivityLifecycleCallbacks(this)

    }

    fun getChannelId():String{
        return ((Math.random()*9+1)* 100000000L).toLong().toString()
    }



    override fun onActivityCreated(activity: Activity, savedInstanceState: Bundle?) {

    }

    override fun onActivityStarted(activity: Activity) {
        if (activity is MultiVideosActivity) {
            multiMeetingActivityTaskId = activity.getTaskId()
        }
        if (activity is VideoActivity) {
            p2pMeetingActivityTaskId = activity.getTaskId()
        }
        if (activity.javaClass.name == "org.ar.call.multi.MultiCallActivity") {
            multiMainActivityTaskId = activity.taskId
        }
        if (activity.javaClass.name == "org.ar.call.p2p.CallActivity") {
            p2pMainActivityTaskId = activity.taskId
        }
    }

    override fun onActivityResumed(activity: Activity) {
    }

    override fun onActivityPaused(activity: Activity) {
    }

    override fun onActivityStopped(activity: Activity) {
    }

    override fun onActivitySaveInstanceState(activity: Activity, outState: Bundle) {
    }

    override fun onActivityDestroyed(activity: Activity) {
    }
}