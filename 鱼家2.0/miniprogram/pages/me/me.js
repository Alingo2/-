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
    email:"",
    repeat_judge:false,
    name_judge:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sign_password: function(e){
      this.setData({
        sign_password:e.detail.value
      })
    },
    repeat_password: function (e) {
      if (this.data.sign_password == e.detail.value){
        this.setData({
          repeat_judge:true
        })
      }
      else{
        this.setData({
          repeat_judge: false
        })
      }
    },
    sign_id: function(e){     //查数据库 看看有无重复
      let sign_id = e.detail.value
    },
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
      email:e.detail.value.email
    })
    if(this.data.repeat_judge){
    wx.showToast({
      title: '注册成功',
      duration: 1000,
    })
    }
    else{
      wx.showToast({
        title: '注册失败',
        icon:"fail",
        duration: 1000,
      })
    }
  }
  }
})
