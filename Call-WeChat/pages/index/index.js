// index.js
// 获取应用实例

const Store = require("../../utils/store");
Page({
  data: {
    motto: '',
  },
  // 初始化
  onLoad() {
    Store.State = 0;
      this.setData({
        motto: Store.userId
      })

  },
  // 跳转至p2p
  bindViewTapP2p() {
    if(this.data.motto) {
      wx.showLoading({
        title: '跳转中',
      })
      wx.navigateTo({
        url: '../p2p/p2p',
        success: () => {
          wx.hideLoading()
        }
      })
    } else {
      wx.showToast({
        icon: 'none',
        title: 'RTM 登录中',
        mask: true,
        duration: 2000
      })
    }
  
  },
  // 跳转至多人

  

})