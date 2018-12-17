//index.js
//获取应用实例
const app = getApp()

Page({
  test: function () {
    wx.navigateTo({
      url: '../test/test',
    })
  },
  ziliao: function () {
    wx.navigateTo({
      url: '../ziliao/ziliao', //
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  },
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    timer: '定时',//定时器名字
    countDownNum: '',//倒计时初始值
    zjhnb: '',
    test: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  hehe: function () {
    wx.navigateTo({
      url: '../gesture/gesture'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  time: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },
  preventTouchMove: function () {
  },
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  onCancel: function () {
    this.hideModal();
  },
  time1: function (e) {
    this.setData({
      countDownNum: e.detail.value,
      zjhnb: e.detail.value,
    })
  },
  onConfirm: function () {
    let that = this;
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000
    })

    this.countDown();
    this.hideModal();
  },

  countDown: function () {


    let that = this;
    let countDownNum = that.data.countDownNum;//获取倒计时初始值
    let zjhnb = that.data.zjhnb;//获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer: setInterval(function () {//这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        //然后把countDownNum存进data，好让用户知道时间在倒计着

        //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (countDownNum <= 0) {
          //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭

          clearInterval(that.data.timer);
          if (zjhnb == 0) {
            wx.showModal({
              title: '提示',
              content: '该更换滤材了',
              cancelText: "确定",
              cancelColor: 'red',
              confirmText: "必须确定",
              confirmColor: 'blue',
              success: function (res) {
                if (res.confirm) {
                  console.log('确定')
                } else {
                  console.log('不确定也得确定')
                }
              }
            })
            zjhnb--;
          }
          //关闭定时器之后，可作其他处理codes go here
        }
        else {
          countDownNum--;
          zjhnb--;
          that.setData({
            countDownNum: countDownNum
          })
        }
      }, 1000)
    })
  },


  kaiguan: function () {
    wx.navigateTo({
      url: '../switch/switch', //
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  }

})