//
//  ARtmEnumerates.h
//  ARtmKit
//
//  Created by 余生丶 on 2020/6/11.
//  Copyright © 2020 AR. All rights reserved.
//

#ifndef ARtmEnumerates_h
#define ARtmEnumerates_h

/**
登录相关错误码。
 */
typedef NS_ENUM(NSInteger, ARtmLoginErrorCode) {
    
    /**
    0: 登录成功。没有错误。
     */
    ARtmLoginErrorOk = 0,
    
    /**
     1: 登录失败。原因未知。
     */
    ARtmLoginErrorUnknown = 1,
    
    /**
     2: 登录被服务器拒绝。
     */
    ARtmLoginErrorRejected = 2,
    
    /**
     3: 登录参数无效。
     */
    ARtmLoginErrorInvalidArgument = 3,
    
    /**
     4: App ID 无效。
     */
    ARtmLoginErrorInvalidAppId = 4,
    
    /**
     5: Token 无效。
     */
    ARtmLoginErrorInvalidToken = 5,
    
    /**
     6: Token 已过期，登录被拒绝。
     */
    ARtmLoginErrorTokenExpired = 6,
    
    /**
     7: 登录未经授权。
     */
    ARtmLoginErrorNotAuthorized = 7,
    
    /**
     8: 用户已登录，或正在登录 ar云平台 RTM 系统，或未调用 logoutWithCompletion 方法退出 ARtmConnectionStateAborted 状态。
     */
    ARtmLoginErrorAlreadyLogin = 8,
    
    /**
     9: 登录超时。目前的超时设置为 6 秒。
     */
    ARtmLoginErrorTimeout = 9,
    
    /**
     10: 登录过于频繁。方法 loginByToken 的调用频率超过 2 次／秒的上限。
     */
    ARtmLoginErrorLoginTooOften = 10,
    
    /**
     101: SDK 未完成初始化。
     */
    ARtmLoginErrorLoginNotInitialized = 101,
};

/**
登出错误码。
 */
typedef NS_ENUM(NSInteger, ARtmLogoutErrorCode) {

    /**
    0: 登出成功。
    */
    ARtmLogoutErrorOk = 0,
    
    /**
    1: 预留错误码
    */
    ARtmLogoutErrorRejected = 1,
    
    /**
    101: SDK 未完成初始化。
    */
    ARtmLogoutErrorNotInitialized = 101,
    
    /**
    102: 登出 A RTM 系统前未调用 loginByToken 方法或者 loginByToken 方法调用未成功。
    */
    ARtmLogoutErrorNotLoggedIn = 102,
};

/**
更新 token 相关错误码。
 */
typedef NS_ENUM(NSInteger, ARtmRenewTokenErrorCode) {
    
    /**
    0：更新 Token 成功。
    */
    ARtmRenewTokenErrorOk = 0,
    
    /**
    1：更新 Token 失败。
    */
    ARtmRenewTokenErrorFailure = 1,
    
    /**
    2：无效参数。
    */
    ARtmRenewTokenErrorInvalidArgument = 2,
    
    /**
    3：预留错误码
    */
    ARtmRenewTokenErrorRejected = 3,
    
    /**
    4：方法调用过于频繁。超过 2 次／秒上限。
    */
    ARtmRenewTokenErrorTooOften = 4,

    /**
    5：输入 Token 已过期。
    */
    ARtmRenewTokenErrorTokenExpired = 5,
    
    /**
    6：输入 Token 无效。
    */
    ARtmRenewTokenErrorInvalidToken = 6,
    
    /**
    101: SDK 未完成初始化。
    */
    ARtmRenewTokenErrorNotInitialized = 101,
    
    /**
    102: 更新 Token 前未调用 loginByToken 方法或者 loginByToken 方法调用未成功。
    */
    ARtmRenewTokenErrorNotLoggedIn = 102,
};

 /**
 消息类别。
  */
typedef NS_ENUM(NSInteger, ARtmMessageType) {
     
   /**
    0: 未定义的消息类别。
    */
    ARtmMessageTypeUndefined = 0,
     
   /**
    1: 文本消息。
    */
    ARtmMessageTypeText = 1,
     
   /**
    2: 自定义二进制消息。
    */
    ARtmMessageTypeRaw = 2,
     
   /**
    3: 文件消息。大小不得超过 32 KB。
    */
    ARtmMessageTypeFile = 3,
   
   /**
    4: 图片消息。大小不得超过 32 KB。
    */
    ARtmMessageTypeImage = 4,
};

/**
发送点对点消息的相关错误码。
 */
typedef NS_ENUM(NSInteger, ARtmSendPeerMessageErrorCode) {
    
    /**
     0: 对端已接收到点对点消息。
     */
    ARtmSendPeerMessageErrorOk = 0,
    
    /**
     1: 点对点消息发送失败。
     */
    ARtmSendPeerMessageErrorFailure = 1,
    
    /**
     2: 点对点消息发送超时。当前的超时设置为 10 秒。可能原因：用户正处于 ARtmConnectionStateAborted 状态或 ARtmConnectionStateReconnecting 状态。
     */
    ARtmSendPeerMessageErrorTimeout = 2,
    
    /**
     3: 接收者处于离线状态，无法接收点对点消息。
     */
    ARtmSendPeerMessageErrorPeerUnreachable = 3,
    
    /**
     4: 对方不在线，发出的离线点对点消息未被收到。但是服务器已经保存这条消息并将在用户上线后重新发送。
     */
    ARtmSendPeerMessageErrorCachedByServer  = 4,
    
    /**
     5: 发送消息（点对点消息和频道消息一并计算在内）超过 60 次／秒的上限。
     */
    ARtmSendPeerMessageErrorTooOften = 5,
    
    /**
     6: 用户 ID 无效。
     */
    ARtmSendPeerMessageErrorInvalidUserId = 6,
    
    /**
     7: 消息为 null 或超出 32 KB 的长度限制。
     */
    ARtmSendPeerMessageErrorInvalidMessage = 7,
    
    /**
     8: 消息接收方的SDK是早期版本，因此无法识别此消息。
     */
    ARtmSendPeerMessageErrorImcompatibleMessage = 8,

    /**
     101: ar云平台 RTM 服务未完成初始化。
     */
    ARtmSendPeerMessageErrorNotInitialized = 101,
    
    /**
     102: 发送点对点消息前未调用 loginByToken 方法或者 loginByToken 方法调用未成功。
     */
    ARtmSendPeerMessageErrorNotLoggedIn = 102,
};

/**
用户加入频道相关错误码。
 */
typedef NS_ENUM(NSInteger, ARtmJoinChannelErrorCode) {
    
    /**
     0: 用户成功加入频道。
     */
    ARtmJoinChannelErrorOk = 0,
    
    /**
     1: 用户加入频道失败。
     */
    ARtmJoinChannelErrorFailure = 1,
    
    /**
     2: 预留错误码
     */
    ARtmJoinChannelErrorRejected = 2,
    
    /**
     3: 用户无法加入频道。因为参数无效。
     */
    ARtmJoinChannelErrorInvalidArgument = 3,
    
    /**
     4: 用户加入频道超时。当前的超时设置为 5 秒。可能原因：用户正处于 ARtmConnectionStateAborted 状态或 ARtmConnectionStateReconnecting 状态。
     */
    ARtmJoinChannelErrorTimeout = 4,
    
    /**
     5: 同时加入的频道数超过 20 上限。
     */
    ARtmJoinChannelErrorExceedLimit = 5,
    
    /**
     6: 用户正在加入频道或已成功加入频道。
     */
    ARtmJoinChannelErrorAlreadyJoined = 6,
    
    /**
     7: 方法调用超过 50 次每 3 秒的上限。
     */
    ARtmJoinChannelErrorTooOften = 7,
    
    /**
     8: 加入相同频道的频率超过每 5 秒 2 次的上限。
     */
    ARtmJoinSameChannelErrorTooOften = 8,
    
    /**
     101: SDK 未完成初始化。
     */
    ARtmJoinChannelErrorNotInitialized = 101,
    
    /**
     102: 用户加入频道前未调用 loginByToken 方法或者 loginByToken 方法调用未成功。
     */
    ARtmJoinChannelErrorNotLoggedIn = 102,
};

/**
用户离开频道相关错误码。
 */
typedef NS_ENUM(NSInteger, ARtmLeaveChannelErrorCode) {
    
    /**
     0: 用户成功离开频道。
     */
    ARtmLeaveChannelErrorOk = 0,
    
    /**
     1: 用户离开频道失败。
     */
    ARtmLeaveChannelErrorFailure = 1,
    
    /**
     2: 预留错误码
     */
    ARtmLeaveChannelErrorRejected = 2,
    
    /**
     3: 用户已不在频道内。
     */
    ARtmLeaveChannelErrorNotInChannel = 3,
    
    /**
     101: SDK 未完成初始化。
     */
    ARtmLeaveChannelErrorNotInitialized = 101,
    
    /**
     102: 用户在离开频道前未调用 loginByToken 方法或者 loginByToken 方法调用未成功。
     */
    ARtmLeaveChannelErrorNotLoggedIn = 102,
};

/**
频道消息发送相关错误码。
 */
typedef NS_ENUM(NSInteger, ARtmSendChannelMessageErrorCode) {
    
    /**
     0: 服务端已接收到频道消息。
     */
    ARtmSendChannelMessageErrorOk = 0,
    
    /**
     1: 频道消息发送失败。
     */
    ARtmSendChannelMessageErrorFailure = 1,
    
    /**
     2: 服务器未收到频道消息或者 SDK 未在 10 秒内收到服务器响应。当前的超时设置为 10 秒。可能原因：用户正处于 ARtmConnectionStateAborted 状态或 ARtmConnectionStateReconnecting 状态。
     */
    ARtmSendChannelMessageErrorTimeout = 2,
    
    /**
     3: 发送消息（点对点消息和频道消息一并计算在内）超过 60 次／秒的上限。
     */
    ARtmSendChannelMessageTooOften = 3,
    
    /**
     4: 消息为 null 或超出 32 KB 的长度限制。
     */
    ARtmSendChannelMessageInvalidMessage = 4,
    
    /**
     101: SDK 未完成初始化。
     */
    ARtmSendChannelMessageErrorNotInitialized = 101,
    
    /**
     102: 发送频道消息前未调用 loginByToken 方法或者 loginByToken 方法调用未成功。
     */
    ARtmSendChannelMessageNotLoggedIn = 102,
};

/**
获取频道成员列表的相关错误码。
*/
typedef NS_ENUM(NSInteger, ARtmGetMembersErrorCode) {
    
    /**
     0: 频道成员列表获取成功。
     */
    ARtmGetMembersErrorOk = 0,
    
    /**
     1: 频道成员列表获取失败。
     */
    ARtmGetMembersErrorFailure = 1,
    
    /**
     2: 预留错误码
     */
    ARtmGetMembersErrorRejected = 2,
    
    /**
     3: 获取频道内成员列表超时。当前的超时设置为 5 秒。可能原因：用户正处于 ARtmConnectionStateAborted 状态或 ARtmConnectionStateReconnecting 状态。
     */
    ARtmGetMembersErrorTimeout = 3,
    
    /**
     4: 方法调用频率超过 5 次每 2 秒的上限。
     */
    ARtmGetMembersErrorTooOften = 4,
    
    /**
     5: 用户不在频道内。
     */
    ARtmGetMembersErrorNotInChannel = 5,
    
    /**
     101: SDK 未完成初始化。
     */
    ARtmGetMembersErrorNotInitialized = 101,
    
    /**
     102: 获取频道成员列表前未调用 loginByToken 方法或者 loginByToken 方法调用未成功。
     */
    ARtmGetMembersErrorNotLoggedIn = 102,
};

/**
用户在线状态类型。
 */
typedef NS_ENUM(NSInteger, ARtmPeerOnlineState) {
    /**
    0: 用户在线。
     */
    ARtmPeerOnlineStateOnline = 0,
    /**
     1: 连接状态不稳定（服务器连续 6 秒未收到来自 SDK 的数据包）。
     */
    ARtmPeerOnlineStateUnreachable = 1,
    /**
     2: 用户不在线（用户未登录或已登出 ar云平台 RTM 系统，或服务器连续 30 秒未收到来自 SDK 的数据包）。
     */
    ARtmPeerOnlineStateOffline = 2,
};

/**
查询在线状态相关错误码。
 */
typedef NS_ENUM(NSInteger, ARtmQueryPeersOnlineErrorCode) {
    
    /**
     0：查询用户状态成功。
     */
    ARtmQueryPeersOnlineErrorOk = 0,
    
    /**
     1：查询用户状态失败。
     */
    ARtmQueryPeersOnlineErrorFailure = 1,
    
    /**
     2：查询参数无效。
     */
    ARtmQueryPeersOnlineErrorInvalidArgument = 2,

    /**
     3：预留错误码
     */
    ARtmQueryPeersOnlineErrorRejected = 3,
    
    /**
     4：服务器响应超时。当前的超时设置为 10 秒。可能原因：用户正处于 ARtmConnectionStateAborted 状态或 ARtmConnectionStateReconnecting 状态。
     */
    ARtmQueryPeersOnlineErrorTimeout = 4,
    
    /**
     5：方法调用过于频繁。超过 10 次每 5 秒的上限。
     */
    ARtmQueryPeersOnlineErrorTooOften = 5,

    /**
     101: SDK 未完成初始化。
     */
    ARtmQueryPeersOnlineErrorNotInitialized = 101,

    /**
     102: 查询指定用户在线状态前未调用 loginByToken 方法或者 loginByToken 方法调用未成功。
     */
    ARtmQueryPeersOnlineErrorNotLoggedIn = 102,
};

/**
属性操作相关错误码。
 */
typedef NS_ENUM(NSInteger, ARtmProcessAttributeErrorCode) {
    
    /**
     0: 方法调用成功。
     */
    ARtmAttributeOperationErrorOk = 0,
    
    /**
     1: DEPRECATED
     */
    ARtmAttributeOperationErrorNotReady = 1,
    
    /**
     2: 方法调用失败。
     */
    ARtmAttributeOperationErrorFailure = 2,
    
    /**
     3: 无效的输入参数。
     */
    ARtmAttributeOperationErrorInvalidArgument = 3,
    
    /**
     4: 本次操作后，用户属性或频道属性超过上限。
     * 用户属性操作：在本次属性操作后，用户属性总大小超过 16 KB 长度限制，或单条用户属性超过 8 KB 长度限制，或用户属性个数超过 32 个的条目上限。
     * 频道属性操作：在本次属性操作后，频道属性总大小超过 32 KB 长度限制，或单条频道属性超过 8 KB 长度限制，或频道属性个数超过 32 个的条目上限。
     */
    ARtmAttributeOperationErrorSizeOverflow = 4,
    
    /**
     5: 方法调用频率超过限制。
     * setLocalUserAttributes 、 addOrUpdateLocalUserAttributes 、 deleteLocalUserAttributesByKeys ，和 clearLocalUserAttributes 一并计算在内：调用频率限制为每 5 秒 10 次。
     * getUserAttributes 和 getUserAttributesByKeys 一并计算在内：调用频率限制为每 5 秒 40 次。
     * setChannelAttributes 、 addOrUpdateChannelAttributes 、 deleteChannelAttributesByKeys ，和 clearChannelAttributes 一并计算在内：调用频率限制为每 5 秒 10 次。
     * getChannelAllAttributes 和 getChannelAttributesByKeys 一并计算在内：调用频率限制为每 5 秒 10 次。
     */
    ARtmAttributeOperationErrorTooOften = 5,
    
    /**
     6: 未找到指定用户。该用户或者处于离线状态或者并不存在。
     */
    ARtmAttributeOperationErrorUserNotFound = 6,
    
    /**
     7: 属性操作超时。当前的超时设定为 5 秒。可能原因：用户正处于 ARtmConnectionStateAborted 状态或        ARtmConnectionStateReconnecting 状态。
     */
    ARtmAttributeOperationErrorTimeout = 7,
    
    /**
     101: SDK 未完成初始化。
     */
    ARtmAttributeOperationErrorNotInitialized = 101,
    
    /**
     102: 执行用户属性操作前未调用 loginByToken 方法或者 loginByToken 方法调用未成功。
     */
    ARtmAttributeOperationErrorNotLoggedIn = 102,
};

/**
查询单个或多个指定频道成员人数的相关错误码。
 */
typedef NS_ENUM(NSInteger, ARtmChannelMemberCountErrorCode) {
    
    /**
     0: 获取指定频道成员人数成功。
     */
    ARtmChannelMemberCountErrorOk = 0,
    
    /**
     1: 通用未知错误。
     */
    ARtmChannelMemberCountErrorFailure = 1,
    
    /**
     2: 频道 ID 无效
     */
    ARtmChannelMemberCountErrorInvalidArgument = 2,

    /**
     3: 方法调用过于频繁。超过每秒 1 次的限制。
     */
    ARtmChannelMemberCountErrorTooOften = 3,

    /**
     4: 服务器响应超时。当前的当前的超时设定为 5 秒。
     */
    ARtmChannelMemberCountErrorTimeout = 4,
    
    /**
     5: 查询频道数超过 32 条上限。
     */
    ARtmChannelMemberCountErrorExceedLimit = 5,
    
    /**
     101: ar云平台 RTM 服务未完成初始化。
     */
    ARtmChannelMemberCountErrorNotInitialized = 101,

    /**
     102: 本次操作前未调用 loginByToken 方法或者 loginByToken 方法调用未成功。
     */
    ARtmChannelMemberCountErrorNotLoggedIn = 102,
};

/**
订阅或退订指定用户状态相关错误码。
 */
typedef NS_ENUM(NSInteger, ARtmPeerSubscriptionStatusErrorCode) {
    
    /**
     0: 方法调用成功，或订阅退订操作成功。
     */
    ARtmPeerSubscriptionStatusErrorOk = 0,
    
    /**
     1: 通用未知错误。订阅或退订操作失败。
     */
    ARtmPeerSubscriptionStatusErrorFailure = 1,
    
    /**
     2: 无效的输入参数。
     */
    ARtmPeerSubscriptionStatusErrorInvalidArgument = 2,
    
    /**
     3: 预留错误码
     */
    ARtmPeerSubscriptionStatusErrorRejected = 3,
    
    /**
     4: The SDK fails to receive a response from the server in 10 seconds. The current timeout is set as 10 seconds. Possible reasons: The user is in the \ref A::rtm::CONNECTION_STATE_ABORTED "CONNECTION_STATE_ABORTED" or \ref A::rtm::CONNECTION_STATE_RECONNECTING "CONNECTION_STATE_RECONNECTING" state.
     */
    ARtmPeerSubscriptionStatusErrorTimeout = 4,
    
    /**
     5: 方法调用过于频繁。超过 10 次每 5 秒的限制。
     */
    ARtmPeerSubscriptionStatusErrorTooOften = 5,
    
    /**
     6: 订阅人数超过 512 人的上限。
     */
    ARtmPeerSubscriptionStatusErrorOverflow = 6,
    
    /**
     101: ar云平台 RTM 服务未完成初始化。
     */
    ARtmPeerSubscriptionStatusErrorNotInitialized = 101,
    
    /**
     102: 本次操作前未调用 loginByToken 方法或者 loginByToken 方法调用未成功。
     */
    ARtmPeerSubscriptionStatusErrorNotLoggedIn = 102,
};

/**
订阅类型。
 */
typedef NS_ENUM(NSInteger, ARtmPeerSubscriptionOptions) {
    /**
     0: 订阅指定用户的在线状态。
     */
    ARtmPeerSubscriptionOnlineStatus = 0,
};

/**
根据订阅类型获取被订阅用户列表相关的错误码。
 */
typedef NS_ENUM(NSInteger, ARtmQueryPeersBySubscriptionOptionErrorCode) {
    
    /**
     0: 方法调用成功，或根据订阅类型获取被订阅用户列表成功。
     */
    ARtmQueryPeersBySubscriptionOptionErrorOk = 0,
    
    /**
     1: 通用错误。根据订阅类型获取被订阅用户列表失败。
     */
    ARtmQueryPeersBySubscriptionOptionErrorFailure = 1,
    
    /**
     2: 服务器响应超时。当前的超时设置为 5 秒。可能原因：用户正处于 ARtmConnectionStateAborted 状态或 ARtmConnectionStateReconnecting 状态。
     */
    ARtmQueryPeersBySubscriptionOptionErrorTimeout = 2,
    
    /**
     3: 方法调用过于频繁。超过 10 次每 5 秒的限制。
     */
    ARtmQueryPeersBySubscriptionOptionErrorTooOften = 3,
    
    /**
     101: A RTM 服务未完成初始化。
     */
    ARtmQueryPeersBySubscriptionOptionErrorNotInitialized = 101,
    
    /**
     102: 本次操作前未调用 loginByToken 方法或者 loginByToken 方法调用未成功。
     */
    ARtmQueryPeersBySubscriptionOptionErrorNotLoggedIn = 102,
};

/** 日志过滤分级 */
typedef NS_ENUM(NSUInteger, ARtmLogFilter) {
    /**
     不输出日志信息
     */
    ARtmLogFilterOff = 0,
    /**
     输出所有 API 日志信息。如果你想获取最完整的日志，可以将日志级别设为该等级。
     */
    ARtmLogFilterDebug = 0x080f,
    /**
     输出 CRITICAL、ERROR、WARNING 和 INFO 级别的日志信息。我们推荐你将日志级别设为该等级。
     */
    ARtmLogFilterInfo = 0x000f,
    /**
     输出 CRITICAL、ERROR 和 WARNING 级别的日志信息
     */
    ARtmLogFilterWarning = 0x000e,
    /**
     输出 CRITICAL 和 ERROR 级别的日志信息
     */
    ARtmLogFilterError = 0x000c,
    /**
     输出 CRITICAL 级别的日志信息
     */
    ARtmLogFilterCritical = 0x0008,
};

/**
返回给主叫的呼叫邀请状态码。
 */
typedef NS_ENUM(NSInteger, ARtmLocalInvitationState) {
    
    /**
     0：返回给主叫的呼叫邀请状态码：初始状态。
     */
    ARtmLocalInvitationStateIdle = 0,
    
    /**
     1：仅供内部使用。
     */
    ARtmLocalInvitationStateSentToRemote = 1,
    
    /**
     2：返回给主叫的呼叫邀请状态码：被叫已收到呼叫邀请。
     */
    ARtmLocalInvitationStateReceivedByRemote = 2,
    
    /**
     3：返回给主叫的呼叫邀请状态码：被叫已接受呼叫邀请。
     */
    ARtmLocalInvitationStateAcceptedByRemote = 3,
    
    /**
     4：返回给主叫的呼叫邀请状态码：被叫已拒绝呼叫邀请。
     */
    ARtmLocalInvitationStateRefusedByRemote = 4,
    
    /**
     5：返回给主叫的呼叫邀请状态码：已成功取消呼叫邀请。
     */
    ARtmLocalInvitationStateCanceled = 5,
    
    /**
     6：返回给主叫的呼叫邀请状态码：呼叫邀请过程失败。
     */
    ARtmLocalInvitationStateFailure = 6,
};

/**
呼叫邀请的相关 API 调用的错误码。
 */
typedef NS_ENUM(NSInteger, ARtmInvitationApiCallErrorCode) {
    
    /**
     0：呼叫邀请相关 API 调用成功。
     */
    ARtmInvitationApiCallErrorOk = 0,
    
    /**
     1：呼叫邀请相关 API 调用失败：参数错误，比如参数 content 的值超过最大限制长度 8K 字节。
     */
    ARtmInvitationApiCallErrorInvalidAugment = 1,
    
    /**
     2：呼叫邀请相关 API 调用失败：未开始。
     */
    ARtmInvitationApiCallErrorNotStarted = 2,
    
    /**
     3：呼叫邀请相关 API 调用结果：已结束。
     */
    ARtmInvitationApiCallErrorAlreadyEnd = 3,
    
    /**
     4：呼叫邀请相关 API 调用结果：已接受邀请。
     */
    ARtmInvitationApiCallErrorAlreadyAccept = 4,
    
    /**
     5：呼叫邀请相关 API 调用结果：呼叫邀请已发送。
     */
    ARtmInvitationApiCallErrorAlreadySent = 5,
};

/**
返回给被叫的呼叫邀请状态码。
 */
typedef NS_ENUM(NSInteger, ARtmRemoteInvitationState) {
    
    /**
    0：返回给被叫的呼叫邀请状态码：被叫收到的邀请的初始状态。
    */
    ARtmRemoteInvitationStateIdle = 0,
    
    /**
    1：返回给被叫的呼叫邀请状态码：收到了来自主叫的呼叫邀请。
    */
    ARtmRemoteInvitationStateInvitationReceived = 1,
    
    /**
    2：仅供内部使用。
    */
    ARtmRemoteInvitationStateAcceptSentToLocal = 2,
    
    /**
    3：返回给被叫的呼叫邀请状态码：已拒绝来自主叫的呼叫邀请。
    */
    ARtmRemoteInvitationStateRefused = 3,
    
    /**
    4：返回给被叫的呼叫邀请状态码：已接受来自主叫的呼叫邀请。
    */
    ARtmRemoteInvitationStateAccepted = 4,
    
    /**
    5：返回给被叫的呼叫邀请状态码：主叫已取消呼叫邀请。
    */
    ARtmRemoteInvitationStateCanceled = 5,
    
    /**
     6：返回给被叫的呼叫邀请状态码：呼叫邀请过程失败。
    */
    ARtmRemoteInvitationStateFailure = 6,
};

/**
SDK 和 ar云平台 RTM 系统的连接状态。
 */
typedef NS_ENUM(NSInteger, ARtmConnectionState) {
    
    /**
     1: 初始状态。SDK 未连接到 ar云平台 RTM 系统。

     App 调用 loginByToken 方法后，SDK 开始登录 ar云平台 RTM 系统，触发 connectionStateChanged 回调，连接状态变为 ARtmConnectionStateConnecting 。
     */
    ARtmConnectionStateDisconnected = 1,
    
    /**
    2: SDK 正在登录 ar云平台 RTM 系统。
     * 如果 SDK 登录成功，会触发 connectionStateChanged 回调，连接状态变为 ARtmConnectionStateConnected 。
     * 如果 SDK 登录失败，会触发 connectionStateChanged 回调，连接状态变为 ARtmConnectionStateDisconnected 。
     */
    ARtmConnectionStateConnecting = 2,
    
    /**
     3: SDK 已登录 ar云平台 RTM 系统。
     * 如果 SDK 由于网络原因断开与 ar云平台 RTM 系统的连接，SDK 触发 connectionStateChanged 回调，连接状态变为 ARtmConnectionStateReconnecting 。
     * 如果 SDK 由于重复登录而被服务器踢出，SDK 触发 connectionStateChanged 回调，连接状态变为 ARtmConnectionStateAborted 。
     * 如果 App 调用 logoutWithCompletion 方法成功登出系统，SDK 触发 connectionStateChanged 回调，连接状态变为 ARtmConnectionStateDisConnected 。
    */
    ARtmConnectionStateConnected = 3,

    /**
     4: SDK 与 ar云平台 RTM 系统连接由于网络原因出现中断，SDK 正在尝试自动重连 ar云平台 RTM 系统。

     * 如果 SDK 登录成功，SDK 触发 connectionStateChanged 回调，连接状态变为 ARtmConnectionStateConnected 。SDK 会自动加入中断时用户所在频道，并自动将本地用户属性同步到服务端。
     * 如果 SDK 登录失败，SDK 会保持 ARtmConnectionStateReConnecting 状态，继续自动重连。
     */
    ARtmConnectionStateReconnecting = 4,
    
    /**
     5: SDK 放弃登录 ar云平台 RTM 系统。

     可能原因：另一实例已经以同一用户 ID 登录 ar云平台 RTM 系统。

     在此之后，SDK 需要调用 logoutWithCompletion 方法退出登录，再视情况调用 loginByToken 方法重新登录系统。
     */
    ARtmConnectionStateAborted = 5,
};

/**
连接状态改变原因。
 */
typedef NS_ENUM(NSInteger, ARtmConnectionChangeReason) {
    
    /**
     1: SDK 正在登录 ar云平台 RTM 系统。
     */
    ARtmConnectionChangeReasonLogin = 1,
    
    /**
     2: SDK 成功登录 ar云平台 RTM 系统。
     */
    ARtmConnectionChangeReasonLoginSuccess = 2,
    
    /**
     3: SDK 登录失败。
     */
    ARtmConnectionChangeReasonLoginFailure = 3,
    
    /**
     4: SDK 未在 6 秒内登录 ar云平台 RTM 系统，登录超时。可能原因：用户正处于 ARtmConnectionStateAborted 状态或 ARtmConnectionStateReconnecting 状态。
     */
    ARtmConnectionChangeReasonLoginTimeout = 4,
    
    /**
     5: SDK 和 ar云平台 RTM 系统的连接由于网络问题而断开超过 4 秒。
     */
    ARtmConnectionChangeReasonInterrupted = 5,
    
    /**
     6: 用户已调用 logoutWithCompletion 方法登出 ar云平台 RTM 系统。
     */
    ARtmConnectionChangeReasonLogout = 6,
    
    /**
     7: 登录被 ar云平台 RTM 服务器禁止。
     */
    ARtmConnectionChangeReasonBannedByServer = 7,
    
    /**
     8: 本账号异地登录，本地断开连接。
     */
    ARtmConnectionChangeReasonRemoteLogin = 8,
};

/**
返回给主叫的呼叫邀请错误码。
 */
typedef NS_ENUM(NSInteger, ARtmLocalInvitationErrorCode) {
    
    /**
     0：返回给主叫的呼叫邀请错误码：呼叫邀请成功。
     */
    ARtmLocalInvitationErrorOk = 0,
    
    /**
     1：返回给主叫的呼叫邀请错误码：被叫不在线。
     SDK 会在被叫不在线时不断重发呼叫邀请。若消息发送 30 秒后被叫仍未上线，SDK 会返回此错误码。
     */
    ARtmLocalInvitationErrorRemoteOffline = 1,
    
    /**
     2：返回给主叫的呼叫邀请错误码：被叫在呼叫邀请发出后 30 秒无 ACK 响应。
     */
    ARtmLocalInvitationErrorRemoteNoResponse = 2,
    
    /**
     3：返回给主叫的呼叫邀请错误码：呼叫邀请过期。被叫 ACK 响应呼叫邀请后 60 秒时，呼叫邀请仍未被取消、接受、拒绝，则呼叫邀请过期。
     */
    ARtmLocalInvitationErrorExpire = 3,
    
    /**
     4: 返回给主叫的呼叫邀请错误码：主叫未登录。
     */
    ARtmLocalInvitationErrorNotLoggedIn = 4,
};

/**
返回给被叫的呼叫邀请错误码。
 */
typedef NS_ENUM(NSInteger, ARtmRemoteInvitationErrorCode) {
    
    /**
     0：返回给被叫的呼叫邀请错误码：呼叫邀请成功。
     */
    ARtmRemoteInvitationErrorOk = 0,
    
    /**
     1：返回给被叫的呼叫邀请错误码：被叫不在线，呼叫邀请失败。
     */
    ARtmRemoteInvitationErrorLocalOffline = 1,
    
    /**
     2：返回给被叫的呼叫邀请错误码：被叫接受呼叫邀请后未收到主叫的 ACK 响应导致呼叫邀请失败，一般由于网络中断造成。
     */
    ARtmRemoteInvitationErrorAcceptFailure = 2,
    
    /**
     3：返回给被叫的呼叫邀请错误码：呼叫邀请过期。被叫 ACK 响应呼叫邀请后 60 秒呼叫邀请未被取消、接受、拒绝，则呼叫邀请过期。
     */
    ARtmRemoteInvitationErrorExpire = 3,
};

#endif /* ARtmEnumerates_h */
