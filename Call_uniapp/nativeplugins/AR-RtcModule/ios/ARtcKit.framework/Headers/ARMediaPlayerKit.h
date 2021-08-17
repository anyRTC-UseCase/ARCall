//
//  ARMediaPlayerKit.h
//  ARtcKit
//
//  Created by 余生丶 on 2020/11/2.
//  Copyright © 2020 zjq. All rights reserved.
//

#import <AudioToolbox/AudioToolbox.h>
#import <Foundation/Foundation.h>
#import <VideoToolbox/VideoToolbox.h>
#if TARGET_OS_IPHONE
#import <UIKit/UIKit.h>
typedef UIView View;
#elif TARGET_OS_MAC
#import <AppKit/AppKit.h>
typedef NSView View;
#endif
NS_ASSUME_NONNULL_BEGIN

// external key
/**
 * set analyze duration for real time stream
 * @example "setPlayerOption(kMediaPlayerRealTimeStreamAnalyzeDuration,1000000)"
 */
#define kMediaPlayerRealTimeStreamAnalyzeDuration    @"analyzeduration"

/**
 * 设置播放器禁用播放音频
 * @example  "setPlayerOption(kMediaPlayerDisableAudio,0)"
 */
#define kMediaPlayerDisableAudio                 @"audio_disable"

/**
 * 设置播放器禁用播放视频
 * @example  "setPlayerOption(kMediaPlayerDisableVideo,0)"
 */
#define kMediaPlayerDisableVideo                  @"video_disable"


typedef NS_ENUM(NSInteger, ARMediaPlayerSpeed) {
    /** origin playback speed
     */
    ARMediaPlayerSpeedDefault = 100,
    /** playback speed slow down to 0.75
     */
    ARMediaPlayerSpeed75Percent = 75,
    /** playback speed slow down to 0.5
     */
    ARMediaPlayerSpeed50Percent = 50,
    /** playback speed speed up to 1.25
     */
    ARMediaPlayerSpeed125Percent = 125,
    /** playback speed speed up to 1.5
     */
    ARMediaPlayerSpeed150Percent = 150,
      /** playback speed speed up to 2.0
     */
    ARMediaPlayerSpeed200Percent = 200,

};
/** ARMediaPlayerState，播放器的状态 */
typedef NS_ENUM(NSInteger, ARMediaPlayerState) {
    /** 0: 默认状态 */
    ARMediaPlayerStateIdle = 0,
    /** 1: 正在打开媒体文件 */
    ARMediaPlayerStateOpening = 1,
    /** 2: 成功打开媒体文件 */
    ARMediaPlayerStateOpenCompleted = 2,
    /** 3: 正在播放 */
    ARMediaPlayerStatePlaying = 3,
    /** 4: 暂停播放 */
    ARMediaPlayerStatePaused = 4,
    /** 5: 播放完毕 */
    ARMediaPlayerStatePlayBackCompleted = 5,
    /** 6: 停止播放 */
    ARMediaPlayerStateStopped = 6,
    /** 100: 播放失败 */
    ARMediaPlayerStateFailed = 100,
};
/** ARMediaPlayerError，播放器的错误码 */
typedef NS_ENUM(NSInteger, ARMediaPlayerError) {
    /** 0: 没有错误 */
    ARMediaPlayerErrorNone = 0,
    /** -1: 不正确的参数 */
    ARMediaPlayerErrorInvalidArguments = -1,
    /** -2: 内部错误 */
    ARMediaPlayerErrorInternal = -2,
    /** -3: 没有 resource */
    ARMediaPlayerErrorNoSource = -3,
    /** -4: 无效的 resource */
    ARMediaPlayerErrorInvalidMediaSource = -4,
    /** -5: 未知的媒体流类型 */
    ARMediaPlayerErrorUnknowStreamType = -5,
    /** -6: 对象没有初始化 */
    ARMediaPlayerErrorObjNotInitialized = -6,
    /** -7: 解码器不支持该 codec */
    ARMediaPlayerErrorCodecNotSupported = -7,
    /** -8: 无效的 renderer */
    ARMediaPlayerErrorVideoRenderFailed = -8,
    /** -9: 播放器内部状态错误 */
    ARMediaPlayerErrorInvalidState = -9,
    /** -10: 未找到该 URL */
    ARMediaPlayerErrorUrlNotFound = -10,
    /** -11: 播放器与服务器的连接无效 */
    ARMediaPlayerErrorInvalidConnectState = -11,
    /** -12: 播放缓冲区数据不足 */
    ARMediaPlayerErrorSrcBufferUnderflow = -12,
};
/** ARMediaPlayerEvent，播放器的事件
 */
typedef NS_ENUM(NSInteger, ARMediaPlayerEvent) {
    /** 0: 开始定位 */
    ARMediaPlayerEventSeekBegin = 0,
    /** 1: 完成定位 */
    ARMediaPlayerEventSeekComplete = 1,
    /** 2: 定位出错 */
    ARMediaPlayerEventSeekError = 2,
};

/**
 * ARMediaPlayerMetaDataType, 媒体附属信息数据类型
 */
typedef NS_ENUM(NSUInteger, ARMediaPlayerMetaDataType) {
    /** 0: 未知类型 */
    ARMediaPlayerMetaDataTypeUnknown = 0,
    /** 1: SEI（补充增强信息）类型 */
    ARMediaPlayerMetaDataTypeSEI = 1,
};

/** ARMediaPixelFormat, reporting the pixel format of the video stream. */
typedef NS_ENUM(NSInteger, ARMediaPixelFormat) {
    /** `0`: The format is known.
    */
    ARMediaPixelFormatUnknown = 0,
    /** `1`: The format is I420.
    */
    ARMediaPixelFormatI420 = 1,
    /** `2`: The format is BGRA.
    */
    ARMediaPixelFormatBGRA = 2,
    /** `3`: The format is Planar YUV422.
    */
    ARMediaPixelFormatI422 = 3,
    /** `8`: The format is NV12.
     */
    ARMediaPixelFormatNV12 = 8,
};
/** ARMediaStreamType，媒体流的类型 */
typedef NS_ENUM(NSInteger, ARMediaStreamType) {
    /** 0: 未知类型 */
    ARMediaStreamTypeUnknow = 0,
    /** 1: 视频流 */
    ARMediaStreamTypeVideo = 1,
    /** 2: 音频流 */
    ARMediaStreamTypeAudio = 2,
    /** 3: 字幕流 */
    ARMediaStreamTypeSubtitle = 3,
};
/** ARMediaPlayerRenderMode, 播放器视图的渲染模式 */
typedef NS_ENUM(NSUInteger, ARMediaPlayerRenderMode) {
    /** 1: 视频尺寸等比缩放，优先保证视窗被填满，因视频尺寸与显示视窗尺寸不一致而多出的视频将被截掉。
     */
    ARMediaPlayerRenderModeHidden = 1,

    /** 2: 视频尺寸等比缩放，优先保证视频内容全部显示，因视频尺寸与显示视窗尺寸不一致造成的视窗未被填满的区域填充黑色。
     */
    ARMediaPlayerRenderModeFit = 2,
};
@class ARMediaPlayer;

@class ARMediaStreamInfo;

/** MediaPlayer 会通过代理方法 ARMediaPlayerDelegate 向 App 上报一些运行时的事件。 */
@protocol ARMediaPlayerDelegate <NSObject>

@optional

/** 报告播放器状态改变
 
 当播放器状态改变时，SDK 会触发该回调，向你报告新的播放状态。

 @param playerKit ARMediaPlayer

 @param state 新的播放状态，详见 ARMediaPlayerState

 @param error 播放器错误码，详见 ARMediaPlayerError
 */
- (void)rtcMediaPlayer:(ARMediaPlayer *_Nonnull)playerKit
       didChangedToState:(ARMediaPlayerState)state
                   error:(ARMediaPlayerError)error;

/** 报告当前播放进度
   
 播放媒体文件时，SDK 每隔 1 秒会自动触发该回调，向你报告当前播放进度。

 @param playerKit ARMediaPlayer

 @param position 当前播放进度 (秒)
 */
- (void)rtcMediaPlayer:(ARMediaPlayer *_Nonnull)playerKit
    didChangedToPosition:(NSInteger)position;

/** 报告定位播放的结果

 @param playerKit ARMediaPlayer

 @param event 定位播放的结果，详见 ARMediaPlayerEvent
 */
- (void)rtcMediaPlayer:(ARMediaPlayer *_Nonnull)playerKit
          didOccurEvent:(ARMediaPlayerEvent)event;

/** 报告已获取媒体附属信息

 当获取到媒体附属信息时，SDK 会触发该回调，向你报告媒体附属信息的数据类型和具体数据。

 @param playerKit ARMediaPlayer

 @param type 媒体附属信息数据类型，详见 ARMediaPlayerMetaDataType

 @param data 具体数据，用户自定义格式数据

 @param length 数据长度（字节）
 */
- (void)rtcMediaPlayer:(ARMediaPlayer *_Nonnull)playerKit
            metaDataType:(ARMediaPlayerMetaDataType) type
          didReceiveData:(NSString *)data
                  length:(NSInteger)length;
/** 已获取视频帧回调

 每次接收到一帧视频帧时，都会触发该回调，报告视频帧信息。

 @param playerKit ARMediaPlayer

 @param pixelBuffer 视频帧信息
 */
- (void)rtcMediaPlayer:(ARMediaPlayer *_Nonnull)playerKit
    didReceiveVideoFrame:(CVPixelBufferRef)pixelBuffer;
/** 已获取音频帧回调

 每次接收到一帧音频帧时，都会触发该回调，报告音频帧信息。

 @param playerKit ARMediaPlayer

 @param audioFrame 音频帧信息
 */
- (void)rtcMediaPlayer:(ARMediaPlayer *_Nonnull)playerKit
    didReceiveAudioFrame:(CMSampleBufferRef)audioFrame;

@end

/** ARMediaStreamInfo 类，包含媒体流的所有信息
 */
__attribute__((visibility("default"))) @interface ARMediaStreamInfo : NSObject
/** 此条媒体流的索引值 */
@property(nonatomic, assign) NSInteger streamIndex;
/** 此条媒体流的类型，详见 ARMediaStreamType */
@property(nonatomic, assign) ARMediaStreamType streamType;
/** 此条媒体流的编码规格 */
@property(nonatomic, copy) NSString *_Nonnull codecName;
/** 此条媒体流的语言 */
@property(nonatomic, copy) NSString *_Nullable language;
/** 如果此条媒体流是视频流，获取它的视频帧率 (fps) */
@property(nonatomic, assign) NSInteger videoFrameRate;
/** 如果此条媒体流是视频流，获取它的视频码率 (bps) */
@property(nonatomic, assign) NSInteger videoBitRate;
/** 如果此条媒体流是视频流，获取它的视频宽度 (pixel) */
@property(nonatomic, assign) NSInteger videoWidth;
/** 如果此条媒体流是视频流，获取它的视频高度 (pixel) */
@property(nonatomic, assign) NSInteger videoHeight;
/** 如果此条媒体流是音频流，获取它的音频采样率 (Hz) */
@property(nonatomic, assign) NSInteger audioSampleRate;
/** 如果此条媒体流是音频流，获取它的声道数 */
@property(nonatomic, assign) NSInteger audioChannels;
/** 此条媒体流的时长 (秒) */
@property(nonatomic, assign) NSInteger duration;
/** 如果此条媒体流是视频流，获取它的旋转角度 */
@property(nonatomic, assign) NSInteger rotation;

@end

/** 媒体播放器组件 */
__attribute__((visibility("default"))) @interface ARMediaPlayer : NSObject
/** 是否静音:

* YES: 静音
* NO: 不静音
*/
@property(nonatomic, assign) BOOL mute;
/** 本地播放音量。取值范围 0 到 100。 0 为无声，100 为媒体资源的原始音量。 */
@property(nonatomic, assign) NSInteger volume;
/** 播放状态，详见 ARMediaPlayerState*/
@property(nonatomic, readonly) ARMediaPlayerState state;
@property(nonatomic, weak) id<ARMediaPlayerDelegate> _Nullable delegate;
/** 初始化一个 ARMediaPlayer 实例

 @param delegate ARMediaPlayerDelegate

 @return 一个 ARMediaPlayer 实例
 */
- (instancetype)initWithDelegate:(id<ARMediaPlayerDelegate>)delegate;

/** 设置播放器的渲染视图

 @param view 视频渲染视图
 */
- (void)setView:(View *_Nullable)view;

/** 设置播放器视图的渲染模式

 @param mode 播放器视图的渲染模式，详见 ARMediaPlayerRenderMode
 */
- (void)setRenderMode:(ARMediaPlayerRenderMode)mode;

/** 打开媒体文件

 @param url 设置媒体文件的路径，本地路径或网络路径

 @param startPos 设置起始播放位置 (s)，默认值为 0
 */
- (void)open:(NSString *)url startPos:(NSInteger)startPos;

/** 播放媒体文件

 打开 (open) 媒体文件或暂停 (pause 播放媒体文件后，你可以调用该方法播放媒体文件。
 */
- (void)play;

/** 暂停播放

 如果你想恢复播放，请调用 play() 方法。
 */
- (void)pause;

/** 停止播放
 */
- (void)stop;

/** 从指定的位置播放媒体文件

 成功调用该方法后，将收到didOccurEvent回调。
 @param position 指定的位置 (s)
 */
- (void)seekToPosition:(NSInteger)position;

/** 设置是否静音
 @param isMute 静音选项：

 * YES: 静音
 * NO: （默认）不静音

 @return 0方法调用成功，<0方法调用失败
 */
- (int)mute:(bool)isMute;

/** 获取当前的静音状态
 @return 方法调用成功，返回：
  - YES: 静音
  - NO: （默认）不静音
 * 方法调用失败，返回 NO
 */
- (bool)getMute;

/** 调节本地播放音量
 @param volume 本地播放音量，取值范围从 0 到 100： - 0: 无声 - 100: （默认）媒体文件的原始播放音量
 @return 0方法调用成功，<0方法调用失败
 */
- (int)adjustVolume:(int)volume;

/** 获取当前播放进度
 @return < 0: 方法调用失败，详见 ARMediaPlayerError
 * 其它：播放进度 (s)
 */
- (NSInteger)getPosition;

/** 获取媒体文件总时长
 @return < 0: 方法调用失败，详见 ARMediaPlayerError
 * 其它：媒体文件总时长 (s)
 */
- (NSInteger)getDuration;

/** 获取播放器当前状态

 @return 方法调用成功，返回播放器当前状态 详见 ARMediaPlayerState
 * 方法调用失败，返回 nil
 */
- (ARMediaPlayerState)getPlayerState;

/** 获取该媒体文件中媒体流的数量

 @return < 0: 方法调用失败，详见 ARMediaPlayerError
 * 其它：该媒体文件中媒体流的数量
 */
- (NSInteger)getStreamCount;

/** 通过此条媒体流的索引值获取媒体流信息

 @param index 媒体流索引值

 @return 方法调用成功，返回媒体流信息，详见 ARMediaStreamInfo
 * 方法调用失败，返回 nil
 */
- (ARMediaStreamInfo *_Nullable)getStreamByIndex:(int)index;

/** 销毁 ARMediaPlayerKit 实例

 调用该方法后，你将无法再使用 Player 提供的其他 API。如果你需要重新使用 Player， 你需要调用 initWithDelegate 方法，重新创建一个 ARMediaPlayerKit 实例。
 */
- (void)destroy;

@end

NS_ASSUME_NONNULL_END
