## 项目概述

**ARCall**是[anyRTC](https://www.anyrtc.io)专为2人通话的示例项目，演示了如何通过 anyRTC云服务，并配合 [anyRTC RTC Web SDK](https://docs.anyrtc.io/rtc-web/)[、anyRTC RTM Web SDK](https://docs.anyrtc.io/rtm-web)，快速实现呼叫邀请通话的场景。

- 可拓展多人呼叫邀请。
- 可运用自采集模块，加载第三方美颜库，实现美颜贴图功能。
- 可对接第三方推送实现推送功能。


## 支持场景

ARCall 示例项目提供呼叫邀请功能。类似微信呼叫好友聊天。呼叫方发送呼叫邀请，接收端接收呼叫请求，同意该呼叫邀请，进行音视频通信，通信中可以静音、关闭本地摄像头、打开关闭扬声器、切换摄像头等操作。

ArCall点对点呼叫Demo可普遍使用于在线医疗、在线教育、企业内部通讯、智能终端、陌生人交友、视频面试、呼叫中心和调度安防中，低延时快速接通，实时音视频交流互动。

## 快速开始

### 前提条件

在编译及运行 ARCall 示例项目之前，你需要完成以下准备工作。

### 获取App ID

通过以下步骤获取anyRTC App ID：

1. 在anyRTC控制台创建一个账号。
2. 登录anyRTC控制台，创建一个项目。
3. 前往项目管理页面，获取该项目的 App ID。


### 修改配置文件

打开文件`assets/js/index.js`，找到下方配置，将上方步骤获取到的APPID设置 `RTC` 以及 `RTM` 的 `APPID`
```
//配置
var Config = {
  RTC_APPID: "",//RTC 应用ID
  RTM_APPID: "",//RTM 应用ID
  RTC_MODE: "live",//RTC 通信模式
  RTC_CODEC: "h264",//RTC 视频编码格式
  ...
};
```

### 运行示例项目

1. 打开`index.html`（双击或选择浏览器打开）
2. 部署至web服务器（`nginx`或`apahce`等）, 也可以临时搭建一个本地web服务器（`python` `、webpack-dev-serve`等）

**注意**

> 需要注意的时，如果使用的是`方法2`（通过域名或ip访问），必须配置SSL证书（`localhost`或`127.0.0.1`除外）。
> 需要注意的时，如果使用的是`方法2`（通过域名或ip访问），必须配置SSL证书（`localhost`或`127.0.0.1`除外）。
> 需要注意的时，如果使用的是`方法2`（通过域名或ip访问），必须配置SSL证书（`localhost`或`127.0.0.1`除外）。

