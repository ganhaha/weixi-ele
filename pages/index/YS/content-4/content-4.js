// pages/index/content-4/content-4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['http://wx4.sinaimg.cn/mw690/0065fnjfgy1fv7p6odmksj30u00xiwjp.jpg', 'http://wx3.sinaimg.cn/mw690/0065fnjfgy1fv7p6qbiznj30u0140wkk.jpg', 'http://wx4.sinaimg.cn/mw690/0065fnjfgy1fv7p6ucwl5j313y0u07aq.jpg', 
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