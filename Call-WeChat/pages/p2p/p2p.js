import RTMCustom from "../../utils/rtm";
import Store from "../../utils/store";
// pages/p2p/p2p.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        motto: "",
        peeruid: ""
    },
    // 用户输入
    validCodeChange(e) {
        // 远端用户
        if (e.detail.length == 4) {
            this.setData({
                peeruid: e.detail
            })
            Store.peerUserId = e.detail;
        }
    },
    // 开始呼叫
    async sendCall() {
        if (Store.peerUserId == this.data.motto) {
            wx.showToast({
                title: '不能呼叫自己',
                icon: 'error',
                duration: 2000
            });
            this.setData({
                peeruid: ""
            });
            return false;
        }
        // 查询远端用户是否在线
        const oLine = await RTMCustom.rtmInternal.peerUserQuery(Store.peerUserId);
        if (oLine) {
            wx.showActionSheet({
                itemList: ['视频通话', '语音通话'],
                success(res) {
                    // 发送呼叫邀请
                    RTMCustom.rtmInternal.inviteSend(res.tapIndex);
                },
                fail(res) {
                    console.log(res.errMsg)
                }
            })

        } else {
            this.setData({
                peeruid: ""
            });
            return false;
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            motto: Store.userId
        })
        Store.State = 0;
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})