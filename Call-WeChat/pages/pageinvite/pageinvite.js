// pages/p2ppage/p2ppage.js
import Store from "../../utils/store";
// 响铃
// const innerAudioContext = wx.createInnerAudioContext();
// let innerAudioContext = null;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 呼叫者
        uid: "",
        // 通话方式
        mode: 0,
        // 主叫/被叫
        CallFlse: false,
        // 响铃
        innerAudioContext: null,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const innerAudioContext = wx.createInnerAudioContext();
        innerAudioContext.src = "/pages/audio/video_request.mp3";
        innerAudioContext.autoplay = true;
        innerAudioContext.loop = true;
        innerAudioContext.play();
        Store.State = 1;
        this.setData({
            uid: Store.peerUserId,
            mode: Store.Mode,
            CallFlse: options.call == 0 ? false : true,
            innerAudioContext
        });
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        wx.hideHomeButton();
    },
    onUnload: function () {
        console.log("销毁");
        this.data.innerAudioContext.destroy();
    },
    // 取消呼叫
    async cancelCall() {
        if (this.data.CallFlse) {
            // 被叫拒绝
            Store.remoteInvitation && await Store.remoteInvitation.refuse();
        } else {
            // 主叫取消
            Store.localInvitation && await Store.localInvitation.cancel();
        }
    },
    // 接受邀请
    async acceptCall() {
        if (Store.remoteInvitation) {
            console.log("接受邀请",Store.remoteInvitation);
            // 设置响应模式
            Store.remoteInvitation.response = await JSON.stringify({
                Mode: this.data.mode,
                Conference: false,
                UserData: "",
                SipData: "",
            });
            // 本地模式
            Store.Mode = this.data.mode;
            // 接受邀请
            await Store.remoteInvitation.accept();
        }
    },
    // 语音接听
    async voiceCall() {
        if (Store.remoteInvitation) {
            // 设置响应模式
            Store.remoteInvitation.response = await JSON.stringify({
                Mode: 1,
                Conference: false,
                UserData: "",
                SipData: "",
            });
            // 本地模式
            Store.Mode = 1;
            // 接受邀请
            await Store.remoteInvitation.accept();
        }
    }
})