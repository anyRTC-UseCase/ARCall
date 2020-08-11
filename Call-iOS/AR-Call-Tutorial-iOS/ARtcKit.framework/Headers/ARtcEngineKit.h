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
 
 * 请在加入频道前调用该方法。
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
@param mirrorMode   远端用户视图的镜像模式，详见 ARVideoMirrorMode 。

@return 0方法调用成功，<0方法调用失败
*/
- (int)setRemoteRenderMode:(NSString *_Nonnull)uid renderMode:(ARVideoRenderMode)renderMode mirrorMode:(ARVideoMirrorMode)mirrorMode;

/** 开启视频预览

该方法用于在进入频道前启动本地视频预览。本地预览默认开启镜像功能。

调用该 API 前，必须：

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

成功调用该方法后，远端会触发 didVideoMuted 回调。
 
**Note**

 * 调用该方法时，SDK 不再发送本地视频流，但摄像头仍然处于工作状态。相比于 enableLocalVideo 用于控制本地视频流发送的方法，该方法响应速度更快。该方法不影响本地视频流获取，没有禁用摄像头。
 * 如果你在该方法后调用 setChannelProfile 方法，SDK 会根据你设置的频道场景以及用户角色，重新设置是否停止发送本地视频。因此我们建议在 setChannelProfile 后调用该方法。

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

//MARK: - 耳返设置
/**-----------------------------------------------------------------------------
* @name 耳返设置
* -----------------------------------------------------------------------------
*/

#if TARGET_OS_IPHONE

/** 开启耳返功能

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

//MARK: - 开启声卡采集

//MARK: - 音频其他方法

//MARK: - 网络相关测试

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

/** 获取当前视频源

  @return ARVideoSourceProtocol
 */
- (id<ARVideoSourceProtocol> _Nullable)videoSource;

//MARK: - 音频自采集 (仅适用于 push 模式)

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

//MARK: - 直播输入在线媒体流

//MARK: - CDN 旁路推流

//MARK: - 数据流

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

//MARK: - 屏幕共享

//MARK: - 音视频设备管理 (macOS)

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
