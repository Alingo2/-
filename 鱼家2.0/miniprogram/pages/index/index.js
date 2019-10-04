var app = getApp()

Page({
  data: {
    PageCur:'',
    reminder:0
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  formatTime: function (date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()

    return [year, month, day, hour, minute, second]
  },
  onLoad:function()
  {
    let _this=this
    var y = this.formatTime(new Date())
    console.log(y)
    wx.getStorage({
      key: 'reminder',
      success: function (res) {
        _this.setData({
          reminder:res.data,
          PageCur: "main"
        })
        console.log(res.data)
      },
      fail: function () {
        console.log('读取key1发生错误')
      }
    })
  }
})

