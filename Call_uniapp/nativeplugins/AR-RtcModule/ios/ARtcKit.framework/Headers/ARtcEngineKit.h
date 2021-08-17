//
//  ARtcEngineKit.h
//  ARtcKit
//
//  Created by zjq on 2020/3/18.
//  Copyright © 2020 zjq. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ARtcEngineDelegate.h"
#import "ARObjects.h"
#import "ARMediaIO.h"

NS_ASSUME_NONNULL_BEGIN

@class ARtcEngineKit;
@class ARtcChannel;

__attribute__((visibility("default"))) @interface ARtcEngineKit : NSObject

//MARK: - 核心方法

/**-----------------------------------------------------------------------------
* @name 核心方法
* -----------------------------------------------------------------------------
*/

/** 实例化ARtcEngineKit对象

该方法初始化一个 ARtcEngineKit 单例。使用 ARtcEngineKit，必须先调用该接口进行初始化。

**Note**
 
请确保在调用其他 API 前先调用该方法创建并初始化 ARtcEngineKit。 一个 ARtcEngineKit 实例对象只能使用一个 App ID。如需更换 App ID，必须先调用 destroy 销毁当前实例，再调用本方法重新创建实例。
 
@param appId    ar云平台 为 App 开发者签发的 App ID。每个项目都应该有一个独一无二的 App ID。如果你的开发包里没有 App ID，请从ar云平台官网申请一个新的 App ID。在你调用 joinChannelByToken加入ar云平台的全球网络实现一对一或一对多直播通信时需要：
 
 * 用 App ID 标示你的项目和所属组织
 * 用一个独一无二的频道名称
@param delegate ARtcEngineDelegate.

@return 一个 ARtcEngineKit 实例对象
*/
+ (instancetype _Nonnull)sharedEngineWithAppId:(NSString *_Nonnull)appId delegate:(id<ARtcEngineDelegate> _Nullable)delegate;

/** 销毁 RtcEngine 实例

 该方法用于释放SDK 使用的所有对象资源。帮助偶尔使用音视频通话的 App 在无需通话时释放资源。一旦 App 调用了 destroy 接口销毁创建的 ARtcEngineKit 实例，将无法调用 SDK 内的任何方法也不再会有任何回调产生。如需重启通话，请调用初始化方法 sharedEngineWithAppId创建一个新的 ARtcEngineKit 实例。

**Note**

 * 该方法需要在子线程中操作
 * 该方法为同步调用。 App 不得在 SDK 生成的回调中调用该方法，不然 SDK 只能等候该回调返回才能重新获取相应的对象资源造成死锁。
 */
+ (void)destroy;

/** 设置频道使用场景

 * 为保证实时音视频质量，我们建议相同频道内的用户使用同一种频道场景。
 * 该方法必须在加入频道前调用，进入频道后无法再设置频道场景。

@param profile   频道使用场景，详见ARChannelProfile。
 
@return 0方法调用成功，<0方法调用失败
*/
- (int)setChannelProfile:(ARChannelProfile)profile;

/** 设置用户角色
 
在加入频道前，用户需要通过本方法设置观众(默认)或主播角色。在加入频道后，用户可以通过本方法切换用户角色。

如果你在加入频道后调用该方法切换用户角色，调用成功后，本地会触发 didClientRoleChanged 回调；远端会触发 didJoinedOfUid 或 didOfflineOfUid(ARUserOfflineReasonBecomeAudience) 回调。
 
**Note**
  
该方法仅适用于直播场景。

@param role   直播场景里的用户角色，详见ARClientRole：
 
 * ARClientRoleBroadcaster = 1; 主播
 * ARClientRoleAudience = 2; 观众(默认)
 
@return 0方法调用成功，<0方法调用失败
*/
- (int)setClientRole:(ARClientRole)role;

/** 加入频道

该方法让用户加入通话频道，在同一个频道内的用户可以互相通话，多个用户加入同一个频道，可以群聊。 使用不同 App ID 的 App 是不能互通的。如果已在通话中，用户必须调用 leaveChannel 退出当前通话，才能进入下一个频道。SDK 在通话中使用 iOS 系统的 AVAudioSession 共享对象进行录音和播放， App 对该对象的操作可能会影响 SDK 的音频相关功能。

调用该 API 后会触发 joinSuccessBlock 或 didJoinChannel 回调。block 比 delegate 优先级高，如果两种回调都实现了，只有 block 会触发。

我们建议你将 joinSuccessBlock 设置为 nil，使用 delegate 回调。

加入频道后，本地会触发 didJoinChannel 回调；通信场景下的用户和直播场景下的主播加入频道后，远端会触发 didJoinedOfUid 回调。

在网络状况不理想的情况下，客户端可能会与 ar云平台 的服务器失去连接；SDK 会自动尝试重连，重连成功后，本地会触发 didRejoinChannel 回调。

**Note**

 * 频道内每个用户的 UID 必须是唯一的。如果将 UID 设为 nil，系统将自动分配一个 UID。如果想要从不同的设备同时接入同一个频道，请确保每个设备上使用的 UID 是不同的。
 * 在加入频道时，SDK 调用 setCategory(AVAudioSessionCategoryPlayAndRecord) 将 AVAudioSession 设置到 PlayAndRecord 模式， App 不应将其设置到其他模式。设置该模式时，正在播放的声音会被打断（比如正在播放的响铃声）。

 @param token 动态密钥

 * 安全要求不高: 将值设为 nil
 * 安全要求高: 将值设置为 Token。如果你已经启用了 App Certificate，请务必使用 Token。
 * 请务必确保用于生成 Token 的 App ID 和 sharedEngineWithappId 方法初始化引擎时用的是同一个 App ID。

 @param channelId 标识通话频道的字符串，长度在 64 字节以内的字符串。
 以下为支持的字符集范围（共 89 个字符）:

 * 26 个小写英文字母 a-z
 * 26 个大写英文字母 A-Z
 * 10 个数字 0-9
 * 空格
 * "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","

@param uid 用户 ID，建议设置长度1~48，确保uid符合规则，并保证唯一性。如果不填或设置为nil，SDK 会自动分配一个，并在 joinSuccessBlock 回调方法中返回，App 层必须记住该返回值并维护，SDK 不对该返回值进行维护。
 
 * 26 个小写英文字母 a-z
 * 26 个大写英文字母 A-Z
 * 10 个数字 0-9
@param joinSuccessBlock 成功加入频道回调。joinSuccessBlock 优先级高于 didJoinChannel，2 个同时存在时，didJoinChannel 会被忽略。 需要有 didJoinChannel 回调时，请将 joinSuccessBlock 设置为 nil 。

@return 0方法调用成功，<0方法调用失败

 * ARErrorCodeInvalidArgument(-2)
 * ARErrorCodeNotReady(-3)
 * ARErrorCodeRefused(-5)
*/
- (int)joinChannelByToken:(NSString * _Nullable)token
                channelId:(NSString * _Nonnull)channelId
                      uid:(NSString * _Nullable)uid
              joinSuccess:(void(^ _Nullable)(NSString * _Nonnull channel, NSString * _Nonnull uid, NSInteger elapsed))joinSuccessBlock;

/** 快速切换直播频道。

 当直播频道中的观众想从一个频道切换到另一个频道时，可以调用该方法，实现快速切换。

 成功调用该方切换频道后，本地会先收到离开原频道的回调 didLeaveChannelWithStats，再收到成功加入新频道的回调 didJoinChannel。
 
**Note**
 
 该方法仅适用直播频道中的观众用户。

 @param token 动态密钥

 * 安全要求不高: 将值设为 nil
 * 安全要求高: 将值设置为 Token。如果你已经启用了 App Certificate，请务必使用 Token。
 * 请务必确保用于生成 Token 的 App ID 和 sharedEngineWithappId 方法初始化引擎时用的是同一个 App ID。

 @param channelId 标识通话频道的字符串，长度在 64 字节以内的字符串。
 以下为支持的字符集范围（共 89 个字符）:

 * 26 个小写英文字母 a-z
 * 26 个大写英文字母 A-Z
 * 10 个数字 0-9
 * 空格
 * "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","
 @param joinSuccessBlock 成功加入频道回调。joinSuccessBlock 优先级高于 didJoinChannel，2 个同时存在时，didJoinChannel 会被忽略。 需要有 didJoinChannel 回调时，请将 joinSuccessBlock 设置为 nil 。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)switchChannelByToken:(NSString * _Nullable)token
                  channelId:(NSString * _Nonnull)channelId
                joinSuccess:(void(^ _Nullable)(NSString * _Nonnull channel, NSString *_Nonnull uid, NSInteger elapsed))joinSuccessBlock;

/** 离开频道

离开频道，即挂断或退出通话。

当调用 joinChannelByToken 方法后，必须调用 leaveChannel 结束通话，否则无法开始下一次通话。 不管当前是否在通话中，都可以调用本方法，没有副作用。该方法会把会话相关的所有资源释放掉。该方法是异步操作，调用返回时并没有真正退出频道。

 * 成功调用该方法离开频道后，本地会触发 didLeaveChannelWithStats 回调；
 * 通信场景下的用户和直播场景下的主播离开频道后，远端会触发 didOfflineOfUid(ARUserOfflineReasonBecomeAudience) 回调。

**Note**

- 如果你调用了本方法后立即调用 destroy 方法，SDK 将无法触发 didLeaveChannelWithStats 回调。
- 如果你在旁路推流时调用本方法， SDK 将自动调用 removePublishStreamUrl 方法。
- 在调用本方法时，iOS 默认情况下 SDK 会停用 audio session，可能会对其他应用程序造成影响。如果想改变这种默认行为，可以通过setAudioSessionOperationRestriction 方法设置 ARAudioSessionOperationRestrictionDeactivateSession，这样在 leaveChannel 时，SDK 不会停用 audio session。

 @param leaveChannelBlock 成功离开频道的回调，提供通话相关的统计信息，详见 ARChannelStats

 @return 0方法调用成功，<0方法调用失败
 */
- (int)leaveChannel:(void (^ _Nullable) (ARChannelStats *_Nonnull stat))leaveChannelBlock;

/** 更新 Token

该方法用于更新 Token。如果启用了 Token 机制，过一段时间后使用的 Token 会失效。当以下任意一种情况发生时：

 * tokenPrivilegeWillExpire 回调。
 * connectionChangedToState 回调的 reason 参数报告 ARConnectionChangedTokenExpired(9)。

**Note**

 App 应重新获取 Token，然后调用该 API 更新 Token，否则 SDK 无法和服务器建立连接。

 @param token 新的 Token

 @return 0方法调用成功，<0方法调用失败
 */
- (int)renewToken:(NSString * _Nonnull)token;

/** 获取当前网络连接状态
 
@return 当前的网络连接状态，详见 ARConnectionStateType。
*/
- (ARConnectionStateType)getConnectionState;

/** 开始跨频道媒体流转发。该方法可用于实现跨频道连麦等场景。

 成功调用该方法后，SDK 会触发 channelMediaRelayStateDidChange 和 didReceiveChannelMediaRelayEvent 回调，并在回调中报告当前的跨频道媒体流转发状态和事件。

 如果 channelMediaRelayStateDidChange 回调报告 ARChannelMediaRelayStateRunning(2) 和 ARChannelMediaRelayStateIdle(0)，且 didReceiveChannelMediaRelayEvent 回调报告 ARChannelMediaRelayEventSentToDestinationChannel(4)，则表示 SDK 开始在源频道和目标频道之间转发媒体流。
 如果 channelMediaRelayStateDidChange 回调报告 ARChannelMediaRelayStateFailure(3)，则表示跨频道媒体流转发出现异常。
 
**Note**

 - 请在成功加入频道后调用该方法。
 - 该方法仅对直播场景下的主播有效。
 - 成功调用该方法后，若你想再次调用该方法，必须先调用 stopChannelMediaRelay 方法退出当前的转发状态。
 - 跨频道媒体流转发功能需要提交工单联系技术支持开通。

 @param config 跨频道媒体流转发参数配置: ARChannelMediaRelayConfiguration 类。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)startChannelMediaRelay:(ARChannelMediaRelayConfiguration * _Nonnull)config;

/** 更新媒体流转发的频道。成功开始跨频道转发媒体流后，如果你希望将流转发到多个目标频道，或退出当前的转发频道，可以调用该方法。

 成功调用该方法后，SDK 会触发 didReceiveChannelMediaRelayEvent 回调，并在回调中报告状态码 ARChannelMediaRelayEventUpdateDestinationChannel(7)。

 **Note**

 - 请在 startChannelMediaRelay 方法后调用该方法，更新媒体流转发的频道。
 - 跨频道媒体流转发最多支持 4 个目标频道。如果直播间里已经有 4 个频道了，你可以在调用该方法之前，调用 ARChannelMediaRelayConfiguration 中的 removeDestinationInfoForChannelName 方法移除不需要的频道。
 
 @param config 跨频道媒体流转发参数配置: ARChannelMediaRelayConfiguration 类。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)updateChannelMediaRelay:(ARChannelMediaRelayConfiguration * _Nonnull)config;

/** 停止跨频道媒体流转发。一旦停止，主播会退出所有目标频道。

 成功调用该方法后，SDK 会触发 channelMediaRelayStateDidChange 回调。如果报告 ARChannelMediaRelayStateIdle(0) 和 ARChannelMediaRelayErrorNone(0)，则表示已停止转发媒体流。

 Note: 如果该方法调用不成功，SDK 会触发 channelMediaRelayStateDidChange 回调，并报告状态码 ARChannelMediaRelayErrorServerNoResponse(2) 或 ARChannelMediaRelayEventUpdateDestinationChannelRefused(8)。你可以调用 leaveChannel 方法离开频道，跨频道媒体流转发会自动停止。
 
 @return 0方法调用成功，<0方法调用失败
 */
- (int)stopChannelMediaRelay;

//MARK: - 音频核心方法

/**-----------------------------------------------------------------------------
* @name 音频核心方法
* -----------------------------------------------------------------------------
*/

/** 启用音频模块

 本方法可以启用音频模块，默认开启状态。

**Note**

 * 该方法设置的是内部引擎为开启状态，在频道内和频道外均可调用，且在 leaveChannel 后仍然有效。
 * 该方法重置整个引擎，响应速度较慢，因此 ar云平台 建议使用如下方法来控制音频模块：

    * enableLocalAudio：是否启动麦克风采集并创建本地音频流
    * muteLocalAudioStream：是否发布本地音频流
    * muteRemoteAudioStream：是否接收并播放远端音频流
    * muteAllRemoteAudioStreams：是否接收并播放所有远端音频流

 @return 0方法调用成功，<0方法调用失败
 */
- (int)enableAudio;

/** 关闭音频模块

 **Note**

 * 该方法设置的是内部引擎为禁用状态，在频道内和频道外均可调用，且在 leaveChannel 后仍然有效。
 * 该方法重置整个引擎，响应速度较慢，因此建议使用如下方法来控制音频模块：

    - enableLocalAudio：是否启动麦克风采集并创建本地音频流
    - muteLocalAudioStream：是否发布本地音频流
    - muteRemoteAudioStream：是否接收并播放远端音频流
    - muteAllRemoteAudioStreams：是否接收并播放所有远端音频流

 @return 0方法调用成功，<0方法调用失败
 */
- (int)disableAudio;

/** 设置音频编码配置

**Note**

 * 该方法需要在 joinChannelByToken 之前设置好，joinChannelByToken 之后设置不生效。
 * 通信场景下，该方法设置 profile 生效，设置 scenario 不生效。
 * 通信和直播场景下，音质（码率）会有网络自适应的调整，通过该方法设置的是一个最高码率。
 * 在有高音质需求的场景（例如音乐教学场景）中，建议将 profile 设置为 ARAudioProfileMusicHighQuality(4)，scenario 设置为 ARAudioScenarioGameStreaming(3)
 
 @param profile  音频属性，详见ARAudioProfile
 @param scenario 设置音频应用场景，详细定义见 ARAudioScenario。不同的音频场景下，设备的系统音量是不同的。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setAudioProfile:(ARAudioProfile)profile scenario:(ARAudioScenario)scenario;

/** 调节录音音量

 @param volume 录音音量可在 0~400 范围内进行调节:

 * 0: 静音
 * 100: 原始音量
 * 400: 最大可为原始音量的 4 倍(自带溢出保护)

 @return 0方法调用成功，<0方法调用失败
 */
- (int)adjustRecordingSignalVolume:(NSInteger)volume;

/** 调节本地播放的所有远端用户音量

**Note**

- 该方法调节的是本地播放的所有远端用户混音后的音量。
- 静音本地音频需同时调用 adjustPlaybackSignalVolume 和 adjustAudioMixingPlayoutVolume 方法，并将 volume 参数设置为 0。

@param volume 播放音量，取值范围为 [0,400]。

* 0: 静音
* 100: 原始音量
* 400: 最大可为原始音量的 4 倍(自带溢出保护)

@return 0方法调用成功，<0方法调用失败
*/

- (int)adjustPlaybackSignalVolume:(NSInteger)volume;

/** 启用说话者音量提示
 
@param interval 指定音量提示的时间间隔
 
 * <= 0: 禁用音量提示功能
 * > 0: 提示间隔，单位为毫秒。建议设置到大于 200 毫秒。最小不得少于 10 毫秒。启用该方法后，无论频道内是否有人说话，都会在 reportAudioVolumeIndicationOfSpeakers回调中按设置的时间间隔返回音量提示
 
@param smooth 指定音量提示的灵敏度。取值范围为 [0,10]，建议值为 3，数字越大，波动越灵敏；数字越小，波动越平滑。
@param report_vad 本地人声检测功能
 
 * YES：开启本地人声检测功能。开启后， reportAudioVolumeIndicationOfSpeakers 回调的 vad 参数会报告是否在本地检测到人声。
 * NO：（默认）关闭本地人声检测功能。除引擎自动进行本地人声检测的场景外， reportAudioVolumeIndicationOfSpeakers 回调的 vad 参数不会报告是否在本地检测到人声。
 
@return 0方法调用成功，<0方法调用失败
*/
- (int)enableAudioVolumeIndication:(NSInteger)interval smooth:(NSInteger)smooth report_vad:(BOOL)report_vad;

/** 开关本地音频采集

当用户加入频道时，它的语音功能默认是开启的。该方法可以关闭或重新开启本地语音功能，即停止或重新开启本地音频采集。

该方法不影响接收或播放远端音频流，enableLocalAudio(NO) 适用于只听不发的用户场景。

语音功能关闭或重新开启后，会收到回调 didMicrophoneEnabled。

**Note**
 
 该方法与 muteLocalAudioStream 的区别在于：

 * enableLocalAudio：开启或关闭本地语音采集及处理。使用 enableLocalAudio 关闭或开启本地采集后，本地听远端播放会有短暂中断。
 * muteLocalAudioStream：停止或继续发送本地音频流。

 @param enabled 开关本地音频采集
 
 * YES: 重新开启本地语音功能，即开启本地语音采集（默认）
 * NO: 关闭本地语音功能，即停止本地语音采集或处理
 
 @return 0方法调用成功，<0方法调用失败
 */
- (int)enableLocalAudio:(BOOL)enabled;

/** 开关本地音频发送

 该方法用于允许/禁止往网络发送本地音频流。成功调用该方法后，远端会触发 remoteAudioStateChangedOfUid 回调。

**Note**

 * 该方法不影响录音状态，并没有禁用麦克风。
 * 如果你在该方法后调用 setChannelProfile 方法，SDK 会根据你设置的频道场景以及用户角色，重新设置是否停止发送本地音频。因此我们建议在 setChannelProfile 后调用该方法。

 @param mute 是否发送本地音频流

 * YES: 停止发送本地音频流
 * NO: （默认）继续发送本地音频流

 @return 0方法调用成功，<0方法调用失败
 */
- (int)muteLocalAudioStream:(BOOL)mute;

/** 停止/恢复接收指定用户的音频流

**Note**

 如果之前有调用过 muteAllRemoteAudioStreams(YES) 对所有远端音频进行静音，在调用本 API 之前请确保你已调用 muteAllRemoteAudioStreams(NO)。 muteAllRemoteAudioStreams 是全局控制，muteRemoteAudioStream 是精细控制。

 @param uid  指定用户的用户 ID
 @param mute 停止/恢复接收指定用户的音频流:

 * YES: 停止接收指定音频流
 * NO: 继续接收指定音频流（默认）

 @return 0方法调用成功，<0方法调用失败
 */
- (int)muteRemoteAudioStream:(NSString *_Nonnull)uid mute:(BOOL)mute;

/** 停止/恢复接收所有远端音频流
 
@param mute YES: 停止接收所有远端音频流；NO: 继续接收所有远端音频流（默认）。
 
@return 0方法调用成功，<0方法调用失败
*/
- (int)muteAllRemoteAudioStreams:(BOOL)mute;

/** 设置是否默认接收音频流

该方法在加入频道前后都可调用。如果在加入频道后调用 setDefaultMuteAllRemoteAudioStreams (YES)，会接收不到设置后加入频道的用户的音频流。
 
**Note**
 
 停止接收音频流后，如果想要恢复接收，请调用 muteRemoteAudioStream (NO)，并指定你想要接收的远端用户 uid；如果想恢复接收多个用户的音频流，则需要多次调用 muteRemoteAudioStream。setDefaultMuteAllRemoteAudioStreams (NO) 只能恢复接收后面加入频道的用户的音频流。

 @param mute 设置是否默认接收音频流：

 * YES: 默认停止接收所有远端音频流
 * NO: 默认继续接收所有远端音频流（默认）

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setDefaultMuteAllRemoteAudioStreams:(BOOL)mute;

/** 调节本地播放的指定远端用户音量

加入频道后，你可以多次调用该方法调节不同远端用户在本地播放的音量，或对某个远端用户在本地播放的音量调节多次。

**Note**

- 该方法要在加入频道后调用。
- 该方法调节的是本地播放的指定远端用户混音后的音量。
- 该方法每次只能调整一位远端用户在本地播放的音量。若需调整多位远端用户在本地播放的音量，则需多次调用该方法。

@param uid 远端用户 ID，需和远端用户加入频道时用的 uid 一致。
@param volume 播放音量，取值范围为 [0,100]。

- 0: 静音
- 100: 原始音量

@return 0方法调用成功，<0方法调用失败
*/
- (int)adjustUserPlaybackSignalVolume:(NSString *_Nonnull)uid volume:(int)volume;

//MARK: - 视频核心方法

/**-----------------------------------------------------------------------------
* @name 视频核心方法
* -----------------------------------------------------------------------------
*/

/** 启用视频模块

该方法用于打开视频模式。可以在加入频道前或者通话中调用，在加入频道前调用，则自动开启视频模式，在通话中调用则由音频模式切换为视频模式。调用 disableVideo 方法可关闭视频模式。

成功调用该方法后，远端会触发 didVideoEnabled(YES) 和 remoteVideoStateChangedOfUid 回调。

**Note**

 * 该方法设置的是内部引擎为启用状态，在 leaveChannel 后仍然有效。
 * 该方法重置整个引擎，响应速度较慢，因此建议使用如下方法来控制视频模块：
    - enableLocalVideo：是否启动摄像头采集并创建本地视频流
    - muteLocalVideoStream：是否发布本地视频流
    - muteRemoteVideoStream：是否接收并播放远端视频流
    - muteAllRemoteVideoStreams：是否接收并播放所有远端视频流

 @return 0方法调用成功，<0方法调用失败
 */
- (int)enableVideo;

/**

该方法用于关闭视频。可以在加入频道前或者通话中调用，在加入频道前调用，则自动开启纯音频模式，在通话中调用则由视频模式切换为纯音频模式。调用 enableVideo 方法可开启视频模式。成功调用该方法后，远端会触发 didVideoEnabled(NO) 回调。
 
- 该方法设置的是内部引擎为启用状态，在 leaveChannel 后仍然有效。
 
@return 0方法调用成功，<0方法调用失败
*/
/** 关闭视频模块

该方法用于关闭视频。可以在加入频道前或者通话中调用，在加入频道前调用，则自动开启纯音频模式，在通话中调用则由视频模式切换为纯音频模式。调用 enableVideo 方法可开启视频模式。

成功调用该方法后，远端会触发remoteVideoStateChangedOfUid回调。

**Note**

 * 该方法设置的是内部引擎为启用状态，在 leaveChannel 后仍然有效。
 * 该方法重置整个引擎，响应速度较慢，因此建议使用如下方法来控制视频模块：
    - enableLocalVideo：是否启动摄像头采集并创建本地视频流
    - muteLocalVideoStream：是否发布本地视频流
    - muteRemoteVideoStream：是否接收并播放远端视频流
    - muteAllRemoteVideoStreams：是否接收并播放所有远端视频流

 @return 0方法调用成功，<0方法调用失败
 */
- (int)disableVideo;

/** 设置视频编码配置
 
该方法设置视频编码配置。每个配置对应一套视频参数，如分辨率、帧率、码率、视频方向等。 所有设置的参数均为理想情况下的最大值。当视频引擎因网络环境等原因无法达到设置的分辨率、帧率或码率的最大值时，会取最接近最大值的那个值。

如果加入频道后不需要重新设置视频编码配置，建议在 enableVideo 之前调用该方法，可以加快首帧出图时间。
 
@param config   视频编码器配置的属性
 
@return 0方法调用成功，<0方法调用失败
*/
- (int)setVideoEncoderConfiguration:(ARVideoEncoderConfiguration *_Nonnull)config;

/** 初始化本地视图

 该方法初始化本地视图并设置本地用户视频显示信息，只影响本地用户看到的视频画面，不影响本地发布视频。调用该方法绑定本地视频流的显示视窗(view)，并设置本地用户视图的渲染模式和镜像模式。在 App 开发中，通常在初始化后调用该方法进行本地视频设置，然后再加入频道。退出频道后，绑定仍然有效，如果需要解除绑定，可以指定空 (nil) view 调用本方法。

**Note**
 
 * 该方法在加入频道前后都能调用。
 * 如果你希望在通话中更新本地用户视图的渲染或镜像模式，请使用 setLocalRenderMode 方法。
 
 @param local 通过 ARtcVideoCanvas 设置本地视频显示属性。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setupLocalVideo:(ARtcVideoCanvas *_Nullable)local;

/** 初始化远端用户视图

该方法绑定远端用户和显示视图，并设置远端用户视图在本地显示时的渲染模式和镜像模式，只影响本地用户看到的视频画面。调用该接口时需要指定远端用户的 uid，一般可以在进频道前提前设置好。

如果 App 不能事先知道对方的 uid，可以在 APP 收到 didJoinedOfUid 事件时设置。如果启用了视频录制功能，视频录制服务会做为一个哑客户端加入频道，因此其他客户端也会收到它的 didJoinedOfUid 事件，App 不应给它绑定视图（因为它不会发送视频流），如果 App 不能识别哑客户端，可以在 firstRemoteVideoDecodedOfUid 事件时再绑定视图。解除某个用户的绑定视图可以把 view 设置为空。退出频道后，SDK 会把远端用户的绑定关系清除掉。
 
**Note**

如果你希望在通话中更新远端用户视图的渲染或镜像模式，请使用 setRemoteRenderMode 方法。
 
- 该参数默认值为空字符 ""。如果用户是通过 ARtcEngineKit 类的 joinChannelByToken 方法加入频道的，则将参数设为默认值，表示该用户在频道内的渲染视图。
- 如果用户是通过 ARtcChannel 类的 joinChannelByToken 方法加入频道的，则将该参数设为该 ARtcChannel 类对应的 channelId，表示该用户在该 channelId 对应频道内的渲染视图。
 
 @param remote 通过 ARtcVideoCanvas 设置远端视频显示属性：
 
 * view 视频显示视窗
 * renderMode: 视频显示模式：
    - ARVideoRenderModeHidden (1)：优先保证视窗被填满。因视频尺寸与显示视窗尺寸不一致而多出的视频将被截掉。
    - ARVideoRenderModeFit (2)：优先保证视频内容全部显示。因视频尺寸与显示视窗尺寸不一致造成的视窗未被填满的区域填充黑色。
 * uid: 用户 ID，指定要显示视窗的远端用户。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setupRemoteVideo:(ARtcVideoCanvas *_Nonnull)remote;

/** 更新本地视图显示模式

初始化本地用户视图后，你可以调用该方法更新本地用户视图的渲染和镜像模式。该方法只影响本地用户看到的视频画面，不影响本地发布视频。

**Note**
 * 如果你使用前置摄像头，默认启动本地用户视图镜像模式；如果你使用后置摄像头，默认关闭本地视图镜像模式。
 * 请在调用 setupLocalVideo 方法初始化本地视图后，调用该方法。
 * 你可以在通话中多次调用该方法，多次更新本地用户视图的显示模式。

@param renderMode   本地视图的渲染模式，详见 ARVideoRenderMode；
@param mirrorMode   本地视图的镜像模式，详见 ARVideoMirrorMode。

@return 0方法调用成功，<0方法调用失败
*/
- (int)setLocalRenderMode:(ARVideoRenderMode)renderMode mirrorMode:(ARVideoMirrorMode)mirrorMode;

/** 更新远端视图显示模式

初始化远端用户视图后，你可以调用该方法更新远端用户视图在本地显示时的渲染和镜像模式。该方法只影响本地用户看到的视频画面。

**Note**

 * 请在调用 setupRemoteVideo 方法初始化远端视图后，调用该方法。
 * 你可以在通话中多次调用该方法，多次更新远端用户视图的显示模式。

@param uid   用户 ID
@param renderMode   远端用户视图的渲染模式，详见 ARVideoRenderMode ；
@param mirrorMode   远端用户视图的镜像模式，详见 ARVideoMirrorMode，SDK 默认关闭远端用户视图的镜像模式 。

@return 0方法调用成功，<0方法调用失败
*/
- (int)setRemoteRenderMode:(NSString *_Nonnull)uid renderMode:(ARVideoRenderMode)renderMode mirrorMode:(ARVideoMirrorMode)mirrorMode;

/** 开启视频预览

该方法用于在进入频道前启动本地视频预览。本地预览默认开启镜像功能。

调用该 API 前，请调用：

 * 调用 setupLocalVideo 设置预览窗口及属性
 * 调用 enableVideo 开启视频功能

**Note**

启用了本地视频预览后，如果调用 leaveChannel退出频道，本地预览依然处于启动状态，如需要关闭本地预览，需要调用 stopPreview 。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)startPreview;

/** 停止本地视频预览
 
@return 0方法调用成功，<0方法调用失败
*/
- (int)stopPreview;

/** 开关本地视频采集
 
 该方法禁用或重新启用本地视频采集，不影响接收远端视频。

 调用 enableVideo 后，本地视频即默认开启。你可以调用 enableLocalVideo(NO) 关闭本地视频采集。关闭后如果想要重新开启，则可调用 enableLocalVideo(YES)。

 成功禁用或启用本地视频采集后，远端会触发 didLocalVideoEnabled 回调。
     
**Note**

 该方法设置的是内部引擎为启用/禁用状态，在 leaveChannel 后仍然有效。

 @param enabled 是否启用本地视频:

 * YES: 开启本地视频采集和渲染（默认）
 * NO: 关闭使用本地摄像头设备。关闭后远端用户会接收不到本地用户的视频流；但本地用户依然可以接收远端用户的视频流。设置为 NO 时，该方法不需要本地有摄像头。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)enableLocalVideo:(BOOL)enabled;

/** 开关本地视频发送

成功调用该方法后，远端会触发 didVideoMuted 回调。你也可以使用 remoteVideoStateChangedOfUid 回调的：
 ARVideoRemoteStateStopped(0) 和 ARVideoRemoteStateReasonRemoteMuted(5)。
 ARVideoRemoteStateDecoding(2) 和 ARVideoRemoteStateReasonRemoteUnmuted(6)。
 
**Note**

 * 相比于调用 enableLocalVideo 控制本地视频流发送，调用该方法响应速度更快。
 * 该方法不影响视频采集状态，因为没有禁用摄像头。
 * 该方法在加入频道前后都能调用。如果你在该方法后调用 setChannelProfile 方法，SDK 会根据你设置的频道场景以及用户角色，重新设置是否取消发布本地视频。因此我们建议在 setChannelProfile 后调用该方法。

 @param mute 是否发送本地视频流
 
 * YES: 不发送本地视频流
 * NO: 发送本地视频流（默认）

 @return 0方法调用成功，<0方法调用失败
 */
- (int)muteLocalVideoStream:(BOOL)mute;

/** 停止/恢复接收所有视频流

 @param mute 禁止/允许接收所有人的视频流

 * YES: 停止接收所有视频流
 * NO: 允许接收所有视频流（默认）

 @return 0方法调用成功，<0方法调用失败
 */
- (int)muteAllRemoteVideoStreams:(BOOL)mute;

/** 停止/恢复接收指定视频流

**Note**

 如果之前有调用过 muteAllRemoteVideoStreams(YES) 暂停接收所有远端视频，在调用本 API 之前请确保你已调用 muteAllRemoteVideoStreams(NO)。 muteAllRemoteVideoStreams 是全局控制，muteRemoteVideoStream 是精细控制。

 @param uid  远端用户ID
 @param mute 停止/恢复接收指定视频流：
 * YES: 停止接收指定用户的视频流
 * NO: 允许接收指定用户的视频流（默认）

 @return 0方法调用成功，<0方法调用失败
 */
- (int)muteRemoteVideoStream:(NSString *_Nonnull)uid mute:(BOOL)mute;

/** 设置是否默认接收视频流
  该方法在加入频道前后都可调用。如果在加入频道后调用setDefaultMuteAllRemoteVideoStreams(YES)，会接收不到设置后加入频道的用户的视频流。
 
  **Note**
  
 停止接收视频流后，如果想要恢复接收，请调用 muteRemoteVideoStream (NO)，并指定你想要接收的远端用户 uid；如果想恢复接收多个用户的视频流，则需要多次调用 muteRemoteVideoStream。setDefaultMuteAllRemoteVideoStreams (NO) 只能恢复接收后面加入频道的用户的视频流。

 @param mute 是否默认接收视频流
 
 * YES: 不接收
 * NO: 接收

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setDefaultMuteAllRemoteVideoStreams:(BOOL)mute;

//MARK: - 视频前处理及后处理

//MARK: - 音频播放路由

/**-----------------------------------------------------------------------------
* @name 音频播放路由
* -----------------------------------------------------------------------------
*/

#if TARGET_OS_IPHONE
/** 设置默认的语音路由

该方法设置接收到的语音从听筒或扬声器出声。如果用户不调用本方法，语音默认从听筒出声。

**Note**

 * 该方法仅使用于通信场景。
 * 该方法只在纯音频模式下工作，在有视频的模式下不工作。

 各频道场景下默认的语音路由：

 * 通信：听筒。
 * 直播：扬声器。

 @param defaultToSpeaker 默认的语音路由:

 * YES: 默认从外放（扬声器）出声。如果设备连接了耳机或蓝牙，则无法切换到外放。
 * NO: （默认）默认从听筒出声。如果设备连接了耳机，则语音路由走耳机。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setDefaultAudioRouteToSpeakerphone:(BOOL)defaultToSpeaker;

/** 启用/关闭扬声器播放

该方法设置是否将语音路由到扬声器（外放）。调用该方法后，SDK 将返回 didAudioRouteChanged 回调提示状态已更改。

**Note**

 * 请确保在调用此方法前已调用过 joinChannelByToken 方法。
 * SDK 会调用 setCategory(AVAudioSessionCategoryPlayAndRecord) 并配置耳麦或者外放，所以调用该方法后所有声音的路由都会按照该方法设置。

 @param enableSpeaker 启用/关闭扬声器播放:

 * YES: 切换到外放。如果设备连接了耳机或蓝牙，则无法切换到外放。
 * NO: 切换到听筒。如果设备连接了耳机，则语音路由走耳机。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setEnableSpeakerphone:(BOOL)enableSpeaker;

/** 查询扬声器启用状态

 @return 扬声器状态：
 * YES: 扬声器已开启，语音会输出到扬声器
 * NO: 扬声器未开启，语音会输出到非扬声器（听筒、耳机等）
 */
- (BOOL)isSpeakerphoneEnabled;
#endif

#if TARGET_OS_IPHONE
//MARK: - 耳返设置
/**-----------------------------------------------------------------------------
* @name 耳返设置
* -----------------------------------------------------------------------------
*/

/** 开启耳返功能
 
**Note**
 
 用户必须使用有线耳机才能听到耳返效果

 @param enabled 开启或关闭耳返功能：
 * YES: 开启耳返功能
 * NO: 关闭耳返功能（默认）

 @return 0方法调用成功，<0方法调用失败
  */
- (int)enableInEarMonitoring:(BOOL)enabled;

/** 设置耳返音量

 @param volume 设置耳返音量，取值范围在 [0,100]。默认值为 100

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setInEarMonitoringVolume:(NSInteger)volume;
#endif

//MARK: - 语音音效设置

/**-----------------------------------------------------------------------------
 * @name 美声与音效
 * -----------------------------------------------------------------------------
 */

/** 设置本地语音音调
 
 该方法改变本地说话人声音的音调。该方法在加入频道前后都能调用。

 @param pitch  语音频率。可以在 [0.5,2.0] 范围内设置。取值越小，则音调越低。默认值为 1.0，表示不需要修改音调。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setLocalVoicePitch:(double)pitch;

/** 设置本地语音音效均衡

 @param bandFrequency 频谱子带索引，取值范围是 [0,9]，分别代表 10 个 频带，对应的中心频率是 [31，62，125，250，500，1k，2k，4k，8k，16k] Hz，详见 ARAudioEqualizationBandFrequency 。
 @param gain  每个 band 的增益，单位是 dB，每一个值的范围是 [-15,15]，默认值为 0。

 @return 0方法调用成功，<0方法调用失败
*/
-(int)setLocalVoiceEqualizationOfBandFrequency:(ARAudioEqualizationBandFrequency)bandFrequency withGain:(NSInteger)gain;

/** 设置本地音效混响

 提供一个使用更为简便的接口 setLocalVoiceReverbPreset，通过一系列内置参数的调整，直接实现流行、R&B、摇滚、嘻哈等预置的混响效果。
 
 该方法在加入频道前后都能调用。
 
 @param reverbType 混响音效类型，详见 ARAudioReverbType
 @param value     设置混响音效的效果数值，各混响音效对应的取值范围请参考 ARAudioReverbType

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setLocalVoiceReverbOfType:(ARAudioReverbType)reverbType withValue:(NSInteger)value;

/** 设置本地语音混响（含虚拟立体声效果）。

**Note:**

 当使用以 ARAudioReverbPresetFx 为前缀的枚举值时，请确保在调用该方法前将 setAudioProfile 的 profile 参数设置为 ARAudioProfileMusicHighQuality(4) 或 ARAudioProfileMusicHighQualityStereo(5)，否则该方法设置无效。
 当使用 ARAudioReverbPresetVirtualStereo 时，AR 推荐在调用该方法前将 setAudioProfile 的 profile 参数设置为 ARAudioProfileMusicHighQualityStereo(5)。
 该方法对人声的处理效果最佳，AR 不推荐调用该方法处理含人声和音乐的音频数据。
 该方法不能与 setLocalVoiceChanger 方法一同使用，否则先调的方法会不生效。更多注意事项，详见《变声与混响》。

 @param reverbPreset 本地语音混响选项，默认值为 ARAudioReverbPresetOff，即原声。详见 ARAudioReverbPreset。

 @return 0: 方法调用成功。< 0: 方法调用失败。请检查输入的枚举值是否正确。
 */
- (int)setLocalVoiceReverbPreset:(ARAudioReverbPreset)reverbPreset;

//MARK: - 音乐文件播放及混音设置
/**-----------------------------------------------------------------------------
* @name 音乐文件播放及混音设置
* -----------------------------------------------------------------------------
*/

/** 开始播放音乐文件

 指定本地或在线音频文件来和麦克风采集的音频流进行混音或替换。替换是指用指定的音频文件替换麦克风采集到的音频流。该方法可以选择是否让对方听到本地播放的音频，并指定循环播放的次数。

 成功调用该方法后，本地会触发 localAudioMixingStateDidChanged(ARAudioMixingStatePlaying) 回调。播放结束后，会收到 localAudioMixingStateDidChanged(ARAudioMixingStateStopped) 回调。

**Note**

 * 使用本方法前请确保你的 iOS 设备版本不低于 9.0。
 * 请在频道内调用该方法，如果在频道外调用该方法可能会出现问题。
 * 如果播放的是在线音乐文件，请确保重复调用该 API 的间隔超过 100 ms，否则 SDK 会返回 AudioFileOpenTooFrequent（702）警告码，表示音乐文件打开过于频繁。
 * 如果本地音乐文件不存在、文件格式不支持、无法访问在线音乐文件 URL 都会返回警告码 ARWarningCodeAudioMixingOpenError = 701。

 @param filePath 指定需要混音的音频文件名和文件路径名，例如: /var/mobile/Containers/Data/audio.mp4。建议填写文件后缀名。若无法确定文件后缀名，可不填。支持以下音频格式: mp3，aac，m4a，3gp，wav
 @param loopback 设置哪些用户可以听到音频混合:
 * YES: 只有本地可以听到混音或替换后的音频流
 * NO: 本地和对方都可以听到混音或替换后的音频流
 @param replace 设置混音麦克风内容:
 * YES: 只推送设置的本地音频文件或者线上音频文件，不传输麦克风收录的音频。
 * NO: 音频文件内容将会和麦克风采集的音频流进行混音
 @param cycle 指定音频文件循环播放的次数:

 * 正整数: 循环的次数
 * -1：无限循环

 @return 0方法调用成功，<0方法调用失败
 */
- (int)startAudioMixing:(NSString *  _Nonnull)filePath
               loopback:(BOOL)loopback
                replace:(BOOL)replace
                  cycle:(NSInteger)cycle;

/** 停止播放音乐文件

 请在频道内调用该方法。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)stopAudioMixing;

/** 暂停播放音乐文件

 请在频道内调用该方法。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)pauseAudioMixing;

/** 恢复播放音乐文件

 请在频道内调用该方法。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)resumeAudioMixing;

/** 调节音乐文件的播放音量
 
**Note**
 
 该方法调节混音的音乐文件在本地和远端播放的音量大小。请在频道内调用该方法。

 @param volume 音乐文件播放音量范围为 0~100。默认 100 为原始文件音量
 @return 0方法调用成功，<0方法调用失败
 */
- (int)adjustAudioMixingVolume:(NSInteger)volume;

/** 调节音乐文件在本地播放的音量

**Note**
 
该方法调节混音的音乐文件在本地播放的音量大小。请在频道内调用该方法。

@param volume 音乐文件播放音量范围为 0~100。默认 100 为原始文件音量
@return 0方法调用成功，<0方法调用失败
*/
- (int)adjustAudioMixingPlayoutVolume:(NSInteger)volume;

/** 调节音乐文件在远端播放的音量

音乐文件播放音量范围为 0~100。默认 100 为原始文件音量

@param volume 该方法调节混音的音乐文件在远端播放的音量大小。请在频道内调用该方法。
@return 0方法调用成功，<0方法调用失败
*/
- (int)adjustAudioMixingPublishVolume:(NSInteger)volume;

/** 获取音乐文件的本地播放音量

该方法获取混音的音乐文件本地播放音量，方便排查音量相关问题。
 
 @return 方法调用成功则返回音量值，范围为 [0,100]。<0：方法调用失败
*/
- (int)getAudioMixingPlayoutVolume;

/** 获取音乐文件的远端播放音量

该方法获取混音的音乐文件远端播放音量，方便排查音量相关问题。
 
 @return 方法调用成功则返回音量值，范围为 [0,100]。<0：方法调用失败
*/
- (int)getAudioMixingPublishVolume;

//MARK: - 音效文件播放管理

/**-----------------------------------------------------------------------------
* @name 音效文件播放管理
* -----------------------------------------------------------------------------
*/

/** 获取音效文件播放音量

@return 方法调用成功返回音效的音量值，范围为 [0.0,100.0]，< 0: 方法调用失败
 */
- (double)getEffectsVolume;

/** 设置音效文件播放音量

 @param volume 取值范围为 [0.0,100.0]。 100.0 为默认值

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setEffectsVolume:(double)volume;

/** 实时调整音效文件播放音量

 @param soundId 自行设定的音效 ID，需保证唯一性。
 @param volume 取值范围为 [0.0,100.0]。100.0 为默认值

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setVolumeOfEffect:(int)soundId
              withVolume:(double)volume;

/** 播放指定音效文件

该方法可以播放指定的本地或在线音效文件来给应用增加音效，比如游戏中特定操作的音效。

你可以在该方法中设置音效文件的播放次数、音调、音效的空间位置和增益，以及远端用户是否能听到该音效。你可以多次调用该方法，通过传入不同的音效文件的 soundID 和 filePath，同时播放多个音效文件，实现音效叠加。为获得最佳用户体验，我们建议同时播放的音效文件不要超过 3 个。

调用该方法播放音效结束后，会触发 rtcEngineDidAudioEffectFinish 回调。

**Note**

 macOS 上不支持同时播放多个在线音效文件。
 
 @param soundId 自行设定的音效 ID，需保证唯一性。 如果你已通过 preloadEffect 将音效加载至内存，确保这里设置的 soundId 与 preloadEffect 设置的 soundId 相同。
 @param filePath 指定音效文件的绝对路径或 URL 地址（包含文件后缀名），例如：/var/mobile/Containers/Data/audio.mp4。支持以下音频格式: mp3、mp4、aac、m4a、3gp、wav。
 @param loopCount 设置音效文件循环播放的次数：

 * 0: 播放音效文件一次
 * 1: 循环播放音效文件两次
 * -1: 无限循环播放音效文件，直至调用 stopEffect 或 stopAllEffects 后停止

 @param pitch 设置音效的音调 取值范围为 [0.5,2]。默认值为 1.0，表示不需要修改音调。取值越小，则音调越低
 @param pan 设置音效的空间位置。取值范围为 [-1.0,1.0]：

 * 0.0: 音效出现在正前方
 * 1.0: 音效出现在右边
 * -1.0: 音效出现在左边

 @param gain 设置音效的音量。取值范围为 [0.0,100.0]。默认值为 100.0。取值越小，则音效的音量越低。
 @param publish 设置是否将音效传到远端

 * YES: 音效文件在本地播放的同时，会发布到 ar云平台 云上，因此远端用户也能听到该音效
 * NO: 音效文件不会发布到ar云平台云上，因此只能在本地听到该音效

 @return 0方法调用成功，<0方法调用失败
 */
- (int)playEffect:(int)soundId
         filePath:(NSString * _Nullable)filePath
        loopCount:(int)loopCount
            pitch:(double)pitch
              pan:(double)pan
             gain:(double)gain
          publish:(BOOL)publish;

/** 停止播放指定音效文件

 @param soundId 自行设定的音效 ID，需保证唯一性。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)stopEffect:(int)soundId;

/** 停止播放所有音效文件

 @return 0方法调用成功，<0方法调用失败
 */
- (int)stopAllEffects;

/** 将指定音效文件预加载至内存

 为保证通信畅通，请注意控制预加载音效文件的大小，并在 joinChannelByToken 前就使用该方法完成音效预加载。

 音效文件支持以下音频格式: mp3，aac，m4a，3gp，wav

**Note**
 
 该方法不支持在线音效文件。
 
 @param soundId 自行设定的音效 ID，需保证唯一性。
 @param filePath 音效文件的绝对路径

 @return 0方法调用成功，<0方法调用失败
 */
- (int)preloadEffect:(int)soundId
            filePath:(NSString * _Nullable)filePath;

/** 从内存释放某个预加载的音效文件

 @param soundId 自行设定的音效 ID，需保证唯一性。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)unloadEffect:(int)soundId;

/** 暂停音效文件播放

 @param soundId 自行设定的音效 ID，需保证唯一性。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)pauseEffect:(int)soundId;

/** 暂停所有音效文件播放

 @return 0方法调用成功，<0方法调用失败
 */
- (int)pauseAllEffects;

/** 恢复播放指定音效文件

 @param soundId 自行设定的音效 ID，需保证唯一性。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)resumeEffect:(int)soundId;

/** 恢复播放所有音效文件

 @return 0方法调用成功，<0方法调用失败
 */
- (int)resumeAllEffects;

//MARK: - 音频录制

/**-----------------------------------------------------------------------------
 * @name 音频录制
 * -----------------------------------------------------------------------------
 */

/** 开始客户端录音

SDK 支持通话过程中在客户端进行录音。调用该方法后，你可以录制频道内所有用户的音频，并得到一个包含所有用户声音的录音文件。录音文件格式可以为:

 - .wav: 文件大，音质保真度较高。
 - .aac: 文件小，音质保真度较低。

**Note**

 - 请确保你在该方法中指定的路径存在并且可写。
 - 该接口需在 joinChannelByToken 之后调用。如果调用 leaveChannel 时还在录音，录音会自动停止。
 - 为保证录音效果，当 sampleRate 设为 44100 Hz 或 48000 Hz 时，建议将 quality 设为 ARAudioRecordingQualityMedium 或 ARAudioRecordingQualityHigh 。

 @param filePath 录音文件在本地保存的绝对路径，由用户自行指定，需精确到文件名及格式，例如：/var/mobile/Containers/Data/audio.aac。
 @param sampleRate 录音采样率（Hz），可以设为以下值：

 - 16000
 - (Default) 32000
 - 44100
 - 48000

 @param quality 录音音质。详见 ARAudioRecordingQuality 。

  @return 0方法调用成功，<0方法调用失败
 */
- (int)startAudioRecording:(NSString * _Nonnull)filePath
                   sampleRate:(NSInteger)sampleRate
                   quality:(ARAudioRecordingQuality)quality;

/** 停止客户端录音

**Note:**

 该接口需要在 leaveChannel 之前调用，不然会在调用 leaveChannel 时自动停止。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)stopAudioRecording;

//MARK: - 开启声卡采集

//MARK: - 音频其他方法

//MARK: - 网络相关测试

/**-----------------------------------------------------------------------------
 * @name 网络相关测试
 * -----------------------------------------------------------------------------
 */

/** 开始语音通话回路测试

 该方法启动语音通话测试，目的是测试系统的音频设备（耳麦、扬声器等）和网络连接是否正常。在测试过程中，用户先说一段话，声音会在设置的时间间隔后回放出来。如果用户能正常听到自己刚才说的话，就表示系统音频设备和网络连接都是正常的。

**Note:**

- 请在加入频道前调用该方法。

- 调用该方法后必须调用 stopEchoTest 以结束测试，否则不能进行下一次回声测试，也无法加入频道。

- 直播场景下，该方法仅能由用户角色为主播的用户调用。

@param interval 返回语音通话回路测试结果的时间间隔，取值范围为 [2,10]，单位为秒，默认值为 10 秒。
@param successBlock 成功开始语音通话测试回调。

@return 0方法调用成功，<0方法调用失败
*/
- (int)startEchoTestWithInterval:(NSInteger)interval successBlock:(void(^ _Nullable)(NSString * _Nonnull channel, NSString * _Nonnull uid, NSInteger elapsed))successBlock;

/** 停止语音通话回路测试

 @return 0方法调用成功，<0方法调用失败,如 ERR_REFUSED (-5)：不能停止测试，可能语音通话测试没有成功启动。
 */
- (int)stopEchoTest;

/** 启动网络测试

 该方法启用网络连接质量测试，用于检测用户网络接入质量。默认该功能为关闭状态。

 该方法主要用于以下场景:

 - 用户加入频道前，可以调用该方法判断和预测目前的上行网络质量是否足够好。
 - 直播场景下，当用户角色想由观众切换为主播时，可以调用该方法判断和预测目前的上行网络质量是否足够好。
 启用该方法会消耗一定的网络流量，影响通话质量，因此我们建议不要和 startLastmileProbeTest 同时使用。

 在收到 lastmileQuality 回调后须调用 disableLastmileTest 停止测试，再加入频道或切换用户角色。

**Note:**

 - 调用该方法后，在收到 lastmileQuality 回调之前请不要调用其他方法，否则可能会由于 API 操作过于频繁导致此回调无法执行。
 - 直播场景下，主播在加入频道后请勿调用该方法。
 - 加入频道前调用该方法检测网络质量后，SDK 会占用一路视频的带宽，码率与 setVideoEncoderConfiguration 中设置的码率相同。加入频道后，无论是否调用了 disableLastmileTest，SDK 均会自动停止带宽占用。
 @return 0方法调用成功，<0方法调用失败
 */
- (int)enableLastmileTest;

/** 关闭网络测试

 @return 0方法调用成功，<0方法调用失败
 */
- (int)disableLastmileTest;

/** 开始通话前网络质量探测


 开始通话前网络质量探测，向用户反馈上下行网络的带宽、丢包、网络抖动和往返时延数据。

 启用该方法后，SDK 会依次返回如下 2 个回调：

 lastmileQuality，视网络情况约 2 秒内返回。该回调通过打分反馈上下行网络质量，更贴近用户的主观感受。
 lastmileProbeResult，视网络情况约 30 秒内返回。该回调通过具体数据反馈上下行网络质量，更加客观。
 该方法主要用于以下两种场景：

 - 用户加入频道前，可以调用该方法判断和预测目前的上行网络质量是否足够好。
 - 直播场景下，当用户角色想由观众切换为主播时，可以调用该方法判断和预测目前的上行网络质量是否足够好。

**Note:**

 - 该方法会消耗一定的网络流量，影响通话质量，因此我们建议不要和 enableLastmileTest 同时使用。
 - 调用该方法后，在收到 lastmileQuality 和 lastmileProbeResult 回调之前请不要调用其他方法，否则可能会由于 API 操作过于频繁导致此方法无法执行。
 - 直播场景下，如果本地用户为主播，请勿在加入频道后调用该方法。

@param config Last mile 网络探测配置，详见 ARLastmileProbeConfig

@return 0方法调用成功，<0方法调用失败
*/
- (int)startLastmileProbeTest:(ARLastmileProbeConfig *_Nullable)config;

/** 停止通话前网络质量探测

@return 0方法调用成功，<0方法调用失败
*/
- (int)stopLastmileProbeTest;

//MARK: - 自定义视频模块

/**-----------------------------------------------------------------------------
 * @name 自定义视频模块
 * -----------------------------------------------------------------------------
*/

/** 设置自定义视频源

该方法设置视频源。实时通讯过程中，ar云平台 SDK 通常会启动默认的视频输入设备，即内置的摄像头，进行视频推流。当需要自定义视频设备时，App 可以先通过 ARVideoSourceProtocol 自定义视频源，然后调用该方法将自定义的视频源加入到 SDK 中。

 @param videoSource 自定义的视频源,详见 ARVideoSourceProtocol
 */
- (void)setVideoSource:(id<ARVideoSourceProtocol> _Nullable)videoSource;

/** 本地自定义视频渲染器

 该方法设置本地视频渲染器。实时通讯过程中， SDK 通常会启动默认的视频渲染器进行视频渲染。当需要自定义视频渲染设备时，App 可以先通过 ARVideoSinkProtocol 自定义渲染器，然后调用该方法将视频渲染器加入到 SDK 中。

 该方法在加入频道前后都能调用。

 @param videoRenderer 自定义的视频渲染器,详见 ARVideoSinkProtocol
 */
- (void)setLocalVideoRenderer:(id<ARVideoSinkProtocol> _Nullable)videoRenderer;

/** 远端自定义视频渲染器

 实时音视频互动过程中，SDK 通常会启动默认的视频渲染器进行视频渲染。当需要自定义视频渲染设备时，App 可以先通过 ARVideoSinkProtocol 自定义渲染器，然后调用该方法将视频渲染器加入到 SDK 中。

 该方法在加入频道前后都能调用。如果在加入频道前调用，需要自行维护远端用户的 uid。

 @param videoRenderer 自定义的视频渲染器,详见 ARVideoSinkProtocol
 @param uid 远端用户的 uid
 */
- (void)setRemoteVideoRenderer:(id<ARVideoSinkProtocol> _Nullable)videoRenderer forUserId:(NSString * _Nonnull)uid;

/** 获取当前视频源

  @return 当前视频源，详见ARVideoSourceProtocol.
 */
- (id<ARVideoSourceProtocol> _Nullable)videoSource;

/** 获取本地视频渲染器

 @return 本地视频渲染器。 详见ARVideoSinkProtocol.
 */
- (id<ARVideoSinkProtocol> _Nullable)localVideoRenderer;

/** 获取远端视频渲染器

 @param uid 远端用户的 uid
 @return 远端视频渲染器。 详见 ARVideoSinkProtocol.
 */
- (id<ARVideoSinkProtocol> _Nullable)remoteVideoRendererOfUserId:(NSString * _Nonnull)uid;

//MARK: - 音频自渲染

//MARK: - 音频自采集 (仅适用于 push 模式)

/**-----------------------------------------------------------------------------
 * @name 音频自采集 (仅适用于 push 模式)
 * -----------------------------------------------------------------------------
 */

/** 开启外部音频采集

 该方法必须在加入频道前调用

 @param sampleRate       外部音频源的采样率 (Hz)，可设置为 8000，16000，32000，44100 或 48000
 @param channelsPerFrame 外部音频源的通道数，可设置为 1 或 2:
 * 1: 单声道
 * 2: 双声道
 
**Note:**
该方法必须在 joinChannelByToken 和 startPreview 前调用
 */
- (void)enableExternalAudioSourceWithSampleRate:(NSUInteger)sampleRate channelsPerFrame:(NSUInteger)channelsPerFrame;

/** 关闭外部音频采集
*/
- (void)disableExternalAudioSource;

/** 推送外部音频帧

 @param data     外部音频数据
 @param samples   音频帧的样本数量
 @param timestamp 外部音频帧的时间戳。该参数为必填。你可以使用该时间戳还原音频帧顺序；在有视频的场景中（包含使用外部视频源的场景），该参数可以帮助实现音视频同步。
 @return YES方法调用成功，NO方法调用失败
 */
- (BOOL)pushExternalAudioFrameRawData:(void *_Nonnull)data samples:(NSUInteger)samples timestamp:(NSTimeInterval)timestamp;

/** 推送外部 CMSampleBuffer 音频帧

 @param sampleBuffer 采样缓冲区
 @return YES方法调用成功，NO方法调用失败
 */
- (BOOL)pushExternalAudioFrameSampleBuffer:(CMSampleBufferRef _Nonnull)sampleBuffer type:(ARAudioType)type;

//MARK: - 视频自采集 (仅适用于 push 模式)

/**-----------------------------------------------------------------------------
 * @name 视频自采集 (仅适用于 push 模式)
 * -----------------------------------------------------------------------------
 */

/** 配置外部视频源

 如果使用了外部视频源，请在调用 enableVideo 或 startPreview 之前调用此 API。

 @param enable 是否使用外部视频源：

 * YES: 使用外部视频源
 * NO: 不使用外部视频源（默认）

 @param useTexture 是否使用 Texture 作为输入：

 * YES: 使用 Texture 作为输入
 * NO: 不使用 Texture 作为输入

 @param pushMode 是否外部视频源需要调用 pushExternalVideoFrame 将视频帧主动推送给 ar云平台SDK：

 * YES: 使用推送 (push) 模式
 * NO: 使用拉 (pull) 模式（暂不支持）
 
 **Note:**
 该方法需要在加入频道前调用。
 */
- (void)setExternalVideoSource:(BOOL)enable useTexture:(BOOL)useTexture pushMode:(BOOL)pushMode;

/** 推送外部视频帧

该方法主动将视频帧数据用 ARVideoFrame 类封装后传递给 SDK。请确保在你调用本方法前已调用 setExternalVideoSource，并将参数 pushMode 设为 YES，不然调用本方法后会一直报错。

 @param frame 该视频帧包含待 ar云平台SDK 编码的视频数据，详见 ARVideoFrame
 @return YES: 该帧推送成功 NO: 该帧推送不成功
 */
- (BOOL)pushExternalVideoFrame:(ARVideoFrame * _Nonnull)frame;

//MARK: - 原始音频数据处理

//MARK: - 直播视频水印

//MARK: - 直播音视频流回退
/**-----------------------------------------------------------------------------
 * @name 直播音视频流回退
 * -----------------------------------------------------------------------------
 */

/** 设置弱网条件下订阅的音视频流回退选项

 网络不理想的环境下，订阅音视频的质量都会下降。使用该接口开启订阅音视频流的回退选项后，SDK 会在下行弱网且音视频质量严重受影响时，将视频流切换为小流，或关断视频流，从而保证或提高通信质量。同时 SDK 会持续监控网络质量，并在网络质量改善时恢复音视频流。当远端订阅流回退为音频流时，或由音频流恢复为音视频流时，SDK 会触发远端订阅流已回退为音频流回调。

 @param option 订阅音视频流的回退选项，默认为弱网时回退到视频小流，详见 ARStreamFallbackOptions
 @return 0方法调用成功，<0方法调用失败
 */
- (int)setRemoteSubscribeFallbackOption:(ARStreamFallbackOptions)option;

//MARK: - 视频双流模式
/**-----------------------------------------------------------------------------
* @name 视频双流模式
* -----------------------------------------------------------------------------
*/

/** 开关视频双流模式

@param enabled   YES双流模式，NO单流模式，默认单流模式
 
@return 0方法调用成功，<0方法调用失败
*/
- (int)enableDualStreamMode:(BOOL)enabled;

/** 设置订阅的视频流类型

 如果发送端选择发送视频双流（大流或小流），接收端可以选择接收大流还是小流。其中大流可以理解为高分辨率高码率的视频流，小流则是低分辨率低码率的视频流。该方法可以根据视频窗口的大小动态调整对应视频流的大小，以节约带宽和计算资源。
 
@param uid   用户 ID
@param streamType   设置视频流大小，详见ARVideoStreamType
 
@return 0方法调用成功，<0方法调用失败
*/
- (int)setRemoteVideoStream:(NSString *_Nonnull)uid type:(ARVideoStreamType)streamType;

/** 设置默认订阅的视频流类型

 @param streamType 设置默认接收的视频流类型，详见 ARVideoStreamType 。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setRemoteDefaultVideoStreamType:(ARVideoStreamType)streamType;

//MARK: - 加密

/**-----------------------------------------------------------------------------
 * @name 加密
 * -----------------------------------------------------------------------------
 */

/** Enables/Disables the built-in encryption.

 在安全要求较高的场景下，建议你在加入频道前，调用 enableEncryption 方法开启内置加密。

 同一频道内所有用户必须使用相同的加密模式和密钥。一旦所有用户都离开频道，该频道的加密密钥会自动清除。
 
 **Note**

 - 如果开启了内置加密，则不能使用 RTMP/RTMPS 推流功能。
 - anyRTC 支持 4 种加密模式。除 SM4_128_ECB 模式外，其他加密模式都需要在集成 iOS SDK 时，额外添加加密库文件。详见《媒体流加密》。

 @param enabled 是否开启内置加密：
 - YES: 开启
 - NO: 关闭

 @param config 配置内置加密模式和密钥。详见 AREncryptionConfig 。

 @return 0方法调用成功，<0方法调用失败

 -2 (ARErrorCodeInvalidArgument): 调用了无效的参数。需重新指定参数。
 -7 (ARErrorCodeNotInitialized): SDK 尚未初始化。需在调用 API 之前已创建 ARRtcEngineKit 对象并完成初始化。
 -4 (ARErrorCodeNotSupported): 设置的加密模式不正确或加载外部加密库失败。需检查枚举值是否正确或重新加载外部加密库。
 */
- (int)enableEncryption:(bool)enabled encryptionConfig:(AREncryptionConfig *)config;

//MARK: - 直播输入在线媒体流

/**-----------------------------------------------------------------------------
 * @name 直播输入在线媒体流
 * -----------------------------------------------------------------------------
 */

/** 输入在线媒体流 URL

 该方法通过在服务端拉取视频流并发送到频道中，将正在播放的视频输入到正在进行的直播中。可主要应用于赛事直播、多人看视频互动等直播场景。

 调用该方法后，SDK 会在本地触发 streamInjectedStatusOfUrl 回调，报告输入在线媒体流的状态。

 成功输入媒体流后，该音视频流会出现在频道中，频道内所有用户都会收到 didJoinedOfUid 回调，其中 uid 为 "share666"。

**Note:**

 - 频道内同一时间只允许输入一个在线媒体流。
 - 请确保已开通旁路推流的功能，详见前提条件。
 @param url    添加到直播中的视频流 URL 地址， 支持 RTMP， HLS， HTTP-FLV 协议传输。

 - 支持的音频编码格式：AAC。
 - 支持的视频编码格式：H264 (AVC)。
 @param config 输入的视频流设置，详见 ARLiveInjectStreamConfig 。

@return 0方法调用成功，<0方法调用失败
 
    - ARErrorCodeInvalidArgument(-2)：输入的 URL 为空。请重新调用该方法，并确认输入的媒体流的 URL 是有效的。
    - ARErrorCodeNotInitialized(-7)：引擎没有初始化。请确认调用该方法前已创建 RtcEngine 对象并完成初始化。
    - ARErrorCodeNotSupported(-4)：频道非直播场景。请调用 setChannelProfile 并将频道设置为直播场景再调用该方法。
    - ARErrorCodeNotReady(-3)：用户没有加入频道。
*/
- (int)addInjectStreamUrl:(NSString * _Nonnull)url config:(ARLiveInjectStreamConfig * _Nonnull)config;

/** 删除输入的在线媒体流

 成功删除后会触发 didOfflineOfUid 回调，UID 为  "share666"。

 @param url 已输入、待删除的在线媒体流 URL 地址
 @return 0方法调用成功，<0方法调用失败
 */
- (int)removeInjectStreamUrl:(NSString * _Nonnull)url;

//MARK: - CDN 旁路推流
/**-----------------------------------------------------------------------------
 * @name CDN 旁路推流
 * -----------------------------------------------------------------------------
 */

/** 增加旁路推流地址

 该方法用于添加旁路推流地址，调用该方法后，SDK 会在本地触发 rtmpStreamingChangedToState 回调，报告增加旁路推流地址的状态。

 **Note:**

 - 该方法仅适用于直播场景。
 - 请确保在成功加入频道后再调用该接口。
 - 请确保已开通旁路推流的功能
 - 该方法每次只能增加一路旁路推流地址。若需推送多路流，则需多次调用该方法

 @param url CDN 推流地址，格式为 RTMP。该字符串长度不能超过 1024 字节。URL 不支持中文等特殊字符。
 @param transcodingEnabled 是否转码：

 - YES: 转码（转码是指在旁路推流时对音视频流做一些转码处理后再推送到其他 RTMP 服务器，常见的适用场景是对多主播进行混流、合图）。如果设为 YES，需先调用 setLiveTranscoding 方法。
 - NO: 不转码。

 @return 0方法调用成功，<0方法调用失败

  - ARErrorCodeInvalidArgument(-2)：参数无效，一般是 URL 为空或是长度为 0 的的字符串
  - ARErrorCodeNotInitialized(-7)：推流时未初始化引擎
 */
- (int)addPublishStreamUrl:(NSString * _Nonnull)url transcodingEnabled:(BOOL)transcodingEnabled;

/** 删除旁路推流地址

 该方法用于删除旁路推流过程中已经设置的 RTMP 推流地址。调用该方法后，SDK 会在本地触发 rtmpStreamingChangedToState 回调，报告删除旁路推流地址的状态。

**Note:**

 * 该方法仅适用于直播场景。
 * 该方法每次只能删除一路旁路推流地址。若需删除多路流，则需多次调用该方法。
 * URL 不支持中文等特殊字符。

 @param url 待删除的推流地址，格式为 RTMP。该字符串长度不能超过 1024 字节

 @return 0方法调用成功，<0方法调用失败
 */
- (int)removePublishStreamUrl:(NSString * _Nonnull)url;

/** 设置直播转码

 该方法用于旁路推流的视图布局及音频设置等。调用该方法更新转码设置后本地会触发 rtcEngineTranscodingUpdated 回调。

 **Note**

 - 该方法仅适用于直播场景。
 - 请确保已开通 CDN 旁路推流的功能
 - 首次调用该方法更新转码设置时，不会触发 rtcEngineTranscodingUpdated 回调。


 @param transcoding 一个 ARLiveTranscoding 的对象，详细设置见 ARLiveTranscoding 。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setLiveTranscoding:(ARLiveTranscoding *_Nullable)transcoding;

//MARK: - 数据流

/**-----------------------------------------------------------------------------
 * @name 数据流
 * -----------------------------------------------------------------------------
 */

/** 创建数据流

 该方法用于创建数据流。ARtcEngineKit 生命周期内，每个用户最多只能创建 5 个数据流。频道内数据通道最多允许数据延迟 5 秒，若超过 5 秒接收方尚未收到数据流，则数据通道会向 App 报错。 目前Native SDK 支持 99% 可靠和 100% 有序的数据传输。

**Note:**

 请将 reliable 和 ordered 同时设置为 YES 或 NO，暂不支持交叉设置。

 @param streamId 数据流 ID
 @param reliable 设置是否保证接收方在5秒内接收到发送方的数据流:

 - YES: 接收方 5 秒内会收到发送方所发送的数据，否则会收到 didOccurStreamMessageError 回调获得相应报错信息。
 - NO: 接收方不保证收到，就算数据丢失也不会报错。

 @param ordered  设置接收方是否收到发送顺序中的数据流:

 - YES: 接收方 5 秒内会按照发送方发送的顺序收到数据包。
 - NO: 接收方不保证按照发送方发送的顺序收到数据包

 @return 0方法调用成功，<0方法调用失败
*/
- (int)createDataStream:(NSInteger * _Nonnull)streamId reliable:(BOOL)reliable ordered:(BOOL)ordered;

/** 发送数据流

 该方法发送数据流消息到频道内所有用户。SDK 对该方法的实现进行了如下限制：频道内每秒最多能发送 30 个包，且每个包最大为 1 KB。 每个客户端每秒最多能发送 6 KB 数据。频道内每人最多能同时有 5 个数据通道。

 成功调用该方法后，远端会触发 receiveStreamMessageFromUid 回调，远端用户可以在该回调中获取接收到的流消息；若调用失败，远端会触发 didOccurStreamMessageErrorFromUid 回调。

 **Note:**

 - 该方法仅适用于通信场景以及直播场景下的主播用户，如果直播场景下的观众调用此方法可能会造成观众变主播。
 - 请确保在调用该方法前，已调用 createDataStream 创建了数据通道。

 @param streamId 数据流 ID，createDataStream 的返回值。
 @param data   需要发送的消息

 @return 0方法调用成功，<0方法调用失败
*/
- (int)sendStreamMessage:(NSInteger)streamId data:(NSData * _Nonnull)data;

//MARK: - 其他视频控制
/**-----------------------------------------------------------------------------
* @name 其他视频控制
* -----------------------------------------------------------------------------
*/

/** 设置摄像头采集偏好

一般的视频通话或直播中，默认由 SDK 自动控制摄像头的输出参数。在如下特殊场景中，默认的参数通常无法满足需求，或可能引起设备性能问题，我们推荐调用该方法设置摄像头的采集偏好：

* 使用原始音视频数据自采集接口时，如果 SDK 输出的分辨率和帧率高于 setVideoEncoderConfiguration 中指定的参数，在后续处理视频帧的时候，比如美颜功能时，会需要更高的 CPU 及内存，容易导致性能问题。在这种情况下，我们推荐将摄像头采集偏好设置为 ARCameraCaptureOutputPreferencePerformance(1)，避免性能问题。
* 如果没有本地预览功能或者对预览质量没有要求，我们推荐将采集偏好设置为 ARCameraCaptureOutputPreferencePerformance(1)，以优化 CPU 和内存的资源分配。
* 如果用户希望本地预览视频比实际编码发送的视频清晰，可以将采集偏好设置为 ARCameraCaptureOutputPreferencePreview(2)。

**Note**

请在启动摄像头之前调用该方法，如 joinChannelByToken，enableVideo 或者 enableLocalVideo 之前。

@param configuration 摄像头采集偏好，详见 ARCameraCapturerConfiguration

@return 0方法调用成功，<0方法调用失败
 */
- (int)setCameraCapturerConfiguration:(ARCameraCapturerConfiguration * _Nullable)configuration;

/** 开启/关闭本地人脸检测

 开启本地人脸检测后，SDK 会触发 facePositionDidChangeWidth 回调向你报告人脸检测的信息：:

 - 摄像头采集的画面大小
 - 人脸在画面中的位置
 - 人脸距设备屏幕的距离
 
 @param enable 是否开启人脸检测：
 
 - YES: 开启人脸检测
 - NO: （默认）关闭人脸检测
 
 @return 0方法调用成功，<0方法调用失败
 */
- (int)enableFaceDetection:(BOOL)enable;

#if TARGET_OS_IPHONE

//MARK: - 摄像头控制
/**-----------------------------------------------------------------------------
* @name 摄像头控制
* -----------------------------------------------------------------------------
*/

/** 切换前置/后置摄像头

**Note**

本方法仅适用于 iOS 平台，不适用于 macOS。
 
@return 0方法调用成功，<0方法调用失败
*/
- (int)switchCamera;

/** 检测设备是否支持摄像头缩放功能
 
@return YES: 设备支持摄像头缩放功能; NO: 设备不支持摄像头缩放功能。
*/
- (BOOL)isCameraZoomSupported;

/** 检测设备是否支持闪光灯常开

**Note**
 
 * 本方法仅适用于 iOS 平台，不适用于 macOS。
 * 一般情况下，App 默认开启前置摄像头，因此如果你的前置摄像头不支持闪光灯常开，直接使用该方法会返回 NO。如果需要检查后置摄像头是否支持闪光灯常开，需要先使用 switchCamera 切换摄像头，再使用该方法。
 
@return YES: 设备支持闪光灯常开; NO：设备不支持闪光灯常开。
*/
- (BOOL)isCameraTorchSupported;

/** 检测设备是否支持手动对焦功能

**Note**
 
本方法仅适用于 iOS 平台，不适用于 macOS。
 
@return YES: 设备支持手动对焦功能；NO: 设备不支持手动对焦功能。
*/
- (BOOL)isCameraFocusPositionInPreviewSupported;

/** 检测设备是否支持手动曝光功能

**Note**
 
本方法仅适用于 iOS 平台，不适用于 macOS。
 
@return YES: 设备支持手动曝光功能；NO: 设备不支持手动曝光功能。
*/
- (BOOL)isCameraExposurePositionSupported;

/** 检测设备是否支持人脸对焦功能

**Note**
 
本方法仅适用于 iOS 平台，不适用于 macOS。
 
@return YES: 设备支持人脸对焦功能；NO: 设备不支持人脸对焦功能。
*/
- (BOOL)isCameraAutoFocusFaceModeSupported;

/** 设置摄像头缩放比例

**Note**
 
本方法仅适用于 iOS 平台，不适用于 macOS。
 
@param zoomFactor   摄像头缩放比例，有效范围是 1.0 到设备支持的最大缩放比例。
 
@return 设置成功返回设置的 factor 值，设置失败返回 < 0
*/
- (CGFloat)setCameraZoomFactor:(CGFloat)zoomFactor;

/** 设置手动对焦位置，并触发对焦
 
**Note**
 
本方法仅适用于 iOS 平台，不适用于 macOS。成功调用该方法后，本地会触发 cameraFocusDidChangedToRect 回调。

@param position 触摸点相对于视图的坐标
 
@return YES方法调用成功，NO方法调用失败
*/
- (BOOL)setCameraFocusPositionInPreview:(CGPoint)position;

/** 设置摄像头曝光位置

**Note**
 
本方法仅适用于 iOS 平台，不适用于 macOS。成功调用该方法后，本地会触发 cameraExposureDidChangedToRect 回调。

@param positionInView 触摸点相对于视图的横坐标和纵坐标
 
@return YES方法调用成功，NO方法调用失败
*/
- (BOOL)setCameraExposurePosition:(CGPoint)positionInView;

/** 设置是否打开闪光灯

@param isOn YES打开，NO关闭
 
@return YES方法调用成功，NO方法调用失败
*/
- (BOOL)setCameraTorchOn:(BOOL)isOn;

/** 设置是否开启人脸对焦功能

@param enable YES开启，NO关闭，默认关闭
 
@return YES方法调用成功，NO方法调用失败
*/
- (BOOL)setCameraAutoFocusFaceModeEnabled:(BOOL)enable;

#endif

#if (!(TARGET_OS_IPHONE) && (TARGET_OS_MAC))
//MARK: - 屏幕共享

/**-----------------------------------------------------------------------------
 * @name 屏幕共享
 * -----------------------------------------------------------------------------
 */

/** 通过屏幕 ID 共享屏幕（仅支持 macOS ）
 
共享一个屏幕或该屏幕的部分区域。你需要在该方法中指定想要共享的屏幕 ID。
 
**Note**: 该方法需要在加入频道后调用。

@param displayId 待共享的屏幕 ID。通过该参数指定你要共享的那个屏幕。
@param rectangle （可选）待共享区域相对于整个屏幕的位置。如不填，则表示共享整个屏幕。由如下参数组成：

- x：左上角的横向偏移
- y：左上角的纵向偏移
- width：待共享区域的宽
- height：待共享区域的高

 如果设置的共享区域超出了屏幕的边界，则只共享屏幕内的内容；如果宽或高设为 0，则共享整个屏幕。
@param captureParams 屏幕共享的编码参数配置。默认的分辨率为 1920 x 1080，即 2073600 像素。该像素值为计费标准。 详见 ARScreenCaptureParameters 中的说明。

@return 0方法调用成功，<0方法调用失败
 */
- (int)startScreenCaptureByDisplayId:(NSUInteger)displayId
                           rectangle:(CGRect)rectangle
                          parameters:(ARScreenCaptureParameters * _Nonnull)captureParams;

/** 通过窗口 ID 共享窗口（仅支持 macOS ）
 
共享一个窗口或该窗口的部分区域。你需要在该方法中指定想要共享的窗口 ID。
 
**Note**: 该方法需要在加入频道后调用。

@param windowId 待共享的窗口 ID。通过该参数指定你要共享的那个窗口
@param rectangle （可选）待共享区域相对于整个窗口的位置。如不填，则表示共享整个窗口。由如下参数组成：

 - x：左上角的横向偏移
 - y：左上角的纵向偏移
 - width：待共享区域的宽
 - height：待共享区域的高

 如果设置的共享区域超出了窗口的边界，则只共享窗口内的内容；如果宽或高设为 0，则共享整个窗口。
@param captureParams 屏幕共享的编码参数配置。默认的分辨率为 1920 x 1080，即 2073600 像素。该像素值为计费标准。 详见 ARScreenCaptureParameters 中的说明。

@return 0方法调用成功，<0方法调用失败
 */
- (int)startScreenCaptureByWindowId:(NSUInteger)windowId
                          rectangle:(CGRect)rectangle
                         parameters:(ARScreenCaptureParameters * _Nonnull)captureParams;

/** 更新屏幕共享的参数配置（仅支持 macOS ）

@param captureParams 屏幕共享的编码参数配置。默认的分辨率为 1920 x 1080，即 2073600 像素。该像素值为计费标准。

@return 0方法调用成功，<0方法调用失败
 */
- (int)updateScreenCaptureParameters:(ARScreenCaptureParameters * _Nonnull)captureParams;

/** 更新屏幕共享区域 （仅支持 macOS ）

 @param rect 待共享区域相对于整个屏幕或窗口的位置。如不填，则表示共享整个屏幕或窗口。由如下参数组成：
 
 - x：左上角的横向偏移
 - y：左上角的纵向偏移
 - width：待共享区域的宽
 - height：待共享区域的高
 
 如果设置的共享区域超出了屏幕或窗口的边界，则只共享屏幕或窗口内的内容；如果宽或高设为 0，则共享整个屏幕或窗口。

@return 0方法调用成功，<0方法调用失败
*/
- (int)updateScreenCaptureRegion:(CGRect)rect;

/** 停止屏幕共享（仅支持 macOS ）

 @return 0方法调用成功，<0方法调用失败
 */
- (int)stopScreenCapture;

#endif

#if (!(TARGET_OS_IPHONE) && (TARGET_OS_MAC))
//MARK: - 音视频设备管理 (macOS)

/**-----------------------------------------------------------------------------
 * @name 音视频设备管理 (仅支持 macOS)
 * -----------------------------------------------------------------------------
 */

/** 监控设备改变 (仅支持 macOS)

 该方法用来启动设备插拔检测，这里设备指的是音视频外接设备，比如外接摄像头等。开启后，会触发设备状态改变回调。

 @param enabled - YES: 开启监控
 - NO: 关闭监控
 */
- (void)monitorDeviceChange:(BOOL)enabled;

/** 获取系统中所有的音视频设备 (仅支持 macOS)

**Note:**

 不要在主线程调用该方法。

 该方法返回一个 NSArray 对象，包含系统中所有的音视频设备。应用程序可以通过 ARtcDeviceInfo array 对象枚举设备。

 @param type 要枚举的设备类型，详见 ARMediaDeviceType
 @return 调用成功时，返回 ARtcDeviceInfo NSArray 对象，包含所有的音视频设备。
 */
- (NSArray<ARtcDeviceInfo *> * _Nullable)enumerateDevices:(ARMediaDeviceType)type;

/** 指定设备 (仅支持 macOS)

 @param type  设备的类型，包括音、视频采集或播放设备，详见 ARMediaDeviceType
 @param deviceId 设备的 Device ID，可通过 enumerateDevices获取。插拔设备不会影响 deviceId 。
 @return 0方法调用成功，<0方法调用失败
 */

- (int)setDevice:(ARMediaDeviceType)type deviceId:(NSString * _Nonnull)deviceId;

/** 获取设备音量 (仅支持 macOS)

 @param type 设备的类型，包括音、视频采集或播放设备，详见 ARMediaDeviceType
 @return 该方法获取当前设备的音量。
 */
- (int)getDeviceVolume:(ARMediaDeviceType)type;

/** 设置设备音量 (仅支持 macOS)

 @param type   设备的类型，包括音、视频采集或播放设备，详见 ARMediaDeviceType
 @param volume 设置的音量（0 ~ 100）
 @return 0方法调用成功，<0方法调用失败
 */
- (int)setDeviceVolume:(ARMediaDeviceType)type volume:(int)volume;

/** 启动音频采集设备测试 (仅支持 macOS)

 该方法测试音频采集设备是否能正常工作。

 调用该方法后，SDK 会按设置的时间间隔触发 reportAudioVolumeIndicationOfSpeakers 回调，报告 uid = "0"及采集设备的音量信息。

 @param indicationInterval SDK 返回 reportAudioVolumeIndicationOfSpeakers 回调的时间间隔，单位为毫秒。建议设置到大于 200 毫秒。 不得少于 10 毫秒，否则会收不到 reportAudioVolumeIndicationOfSpeakers 回调。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)startRecordingDeviceTest:(int)indicationInterval;

/** 停止麦克风测试 (仅支持 macOS)

 该方法停止麦克风测试。调用 startRecordingDeviceTest 后，必须调用该方法停止测试。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)stopRecordingDeviceTest;

 /** 启动音频播放设备测试 (仅支持 macOS)

  该方法测试音频播放设备是否能正常工作。启动测试后，SDK 播放指定的音频文件，测试者如果能听到声音，说明播放设备能正常工作。

  调用该方法后，SDK 会每隔 100 ms 触发一次 reportAudioVolumeIndicationOfSpeakers 回调，报告 uid = "1" 及播放设备的音量信息。
  
**Note:** 该方法需要在加入频道前调用。

 @param audioFileName 指定音频文件的绝对路径，路径字符串使用UTF-8编码格式:
  - 支持的文件格式: wav，mp3，m4a，aac
  - 支持的文件采样率: 8000，16000，32000，44100，48000

 @return 0方法调用成功，<0方法调用失败
 */
- (int)startPlaybackDeviceTest:(NSString * _Nonnull)audioFileName;

/** 停止播放设备测试 (仅支持 macOS)

 该方法停止播放设备测试。调用 startPlaybackDeviceTest 后，必须调用该方法停止测试。
 
**Note:** 该方法需要在加入频道前调用。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)stopPlaybackDeviceTest;

/** 启动视频采集设备测试 (仅支持 macOS)

 用于测试当前视频采集设备是否工作正常，使用前需保证已调用过 enableVideo ，且传入参数的 view 窗口有效。
 
**Note:** 该方法需要在加入频道前调用。
 
 @param view 输入参数，用于显示图像的窗口

 @return 0方法调用成功，<0方法调用失败
 */
- (int)startCaptureDeviceTest:(NSView * _Nonnull)view;

/** 停止视频采集设备测试 (仅支持 macOS)

 停止视频采集设备测试，如果之前调用了 startCaptureDeviceTest，必须通过该方法停止测试。
 
**Note:** 该方法需要在加入频道前调用。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)stopCaptureDeviceTest;

/** 开始音频设备回路测试 (仅支持 macOS)

 该方法测试音频采集和播放设备是否能正常工作。一旦测试开始，音频采集设备会采集本地音频，然后使用音频播放设备播放出来。SDK 会按设置的时间间隔触发 两个 reportAudioVolumeIndicationOfSpeakers 回调，分别报告音频采集设备（uid = 0）和音频播放设备（uid = 1）的音量信息。

**Note:**

 - 该方法仅在本地进行音频设备测试，不涉及网络连接。
 - 该方法需要在加入频道前调用。

@param indicationInterval SDK 返回 reportAudioVolumeIndicationOfSpeakers 回调的时间间隔，单位为毫秒。建议设置为大于 200 毫秒。 不得少于 10 毫秒，否则会收不到 reportAudioVolumeIndicationOfSpeakers 回调。

@return 0方法调用成功，<0方法调用失败
*/
-(int)startAudioDeviceLoopbackTest:(int)indicationInterval;

/** 停止音频设备回路测试 (仅支持 macOS)

 在调用 startAudioDeviceLoopbackTest 后，必须调用该方法停止音频设备回路测试。
 
**Note:** 该方法需要在加入频道前调用。

@return 0方法调用成功，<0方法调用失败
*/
-(int)stopAudioDeviceLoopbackTest;

#endif

//MARK: - 媒体附属信息

//MARK: - 其它方法
/**-----------------------------------------------------------------------------
* @name 其它方法
* -----------------------------------------------------------------------------
*/

/** 获取通话 ID

 客户端在每次 joinChannelByToken 后会生成一个对应的 CallId，标识该客户端的此次通话。有些方法如 rate，complain需要在通话结束后调用，向 SDK 提交反馈，这些方法必须指定 CallId 参数。使用这些反馈方法，需要在通话过程中调用 getCallId 方法获取 CallId，在通话结束后在反馈方法中作为参数传入。

 @return 当前通话 ID
 */
- (NSString * _Nullable)getCallId;

/** 分发／不分发回调至主队列

 如果不分发回调方法到主队列， App 应将 UI 操作分发到主队列。

 @param enabled 设置是否将委托方法分发到主队列:

 * YES: 分发回调方法到主队列
 * NO: 不分发回调方法到主队列

 @return 0方法调用成功，<0方法调用失败
 */
- (int)enableMainQueueDispatch:(BOOL)enabled;

/** 查询 SDK 版本号

 @return 当前的 SDK 版本号，格式为字符串，如 4.0.0
 */
+ (NSString * _Nonnull)getSdkVersion;

/** 获取警告或错误描述。

 @param code didOccurWarning 或 didOccurError 提供的警告码或错误码。

 @return 警告或错误描述
 */
+ (NSString * _Nullable)getErrorDescription:(NSInteger)code;

/** 设置日志文件路径

设置 SDK 的输出 log 文件。SDK 运行时产生的所有 log 将写入该文件。 App 必须保证指定的目录存在而且可写。

**Note**

 - 日志文件的默认地址如下:
   - iOS: `App Sandbox/Library/caches/ar_sdk.log`
   - macOS
     - 开启沙盒: `App Sandbox/Library/Logs/ar_sdk.log`, 例如 `/Users/<username>/Library/Containers/<App Bundle Identifier>/Data/Library/Logs/ar_sdk.log`.
     - 关闭沙盒: `～/Library/Logs/ar_sdk.log`.
 - 如需调用本方法，请在调用 sharedEngineWithAppId 方法初始化 ARtcEngineKit 对象后立即调用，否则可能造成输出日志不完整。

 @param filePath 日志文件的完整路径。该日志文件为 UTF-8 编码。

 @return 0方法调用成功，<0方法调用失败
 */
- (int)setLogFile:(NSString * _Nonnull)filePath;

/** 设置日志文件大小

设置 SDK 输出的日志文件大小，单位为 KB。

SDK 设有 2 个日志文件，每个文件大小为 512 KB。如果你将 fileSizeInKByte 设置为 1024 KB， SDK 会最多输出 2 MB 的日志文件。如果日志文件大小超出设置值，新的日志会覆盖之前的日志。

 @param fileSizeInKBytes 指定 SDK 输出日志文件的内存大小，单位为 KB。

 @return 0方法调用成功，<0方法调用失败，有可能是因为传入的参数无效
 */
- (int)setLogFileSize:(NSUInteger)fileSizeInKBytes;

/** 设置日志输出等级

@param filter 日志输出等级

@return 0方法调用成功，<0方法调用失败
*/
- (int)setLogFilter:(ARLogFilter)filter;

/** 获取 Native SDK Engine 句柄

该方法获取 native SDK engine 的 C++ handle，用于包括注册音视频帧观测器在内的特殊场景。
*/
- (void *_Nullable)getNativeHandle;

/** 设置／获取 ARtcEngineDelegate

 ar云平台 Native SDK 通过指定的 delegate 通知 App 引擎运行时的事件。Delegate 中定义的所有方法都是可选实现的。
 */
@property (nonatomic, weak) id<ARtcEngineDelegate> _Nullable delegate;

//MARK: - 定制方法
/**-----------------------------------------------------------------------------
* @name 定制方法
* -----------------------------------------------------------------------------
*/

/** 通过 JSON 配置 SDK 提供技术预览或特别定制功能

**Note**

 JSON 选项默认不公开。

 @param options JSON 格式的 SDK 选项
 
 @return 0方法调用成功，<0方法调用失败
 */
- (int)setParameters:(NSString * _Nonnull)options;

/** 获取 ar云平台 SDK 可供自定义的参数

**Note**

 该方法未公开，请联系ar云平台支持 hi@dync.cc 获取详情。
 
 @param parameter 定制参数
 @param args 参数
 
 @return json字符串
 */
- (NSString * _Nullable)getParameter:(NSString * _Nonnull)parameter args:(NSString * _Nullable)args;

@end

NS_ASSUME_NONNULL_END
