//
//  ARMediaIO.h
//  ARtcKit
//
//  Created by 余生丶 on 2020/6/15.
//  Copyright © 2020 zjq. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>
#import "AREnumerates.h"

/** 视频像素格式

 关于 YVU 图像格式的描述，请参考：
 FourCC YUV 格式说明
 Recommended 8-Bit YUV Formats for Video Rendering
 */
typedef NS_ENUM(NSUInteger, ARVideoPixelFormat) {
    /** I420 */
    ARVideoPixelFormatI420   = 1,
    /** BGRA */
    ARVideoPixelFormatBGRA   = 2,
    /** NV12 */
    ARVideoPixelFormatNV12   = 8,
};

/** 视频的顺时针旋转角度

如果设置为其他数字，系统会自动忽略
 */
typedef NS_ENUM(NSInteger, ARVideoRotation) {
    /** 顺时针旋转 0 度 */
    ARVideoRotationNone      = 0,
    /** 顺时针旋转 90 度*/
    ARVideoRotation90        = 1,
    /** 顺时针旋转 180 度 */
    ARVideoRotation180       = 2,
    /** 顺时针旋转 270 度 */
    ARVideoRotation270       = 3,
};

/**
 ARVideoFrameConsumer 支持接收两种 Buffer 类型的视频帧数据：PixelBuffer 和裸数据。 自定义视频源时，开发者需要通过 bufferType 来指定一种 Buffer 类型，并在自定义视频源中只使用与其对应的方法来传递视频帧数据。
*/
@protocol ARVideoFrameConsumer <NSObject>

/** PixelBuffer 类型

 @param pixelBuffer PixelBuffer 类型的视频 Buffer
 @param timestamp   传入的视频帧的时间戳，开发者必须为每一个视频帧设置一个时间戳。
 @param rotation    视频的顺时针旋转角度， 详见 ARVideoRotation
 */
- (void)consumePixelBuffer:(CVPixelBufferRef _Nonnull)pixelBuffer
             withTimestamp:(CMTime)timestamp
                  rotation:(ARVideoRotation)rotation;

/** RawData 类型

 @param rawData   RawData 类型的视频 Buffer
 @param timestamp 传入的视频帧的时间戳，以毫秒为单位。
 @param format    ARVideoPixelFormat
 @param size      视频裸数据的尺寸
 @param rotation  视频的顺时针旋转角度， 详见 ARVideoRotation
 */
- (void)consumeRawData:(void * _Nonnull)rawData
         withTimestamp:(CMTime)timestamp
                format:(ARVideoPixelFormat)format
                  size:(CGSize)size
              rotation:(ARVideoRotation)rotation;


@end


/** ARVideoSourceProtocol 协议
 
 ARVideoSourceProtocol 定义了一套协议，开发者通过实现该接口，来创建自定义的视频源，并设置给 sdk 底层的 Media Engine

 实时通讯过程中，SDK 通常会启动默认的视频输入设备，即内置的摄像头，进行视频推流。 使用 ARVideoSourceProtocol 接口可以自定义视频源。通过调用 设置视频源 setVideoSource 接口，可以改变并控制默认的视频输入设备，再将自定义的视频源发送给 Media Engine，让 Media Engine 进行其它视频处理，如过滤视频、将视频发布到 RTC 链接等。
 
 */
@protocol ARVideoSourceProtocol <NSObject>
@required
/** ARVideoFrameConsumer 协议，详见 ARVideoFrameConsumer */
@property (strong) id<ARVideoFrameConsumer> _Nullable consumer;
/** 初始化视频源

 Media Engine 在初始化视频源的时候会回调此方法。开发者可以在这个方法中做一些准备工作，例如打开 Camera，或者初始化视频源，并通过返回值告诉 Media Engine，自定义的视频源是否已经准备好。

**Note**
 
 初始化视频源过程中，开发者需要在 bufferType 中指定一种 Buffer 类型，并在自定义视频源中只使用与其对应的方法来传递视频帧数据。

 在初始化视频源过程中，Media Engine 会传递给开发者的一个 ARVideoFrameConsumer 对象。开发者需要保存该对象，并在视频源启动后，通过这个对象把视频帧输入给 Media Engine。

 开发者需要手动输入 YES 或 NO，以告诉 Media Engine 自定义视频源是否已准备好。

 @return 初始化状态：
 * YES: 自定义的视频源已经完成了初始化工作
 * NO: 自定义的视频源设备没准备好或者初始化失败，Media Engine 会停下来并上报错误
 */
- (BOOL)shouldInitialize;

/** 启动视频源

 Media Engine 在启动视频源时会回调这个方法。开发者可以在该方法中启动视频帧捕捉。开发者需要通过返回值告诉告知 Media Engine 自定义的视频源是否开启成功。

 开发者需要手动输入 YES 或 NO，以告诉 Media Engine 自定义视频源是否开启：

 * YES:自定义的视频源已成功开启，接下来会打开 ARVideoFrameConsumer 的开关，接收开发者传输的视频帧
 * NO：自定义的视频源设备启动失败，Media Engine 会停下来并上报错误
 */
- (void)shouldStart;

/** 停止视频源

 Media Engine 在停止视频源的时候会回调这个方法。开发者可以在这个方法中停止视频的采集。Media Engine 通过这个回调通知开发者，ARVideoFrameConsumer 的帧输入开关即将关闭，之后输入的视频帧都会被丢弃。
 */
- (void)shouldStop;

/** 释放视频源

Media Engine 通知开发者视频源即将失效，开发者可以在这个方法中关闭视频源设备。引擎会销毁 ARVideoFrameConsumer 对象，开发者需要确保在此回调之后不再使用它。
 */
- (void)shouldDispose;

/** 获取 Buffer 类型

 Media Engine 在初始化的时候，会调用这个方法来查询该视频源所使用的 Buffer 类型。开发者必须指定且只能指定一种 Buffer 类型并通过返回值告诉 Media Engine

 @return ARVideoBufferType
 */
- (ARVideoBufferType)bufferType;

@end
