package org.ar.call

import android.app.Notification
import android.app.NotificationManager
import android.app.NotificationManager.IMPORTANCE_HIGH
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Handler
import android.os.Looper
import android.provider.Settings
import com.ycbjie.notificationlib.NotificationUtils
import org.ar.call.multi.MultiCallActivity
import org.ar.call.p2p.VideoActivity
import org.ar.rtm.*
import org.json.JSONException
import org.json.JSONObject


class RtmManager private constructor(){

    private var rtmClient : RtmClient? = null
    private var callManager : RtmCallManager? = null
    private var rtmChannel : RtmChannel? =null
    private val rtmEventList = mutableListOf<RtmClientListener>()
    private val callEventList = mutableListOf<RtmCallEventListener>()
    private val channelEventList = mutableListOf<RtmChannelListener>()
    private var remoteInvitation: RemoteInvitation? =null
    public var localInvitation: LocalInvitation? = null
    private var notificationUtils: NotificationUtils? = null


    fun getRtmClient():RtmClient?{
        return rtmClient
    }

    fun getCallManager():RtmCallManager?{
        return callManager
    }

    fun getRtmChannel():RtmChannel?{
        return rtmChannel
    }

    fun getRemoteInvitation():RemoteInvitation?{
        return remoteInvitation
    }

    fun init(context: Context){
        rtmClient = RtmClient.createInstance(context, BuildConfig.APPID, RtmEvent())
        callManager = rtmClient?.rtmCallManager
        callManager?.setEventListener(CallEvent())
    }

    fun createChannel(channelId: String): RtmChannel? {
        return if (rtmChannel == null){
            rtmChannel = rtmClient?.createChannel(channelId, ChannelEvent())
            rtmChannel
        }else{
            rtmChannel
        }
    }

    fun releaseChannel(){
        rtmChannel?.leave(null)
        rtmChannel?.release()
        rtmChannel = null
    }
    
    private inner class CallEvent : RtmCallEventListener{
        //返回给主叫的回调：被叫已收到呼叫邀请。
        override fun onLocalInvitationReceivedByPeer(var1: LocalInvitation?) {
            callEventList.forEach {
                it.onLocalInvitationReceivedByPeer(var1)
            }

        }

        //返回给主叫的回调：被叫已接受呼叫邀请
        override fun onLocalInvitationAccepted(var1: LocalInvitation?, var2: String?) {
            callEventList.forEach {
                it.onLocalInvitationAccepted(var1, var2)
            }
        }

        //返回给主叫的回调：被叫已拒绝呼叫邀请。
        override fun onLocalInvitationRefused(var1: LocalInvitation?, var2: String?) {
            callEventList.forEach {
                it.onLocalInvitationRefused(var1, var2)
            }
        }

        //返回给主叫的回调：呼叫邀请已被成功取消。
        override fun onLocalInvitationCanceled(var1: LocalInvitation?) {
            callEventList.forEach {
                it.onLocalInvitationCanceled(var1)
            }
        }
        //返回给主叫的回调：发出的呼叫邀请过程失败。
        override fun onLocalInvitationFailure(var1: LocalInvitation?, var2: Int) {
            callEventList.forEach {
                it.onLocalInvitationFailure(var1, var2)
            }
        }
        //返回给被叫的回调：收到一条呼叫邀请。SDK 会同时返回一个 RemoteInvitation 对象供被叫管理。
        override fun onRemoteInvitationReceived(var1: RemoteInvitation?) {
            remoteInvitation = var1
            Handler(Looper.getMainLooper()).post {
                if (CallApp.callApp.mActivityCount==0){//in back
                    try {
                        val jsonObject = JSONObject(remoteInvitation!!.content)
                        val isConference = jsonObject.getBoolean("Conference")
                        val caller = remoteInvitation?.callerId
                        val resultIntent = Intent().apply {
                            if (!isConference) {
                                CallApp.callApp.curActivity?.let { setClass(it, VideoActivity::class.java) }
                                putExtra("RecCall", true)
                            } else {
                                CallApp.callApp.curActivity?.let { setClass(it, MultiCallActivity::class.java) }
                                putExtra("RecCall", true)
                            }
//                            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                        }
                        val vibrate = longArrayOf(0, 500, 1000, 1500)
                        val resultPendingIntent = PendingIntent.getActivity(CallApp.callApp.curActivity, 3, resultIntent, PendingIntent.FLAG_UPDATE_CURRENT)
                        notificationUtils = NotificationUtils(CallApp.callApp.curActivity)
                        notificationUtils?.let {
                            it.setOngoing(false) //设置内容点击处理intent
                            it.setContentIntent(resultPendingIntent) //设置状态栏的标题
                            it.setSound(Uri.parse("android.resource://org.ar.call/"+R.raw.video_request)) //设置优先级
                            it.setVibrate(vibrate)
                            it.setPriority(NotificationManager.IMPORTANCE_HIGH) //自定义震动效果
                            it.sendNotification(3, "收到${caller}的呼叫", "", R.drawable.img_accept)
                        } //让通知左右滑的时候是否可以取消通知
                                 } catch (e: JSONException) {
                        e.printStackTrace()
                    }


                }
            }
            callEventList.forEach {
                it.onRemoteInvitationReceived(var1)
            }
        }
        //返回给被叫的回调：接受呼叫邀请成功。
        override fun onRemoteInvitationAccepted(var1: RemoteInvitation?) {
            callEventList.forEach {
                it.onRemoteInvitationAccepted(var1)
            }
            remoteInvitation = null
            notificationUtils?.clearNotification()
        }

        //返回给被叫的回调：拒绝呼叫邀请成功
        override fun onRemoteInvitationRefused(var1: RemoteInvitation?) {
            callEventList.forEach {
                it.onRemoteInvitationRefused(var1)
            }
            remoteInvitation = null
            notificationUtils?.clearNotification()
        }

        override fun onRemoteInvitationCanceled(var1: RemoteInvitation?) {
            callEventList.forEach {
                it.onRemoteInvitationCanceled(var1)
            }
            remoteInvitation = null
            notificationUtils?.clearNotification()
        }

        override fun onRemoteInvitationFailure(var1: RemoteInvitation?, var2: Int) {
            callEventList.forEach {
                it.onRemoteInvitationFailure(var1, var2)
            }
            remoteInvitation = null
            notificationUtils?.clearNotification()
        }

    }

    private inner class ChannelEvent : RtmChannelListener{
        override fun onMemberCountUpdated(var1: Int) {
            channelEventList.forEach {
                it.onMemberCountUpdated(var1)
            }
        }

        override fun onAttributesUpdated(var1: MutableList<RtmChannelAttribute>?) {
            channelEventList.forEach {
                it.onAttributesUpdated(var1)
            }
        }

        override fun onMessageReceived(var1: RtmMessage?, var2: RtmChannelMember?) {
            channelEventList.forEach {
                it.onMessageReceived(var1, var2)
            }
        }

        override fun onMemberJoined(var1: RtmChannelMember?) {
            channelEventList.forEach {
                it.onMemberJoined(var1)
            }
        }

        override fun onMemberLeft(var1: RtmChannelMember?) {
            channelEventList.forEach {
                it.onMemberLeft(var1)
            }
        }
    }

    private inner class RtmEvent: RtmClientListener {
        override fun onConnectionStateChanged(state: Int, reason: Int) {
            rtmEventList.forEach {
                it.onConnectionStateChanged(state, reason)
            }
        }

        override fun onMessageReceived(var1: RtmMessage?, var2: String?) {
            rtmEventList.forEach {
                it.onMessageReceived(var1, var2)
            }
        }

        override fun onTokenExpired() {
        }

        override fun onPeersOnlineStatusChanged(var1: MutableMap<String, Int>?) {
            rtmEventList.forEach {
                it.onPeersOnlineStatusChanged(var1)
            }
        }

    }
    
    fun registerCallListener(callEventListener: RtmCallEventListener){
        if (callEventListener !in callEventList){
            callEventList.add(callEventListener)
        }
    }

    fun unRegisterCallListener(callEventListener: RtmCallEventListener){
        callEventList.remove(callEventListener)
    }

    fun registerRtmEvent(rtmClientListener: RtmClientListener){
        if (rtmClientListener !in rtmEventList){
            rtmEventList.add(rtmClientListener)
        }
    }

    fun unRegisterRtmEvent(rtmClientListener: RtmClientListener){
        rtmEventList.remove(rtmClientListener)
    }

    fun registerChannelEvent(channelListener: RtmChannelListener){
        if (channelListener !in channelEventList){
            channelEventList.add(channelListener)
        }
    }

    fun unRegisterChannelEvent(channelListener: RtmChannelListener){
        channelEventList.remove(channelListener)
    }

    fun release(){
        rtmClient?.release()
    }


    companion object {
        val instance: RtmManager by lazy() {
            RtmManager()
        }
    }



}