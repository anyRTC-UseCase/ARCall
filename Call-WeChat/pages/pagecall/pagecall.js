const Until = require("../../utils/util");
const Store = require("../../utils/store");
const RTC = require("../../utils/rtc");
const RTM = require("../../utils/rtm");
const liveCode = require("../../utils/live-code");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 可用宽度
        windowWidth: "",
        // 通话方式
        mode: 0,
        // 远端uid
        peerid: "",
        // 本地录制地址(小程序特有推流)
        livePusherUrl: "",
        // 远端播放(小程序特有拉流)
        livePlayerUrl: "",

        // 前置或后置，值为front, back
        devicePosition: 'front',
        // 开启或关闭麦克风
        enableMic: false,
        // 开启免提
        soundMode: 'speaker',

        calltime: "00:00"

    },
    // 微信组件状态
    statechange(e) {
        if (e.detail.code == 2004) {
            wx.hideLoading();
        }
        if (e.detail.code != 1006 && e.detail.message) {
            wx.showToast({
                title: liveCode[e.detail.code] || e.detail.message,
                icon: 'none',
            })
        }

        console.log('live-pusher code:', e.detail)
    },
    // 微信组件错误
    error(e) {
        console.log(e.detail);
        switch (e.detail.errCode) {
            case 10001:
                wx.showToast({
                    title: '用户禁止使用摄像头',
                    icon: 'none',
                    duration: 2000
                })
                break;
            case 10002:
                wx.showToast({
                    title: '用户禁止使用录音',
                    icon: 'none',
                    duration: 2000
                })
                break;
            default:
                break;
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const _this = this;
        Store.State = 2;
        // 推拉流变更
        Until.on("livePusherUrlEvent", this, (data) => {
            _this.setData({
                livePusherUrl: data.livePusherUrl ? data.livePusherUrl : _this.data.livePusherUrl,
                livePlayerUrl: data.livePlayerUrl ? data.livePlayerUrl : _this.data.livePlayerUrl,
            })
        });
        // 通话模式变更
        Until.on("callModeChange", this, (data) => {
            _this.setData({
                mode: data.mode,
            });
            Store.Mode = data.mode;
            if (data.mode === 1) {
                // 被动变更
                Store.rtcClient.muteLocal('video');
            }


        })
        // 可用宽度
        try {
            const oInfo = wx.getSystemInfoSync();
            this.setData({
                windowWidth: oInfo.windowWidth,
                mode: Store.Mode,
                // mode: 1,
                peerid: Store.peerUserId || '6666',
            })
            // 开启通话计时
            Store.callTimer = setInterval(() => {
                _this.setData({
                    calltime: Until.calculagraph()
                })
            }, 1000)
        } catch (error) {
            console.log("error", error);
        }

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        Until.remove("livePusherUrlEvent", this);
        Until.remove("callModeChange", this);
    },
    // 切换至语音
    switchAudio() {
        this.setData({
            peerid: Store.peerUserId,
            mode: 1,
        });
        Store.Mode = 1;
        // 被动变更
        Store.rtcClient.muteLocal('video');
        // 发送切换语音消息
        RTM.rtmInternal.sendMessage(Store.peerUserId, {
            Cmd: "SwitchAudio",
        })
    },
    // 挂断
    endCall() {
        RTC.rtcInternal.leaveChannel(true);
    },
    // 翻转摄像头
    switchCamera() {
        wx.createLivePusherContext().switchCamera();
        this.setData({
            devicePosition: this.data.devicePosition == 'front' ? 'back' : 'front'
        })
    },
    // 静音
    muteAudio() {
        this.setData({
            enableMic: this.data.enableMic ? false : true,
        });
        RTC.rtcInternal.switchAudio(this.data.enableMic);
    },
    // 免提
    handsFree() {
        this.setData({
            soundMode: this.data.soundMode == 'speaker' ? 'ear' : 'speaker',
        });
    },
})