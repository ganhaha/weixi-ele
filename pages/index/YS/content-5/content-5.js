// pages/index/content-5/content-5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['http://wx2.sinaimg.cn/mw690/0065fnjfgy1fv7p8thkv1j30qo0k0tbv.jpg', 'http://wx2.sinaimg.cn/mw690/0065fnjfgy1fv7p8wepkzj30qo0k0ju2.jpg', 'http://wx4.sinaimg.cn/mw690/0065fnjfgy1fv7p8ynnqjj30qo0k0di2.jpg',    'http://wx4.sinaimg.cn/mw690/0065fnjfgy1fv7p91tqejj30qo0k0tbj.jpg',    'http://wx3.sinaimg.cn/mw690/0065fnjfgy1fv7p94q8woj30qo0k0djq.jpg',    'http://wx1.sinaimg.cn/mw690/0065fnjfgy1fv7p9ewu67j30qo0k041a.jpg'
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