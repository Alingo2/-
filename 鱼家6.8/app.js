//app.js
var event = require('lib/event.js');

App({
  onLaunch: function () {
      event(this);
    },
  globalData: {
    temperature: {},
    light: {},
    humidity: {},
    caowen:{},
    test:0,
    test1:0,
    test2:0
  }
})