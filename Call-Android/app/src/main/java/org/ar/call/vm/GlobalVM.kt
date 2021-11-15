package org.ar.call.vm

import android.app.Notification
import android.app.PendingIntent
import android.content.Intent
import androidx.collection.ArraySet
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import androidx.lifecycle.*
import kotlinx.coroutines.launch
import org.ar.call.BuildConfig
import org.ar.call.BuildConfig.APPID
import org.ar.call.CallApplication
import org.ar.call.ui.MainActivity
import org.ar.call.utils.launch
import org.ar.rtm.*
import org.json.JSONObject
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine
import android.app.NotificationManager


import android.content.ContentResolver
import android.net.Uri
import org.ar.call.R
import android.media.AudioAttributes
import android.media.AudioManager
import android.media.RingtoneManager
import android.util.Log
import org.ar.call.ui.GroupCallActivity
import org.ar.call.ui.P2PVideoActivity
import androidx.core.content.FileProvider
import io.karn.notify.Notify
import io.karn.notify.NotifyCreator
import io.karn.notify.entities.NotifyConfig
import org.ar.call.utils.NetworkObserver
import org.ar.call.utils.getAppOpenIntentByPackageName
import org.ar.call.utils.getPackageContext
import java.io.File


class GlobalVM : ViewModel(), LifecycleObserver,NetworkObserver.Listener {

    private var isBackground = false //是否处于后台
    private var needReCallBack = false //从后台回到前台 期间如果有人呼叫 需要将呼叫重新回调出去
    private var isShowNotify = false //是否显示了通知
    var isWaiting = false //是否正处于呼叫/被叫接听等待中...
    var isCalling = false// 是否正在通话中...
    var callType = -1//呼叫类型
    var callingUid = ""//p2p正在通话中的人的UID
    var netOnline = true //网络是否连接着
    init {
        ProcessLifecycleOwner.get().lifecycle.addObserver(this)
        NetworkObserver.invoke(CallApplication.callApp.applicationContext,true,this)
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_START)
    fun onForeground() {
        isBackground = false
        if (needReCallBack) {
            viewModelScope.launch {
                if (currentRemoteInvitation != null) {
                    events?.onRemoteInvitationReceived(currentRemoteInvitation)
                    cancleNotify()
                }
            }
            needReCallBack = false
        }
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_STOP)
    fun onBackground() {
        isBackground = true
    }


    val userId = ((Math.random() * 9 + 1) * 1000L).toInt().toString()
    private var events: RtmEvents? = null


    private val rtmClient by lazy {
        RtmClient.createInstance(
            CallApplication.callApp.applicationContext,
            BuildConfig.APPID,
            RtmEvent()
        )
    }
    val rtmCallManager by lazy { rtmClient.rtmCallManager }
    var localInvitation: LocalInvitation? = null
    var remoteInvitationArray =
        mutableListOf<RemoteInvitation>()//如果有多个人呼叫 必须将所有对象存起来 而不是直接覆盖之前的 不然会出各种奇怪的问题
    var currentRemoteInvitation: RemoteInvitation? = null //当前的通话对象

    var isLoginSuccess = false
    var channelId = ""
    var rtmChannel: RtmChannel? = null

    fun register(rtmEvents: RtmEvents) {
        events = rtmEvents
    }

    fun unRegister() {
        events = null
    }

    //当前通话是否是被叫
    private fun currentIsCalled(): Boolean {
        return currentRemoteInvitation != null
    }
    //发送查询对方呼叫状态信令
    fun sendCallStateMsg() {
        sendMessage(
            callingUid, JSONObject().apply {
                put("Cmd", "CallState")
            }.toString(), {

            })
    }

    //不在呼叫页面了
    fun finishCall(){
        if (currentIsCalled()){
            currentRemoteInvitation?.let { rtmCallManager.refuseRemoteInvitation(it,null) }
        }else{
            localInvitation?.let { rtmCallManager.cancelLocalInvitation(it,null)}
        }
    }

    //发送是否还在呼叫回执信令
    fun sendCallStateResponseMsg(uid:String) {
        sendMessage(
           uid, JSONObject().apply {
                put("Cmd","CallStateResult")
                if (isWaiting){
                    put("state", 1)
                }else if (isCalling){
                    //如果发消息的id和当前通话id不一致则直接发CallState =0
                        if (uid!=callingUid){
                            put("state", 0)
                        }else{
                            put("state", 2)
                            put("Mode",callType)
                        }
                }else{
                    put("state", 0)
                }
            }.toString(), {

            })
    }

    //重新分发对方已同意呼叫回调

    fun reSendAcceptCallback(callType:Int){
        events?.onLocalInvitationAccepted(localInvitation,JSONObject().apply {
            put("Mode",callType)
        }.toString())
    }

    suspend fun login() = suspendCoroutine<Boolean> {
        rtmClient.logout(null)
        rtmClient.login("", userId, object : ResultCallback<Void> {
            override fun onSuccess(var1: Void?) {
                isLoginSuccess = true
                it.resume(true)
                rtmCallManager.setEventListener(CallEvent())
            }

            override fun onFailure(var1: ErrorInfo?) {
                isLoginSuccess = false
                it.resume(false)
            }
        })
    }

    fun queryOnline(peerId: String, block: (Boolean) -> Unit) {
        queryOnline(HashSet<String>().apply {
            add(peerId)
        }) {
            it?.let { map ->
                launch({
                    if (map.containsKey(peerId) && map.get(peerId)!!) {
                        block.invoke(true)
                    } else {
                        block.invoke(false)
                    }
                })

            }
        }

    }

    fun queryOnline(list: MutableList<String>, block: (ArrayList<String>) -> Unit) {
        val onlineArray = arrayListOf<String>()
        rtmClient.queryPeersOnlineStatus(list.toSet(),
            object : ResultCallback<MutableMap<String, Boolean>> {

                override fun onSuccess(var1: MutableMap<String, Boolean>?) {
                    viewModelScope.launch {
                        var1?.forEach {
                            if (it.value) {
                                onlineArray.add(it.key)
                            }
                        }
                        block.invoke(onlineArray)
                    }
                }


                override fun onFailure(var1: ErrorInfo?) {
                    viewModelScope.launch {
                        block.invoke(onlineArray)
                    }
                }

            })
    }

    fun createLocalInvitation(peerId: String, type: Int, block: () -> Unit) {
        localInvitation = rtmCallManager.createLocalInvitation(peerId)
        localInvitation?.let {
            it.content = JSONObject().apply {
                put("Mode", type)//音频 or 视频
                put("Conference", false)//是否多人
                put("ChanId", ((Math.random() * 9 + 1) * 100000000L).toLong().toString())//频道号
                put("UserData", "")
                put("SipData", "")
                put("VidCodec", "[\"H264\",\"MJpeg\"]")//适配linux手表端
                put("AudCodec", "[\"Opus\",\"G711\"]")//适配linux手表端
            }.toString()
        }
        block.invoke()
    }

    private fun queryOnline(
        queryList: HashSet<String>,
        resultList: (MutableMap<String, Boolean>?) -> Unit
    ) {
        rtmClient.queryPeersOnlineStatus(
            queryList,
            object : ResultCallback<MutableMap<String, Boolean>> {
                override fun onSuccess(var1: MutableMap<String, Boolean>?) {
                    resultList.invoke(var1)
                }

                override fun onFailure(var1: ErrorInfo?) {
                }
            })

    }



    fun call() {
        localInvitation?.let {
            rtmCallManager.sendLocalInvitation(it, null)
        }
    }

    fun call(localInvitation: LocalInvitation) {
        rtmCallManager.sendLocalInvitation(localInvitation, null)
    }


    fun sendMessage(userId: String, msg: String, block: (Boolean) -> Unit) {
        rtmClient.sendMessageToPeer(
            userId,
            rtmClient.createMessage(msg),
            SendMessageOptions(),
            object : ResultCallback<Void> {
                override fun onSuccess(var1: Void?) {
                    viewModelScope.launch {
                        block.invoke(true)
                    }

                }

                override fun onFailure(var1: ErrorInfo?) {
                    viewModelScope.launch {
                        block.invoke(false)
                    }
                }
            })
    }

    fun cancle() {
        localInvitation?.let {
            rtmCallManager.cancelLocalInvitation(it, null)
        }
    }

    fun cancle(localInvitation: LocalInvitation) {
        rtmCallManager.cancelLocalInvitation(localInvitation, null)
    }

    fun refuse(remoteInvitation: RemoteInvitation, response: String = "") {
        remoteInvitationArray.find { it.callerId == remoteInvitation.callerId }?.let {
            it.response = response
            rtmCallManager.refuseRemoteInvitation(it, null)
            remoteInvitationArray.remove(it)
        }
    }

    fun accept(remoteInvitation: RemoteInvitation, response: String = "") {
        remoteInvitationArray.find { it.callerId == remoteInvitation.callerId }?.let {
            it.response = response
            rtmCallManager.acceptRemoteInvitation(it, null)
            remoteInvitationArray.remove(it)
        }
    }

    fun release() {
        events = null
        rtmClient.logout(null)
        rtmClient.release()
    }

    fun joinRTMChannel(chanID: String) {
        channelId = chanID
        rtmChannel = rtmClient.createChannel(chanID, ChannelEvent())
        rtmChannel?.join(null)
    }

    fun leaveRtmChannel() {
        rtmChannel?.let {
            it.leave(null)
            it.release()
            channelId = ""
        }
    }

    private inner class RtmEvent : RtmClientListener {
        override fun onConnectionStateChanged(state: Int, reason: Int) {
            events?.onConnectionStateChanged(state, reason)
        }

        override fun onMessageReceived(var1: RtmMessage?, var2: String?) {
            events?.onMessageReceived(var1,var2)
        }

        override fun onTokenExpired() {
        }

        override fun onPeersOnlineStatusChanged(var1: MutableMap<String, Int>?) {
            events?.onPeersOnlineStatusChanged(var1)
        }

    }

    private inner class CallEvent : RtmCallEventListener {

        //返回给主叫的回调：被叫已收到呼叫邀请。
        override fun onLocalInvitationReceivedByPeer(var1: LocalInvitation?) {
            events?.onLocalInvitationReceivedByPeer(var1)

        }

        //返回给主叫的回调：被叫已接受呼叫邀请
        override fun onLocalInvitationAccepted(var1: LocalInvitation?, var2: String?) {
            events?.onLocalInvitationAccepted(var1, var2)
        }

        //返回给主叫的回调：被叫已拒绝呼叫邀请。
        override fun onLocalInvitationRefused(var1: LocalInvitation?, var2: String?) {
            events?.onLocalInvitationRefused(var1, var2)
        }

        //返回给主叫的回调：呼叫邀请已被成功取消。
        override fun onLocalInvitationCanceled(var1: LocalInvitation?) {
            events?.onLocalInvitationCanceled(var1)
        }

        //返回给主叫的回调：发出的呼叫邀请失败。可能对方一直没有接听
        override fun onLocalInvitationFailure(var1: LocalInvitation?, var2: Int) {
            events?.onLocalInvitationFailure(var1, var2)
        }

        //返回给被叫的回调：收到一条呼叫邀请。SDK 会同时返回一个 RemoteInvitation 对象供被叫管理。
        override fun onRemoteInvitationReceived(var1: RemoteInvitation?) {
            if (currentRemoteInvitation == null) {//如果当前没有通话ID 就给它赋值
                currentRemoteInvitation = var1
            }
            remoteInvitationArray.add(var1!!)
            viewModelScope.launch {
                if (isBackground) {//如果是在后台 则不分发这个收到呼叫 因为安卓10或国内一些rom限制后台启动activity
                    //todo 可以加本地通知
                    needReCallBack = true
                    val pakContext = getPackageContext(
                        CallApplication.callApp.applicationContext,
                        BuildConfig.APPLICATION_ID
                    )
                    pakContext?.let {
                        val intent = getAppOpenIntentByPackageName(it, BuildConfig.APPLICATION_ID)
                        val builder = Notify.with(CallApplication.callApp.applicationContext)
                            .alerting("sound", {
                                sound =
                                    Uri.parse("android.resource://" + BuildConfig.APPLICATION_ID + "/" + R.raw.video_request)
                            })
                            .meta {
                                clickIntent = PendingIntent.getActivity(
                                    CallApplication.callApp.applicationContext, 0,
                                    intent, 0
                                )
                                cancelOnClick = true
                            }
                            .content {
                                title = "收到呼叫"
                                text = "收到来自${var1.callerId}的呼叫邀请"
                            }.asBuilder().setOnlyAlertOnce(false)
                        with(NotificationManagerCompat.from(CallApplication.callApp.applicationContext)) {
                            notify(1000, builder.build().apply {
                                flags = Notification.FLAG_INSISTENT
                            })
                            isShowNotify = true
                        }

                    }
                } else {
                    events?.onRemoteInvitationReceived(var1)
                }
            }
        }

        //返回给被叫的回调：接受呼叫邀请成功。
        override fun onRemoteInvitationAccepted(var1: RemoteInvitation?) {
            cancleNotify()
            events?.onRemoteInvitationAccepted(var1)
            if (currentRemoteInvitation?.callerId.equals(var1!!.callerId)) {
                currentRemoteInvitation = null
            }
            remoteInvitationArray.find { it.callerId == var1?.callerId }?.let {
                remoteInvitationArray.remove(it)
            }

        }

        //返回给被叫的回调：拒绝呼叫邀请成功
        override fun onRemoteInvitationRefused(var1: RemoteInvitation?) {
            cancleNotify()
            events?.onRemoteInvitationRefused(var1)
            if (currentRemoteInvitation?.callerId.equals(var1!!.callerId)) {
                currentRemoteInvitation = null
            }
            remoteInvitationArray.find { it.callerId == var1?.callerId }?.let {
                remoteInvitationArray.remove(it)
            }

        }

        //返回给被叫的回调：拒绝呼叫邀请成功
        override fun onRemoteInvitationCanceled(var1: RemoteInvitation?) {
            cancleNotify()
            events?.onRemoteInvitationCanceled(var1)
            if (currentRemoteInvitation?.callerId.equals(var1!!.callerId)) {
                currentRemoteInvitation = null
            }
            remoteInvitationArray.find { it.callerId == var1?.callerId }?.let {
                remoteInvitationArray.remove(it)
            }

        }

        override fun onRemoteInvitationFailure(var1: RemoteInvitation?, var2: Int) {
            cancleNotify()
            events?.onRemoteInvitationFailure(var1, var2)
            if (currentRemoteInvitation?.callerId.equals(var1!!.callerId)) {
                currentRemoteInvitation = null
            }
            remoteInvitationArray.find { it.callerId == var1?.callerId }?.let {
                remoteInvitationArray.remove(it)
            }

        }

    }

    private inner class ChannelEvent : RtmChannelListener {
        override fun onMemberCountUpdated(var1: Int) {
        }

        override fun onAttributesUpdated(var1: MutableList<RtmChannelAttribute>?) {
        }

        override fun onMessageReceived(var1: RtmMessage?, var2: RtmChannelMember?) {
            events?.onMessageReceived(var1,var2?.userId)
        }

        override fun onMemberJoined(var1: RtmChannelMember?) {
            viewModelScope.launch {
                events?.onMemberJoined(var1)
            }

        }

        override fun onMemberLeft(var1: RtmChannelMember?) {
            viewModelScope.launch {
                events?.onMemberLeft(var1)
            }
        }
    }

    private fun cancleNotify() {
        if (isShowNotify) {
            Notify.cancelNotification(1000)
            isShowNotify = false
        }
    }

    override fun onConnectivityChange(isOnline: Boolean) {
        netOnline = isOnline
        Log.d("onConnectivityChange",isOnline.toString())
    }

    override fun onCleared() {
        super.onCleared()
    }
}