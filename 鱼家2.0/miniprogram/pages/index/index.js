var app = getApp()

Page({
  data: {
    PageCur:'',
    reminder:[]
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onLoad:function()
  {
    let _this=this
    wx.getStorage({
      key: 'reminder',
      success: function (res) {
        _this.setData({
          reminder:res.data,
          PageCur: "main"
        })
      },
      fail: function () {
        console.log('读取key1发生错误')
      }
    })
  }
})

