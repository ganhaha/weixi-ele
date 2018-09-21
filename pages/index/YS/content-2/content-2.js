// pages/index/content-2/content-2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['http://wx2.sinaimg.cn/mw690/0065fnjfgy1fv7p5wwymfj31400u0jz0.jpg', 'http://wx2.sinaimg.cn/mw690/0065fnjfgy1fv7p5z21h1j31400u0wly.jpg', 'http://wx2.sinaimg.cn/mw690/0065fnjfgy1fv7p61917bj31900u044t.jpg', 'http://wx1.sinaimg.cn/mw690/0065fnjfgy1fv7p66vtl9j31900u078k.jpg' 
    ],
  },
  Yulan: function (event) {
  var src = event.currentTarget.dataset.src;
  var imglist = event.currentTarget.dataset.list;  
  wx.previewImage({
    current: src,
    urls: imglist
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})