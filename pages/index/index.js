//index.js
//获取应用实例
const app = getApp()
/*Page()函数用来注册页面，指定页面的初始数据，生命周期函数，事件处理函数等*/
Page({
  // 页面初始数据
  data: {
    Name: '数据处理',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    text: 'text',
    object: {
      subObject: {
        objectText: 'object text'
      }
    },
    array: [
      { arrayText: 'arrayText'}
    ]
  },
  // 事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 生命周期函数，页面加载时触发，一个页面只会调用一次
  onLoad: function () {
    if (app.globalData.userInfo) {
      /*此函数用来修改this.data值，同时将数据从逻辑层发送到视图层*/
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  /*事件处理函数s*/
  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  changeText() {
    this.setData({
      'text': 'new text'
    })
  },
  changeObject() {
    this.setData({
      'object.subObject.objectText' : 'new object text'
    })
  },
  changeArray() {
    this.setData({
      'array[0].arrayText': 'new arrayText'
    })
  },
  addtext() {
    this.setData({
      'newText': 'add new text'
    })
  }
})
