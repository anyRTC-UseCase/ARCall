//
//  ARtcChannelDelegate.h
//  ARtcKit
//
//  Created by 余生丶 on 2020/3/24.
//  Copyright © 2020 zjq. All rights reserved.
//

#ifndef ARtcChannelDelegate_h
#define ARtcChannelDelegate_h

@protocol ARtcChannelDelegate <NSObject>

/** 发生警告回调

@param rtcChannel   ARtcChannel 类。
@param warningCode   ARWarningCode
*/
- (void)rtcChannel:(ARtcChannel *_Nonnull)rtcChannel didOccurWarning:(ARWarningCode)warningCode;

/** 发生错误回调

@param rtcChannel   ARtcChannel 类。
@param errorCode   ARErrorCode
*/
- (void)rtcChannel:(ARtcChannel *_Nonnull)rtcChannel didOccurError:(ARErrorCode)errorCode;

/** 加入频道回调

@param rtcChannel   ARtcChannel 类。
@param uid   用户ID
@param elapsed   从调用joinChannelByToken开始到发生此事件过去的时间（ms)。
*/
- (void)rtcChannelDidJoinChannel:(ARtcChannel *_Nonnull)rtcChannel withUid:(NSString *_Nonnull)uid elapsed:(NSInteger)elapsed;

/** 重新加入频道回调

@param rtcChannel   ARtcChannel 类。
@param uid   用户ID
@param elapsed   从开始重连到重连成功的时间（ms）。
*/
- (void)rtcChannelDidRejoinChannel:(ARtcChannel *_Nonnull)rtcChannel withUid:(NSString *_Nonnull)uid elapsed:(NSInteger)elapsed;

/** 已离开频道回调

当用户调用 leaveChannel 离开频道后，SDK 会触发该回调。在该回调方法中，App 可以得到此次通话的总通话时长、SDK 收发数据的流量等信息。

@param rtcChannel  ARtcChannel 类。
@param stats   通话相关的统计信息：ARChannelStats
*/
- (void)rtcChannelDidLeaveChannel:(ARtcChannel *_Nonnull)rtcChannel withStats:(ARChannelStats *_Nonnull)stats;

/** 用户角色已切换回调

直播场景下，当本地用户在加入频道后调用 setClientRole 切换角色时会触发此回调，即主播切换为观众时，或观众切换为主播时。

@param rtcChannel ARtcChannel 类。
@param oldRole   切换前的角色
@param newRole   切换后的角色
*/
- (void)rtcChannel:(ARtcChannel *_Nonnull)rtcChannel didClientRoleChanged:(ARClientRole)oldRole newRole:(ARClientRole)newRole;

/** 远端用户/主播加入回调

@param rtcChannel ARtcChannel 类。
@param uid   新加入频道的远端用户/主播 ID。如果 joinChannelByToken 中指定了 uid，则此处返回该 ID；否则使用ar云平台服务器自动分配的 ID。
@param elapsed   从本地用户加入频道 joinChannelByToken开始到发生此事件过去的时间（ms）。
*/
- (void)rtcChannel:(ARtcChannel *_Nonnull)rtcChannel didJoinedOfUid:(NSString *_Nonnull)uid elapsed:(NSInteger)elapsed;

/** 远端用户（通信场景）/主播（直播场景）离开当前频道回调

@param rtcChannel ARtcChannel 类。
@param uid   离线的用户 ID。
@param reason   离线原因，详见 ARUserOfflineReason。
*/
- (void)rtcChannel:(ARtcChannel *_Nonnull)rtcChannel didOfflineOfUid:(NSString *_Nonnull)uid reason:(ARUserOfflineReason)reason;

/** 网络连接状态已改变回调

该回调在网络连接状态发生改变的时候触发，并告知用户当前的网络连接状态，和引起网络状态改变的原因。

@param rtcChannel ARtcChannel 类。
@param state 当前的网络连接状态，详见 ARConnectionStateType。
@param reason 引起网络连接状态发生改变的原因，详见 ARConnectionChangedReason。
*/
- (void)rtcChannel:(ARtcChannel * _Nonnull)rtcChannel connectionChangedToState:(ARConnectionStateType)state reason:(ARConnectionChangedReason)reason;

/** 网络连接中断，且 SDK 无法在 10 秒内连接服务器回调

SDK 在调用 joinChannelByToken 后无论是否加入成功，只要 10 秒和服务器无法连接就会触发该回调。

如果 SDK 在断开连接后，20 分钟内还是没能重新加入频道，SDK 会停止尝试重连。

@param rtcChannel ARtcChannel 类。
 */
- (void)rtcChannelDidLost:(ARtcChannel * _Nonnull)rtcChannel;

/** Token 服务即将过期回调

 在调用 joinChannelByToken 时如果指定了 Token，由于 Token 具有一定的时效，在通话过程中如果 Token 即将失效，SDK 会提前 30 秒触发该回调，提醒应用程序更新 Token。 当收到该回调时，用户需要重新在服务端生成新的 Token，然后调用 renewToken 将新生成的 Token 传给 SDK。

 @param rtcChannel  ARtcChannel 类。
 @param token  即将服务失效的 Token
 */
- (void)rtcChannel:(ARtcChannel * _Nonnull)rtcChannel tokenPrivilegeWillExpire:(NSString *_Nonnull)token;

/** Token 过期回调

在调用 joinChannelByToken 时如果指定了 Token，由于 Token 具有一定的时效，在通话过程中 SDK 可能由于网络原因和服务器失去连接，重连时可能需要新的 Token。 该回调通知 App 需要生成新的 Token，并需调用 renewToken 为 SDK 指定新的 Token。

@param rtcChannel  ARtcChannel 类。
*/
- (void)rtcChannelRequestToken:(ARtcChannel *_Nonnull)rtcChannel;

/** 监测到活跃用户的回调

该回调获取当前时间段内累积音量最大者。如果用户开启了 enableAudioVolumeIndication 功能，则当音量检测模块监测到频道内有新的活跃用户说话时，会通过本回调返回该用户的 uid。

**Note**
- 你需要开启 enableAudioVolumeIndication 方法才能收到该回调
- uid 返回的是当前时间段内声音最大的用户 uid，而不是瞬时声音最大的用户 uid。
 
 @param rtcChannel      ARtcChannel 类。
 @param speakerUid 当前时间段声音最大的用户的 uid。
 */
- (void)rtcChannel:(ARtcChannel * _Nonnull)rtcChannel activeSpeaker:(NSString * _Nonnull)speakerUid;

/** 本地或远端视频大小和旋转信息发生改变回调

 @param rtcChannel   ARtcChannel 类。
 @param uid     图像尺寸和旋转信息发生变化的用户的用户 ID
 @param size    新的视频尺寸
 @param rotation 旋转信息 (0 到 360)
 */
- (void)rtcChannel:(ARtcChannel * _Nonnull)rtcChannel videoSizeChangedOfUid:(NSString *_Nonnull)uid size:(CGSize)size rotation:(NSInteger)rotation;

/** 远端视频状态发生改变回调

@param rtcChannel  ARtcChannel 类。
@param uid 发生视频状态改变的远端用户 ID。
@param state 远端视频流状态。详见 ARVideoRemoteState。
@param reason 远端视频流状态改变的具体原因。详见 ARVideoRemoteStateReason。
@param elapsed 从本地用户调用 joinChannelByToken 方法到发生本事件经历的时间，单位为 ms。
*/
- (void)rtcChannel:(ARtcChannel *_Nonnull)rtcChannel remoteVideoStateChangedOfUid:(NSString *_Nonnull)uid state:(ARVideoRemoteState)state reason:(ARVideoRemoteStateReason)reason elapsed:(NSInteger)elapsed;

/** 远端音频流状态发生改变回调。

 远端用户/主播音频状态发生改变时，SDK 会触发该回调向本地用户报告当前的远端音频流状态。
 
 @param rtcChannel  ARtcChannel 类。
 @param uid 发生音频状态改变的远端用户 ID。
 @param state  远端音频流状态。详见 ARAudioRemoteState。
 @param reason 远端音频流状态改变的具体原因。详见 ARAudioRemoteStateReason。
 @param elapsed 从本地用户调用 joinChannelByToken 方法到发生本事件经历的时间，单位为 ms。
 */
- (void)rtcChannel:(ARtcChannel * _Nonnull)rtcChannel remoteAudioStateChangedOfUid:(NSString *_Nonnull)uid state:(ARAudioRemoteState)state reason:(ARAudioRemoteStateReason)reason elapsed:(NSInteger)elapsed;

/** 当前通话统计回调。 该回调在通话或直播中每两秒触发一次。

 @param rtcChannel ARtcChannel 类。
 @param stats 通话相关的数据统计信息，详见 ARChannelStats
 */
- (void)rtcChannel:(ARtcChannel * _Nonnull)rtcChannel reportRtcStats:(ARChannelStats * _Nonnull)stats;

/** 通话中每个用户的网络上下行 last mile 质量报告回调

 该回调描述每个用户在通话中的 last mile 网络状态，其中 last mile 是指设备到 ar云平台 边缘服务器的网络状态。

 该回调每 2 秒触发一次。如果远端有多个用户，该回调每 2 秒会被触发多次。

 @param rtcChannel  ARtcChannel 类。
 @param uid       用户 ID。表示该回调报告的是持有该 ID 的用户的网络质量。
 @param txQuality
 
 该用户的上行网络质量。基于上行视频的发送码率、上行丢包率、平均往返时延和网络抖动计算。该值代表当前的上行网络质量，帮助判断是否可以支持当前设置的视频编码属性。

 假设上行码率是 500 Kbps，那么支持 480 x 480 的分辨率、30 fps 的帧率没有问题，但是支持 1280 x 720 的分辨率就会有困难。详见 ARNetworkQuality。
 
 @param rxQuality 该用户的下行网络质量。基于下行网络的丢包率、平均往返延时和网络抖动计算。详见 ARNetworkQuality。
 */
- (void)rtcChannel:(ARtcChannel * _Nonnull)rtcChannel networkQuality:(NSString * _Nonnull)uid txQuality:(ARNetworkQuality)txQuality rxQuality:(ARNetworkQuality)rxQuality;

/** 通话中远端视频流的统计信息回调

 该回调描述远端用户在通话中端到端的视频流统计信息，针对每个远端用户/主播每 2 秒触发一次。

 如果远端同时存在多个用户/主播，该回调每 2 秒会被触发多次。

 @param rtcChannel   ARtcChannel 类。
 @param stats  远端视频统计数据，详见 ARtcRemoteVideoStats
 */
- (void)rtcChannel:(ARtcChannel * _Nonnull)rtcChannel remoteVideoStats:(ARtcRemoteVideoStats * _Nonnull)stats;

/** 通话中远端音频流的统计信息回调，用于取代 audioQualityOfUid

 该回调描述远端用户在通话中端到端的音频流统计信息，针对每个远端用户/主播每 2 秒触发一次。

 如果远端同时存在多个用户/主播，该回调每 2 秒会被触发多次。

 和 audioTransportStatsOfUid 回调相比，该回调更贴近用户的主观感受。

 比如，当网络发生丢包时，因 FEC（Forward Error Correction，向前纠错码）或重传恢复，最终的音频丢帧率不高，则可以认为整个质量较好。

 @param rtcChannel   ARtcChannel 类。
 @param stats  远端音频统计数据，详细定义见 ARtcRemoteAudioStats。
 */
- (void)rtcChannel:(ARtcChannel * _Nonnull)rtcChannel remoteAudioStats:(ARtcRemoteAudioStats * _Nonnull)stats;

@end


#endif /* ARtcChannelDelegate_h */
