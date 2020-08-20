## 效果

![image](https://github.com/anyRTC-UseCase/ARCall/blob/master/resource/demo.gif)

## 项目概述

ARCall 是anyRTC模仿微信呼叫的示例项目，演示了如何通过 anyRTC云服务，并配合 anyRTC RTC SDK、anyRTC RTM SDK，快速实现呼叫邀请通话的场景。
- 可拓展多人呼叫邀请。
- 可运用自采集模块，加载第三方美颜库，实现美颜贴图功能。
- 可对接第三方推送实现推送功能。

## 代码下载
Github代码下载如何很慢，请移步至[码云](https://gitee.com/anyRTC/ARCall)下载

### 支持场景

ARCall 示例项目提供呼叫邀请功能。类似微信呼叫好友聊天。呼叫方发送呼叫邀请，接收端接收呼叫请求，同意该呼叫邀请，进行音视频通信，通信中可以静音、关闭本地摄像头、打开关闭扬声器、切换摄像头等操作。

ArCall点对点呼叫Demo可普遍使用于在线医疗、在线教育、企业内部通讯、智能终端、陌生人交友、视频面试、呼叫中心和调度安防中，低延时快速接通，实时音视频交流互动。

### 功能列表

#### RTM-SDK功能

- 创建RTM实时消息引擎：[initWithAppId](https://docs.anyrtc.io/rtm-ios/docs/ios_rtm/ios_rtm_kit#initwithappid)
- 登录：[loginByToken](https://docs.anyrtc.io/rtm-ios/docs/ios_rtm/ios_rtm_kit#loginbytoken)
- 获取呼叫对象：[getRtmCallKit](https://docs.anyrtc.io/rtm-ios/docs/ios_rtm/ios_rtm_kit#getrtmcallkit)
- 呼叫邀请：[sendLocalInvitation](https://docs.anyrtc.io/rtm-ios/docs/ios_rtm/ios_rtm_callkit#sendlocalinvitation)
- 取消呼叫邀请：[cancelLocalInvitation](https://docs.anyrtc.io/rtm-ios/docs/ios_rtm/ios_rtm_callkit#cancellocalinvitation)
- 接受呼叫邀请：[acceptRemoteInvitation](https://docs.anyrtc.io/rtm-ios/docs/ios_rtm/ios_rtm_callkit#acceptremoteinvitation)
- 拒绝呼叫邀请：[refuseRemoteInvitation](https://docs.anyrtc.io/rtm-ios/docs/ios_rtm/ios_rtm_callkit#refuseremoteinvitation)

#### RTC-SDK功能

- 创建RTC音视频引擎：[sharedEngineWithAppId](https://docs.anyrtc.io/rtc-ios/docs/ios/ios_rtc_kit#sharedengineWithappId)
- 启用视频模块：[enableVideo](https://docs.anyrtc.io/rtc-ios/docs/ios/ios_rtc_kit#enablevideo)
- 设置视频编码属性：[setVideoEncoderConfiguration](https://docs.anyrtc.io/rtc-ios/docs/ios/ios_rtc_kit#setvideoencoderconfiguration)
- 初始化本地视图：[setupLocalVideo](https://docs.anyrtc.io/rtc-ios/docs/ios/ios_rtc_kit#setuplocalvideo)
- 加入频道：[joinChannelByToken](https://docs.anyrtc.io/rtc-ios/docs/ios/ios_rtc_kit#joinchannelbytoken)
- 离开频道：[leaveChannel](https://docs.anyrtc.io/rtc-ios/docs/ios/ios_rtc_kit#leavechannel)
- 静音/取消静音：[muteLocalAudioStream](https://docs.anyrtc.io/rtc-ios/docs/ios/ios_rtc_kit#mutelocalaudiostream)
- 打开/关闭扬声器：[setEnableSpeakerphone](https://docs.anyrtc.io/rtc-ios/docs/ios/ios_rtc_kit#setenablespeakerphone)
- 开关本地视频发送：[muteLocalVideoStream](https://docs.anyrtc.io/rtc-ios/docs/ios/ios_rtc_kit#mutelocalvideostream)
- 切换前后摄像头：[switchCamera](https://docs.anyrtc.io/rtc-ios/docs/ios/ios_rtc_kit#switchcamera)

功能展示为iOS接口，其他平台接口请前往[文档中心](https://docs.anyrtc.io/)。

### 平台兼容

ARCall 示例项目支持以下平台和版本：

- iOS 9 及以上。
- Android 4.4 及以上。
- Web Chrome 72 及以上，Web 其他浏览器未经验证。

## 快速开始

### 前提条件

在编译及运行 ARCall 示例项目之前，你需要完成以下准备工作。

#### 获取App ID
通过以下步骤获取anyRTC App ID：
  1. 在anyRTC[控制台](https://console.anyrtc.io/signup)创建一个账号。
  2. 登录anyRTC控制台，创建一个项目。
  3. 前往**项目管理**页面，获取该项目的 App ID。

### 运行示例项目

参考以下文档在对应的平台编译及运行示例项目：

- [Android 运行指南](https://github.com/anyRTC-UseCase/ARCall/tree/master/Call-Android)
- [iOS 运行指南](https://github.com/anyRTC-UseCase/ARCall/tree/master/Call-iOS)
- [Web 运行指南](https://github.com/anyRTC-UseCase/ARCall/tree/master/Call-web)

### 与SIP互通

[SipRtcProxy](https://github.com/anyRTC-UseCase/SipRtcProxy)是anyRTC开源的sip proxy,实现了rtc与sip的互通。


## 常见问题

详见[常见问题](https://docs.anyrtc.io/platforms/docs/platforms/FAQ/faq)。

## **anyRTC创业扶持计划**

- 30万免费分钟数，助力初创企业快速发展。

>  anyRTC初创企业扶持计划，只要通过企业审核，联系客服加入anyRTC创业扶持计划，即可享受30万免费分钟数。获得分钟数可降低在实时音视频技术服务所产生的成本费用，零成本快速启动项目。

- 专属技术指导支持

> anyRTC为初创企业提供一对一专属客服，为客户提供专业、认真的服务，及时解答您的疑惑。并为客户提供专属技术指导，更快上手，轻松上线！

### 联系我们

联系电话：021-65650071

QQ咨询群：580477436

ARCall技术交流群：597181019

咨询邮箱：hi@dync.cc

技术问题：[开发者论坛](https://bbs.anyrtc.io)

获取更多帮助前往：[www.anyrtc.io](http://www.anyrtc.io)

