package org.ar.call.utils

import android.content.Context
import org.ar.rtm.*
import org.json.JSONException
import org.json.JSONObject

object RTManager{

    var rtmClient: RtmClient? = null
    var rtmCallManager:RtmCallManager? = null
    var rtmChannel:RtmChannel? = null
    private val rtmEventList = mutableListOf<RtmClientListener>()
    private val callEventList = mutableListOf<RtmCallEventListener>()
    private val channelEventList = mutableListOf<RtmChannelListener>()
    var remoteInvitation:RemoteInvitation? =null
    var localInvitation:LocalInvitation? = null

    fun init(context: Context, appId: String){
        rtmClient = RtmClient.createInstance(context, appId, RtmEvent)
        rtmCallManager = rtmClient?.rtmCallManager
        rtmCallManager?.setEventListener(CallEvent)
    }

    fun createChannel(channelId: String): RtmChannel? {
        return if (rtmChannel == null){
            rtmChannel= rtmClient?.createChannel(channelId, ChannelEvent)
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


    private object RtmEvent: RtmClientListener {
        override fun onConnectionStateChanged(state: Int, reason: Int) {
            if (state == 4){
                remoteInvitation = null
            }
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

    private object CallEvent : RtmCallEventListener{

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
        }

        //返回给被叫的回调：拒绝呼叫邀请成功
        override fun onRemoteInvitationRefused(var1: RemoteInvitation?) {
            callEventList.forEach {
                it.onRemoteInvitationRefused(var1)
            }
            remoteInvitation = null
        }

        override fun onRemoteInvitationCanceled(var1: RemoteInvitation?) {
            callEventList.forEach {
                it.onRemoteInvitationCanceled(var1)
            }
            remoteInvitation = null
        }

        override fun onRemoteInvitationFailure(var1: RemoteInvitation?, var2: Int) {
            callEventList.forEach {
                it.onRemoteInvitationFailure(var1, var2)
            }
            remoteInvitation = null
        }

    }

    private object ChannelEvent : RtmChannelListener{
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

}