package org.ar.call.vm

import org.ar.rtm.LocalInvitation
import org.ar.rtm.RemoteInvitation
import org.ar.rtm.RtmChannelMember
import org.ar.rtm.RtmMessage

 interface RtmEvents {
    fun onConnectionStateChanged(state:Int,reason:Int){}
    fun onMessageReceived(message:RtmMessage?,uid:String?){}
    fun onPeersOnlineStatusChanged(map:MutableMap<String,Int>?){}
    fun onMemberJoined(member:RtmChannelMember?){}
    fun onMemberLeft(member:RtmChannelMember?){}
    fun onLocalInvitationReceivedByPeer(var1: LocalInvitation?){}
    fun onLocalInvitationAccepted(var1: LocalInvitation?, var2: String?){}
    fun onLocalInvitationRefused(var1: LocalInvitation?, var2: String?){}
    fun onLocalInvitationCanceled(var1: LocalInvitation?){}
    fun onLocalInvitationFailure(var1: LocalInvitation?, var2: Int){}
    fun onRemoteInvitationReceived(var1: RemoteInvitation?){}
    fun onRemoteInvitationAccepted(var1: RemoteInvitation?){}
    fun onRemoteInvitationRefused(var1: RemoteInvitation?){}
    fun onRemoteInvitationCanceled(var1: RemoteInvitation?){}
    fun onRemoteInvitationFailure(var1: RemoteInvitation?, var2: Int){}
    
}
