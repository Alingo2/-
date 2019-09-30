// pages/main/main.js
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    temp: 6666666,
    light: null
  },
  mylert: function (e) {
    this.setData({
      modalName: e.currentTarget.dataset.target,
    })
    console.log(e.currentTarget.dataset.target)
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
})
