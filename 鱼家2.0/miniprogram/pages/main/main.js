// pages/main/main.js
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    temp: 33,
    light: 22,
    time:0,
    swiperList: [{
      id: 0,
      hunger:0,
      type: 'image',
      url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1757400387,220788867&fm=26&gp=0.jpg'
    }, {
      id: 1,
      type: 'image',
        hunger: 80,
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569926808271&di=6f446323002513b977c4fb37a272a190&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F16%2F03%2F5b5918ea67c74_610.jpg',
    }, {
      id: 2,
      type: 'image',
        hunger: 60,
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569926808270&di=9349bf3bb1806b9d036fcb8311e02a85&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F18%2F01%2F18%2Fa4a3d7ba96fcda729c9c6cb3a2ca67f0.jpg'
    }, {
      id: 3,
      type: 'image',
        hunger: 40,
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569926808269&di=d868807649aa1fe59c9b74bbc20af63a&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F01%2F18%2Fff82acbc5424a1b1aedf5936f6f89696.jpg'
    }, {
      id: 4,
      type: 'image',
        hunger: 20,
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569926808268&di=9804e764f11f87459e95133fffa2ed50&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F01%2F18%2Fdf10c3097a04188d39b27c889477729d.jpg'
    }],
  },

  onLoad() {
    this.towerSwiper('swiperList');
  },
  methods:{
    my_c_bump:function(e){
      var judge=0;
      if(e.detail.value){
        judge="b_true";
      }
      else{
        judge="b_false";
      }
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
              "value": judge,
              "test": 0
            }]
          }]
        },

        success: function (res) {
          console.log(res),
            wx.showToast({
              title: ' 成功',
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
    my_c_heat: function (e) {
      var judge = 0;
      if (e.detail.value) {
        judge = "h_true";
      }
      else {
        judge = "h_false";
      }
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
              "value": judge,
              "test": 0
            }]
          }]
        },

        success: function (res) {
          console.log(res),
            wx.showToast({
              title: ' 成功',
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
    my_c_light: function (e) {
      var judge = 0;
      if (e.detail.value) {
        judge = "l_true";
      }
      else {
        judge = "l_false";
      }
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
              "value": judge,
              "test": 0
            }]
          }]
        },
        success: function (res) {
          console.log(res),
            wx.showToast({
              title: '成功',
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
    mylert_1: function (e) {
      var that=this;
      const requestTask = wx.request({
        url: 'https://api.heclouds.com/devices/503071333/datapoints?datastream_id=Light,Temperature,caowen&limit=15',
        header: {
          'content-type': 'application/json',
          'api-key': 'g81xoJ5mSA4t=vQLvEDIaUKkZ60='
        },
        
        success: function (res) {
          that.setData({
            temp: res.data.data.datastreams[0].datapoints[0].value,
            light: res.data.data.datastreams[2].datapoints[0].value
          })
        },
        fail: function (res) {
          console.log("fail!!!")
        },
        complete: function (res) {
          console.log("end")
        }
      })
      this.setData({
        modalName: e.currentTarget.dataset.target,
      })
    },
    mylert_2: function (e) {
      this.setData({
        modalName: e.currentTarget.dataset.target,
      })
    },
    my_img_imfor_lert:function(e){

    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    formSubmit: function (e) {
        this.setData({
          time: e.detail.value.time
        })
    },
    showinfo:function(e){
      this.setData({
        modalName: "fish_infoModal"+e.currentTarget.dataset.target,
      })
      console.log("fish_infoModal" + e.currentTarget.dataset.target)
    },
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    },
  }
})
