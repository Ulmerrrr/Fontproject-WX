// index.js
// 获取应用实例
const app = getApp()


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    bannerlist: []
  },
  onLoad: function (options) {
    wx.request({
      url: 'http://39.98.123.211/user/passport/register',
      success: (res) => {
        console.log(res.data)
        this.bannerlist = res.data
      }
    })
  }
})
