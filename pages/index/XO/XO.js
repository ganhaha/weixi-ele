// pages/XO/XO.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers_ele: [{
      /*iconPath: "../../../souece/1.png",*/
      id: 0,
      longitude: 120.2033430000,
      latitude: 30.2578440000,
      width: 20,
      height: 20,
      callout:{
        content:'杭州市江干区西子国际A座办公楼一楼，地铁二号线B1出口\n杭州西奥电梯生活体验馆',
        display:'ALWAYS',
        fontsize:25,
        textAlign:'center',
        padding:10,
      },
    }],     
    markers_factory: [{
      /*iconPath: "../../../souece/1.png",*/
      id: 0,
      longitude: 120.2441200000,
      latitude: 30.4458900000,
      width: 20,
      height: 20,
      callout: {
        content: '杭州市余杭区经济开发区宏达路168号\n杭州西奥电梯有限公司',
        display: 'ALWAYS',
        fontsize: 25,
        textAlign: 'center',
        padding: 10,
      },
    }],
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