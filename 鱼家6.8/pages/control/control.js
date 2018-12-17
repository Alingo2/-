// pages/control/control.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true,
    circle1:"",
  },


  opentree: function () {
    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch0',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data:{
        "datastreams":[{
          "id":"switch0",
          "datapoints":[{
            "at":"",
            "value":'A',
            "test":0
          }]
        }]
      },
      success: function (res) {
        console.log(res),
        wx.showToast({
          title: ' 开启成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },


  closetree: function () {
    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch0',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch0",
          "datapoints": [{
            "at": "",
            "value": 'a',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
          wx.showToast({
            title: '关闭成功',
            icon: 'success',
            duration: 2000
          })
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  openclock: function () {
    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch1',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch1",
          "datapoints": [{
            "at": "",
            "value":'B',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
          wx.showToast({
            title: '开启成功',
            icon: 'success',
            duration: 2000
          })
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  closeclock: function () {
    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch1',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch1",
          "datapoints": [{
            "at": "",
            "value":'b',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
        wx.showToast({
          title: '关闭成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  openheat: function () {
    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch3',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch3",
          "datapoints": [{
            "at": "",
            "value": 'C',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
          wx.showToast({
            title: '开启成功',
            icon: 'success',
            duration: 2000
          })
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  closeheat: function () {
    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch3',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch3",
          "datapoints": [{
            "at": "",
            "value": 'c',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
        wx.showToast({
          title: '关闭成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  openlight: function () {
    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch4',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch4",
          "datapoints": [{
            "at": "",
            "value": 'D',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
          wx.showToast({
            title: '开启成功',
            icon: 'success',
            duration: 2000
          })
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  closelight: function () {
    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch4',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch4",
          "datapoints": [{
            "at": "",
            "value": 'd',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
        wx.showToast({
          title: '关闭成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  openmusic: function () {
    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch5',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch5",
          "datapoints": [{
            "at": "",
            "value": 'E',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
          wx.showToast({
            title: '开启成功',
            icon: 'success',
            duration: 2000
          })
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  closemusic: function () {
    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch5',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch5",
          "datapoints": [{
            "at": "",
            "value": 'e',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
          wx.showToast({
            title: '关闭成功',
            icon: 'success',
            duration: 2000
          })
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  openxiaoge: function () {
    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch6',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch6",
          "datapoints": [{
            "at": "",
            "value": 'F',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
          wx.showToast({
            title: '开启成功',
            icon: 'success',
            duration: 2000
          })
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  closexiaoge: function () {
    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch6',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch6",
          "datapoints": [{
            "at": "",
            "value": 'f',
          }]
        }]
      },
      success: function (res) {
        console.log(res),
          wx.showToast({
            title: '关闭成功',
            icon: 'success',
            duration: 2000
          })
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },


  weishi:function(){
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
  quanshu: function (e) {
    var app = getApp()
    this.setData({
      circle1: e.detail.value,
    })
    wx.request({
      method: 'POST',
      url: 'http://api.heclouds.com/devices/504877625/datapoints?datastream_id=switch0',
      header: {
        'api-key': 's1XeGJPJSFgZslYpXCnFPG81V1w='
      },
      data: {
        "datastreams": [{
          "id": "switch2",
          "datapoints": [{
            "at": "",
            "value": e.detail.value,
          }]
        }]
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },
  onConfirm: function () {
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000
    })
    this.hideModal();
  },
})