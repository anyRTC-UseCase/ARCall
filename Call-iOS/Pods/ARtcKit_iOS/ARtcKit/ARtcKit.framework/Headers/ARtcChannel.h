//
//  ARtcChannel.h
//  ARtcKit
//
//  Created by 余生丶 on 2020/3/24.
//  Copyright © 2020 zjq. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ARtcEngineKit.h"
#import "ARObjects.h"
#import "ARtcChannelDelegate.h"

NS_ASSUME_NONNULL_BEGIN

@interface ARtcEngineKit()

/** 实例化ARtcChannel对象

@param channelId   当前 ARtcChannel 对象的频道 ID
*/
- (ARtcChannel * _Nullable)createRtcChannel:(NSString * _Nonnull)channelId;

@end

@interface ARtcChannel : NSObject

/** 销毁 ARtcChannel 对象

@return channelId   当前 ARtcChannel 对象的频道 ID
*/
- (int)destroy;

/** 设置 ARtcChannel 对象的 Delegate

@param channelDelegate   ARtcChannelDelegate
*/
- (void)setRtcChannelDelegate:(id<ARtcChannelDelegate> _Nullable)channelDelegate;

/** 获取当前 ARtcChannel 对象的频道 ID

@return channelId   当前 ARtcChannel 对象的频道 ID
*/
- (NSString * _Nullable)getChannelId;

/** 通过用户 ID 加入频道

@param token   动态密钥
@param uid   用户 ID
@param options   频道媒体设置选项 ARtcChannelMediaOptions
 
@return 0方法调用成功，<0方法调用失败
*/
- (int)joinChannelByToken:(NSString * _Nullable)token
                      uid:(NSString * _Nullable)uid
                  options:(ARtcChannelMediaOptions * _Nonnull)options;

/** 离开频道
 
@return 0方法调用成功，<0方法调用失败
*/
- (int)leaveChannel;

/** 将本地音视频流发布到本频道
 
@return 0方法调用成功，<0方法调用失败
*/
- (int)publish;

/** 停止将本地音视频流发布到本频道
 
@return 0方法调用成功，<0方法调用失败
*/
- (int)unpublish;

/** 设置用户角色

该方法仅适用于直播场景。

在加入频道前，用户需要通过本方法设置观众(默认)或主播角色。在直播场景中，只有角色为主播时可调用 publish 方法。

如果你在加入频道后调用该方法切换用户角色，调用成功后会触发以下回调：

- 本地：didClientRoleChanged 回调。
- 远端：didJoinedOfUid 或 didOfflineOfUid 回调。

@param role 直播场景里的用户角色

- ARClientRoleBroadcaster(1): 直播频道中的主播，可以发布和接收音视频流。
- ARClientRoleAudience(2): （默认）直播频道中的观众，只可以接收音视频流。

@return 0方法调用成功，<0方法调用失败
*/
- (int)setClientRole:(ARClientRole)role;

/** 更新 Token

该方法用于更新 Token。如果启用了 Token 机制，过一段时间后使用的 Token 会失效。当以下任意一种情况发生时：

- SDK 触发 tokenPrivilegeWillExpire 回调。
- connectionChangedToState 回调 reason 参数报告 ARConnectionChangedTokenExpired(9)。

App 应重新获取 Token，然后调用该 API 更新 Token，否则 SDK 无法和服务器建立连接。

**Note**

推荐使用 rtcChannelRequestToken 回调报告 ARErrorCodeTokenExpired(-109)，而不是 didOccurError 回调.

@param token The new token.

@return 0方法调用成功，<0方法调用失败
*/
- (int)renewToken:(NSString *_Nonnull)token;

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

/** 停止/恢复接收所有远端音频流
 
@param mute YES: 停止接收所有远端音频流；NO: 继续接收所有远端音频流（默认）。
 
@return 0方法调用成功，<0方法调用失败
*/
- (int)muteAllRemoteAudioStreams:(BOOL)mute;

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

/** 停止/恢复接收所有视频流

 @param mute 禁止/允许接收所有人的视频流

 * YES: 停止接收所有视频流
 * NO: 允许接收所有视频流（默认）

 @return 0方法调用成功，<0方法调用失败
 */
- (int)muteAllRemoteVideoStreams:(BOOL)mute;

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

@end

NS_ASSUME_NONNULL_END
