// 引入 anyRTM 
import ArRTM from "ar-rtm-sdk";
// 引入 until
import Until from "./util";
// 引入 store
import Store from "./store";
// 引入 SDK 配置
import Config from "./config";
// 引入 RTC 封装逻辑
import RTCCustom from "./rtc";

// 本地 uid 随机生成
Store.userId = Until.generateNumber(4) + '';


// 监听网络状态变化事件
wx.onNetworkStatusChange(function (res) {
    // 网络状态
    Store.networkType = res.networkType
    // 无网络
    if (res.networkType == 'none') {
        wx.showLoading({
            title: '网络掉线了',
            mask: true
        });
        Store.rtmNetWorkType = "";
        // 30s 无网络连接结束当前呼叫
        Store.networkEndCall && clearTimeout(Store.networkEndCall);
        Store.networkEndCall = setTimeout(() => {
            rtmInternal.networkEndCall();
        }, Store.networkEndCallTime);

    } else {
        Store.networkEndCall && clearTimeout(Store.networkEndCall);
        wx.hideLoading();
        if (!Store.rtmClient) {
            // 初始化
            InItRtm();
        } else {
            if (!Store.rtcClient) {
                // 呼叫阶段
                let oRtmSetInterval = setInterval(() => {
                    // rtm 链接状态
                    if (Store.rtmNetWorkType == "CONNECTED") {
                        clearInterval(oRtmSetInterval);
                        Store.networkSendInfoDetection && clearTimeout(Store.networkSendInfoDetection);
                        // 发送信息，查看对方状态
                        rtmInternal.sendMessage(Store.peerUserId, {
                            Cmd: "CallState",
                        });
                        // 发送无响应
                        Store.networkSendInfoDetection = setTimeout(() => {
                            rtmInternal.networkEndCall();
                        }, Store.networkEndCallTime);
                    }
                }, 500)
            }

        }
    }
});

// 初始化
const InItRtm = async () => {
    // 创建 RTM 客户端
    Store.rtmClient = await ArRTM.createInstance(Config.AppId);
    Config.RTM_setParameters.setParameters && await Store.rtmClient.setParameters(Config.RTM_setParameters.setParameters)
    // RTM 版本
    console.log("RTM 版本", ArRTM.VERSION);
    wx.showLoading({
        title: '登录中',
        mask: true
    })
    // 登录 RTM
    await Store.rtmClient.login({
        token: "",
        uid: Store.userId
    }).then(() => {
        wx.hideLoading();
        wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 2000
        })
        console.log("登录成功");
    }).catch((err) => {
        Store.userId = "";
        wx.hideLoading();
        wx.showToast({
            icon: 'error',
            title: 'RTM 登录失败',
            mask: true,
            duration: 2000
        });
        console.log("RTM 登录失败", err);
    });

    // 监听收到来自主叫的呼叫邀请
    Store.rtmClient.on(
        "RemoteInvitationReceived",
        rtmEvent.RemoteInvitationReceived
    );
    // 监听收到来自对端的点对点消息
    Store.rtmClient.on("MessageFromPeer", rtmEvent.MessageFromPeer);
    // 通知 SDK 与 RTM 系统的连接状态发生了改变
    Store.rtmClient.on(
        "ConnectionStateChanged",
        rtmEvent.ConnectionStateChanged
    );

}

// RTM 监听事件
const rtmEvent = {
    // 主叫：被叫已收到呼叫邀请
    localInvitationReceivedByPeer: () => {
        console.log("主叫：被叫已收到呼叫邀请");
        // 跳转至呼叫页面
        wx.reLaunch({
            url: '../pageinvite/pageinvite?call=0'
        });

        wx.showToast({
            title: '被叫已收到呼叫邀请',
            icon: 'none',
            duration: 2000,
            mask: true,
        });

    },
    // 主叫：被叫已接受呼叫邀请
    localInvitationAccepted: async (response) => {
        console.log("主叫：被叫已接受呼叫邀请", response);
        try {
            const oInfo = JSON.parse(response);
            // 更改通话方式
            Store.Mode = oInfo.Mode;
            wx.showToast({
                title: '呼叫邀请成功',
                icon: 'success',
                duration: 2000
            });
            // anyRTC 初始化
            await RTCCustom.InItRTC();
            // 加入 RTC 频道
            await RTCCustom.rtcInternal.joinChannel();

            // 进入通话页面
            wx.reLaunch({
                url: '../pagecall/pagecall',
            });
        } catch (error) {
            console.log("主叫：被叫已接受呼叫邀请 数据解析失败", response);
        }

    },
    // 主叫：被叫拒绝了你的呼叫邀请
    localInvitationRefused: (response) => {
        try {
            const oInfo = JSON.parse(response);
            // 不同意邀请后返回首页
            rtmInternal.crosslightgoBack(oInfo.Cmd == "Calling" ? "用户正在通话中" : "用户拒绝邀请");
        } catch (error) {
            rtmInternal.crosslightgoBack("用户拒绝邀请")
        }
    },
    // 主叫：呼叫邀请进程失败
    localInvitationFailure: (response) => {
        console.log("主叫：呼叫邀请进程失败", response);
        // rtmInternal.crosslightgoBack("呼叫邀请进程失败");
    },
    // 主叫：呼叫邀请已被成功取消 (主动挂断)
    localInvitationCanceled: () => {
        console.log("主叫：呼叫邀请已被成功取消 (主动挂断)");
        // 不同意邀请后返回首页
        rtmInternal.crosslightgoBack("已取消呼叫");
    },

    // 被叫：监听收到来自主叫的呼叫邀请
    RemoteInvitationReceived: async (remoteInvitation) => {
        if (Store.Calling) {
            // 正在通话中处理
            rtmInternal.callIng(remoteInvitation);
        } else {
            wx.showLoading({
                title: '收到呼叫邀请',
                mask: true,
            })

            // 解析主叫呼叫信息
            const invitationContent = await JSON.parse(remoteInvitation.content);
            if (invitationContent.Conference) {
                setTimeout(() => {
                    wx.hideLoading();
                    wx.showToast({
                        title: '暂不支持多人通话(如需添加，请自行添加相关逻辑)',
                        icon: 'none',
                        duration: 3000,
                        mask: true,
                    })
                    // 暂不支持多人通话(如需添加，请自行添加相关逻辑)
                    remoteInvitation.refuse();
                }, 1500);
            } else {
                wx.hideLoading();
                // 通话方式
                Store.Mode = invitationContent.Mode;
                // 频道房间
                Store.channelId = invitationContent.ChanId;
                // 存放被叫实例
                Store.remoteInvitation = remoteInvitation;
                // 远端用户
                Store.peerUserId = remoteInvitation.callerId;
                // 标识为正在通话中
                Store.Calling = true;
                // 是否是单人通话
                Store.Conference = invitationContent.Conference;
                // 跳转至呼叫页面
                wx.reLaunch({
                    url: '../pageinvite/pageinvite?call=1'
                });

                // 收到呼叫邀请处理
                rtmInternal.inviteProcessing(remoteInvitation);
            }
        }
    },
    // 被叫：监听接受呼叫邀请
    RemoteInvitationAccepted: async () => {
        console.log("被叫 接受呼叫邀请", Store);
        wx.showLoading({
            title: '接受邀请',
            mask: true,
        })
        // anyRTC 初始化
        await RTCCustom.InItRTC();
        // 加入 RTC 频道
        await RTCCustom.rtcInternal.joinChannel();
        wx.hideLoading()
        // 进入通话页面
        wx.reLaunch({
            url: '../pagecall/pagecall',
        });
    },
    // 被叫：监听拒绝呼叫邀请
    RemoteInvitationRefused: () => {
        console.log("被叫 拒绝呼叫邀请");
        // 不同意邀请后返回首页
        rtmInternal.crosslightgoBack("成功拒绝邀请");
    },
    // 被叫：监听主叫取消呼叫邀请
    RemoteInvitationCanceled: () => {
        console.log("被叫 取消呼叫邀请");
        // 不同意邀请后返回首页
        rtmInternal.crosslightgoBack("主叫取消呼叫邀请");
    },
    // 被叫：监听呼叫邀请进程失败
    RemoteInvitationFailure: () => {
        console.log("被叫 呼叫邀请进程失败");
        // 不同意邀请后返回首页
        rtmInternal.crosslightgoBack("呼叫邀请进程失败");
    },


    // 收到来自对端的点对点消息
    MessageFromPeer: (message, peerId) => {
        console.log("收到来自对端的点对点消息", message, peerId);
        message.text = JSON.parse(message.text);
        switch (message.text.Cmd) {
            case "SwitchAudio":
                // 视频通话页面转语音
                Until.emit("callModeChange", {
                    mode: 1
                });
                break;
            case "EndCall":
                // 挂断
                RTCCustom.rtcInternal.leaveChannel(false);
                break;
            case "CallState":
                // 对方查询本地状态,返回给对方信息
                rtmInternal.sendMessage(peerId, {
                    Cmd: "CallStateResult",
                    state: Store.peerUserId !== peerId ? 0 : Store.State,
                    Mode: Store.Mode,
                })
                break;
            case "CallStateResult":
                // 远端用户返回信息处理
                console.log("本地断网重连后对方状态", message, peerId);
                Store.networkSendInfoDetection && clearTimeout(Store.networkSendInfoDetection);
                if (message.text.state == 0 && Store.State != 0) {
                    // 远端停止通话，本地还在通话
                    rtmInternal.networkEndCall();
                } else if (message.text.state == 2) {
                    Store.Mode = message.text.Mode;
                    // 远端 rtc 通话
                    if (Store.State == 1) {
                        // 本地 rtm 呼叫中进入RTC
                        console.log("本地 rtm 呼叫中进入RTC", Store);
                    } else if (Store.State == 2) {
                        // 本地 rtc 通话
                        if (message.text.Mode == 1) {
                            // 转语音通话
                            Until.emit("callModeChange", {
                                mode: 1
                            });
                        }
                    }
                }
                break;
            default:
                console.log("收到来自对端的点对点消息", message, peerId);
                break;
        }
    },
    // 通知 SDK 与 RTM 系统的连接状态发生了改变
    ConnectionStateChanged: (newState, reason) => {
        console.log("系统的连接状态发生了改变", newState);
        Store.rtmNetWorkType = newState;
        switch (newState) {
            case "CONNECTED":
                wx.hideLoading();
                //  SDK 已登录 RTM 系统
                wx.showToast({
                    title: 'RTM 连接成功',
                    icon: 'success',
                    mask: true,
                })
                break;
            case "ABORTED":
                wx.showToast({
                    title: 'RTM 停止登录',
                    icon: 'error',
                    mask: true,
                });
                console.log("RTM 停止登录,重新登录");

                break;
            default:
                wx.showLoading({
                    title: 'RTM 连接中',
                    mask: true,
                })
                break;
        }
    }
}

// RTM 内部逻辑
const rtmInternal = {
    // 查询呼叫用户是否在线
    peerUserQuery: async (uid) => {
        const oUserStatus = await Store.rtmClient.queryPeersOnlineStatus([uid]);
        if (!oUserStatus[uid]) {
            wx.showToast({
                title: '用户不在线',
                icon: 'error',
                duration: 2000,
                mask: true,
            });
            return false;
        }
        return true;
    },

    // 主叫发起呼叫
    inviteSend: async (callMode) => {
        // 随机生成频道
        Store.channelId = '' + Until.generateNumber(9);
        // 正在通话中
        Store.Calling = true;
        // 通话方式
        Store.Mode = callMode;
        // 创建呼叫邀请
        Store.localInvitation = Store.rtmClient.createLocalInvitation(
            Store.peerUserId
        );
        // 设置邀请内容
        Store.localInvitation.content = JSON.stringify({
            Mode: callMode, // 呼叫类型 视频通话 0 语音通话 1
            Conference: false, // 是否是多人会议
            ChanId: Store.channelId, // 频道房间
            UserData: "",
            SipData: "",
            VidCodec: ["H264"],
            AudCodec: ["Opus"],
        });


        // 事件监听
        // 监听被叫已收到呼叫邀请
        Store.localInvitation.on(
            "LocalInvitationReceivedByPeer",
            rtmEvent.localInvitationReceivedByPeer
        );
        // 监听被叫已接受呼叫邀请
        Store.localInvitation.on(
            "LocalInvitationAccepted",
            rtmEvent.localInvitationAccepted
        );
        // 监听被叫拒绝了你的呼叫邀请
        Store.localInvitation.on(
            "LocalInvitationRefused",
            rtmEvent.localInvitationRefused
        );
        // 监听呼叫邀请进程失败
        Store.localInvitation.on(
            "LocalInvitationFailure",
            rtmEvent.localInvitationFailure
        );
        // 监听呼叫邀请已被成功取消
        Store.localInvitation.on(
            "LocalInvitationCanceled",
            rtmEvent.localInvitationCanceled
        );

        // 发送邀请
        Store.localInvitation.send();
    },
    // 被叫收到呼叫邀请处理(给收到的邀请实例绑定事件)
    inviteProcessing: async (remoteInvitation) => {
        // 监听接受呼叫邀请
        remoteInvitation.on(
            "RemoteInvitationAccepted",
            rtmEvent.RemoteInvitationAccepted
        );
        // 监听拒绝呼叫邀请
        remoteInvitation.on(
            "RemoteInvitationRefused",
            rtmEvent.RemoteInvitationRefused
        );
        // 监听主叫取消呼叫邀请
        remoteInvitation.on(
            "RemoteInvitationCanceled",
            rtmEvent.RemoteInvitationCanceled
        );
        // 监听呼叫邀请进程失败
        remoteInvitation.on(
            "RemoteInvitationFailure",
            rtmEvent.RemoteInvitationFailure
        );
    },

    // 正在通话中处理
    callIng: async (remoteInvitation) => {
        remoteInvitation.response = await JSON.stringify({
            // Reason: "Calling",
            refuseId: Store.ownUserId,
            Reason: "calling",
            Cmd: "Calling",
        });
        await remoteInvitation.refuse();
    },

    // 不同意邀请后返回首页
    crosslightgoBack: (message) => {
        // Store 重置
        Until.clearStore();
        // 返回首页
        wx.reLaunch({
            url: '../index/index',
        });
        wx.showToast({
            title: message,
            icon: 'none',
            duration: 2000,
            mask: true,
        });
    },

    // 发送消息
    sendMessage: (uid, message) => {
        console.log("发送消息", uid, message);
        Store.rtmClient && Store.rtmClient.sendMessageToPeer({
            text: JSON.stringify(message)
        }, uid).catch(err => {
            console.log("发送消息失败", err);
        });
    },
    // 无网络连接结束当前呼叫
    networkEndCall: () => {
        if (Store.rtcClient) {
            // RTC 挂断
        } else {
            // 呼叫阶段
            let oRtmSetInterval = setInterval(() => {
                // rtm 链接状态
                if (Store.rtmNetWorkType == "CONNECTED") {
                    clearInterval(oRtmSetInterval);
                    // RTM 取消/拒绝呼叫
                    if (Store.localInvitation) {
                        // 主叫取消呼叫
                        Store.localInvitation.cancel();
                    } else if (Store.remoteInvitation) {
                        // 被叫拒绝呼叫
                        Store.remoteInvitation.refuse();
                    }
                }
            }, 500);
        }
    }
}

module.exports = {
    InItRtm,
    rtmInternal,
}