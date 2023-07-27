// 引入 RTC
import ArRTC from "ar-rtc-miniapp";
// 引入 until
import Until from "./util";
// 引入 store
import Store from "./store";
// 引入 SDK 配置
import Config from "./config";

// 初始化 RTC
const InItRTC = async () => {
    // 创建RTC客户端 
    Store.rtcClient = new ArRTC.client();
    // 初始化
    await Store.rtcClient.init(Config.AppId);

    Config.RTC_setParameters.setParameters && await Store.rtcClient.setParameters(Config.RTC_setParameters.setParameters)
    // 已添加远端音视频流
    Store.rtcClient.on('stream-added', rtcEvent.userPublished);
    // 已删除远端音视频流
    Store.rtcClient.on('stream-removed', rtcEvent.userUnpublished);
    // 通知应用程序发生错误
    Store.rtcClient.on('error', rtcEvent.error);
    // 更新 Url 地址
    Store.rtcClient.on('update-url', rtcEvent.updateUrl);
    // 远端视频已旋转
    Store.rtcClient.on('video-rotation', rtcEvent.videoRotation);
    // 远端用户已停止发送音频流
    Store.rtcClient.on('mute-audio', rtcEvent.muteAudio);
    // 远端用户已停止发送视频流
    Store.rtcClient.on('mute-video', rtcEvent.muteVideo);
    // 远端用户已恢复发送音频流
    Store.rtcClient.on('unmute-audio', rtcEvent.unmuteAudio);
    // 远端用户已恢复发送视频流
    Store.rtcClient.on('unmute-video', rtcEvent.unmuteAudio);
}

// RTC 监听事件处理
const rtcEvent = {
    // RTC SDK 监听用户发布
    userPublished: ({
        uid
    }) => {
        console.log("RTC SDK 监听用户发布", uid);
        Store.networkSendInfoDetection && clearTimeout(Store.networkSendInfoDetection);
        if (Store.Mode == 0) {
            wx.showLoading({
                title: '远端加载中',
                mask: true,
            })
        }

        // 订阅远端用户发布音视频
        Store.rtcClient.subscribe(uid, (url) => {
            console.log("远端用户发布音视频", url);
            // 向视频页面发送远端拉流地址
            Until.emit("livePusherUrlEvent", {
                livePlayerUrl: url
            });
        }, (err) => {
            console.log("订阅远端用户发布音视频失败", err);
        })
    },
    // RTC SDK 监听用户取消发布
    userUnpublished: ({
        uid
    }) => {
        console.log("RTC SDK 监听用户取消发布", uid);
        Store.networkSendInfoDetection && clearTimeout(Store.networkSendInfoDetection);
        Store.networkSendInfoDetection = setTimeout(() => {
            wx.showToast({
                title: '对方网络异常',
                icon: "error"
            });
            setTimeout(() => {
                rtcInternal.leaveChannel(false);
            }, 2000)

        }, Store.networkSendInfoDetectionTime);


    },
    // 更新 Url 地址
    updateUrl: ({
        uid,
        url
    }) => {
        console.log("包含远端用户的 ID 和更新后的拉流地址", uid, url);
        // 向视频页面发送远端拉流地址
        Until.emit("livePusherUrlEvent", {
            livePlayerUrl: url
        });
    },
    // 视频的旋转信息以及远端用户的 ID
    videoRotation: ({
        uid,
        rotation
    }) => {
        console.log("视频的旋转信息以及远端用户的 ID", uid, rotation);
    },
    // 远端用户已停止发送音频流
    muteAudio: ({
        uid
    }) => {
        console.log("远端用户已停止发送音频流", uid);
    },
    // 远端用户已停止发送视频流
    muteVideo: ({
        uid
    }) => {
        console.log("远端用户已停止发送视频流", uid);
    },
    // 远端用户已恢复发送音频流
    unmuteAudio: ({
        uid
    }) => {
        console.log("远端用户已恢复发送音频流", uid);
    },
    // 远端用户已恢复发送视频流
    unmuteAudio: ({
        uid
    }) => {
        console.log("远端用户已恢复发送视频流", uid);
    },
    // 通知应用程序发生错误。 该回调中会包含详细的错误码和错误信息
    error: ({
        code,
        reason
    }) => {
        console.log("错误码:" + code, "错误信息:" + reason);
    },
}

// RTC 内部逻辑
const rtcInternal = {
    // 加入频道
    joinChannel: () => {
        Store.rtcClient.join(undefined, Store.channelId, Store.userId, () => {
            console.log("加入频道成功", Store.rtcClient);
            // 发布视频
            rtcInternal.publishTrack();
            // 加入房间一定时间内无人加入
            Store.networkSendInfoDetection && clearTimeout(Store.networkSendInfoDetection);
            Store.networkSendInfoDetection = setTimeout(() => {
                wx.showToast({
                    title: '对方网络异常',
                    icon: "error"
                });
                setTimeout(() => {
                    rtcInternal.leaveChannel(false);
                }, 2000)

            }, Store.networkSendInfoDetectionTime);


        }, (err) => {
            console.log("加入频道失败");
        });
    },
    // 离开频道
    leaveChannel: (sendfase = true) => {
        console.log("离开频道", sendfase);
        console.log("RTC 离开频道", Store);
        Store.networkSendInfoDetection && clearTimeout(Store.networkSendInfoDetection);
        if (Store.rtcClient) {
            Store.rtcClient.destroy(() => {
                // 引入 RTM 封装逻辑(离开后发送挂断信令)
                const RTMCustom = require("./rtm");
                console.log("离开频道", RTMCustom);
                if (sendfase) {
                    // 发送离开信息
                    RTMCustom.rtmInternal.sendMessage(Store.peerUserId, {
                        Cmd: "EndCall",
                    })
                }
                Until.clearStore();
                // 返回首页
                wx.reLaunch({
                    url: '../index/index',
                    success:function () {
                        wx.showToast({
                          title: '通话结束',
                          icon:'none'
                        })
                    }
                });
            }, (err) => {
                console.log("离开频道失败", err);
            })
        } else {
            Until.clearStore();
        }
    },
    // 发布本地音视频
    publishTrack: () => {
        Store.rtcClient.publish((url) => {
            // 因微信更新，纯语音通话需要调用该方法
            if(Store.Mode == 1) {
                console.log("因微信更新，纯语音通话需要调用该方法");
                Store.rtcClient.muteLocal('video');
            }

            console.log("发布本地音视频", url);
            // 本地录制地址(小程序特有推流)
            Store.livePusherUrl = url;
            // 向视频页面发送本地推流地址
            Until.emit("livePusherUrlEvent", {
                livePusherUrl: url
            });
        }, ({
            code,
            reason
        }) => {
            console.log("发布本地音视频失败", code, reason);
        })
    },

    // 切换静音
    switchAudio: (enableAudio = false) => {
        /**
         * muteLocal 停止发送本地用户的音视频流
         * unmuteLocal 恢复发送本地用户的音视频流
         */
        Store.rtcClient[enableAudio ? 'muteLocal' : 'unmuteLocal']('audio', () => {
            wx.showToast({
                title: enableAudio ? '关闭声音' : '开启声音',
                icon: 'none',
                duration: 2000
            })
        }, ({
            code,
            reason
        }) => {
            console.log("发布本地音视频失败", code, reason);
        })
    },
}

module.exports = {
    InItRTC,
    rtcInternal,
}