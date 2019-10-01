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
      type: 'image',
      url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1757400387,220788867&fm=26&gp=0.jpg'
    }, {
      id: 1,
      type: 'image',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569926808271&di=6f446323002513b977c4fb37a272a190&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F16%2F03%2F5b5918ea67c74_610.jpg',
    }, {
      id: 2,
      type: 'image',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569926808270&di=9349bf3bb1806b9d036fcb8311e02a85&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F18%2F01%2F18%2Fa4a3d7ba96fcda729c9c6cb3a2ca67f0.jpg'
    }, {
      id: 3,
      type: 'image',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569926808269&di=d868807649aa1fe59c9b74bbc20af63a&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F01%2F18%2Fff82acbc5424a1b1aedf5936f6f89696.jpg'
    }, {
      id: 4,
      type: 'image',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569926808268&di=9804e764f11f87459e95133fffa2ed50&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F01%2F18%2Fdf10c3097a04188d39b27c889477729d.jpg'
    }],
  },

  onLoad() {
    this.towerSwiper('swiperList');
  },
  methods:{
    mylert: function (e) {
      this.setData({
        modalName: e.currentTarget.dataset.target,
      })
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
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    },
  }
})
