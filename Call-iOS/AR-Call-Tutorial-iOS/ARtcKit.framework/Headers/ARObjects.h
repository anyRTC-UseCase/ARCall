//
//  ARObjects.h
//  ARtcKit
//
//  Created by 余生丶 on 2020/3/20.
//  Copyright © 2020 zjq. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreMedia/CoreMedia.h>
#import "AREnumerates.h"

#if TARGET_OS_IPHONE
#import <UIKit/UIKit.h>
typedef UIView VIEW_CLASS;
typedef UIColor COLOR_CLASS;
typedef CGSize SIZE_CLASS;
typedef CGPoint POINT_CLASS;
#elif TARGET_OS_MAC
#import <AppKit/AppKit.h>
typedef NSView VIEW_CLASS;
typedef NSColor COLOR_CLASS;
typedef NSSize SIZE_CLASS;
typedef NSPoint POINT_CLASS;
#endif

/** 视频画布对象的属性
*/
__attribute__((visibility("default"))) @interface ARtcVideoCanvas : NSObject

/**
 视频显示视窗
 
 VIEW_CLASS 为统称，具体为：
 - iOS: UIView
 - MacOS: NSView
 */
@property (strong, nonatomic) VIEW_CLASS* _Nullable view;
/** 视频显示模式 */
@property (assign, nonatomic) ARVideoRenderMode renderMode;

/**
 * 频道id
 * 0 ~ 9
 * a ~ z A ~Z
 * "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ",".
*/
@property (copy, nonatomic) NSString * _Nullable channelId;
/** 用户id */
@property (copy, nonatomic) NSString * _Nonnull uid;
/** 视图镜像模式，详见 ARVideoMirrorMode */
@property (assign, nonatomic) ARVideoMirrorMode mirrorMode;

@end


/** 通话相关的统计信息
*/
__attribute__((visibility("default"))) @interface ARChannelStats : NSObject

/** 通话时长，单位为秒，累计值
 */
@property (assign, nonatomic) NSInteger duration;
/** 音视频总发送字节数 (bytes)，累计值
 */
@property (assign, nonatomic) NSInteger txBytes;
/** 音视频总接收字节数 (bytes)，累计值
 */
@property (assign, nonatomic) NSInteger rxBytes;
/** 音频发送字节数（bytes），累计值
 */
@property (assign, nonatomic) NSInteger txAudioBytes;
/** 视频发送字节数（bytes），累计值
 */
@property (assign, nonatomic) NSInteger txVideoBytes;
/** 音频接收字节数（bytes），累计值
 */
@property (assign, nonatomic) NSInteger rxAudioBytes;
/** 视频接收字节数（bytes），累计值
 */
@property (assign, nonatomic) NSInteger rxVideoBytes;
/** 音视频总发送码率（Kbps），瞬时值
 */
@property (assign, nonatomic) NSInteger txKBitrate;
/** 音视频总接收码率（Kbps），瞬时值
 */
@property (assign, nonatomic) NSInteger rxKBitrate;
/** 音频发送码率 (Kbps)，瞬时值
 */
@property (assign, nonatomic) NSInteger txAudioKBitrate;
/** 音频接收码率 (Kbps)，瞬时值
 */
@property (assign, nonatomic) NSInteger rxAudioKBitrate;
/** 视频发送码率 (Kbps)，瞬时值
 */
@property (assign, nonatomic) NSInteger txVideoKBitrate;
/** 视频接收码率 (Kbps)，瞬时值
 */
@property (assign, nonatomic) NSInteger rxVideoKBitrate;
/** Last mile 的延迟（ms）
 */
@property (assign, nonatomic) NSInteger lastmileDelay;
/** 使用抗丢包技术前，本地客户端到边缘服务器的丢包率，单位为 %
 */
@property (assign, nonatomic) NSInteger txPacketLossRate;
/** 使用抗丢包技术前，边缘服务器到本地客户端的丢包率，单位为 %
 */
@property (assign, nonatomic) NSInteger rxPacketLossRate;
/** 当前频道内的用户人数

 * 通信场景下，当前频道内的用户人数。
 * 直播场景下，如果本地用户为观众，为频道内的主播人数 + 1；如果本地用户为主播，为频道内的主播人数。
 */
@property (assign, nonatomic) NSInteger userCount;
/** 当前 App 的 CPU 使用率 (%)
 */
@property (assign, nonatomic) double cpuAppUsage;
/** 当前系统的 CPU 使用率 (%)
 */
@property (assign, nonatomic) double cpuTotalUsage;
/** 客户端到本地路由器的往返时延 (ms)
 */
@property (assign, nonatomic) NSInteger gatewayRtt;
/** 当前 App 的内存占比 (%)
 
**Note**
 
该值仅作参考。受系统限制可能无法获取。
 */
@property (assign, nonatomic) double memoryAppUsageRatio;
/** 当前系统的内存占比 (%)

**Note**

 该值仅作参考。受系统限制可能无法获取。
 */
@property (assign, nonatomic) double memoryTotalUsageRatio;
/** 当前 App 的内存大小 (KB)

**Note**
 
 该值仅作参考。受系统限制可能无法获取。
 */
@property (assign, nonatomic) NSInteger memoryAppUsageInKbytes;

@end

/** 视频编码器配置的属性 */
__attribute__((visibility("default"))) @interface ARVideoEncoderConfiguration : NSObject

/** 视频编码的分辨率 (px)，用于衡量编码质量，以长x宽表示，默认值为 640 x 480。
 
 用户可以自行设置分辨率，也可以在如下列表中直接选择想要的分辨率：
 
 - ARVideoDimension120x120
 - ARVideoDimension160x120
 - ARVideoDimension180x180
 - ARVideoDimension240x180
 - ARVideoDimension320x180
 - ARVideoDimension240x240
 - ARVideoDimension320x240
 - ARVideoDimension424x240
 - ARVideoDimension360x360
 - ARVideoDimension480x360
 - ARVideoDimension640x360
 - ARVideoDimension480x480
 - ARVideoDimension640x480
 - ARVideoDimension840x480
 - ARVideoDimension960x720
 - ARVideoDimension1280x720
 - ARVideoDimension1920x1080 (macOS only)
 - ARVideoDimension2540x1440 (macOS only)
 - ARVideoDimension3840x2160 (macOS only)

**Note**

 * 该值不代表最终视频输出的方向。请查阅 ARVideoOutputOrientationMode 了解设置视频方向
 * 视频能否达到 720P 的分辨率取决于设备的性能，在性能配备较低的设备上有可能无法实现。如果采用 720P 分辨率而设备性能跟不上，则有可能出现帧率过低的情况。
 * iPhone 不支持 720P 以上的分辨率。
 */

@property (assign, nonatomic) CGSize dimensions;

/** 视频编码的帧率（fps）

用户可以自行设置帧率，也可以在如下列表中直接选择想要的帧率。默认值为 15 帧。建议不要超过 30 帧。

 *  ARVideoFrameRateFps1(1): 1 fps
 *  ARVideoFrameRateFps7(7): 7 fps
 *  ARVideoFrameRateFps10(10): 10 fps
 *  ARVideoFrameRateFps15(15): 15 fps
 *  ARVideoFrameRateFps24(24): 24 fps
 *  ARVideoFrameRateFps30(30): 30 fps
 *  ARVideoFrameRateFps60(30): 60 fps (macOS only)
*/
@property (assign, nonatomic) NSInteger frameRate;

/** 最低视频编码帧率（fps）

单位为 fps，默认值为 -1，表示使用系统默认的最低编码帧率。关于该参数的适用场景及注意事项，请参考 设置视频属性（iOS） 或 设置视频属性（macOS）。
*/
@property (assign, nonatomic) NSInteger minFrameRate;

/** 视频编码的码率

 该参数设置视频编码码率，单位为 Kbps。你可以根据场景需要，参考下表，手动设置你想要的码率。若设置的视频码率超出合理范围，SDK 会自动按照合理区间处理码率。你也可以直接选择如下任意一种模式进行设置：

 ARVideoBitrateStandard: （推荐）标准码率模式。该模式下，视频在通信和直播场景下的码率有所不同：通信场景下，码率与基准码率一致；直播场景下，码率对照基准码率翻倍。
 ARVideoBitrateCompatible: 适配码率模式。该模式下，视频在通信和直播场景下的码率均与基准码率一致。直播下如果选择该场景，视频帧率可能会低于设置的值。
 在通信和直播场景下采用不同的编码方式，以提升不同场景下的用户体验。通信场景保证流畅，而直播场景则更注重画面质量，因此直播场景对码率的需求大于通信场景。所以推荐将该参数设置为 ARVideoBitrateStandard。

**视频码率参考表**

| Resolution            | Frame Rate (fps)     | Base Bitrate (Kbps, for Communication)     | Live Bitrate (Kbps, for Live Broadcast)     |
|-------------------    |------------------    |----------------------------------------    |-----------------------------------------    |
| 160 &times; 120       | 15                   | 65                                         | 130                                         |
| 120 &times; 120       | 15                   | 50                                         | 100                                         |
| 320 &times; 180       | 15                   | 140                                        | 280                                         |
| 180 &times; 180       | 15                   | 100                                        | 200                                         |
| 240 &times; 180       | 15                   | 120                                        | 240                                         |
| 320 &times; 240       | 15                   | 200                                        | 400                                         |
| 240 &times; 240       | 15                   | 140                                        | 280                                         |
| 424 &times; 240       | 15                   | 220                                        | 440                                         |
| 640 &times; 360       | 15                   | 400                                        | 800                                         |
| 360 &times; 360       | 15                   | 260                                        | 520                                         |
| 640 &times; 360       | 30                   | 600                                        | 1200                                        |
| 360 &times; 360       | 30                   | 400                                        | 800                                         |
| 480 &times; 360       | 15                   | 320                                        | 640                                         |
| 480 &times; 360       | 30                   | 490                                        | 980                                         |
| 640 &times; 480       | 15                   | 500                                        | 1000                                        |
| 480 &times; 480       | 15                   | 400                                        | 800                                         |
| 640 &times; 480       | 30                   | 750                                        | 1500                                        |
| 480 &times; 480       | 30                   | 600                                        | 1200                                        |
| 848 &times; 480       | 15                   | 610                                        | 1220                                        |
| 848 &times; 480       | 30                   | 930                                        | 1860                                        |
| 640 &times; 480       | 10                   | 400                                        | 800                                         |
| 1280 &times; 720      | 15                   | 1130                                       | 2260                                        |
| 1280 &times; 720      | 30                   | 1710                                       | 3420                                        |
| 960 &times; 720       | 15                   | 910                                        | 1820                                        |
| 960 &times; 720       | 30                   | 1380                                       | 2760                                        |
| 1920 &times; 1080     | 15                   | 2080                                       | 4160                                        |
| 1920 &times; 1080     | 30                   | 3150                                       | 6300                                        |
| 1920 &times; 1080     | 60                   | 4780                                       | 6500                                        |
| 2560 &times; 1440     | 30                   | 4850                                       | 6500                                        |
| 2560 &times; 1440     | 60                   | 6500                                       | 6500                                        |
| 3840 &times; 2160     | 30                   | 6500                                       | 6500                                        |
| 3840 &times; 2160     | 60                   | 6500                                       | 6500                                        |


**Note**

该表中的基准码率适用于通信场景。直播场景下通常需要较大码率来提升视频质量。推荐通过设置 ARVideoBitrateStandard 模式来实现。你也可以直接将码率值设为基准码率值 x 2。
*/
@property (assign, nonatomic) NSInteger bitrate;

/** 最低编码码率

该参数设置最低编码码率，单位为 Kbps。

SDK会根据网络状况自动调整视频编码码率。将参数设为高于默认值可强制视频编码器输出高质量图片，但在网络状况不佳的情况下可能导致网络丢包并影响视频播放的流畅度造成卡顿。因此如非对画质有特殊需求，建议不要修改该参数的值。

**Note**
 
该参数仅适用于直播场景。
 */
@property (assign, nonatomic) NSInteger minBitrate;

/** 视频编码的方向模式

 * ARVideoOutputOrientationModeAdaptative(0): （默认）该模式下 SDK 输出的视频方向与采集到的视频方向一致。接收端会根据收到的视频旋转信息对视频进行旋转。该模式适用于接收端可以调整视频方向的场景:
   - 如果采集的视频是横屏模式，则输出的视频也是横屏模式。
   - 如果采集的视频是竖屏模式，则输出的视频也是竖屏模式。
 * ARVideoOutputOrientationModeFixedLandscape(1): 该模式下 SDK 固定输出风景（横屏）模式的视频。如果采集到的视频是竖屏模式，则视频编码器会对其进行裁剪。该模式适用于当接收端无法调整视频方向时，如使用旁路推流场景下。
 * ARVideoOutputOrientationModeFixedPortrait(2): 该模式下 SDK 固定输出人像（竖屏）模式的视频，如果采集到的视频是横屏模式，则视频编码器会对其进行裁剪。该模式适用于当接收端无法调整视频方向时，如使用旁路推流场景下。
 */
@property (assign, nonatomic) ARVideoOutputOrientationMode orientationMode;

/** 带宽受限时的视频编码降级偏好

ARDegradationPreference，有如下选项：

 * ARDegradationMaintainQuality(0)：（默认）降低编码帧率以保证视频质量
 * ARDegradationMaintainFramerate(1)：降低视频质量以保证编码帧率
 * ARDegradationMaintainFramerate(2)：（预留参数，暂不支持）在编码帧率和视频质量之间保持平衡。
*/
@property (assign, nonatomic) ARDegradationPreference degradationPreference;

/** 设置本地发送视频的镜像模式
 
 * 只影响远端用户看到的视频画面。详见 ARVideoMirrorMode
 * 默认关闭镜像模式
 */
@property (assign, nonatomic) ARVideoMirrorMode mirrorMode;

/** 指定视频分辨率并初始化一个 ARVideoEncoderConfiguration 对象

 @param size 视频分辨率
 @param frameRate 视频帧率，详见 ARVideoFrameRate
 @param bitrate 视频码率
 @param orientationMode 视频方向，详见 ARVideoOutputOrientationMode
 @return 初始化的 ARVideoEncoderConfiguration 对象
 */
- (instancetype _Nonnull)initWithSize:(CGSize)size
                            frameRate:(ARVideoFrameRate)frameRate
                              bitrate:(NSInteger)bitrate
                      orientationMode:(ARVideoOutputOrientationMode)orientationMode;

/** 指定视频宽和高并初始化一个 ARVideoEncoderConfiguration 对象

 @param width 视频宽度
 @param height 视频高度
 @param frameRate 视频帧率，详见 ARVideoFrameRate
 @param bitrate 视频码率
 @param orientationMode 视频方向，详见 ARVideoOutputOrientationMode
 @return 初始化的 ARVideoEncoderConfiguration 对象
 */
- (instancetype _Nonnull)initWithWidth:(NSInteger)width
                                height:(NSInteger)height
                             frameRate:(ARVideoFrameRate)frameRate
                               bitrate:(NSInteger)bitrate
                       orientationMode:(ARVideoOutputOrientationMode)orientationMode;

@end

/** 音量信息的属性 */
__attribute__((visibility("default"))) @interface ARtcAudioVolumeInfo : NSObject

/** 说话者的用户 ID。 */
@property (assign, nonatomic) NSString * _Nonnull uid;
/** 说话者各自混音后的音量，取值范围为 [0,255] */
@property (assign, nonatomic) NSUInteger volume;
/** 本地用户的人声状态。

 * 0: 本地用户不在说话。
 * 1: 本地用户在说话。

**Note**

 * vad 无法报告远端用户的人声状态。对于远端用户，vad 的值始终为 0。
 * 若需使用此参数，请在 enableAudioVolumeIndication 方法中设置 report_vad 为 YES。
 */
@property (assign, nonatomic) NSUInteger vad;
/** 频道 ID，表明当前说话者在哪个频道。*/
@property (copy, nonatomic) NSString * _Nonnull channelId;
@end

/** 摄像头采集偏好设置 */
__attribute__((visibility("default"))) @interface ARCameraCapturerConfiguration : NSObject

/** 摄像头采集偏好，详见 ARCameraCaptureOutputPreference
 */
@property (assign, nonatomic) ARCameraCaptureOutputPreference preference;
#if TARGET_OS_IOS
/** 摄像头方向，详见 ARCameraDirection:

 * ARCameraDirectionRear: 使用后置摄像头
 * ARCameraDirectionFront: 使用前置摄像头
 */
@property (assign, nonatomic) ARCameraDirection cameraDirection;
#endif

@end

/** 远端音频统计信息
 */
__attribute__((visibility("default"))) @interface ARtcRemoteAudioStats : NSObject
/** 用户 ID，指定是哪个用户/主播的音频流
 */
@property (copy, nonatomic) NSString * _Nonnull uid;
/** 远端用户发送的音频流质量：
 0：质量未知
 1：质量极好
 2：用户主观感觉和极好差不多 ，但码率可能略低于极好
 3：用户主观感受有瑕疵，但不影响沟通
 4：勉强能沟通但不顺畅
 5：网络质量非常差，基本不能沟通
 6：网络连接已断开，完全无法沟通
 7：网络质量探测功能不可使用 (目前没有使用)
 8：网络质量探测中
 */
@property (assign, nonatomic) ARNetworkQuality quality;
/** 音频发送端到接收端的网络延迟（毫秒）
 */
@property (assign, nonatomic) NSUInteger networkTransportDelay;
/** 接收端到网络抖动缓冲的网络延迟（毫秒）
 */
@property (assign, nonatomic) NSUInteger jitterBufferDelay;
/** 统计周期内的远端音频流的丢帧率(%)
 */
@property (assign, nonatomic) NSUInteger audioLossRate;
/** 声道数
 */
@property (assign, nonatomic) NSUInteger numChannels;
/** 统计周期内接收到的远端音频采样率（Hz）
 */
@property (assign, nonatomic) NSUInteger receivedSampleRate;
/** 接收流在统计周期内的平均码率（Kbps）
 */
@property (assign, nonatomic) NSUInteger receivedBitrate;
/** 远端用户在加入频道后发生音频卡顿的累计时长（ms）
 */
@property (assign, nonatomic) NSUInteger totalFrozenTime;
/** 远端用户在加入频道后发生音频卡顿的累计时长占音频总有效时长的百分比（%）。音频有效时长是指远端用户加入频道后音频未被停止发送或禁用的时长。
 */
@property (assign, nonatomic) NSUInteger frozenRate;
@end

/** 本地视频统计回调
 */
__attribute__((visibility("default"))) @interface ARtcLocalVideoStats : NSObject
/** 实际发送码率 (Kbps) : 不包含丢包后重传视频等的发送码率 */
@property (assign, nonatomic) NSUInteger sentBitrate;
/** 实际发送帧率 (fps) : 不包含丢包后重传视频等的发送帧率 */
@property (assign, nonatomic) NSUInteger sentFrameRate;
/** 本地视频编码器的输出帧率，单位为 fps */
@property (assign, nonatomic) NSUInteger encoderOutputFrameRate;
/** 本地视频渲染器的输出帧率，单位为 fps */
@property (assign, nonatomic) NSUInteger rendererOutputFrameRate;
/** 当前编码器的目标编码码率，单位为 Kbps，该码率为 SDK 根据当前网络状况预估的一个值。*/
@property (assign, nonatomic) NSUInteger sentTargetBitrate;
/** 当前编码器的目标编码帧率，单位为 fps */
@property (assign, nonatomic) NSUInteger sentTargetFrameRate;
/** 统计周期内本地视频质量（基于目标帧率和目标码率）的自适应情况，详见 ARVideoQualityAdaptIndication。 */
@property (assign, nonatomic) ARVideoQualityAdaptIndication qualityAdaptIndication;
/** 视频编码码率（Kbps）。
 */
@property (assign, nonatomic) NSUInteger encodedBitrate;
/** 视频编码宽度（px）。
 */
@property (assign, nonatomic) NSUInteger encodedFrameWidth;
/** 视频编码高度（px）。
 */
@property (assign, nonatomic) NSUInteger encodedFrameHeight;
/** 视频发送的帧数，累计值。
 */
@property (assign, nonatomic) NSUInteger encodedFrameCount;
/** 视频的编码类型：

 * ARVideoCodecTypeVP8 = 1: VP8。
 * ARVideoCodecTypeH264 = 2: （默认值）H.264。
 */
@property (assign, nonatomic) ARVideoCodecType codecType;
@end

/** 本地音频统计信息
 */
__attribute__((visibility("default"))) @interface ARtcLocalAudioStats : NSObject
/** 声道数。
 */
@property (assign, nonatomic) NSUInteger numChannels;
/** 发送的采样率，单位为 Hz。
 */
@property (assign, nonatomic) NSUInteger sentSampleRate;
/** 发送码率的平均值，单位为 Kbps。
 */
@property (assign, nonatomic) NSUInteger sentBitrate;
@end

/** 远端视频统计回调。
 */
__attribute__((visibility("default"))) @interface ARtcRemoteVideoStats : NSObject
/** 用户 ID，指定远程视频来自哪个用户
 */
@property (copy, nonatomic) NSString * _Nonnull uid;
/** 延时(毫秒)，已废弃（Deprecated）
*/
@property (assign, nonatomic) NSUInteger delay;
/** 视频流宽（像素）
 */
@property (assign, nonatomic) NSUInteger width;
/** 视频流高（像素）
 */
@property (assign, nonatomic) NSUInteger height;
/** 接收流的平均码率（Kbps）
 */
@property (assign, nonatomic) NSUInteger receivedBitrate;
/** 远端视频解码器的输出帧率，单位为 fps
 */
@property (assign, nonatomic) NSUInteger decoderOutputFrameRate;
/** 远端视频渲染器的输出帧率，单位为 fps
 */
@property (assign, nonatomic) NSUInteger rendererOutputFrameRate;
/** 远端视频在使用抗丢包技术之后的丢包率(%)。
 */
@property (assign, nonatomic) NSUInteger packetLossRate;
/** 视频流类型，大流或小流: ARVideoStreamType
 */
@property (assign, nonatomic) ARVideoStreamType rxStreamType;
/** 远端用户在加入频道后发生视频卡顿的累计时长（ms）。通话过程中，视频帧率设置不低于 5 fps 时，连续渲染的两帧视频之间间隔超过 500 ms，则计为一次视频卡顿。
 */
@property (assign, nonatomic) NSUInteger totalFrozenTime;
/** 远端用户在加入频道后发生视频卡顿的累计时长占视频总有效时长的百分比（%）。视频有效时长是指远端用户加入频道后视频未被停止发送或禁用的时长。
 */
@property (assign, nonatomic) NSUInteger frozenRate;
@end

/** 用于封装视频帧数据传递给 SDK 的类
 */
__attribute__((visibility("default"))) @interface ARVideoFrame : NSObject
/** 传入的视频帧的格式
必须指定为下面的某一个值：
 * 1: I420
 * 2: BGRA
 * 3: NV21
 * 4: RGBA
 * 5: IMC2
 * 7: ARGB
 * 8: NV12
 * 12: iOS texture (CVPixelBufferRef)
 * 13: H264 extra data(sps,pps data)
 * 14: H264 nomal data
 * 15: H264 key frame data
 */
@property (assign, nonatomic) NSInteger format;

/** 传入的视频帧的时间戳 (ms).

以毫秒为单位。不正确的时间戳会导致丢帧或者音视频不同步。

 */
@property (assign, nonatomic) CMTime time; // Time for this frame.

/** 传入视频帧的行间距。单位为像素而不是字节。如果视频帧格式设为 12，则不使用该字段。
 */
@property (assign, nonatomic) int strideInPixels;

/** 传入视频帧的高度。单位为像素而不是字节。如果视频帧格式设为 12，则不使用该字段。
 */
@property (assign, nonatomic) int height;

/** iOS 纹理的 Buffer
 */
@property (assign, nonatomic) CVPixelBufferRef _Nullable textureBuf;

/** 裸数据格式的 Buffer。如果视频帧格式设为 12，则不使用该字段。
 */
@property (strong, nonatomic) NSData * _Nullable dataBuf;

/** 视频左边裁减掉的像素数量，默认为 0
 */
@property (assign, nonatomic) int cropLeft;
/** 视频顶部裁减掉的像素数量，默认为 0
 */
@property (assign, nonatomic) int cropTop;
/** 视频右边裁减掉的像素数量，默认为 0
 */
@property (assign, nonatomic) int cropRight;
/** 视频底部裁减掉的像素数量，默认为 0
 */
@property (assign, nonatomic) int cropBottom;
/** 是否对传入的视频做顺时针旋转操作

可选值为 0，90，180，270。默认为 0。
 */
@property (assign, nonatomic) int rotation;

/** 视频缓冲区的长度
 */
@property (assign, nonatomic) int length;
/* Note
 * 1. strideInPixels
 *    Stride is in pixels, not bytes.
 * 2. About the frame width and height.
 *    No field is defined for the width. However, it can be deduced by:
 *       croppedWidth = (strideInPixels - cropLeft - cropRight)
 *    And
 *       croppedHeight = (height - cropTop - cropBottom)
 * 3. About crop.
 *    _________________________________________________________________.....
 *    |                        ^                                      |  ^
 *    |                        |                                      |  |
 *    |                     cropTop                                   |  |
 *    |                        |                                      |  |
 *    |                        v                                      |  |
 *    |                ________________________________               |  |
 *    |                |                              |               |  |
 *    |                |                              |               |  |
 *    |<-- cropLeft -->|          valid region        |<- cropRight ->|
 *    |                |                              |               | height
 *    |                |                              |               |
 *    |                |_____________________________ |               |  |
 *    |                        ^                                      |  |
 *    |                        |                                      |  |
 *    |                     cropBottom                                |  |
 *    |                        |                                      |  |
 *    |                        v                                      |  v
 *    _________________________________________________________________......
 *    |                                                               |
 *    |<---------------- strideInPixels ----------------------------->|
 *
 *    If your buffer contains garbage data, you can crop them. For example, if the frame size is
 *    360 &times; 640, often the buffer stride is 368, that is, the extra 8 pixels on the
 *    right are for padding, and should be removed. In this case, you can set:
 *    strideInPixels = 368;
 *    height = 640;
 *    cropRight = 8;
 *    // cropLeft, cropTop, cropBottom are set to a default of 0
 */
@end
