//
//  ARtmObjects.h
//  ARtmKit
//
//  Created by 余生丶 on 2020/6/11.
//  Copyright © 2020 AR. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ARtmDelegate.h"
#import "ARtmEnumerates.h"

@class ARtmKit;
@class ARtmMember;

/**
提供频道消息或点对点文本消息相关属性的数据结构。
 */
__attribute__((visibility("default"))) @interface ARtmMessage: NSObject

/**
 消息类别。详见 ARtmMessageType 。当前仅支持文本消息。
 */
@property (nonatomic, assign, readonly) ARtmMessageType type;

/**
 文本消息内容。最大长度不得超过 32 KB。
 */
@property (nonatomic, copy, nonnull) NSString *text;

/**
 消息服务器接收到消息的时间戳（毫秒）。
 
**NOTE**
 
 * 你不能设置时间戳，但是你可以从该时间戳推断出消息的大致发送时间。
 * 时间戳的精度为秒级。仅用于展示，不建议用于消息的严格排序。
 */
@property (nonatomic, assign, readonly) long long serverReceivedTs;

/**
 （仅适用于点对点消息）消息接收者检查消息是否在服务端被保存过。
 
 * YES: 被保存过（消息服务器保存了该条消息且在对端重新上线后重新发送成功）。
 * NO: 未被保存过。
 
**NOTE**
 
 * 如果消息没有被消息服务器保存过，该方法将返回 NO。也就是说：只有当消息发送者通过设置 enableOfflineMessaging=YES 发送离线消息且在发送离线消息时对端不在线，对端重新上线后调用该方法会返回 YES。
 * 目前我们只为每个接收端保存 200 条离线消息最长七天。当保存的离线消息超出限制时，最老的信息将会被最新的消息替换。
 */
@property (nonatomic, assign, readonly) BOOL isOfflineMessage;

/**
 创建一个 ARtmMessage 文本消息实例。

 @param text 文本消息内容，必须为小于 32 KB 的字符串。

 @return 一个 ARtmMessage 文本消息实例。

 */
- (instancetype _Nonnull)initWithText:(NSString * _Nonnull)text;

@end

/**
 消息发送选项。
 */
__attribute__((visibility("default"))) @interface ARtmSendMessageOptions: NSObject

/**
 是否设置为离线消息。
 
 * YES: 将该消息设为离线消息
 * NO: （默认）不将该消息设为离线消息。
 
**NOTE**
 
 本设置仅适用于点对点消息，不适用于频道消息。
 */
@property (nonatomic, assign) BOOL enableOfflineMessaging;

/**
 是否保存为历史消息。
 
 * YES: 将该消息保存为历史消息。
 * NO: （默认）不将该消息保存为历史消息。
 */
@property (nonatomic, assign) BOOL enableHistoricalMessaging;

@end


/**
ar云平台 RTM 频道成员的属性。
 */
__attribute__((visibility("default"))) @interface ARtmMember: NSObject

/**
该频道成员的用户 ID。
 */
@property (nonatomic, copy, nonnull) NSString *uid;

/**
所属频道的 ID。
 */
@property (nonatomic, copy, nonnull) NSString *channelId;

@end

/**
 表明用户在线状态的数据结构。
 */
__attribute__((visibility("default"))) @interface ARtmPeerOnlineStatus: NSObject

/**
 指定用户的用户 ID。
 */
@property (nonatomic, copy, nonnull) NSString *peerId;

/**
 指定用户的在线状态。详见 ARtmPeerOnlineState 。
 
**NOTE**
 * 如果你是查询指定用户的在线状态 (queryPeersOnlineStatus)，我们的后台服务器并不会返回 unreachable 状态。详见 ARtmSubscriptionRequestBlock 回调。
 * 如果你是订阅指定用户的在线状态 (subscribePeersOnlineStatus)，我们的后台服务器则可能返回 unreachable 状态。详见 PeersOnlineStatusChanged 回调。
 
 */
@property (nonatomic, assign, readonly) ARtmPeerOnlineState state;

@end

/**
 用于维护 RTM 属性的数据结构。
 */
__attribute__((visibility("default"))) @interface ARtmAttribute: NSObject

/**
 属性名。必须为可见字符且长度不得超过 32 字节。
 */
@property (nonatomic, copy, nonnull) NSString *key;

/**
 属性值。长度不得超过 8 KB。
 */
@property (nonatomic, copy, nonnull) NSString *value;

@end

/**
 用于维护频道最新成员人数的数据结构。
 */
__attribute__((visibility("default"))) @interface ARtmChannelMemberCount: NSObject

/**
 频道 ID（频道名）。
 */
@property (nonatomic, copy, nonnull) NSString *channelId;

/**
 频道最新成员人数。
 
**NOTE**
 如果不能找到指定的 channelId ， count 将显示为 0。
 */
@property (nonatomic, assign) int count;

@end

/**
 用于设置或获取频道属性的数据结构。
 */
__attribute__((visibility("default"))) @interface ARtmChannelAttribute: NSObject

/**
 频道属性的属性名。必须为可见字符且长度不得超过 32 字节。
 */
@property (nonatomic, copy, nonnull) NSString *key;

/**
 频道属性的属性值。长度不得超过 8 KB。
 */
@property (nonatomic, copy, nonnull) NSString *value;

/**
 最近一次更新频道属性用户的 ID。
 */
@property (nonatomic, copy, nonnull) NSString *lastUpdateUid;

/**
 频道属性最近一次更新的时间戳（毫秒）。
 */
@property (nonatomic, assign, readonly) long long lastUpdateTs;

@end

/**
 频道属性操作相关选项
 */
__attribute__((visibility("default"))) @interface ARtmChannelAttributeOptions: NSObject

/**
 是否通知所有频道成员本次频道属性变更。
 
**NOTE**
 
 该标志位仅对本次 API 调用有效。
 
 * YES: 通知所有频道成员本次频道属性变更。
 * NO: (默认) 不通知所有频道成员本次频道属性变更。
 */
@property (nonatomic, assign) BOOL enableNotificationToChannelMembers;

@end

/**
 用于主叫的呼叫邀请内容。
 */
__attribute__((visibility("default"))) @interface ARtmLocalInvitation: NSObject

/**
 被叫的用户 ID。
 */
@property (nonatomic, copy, nonnull) NSString *calleeId;

/**
 主叫设置的呼叫邀请内容。
 */
@property (nonatomic, copy, nullable) NSString *content;

/**
 被叫设置的呼叫邀请响应。
 */
@property (nonatomic, copy, nullable, readonly) NSString *response;

/**
 频道 ID。
 */
@property (nonatomic, copy, nullable) NSString *channelId;

/**
 呼叫邀请的状态。详见： ARtmLocalInvitationState 。
 */
@property (nonatomic, assign, readonly) ARtmLocalInvitationState state;

/**
 初始化一个 ARtmLocalInvitation 对象。

 @param calleeId 被叫的用户 ID。
 @return ARtmLocalInvitation 对象。
 */
- (instancetype _Nonnull)initWithCalleeId: (NSString * _Nonnull) calleeId;

@end

/** 用于被叫方的呼叫邀请内容。*/
__attribute__((visibility("default"))) @interface ARtmRemoteInvitation: NSObject

/** 主叫的用户 ID。 */
@property (nonatomic, copy, nonnull, readonly) NSString *callerId;

/** 主叫设置的呼叫邀请内容。 */
@property (nonatomic, copy, nullable, readonly) NSString *content;

/** 被叫设置的呼叫邀请响应。 */
@property (nonatomic, copy, nullable) NSString *response;

/** 频道 ID。*/
@property (nonatomic, copy, nullable, readonly) NSString *channelId;

/** 呼叫邀请状态。详见 ARtmRemoteInvitationState 。 */
@property (nonatomic, assign, readonly) ARtmRemoteInvitationState state;

@end
