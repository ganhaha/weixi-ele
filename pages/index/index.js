//index.js
//获取应用实例
const app = getApp()

Page({
  data: {    
  },
  //事件处理函数
preview:function(){
    wx.previewImage({  
      urls:['http://wx1.sinaimg.cn/mw690/0065fnjfgy1fv4ia602kdj31540lxdl0.jpg']
    })
  } , 

  XO:function(){
    wx.navigateTo({
      url:'../index/XO/XO'
    })
  },
  TS:function(){
    wx.navigateTo({
      url:'../index/TS/TS'
    })
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket:true
    })
  },
  getUserInfo: function() {
   
  }
})
