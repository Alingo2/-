// pages/test/test.js
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    timer: '定时',//定时器名字
    countDownNum: '100',//倒计时初始值
    zjhnb: '100'
  },



  countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum;//获取倒计时初始值
    let zjhnb = that.data.zjhnb;//获取倒计时初始值

    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer: setInterval(function () {//这里把setInterval赋值给变量名为timer的变量






        const requestTask = wx.request({
          url: 'https://api.heclouds.com/devices/503071333/datapoints?datastream_id=Light,Temperature,caowen&limit=15',
          header: {
            'content-type': 'application/json',
            'api-key': 'g81xoJ5mSA4t=vQLvEDIaUKkZ60='
          },
          success: function (res) {
            //console.log(res.data)
            //拿到数据后保存到全局数据
            var app = getApp()
            app.globalData.temperature = res.data.data.datastreams[0]
            app.globalData.light = res.data.data.datastreams[1]
            app.globalData.caowen = res.data.data.datastreams[2]
            console.log(app.globalData.light)
            app.globalData.test = app.globalData.temperature.datapoints[0].value
            app.globalData.test1 = app.globalData.light.datapoints[0].value
            app.globalData.test2 = app.globalData.caowen.datapoints[0].value
            var test = app.globalData.test
            that.setData({
              test: test
            })
            var test1 = app.globalData.test1
            that.setData({
              test1: test1
            })
            var test2 = app.globalData.test2
            that.setData({
              test2: test2
            })
            //跳转到天气页面，根据拿到的数据绘图
          },
          fail: function (res) {
            console.log("fail!!!")
          },

          complete: function (res) {
            console.log("end")
          }
        })




          countDownNum--;
          that.setData({
            countDownNum: countDownNum
          })
        
      }, 1000)
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.countDown();
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