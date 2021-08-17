//
//  ARtmKit.h
//  ARtmKit
//
//  Created by 余生丶 on 2020/6/10.
//  Copyright © 2020 AR. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ARtmDelegate.h"
#import "ARtmObjects.h"
#import "ARtmEnumerates.h"

/**
 RTM 的呼叫邀请相关方法。
 */
@class ARtmCallKit;

/**
RTM 的频道相关方法。
*/
@class ARtmChannel;


/**-----------------------------------------------------------------------------
* @name  typedef about  ARtmKit
* -----------------------------------------------------------------------------
*/

/**
 返回 loginByToken 方法的调用结果。errorCode: 登录错误码，详见 ARtmLoginErrorCode 。
 */
typedef void (^ARtmLoginBlock)(ARtmLoginErrorCode errorCode);

/**
 返回 logoutWithCompletion 方法的调用结果。errorCode: 登出错误码，详见 ARtmLogoutErrorCode 。
 */
typedef void (^ARtmLogoutBlock)(ARtmLogoutErrorCode errorCode);

/**
 返回 renewToken 方法的调用结果。
 * token: 新的 Token。
 * errorCode: 错误码。详见 ARtmRenewTokenErrorCode 。
 */
typedef void (^ARtmRenewTokenBlock)(NSString * _Nullable token, ARtmRenewTokenErrorCode errorCode);

/**
 返回 sendMessage 方法的调用结果。
 * errorCode: 点对点消息发送错误码，详见 ARtmSendPeerMessageErrorCode 。
 */
typedef void (^ARtmSendPeerMessageBlock)(ARtmSendPeerMessageErrorCode errorCode);

/**
    返回 queryPeersOnlineStatus 方法的调用结果。
 * peerOnlineStatus: 用户在线状态列表。单元结构详见 ARtmPeerOnlineStatus 。
 * errorCode: 错误码。详见 ARtmQueryPeersOnlineErrorCode 。
 */
typedef void (^ARtmQueryPeersOnlineBlock)(NSArray<ARtmPeerOnlineStatus *> * _Nullable peerOnlineStatus, ARtmQueryPeersOnlineErrorCode errorCode);

/**
 返回 setLocalUserAttributes 方法的调用结果。
 errorCode: 错误码。详见 ARtmProcessAttributeErrorCode 。
 */
typedef void (^ARtmSetLocalUserAttributesBlock)(ARtmProcessAttributeErrorCode errorCode);

/**
 返回 addOrUpdateLocalUserAttributes 方法的调用结果。
 errorCode: 错误码。详见 ARtmProcessAttributeErrorCode 。
 */
typedef void (^ARtmAddOrUpdateLocalUserAttributesBlock)(ARtmProcessAttributeErrorCode errorCode);

/**
 返回 deleteLocalUserAttributesByKeys 方法的调用结果。
 errorCode: 错误码。详见 ARtmProcessAttributeErrorCode 。
 */
typedef void (^ARtmDeleteLocalUserAttributesBlock)(ARtmProcessAttributeErrorCode errorCode);

/**
 返回 clearLocalUserAttributesWithCompletion 方法的调用结果。
 errorCode: 错误码。详见 ARtmProcessAttributeErrorCode 。
 */
typedef void (^ARtmClearLocalUserAttributesBlock)(ARtmProcessAttributeErrorCode errorCode);

/**
 返回 getUserAttributes 或 getUserAttributes 方法的调用结果。
 * attributes: 返回的属性数组。详见 ARtmAttribute 。
 * uid: 指定用户的用户 ID。
 * errorCode: 错误码。详见 ARtmProcessAttributeErrorCode 。
 */
typedef void (^ARtmGetUserAttributesBlock)(NSArray< ARtmAttribute *> * _Nullable attributes, NSString * _Nonnull uid, ARtmProcessAttributeErrorCode errorCode);

/**
 返回 getChannelMemberCount 方法的调用结果。
 * channelMemberCounts: 返回的频道最新成员人数数组。详见 ARtmChannelMemberCount 。
 * errorCode: 错误码。详见 ARtmChannelMemberCountErrorCode 。
 */
typedef void (^ARtmChannelMemberCountBlock)(NSArray<ARtmChannelMemberCount *> * _Nullable channelMemberCounts, ARtmChannelMemberCountErrorCode errorCode);

/**
 返回 setChannelAttributes 方法的调用结果。
 * errorCode: 错误码。详见 ARtmProcessAttributeErrorCode 。
*/
typedef void (^ARtmSetChannelAttributesBlock)(ARtmProcessAttributeErrorCode errorCode);

/**
 返回 addOrUpdateChannel 方法的调用结果。
 * errorCode: 错误码。详见 ARtmProcessAttributeErrorCode 。
*/
typedef void (^ARtmAddOrUpdateChannelAttributesBlock)(ARtmProcessAttributeErrorCode errorCode);

/**
 返回 deleteChannel 方法的调用结果。
 * errorCode: 错误码。详见 ARtmProcessAttributeErrorCode 。
*/
typedef void (^ARtmDeleteChannelAttributesBlock)(ARtmProcessAttributeErrorCode errorCode);

/**
 返回 clearChannel 方法的调用结果。
 * errorCode: 错误码。详见 ARtmProcessAttributeErrorCode 。
*/
typedef void (^ARtmClearChannelAttributesBlock)(ARtmProcessAttributeErrorCode errorCode);

/**
 返回 getChannelAllAttributes 方法的调用结果。
 * attributes: 返回频道属性数组。详见 ARtmChannelAttribute 。
 * errorCode: 错误码。详见 ARtmProcessAttributeErrorCode 。
 */
typedef void (^ARtmGetChannelAttributesBlock)(NSArray< ARtmChannelAttribute *> * _Nullable attributes, ARtmProcessAttributeErrorCode errorCode);

/**
 返回 subscribePeersOnlineStatus 或 unsubscribePeersOnlineStatus 方法的调用结果。
 errorCode: 详见 ARtmPeerSubscriptionStatusErrorCode 。
 */
typedef void (^ARtmSubscriptionRequestBlock)(ARtmPeerSubscriptionStatusErrorCode errorCode);

/**
 返回 queryPeersBySubscriptionOption 方法的调用结果。
 * peers：订阅用户id数组。
 * errorCode: 详见 ARtmQueryPeersBySubscriptionOptionErrorCode 。
 */
typedef void (^ARtmQueryPeersBySubscriptionOptionBlock)(NSArray<NSString *> * _Nullable peers, ARtmQueryPeersBySubscriptionOptionErrorCode errorCode);

/**-----------------------------------------------------------------------------
* @name  typedef about  ARtmChannel
* -----------------------------------------------------------------------------
*/

/**
 返回调用 joinWithCompletion 方法后返回。
 errorCode: 通过 ARtmJoinChannelBlock 回调返回用户加入频道的结果，详见 ARtmJoinChannelErrorCode 。
 */
typedef void (^ARtmJoinChannelBlock)(ARtmJoinChannelErrorCode errorCode);

/**
 调用 leaveWithCompletion 方法后返回。
 errorCode: 通过 ARtmLeaveChannelBlock 回调返回用户离开频道的结果，详见 ARtmLeaveChannelErrorCode 。
 */
typedef void (^ARtmLeaveChannelBlock)(ARtmLeaveChannelErrorCode errorCode);

/** 调用 sendMessage 方法后返回。
 errorCode: 通过 ARtmSendChannelMessageBlock 回调返回发送频道消息的结果，详见 ARtmSendChannelMessageErrorCode 。
*/
typedef void (^ARtmSendChannelMessageBlock)(ARtmSendChannelMessageErrorCode errorCode);

/**
 调用 getMembersWithCompletion 方法后返回。
 * members: 频道内用户列表。详见 ARtmMember 。
 * errorCode: 获取频道成员列表的相关错误码，详见 ARtmGetMembersErrorCode 。
*/
typedef void (^ARtmGetMembersBlock)(NSArray< ARtmMember *> * _Nullable members, ARtmGetMembersErrorCode errorCode);

/**-----------------------------------------------------------------------------
* @name  typedef about  ARtmCallKit
* -----------------------------------------------------------------------------
*/

/**
 返回 sendLocalInvitation 方法的调用结果。
 errorCode: 详见 ARtmInvitationApiCallErrorCode 。
 */
typedef void (^ARtmLocalInvitationSendBlock)(ARtmInvitationApiCallErrorCode errorCode);

/**
 返回 cancelLocalInvitation 方法的调用结果。
 errorCode: 详见 ARtmInvitationApiCallErrorCode 。
 */
typedef void (^ARtmLocalInvitationCancelBlock)(ARtmInvitationApiCallErrorCode errorCode);

/**
 返回 acceptRemoteInvitation 方法的调用结果。
 errorCode: 详见 ARtmInvitationApiCallErrorCode 。
 */
typedef void (^ARtmRemoteInvitationAcceptBlock)(ARtmInvitationApiCallErrorCode errorCode);

/**
 返回 refuseRemoteInvitation 方法的调用结果。
 errorCode: 详见 ARtmInvitationApiCallErrorCode 。
 */
typedef void (^ARtmRemoteInvitationRefuseBlock)(ARtmInvitationApiCallErrorCode errorCode);


/**
 ar云平台 RTM  频道方法。
 */
__attribute__((visibility("default"))) @interface ARtmChannel: NSObject

/**
 ARtmKit 实例。
 */
@property (atomic, readonly, nonnull) ARtmKit *kit;

/**
 ARtmChannelDelegate 接口类向 App 发送回调通知，上报运行时的频道相关事件。
 */
@property (nonatomic, weak, nullable) id<ARtmChannelDelegate> channelDelegate;

/**
 加入频道。

**NOTE**
 
 同一用户只能同时加入最多 20 个频道。加入频道超限时用户会收到错误码 ARtmJoinChannelErrorExceedLimit 。

 * ARtmJoinChannelBlock 回调返回本方法的调用结果。
 * 加入频道成功后，频道内的所有远端用户收到 memberJoined 回调。

@param completionBlock 同一用户只能同时加入最多 20 个频道。加入频道超限时用户会收到错误码 ARtmJoinChannelErrorExceedLimit 。
 */
- (void)joinWithCompletion:(ARtmJoinChannelBlock _Nullable)completionBlock;

/**
 离开频道。

 * ARtmLeaveChannelBlock 回调返回本方法的调用结果。
 * 成功离开频道后，频道内的所有远端用户收到 memberLeft 回调。

 @param completionBlock ARtmLeaveChannelBlock 回调返回本方法的调用结果。错误码详见 ARtmLeaveChannelErrorCode 。
 */
- (void)leaveWithCompletion:(ARtmLeaveChannelBlock _Nullable)completionBlock;

/**
 发送频道消息。
 
 * ARtmSendChannelMessageBlock 回调回本方法的调用结果。
 * 消息发送成功后，频道内的所有远端用户收到 messageReceived 回调。
 
**NOTE**
 
 消息（包括频道消息和点对点消息）的最高发送频率为 60 次／秒。
 
 @param message 发送的消息内容。详见 ARtmMessage 。
 @param options 消息发送选项。详见 ARtmSendMessageOptions 。
 @param completionBlock ARtmSendChannelMessageBlock 回调返回方法的调用结果。错误码详见 ARtmSendChannelMessageErrorCode 。
 */
- (void)sendMessage:(ARtmMessage * _Nonnull)message
 sendMessageOptions:(ARtmSendMessageOptions* _Nonnull)options
         completion:(ARtmSendChannelMessageBlock _Nullable)completionBlock;

/**
 获取频道成员列表。
 
**NOTE**
 
 该方法的调用频率上限为每 2 秒 5 次。

 @param completionBlock ARtmGetMembersBlock 回调返回本方法的调用结果（频道成员列表）。错误码详见 ARtmGetMembersErrorCode 。
 */
- (void)getMembersWithCompletion:(ARtmGetMembersBlock _Nullable)completionBlock;

@end

@interface ARtmCallKit : NSObject

/**
 ARtmKit 对象。
 */
@property (atomic, readonly, weak, nullable) ARtmKit *rtmKit;

/**
 ARtmCallDelegate 接口类用于向 App 返回回调通知。
 */
@property (nonatomic, weak, nullable) id<ARtmCallDelegate > callDelegate;

/**
 发送呼叫邀请给对端。

 @param localInvitation 一个 ARtmLocalInvitation 对象。
 @param completion 一个 ARtmLocalInvitationSendBlock 对象。

 * 方法调用成功:
    * 主叫收到 ARtmLocalInvitationSendBlock 对象里的 ARtmInvitationApiCallErrorOk 错误码和 localInvitationReceivedByPeer 回调.
    * 被叫收到 remoteInvitationReceived 回调。
 * 方法调用失败: 主叫收到 ARtmLocalInvitationSendBlock 对象返回的错误码。 详见 ARtmInvitationApiCallErrorCode 。
 */
- (void)sendLocalInvitation:(ARtmLocalInvitation * _Nonnull)localInvitation completion:(ARtmLocalInvitationSendBlock _Nullable)completion;

/**
 取消给对方的呼叫邀请。

 @param localInvitation 一个 ARtmLocalInvitation 对象。
 @param completion 一个 ARtmLocalInvitationCancelBlock 对象。

 * 方法调用成功:
    * 主叫收到 ARtmLocalInvitationCancelBlock 对象里的 ARtmInvitationApiCallErrorOk 错误码和 localInvitationCanceled 回调.
    * 被叫收到 remoteInvitationCanceled 回调。
 * 方法调用失败: 主叫收到 ARtmLocalInvitationCancelBlock 对象返回的错误码。 详见 ARtmInvitationApiCallErrorCode 。
 */
- (void)cancelLocalInvitation:(ARtmLocalInvitation * _Nonnull)localInvitation completion:(ARtmLocalInvitationCancelBlock _Nullable)completion;

/**
 接受来自对方的呼叫邀请。

 @param remoteInvitation 一个 ARtmRemoteInvitation 对象。
 @param completion 一个 ARtmRemoteInvitationAcceptBlock 对象。

 * 方法调用成功:
    * 主叫收到 ARtmRemoteInvitationAcceptBlock 对象里的 ARtmInvitationApiCallErrorOk 错误码和 localInvitationAccepted 回调.
    * 被叫收到 remoteInvitationAccepted 回调。
 * 方法调用失败: 主叫收到 ARtmRemoteInvitationAcceptBlock 对象返回的错误码。 详见 ARtmInvitationApiCallErrorCode 。
 */
- (void)acceptRemoteInvitation:(ARtmRemoteInvitation * _Nonnull)remoteInvitation completion:(ARtmRemoteInvitationAcceptBlock _Nullable)completion;

/**
 拒绝来自对方的呼叫邀请。

 @param remoteInvitation 一个 ARtmRemoteInvitation 对象。
 @param completion 一个 ARtmRemoteInvitationRefuseBlock 对象。

 * 方法调用成功:
    * 主叫收到 ARtmRemoteInvitationRefuseBlock 对象里的 ARtmInvitationApiCallErrorOk 错误码和 localInvitationRefused 回调。
    * 被叫收到 remoteInvitationRefused 回调。
 * 方法调用失败: 主叫收到 ARtmRemoteInvitationRefuseBlock 对象返回的错误码。 详见 ARtmInvitationApiCallErrorCode 。
 */
- (void)refuseRemoteInvitation:(ARtmRemoteInvitation * _Nonnull)remoteInvitation completion:(ARtmRemoteInvitationRefuseBlock _Nullable)completion;

@end


@interface ARtmKit : NSObject

/**
 ARtmDelegate 接口类向 App 发送回调通知，上报运行时的事件。
 */
@property (atomic, weak, nullable) id<ARtmDelegate> aRtmDelegate;

/**
 RTM 的呼叫邀请相关方法。
*/
@property (atomic, strong, nullable) ARtmCallKit *rtmCallKit;

/**
 创建并初始化一个 ARtmKit 实例。

 ar云平台 RTM SDK 支持多个 ARtmKit 实例。 ARtmKit 类的所有接口函数，除 destroyChannelWithId 方法以外，都是异步调用。

 @param appId 如果你的开发包里没有 App ID，请向ar云平台申请一个新的 App ID。

 @param delegate ARtmDelegate 向 App 发送回调通知，上报ar云平台 RTM SDK 运行时的事件。

 @return 调用成功：一个 ARtmKit 实例。调用失败：nil。可能是因为 appId 的长度不是 32 个字符。
 */
- (instancetype _Nullable)initWithAppId:(NSString * _Nonnull)appId
                              delegate:(id <ARtmDelegate> _Nullable)delegate;

/**
 登录 ar云平台 RTM 系统。
 
**NOTE**
 
 * 异地登录后之前的状态（目前主要是加入的频道）不会保留。
 * 该方法的调用频率为 2 次／秒。
 * 只有在调用本方法成功加入频道后（即收到 ARtmLoginErrorOk 错误码时）才可以调用 RTM 的核心业务逻辑。以下方法除外
 
  * createChannelWithId
  * initWithText
  * getRtmCallKit
  * initWithCalleeId

 App 调用此方法后，本地用户收到 connectionStateChanged 回调，连接状态变为 ARtmConnectionStateConnecting 。

 * 如果此方法调用成功，本地用户收到 ARtmLoginBlock 和 connectionStateChanged 回调，连接状态变为 ARtmConnectionStateConnected 。
 * 如果此方法调用失败，本地用户收到 ARtmLoginBlock 和 connectionStateChanged 回调，连接状态变为 ARtmConnectionStateDisconnected 。

 @param token 用于登录 ar云平台 RTM 系统的动态密钥。开启动态鉴权后可用。集成及测试阶段请将 token 设置为 nil 。

 @param uid 登录 ar云平台 RTM 系统的用户 ID。 uid 必须为不超过 64 字节的字符串。请不要将 uid 设为空、 nil 或 “null"。

 以下为支持的字符集范围：
 * 26个小写英文字母 a-z
 * 26个大写英文字母 A-Z
 * 10个数字 0-9
 * 空格 和 “!”, “#”, “$”, “%”, “&”, “(”, “)”, “+”, “-”, “:”, “;”, “<”, “=”, “.”, “>”, “?”, “@”, “[”, “]”, “^”, “_”, “ {”, “}”, “|”, “~”, “,”
 
 @param completionBlock ARtmLoginBlock 回调返回登录结果。错误码详见 ARtmLoginErrorCode 。

 */
- (void)loginByToken:(NSString * _Nullable)token
                user:(NSString * _Nonnull)uid
          completion:(ARtmLoginBlock _Nullable)completionBlock;

/**
 登出 ar云平台 RTM 系统。

 * 如果此方法调用成功，本地用户收到 ARtmLogoutBlock 和 connectionStateChanged 回调，连接状态变为 ARtmConnectionStateDisconnected。
 * 如果此方法调用失败，本地用户收到 ARtmLoginBlock 回调。

 @param completionBlock ARtmLogoutBlock 回调返回登出结果。错误码详见 ARtmLogoutErrorCode 。
 */
- (void)logoutWithCompletion:(ARtmLogoutBlock _Nullable )completionBlock;

/**
 更新当前的 RTM Token。
 
 在收到 rtmKitTokenDidExpire 回调时你需要调用此方法更新 Token。 ARtmRenewTokenBlock 回调会返回 Token 更新的结果。该方法的调用频率为 2 次／秒。
 
 @param token 新的 RTM Token。
 @param completionBlock ARtmRenewTokenBlock 回调返回更新当前 Token 的结果。
 
 * token: 新的 RTM Token。
 * errorCode: 错误码。详见 ARtmRenewTokenErrorCode 。
*/
- (void)renewToken:(NSString * _Nonnull)token completion:(ARtmRenewTokenBlock _Nullable)completionBlock;

/**
 向指定用户发送点对点消息或点对点的离线消息。
 
 该方法允许你向离线用户发送点对点消息。如果指定用户在你发送离线消息时不在线，消息服务器会保存该条消息。请注意，目前我们只为每个接收端保存 200 条离线消息最长七天。当保存的离线消息超出限制时，最老的信息将会被最新的消息替换。
 
**NOTE**
 消息（频道消息和点对点消息一并计算在内）的最高发送频率为 60 次／秒。
 * 如果此方法调用成功，本地用户收到 ARtmSendPeerMessageBlock 回调。对端用户收到 messageReceived 回调。
 * 如果此方法调用失败，本地用户收到 ARtmSendPeerMessageBlock 回调和错误码。
 
 @param message 消息内容。如何创建消息详见 ARtmMessage 。
 @param peerId 消息接收者的用户 ID。peerId 必须为不超过 64 字节的字符串。
 
 以下为支持的字符集范围：
 * 26个小写英文字母 a-z
 * 26个大写英文字母 A-Z
 * 10个数字 0-9
 * 空格
 * "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ","
 
**NOTE**
 
 请不要将 uid 设为空、 nil 或 “null"。
 
 @param options 消息发送选项。详见 ARtmSendMessageOptions 。
 @param completionBlock ARtmSendPeerMessageBlock 回调返回发送点对点消息的结果。错误码详见 ARtmSendPeerMessageErrorCode 。
 */
- (void)sendMessage:(ARtmMessage * _Nonnull)message
             toPeer:(NSString * _Nonnull)peerId
 sendMessageOptions:(ARtmSendMessageOptions * _Nonnull)options
         completion:(ARtmSendPeerMessageBlock _Nullable)completionBlock;

/**
 创建一个 ar云平台 RTM 频道。

**NOTE**
 
 一个 ARtmKit 实例中可以创建多个频道，但是同一个用户只能同时加入最多 20 个频道。请在不使用某个频道时，调用 destroyChannelWithId 方法销毁频道实例。

 @param channelId 标识 ar云平台 RTM 通话的频道名称。channelId 必须为不超过 64 字节的字符串，不能为空、nil，或设为 “null"。
 
 以下为支持的字符集范围：
 * 26个小写英文字母 a-z
 * 26个大写英文字母 A-Z
 * 10个数字 0-9
 * 空格
 * "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ","

 @param delegate ARtmChannelDelegate 接口类向 App 发送回调通知，上报运行时的频道相关事件。

 @return 调用成功：一个 ARtmChannel 实例。调用失败：nil。可能是因为 channelId 无效，channelId 已存在。

*/
- (ARtmChannel * _Nullable)createChannelWithId:(NSString * _Nonnull)channelId
                                    delegate:(id <ARtmChannelDelegate> _Nullable)delegate;

/**
  释放一个 ARtmChannel 本地频道占用的所有资源。
 
**NOTE**
 
 请不要在任何回调中调用该方法。

 @param channelId 待释放的频道实例的 ID。
 
 @return YES方法调用成功，NO方法调用失败。
*/
- (BOOL)destroyChannelWithId: (NSString * _Nonnull) channelId;

/**
 获取一个 ARtmCallKit 实例。

 @return 一个 ARtmCallKit 实例。
 */
- (ARtmCallKit * _Nullable)getRtmCallKit;

/**
 查询指定用户的在线状态。

 * 在线：用户已登录到 ar云平台 RTM 系统。
 * 不在线：用户已登出 ar云平台 RTM 系统或因其他原因与 ar云平台 RTM 系统断开连接。

 @param peerIds 待查的用户 ID 列表。
 @param completionBlock 通过 ARtmQueryPeersOnlineBlock 回调返回发送点对点消息的结果，
 
 * peerOnlineStatus: 用户在线状态列表。单元结构详见 ARtmPeerOnlineStatus 。
 * errorCode: 错误码。详见 ARtmQueryPeersOnlineErrorCode 。
*/
- (void)queryPeersOnlineStatus: (NSArray<NSString*> * _Nonnull) peerIds completion:(ARtmQueryPeersOnlineBlock _Nullable)completionBlock;

/**
 全量设置本地用户的属性。
 
 setLocalUserAttributes 、 addOrUpdateLocalUserAttributes 、 deleteLocalUserAttributesByKeys ，和 clearLocalUserAttributes 一并计算在内：调用频率限制为每 5 秒 10 次。
 
 @param attributes 待设置的属性。详见 ARtmAttribute 。
 @param completionBlock 通过ARtmSetLocalUserAttributesBlock 回调返回方法调用的结果。
 */
- (void)setLocalUserAttributes:(NSArray< ARtmAttribute *> * _Nullable) attributes
                    completion:(ARtmSetLocalUserAttributesBlock _Nullable)completionBlock;

/**
 添加或更新本地用户的属性。
 
 setLocalUserAttributes 、 addOrUpdateLocalUserAttributes 、 deleteLocalUserAttributesByKeys ，和 clearLocalUserAttributes 一并计算在内：调用频率限制为每 5 秒 10 次。
 
 @param attributes 待增加或更新的属性。详见 ARtmAttribute 。
 @param completionBlock 通过 ARtmAddOrUpdateLocalUserAttributesBlock 回调返回方法调用的结果。
 */
- (void)addOrUpdateLocalUserAttributes:(NSArray< ARtmAttribute *> * _Nullable) attributes
                            completion:(ARtmAddOrUpdateLocalUserAttributesBlock _Nullable)completionBlock;

/**
 删除本地用户的指定属性。
 
 setLocalUserAttributes 、 addOrUpdateLocalUserAttributes 、 deleteLocalUserAttributesByKeys ，和 clearLocalUserAttributes 一并计算在内：调用频率限制为每 5 秒 10 次。
 
 @param attributeKeys 属性名数组。
 @param completionBlock 通过 ARtmDeleteLocalUserAttributesBlock 回调返回方法调用的结果。
 */
- (void)deleteLocalUserAttributesByKeys:(NSArray< NSString *> * _Nullable) attributeKeys
                       completion:(ARtmDeleteLocalUserAttributesBlock _Nullable)completionBlock;

/**
 清空本地用户的属性。
 
 setLocalUserAttributes 、 addOrUpdateLocalUserAttributes 、 deleteLocalUserAttributesByKeys ，和 clearLocalUserAttributes 一并计算在内：调用频率限制为每 5 秒 10 次。
 
 @param completionBlock 通过 ARtmClearLocalUserAttributesBlock 回调返回方法调用的结果。
 */
- (void)clearLocalUserAttributesWithCompletion:(ARtmClearLocalUserAttributesBlock _Nullable)completionBlock;

/**
 获取指定用户的全部属性。
 
 getUserAllAttributes 和 getUserAttributesByKeys 一并计算在内：调用频率限制为每 5 秒 40 次。
 
 @param uid 指定用户的用户 ID。
 @param completionBlock 通过 ARtmGetUserAttributesBlock 回调返回方法调用的结果。
 */
- (void)getUserAllAttributes:(NSString * _Nonnull )uid
                  completion:(ARtmGetUserAttributesBlock _Nullable)completionBlock;

/**
获取指定用户指定属性名的属性。

getUserAllAttributes 和 getUserAttributesByKeys 一并计算在内：调用频率限制为每 5 秒 40 次。

@param uid 指定用户的用户 ID。
@param attributeKeys 属性名数组。
@param completionBlock 通过 ARtmGetUserAttributesBlock 回调返回方法调用的结果。
*/
- (void)getUserAttributes:(NSString * _Nonnull )uid
                   ByKeys:(NSArray< NSString *> * _Nullable)attributeKeys
               completion:(ARtmGetUserAttributesBlock _Nullable)completionBlock;

/**
 查询单个或多个频道的成员人数。
 
**NOTE**
 
 * 该方法的调用频率上限为每秒 1 次。
 * 不支持一次查询超过 32 个频道的成员人数。

 @param channelIds 指定频道名数组。
 @param completionBlock ARtmChannelMemberCountBlock 回调返回方法调用的结果。
 */
- (void)getChannelMemberCount:(NSArray<NSString*> * _Nonnull)channelIds completion:(ARtmChannelMemberCountBlock _Nullable)completionBlock;

/**
 全量设置某指定频道的属性。
 
 * 你无需加入指定频道即可为该频道设置频道属性。
 * 当某频道处于空频道状态（无人状态）数分钟后，该频道的频道属性将被清空。
 * 如果存在多个用户有权限修改频道属性，那么我们建议在修改频道属性前先通过调用 getChannelAttributes 方法更新本地频道属性缓存。
 * setChannelAttributes 、 addOrUpdateChannelAttributes 、 deleteChannelAttributesByKeys ，和 clearChannelAttributes 一并计算在内：调用频率限制为每 5 秒 10 次。

 @param channelId 该指定频道的频道 ID。
 @param attributes 频道属性数组。详见 ARtmChannelAttribute 。
 @param options 频道属性操作选项。详见 ARtmChannelAttributeOptions 。
 @param completionBlock ARtmSetLocalUserAttributesBlock 回调返回方法调用的结果。
 */
- (void)setChannel:(NSString * _Nonnull)channelId
        Attributes:(NSArray< ARtmChannelAttribute *> * _Nullable)attributes
           Options:(ARtmChannelAttributeOptions* _Nonnull)options
        completion:(ARtmSetChannelAttributesBlock _Nullable)completionBlock;

/**
 添加或更新某指定频道的属性。
 
 如果属性已存在，该方法更新该频道的已有属性；
 如果属性不存在，该方法增加该频道的属性。
 
 * 你无需加入指定频道即可为该频道更新频道属性。
 * 当某频道处于空频道状态（无人状态）数分钟后，该频道的频道属性将被清空。
 * 如果存在多个用户有权限修改频道属性，那么我们建议在修改频道属性前先通过调用 getChannelAttributes 方法更新本地频道属性缓存。
 * setChannelAttributes 、 addOrUpdateChannelAttributes 、 deleteChannelAttributesByKeys ，和 clearChannelAttributes 一并计算在内：调用频率限制为每 5 秒 10 次。

 @param channelId 该指定频道的频道 ID。
 @param attributes 频道属性数组。详见 ARtmChannelAttribute 。
 @param options 频道属性操作选项。详见 ARtmChannelAttributeOptions 。
 @param completionBlock ARtmAddOrUpdateLocalUserAttributesBlock 回调返回方法调用的结果。
 */
- (void)addOrUpdateChannel:(NSString* _Nonnull)channelId
                Attributes:(NSArray< ARtmChannelAttribute *> * _Nullable)attributes
                   Options:(ARtmChannelAttributeOptions* _Nonnull)options
                completion:(ARtmAddOrUpdateChannelAttributesBlock _Nullable)completionBlock;

/**
 删除某指定频道的指定属性。
 
 * 你无需加入指定频道即可删除该频道的属性。
 * 当某频道处于空频道状态（无人状态）数分钟后，该频道的频道属性将被清空。
 * 如果存在多个用户有权限修改频道属性，那么我们建议在修改频道属性前先通过调用 getChannelAttributes 方法更新本地频道属性缓存。
 * setChannelAttributes 、 addOrUpdateChannelAttributes 、 deleteChannelAttributesByKeys ，和 clearChannelAttributes 一并计算在内：调用频率限制为每 5 秒 10 次。

 @param channelId 该指定频道的频道 ID。
 @param attributeKeys 频道属性名数组。
 @param options 频道属性操作选项。详见 ARtmChannelAttributeOptions 。
 @param completionBlock ARtmDeleteLocalUserAttributesBlock 回调返回方法调用的结果。
 */
- (void)deleteChannel:(NSString* _Nonnull)channelId
     AttributesByKeys:(NSArray< NSString *> * _Nullable)attributeKeys
              Options:(ARtmChannelAttributeOptions* _Nonnull)options
           completion:(ARtmDeleteChannelAttributesBlock _Nullable)completionBlock;

/**
 清空某指定频道的属性。
 
 * 你无需加入指定频道即可清空该频道的属性。
 * setChannelAttributes 、 addOrUpdateChannelAttributes 、 deleteChannelAttributesByKeys ，和 clearChannelAttributes 一并计算在内：调用频率限制为每 5 秒 10 次。

 @param channelId 该指定频道的频道 ID。
 @param options 频道属性操作选项。详见 ARtmChannelAttributeOptions 。
 @param completionBlock ARtmClearLocalUserAttributesBlock 回调返回方法调用的结果。
 */
- (void)clearChannel:(NSString* _Nonnull)channelId
             Options:(ARtmChannelAttributeOptions* _Nonnull)options
    AttributesWithCompletion:(ARtmClearChannelAttributesBlock _Nullable)completionBlock;

/**
 查询某指定频道的全部属性。
 
 * 你无需加入指定频道即可查询该频道的属性。
 * getChannelAllAttributes 和 getChannelAttributesByKeys 一并计算在内：调用频率限制为每 5 秒 10 次。

 @param channelId 该指定频道的频道 ID。
 @param completionBlock ARtmGetUserAttributesBlock 回调返回方法调用的结果。
 */
- (void)getChannelAllAttributes:(NSString* _Nonnull)channelId
                     completion:(ARtmGetChannelAttributesBlock _Nullable)completionBlock;

/**
 查询某指定频道指定属性名的属性。
 
 * 你无需加入指定频道即可查询该频道的属性。
 * getChannelAllAttributes 和 getChannelAttributesByKeys 一并计算在内：调用频率限制为每 5 秒 10 次。

 @param channelId 该指定频道的频道 ID。
 @param attributeKeys 频道属性名数组。
 @param completionBlock ARtmGetUserAttributesBlock 回调返回方法调用的结果。
 */
- (void)getChannelAttributes:(NSString* _Nonnull)channelId
                      ByKeys:(NSArray< NSString *> * _Nullable) attributeKeys
                  completion:(ARtmGetChannelAttributesBlock _Nullable)completionBlock;

/**
 订阅指定单个或多个用户的在线状态。
 
 * 首次订阅成功后，SDK 会通过 PeersOnlineStatusChanged 回调返回被订阅用户在线状态。
 * 每当被订阅用户在线状态发生变化时，SDK 都会通过 PeersOnlineStatusChanged 回调通知订阅方。
 * 如果 SDK 在断线重连过程中有被订阅用户的在线状态发生改变，SDK 会在重连成功时通过 PeersOnlineStatusChanged 回调通知订阅方。
 
 **NOTE**
 
 * 用户登出 A RTM 系统后，所有之前的订阅内容都会被清空；重新登录后，如需保留之前订阅内容则需重新订阅。
 * SDK 会在网络连接中断时进入断线重连状态。重连成功时 SDK 会自动重新订阅之前订阅用户，无需人为干预。

 @param peerIds 待订阅用户的用户 ID 阵列。
 @param completionBlock ARtmSubscriptionRequestBlock 回调返回方法调用的结果。
 */
- (void)subscribePeersOnlineStatus: (NSArray<NSString*> * _Nonnull) peerIds completion:(ARtmSubscriptionRequestBlock _Nullable)completionBlock;

/**
 退订指定单个或多个用户的在线状态。
 
 @param peerIds 待退订用户的用户 ID 阵列。
 @param completionBlock ARtmSubscriptionRequestBlock 回调返回方法调用的结果。
 */
- (void)unsubscribePeersOnlineStatus: (NSArray<NSString*> * _Nonnull) peerIds completion:(ARtmSubscriptionRequestBlock _Nullable)completionBlock;

/**
 获取某特定内容被订阅的用户列表。
 
 @param option 被订阅的状态类型。详见 ARtmPeerSubscriptionOptions 。
 @param completionBlock ARtmQueryPeersBySubscriptionOptionBlock 回调返回方法调用的结果。
 */
- (void)queryPeersBySubscriptionOption: (ARtmPeerSubscriptionOptions) option completion:(ARtmQueryPeersBySubscriptionOptionBlock _Nullable)completionBlock;

/**
 通过 JSON 配置 SDK 提供技术预览或特别定制功能。

**NOTE**

 JSON 选项默认不公开。详情请联系hi@dync.cc。

 @param parameters JSON 格式的 SDK 选项。
 @return 0方法调用成功，<0方法调用失败
 */
- (int)setParameters:(NSString * _Nonnull)parameters;

/** 设置日志文件路径

设置 SDK 的输出 log 文件。SDK 运行时产生的所有 log 将写入该文件。 App 必须保证指定的目录存在而且可写。

**Note**

 - 日志文件的默认地址如下:
   - iOS: `App Sandbox/Library/caches/sdk.log`
   - macOS
     - 开启沙盒: `App Sandbox/Library/Logs/sdk.log`, 例如 `/Users/<username>/Library/Containers/<App Bundle Identifier>/Data/Library/Logs/sdk.log`.
     - 关闭沙盒: `～/Library/Logs/sdk.log`.
 - 如需调用本方法，请在调用 initWithAppId 方法初始化 ARtmKit 对象后立即调用，否则可能造成输出日志不完整。

 @param logFile 日志文件的完整路径。该日志文件为 UTF-8 编码。

 @return YES方法调用成功，NO方法调用失败
 */
- (int)setLogFile:(NSString * _Nonnull)logFile;

/** 设置日志文件大小

设置 SDK 输出的日志文件大小，单位为 KB。

SDK 设有 2 个日志文件，每个文件大小为 512 KB。如果你将 fileSize 设置为 1024 KB， SDK 会最多输出 2 MB 的日志文件。如果日志文件大小超出设置值，新的日志会覆盖之前的日志。

 @param fileSize 指定 SDK 输出日志文件的内存大小，单位为 KB。

 @return YES方法调用成功，NO方法调用失败，有可能是因为传入的参数无效
 */
- (int)setLogFileSize:(int)fileSize;

/** 设置日志输出等级

@param filter 日志输出等级，详见 ARtmLogFilter。

@return YES方法调用成功，NO方法调用失败
*/
- (int)setLogFilters:(ARtmLogFilter)filter;

/** 查询 SDK 版本号

@return 当前的RTM SDK 版本号，格式为字符串，如 1.0.0
*/
+ (NSString *_Nonnull)getSDKVersion;

@end
