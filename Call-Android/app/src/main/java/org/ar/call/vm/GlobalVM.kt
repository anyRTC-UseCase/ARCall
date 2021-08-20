package org.ar.call.vm

import androidx.collection.ArraySet
import androidx.lifecycle.*
import org.ar.call.BuildConfig
import kotlinx.coroutines.launch
import org.ar.call.utils.launch
import org.ar.rtm.*
import org.json.JSONObject
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine

class GlobalVM : ViewModel(), LifecycleObserver {

    private var isBackground = false //是否处于后台
    private var needReCallBack = false //从后台回到前台 期间如果有人呼叫 需要将呼叫重新回调出去

    init {
        ProcessLifecycleOwner.get().lifecycle.addObserver(this)
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_START)
    fun onForeground() {
        isBackground = false
        if (needReCallBack){
            viewModelScope.launch {
                if (currentRemoteInvitation!=null){
                    eventsArray.forEach {
                        it.onRemoteInvitationReceived(currentRemoteInvitation)
                    }
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
    private val eventsArray = mutableListOf<RtmEvents>()


    private val rtmClient by lazy {
        RtmClient.createInstance(
            org.ar.call.CallApplication.callApp.applicationContext,
            BuildConfig.APPID,
            RtmEvent()
        )
    }
    val rtmCallManager by lazy { rtmClient.rtmCallManager }
    var localInvitation:LocalInvitation? = null
    var remoteInvitationArray = mutableListOf<RemoteInvitation>()//如果有多个人呼叫 必须将所有对象存起来 而不是直接覆盖之前的 不然会出各种奇怪的问题
    var currentRemoteInvitation:RemoteInvitation? = null //当前的通话对象

    var isLoginSuccess = false
    var channelId = ""
    var rtmChannel: RtmChannel? = null

    fun register(rtmEvents: RtmEvents) {
        if (rtmEvents !in eventsArray) {
            eventsArray.add(rtmEvents)
        }
    }

    fun unRegister(rtmEvents: RtmEvents) {
        eventsArray.remove(rtmEvents)
    }

    suspend fun login() = suspendCoroutine<Boolean> {
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

    fun queryOnline(peerId: String,block: (Boolean) -> Unit) {
        queryOnline(HashSet<String>().apply {
            add(peerId)
        }) {
            it?.let {map->
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

    fun queryOnline(list:MutableList<String>,block: (ArrayList<String>) -> Unit){
        val onlineArray = arrayListOf<String>()
        rtmClient.queryPeersOnlineStatus(list.toSet(),object :ResultCallback<MutableMap<String,Boolean>>{

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

    fun createLocalInvitation(peerId: String,type:Int,block:()->Unit){
        localInvitation = rtmCallManager.createLocalInvitation(peerId)
        localInvitation?.let {
            it.content = JSONObject().apply {
                put("Mode",type)//音频 or 视频
                put("Conference",false)//是否多人
                put("ChanId",((Math.random()*9+1)*100000000L).toLong().toString())//频道号
                put("UserData","")
                put("SipData","")
                put("VidCodec","[\"H264\",\"MJpeg\"]")//适配linux手表端
                put("AudCodec","[\"Opus\",\"G711\"]")//适配linux手表端
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


    fun subscribe(peerId:String){
        val list: MutableSet<String> = ArraySet()
        list.add(peerId)
        rtmClient.subscribePeersOnlineStatus(list,null)
    }

    fun call(){
        localInvitation?.let {
            rtmCallManager.sendLocalInvitation(it,null)
        }
    }
    fun call(localInvitation: LocalInvitation){
        rtmCallManager.sendLocalInvitation(localInvitation,null)
    }

    fun unSubscribe(peerId:String){
        val list: MutableSet<String> = ArraySet()
        list.add(peerId)
        rtmClient.unsubscribePeersOnlineStatus(list,null)
    }

    fun sendMessage(userId:String,msg:String,block: (Boolean) -> Unit){
        rtmClient.sendMessageToPeer(userId,rtmClient.createMessage(msg), SendMessageOptions(),object :ResultCallback<Void>{
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

    fun cancle(){
        localInvitation?.let {
            rtmCallManager.cancelLocalInvitation(it,null)
        }
    }
    fun cancle(localInvitation: LocalInvitation){
            rtmCallManager.cancelLocalInvitation(localInvitation,null)
    }
    fun refuse(remoteInvitation: RemoteInvitation,response: String=""){
        remoteInvitationArray.find { it.callerId == remoteInvitation.callerId }?.let {
            it.response = response
            rtmCallManager.refuseRemoteInvitation(it,null)
            remoteInvitationArray.remove(it)
        }
    }

    fun accept(remoteInvitation:RemoteInvitation,response:String=""){
        remoteInvitationArray.find { it.callerId == remoteInvitation.callerId }?.let {
            it.response = response
            rtmCallManager.acceptRemoteInvitation(it,null)
            remoteInvitationArray.remove(it)
        }
    }

    fun release() {
        eventsArray.clear()
        rtmClient.logout(null)
        rtmClient.release()
    }
    
    fun joinRTMChannel(chanID:String){
        channelId = chanID
        rtmChannel = rtmClient.createChannel(chanID,ChannelEvent())
        rtmChannel?.join(null)
    }

    fun leaveRtmChannel(){
        rtmChannel?.let {
            it.leave(null)
            it.release()
            channelId = ""
        }
    }

    private inner class RtmEvent : RtmClientListener {
        override fun onConnectionStateChanged(state: Int, reason: Int) {
            eventsArray.forEach {
                it.onConnectionStateChanged(state, reason)
            }
        }

        override fun onMessageReceived(var1: RtmMessage?, var2: String?) {
            eventsArray.forEach {
                it.onMessageReceived(var1)
            }
        }

        override fun onTokenExpired() {
        }

        override fun onPeersOnlineStatusChanged(var1: MutableMap<String, Int>?) {
            eventsArray.forEach {
                it.onPeersOnlineStatusChanged(var1)
            }
        }

    }

    private inner class CallEvent : RtmCallEventListener{
        //返回给主叫的回调：被叫已收到呼叫邀请。
        override fun onLocalInvitationReceivedByPeer(var1: LocalInvitation?) {
            eventsArray.forEach {
                it.onLocalInvitationReceivedByPeer(var1)
            }

        }

        //返回给主叫的回调：被叫已接受呼叫邀请
        override fun onLocalInvitationAccepted(var1: LocalInvitation?, var2: String?) {
            eventsArray.forEach {
                it.onLocalInvitationAccepted(var1, var2)
            }
        }

        //返回给主叫的回调：被叫已拒绝呼叫邀请。
        override fun onLocalInvitationRefused(var1: LocalInvitation?, var2: String?) {
            eventsArray.forEach {
                it.onLocalInvitationRefused(var1, var2)
            }
        }

        //返回给主叫的回调：呼叫邀请已被成功取消。
        override fun onLocalInvitationCanceled(var1: LocalInvitation?) {
            eventsArray.forEach {
                it.onLocalInvitationCanceled(var1)
            }
        }
        //返回给主叫的回调：发出的呼叫邀请过程失败。
        override fun onLocalInvitationFailure(var1: LocalInvitation?, var2: Int) {
            eventsArray.forEach {
                it.onLocalInvitationFailure(var1, var2)
            }
        }
        //返回给被叫的回调：收到一条呼叫邀请。SDK 会同时返回一个 RemoteInvitation 对象供被叫管理。
        override fun onRemoteInvitationReceived(var1: RemoteInvitation?) {
            if (currentRemoteInvitation == null){//如果当前没有通话ID 就给它赋值
                currentRemoteInvitation = var1
            }
            remoteInvitationArray.add(var1!!)
            viewModelScope.launch {
                eventsArray.forEach {
                    it.onRemoteInvitationReceived(var1)
                }
            }
            if (isBackground){
                needReCallBack = true
            }

        }
        //返回给被叫的回调：接受呼叫邀请成功。
        override fun onRemoteInvitationAccepted(var1: RemoteInvitation?) {
            eventsArray.forEach {
                it.onRemoteInvitationAccepted(var1)
            }
            if (currentRemoteInvitation?.callerId.equals(var1!!.callerId)){
                currentRemoteInvitation = null
            }
            remoteInvitationArray.find { it.callerId==var1?.callerId }?.let {
                remoteInvitationArray.remove(it)
            }
//            notificationUtils?.clearNotification()
        }

        //返回给被叫的回调：拒绝呼叫邀请成功
        override fun onRemoteInvitationRefused(var1: RemoteInvitation?) {
            eventsArray.forEach {
                it.onRemoteInvitationRefused(var1)
            }
            if (currentRemoteInvitation?.callerId.equals(var1!!.callerId)){
                currentRemoteInvitation = null
            }
            remoteInvitationArray.find { it.callerId==var1?.callerId }?.let {
                remoteInvitationArray.remove(it)
            }
//            notificationUtils?.clearNotification()
        }

        override fun onRemoteInvitationCanceled(var1: RemoteInvitation?) {
            eventsArray.forEach {
                it.onRemoteInvitationCanceled(var1)
            }
            if (currentRemoteInvitation?.callerId.equals(var1!!.callerId)){
                currentRemoteInvitation = null
            }
            remoteInvitationArray.find { it.callerId==var1?.callerId }?.let {
                remoteInvitationArray.remove(it)
            }
//            notificationUtils?.clearNotification()
        }

        override fun onRemoteInvitationFailure(var1: RemoteInvitation?, var2: Int) {
            eventsArray.forEach {
                it.onRemoteInvitationFailure(var1, var2)
            }
            if (currentRemoteInvitation?.callerId.equals(var1!!.callerId)){
                currentRemoteInvitation = null
            }
            remoteInvitationArray.find { it.callerId==var1?.callerId }?.let {
                remoteInvitationArray.remove(it)
            }
//            notificationUtils?.clearNotification()
        }

    }

    private inner class ChannelEvent : RtmChannelListener{
        override fun onMemberCountUpdated(var1: Int) {
        }

        override fun onAttributesUpdated(var1: MutableList<RtmChannelAttribute>?) {
        }

        override fun onMessageReceived(var1: RtmMessage?, var2: RtmChannelMember?) {
            eventsArray.forEach {
                it.onMessageReceived(var1)
            }
        }

        override fun onMemberJoined(var1: RtmChannelMember?) {
            viewModelScope.launch {
                eventsArray.forEach {
                    it.onMemberJoined(var1)
                }
            }

        }

        override fun onMemberLeft(var1: RtmChannelMember?) {
            viewModelScope.launch {
                eventsArray.forEach {
                    it.onMemberLeft(var1)
                }
            }
        }
    }

}