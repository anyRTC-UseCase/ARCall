//
//  AREnumerates.h
//  ARtcKit
//
//  Created by 余生丶 on 2020/3/20.
//  Copyright © 2020 zjq. All rights reserved.
//

#ifndef AREnumerates_h
#define AREnumerates_h

/** Warning code.

警告代码表示 SDK 运行时出现了（网络或媒体相关的）警告。通常情况下，SDK 上报的警告信息 App 可以忽略，SDK 会自动恢复。比如和服务器失去连接时，SDK 可能会上报 ARWarningCodeOpenChannelTimeout(106) 警告，同时自动尝试重连。
*/
typedef NS_ENUM(NSInteger, ARWarningCode) {
    /**
     8: 指定的 view 无效，使用视频功能时需要指定 view，如果 view 尚未指定，则返回该警告。
     */
    ARWarningCodeInvalidView = 8,
    /**
     16: 初始化视频功能失败。有可能是因视频资源被占用导致的。用户无法看到视频画面，但不影响语音通信。
     */
    ARWarningCodeInitVideo = 16,
     /**
      20: 请求处于待定状态。一般是由于某个模块还没准备好，请求被延迟处理。
      */
    ARWarningCodePending = 20,
    /**
     103: 没有可用的频道资源。可能是因为服务端没法分配频道资源。
     */
    ARWarningCodeNoAvailableChannel = 103,
    /**
     104: 查找频道超时。在加入频道时 SDK 先要查找指定的频道，出现该警告一般是因为网络太差，连接不到服务器。
     */
    ARWarningCodeLookupChannelTimeout = 104,
    /**
     105: 查找频道请求被服务器拒绝。服务器可能没有办法处理这个请求或请求是非法的。
     */
    ARWarningCodeLookupChannelRejected = 105,
    /**
     106: 打开频道超时。查找到指定频道后，SDK 接着打开该频道，超时一般是因为网络太差，连接不到服务器。
     */
    ARWarningCodeOpenChannelTimeout = 106,
    /**
     107: 打开频道请求被服务器拒绝。服务器可能没有办法处理该请求或该请求是非法的。
     */
    ARWarningCodeOpenChannelRejected = 107,
    /**
     111: 切换直播视频超时。
     */
    ARWarningCodeSwitchLiveVideoTimeout = 111,
    /**
     118: 直播场景下设置用户角色超时。
     */
    ARWarningCodeSetClientRoleTimeout = 118,
    /**
     119: 直播场景下用户角色未授权。
     */
    ARWarningCodeSetClientRoleNotAuthorized = 119,
    /**
     121: TICKET 非法，打开频道失败。
     */
    ARWarningCodeOpenChannelInvalidTicket = 121,
    /**
     122: 尝试打开另一个服务器。
     */
    ARWarningCodeOpenChannelTryNextVos = 122,
    /**
     701: 打开伴奏出错。
     */
    ARWarningCodeAudioMixingOpenError = 701,
    /**
     1014: 音频设备模块：运行时播放设备出现警告。
     */
    ARWarningCodeAdmRuntimePlayoutWarning = 1014,
    /**
     1016: 音频设备模块：运行时录音设备出现警告。
     */
    ARWarningCodeAdmRuntimeRecordingWarning = 1016,
    /**
     1019: 音频设备模块：没有采集到有效的声音数据。该警告不影响正常通话。
     */
    ARWarningCodeAdmRecordAudioSilence = 1019,
    /**
     1020: 音频设备模块：播放设备故障。
     */
    ARWarningCodeAdmPlaybackMalfunction = 1020,
    /**
     1021: 音频设备模块：录音设备故障。
     */
    ARWarningCodeAdmRecordMalfunction = 1021,
    /**
     1025: 通话或直播被系统声音打断，比如电话、闹钟等。
     */
    ARWarningCodeAdmInterruption = 1025,
    /**
     1031: 音频设备模块：录到的声音太低。
     */
    ARWarningCodeAdmRecordAudioLowlevel = 1031,
    /**
     1032: 音频设备模块：播放的声音太低。
     */
    ARWarningCodeAdmPlayoutAudioLowlevel = 1032,
    /**
     1051: 音频设备模块：录音声音监测到啸叫。
     */
    ARWarningCodeApmHowling = 1051,
    /**
     1052: 音频设备模块：音频播放会卡顿。
     */
    ARWarningCodeAdmGlitchState = 1052,
    /**
     1053: 音频设备模块：音频底层设置被修改。
     */
    ARWarningCodeAdmImproperSettings = 1053,
};

/** 错误代码

错误代码表示 SDK 运行时出现了（网络或媒体相关的）错误。通常情况下，SDK 上报的错误意味着 SDK 无法自动恢复，需要 App 干预或提示用户。 比如启动通话失败时，SDK 会上报 ARErrorCodeStartCall = 1002 错误。App可以提示用户启动通话失败，并调用 leaveChannel 退出频道。
*/
typedef NS_ENUM(NSInteger, ARErrorCode) {
    /**
     0: 没有错误。
     */
    ARErrorCodeNoError = 0,
    /**
     1: 一般性的错误（没有明确归类的错误原因）。
     */
    ARErrorCodeFailed = 1,
    /**
     2: API 调用了无效的参数。例如指定的频道名含有非法字符。
     */
    ARErrorCodeInvalidArgument = 2,
    /**
     3: SDK 未准备好。
     处理方法：
     * 检查音频设备状态
     * 检查程序集完整性
     * 尝试重新初始化 SDK
    */
    ARErrorCodeNotReady = 3,
    /**
     4: SDK 当前状态不支持此操作，因此不能进行此操作。
     */
    ARErrorCodeNotSupported = 4,
    /**
     5: 调用被拒绝。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
     */
    ARErrorCodeRefused = 5,
    /**
     6: 传入的缓冲区大小不足以存放返回的数据。
     */
    ARErrorCodeBufferTooSmall = 6,
    /**
     7: SDK 尚未初始化，就调用其 API。请确认在调用 API 之前已创建 ARtcEngineKit 对象并完成初始化。
     */
    ARErrorCodeNotInitialized = 7,
    /**
     9: 没有操作权限，请检查用户是否授予 app 音视频设备使用权限。
     */
    ARErrorCodeNoPermission = 9,
    /**
     10: API 调用超时。有些 API 调用需要 SDK 返回结果，如果 SDK 处理时间过长，超过 10 秒没有返回，会出现此错误。
     */
    ARErrorCodeTimedOut = 10,
    /**
     11: 请求被取消。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
     */
    ARErrorCodeCanceled = 11,
    /**
     12: 调用频率太高。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
     */
    ARErrorCodeTooOften = 12,
    /**
     13: SDK 内部绑定到网络 Socket 失败。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
     */
    ARErrorCodeBindSocket = 13,
    /**
     14: 网络不可用。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
     */
    ARErrorCodeNetDown = 14,
    /**
     15: 没有网络缓冲区可用。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
     */
    ARErrorCodeNoBufs = 15,
    /**
     17: 加入频道被拒绝。
     一般有以下原因:
     * 用户已进入频道，再次调用加入频道的 API，例如 joinChannelByToken，会返回此错误。停止调用该 API 即可。
     * 用户在做 Echo 测试时尝试加入频道。等待 Echo test 结束后再加入频道即可。
    */
    ARErrorCodeJoinChannelRejected = 17,
    /**
     18: 离开频道失败。
     一般有以下原因：
     * 用户已离开频道，再次调用退出频道的 API，例如 leaveChannel，会返回此错误。停止调用该 API 即可。
     * 用户尚未加入频道，就调用退出频道的 API。这种情况下无需额外操作。
    */
    ARErrorCodeLeaveChannelRejected = 18,
    /**
     19: 资源已被占用，不能重复使用。
     */
    ARErrorCodeAlreadyInUse = 19,
    /**
     20: SDK 放弃请求，可能由于请求次数太多。
     */
    ARErrorCodeAbort = 20,
    /**
     21: Windows 下特定的防火墙设置导致 SDK 初始化失败然后崩溃。
     */
    ARErrorCodeInitNetEngine = 21,
    /**
     22: 当用户 App 占用资源过多，或系统资源耗尽时，SDK 分配资源失败会返回该错误。
     */
    ARErrorCodeResourceLimited = 22,
    /**
     101: 不是有效的 App ID。请更换有效的 App ID 重新加入频道。
     */
    ARErrorCodeInvalidAppId = 101,
    /**
     102: 不是有效的频道名。请更换有效的频道名重新加入频道。
     */
    ARErrorCodeInvalidChannelId = 102,
    /**
     109: 当前使用的 Token 过期，不再有效。
     connectionChangedToState 回调中 reason 参数的 ARConnectionChangedTokenExpired(9)。
     一般有以下原因：
     * Token 授权时间戳无效：Token 授权时间戳为 Token 生成时的时间戳，自 1970 年 1 月 1 日开始到当前时间的描述。授权该 Token 在生成后的 24 小时内可以访问 anyRTC 服务。如果 24 小时内没有访问，则该 Token 无法再使用。需要重新在服务端申请生成 Token。
     * Token 服务到期时间戳已过期：用户设置的服务到期时间戳小于当前时间戳，无法继续使用 anyRTC 服务（比如正在进行的通话会被强制终止）；设置服务到期时间并不意味着 Token 失效，而仅仅用于限制用户使用当前服务的时间。需要重新在服务端申请生成 Token。
     */
    ARErrorCodeTokenExpired = 109,
    /**
     110: 生成的 Token 无效。
     connectionChangedToState 回调中 reason 参数的 ARConnectionChangedInvalidToken(8)。
     一般有以下原因：
     * 用户在控制台上启用了 App Certificate，但仍旧在代码里仅使用了 App ID。当启用了 App Certificate，必须使用 Token。
     * 字段 uid 为生成 Token 的必须字段，用户在调用 joinChannelByToken 加入频道时必须设置相同的 uid。
     */
    ARErrorCodeInvalidToken = 110,
    /**
     111: 网络连接中断。仅适用于 anyRTC Web SDK。
     */
    ARErrorCodeConnectionInterrupted = 111,
    /**
     112: 网络连接丢失。仅适用于 anyRTC Web SDK。
     */
    ARErrorCodeConnectionLost = 112,
    /**
     113: 在调用 sendStreamMessage 时，如果用户不在频道内，会发生该错误。
     */
    ARErrorCodeNotInChannel = 113,
    /**
     114: 在调用 sendStreamMessage 时，当发送的数据长度大于 1024 个字节时，会发生该错误。
     */
    ARErrorCodeSizeTooLarge = 114,
    /**
     115: 在调用 sendStreamMessage 时，当发送的数据码率超过限制时 (6 Kbps)，会发生该错误。
     */
    ARErrorCodeBitrateLimit = 115,
    /**
     116: 在调用 createDataStream 时，如果创建的数据通道过多(超过 5 个通道)，会发生该错误。
     */
    ARErrorCodeTooManyDataStreams = 116,
    /**
     120: 解密失败，可能是用户加入频道用了不同的密码。请检查加入频道时的设置，或尝试重新加入频道。
     */
    ARErrorCodeDecryptionFailed = 120,
    /**
     124: 水印文件参数错误。
     */
    ARErrorCodeWatermarkParam = 124,
    /**
     125: 水印文件路径错误。
     */
    ARErrorCodeWatermarkPath = 125,
    /**
     126: 水印文件格式错误。
     */
    ARErrorCodeWatermarkPng = 126,
    /**
     127: 水印文件信息错误。
     */
    ARErrorCodeWatermarkInfo = 127,
    /**
     128: 水印文件数据格式错误。
     */
    ARErrorCodeWatermarkAGRB = 128,
    /**
     129: 水印文件读取错误。
     */
    ARErrorCodeWatermarkRead = 129,
    /**
     130: 推流已加密不能推流。
     */
    ARErrorCodeEncryptedStreamNotAllowedPublish = 130,
    /**
     134: 无效的 User Account。
     */
    ARErrorCodeInvalidUserAccount = 134,
    /**
     151: CDN 相关错误。请调用 removePublishStreamUrl 方法删除原来的推流地址，然后调用 addPublishStreamUrl 方法重新推流到新地址。
     */
    ARErrorCodePublishStreamCDNError = 151,
    /**
     152: 单个主播的推流地址数目达到上限 10。请删掉一些不用的推流地址再增加推流地址。
     */
    ARErrorCodePublishStreamNumReachLimit = 152,
    /**
     153: 操作不属于主播自己的流，例如更新其他主播的流参数、停止其他主播的流。请检查 App 逻辑。
     */
    ARErrorCodePublishStreamNotAuthorized = 153,
    /**
     154: 推流服务器出现错误。请调用 addPublishStreamUrl 重新推流。
     */
    ARErrorCodePublishStreamInternalServerError = 154,
    /**
     155: 服务器未找到这个流。
     */
    ARErrorCodePublishStreamNotFound = 155,
    /**
     156: 推流地址格式有错误。请检查推流地址格式是否正确。
     */
    ARErrorCodePublishStreamFormatNotSuppported = 156,
    /**
     1001: 加载媒体引擎失败。
     */
    ARErrorCodeLoadMediaEngine = 1001,
    /**
     1002: 启动媒体引擎开始通话失败。请尝试重新进入频道。
     */
    ARErrorCodeStartCall = 1002,
    /**
     1003: 启动摄像头失败，请检查摄像头是否被其他应用占用，或者尝试重新进入频道。
     */
    ARErrorCodeStartCamera = 1003,
    /**
     1004: 启动视频渲染模块失败。
     */
    ARErrorCodeStartVideoRender = 1004,
    /**
     1005: 音频设备模块：音频设备出现错误（未明确指明为何种错误）。请检查音频设备是否被其它应用占用，或者尝试重新进入频道。
     */
    ARErrorCodeAdmGeneralError = 1005,
    /**
     1006: 音频设备模块：使用 java 资源出现错误。
     */
    ARErrorCodeAdmJavaResource = 1006,
    /**
     1007: 音频设备模块：设置的采样频率出现错误。
     */
    ARErrorCodeAdmSampleRate = 1007,
    /**
     1008: 音频设备模块：初始化播放设备出现错误。请检查播放设备是否被其他应用占用，或者尝试重新进入频道。
     */
    ARErrorCodeAdmInitPlayout = 1008,
    /**
     1009: 音频设备模块：启动播放设备出现错误。请检查播放设备是否正常，或者尝试重新进入频道。
     */
    ARErrorCodeAdmStartPlayout = 1009,
    /**
     1010: 音频设备模块：停止播放设备出现错误。
     */
    ARErrorCodeAdmStopPlayout = 1010,
    /**
     1011: 音频设备模块：初始化录音设备时出现错误。请检查录音设备是否正常，或者尝试重新进入频道。
     */
    ARErrorCodeAdmInitRecording = 1011,
    /**
     1012: 音频设备模块：启动录音设备出现错误。请检查录音设备是否正常，或者尝试重新进入频道。
     */
    ARErrorCodeAdmStartRecording = 1012,
    /**
     1013: 音频设备模块：停止录音设备出现错误。
     */
    ARErrorCodeAdmStopRecording = 1013,
    /**
     1015: 音频设备模块：运行时播放出现错误。请检查播放设备是否正常，或者尝试重新进入频道。
     */
    ARErrorCodeAdmRuntimePlayoutError = 1015,
    /**
     1017: 音频设备模块：运行时录音错误。请检查录音设备是否正常，或者尝试重新进入频道。
     */
    ARErrorCodeAdmRuntimeRecordingError = 1017,
    /**
     1018: 音频设备模块：录音失败。
     */
    ARErrorCodeAdmRecordAudioFailed = 1018,
    /**
     1020: 音频设备模块：回放频率异常。
     */
    ARErrorCodeAdmPlayAbnormalFrequency = 1020,
    /**
     1021: 音频设备模块：录制频率异常。
     */
    ARErrorCodeAdmRecordAbnormalFrequency = 1021,
    /**
     1022: 音频设备模块：初始化 Loopback 设备错误。
     */
    ARErrorCodeAdmInitLoopback  = 1022,
    /**
     1023: 音频设备模块：启动 Loopback 设备错误。
     */
    ARErrorCodeAdmStartLoopback = 1023,
    /**
     1027: 音频设备模块:  在没有录音权限时发生错误。
     */
    ARErrorCodeAdmNoPermission = 1027,
    /**
     1359: 音频设备模块：无录制设备。请检查是否有可用的录放音设备或者录放音设备是否已经被其他应用占用。
     */
    ARErrorCodeAdmNoRecordingDevice = 1359,
    /**
     1360: 音频设备模块：无播放设备。
     */
    ARErrorCodeAdmNoPlayoutDevice = 1360,
    /**
     1501: 视频设备模块：没有摄像头使用权限。请检查是否已经打开摄像头权限。
     */
    ARErrorCodeVdmCameraNotAuthorized = 1501,
    /**
     1600: 视频设备模块：未知错误。
     */
    ARErrorCodeVcmUnknownError = 1600,
    /**
     1601: 视频设备模块：视频编码器初始化错误。该错误为严重错误，请尝试重新加入频道。
     */
    ARErrorCodeVcmEncoderInitError = 1601,
    /**
     1602: 视频设备模块：视频编码器错误。该错误为严重错误，请尝试重新加入频道。
     */
    ARErrorCodeVcmEncoderEncodeError = 1602
};

/** 混音音乐文件状态 */
typedef NS_ENUM(NSInteger, ARAudioMixingStateCode){
    /**
     710: 视频设备模块：未知错误。
     */
    ARAudioMixingStatePlaying = 710,
    /**
     711: 音乐文件暂停播放
     */
    ARAudioMixingStatePaused = 711,
    /**
     713:音乐文件停止播放
     */
    ARAudioMixingStateStopped = 713,
    /**
     714:音乐文件播放出错
     */
    ARAudioMixingStateFailed = 714,
};

/** 混音音乐文件错误码 */
typedef NS_ENUM(NSInteger, ARAudioMixingErrorCode){
    /**
     701: 音乐文件打开出错
     */
    ARAudioMixingErrorCanNotOpen = 701,
    /**
     702: 音乐文件打开太频繁
     */
    ARAudioMixingErrorTooFrequentCall = 702,
    /**
     703: 音乐文件打开中断
     */
    ARAudioMixingErrorInterruptedEOF = 703,
    /**
     0: 音乐文件状态正常
     */
    ARAudioMixingErrorOK = 0,
};

/** 频道使用场景 */
typedef NS_ENUM(NSUInteger, ARChannelProfile ) {
    /**
     0: 通信场景
     */
    ARChannelProfileCommunication = 0,
    /**
     1: 直播场景
     */
    ARChannelProfileiveBroadcasting = 1,
    /**
     2: 游戏语音场景
     */
    ARChannelProfileGame = 2
};

/** 视频显示模式 */
typedef NS_ENUM(NSUInteger, ARVideoRenderMode ) {
  /**
   1:优先保证视窗被填满。视频尺寸等比缩放，直至整个视窗被视频填满。如果视频长宽与显示窗口不同，则视频流会按照显示视窗的比例进行周边裁剪或图像拉伸后填满视窗。
   */
   ARVideoRenderModeHidden = 1,
  /**
   2:优先保证视频内容全部显示。视频尺寸等比缩放，直至视频窗口的一边与视窗边框对齐。如果视频尺寸与显示视窗尺寸不一致，在保持长宽比的前提下，将视频进行缩放后填满视窗，缩放后的视频四周会有一圈黑边。
   */
   ARVideoRenderModeFit = 2
};

/** 视频镜像模式 */
typedef NS_ENUM(NSUInteger, ARVideoMirrorMode ) {
    /**
     0: (Default) 由 SDK 决定镜像模式
     */
    ARVideoMirrorModeAuto = 0,
    /**
     1: 启用镜像模式
     */
    ARVideoMirrorModeEnabled = 1,
    /**
     2: 关闭镜像模式
     */
    ARVideoMirrorModeDisabled = 2

};

/** 直播场景里的用户角色 */
typedef NS_ENUM(NSInteger, ARClientRole) {
    /**
     1:主播
     */
    ARClientRoleBroadcaster = 1,
    /**
     2:观众(默认)
     */
    ARClientRoleAudience = 2,
};

/** 用户离线原因 */
typedef NS_ENUM(NSUInteger, ARUserOfflineReason) {
    /**
     0:用户主动离开
     */
    ARUserOfflineReasonQuit = 0,
    /**
     1:因过长时间收不到对方数据包，超时掉线。注意：由于 SDK 使用的是不可靠通道，也有可能对方主动离开本方没收到对方离开消息而误判为超时掉线
     */
    ARUserOfflineReasonDropped = 1,
    /**
     2:用户身份从主播切换为观众时触发
     */
    ARUserOfflineReasonBecomeAudience = 2,
};

/** 网络状态 */
typedef NS_ENUM(NSInteger, ARNetworkType) {
    /**
     -1:网络连接类型未知
     */
    ARNetworkTypeUnknown = 0,
    /**
     1:网络类型为 LAN
     */
    ARNetworkTypeLAN = 1,
    /**
     2:网络类型为 Wi-Fi（包含热点）
     */
    ARNetworkTypeWIFI = 2,
    /**
     3:网络类型为 2G 移动网络
     */
    ARNetworkTypeMobile2G = 3,
    /**
     4:网络类型为 3G 移动网络
     */
    ARNetworkTypeMobile3G = 4,
    /**
     5:网络类型为 4G 移动网络
     */
    ARNetworkTypeMobile4G = 5
};

/** 网络连接状态类型 */
typedef NS_ENUM(NSInteger, ARConnectionStateType) {
    /**
     1:网络连接断开
     */
    ARConnectionStateDisconnected = 1,
    /**
     2:建立网络连接中
     */
    ARConnectionStateConnecting = 2,
    /**
     3:网络已连接
     */
    ARConnectionStateConnected = 3,
    /**
     4:重新建立网络连接中
     */
    ARConnectionStateReconnecting = 4,
    /**
     5:网络连接失败
     */
    ARConnectionStateFailed = 5
};

/** 音频属性 */
typedef NS_ENUM(NSInteger, ARAudioProfile) {
    /**
     0:默认设置，通信场景下，默认ARAudioProfileSpeechStandard。直播场景下，默认ARAudioProfileMusicStandard
     */
    ARAudioProfileDefault = 0,
    /**
     1:指定 32 KHz采样率，语音编码，单声道，编码码率最大值为 18 Kbps
     */
    ARAudioProfileSpeechStandard = 1,
    /**
     2:指定 48 KHz采样率，音乐编码，单声道，编码码率最大值为 48 Kbps。
     */
    ARAudioProfileMusicStandard = 2,
    /**
     3:指定 48 KHz采样率，音乐编码，双声道，编码码率最大值为 56 Kbps
     */
    ARAudioProfileMusicStandardStereo = 3,
    /**
     4:指定 48 KHz 采样率，音乐编码，单声道，编码码率最大值为 128 Kbps
     */
    ARAudioProfileMusicHighQuality = 4,
    /**
     5:指定 48 KHz采样率，音乐编码，双声道，编码码率最大值为 192 Kbps
     */
    ARAudioProfileMusicHighQualityStereo = 5
};

/** 设置音频应用场景 */
typedef NS_ENUM(NSInteger, ARAudioScenario) {
    /**
     0: 默认设置 */
    ARAudioScenarioDefault = 0,
    /**
     1: 娱乐应用，需要频繁上下麦的场景
     */
    ARAudioScenarioChatRoomEntertainment = 1,
    /**
     2: 教育应用，流畅度和稳定性优先
     */
    ARAudioScenarioEducation = 2,
    /**
     3: 游戏直播应用，需要外放游戏音效也直播出去的场景
     */
    ARAudioScenarioGameStreaming = 3,
    /**
     4: 秀场应用，音质优先和更好的专业外设支持
     */
    ARAudioScenarioShowRoom = 4,
    /**
     5: 游戏开黑
     */
    ARAudioScenarioChatRoomGaming = 5
};

/** 远端视频流状态 */
typedef NS_ENUM(NSUInteger, ARVideoRemoteState) {
    /**
     0: 远端视频默认初始状态。在 ARVideoRemoteStateReasonLocalMuted(3)、ARVideoRemoteStateReasonRemoteMuted(5) 或 ARVideoRemoteStateReasonRemoteMuted(7) 的情况下，会报告该状态。
     */
    ARVideoRemoteStateStopped = 0,
    /**
     1: 本地用户已接收远端视频首包。
     */
    ARVideoRemoteStateStarting = 1,
    /**
     2: 远端视频流正在解码，正常播放。在 ARVideoRemoteStateReasonNetworkRecovery(2)、ARVideoRemoteStateReasonNetworkRecovery(4)、ARVideoRemoteStateReasonRemoteUnmuted(6) 或 ARVideoRemoteStateReasonAudioFallbackRecovery(9) 的情况下，会报告该状态。
     */
    ARVideoRemoteStateDecoding = 2,
    /**
     3: 远端视频流卡顿。在 ARVideoRemoteStateReasonNetworkCongestion(1) 或 ARVideoRemoteStateReasonAudioFallback(8) 的情况下，会报告该状态。
     */
    ARVideoRemoteStateFrozen = 3,
    /**
     4: 远端视频流播放失败。在 ARVideoRemoteStateReasonInternal(0) 的情况下，会报告该状态。
     */
    ARVideoRemoteStateFailed = 4,
};

/** 远端视频流状态改变的具体原因 */
typedef NS_ENUM(NSUInteger, ARVideoRemoteStateReason ) {
    /**
     0: 内部原因。
     */
    ARVideoRemoteStateReasonInternal = 0,
    /**
     1: 网络阻塞。
     */
    ARVideoRemoteStateReasonNetworkCongestion = 1,
    /**
     2: 网络恢复正常。
     */
    ARVideoRemoteStateReasonNetworkRecovery = 2,
    /**
     3: 本地用户停止接收远端视频流或本地用户禁用视频模块。
     */
    ARVideoRemoteStateReasonLocalMuted = 3,
    /**
     4: 本地用户恢复接收远端视频流或本地用户启动视频模块。
     */
    ARVideoRemoteStateReasonLocalUnmuted = 4,
    /**
     5: 远端用户停止发送视频流或远端用户禁用视频模块。
     */
    ARVideoRemoteStateReasonRemoteMuted = 5,
    /**
     6: 远端用户恢复发送视频流或远端用户启用视频模块。
     */
    ARVideoRemoteStateReasonRemoteUnmuted = 6,
    /**
     7: 远端用户离开频道。
     */
    ARVideoRemoteStateReasonRemoteOffline = 7,
    /**
     8: 远端视频流已回退为音频流。
     */
    ARVideoRemoteStateReasonAudioFallback = 8,
    /**
     9: 回退的远端音频流恢复为视频流。
     */
    ARVideoRemoteStateReasonAudioFallbackRecovery = 9
};

/** 选择高码率高分辨率视频或低码率低分辨率视频 */
typedef NS_ENUM(NSInteger, ARVideoStreamType ) {
    /**
    0:高码率、高分辨率视频
    */
    ARVideoStreamTypeHigh = 0,
    /**
    1:低码率、低分辨率视频
    */
    ARVideoStreamTypeLow = 1,
};

/** 视频输出方向模式 */
typedef NS_ENUM(NSInteger, ARVideoOutputOrientationMode ) {
    /**
     0:自适应布局（默认）
     该模式下SDK输出的视频方向与采集到的视频方向一致。接收端会根据收到的视频旋转信息对视频进行旋转。该模式适用于接收端可以调整视频方向的场景:
     * 如果采集的视频是横屏模式，则输出的视频也是横屏模式。
     * 如果采集的视频是竖屏模式，则输出的视频也是竖屏模式。
     */
    ARVideoOutputOrientationModeAdaptative = 0,
    /**
     1:横屏布局
     该模式下SDK固定输出人像（横屏）模式的视频。如果采集到的视频是竖屏模式，则视频编码器会对其进行裁剪。该模式适用于当接收端无法调整视频方向时，如使用旁路推流场景下。
     */
    ARVideoOutputOrientationModeFixedLandscape = 1,
    /**
     2:竖屏布局
     该模式下SDK固定输出人像（竖屏）模式的视频。如果采集到的视频是横屏模式，则视频编码器会对其进行裁剪。该模式适用于当接收端无法调整视频方向时，如使用旁路推流场景下。
     */
    ARVideoOutputOrientationModeFixedPortrait = 2,
};

/** 带宽受限时的视频编码降级偏好 */
typedef NS_ENUM(NSInteger, ARDegradationPreference) {
    /**
     0:（默认）降低编码帧率以保证视频质量。
     */
    ARDegradationMaintainQuality = 0,
    /**
     1:降低视频质量以保证编码帧率。
     */
    ARDegradationMaintainFramerate = 1,
    /**
     2:（预留参数，暂不支持）在编码帧率和视频质量之间保持平衡。
     */
    ARDegradationBalanced = 2,
};

/** 视频帧率 */
typedef NS_ENUM(NSInteger, ARVideoFrameRate) {
    /**
     1 fps.
     */
    ARVideoFrameRateFps1 = 1,
    /**
     7 fps.
     */
    ARVideoFrameRateFps7 = 7,
    /**
     10 fps.
     */
    ARVideoFrameRateFps10 = 10,
    /**
     15 fps.
     */
    ARVideoFrameRateFps15 = 15,
    /**
     24 fps.
     */
    ARVideoFrameRateFps24 = 24,
    /**
     30 fps.
     */
    ARVideoFrameRateFps30 = 30,
    /**
     60 fps (仅支持 macOS).
     */
    ARVideoFrameRateFps60 = 60,
};

/** 本地音频状态 */
typedef NS_ENUM(NSUInteger, ARAudioLocalState) {
    /**
     0: 本地音频默认初始状态。
     */
    ARAudioLocalStateStopped = 0,
    /**
     1: 本地音频录制设备启动成功。
     */
    ARAudioLocalStateRecording = 1,
    /**
     2: 本地音频首帧编码成功。
     */
    ARAudioLocalStateEncoding = 2,
    /**
     3: 本地音频启动失败。
     */
    ARAudioLocalStateFailed = 3,
};

/** 本地音频出错原因 */
typedef NS_ENUM(NSUInteger, ARAudioLocalError) {
    /**
     0: 本地音频状态正常。
     */
    ARAudioLocalErrorOk = 0,
    /**
     1: 本地音频出错原因不明确。
     */
    ARAudioLocalErrorFailure = 1,
    /**
     2: 没有权限启动本地音频录制设备。
     */
    ARAudioLocalErrorDeviceNoPermission = 2,
    /**
     3: 本地音频录制设备已经在使用中。
     */
    ARAudioLocalErrorDeviceBusy = 3,
    /**
     4: 本地音频录制失败，建议你检查录制设备是否正常工作。
     */
    ARAudioLocalErrorRecordFailure = 4,
    /**
     5: 本地音频编码失败。
     */
    ARAudioLocalErrorEncodeFailure = 5,
};

/** 远端音频状态 */
typedef NS_ENUM(NSUInteger, ARAudioRemoteState) {
    /**
     0: 远端音频流默认初始状态。在 ARAudioRemoteReasonLocalMuted(3)、ARAudioRemoteReasonRemoteMuted(5) 或 ARAudioRemoteReasonRemoteOffline(7) 的情况下，会报告该状态。
     */
    ARAudioRemoteStateStopped = 0,
    /**
     1: 本地用户已接收远端音频首包。
     */
    ARAudioRemoteStateStarting = 1,
    /**
     2: 远端音频流正在解码，正常播放。在 ARAudioRemoteReasonNetworkRecovery(2)、ARAudioRemoteReasonLocalUnmuted(4) 或 ARAudioRemoteReasonRemoteUnmuted(6) 的情况下，会报告该状态。
     */
    ARAudioRemoteStateDecoding = 2,
    /**
     3: 远端音频流卡顿。在 ARAudioRemoteReasonNetworkCongestion(1) 的情况下，会报告该状态。
     */
    ARAudioRemoteStateFrozen = 3,
    /**
     4: 远端音频流播放失败。在 ARAudioRemoteReasonInternal(0) 的情况下，会报告该状态。
     */
    ARAudioRemoteStateFailed = 4,
};

/** 远端音频流状态改变的具体原因 */
typedef NS_ENUM(NSUInteger, ARAudioRemoteStateReason) {
    /**
     0: 内部原因。
     */
    ARAudioRemoteReasonInternal = 0,
    /**
     1: 网络阻塞。
     */
    ARAudioRemoteReasonNetworkCongestion = 1,
    /**
     2: 网络恢复正常。
     */
    ARAudioRemoteReasonNetworkRecovery = 2,
    /**
     3: 本地用户停止接收远端音频流或本地用户禁用音频模块。
     */
    ARAudioRemoteReasonLocalMuted = 3,
    /**
     4: 本地用户恢复接收远端音频流或本地用户启用音频模块。
     */
    ARAudioRemoteReasonLocalUnmuted = 4,
    /**
     5: 远端用户停止发送音频流或远端用户禁用音频模块。
     */
    ARAudioRemoteReasonRemoteMuted = 5,
    /**
     6: 远端用户恢复发送音频流或远端用户启用音频模块。
     */
    ARAudioRemoteReasonRemoteUnmuted = 6,
    /**
     7: 远端用户离开频道。
     */
    ARAudioRemoteReasonRemoteOffline = 7,
};

/** 本地视频状态 */
typedef NS_ENUM(NSInteger, ARLocalVideoStreamState) {
    /**
    0: 本地视频默认初始状态。
    */
    ARLocalVideoStreamStateStopped = 0,
    /**
    1: 本地视频采集设备启动成功。
    */
    ARLocalVideoStreamStateCapturing = 1,
    /**
    2: 本地视频首帧编码成功。
    */
    ARLocalVideoStreamStateEncoding = 2,
    /**
    3: 本地视频启动失败。
     */
    ARLocalVideoStreamStateFailed = 3,
};

/** 本地视频出错原因 */
typedef NS_ENUM(NSInteger, ARLocalVideoStreamError) {
    /**
    0: 本地视频状态正常。
    */
    ARLocalVideoStreamErrorOK = 0,
    /**
    1: 出错原因不明确。
    */
    ARLocalVideoStreamErrorFailure = 1,
    /**
    2: 没有权限启动本地视频采集设备。
    */
    ARLocalVideoStreamErrorDeviceNoPermission = 2,
    /**
    3: 本地视频采集设备正在使用中。
    */
    ARLocalVideoStreamErrorDeviceBusy = 3,
    /**
    4: 本地视频采集失败，建议检查采集设备是否正常工作。
    */
    ARLocalVideoStreamErrorCaptureFailure = 4,
    /**
    5: 本地视频编码失败。
    */
    ARLocalVideoStreamErrorEncodeFailure = 5,
};

/** 摄像头采集偏好 */
typedef NS_ENUM(NSInteger, ARCameraCaptureOutputPreference) {
    /**
     0:（默认）自动调整采集参数。SDK 根据实际的采集设备性能及网络情况，选择合适的摄像头输出参数，在设备性能及视频预览质量之间，维持平衡。
     */
    ARCameraCaptureOutputPreferenceAuto = 0,
    /**
     1:优先保证设备性能。SDK 根据用户在 setVideoEncoderConfiguration 中设置编码器的分辨率和帧率，选择最接近的摄像头输出参数，从而保证设备性能。在这种情况下，预览质量接近于编码器的输出质量*/
    ARCameraCaptureOutputPreferencePerformance = 1,
    /**
     2:优先保证视频预览质量。SDK 选择较高的摄像头输出参数，从而提高预览视频的质量。在这种情况下，会消耗更多的 CPU 及内存做视频前处理。
     */
    ARCameraCaptureOutputPreferencePreview = 2,
    /**
     3:仅供内部使用
     */
    ARCameraCaptureOutputPreferenceUnkown = 3
};

#if TARGET_OS_IOS
/** 摄像头方向 */
typedef NS_ENUM(NSInteger, ARCameraDirection) {
    /**
    0:使用后置摄像头
    */
    ARCameraDirectionRear = 0,
    /**
    1:使用前置摄像头
    */
    ARCameraDirectionFront = 1,
};
#endif

/** 语音路由 */
typedef NS_ENUM(NSInteger, ARAudioOutputRouting) {
    /**
     -1:使用默认的语音路由
     */
    ARAudioOutputRoutingDefault = -1,
    /**
     0:使用耳机为语音路由
     */
    ARAudioOutputRoutingHeadset = 0,
    /**
     1:使用听筒为语音路由
     */
    ARAudioOutputRoutingEarpiece = 1,
    /**
     2:使用不带麦的耳机为语音路由
     */
    ARAudioOutputRoutingHeadsetNoMic = 2,
    /**
     3:使用手机的扬声器为语音路由
     */
    ARAudioOutputRoutingSpeakerphone = 3,
    /**
     4:使用外接的扬声器为语音路由
     */
    ARAudioOutputRoutingLoudspeaker = 4,
    /**
     5:使用蓝牙耳机为语音路由
     */
    ARAudioOutputRoutingHeadsetBluetooth = 5
};

/** 引起网络连接状态发生改变的原因 */
typedef NS_ENUM(NSUInteger, ARConnectionChangedReason) {
    /**
     0: 建立网络连接中。
     */
    ARConnectionChangedConnecting = 0,
    /**
     1: 成功加入频道。
     */
    ARConnectionChangedJoinSuccess = 1,
    /**
     2: 网络连接中断。
     */
    ARConnectionChangedInterrupted = 2,
    /**
     3: 网络连接被服务器禁止。
     */
    ARConnectionChangedBannedByServer = 3,
    /**
     4: 加入频道失败。SDK 在尝试加入频道 20 分钟后还是没能加入频道，会返回该状态，并停止尝试重连。
     */
    ARConnectionChangedJoinFailed = 4,
    /**
     5: 离开频道。
     */
    ARConnectionChangedLeaveChannel = 5,
    /**
     6: 不是有效的 APP ID。请更换有效的 APP ID 重新加入频道。
     */
    ARConnectionChangedInvalidAppId = 6,
    /**
     7: 不是有效的频道名。请更换有效的频道名重新加入频道。
     */
    ARConnectionChangedInvalidChannelName = 7,
    /**
     8: 生成的 Token 无效。一般有以下原因：
     * 在控制台上启用了 App Certificate，但加入频道未使用 Token。当启用了 App Certificate，必须使用 Token。
     * 在调用 joinChannelByToken 加入频道时指定的 uid 与生成 Token 时传入的 uid 不一致。
     */
    ARConnectionChangedInvalidToken = 8,
    /**
     9: 当前使用的 Token 过期，不再有效，需要重新在你的服务端申请生成 Token。
     */
    ARConnectionChangedTokenExpired = 9,
    /**
     10: 此用户被服务器禁止。
     */
    ARConnectionChangedRejectedByServer = 10,
    /**
     11: 由于设置了代理服务器，SDK 尝试重连。
     */
    ARConnectionChangedSettingProxyServer = 11,
    /**
     12: 更新 Token 引起网络连接状态改变。
     */
    ARConnectionChangedRenewToken = 12,
    /**
     13: 客户端 IP 地址变更，可能是由于网络类型，或网络运营商的 IP 或端口发生改变引起。
     */
    ARConnectionChangedClientIpAddressChanged = 13,
    /**
     14: SDK 和服务器连接保活超时，进入自动重连状态 ARConnectionStateReconnecting(4).
     */
    ARConnectionChangedKeepAliveTimeout = 14,
};

/** 日志过滤分级 */
typedef NS_ENUM(NSUInteger, ARLogFilter) {
    /**
     不输出日志信息
     */
    ARLogFilterOff = 0,
    /**
     输出所有 API 日志信息。如果你想获取最完整的日志，可以将日志级别设为该等级。
     */
    ARLogFilterDebug = 0x080f,
    /**
     输出 CRITICAL、ERROR、WARNING 和 INFO 级别的日志信息。我们推荐你将日志级别设为该等级。
     */
    ARLogFilterInfo = 0x000f,
    /**
     输出 CRITICAL、ERROR 和 WARNING 级别的日志信息
     */
    ARLogFilterWarning = 0x000e,
    /**
     输出 CRITICAL 和 ERROR 级别的日志信息
     */
    ARLogFilterError = 0x000c,
    /**
     输出 CRITICAL 级别的日志信息
     */
    ARLogFilterCritical = 0x0008,
};

/** 远端用户的需求优先级。如果将某个用户的优先级设为高，那么发给这个用户的音视频流的优先级就会高于其他用户。 */
typedef NS_ENUM(NSInteger, ARUserPriority ) {
    /**
     50:用户需求优先级为高
     */
    ARUserPriorityHigh = 50,
    /**
     100:（默认）用户需求优先级为正常
     */
    ARUserPriorityNormal = 100,
};

/** 音视频流回退处理选项 */
typedef NS_ENUM(NSInteger, ARStreamFallbackOptions ) {
    /**
     0:上行/下行网络较弱时，不对音视频流作回退处理，但不能保证音视频流的质量。
     */
    ARStreamFallbackOptionDisabled = 0,
    /**
     1:在下行网络条件较差的情况下，SDK 将接收视频小流（低分辨率、低码率视频s流）。此选项仅适用于 setRemoteSubscribeFallbackOption。
     */
    ARStreamFallbackOptionVideoStreamLow = 1,
    /**
     2:上行网络较弱时，只发布音频流；下行网络较弱时，先尝试只接收视频小流（低分辨率、低码率视频流），如果网络环境无法显示视频，则再回退到只接收音频流。
     */
    ARStreamFallbackOptionAudioOnly = 2,
};

/** 视频的编码类型 */
typedef NS_ENUM(NSInteger, ARVideoCodecType) {
    /**
     1: VP8.
     */
    ARVideoCodecTypeVP8 = 1,
    /**
     2: （默认值）H.264。
     */
    ARVideoCodecTypeH264 = 2,
    /**
     3:  EVP
     */
    ARVideoCodecTypeEVP = 3,
    /**
     4:  E264
     */
    ARVideoCodecTypeE264 = 4,
};

/** 自上次统计后本地视频质量的自适应情况（基于目标帧率和目标码率） */
typedef NS_ENUM(NSInteger, ARVideoQualityAdaptIndication) {
    /**
    0:本地视频质量不变
    */
    ARVideoQualityAdaptNone = 0,
    /**
    1:因网络带宽增加，本地视频质量改善
    */
    ARVideoQualityAdaptUpBandwidth = 1,
    /**
    2:因网络带宽减少，本地视频质量变差
    */
    ARVideoQualityAdaptDownBandwidth = 2,
};

/** 网络质量 */
typedef NS_ENUM(NSUInteger, ARNetworkQuality) {
    /**
     0:网络质量未知
     */
    ARNetworkQualityUnknown = 0,
    /**
     1:网络质量极好
     */
    ARNetworkQualityExcellent = 1,
    /**
     2:用户主观感觉和 excellent 差不多，但码率可能略低于 excellent
     */
    ARNetworkQualityGood = 2,
    /**
     3:用户主观感受有瑕疵但不影响沟通
     */
    ARNetworkQualityPoor = 3,
    /**
     4:勉强能沟通但不顺畅
     */
    ARNetworkQualityBad = 4,
     /**
      5:网络质量非常差，基本不能沟通
      */
    ARNetworkQualityVBad = 5,
     /**
      6:网络连接已断开，完全无法沟通
      */
    ARNetworkQualityDown = 6,
     /**
      7:网络质量探测功能不可使用 (目前没有使用)
      */
    ARNetworkQualityUnsupported = 7,
     /**
      8:网络质量探测中
      */
    ARNetworkQualityDetecting = 8,
};

/** 视频buffer */
typedef NS_ENUM(NSInteger, ARVideoBufferType ) {
    /**
     1:pixelbuffer
     */
    ARVideoBufferTypePixelBuffer = 1,
    /**
     2:rawdata
     */
    ARVideoBufferTypeRawData = 2,
};

/** 音频采集类型 */
typedef NS_ENUM(NSInteger, ARAudioType) {
    /**
     1:音频由App产生
     */
    ARAudioTypeApp = 1,
    /**
     2:音频由麦克风产生
     */
    ARAudioTypeMic = 2,
};;


#endif /* AREnumerates_h */
