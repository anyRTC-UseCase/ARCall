//
//  ARtmDelegate.h
//  ARtmKit
//
//  Created by 余生丶 on 2020/6/12.
//  Copyright © 2020 AR. All rights reserved.
//

#ifndef ARtmDelegate_h
#define ARtmDelegate_h
#import "ARtmObjects.h"
#import "ARtmEnumerates.h"

/**
 ARtmKit 类是 ar云平台 RTM SDK 的入口，提供所有可供 App 调用的核心方法。
 */
@class ARtmKit;
/**
 提供频道消息或点对点文本消息相关属性的数据结构。
 */
@class ARtmMessage;
@class ARtmFileMessage;
@class ARtmImageMessage;
/**
 ar云平台 RTM 频道方法。
 */
@class ARtmChannel;
/**
 RTM 的呼叫邀请相关方法。
 */
@class ARtmCallKit;

/**
 表明用户在线状态的数据结构。
 */
@class ARtmPeerOnlineStatus;
/**
ar云平台 RTM 频道成员的属性。
*/
@class ARtmMember;
/**
用于设置或获取频道属性的数据结构。
*/
@class ARtmChannelAttribute;
/**
用于主叫的呼叫邀请内容。
*/
@class ARtmLocalInvitation;
/**
用于被叫方的呼叫邀请内容。
*/
@class ARtmRemoteInvitation;

/**
ARtmDelegate 接口类向 App 发送回调通知，上报运行时的事件。
*/
@protocol ARtmDelegate <NSObject>
@optional

/**
 连接状态改变回调。

 @param kit ARtmKit 实例。
 @param state 新的连接状态，详见 ARtmConnectionState 。
 @param reason 连接状态改变的原因，详见 ARtmConnectionChangeReason 。
 */
- (void)rtmKit:(ARtmKit * _Nonnull)kit connectionStateChanged:(ARtmConnectionState)state reason:(ARtmConnectionChangeReason)reason;

/**
 收到点对点消息回调。
 
 @param kit ARtmKit 实例。
 @param message 收到的消息内容。
 @param peerId 消息发送者的用户 ID。
 */
- (void)rtmKit:(ARtmKit * _Nonnull)kit messageReceived:(ARtmMessage * _Nonnull)message fromPeer:(NSString * _Nonnull)peerId;

/**
 被订阅用户在线状态改变回调。
 
 * 首次订阅在线状态成功时，SDK 也会返回本回调，显示所有被订阅用户的在线状态。
 * 每当被订阅用户的在线状态发生改变，SDK 都会通过该回调通知订阅方。
 * 如果 SDK 在断线重连过程中有被订阅用户的在线状态发生改变，SDK 会在重连成功时通过该回调通知订阅方。
 
 @param kit 一个 ARtmKit 实例。
 @param onlineStatus 用户在线状态列表。详见 ARtmPeerOnlineStatus 。
 */
- (void)rtmKit:(ARtmKit * _Nonnull)kit peersOnlineStatusChanged:(NSArray< ARtmPeerOnlineStatus *> * _Nonnull)onlineStatus;

/**
 （SDK 断线重连时触发）当前使用的 RTM Token 已超过 24 小时的签发有效期。
 
 * 该回调仅会在 SDK 处于 ARtmConnectionStateReconnecting 状态时因 RTM 后台监测到 Token 签发有效期过期而触发。SDK 处于 ARtmConnectionStateConnected 状态时该回调不会被触发。
 * 收到该回调时，请尽快在你的业务服务端生成新的 Token 并调用 renewToken 方法把新的 Token 传给 Token 验证服务器。

 @param kit 一个 ARtmKit 实例。
 */
- (void)rtmKitTokenDidExpire:(ARtmKit * _Nonnull)kit;

@end


/**
ARtmChannelDelegate 接口类向 App 发送回调通知，上报运行时的频道相关事件。
*/
@protocol ARtmChannelDelegate <NSObject>

@optional

/**
 远端用户加入频道回调。
 
 当有远端用户调用 joinWithCompletion 方法成功加入频道时，在相同频道的本地用户会收到此回调。
 
**NOTE**
 
 频道人数超过 512 人时后台会关闭上下线通知。

 @param channel 所在频道。详见 ARtmChannel 。
 @param member 加入频道的远端用户。详见 ARtmMember 。
 */
- (void)channel:(ARtmChannel * _Nonnull)channel memberJoined:(ARtmMember * _Nonnull)member;

/**
 频道成员离开频道回调。
 
 当有频道成员调用 leaveWithCompletion 方法成功离开频道时，在相同频道的本地用户会收到此回调。
 
**NOTE**
 
 频道人数超过 512 人时后台会关闭上下线通知。

 @param channel 所在频道。详见 ARtmChannel 。
 @param member 离开频道的频道成员。详见 ARtmMember 。
 */
- (void)channel:(ARtmChannel * _Nonnull)channel memberLeft:(ARtmMember * _Nonnull)member;

/**
 收到频道消息回调。
 
 当远端用户调用 sendMessage 方法成功发送频道消息后，在相同频道的本地用户会收到此回调。

 @param channel 所在频道。详见 ARtmChannel 。
 @param message 消息内容。详见 ARtmMessage 。
 @param member 频道消息发送者。详见 ARtmMember 。
 */
- (void)channel:(ARtmChannel * _Nonnull)channel messageReceived:(ARtmMessage * _Nonnull)message fromMember:(ARtmMember * _Nonnull)member;

/**
 频道属性更新回调。返回所在频道的所有属性。
 
**NOTE**
 
 只有当频道属性更新者将 enableNotificationToChannelMembers 设为 YES 后，该回调才会被触发。请注意：该标志位为一次性标志位，仅对当前频道属性操作有效。

 @param channel 所在频道。详见 ARtmChannel 。
 @param attributes 频道属性列表。详见 ARtmChannelAttribute 。
 */
- (void)channel:(ARtmChannel * _Nonnull)channel attributeUpdate:(NSArray< ARtmChannelAttribute *> * _Nonnull)attributes;


/**
 频道成员人数更新回调。返回最新频道成员人数。
 
**NOTE**
 
 * 频道成员人数 ≤ 512 时，最高触发频率为每秒 1 次。
 * 频道成员人数超过 512 时，最高触发频率为每 3 秒 1 次。
 * 用户在成功加入频道时会收到该回调。你可以通过监听该回调获取加入频道时的频道成员人数和后继人数更新。

 @param channel 所在频道。详见 ARtmChannel 。
 @param count 最新频道成员人数。
 */
- (void)channel:(ARtmChannel * _Nonnull)channel memberCount:(int)count;

@end

/**
 ARtmCallDelegate 接口类用于向 App 返回回调通知。
 */
@protocol ARtmCallDelegate  <NSObject>
@optional

/**
 被叫已收到呼叫邀请

 @param callKit 一个 ARtmCallKit 对象。
 @param localInvitation 一个 ARtmLocalInvitation 对象。
 */
- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationReceivedByPeer:(ARtmLocalInvitation * _Nonnull)localInvitation;

/**
 被叫已接受呼叫邀请。

 @param callKit 一个 ARtmCallKit 对象。
 @param localInvitation 一个 ARtmLocalInvitation 对象。
 @param response 被叫设置的响应信息。
 */
- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationAccepted:(ARtmLocalInvitation * _Nonnull)localInvitation withResponse:(NSString * _Nullable) response;

/**
 被叫已拒绝呼叫邀请。

 @param callKit 一个 ARtmCallKit 对象。
 @param localInvitation 一个 ARtmLocalInvitation 对象。
 @param response 被叫设置的响应信息。
 */
- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationRefused:(ARtmLocalInvitation * _Nonnull)localInvitation withResponse:(NSString * _Nullable) response;

/**
 呼叫邀请已被取消。

 @param callKit 一个 ARtmCallKit 对象。
 @param localInvitation 一个ARtmLocalInvitation 对象。
 */
- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationCanceled:(ARtmLocalInvitation * _Nonnull)localInvitation;

/**
 呼叫邀请发送失败。

 @param callKit 一个 ARtmCallKit 对象。
 @param localInvitation 一个 ARtmLocalInvitation 对象。
 @param errorCode 错误码。详见 ARtmLocalInvitationErrorCode 。
 */
- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationFailure:(ARtmLocalInvitation * _Nonnull)localInvitation errorCode:(ARtmLocalInvitationErrorCode)errorCode;

/**
 收到一个呼叫邀请。

 @param callKit 一个 ARtmCallKit 对象。
 @param remoteInvitation 一个 ARtmRemoteInvitation 对象。
 */
- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationReceived:(ARtmRemoteInvitation * _Nonnull)remoteInvitation;

/**
 拒绝呼叫邀请成功。

 @param callKit 一个 ARtmCallKit 对象。
 @param remoteInvitation 一个 ARtmRemoteInvitation 对象。
 */
- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationRefused:(ARtmRemoteInvitation * _Nonnull)remoteInvitation;

/**
 接受呼叫邀请成功。

 @param callKit 一个 ARtmCallKit 对象。
 @param remoteInvitation 一个 ARtmRemoteInvitation 对象。
 */
- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationAccepted:(ARtmRemoteInvitation * _Nonnull)remoteInvitation;

/**
 主叫已取消呼叫邀请。

 @param callKit 一个 ARtmCallKit 对象。
 @param remoteInvitation 一个 ARtmRemoteInvitation 对象。
 */
- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationCanceled:(ARtmRemoteInvitation * _Nonnull)remoteInvitation;

/**
 来自对端的邀请失败。

 @param callKit 一个 ARtmCallKit 对象。
 @param remoteInvitation 一个 ARtmRemoteInvitation 对象。
 @param errorCode 错误码。详见 ARtmRemoteInvitationErrorCode 。
 */
- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationFailure:(ARtmRemoteInvitation * _Nonnull)remoteInvitation errorCode:(ARtmRemoteInvitationErrorCode) errorCode;

@end


#endif /* ARtmDelegate_h */
