//YS.js
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

  content1:function(){
    wx.navigateTo({
      url:'../YS/content-1/content-1'
    })
  },
  content2: function () {
    wx.navigateTo({
      url: '../YS/content-2/content-2'
    })
  },
  content3: function () {
    wx.navigateTo({
      url: '../YS/content-3/content-3'
    })
  },
  content4: function () {
    wx.navigateTo({
      url: '../YS/content-4/content-4'
    })
  },
  content5: function () {
    wx.navigateTo({
      url: '../YS/content-5/content-5'
    })
  },
  TS:function(){
    wx.navigateTo({
      url:'../YS/TS/TS'
    })
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  
  },
  getUserInfo: function() {
   
  }
})
