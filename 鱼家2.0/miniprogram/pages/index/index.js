var app = getApp()

Page({
  data: {
    PageCur:'',
    reminder:[],
    data_set: []
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

    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch0,switch1,switch2,switch3,switch4,switch5,switch6&limit=15',
      header: {
        'content-type': 'application/json',
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      success: function (res) {
        console.log(res.data)
        var app = getApp()
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
    for(var i=0;i<7;i++){
      res.data.data.datastreams[i].movement_type=i
    }
        wx.setStorage({
          key: "my_movement_dataset",
          data: res.data.data.datastreams,
          fail: function () {
            console.log('发生错误')
          }
        })
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  }
})

