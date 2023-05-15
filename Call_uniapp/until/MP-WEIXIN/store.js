// anyRTC RTM 相关
module.exports = {
    // 网络状态
    networkType: "",
    // rtm连接状态
    rtmNetWorkType: "",
    // rtc连接状态
    rtcNetWorkType: "",
    // 视频通话0 语音通话1
    Mode: 0,
    // 当前场景 0:首页 1:呼叫页面 2:通信页面
    State: 0,

    // 本地用户uid
    userId: "",
    // 远端用户uid
    peerUserId: "",
    // 频道房间
    channelId: "",

    // RTM 客户端
    rtmClient: null,
    // RTC 客户端
    rtcClient: null,

    // 本地录制地址(小程序特有推流)
    livePusherUrl: "",
    // 远端播放(小程序特有拉流)
    livePlayerUrl: "",

    // 主叫邀请实例
    localInvitation: null,
    // 被叫收到的邀请实例
    remoteInvitation: null,

    // 是否正在通话
    Calling: false,
    // 是否是单人通话
    Conference: false,

    // 通话计时
    callTime: 0,
    callTimer: null,

    // 30s 后无网络取消通话
    networkEndCall: null,
    networkEndCallTime: 30*1000,

    // 断网发送查询后检测是否返回消息
    networkSendInfoDetection: null,
    networkSendInfoDetectionTime: 10*1000,
}