import RTMCustom from "./utils/rtm";
// app.js
App({
  onLaunch() {
    // 获取当前网络状态
    wx.getNetworkType({
      success(res) {
        console.log("获取当前网络状态", res);
        if (res.networkType == 'none') {
          wx.showLoading({
            title: '没有网络',
            mask: true
          })
        } else {
          // anyRTM 初始化
          RTMCustom.InItRtm();
        }
      }
    });

    // // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
  },
  // globalData: {
  //   userInfo: null,
  // }
})