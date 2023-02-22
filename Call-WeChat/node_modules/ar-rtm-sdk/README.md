anyrtc RTM Web SDK 是通过 HTML 网页加载的 JavaScript 库。RTM Web SDK 库在网页浏览器中通过 API 调用声网的实时消息服务。

## 导入

[ArRTM](https://docs.anyrtc.io/rtm-web/docs/ar_rtm/) 是 anyrtc RTM SDK 的导出模块。

### script 导入

使用 `<script>` 标签引入 SDK 时，产生名为 `ArRTM` 的全局变量，该变量含有该模块的所有成员。

```
<script src="https://ardw.anyrtc.io/sdk/web/ArRTM@latest.js"></script>
```

### npm 导入

```
import ArRTM from "ar-rtm-sdk";
```

## 功能介绍

请分别调用 [RtmClient.on](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#on) 和 [RtmChannel.on](https://docs.anyrtc.io/rtm-web/docs/rtm_channel/#on) 方法添加 [RtmClient](https://docs.anyrtc.io/rtm-web/docs/rtm_client/) 和 [RtmChannel](https://docs.anyrtc.io/rtm-web/docs/rtm_channel/) 对象的监听器。

anyrtc RTM Web SDK 提供以下功能：

- [登录登出相关](#登录登出相关)
- [点对点消息](#点对点消息)
- [查询用户在线状态](#查询用户在线状态)
- [订阅或取消订阅单个或多个指定用户的在线状态](#订阅或取消订阅单个或多个指定用户的在线状态)
- [用户属性增删改查](#用户属性增删改查)
- [频道属性增删改查](#频道属性增删改查)
- [查询单个或多个频道的成员人数](#查询单个或多个频道的成员人数)
- [上传和下载文件或图片](#上传或下载文件或图片)
- [加入离开频道相关](#加入离开频道相关)
- [频道消息](#频道消息)
- [获取频道成员列表](#获取频道成员列表)
- [呼叫邀请管理](#呼叫邀请管理)
- [更新 Token](#更新-token)
- [日志设置与版本查询](#日志设置与版本查询)
- [定制方法](#日志设置与版本查询)


## 登录登出相关

![img](https://docs.anyrtc.io/rtm-web/img/login_logout.jpg)

| 方法                                                         | 描述                                         |
| ------------------------------------------------------------ | -------------------------------------------- |
| [createInstance](https://docs.anyrtc.io/rtm-web/docs/ar_rtm/#createinstance) | 创建一个 `RtmClient` 实例。                  |
| [login](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#login) | 登录 anyrtc RTM 系统。                        |
| [logout](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#logout) | 退出登录，退出后自动断开连接和销毁回调监听。 |

| 事件                                                         | 描述                                             |
| ------------------------------------------------------------ | ------------------------------------------------ |
| [ConnectionStateChanged](https://docs.anyrtc.io/rtm-web/docs/events/rtm_client_events/#connectionstatechanged) | 通知 SDK 与 anyrtc RTM 系统的连接状态发生了改变。 |


## 点对点消息

![img](https://docs.anyrtc.io/rtm-web/img/p2p_message.jpg)

| 方法                                                         | 描述                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------ |
| [sendMessageToPeer](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#sendmessagetopeer) | 向指定用户（接收者）发送点对点消息或点对点的离线消息。 |

| 事件                                                         | 描述                       |
| ------------------------------------------------------------ | -------------------------- |
| [MessageFromPeer](https://docs.anyrtc.io/rtm-web/docs/events/rtm_client_events/#messagefrompeer) | 收到来自对端的点对点消息。 |


## 查询用户在线状态

| 方法                                                         | 描述                     |
| ------------------------------------------------------------ | ------------------------ |
| [queryPeersOnlineStatus](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#querypeersonlinestatus) | 查询指定用户的在线状态。 |


## 订阅或取消订阅单个或多个指定用户的在线状态

| Method                                                       | Description                            |
| ------------------------------------------------------------ | -------------------------------------- |
| [subscribePeersOnlineStatus](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#subscribepeersonlinestatus) | 订阅指定单个或多个用户的在线状态。     |
| [unsubscribePeersOnlineStatus](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#unsubscribepeersonlinestatus) | 取消订阅指定单个或多个用户的在线状态。 |
| [queryPeersBySubscriptionOption](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#querypeersbysubscriptionoption) | 获取某特定内容被订阅的用户列表。       |

| Event                                                        | Description                  |
| ------------------------------------------------------------ | ---------------------------- |
| [PeersOnlineStatusChanged](https://docs.anyrtc.io/rtm-web/docs/events/rtm_client_events/#peersonlinestatuschanged) | 被订阅用户在线状态改变回调。 |

## 用户属性增删改查 

| 方法                                                         | 描述                           |
| ------------------------------------------------------------ | ------------------------------ |
| [setLocalUserAttributes](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#setlocaluserattributes) | 全量设置本地用户的属性。       |
| [addOrUpdateLocalUserAttributes](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#addorupdatelocaluserattributes) | 添加或更新本地用户的属性。     |
| [deleteLocalUserAttributesByKeys](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#deletelocaluserattributesbykeys) | 删除本地用户的指定属性。       |
| [clearLocalUserAttributes](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#clearlocaluserattributes) | 清空本地用户的属性。           |
| [getUserAttributes](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#getuserattributes) | 获取指定用户的全部属性。       |
| [getUserAttributesByKeys](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#getuserattributesbykeys) | 获取指定用户指定属性名的属性。 |


## 频道属性增删改查

| 方法                                                         | 描述                             |
| ------------------------------------------------------------ | -------------------------------- |
| [setChannelAttributes](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#setchannelattributes) | 全量设置某指定频道的属性。       |
| [addOrUpdateChannelAttributes](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#addorupdatechannelattributes) | 添加或更新某指定频道的属性。     |
| [deleteChannelAttributesByKeys](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#deletechannelattributesbykeys) | 删除某指定频道的指定属性。       |
| [clearChannelAttributes](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#clearchannelattributes) | 清空某指定频道的属性。           |
| [getChannelAttributes](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#getchannelattributes) | 查询某指定频道的全部属性。       |
| [getChannelAttributesByKeys](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#getchannelattributesbykeys) | 查询某指定频道指定属性名的属性。 |

| 频道属性更新事件                                             | 描述                                     |
| ------------------------------------------------------------ | ---------------------------------------- |
| [AttributesUpdated](https://docs.anyrtc.io/rtm-web/docs/events/rtm_channel_events/#attributesupdated) | 当频道属性更新时返回当前频道的所有属性。 |


## 查询单个或多个频道的成员人数

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [getChannelMemberCount](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#getchannelmembercount) | 查询单个或多个频道的成员人数。用户无需加入指定频道即可调用该方法。 |


## 上传或下载文件或图片

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [createMediaMessageByUploading](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#createmediamessagebyuploading) | 上传一个文件或图片到 anyrtc 服务器以获取 `RtmFileMessage` 实例或 `RtmImageMessage` 实例，可用于发送频道消息和点对点消息。 |
| [createMessage](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#createmessage) | 创建一个消息实例。对于文件消息和图片消息，如果对应的文件或图片已经上传且 media ID 仍然有效，你无需再次上传文件或图片，可以直接调用此方法获取消息实例用来发送点对点消息或频道消息。 |
| [downloadMedia](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#downloadmedia) | 通过 media ID 从 anyrtc 服务器下载文件或图片。                |



## 加入离开频道相关

![img](https://docs.anyrtc.io/rtm-web/img/join_channel.jpg)

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [createChannel](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#createchannel) | 创建一个 `RtmChannel` 实例。                                 |
| [join](https://docs.anyrtc.io/rtm-web/docs/rtm_channel/#join) | 加入频道。加入频道成功后可收到该频道消息和频道用户进出通知。 |
| [leave](https://docs.anyrtc.io/rtm-web/docs/rtm_channel/#leave) | 离开频道。不再接收频道消息和频道用户进出通知。               |

| 事件                                                         | 描述                                         |
| ------------------------------------------------------------ | -------------------------------------------- |
| [MemberJoined](https://docs.anyrtc.io/rtm-web/docs/events/rtm_channel_events/#memberjoined) | 远端用户加入频道回调。                       |
| [MemberLeft](https://docs.anyrtc.io/rtm-web/docs/events/rtm_channel_events/#memberleft) | 远端用户离开频道回调。                       |
| [MemberCountUpdated](https://docs.anyrtc.io/rtm-web/docs/events/rtm_channel_events/#membercountupdated) | 频道成员人数更新回调。返回最新频道成员人数。 |


## 频道消息

![img](https://docs.anyrtc.io/rtm-web/img/channel_message.jpg)

| 方法                                                         | 描述                               |
| ------------------------------------------------------------ | ---------------------------------- |
| [sendMessage](https://docs.anyrtc.io/rtm-web/docs/rtm_channel/#sendmessage) | 供频道成员向所在频道发送频道消息。 |

| 事件                                                         | 描述               |
| ------------------------------------------------------------ | ------------------ |
| [ChannelMessage](https://docs.anyrtc.io/rtm-web/docs/events/rtm_channel_events/#channelmessage) | 收到频道消息回调。 |


## 获取频道成员列表

| 方法                                                         | 描述               |
| ------------------------------------------------------------ | ------------------ |
| [getMembers](https://docs.anyrtc.io/rtm-web/docs/rtm_channel/#getmembers) | 获取频道成员列表。 |


## 呼叫邀请管理

- 主叫取消已发送的呼叫邀请的 API 时序图：

![img](https://docs.anyrtc.io/rtm-web/img/make_call.jpg)

- 被叫接收或拒绝收到的呼叫邀请的 API 时序图：

![img](https://docs.anyrtc.io/rtm-web/img/accept_refuse_call.jpg)

| 供主叫调用的方法                                             | 描述                                    |
| ------------------------------------------------------------ | --------------------------------------- |
| [createLocalInvitation](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#createlocalinvitation) | 供主叫创建一个 `LocalInvitation` 实例。 |
| [send](https://docs.anyrtc.io/rtm-web/docs/local_invitation/#send) | 供主叫发送呼叫邀请给对端。              |
| [cancel](https://docs.anyrtc.io/rtm-web/docs/local_invitation/#cancel) | 供主叫取消已发送的呼叫邀请。            |

| 供被叫调用的方法                                             | 描述                 |
| ------------------------------------------------------------ | -------------------- |
| [accept](https://docs.anyrtc.io/rtm-web/docs/remote_invitation/#accept) | 供被叫接受呼叫邀请。 |
| [refuse](https://docs.anyrtc.io/rtm-web/docs/remote_invitation/#refuse) | 供被叫拒绝呼叫邀请。 |

| 返回给主叫的事件                                             | 描述                                   |
| ------------------------------------------------------------ | -------------------------------------- |
| [LocalInvitationReceivedByPeer](https://docs.anyrtc.io/rtm-web/docs/events/local_invitation_events/#localinvitationreceivedbypeer) | 返回给主叫的回调：被叫已收到呼叫邀请。 |
| [LocalInvitationCanceled](https://docs.anyrtc.io/rtm-web/docs/events/local_invitation_events/#localinvitationcanceled) | 返回给主叫的回调：呼叫邀请已被取消。   |
| [LocalInvitationAccepted](https://docs.anyrtc.io/rtm-web/docs/events/local_invitation_events/#localinvitationaccepted) | 返回给主叫的回调：被叫已接受呼叫邀请。 |
| [LocalInvitationRefused](https://docs.anyrtc.io/rtm-web/docs/events/local_invitation_events/#localinvitationrefused) | 返回给主叫的回调：被叫已拒绝呼叫邀请。 |
| [LocalInvitationFailure](https://docs.anyrtc.io/rtm-web/docs/events/local_invitation_events/#localinvitationfailure) | 返回给主叫的回调：呼叫邀请过程失败。   |

| 返回给被叫的事件                                             | 描述                                   |
| ------------------------------------------------------------ | -------------------------------------- |
| [RemoteInvitationReceived](https://docs.anyrtc.io/rtm-web/docs/events/rtm_client_events/#remoteinvitationreceived) | 返回给被叫的回调：收到一条呼叫邀请。   |
| [RemoteInvitationCanceled](https://docs.anyrtc.io/rtm-web/docs/events/remote_invitation_events/#remoteinvitationcanceled) | 返回给被叫的回调：主叫已取消呼叫邀请。 |
| [RemoteInvitationAccepted](https://docs.anyrtc.io/rtm-web/docs/events/remote_invitation_events/#remoteinvitationaccepted) | 返回给被叫的回调：接受呼叫邀请成功。   |
| [RemoteInvitationRefused](https://docs.anyrtc.io/rtm-web/docs/events/remote_invitation_events/#remoteinvitationrefused) | 返回给被叫的回调：拒绝呼叫邀请成功。   |
| [RemoteInvitationFailure](https://docs.anyrtc.io/rtm-web/docs/events/remote_invitation_events/#remoteinvitationfailure) | 返回给被叫的回调：呼叫邀请过程失败。   |


## 更新 Token

| 方法                                                         | 描述             |
| ------------------------------------------------------------ | ---------------- |
| [renewToken](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#renewtoken) | 更新当前 Token。 |

| 事件                                                         | 描述             |
| ------------------------------------------------------------ | ---------------- |
| [TokenExpired](https://docs.anyrtc.io/rtm-web/docs/events/rtm_client_events/#tokenexpired) | Token 过期回调。 |


## 日志设置与版本查询

| 变量                                                         | 描述                           |
| ------------------------------------------------------------ | ------------------------------ |
| [enableLogUpload](https://docs.anyrtc.io/rtm-web/docs/interfaces/rtm_parameters/#enablelogupload) | 是否启用日志上传。             |
| [logFilter](https://docs.anyrtc.io/rtm-web/docs/interfaces/rtm_parameters/#logfilter) | 设置 SDK 的日志输出等级。      |
| [VERSION](https://docs.anyrtc.io/rtm-web/docs/ar_rtm/#version) | anyrtc RTM SDK 的当前版本信息。 |


##定制方法

| 方法                                                         | 描述                                  |
| ------------------------------------------------------------ | ------------------------------------- |
| [setParameters](https://docs.anyrtc.io/rtm-web/docs/rtm_client/#setparameters) | 配置 SDK 提供技术预览或特别定制功能。 |