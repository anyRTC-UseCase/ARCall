//
//  ARtcEngineDelegate.h
//  ARtcKit
//
//  Created by 余生丶 on 2020/3/18.
//  Copyright © 2020 zjq. All rights reserved.
//

#ifndef ARtcEngineDelegate_h
#define ARtcEngineDelegate_h
#import "AREnumerates.h"
#import "ARObjects.h"

@class ARtcEngineKit;

@protocol ARtcEngineDelegate <NSObject>

@optional

//MARK: - 核心事件回调
/**-----------------------------------------------------------------------------
* @name 核心事件回调
* -----------------------------------------------------------------------------
*/

/** 发生警告回调

@param engine   ARtcEngineKit对象
@param warningCode   警告码，详见 ARWarningCode
*/
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine didOccurWarning:(ARWarningCode)warningCode;

/** 发生错误回调

@param engine   ARtcEngineKit对象
@param errorCode   错误码，详见 ARErrorCode
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine didOccurError:(ARErrorCode)errorCode;

/** 加入频道回调

@param engine   ARtcEngineKit对象
@param channel   频道名称
@param uid   用户ID
@param elapsed   从调用joinChannelByToken开始到发生此事件过去的时间（ms)。
*/
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine didJoinChannel:(NSString * _Nonnull)channel withUid:(NSString * _Nonnull)uid elapsed:(NSInteger)elapsed;

/** 重新加入频道回调

有时候由于网络原因，客户端可能会和服务器失去连接，SDK 会进行自动重连，自动重连成功后触发此回调方法。

@param engine   ARtcEngineKit对象
@param channel   频道名称
@param uid   用户ID
@param elapsed   从开始重连到重连成功的时间（ms）。
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine didRejoinChannel:(NSString *_Nonnull)channel withUid:(NSString * _Nonnull)uid elapsed:(NSInteger)elapsed;

/** 已离开频道回调

 当用户调用 leaveChannel 离开频道后，SDK 会触发该回调。在该回调方法中，App 可以得到此次通话的总通话时长、SDK 收发数据的流量等信息。

 @param engine ARtcEngineKit对象
 @param stats  通话相关的统计信息，详见 ARChannelStats
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine didLeaveChannelWithStats:(ARChannelStats * _Nonnull)stats;

/** 用户角色已切换回调

直播场景下，当本地用户在加入频道后调用 setClientRole 切换角色时会触发此回调，即主播切换为观众时，或观众切换为主播时。

@param engine   ARtcEngineKit对象
@param oldRole   切换前的角色
@param newRole   切换后的角色
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine didClientRoleChanged:(ARClientRole)oldRole newRole:(ARClientRole)newRole;

/** 远端用户/主播加入回调

@param engine   ARtcEngineKit对象
@param uid   新加入频道的远端用户/主播 ID。如果 joinChannelByToken 中指定了 uid，则此处返回该 ID；否则使用ar云平台服务器自动分配的 ID。
@param elapsed   从本地用户加入频道 joinChannelByToken开始到发生此事件过去的时间（ms）。
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine didJoinedOfUid:(NSString *_Nonnull)uid elapsed:(NSInteger)elapsed;

/** 远端用户（通信场景）/主播（直播场景）离开当前频道回调

@param engine   ARtcEngineKit对象
@param uid   离线的用户 ID。
@param reason   离线原因，详见 ARUserOfflineReason。
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine didOfflineOfUid:(NSString *_Nonnull)uid reason:(ARUserOfflineReason)reason;

/** 网络连接状态已改变回调

该回调在网络连接状态发生改变的时候触发，并告知用户当前的网络连接状态，和引起网络状态改变的原因。

@param engine ARtcEngineKit对象
@param state 当前的网络连接状态，详见 ARConnectionStateType。
@param reason 引起网络连接状态发生改变的原因，详见 ARConnectionChangedReason。
*/
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine connectionChangedToState:(ARConnectionStateType)state reason:(ARConnectionChangedReason)reason;

/** 本地网络类型发生改变回调

@param engine   ARtcEngineKit对象
@param type   网络连接类型，详见 ARNetworkType。
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine networkTypeChangedToType:(ARNetworkType)type;

/** 网络连接中断，且 SDK 无法在 10 秒内连接服务器回调

@param engine   ARtcEngineKit对象
*/
- (void)rtcEngineConnectionDidLost:(ARtcEngineKit *_Nonnull)engine;

/** Token 服务即将过期回调

 在调用 joinChannelByToken 时如果指定了 Token，由于 Token 具有一定的时效，在通话过程中如果 Token 即将失效，SDK 会提前 30 秒触发该回调，提醒应用程序更新 Token。 当收到该回调时，用户需要重新在服务端生成新的 Token，然后调用 renewToken 将新生成的 Token 传给 SDK。

 @param engine ARtcEngineKit 对象
 @param token  即将服务失效的 Token
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine tokenPrivilegeWillExpire:(NSString *_Nonnull)token;

/** Token 过期回调

 在调用 joinChannelByToken 时如果指定了 Token，由于 Token 具有一定的时效，在通话过程中 SDK 可能由于网络原因和服务器失去连接，重连时可能需要新的 Token。 该回调通知 App 需要生成新的 Token，并需调用 renewToken 为 SDK 指定新的 Token。

 @param engine ARtcEngineKit 对象
 */
- (void)rtcEngineRequestToken:(ARtcEngineKit * _Nonnull)engine;


//MARK: - 媒体事件回调
/**-----------------------------------------------------------------------------
* @name 媒体事件回调
* -----------------------------------------------------------------------------
*/

/** 提示频道内谁正在说话、说话者音量及本地用户是否在说话的回调

 与 audioVolumeIndicationBlock 相同。

 该回调报告频道内瞬时音量最高的几个用户（最多三个用户）的用户 ID、他们的音量及本地用户是否在说话。

 该回调默认禁用。可以通过 enableAudioVolumeIndication 方法开启；开启后，无论频道内是否有人说话，SDK 都会按 enableAudioVolumeIndication 方法中设置的时间间隔触发 reportAudioVolumeIndicationOfSpeakers 回调。每次触发，用户会收到两个独立的 reportAudioVolumeIndicationOfSpeakers 回调，其中一个包含本地用户的音量信息，另一个包含远端所有用户的音量信息，详见下方参数描述。

**Note:**

 - 若需使用该回调 speakers 数组中的 vad 参数（即本地人声检测功能），请在 enableAudioVolumeIndication 方法中设置 report_vad 为 YES 。
 - 如果有用户将自己静音（调用了 muteLocalAudioStream ），会对该回调的行为产生影响。
 - 本地用户静音后 SDK 即不再报告本地用户的音量提示回调。
 - 远端说话者静音后 20 秒，远端的音量提示回调中将不再包含该用户；如果远端所有用户都将自己静音，20 秒后 SDK 不再报告远端用户的音量提示回调。

 @param engine      ARtcEngineKit 对象
 @param speakers    ARtcAudioVolumeInfo 数组。

 - 在本地用户的回调中，此数组中包含以下成员：
  - `uid` = 0,
  - volume 等于 totalVolume，返回本地用户混音后的音量；
  - vad，返回本地用户人声状态。

 - 在远端用户的回调中，此数组中包含以下成员：
  - uid 为每位说话者各自的用户 ID；
  - volume 为说话者各自混音后的音量；
  - vad = 0，对远端用户无效。 如果报告的 speakers 数组为空，则表示此时远端没有人说话。

 @param totalVolume （混音后的）总音量，取值范围为 [0,255]。

 - 在本地用户的回调中，totalVolume 为本地用户混音后的音量。
 - 在远端用户的回调中，totalVolume 为所有说话者混音后的总音量。
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine reportAudioVolumeIndicationOfSpeakers:(NSArray<ARtcAudioVolumeInfo *> * _Nonnull)speakers totalVolume:(NSInteger)totalVolume;

/** 监测到活跃用户的回调

该回调获取当前时间段内累积音量最大者。如果用户开启了 enableAudioVolumeIndication 功能，则当音量检测模块监测到频道内有新的活跃用户说话时，会通过本回调返回该用户的 uid。

**Note**
- 你需要开启 enableAudioVolumeIndication 方法才能收到该回调
- uid 返回的是当前时间段内声音最大的用户 uid，而不是瞬时声音最大的用户 uid。
 
 @param engine     ARtcEngineKit 对象
 @param speakerUid 当前时间段声音最大的用户的 uid。
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine activeSpeaker:(NSString * _Nonnull)speakerUid;

/** 已发送本地音频首帧的回调

 @param engine  ARtcEngineKit 对象
 @param elapsed 从本地用户调用joinChannelByToken开始到发生此事件过去的时间（ms)。
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine firstLocalAudioFrame:(NSInteger)elapsed;

 /** 已显示本地视频首帧的回调

 第一帧本地视频显示时，触发此回调。
  
 @param engine  ARtcEngineKit 对象
 @param size    本地渲染的视频尺寸（宽度和高度）
 @param elapsed 从本地用户调用joinChannelByToken到发生此事件过去的时间（ms）。 如果在joinChannelByToken前调用了startPreview，是从startPreview到发生此事件过去的时间。
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine firstLocalVideoFrameWithSize:(CGSize)size elapsed:(NSInteger)elapsed;

/** 远端音频流状态发生改变回调。

 远端用户/主播音频状态发生改变时，SDK 会触发该回调向本地用户报告当前的远端音频流状态。
 
 @param engine ARtcEngineKit 对象
 @param uid 发生音频状态改变的远端用户 ID。
 @param state  远端音频流状态。详见 ARAudioRemoteState。
 @param reason 远端音频流状态改变的具体原因。详见 ARAudioRemoteStateReason。
 @param elapsed 从本地用户调用 joinChannelByToken 方法到发生本事件经历的时间，单位为 ms。
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine remoteAudioStateChangedOfUid:(NSString *_Nonnull)uid state:(ARAudioRemoteState)state reason:(ARAudioRemoteStateReason)reason elapsed:(NSInteger)elapsed;

/** 本地音频状态发生改变回调。

 本地音频的状态发生改变时（包括本地麦克风录制状态和音频编码状态），SDK会触发该回调报告当前的本地音频状态。在本地音频出现故障时，该回调可以帮助你了解当前音频的状态以及出现故障的原因，方便你排查问题。
 
 **Note:**
    
 当状态为 ARAudioLocalStateFailed(3) 时，你可以在 error 参数中查看返回的错误信息。

 @param engine ARtcEngineKit 对象
 @param state 当前的本地音频状态。详见 ARAudioLocalState。
 @param error 本地音频出错原因。详见 ARAudioLocalError。
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine localAudioStateChange:(ARAudioLocalState)state error:(ARAudioLocalError)error;

/** 本地或远端视频大小和旋转信息发生改变回调

 @param engine   ARtcEngineKit 对象
 @param uid     图像尺寸和旋转信息发生变化的用户的用户 ID
 @param size    新的视频尺寸
 @param rotation 旋转信息 (0 到 360)
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine videoSizeChangedOfUid:(NSString *_Nonnull)uid size:(CGSize)size rotation:(NSInteger)rotation;

/** 远端视频状态发生改变回调

@param engine ARtcEngineKit 对象。
@param uid 发生视频状态改变的远端用户 ID。
@param state 远端视频流状态。详见 ARVideoRemoteState。
@param reason 远端视频流状态改变的具体原因。详见 ARVideoRemoteStateReason。
@param elapsed 从本地用户调用 joinChannelByToken 方法到发生本事件经历的时间，单位为 ms。
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine remoteVideoStateChangedOfUid:(NSString *_Nonnull)uid state:(ARVideoRemoteState)state reason:(ARVideoRemoteStateReason)reason elapsed:(NSInteger)elapsed;

/** 本地视频状态发生改变回调

本地视频的状态发生改变时，SDK 会触发该回调返回当前的本地视频状态。

在本地视频出现故障时，你可以通过该回调了解当前视频的状态以及出现故障的原因，方便排查问题。

 @param engine ARtcEngineKit 对象。
 @param state 本地视频状态，详见 ARLocalVideoStreamState。当本地视频状态为 ARLocalVideoStreamStateFailed(3) 时，你可以在 error 参数中查看返回的错误原因。
 @param error 本地视频出错原因，详见 ARLocalVideoStreamError。
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine localVideoStateChange:(ARLocalVideoStreamState)state error:(ARLocalVideoStreamError)error;

//MARK: - 统计数据事件回调
/**-----------------------------------------------------------------------------
* @name 统计数据事件回调
* -----------------------------------------------------------------------------
*/

/** 通话中远端音频流的统计信息回调，用于取代 audioQualityOfUid

 该回调描述远端用户在通话中端到端的音频流统计信息，针对每个远端用户/主播每 2 秒触发一次。

 如果远端同时存在多个用户/主播，该回调每 2 秒会被触发多次。

 和 audioTransportStatsOfUid 回调相比，该回调更贴近用户的主观感受。

 比如，当网络发生丢包时，因 FEC（Forward Error Correction，向前纠错码）或重传恢复，最终的音频丢帧率不高，则可以认为整个质量较好。

 @param engine ARtcEngineKit 对象。
 @param stats  远端音频统计数据，详细定义见 ARtcRemoteAudioStats。
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine remoteAudioStats:(ARtcRemoteAudioStats * _Nonnull)stats;


/** 当前通话统计回调。 该回调在通话或直播中每两秒触发一次。

 @param engine ARtcEngineKit 对象。
 @param stats 通话相关的数据统计信息，详见 ARChannelStats
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine reportRtcStats:(ARChannelStats * _Nonnull)stats;

/** 通话中每个用户的网络上下行 last mile 质量报告回调

 该回调描述每个用户在通话中的 last mile 网络状态，其中 last mile 是指设备到 ar云平台 边缘服务器的网络状态。

 该回调每 2 秒触发一次。如果远端有多个用户，该回调每 2 秒会被触发多次。

 @param engine  ARtcEngineKit 对象
 @param uid       用户 ID。表示该回调报告的是持有该 ID 的用户的网络质量。
 @param txQuality
 
 该用户的上行网络质量。基于上行视频的发送码率、上行丢包率、平均往返时延和网络抖动计算。该值代表当前的上行网络质量，帮助判断是否可以支持当前设置的视频编码属性。

 假设上行码率是 500 Kbps，那么支持 480 x 480 的分辨率、30 fps 的帧率没有问题，但是支持 1280 x 720 的分辨率就会有困难。详见 ARNetworkQuality。
 
 @param rxQuality 该用户的下行网络质量。基于下行网络的丢包率、平均往返延时和网络抖动计算。详见 ARNetworkQuality。
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine networkQuality:(NSString * _Nonnull)uid txQuality:(ARNetworkQuality)txQuality rxQuality:(ARNetworkQuality)rxQuality;

/** 本地视频流统计信息回调

 @param engine ARtcEngineKit 对象。
 @param stats 报告更新本地视频统计信息，该回调方法每两秒触发一次。
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine localVideoStats:(ARtcLocalVideoStats * _Nonnull)stats;

/** 通话中本地音频流的统计信息回调。
 
 该回调描述本地设备发送音频流的统计信息。SDK 每 2 秒触发该回调一次。
 
 @param engine ARtcEngineKit 对象。
 @param stats 本地音频统计数据。详见 ARtcLocalAudioStats。
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine localAudioStats:(ARtcLocalAudioStats * _Nonnull)stats;

/** 通话中远端视频流的统计信息回调

 该回调描述远端用户在通话中端到端的视频流统计信息，针对每个远端用户/主播每 2 秒触发一次。

 如果远端同时存在多个用户/主播，该回调每 2 秒会被触发多次。


 @param engine ARtcEngineKit 对象。
 @param stats  远端视频统计数据，详见 ARtcRemoteVideoStats
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine remoteVideoStats:(ARtcRemoteVideoStats * _Nonnull)stats;

//MARK: - 音频播放事件回调
/**-----------------------------------------------------------------------------
* @name 音频播放事件回调
* -----------------------------------------------------------------------------
*/

/** 本地音效文件播放已结束回调

 当调用 playEffect 播放音效结束后，会触发该回调。

 @param engine  ARtcEngineKit 对象。
 @param soundId 自行设定的音效 ID，需保证唯一性。
 */
- (void)rtcEngineDidAudioEffectFinish:(ARtcEngineKit * _Nonnull)engine soundId:(NSInteger)soundId;

//MARK: - CDN Publisher Delegate Methods

//MARK: - Inject Stream URL Delegate Methods

//MARK: - Stream Message Delegate Methods

//MARK: - Miscellaneous Delegate Methods

//MARK: - Fallback Delegate Methods

//MARK: - 媒体设备事件回调
/**-----------------------------------------------------------------------------
* @name 媒体设备事件回调
* -----------------------------------------------------------------------------
*/
/** 语音路由已发生变化回调

当语音路由发生变化时，SDK 会触发此回调。

 @param engine  ARtcEngineKit 对象
 @param routing 设置语音路由，详见 ARAudioOutputRouting
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine didAudioRouteChanged:(ARAudioOutputRouting)routing;

#if defined (TARGET_OS_IPHONE) && TARGET_OS_IPHONE

/** 报告本地人脸检测结果。
 
 调用 enableFaceDetection(YES) 开启本地人脸检测后，你可以通过该回调实时获取以下人脸检测的信息：
 
 - 摄像头采集的画面大小
 - 人脸在画面中的位置
 - 人脸距设备屏幕的距离，该值由 SDK 通过摄像头采集的画面大小和人脸在画面中的位置拟合计算得出。
 
**Note**
 
 - 当检测到摄像头前没有人脸时，该回调触发频率会降低，以节省设备耗能。
 - 当人脸距离设备屏幕过近时，SDK 不会触发该回调。
 
 @param engine ARtcEngineKit 对象。
 @param width 摄像头采集画面的宽度 (px)。
 @param height 摄像头采集画面的高度 (px)。
 @param faces 检测到的人脸信息，详见 ARFacePositionInfo 。
 
 检测到几张人脸，就会报告几个 ARFacePositionInfo 数组。数组长度可以为 0，表示没有检测到摄像头前出现人脸。
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine facePositionDidChangeWidth:(int)width previewHeight:(int)height faces:(NSArray<ARFacePositionInfo *> *_Nullable)faces;

#endif

//MARK: - 其它回调方法(不推荐使用)
/**-----------------------------------------------------------------------------
* @name 其它回调方法
* -----------------------------------------------------------------------------
*/

/** 已显示远端视频首帧回调
 
**Note**
 
推荐使用remoteVideoStateChangedOfUid回调。
 
@param engine ARtcEngineKit 对象
@param uid 远端用户 ID
@param size 视频尺寸（宽和高）
@param elapsed 从本地用户调用joinChannelByToken到发生此事件过去的时间（ms）。
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine firstRemoteVideoFrameOfUid:(NSString *_Nonnull)uid size:(CGSize)size elapsed:(NSInteger)elapsed;

/** 已完成远端视频首帧解码回调
 
**Note**
 
收到该回调，可调用setupRemoteVideo方法显示远端视图。推荐使用 remoteVideoStateChangedOfUid 回调的 ARVideoRemoteStateStarting(1) 和 ARVideoRemoteStateDecoding(2)。
 
@param engine ARtcEngineKit 对象
@param uid 远端用户 ID
@param size 视频流尺寸（宽度和高度）
@param elapsed 从本地用户调用 joinChannelByToken到发生此事件过去的时间（ms）。
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine firstRemoteVideoDecodedOfUid:(NSString *_Nonnull)uid size:(CGSize)size elapsed:(NSInteger)elapsed;

/** 已接收远端音频首帧的回调
 
**Note**
   
推荐使用 remoteAudioStateChangedOfUid 回调。

@param engine ARtcEngineKit 对象
@param uid 远端用户 ID
@param elapsed 从本地用户调用joinChannelByToken到发生此事件的时间（ms）。
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine firstRemoteAudioFrameOfUid:(NSString *_Nonnull)uid elapsed:(NSInteger)elapsed;

/** 已解码远端音频首帧的回调

**Note**
    
推荐使用 remoteAudioStateChangedOfUid 回调。SDK 完成远端音频首帧解码，并发送给音频模块用以播放时，会触发此回调。有两种情况：
 
 * 远端用户首次上线后发送音频
 * 远端用户音频离线再上线发送音频。音频离线指本地在 15 秒内没有收到音频包，可能有如下原因：
    * 远端用户离开频道
    * 远端用户掉线
    * 远端用户停止发送音频流（调用了 muteLocalAudioStream）
    * 远端用户关闭音频（调用了 disableAudio）

@param engine ARtcEngineKit 对象
@param uid 远端用户 ID
@param elapsed 从本地用户调用 joinChannelByToken 直至该回调触发的延迟，单位为毫秒。
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine firstRemoteAudioFrameDecodedOfUid:(NSString *_Nonnull)uid elapsed:(NSInteger)elapsed;

/** 远端用户暂停/重新发送视频回调（由muteLocalVideoStream触发 ）

**Note**
 
 推荐使用 remoteVideoStateChangedOfUid 回调的：
 
 * ARVideoRemoteStateStopped(0) and ARVideoRemoteStateReasonRemoteMuted(5).
 * ARVideoRemoteStateDecoding(2) 和 ARVideoRemoteStateReasonRemoteUnmuted(6)。

 当频道内的用户或主播数超过 20 人，该回调会失效。

 @param engine ARtcEngineKit 对象
 @param muted  暂停或恢复发送视频流：

 * Yes: 该用户已暂停发送其视频流
 * No: 该用户已恢复发送其视频流

 @param uid    远端用户 UID
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine didVideoMuted:(BOOL)muted byUid:(NSString *_Nonnull)uid;

/** 远端用户音频静音回调
 
 该回调是由远端用户调用 muteLocalAudioStream 方法关闭或开启音频发送触发的。当频道内的用户或主播人数超过 20 时，该回调不生效。

**Note**
    
推荐使用 remoteAudioStateChangedOfUid 回调：
 * ARAudioRemoteReasonRemoteMuted(5)
 * ARAudioRemoteReasonRemoteUnmuted(6)

@param engine ARtcEngineKit 对象
@param muted YES: 静音 NO:取消静音
@param uid 远端用户 ID
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine didAudioMuted:(BOOL)muted byUid:(NSString *_Nonnull)uid;

/** 其他用户启用/关闭视频回调（enableVideo 或 disableVideo触发）

**Note**
    
推荐使用 remoteVideoStateChangedOfUid 回调的：
 
 * ARVideoRemoteStateStopped(0) 和 ARVideoRemoteStateReasonRemoteMuted(5)。
 * ARVideoRemoteStateDecoding(2) 和 ARVideoRemoteStateReasonRemoteUnmuted(6)。
 
提示有其他用户启用/关闭了视频功能。关闭视频功能是指该用户只能进行语音直播，不能显示、发送自己的视频，也不能接收、显示别人的视频。
该回调是由远端用户调用 enableVideo 或 disableVideo 方法开启或关闭视频模块触发的。
 
@param engine ARtcEngineKit 对象
@param enabled 是否启用了视频功能:
 * YES: 该用户已启用了视频功能。启用后，该用户可以进行视频通话或直播。
 * NO: 该用户已关闭了视频功能。关闭后，该用户只能进行语音通话或直播，不能显示、发送自己的视频，也不能接收、显示别人的视频。
@param uid 远端用户 ID
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine didVideoEnabled:(BOOL)enabled byUid:(NSString *_Nonnull)uid;

/** 其他用户启用/关闭本地视频回调（enableLocalVideo触发）

**Note**
    
推荐使用 remoteVideoStateChangedOfUid 回调的：
 
 * ARVideoRemoteStateStopped(0) 和 ARVideoRemoteStateReasonRemoteMuted(5)。
 * ARVideoRemoteStateDecoding(2) 和 ARVideoRemoteStateReasonRemoteUnmuted(6)。

@param engine ARtcEngineKit 对象
@param enabled 是否启用了视频功能
 * YES: 该用户已启用本地视频功能。启用后，其他用户可以接收到该用户的视频流。
 * NO: 该用户已关闭视频功能。关闭后，该用户仍然可以接收其他用户的视频流，但其他用户接收不到该用户的视频流。
@param uid 远端用户 ID
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine didLocalVideoEnabled:(BOOL)enabled byUid:(NSString *_Nonnull)uid;

/** 麦克风状态已改变回调
 
 该回调是由本地用户调用 enableLocalAudio 方法开启或关闭本地音频采集触发的。

**Note**
    
推荐使用 localAudioStateChange 回调的： ARAudioLocalStateStopped(0) 或 ARAudioLocalStateRecording(1)。

@param engine ARtcEngineKit 对象
@param enabled YES: 麦克风已启用 NO: 麦克风已禁用
*/
- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine didMicrophoneEnabled:(BOOL)enabled;

/** 网络连接中断回调
 
 SDK 在和服务器建立连接后，失去了网络连接超过 4 秒，会触发该回调。在触发事件后，SDK 会主动重连服务器，所以该事件可以用于 UI 提示。

 与 rtcEngineConnectionDidLost 回调的区别是:

 rtcEngineConnectionDidInterrupted 回调一定是发生在加入频道成功后，且 SDK 刚失去和服务器连接超过 4 秒时触发。
 rtcEngineConnectionDidLost 回调是无论之前加入频道是否连接成功，只要 10 秒内和服务器无法建立连接都会触发。
 如果 SDK 在断开连接后，20 分钟内还是没能重新加入频道，SDK 会停止尝试重连。

**Note**
    
推荐使用connectionChangedToState回调。

@param engine ARtcEngineKit 对象
*/
- (void)rtcEngineConnectionDidInterrupted:(ARtcEngineKit *_Nonnull)engine;

/** 连接已被禁止回调
 
 当你被服务端禁掉连接的权限时，会触发该回调。

**Note**
    
推荐使用connectionChangedToState回调。

@param engine ARtcEngineKit 对象
*/
- (void)rtcEngineConnectionDidBanned:(ARtcEngineKit *_Nonnull)engine;

/** 通话中远端音频流传输的统计信息回调

 该回调描述远端用户通话中端到端的网络统计信息，通过音频包计算，用客观的数据，如丢包、网络延迟等，展示当前网络状态。

 通话中，当用户收到远端用户/主播发送的音频数据包后，会每 2 秒触发一次该回调。
 
 和 remoteAudioStats 回调相比，该回调以数据展示当前网络状态，因此更客观。
 
**Note**
     
 推荐使用remoteAudioStats回调。

 @param engine ARtcEngineKit 对象
 @param uid 用户 ID，指定是哪个用户/主播的音频包
 @param delay 音频包从发送端到接收端的延时（毫秒）
 @param lost 音频包从发送端到接收端的丢包率（%）
 @param rxKBitRate 远端音频包的接收码率（Kbps）
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine audioTransportStatsOfUid:(NSString *_Nonnull)uid delay:(NSUInteger)delay lost:(NSUInteger)lost rxKBitRate:(NSUInteger)rxKBitRate;

/** 通话中远端视频流传输的统计信息回调

 该回调描述远端用户通话中端到端的网络统计信息，通过视频包计算，用客观的数据，如丢包、网络延迟等，展示当前网络状态。

 通话中，当用户收到远端用户/主播发送的视频数据包后，会每 2 秒触发一次该回调。

 和 remoteVideoStats 回调相比，该回调以数据展示当前网络状态，因此更客观。
 
**Note**
     
 推荐使用remoteVideoStats回调。

 @param engine ARtcEngineKit 对象
 @param uid 用户 ID，指定是哪个用户/主播的视频包
 @param delay 视频包从发送端到接收端的延时（毫秒）
 @param lost 视频包从发送端到接收端 800 ms 内的丢包率（%）
 @param rxKBitRate 远端视频包的接收码率（Kbps）
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine videoTransportStatsOfUid:(NSString *_Nonnull)uid delay:(NSUInteger)delay lost:(NSUInteger)lost rxKBitRate:(NSUInteger)rxKBitRate;

/** 远端音频质量回调

 该回调描述远端用户在通话中的音频质量，针对每个远端用户/主播每 2 秒触发一次。如果远端同时存在多个用户/主播，该回调每 2 秒会被触发多次。
 
**Note**
     
 推荐使用remoteVideoStats回调。

 @param engine  ARtcEngineKit 对象
 @param uid 用户 ID，指定是谁发的音频流。
 @param quality 语音质量，详见 ARNetworkQuality
 @param delay  音频包从发送端到接收端的延迟（毫秒）。包括声音采样前处理、网络传输、网络抖动缓冲引起的延迟。
 @param lost    音频包从发送端到接收端的丢包率（%）
 */
- (void)rtcEngine:(ARtcEngineKit * _Nonnull)engine audioQualityOfUid:(NSString *_Nonnull)uid quality:(ARNetworkQuality)quality delay:(NSUInteger)delay lost:(NSUInteger)lost;

/** 摄像头就绪回调
 
 提示已成功打开摄像头，可以开始捕获视频。
 
**Note**
     
 推荐使用localVideoStateChange回调 state 参数中的 ARLocalVideoStreamStateCapturing(1)。
 
 @param engine ARtcEngineKit 对象
 */
- (void)rtcEngineCameraDidReady:(ARtcEngineKit * _Nonnull)engine;

/** 视频功能停止回调
 
 提示视频功能已停止。 App 如需在停止视频后对 view 做其他处理（比如显示其他画面），可以在这个回调中进行。

**Note**
     
 推荐使用localVideoStateChange回调 state 参数中的 ARLocalVideoStreamStateCapturing(0)。

 @param engine ARtcEngineKit 对象
 */
- (void)rtcEngineVideoDidStop:(ARtcEngineKit * _Nonnull)engine;

@end


#endif /* ARtcEngineDelegate_h */
