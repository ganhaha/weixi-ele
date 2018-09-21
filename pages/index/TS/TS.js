// pages/TS/TS.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers_factory: [{
      /*iconPath: "../../../souece/1.png",*/
      id: 0,
      longitude: 120.4931500000,
      latitude: 31.3446800000,
      width: 20,
      height: 20,
      callout: {
        content: '江苏省苏州市虎丘区建林路与鸿禧路交叉口东500米\n苏州天梭电梯有限公司',
        display: 'ALWAYS',
        fontsize: 25,
        textAlign: 'center',
        padding: 10,
      },
    }],
    imgUrls: ['http://wx3.sinaimg.cn/mw690/0065fnjfgy1furp7lw7pdj30mi0gwjtl.jpg', 'http://wx3.sinaimg.cn/mw690/0065fnjfgy1furp937a7bj30go0m8q4z.jpg', 'http://wx4.sinaimg.cn/mw690/0065fnjfgy1furp97xhssj30go0m840o.jpg', 'http://wx4.sinaimg.cn/mw690/0065fnjfgy1furp9axjvqj30mi0u0mzz.jpg', 'http://wx3.sinaimg.cn/mw690/0065fnjfgy1furp9dnkhmj30mi0u0mzm.jpg', 'http://wx3.sinaimg.cn/mw690/0065fnjfgy1furp9g8m56j30mi0u2dhw.jpg', 'http://wx1.sinaimg.cn/mw690/0065fnjfgy1furpa0yvgxj30mi0u0go8.jpg', 'http://wx4.sinaimg.cn/mw690/0065fnjfgy1furpa3wesij30mi0gw766.jpg','http://wx1.sinaimg.cn/mw690/0065fnjfgy1furpa6jfkkj30mi0u0dj5.jpg',   'http://wx1.sinaimg.cn/mw690/0065fnjfgy1furpa9l0cwj30go0m8q4e.jpg',
'http://wx2.sinaimg.cn/mw690/0065fnjfgy1furpabt9pyj30go0m8myt.jpg',
'http://wx2.sinaimg.cn/mw690/0065fnjfgy1furpakow55j30mi0u0jtr.jpg',      'http://wx2.sinaimg.cn/mw690/0065fnjfgy1furpanwxccj30mi0u0wh1.jpg','http://wx2.sinaimg.cn/mw690/0065fnjfgy1furpaqy9xjj30mi0u0tbn.jpg',      'http://wx4.sinaimg.cn/mw690/0065fnjfgy1furpatutq8j30mi0u076w.jpg',      'http://wx3.sinaimg.cn/mw690/0065fnjfgy1furpawmjh6j30mi0u040w.jpg'
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