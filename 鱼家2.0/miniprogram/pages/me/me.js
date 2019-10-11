// pages/about/about.js
Component({
  options: {
    addGlobalClass: true,
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    id:"",
    password:"",
    sign_id:"",
    sign_password:"",
    repeat_password:"",
    email:"",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    alert: function(e){
      this.setData({
        modalName: e.currentTarget.dataset.target,
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    formSubmit: function(e){
      this.setData({
        id:e.detail.value.id,
        password:e.detail.value.password
      })
      console.log(this.data.id,this.data.password)
      wx.showToast({
        title: '登录成功',    //再加上 账号不存在 密码错误两个提示
        duration: 1000,
      })
    },
  sign_submit: function(e){
    this.setData({
      sign_id:e.detail.value.sign_id,
      sign_password:e.detail.value.sign_password,
      email:e.detail.value.email
    })
    wx.showToast({
      title: '注册成功',
      duration: 1000,
    })
  }
  }
})
