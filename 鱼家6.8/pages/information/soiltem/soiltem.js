var myCharts = require("../../../utils/wxcharts.js")//引入一个绘图的插件
var lineChart_light = null
var lineChart_tempe = null
var lineChart_caowen = null
var app = getApp()

Page({
  data: {
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },


  //把拿到的数据转换成绘图插件需要的输入格式
  convert: function () {
    var categories = [];
    var light = [];
    var tempe = [];
    var caowen=[];

    var length = app.globalData.light.datapoints.length
    for (var i = 0; i < length; i++) {
      categories.push(app.globalData.light.datapoints[i].at.slice(11, 19));
      light.push(app.globalData.light.datapoints[i].value);
      tempe.push(app.globalData.temperature.datapoints[i].value);
      caowen.push(app.globalData.caowen.datapoints[i].value);
    }
    return {
      categories: categories,
      light: light,
      tempe: tempe,
      caowen:caowen,
    }
  },

  onLoad: function () {
    var wheatherData = this.convert();

    //得到屏幕宽度
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var wheatherData = this.convert();


    //新建光照强度图表
    lineChart_light = new myCharts({
      canvasId: 'caowen',
      type: 'area',
      categories: wheatherData.categories,
      animation: true,
      background: '#f5f5f5',
      series: [{
        name: 'tem',
        data: wheatherData.light,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: 'tem (lux)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 190
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
  },
})
