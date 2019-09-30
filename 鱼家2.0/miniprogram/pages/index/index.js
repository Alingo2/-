Page({
  data: {
    PageCur: 'main'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
    console.log(this.data.PageCur)
  },

})