// pages/index/CSBK/CSBK.js
Page({

  /**
   * 页面的初始数据
   */
  data: {   
    region: ['广东省', '广州', '海珠区','XXX'],
    customItem: '全部',    
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })  
    console.log(e.detail.value[2] + e.detail.value[1] + e.detail.value[0])
    console.log(e.detail.value[1].replace('市', '') + ',' + e.detail.value[0].replace('省',''))

    switch (e.detail.value[0]){
      case '内蒙古自治区': var cityplace = e.detail.value[1].replace('市', '') + ',' + e.detail.value[0].replace('自治区', '')
      break
      case '广西壮族自治区': var cityplace = e.detail.value[1].replace('市', '') + ',' + e.detail.value[0].replace('壮族自治区', '')
      break
      case '西藏自治区': var cityplace = e.detail.value[1].replace('市', '') + ',' + e.detail.value[0].replace('自治区', '')
      break
      case '宁夏回族自治区': var cityplace = e.detail.value[1].replace('市', '') + ',' + e.detail.value[0].replace('回族自治区', '')
      break
      case '新疆维吾尔自治区': var cityplace = e.detail.value[1].replace('市', '') + ',' + e.detail.value[0].replace('维吾尔自治区', '')
      break
      default: var cityplace = e.detail.value[1].replace('市', '') + ',' + e.detail.value[0].replace('省', '')
    }

   /* var cityplace = e.detail.value[1].replace('市', '') + ',' + e.detail.value[0].replace('省', '')*/

    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/forecast?',
      data: {
        location: cityplace,
        key: '859a68f5d8cc422da1afc85bac5ae604',
        dataType: 'json'
      },
      success(res) {
        console.log(res.data)
        for (var i = 0; i <= 2; i++) {
          console.log(res.data['HeWeather6'][0]['daily_forecast'][i])
        }
      }
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
    /*wx.request({
      url: 'https://free-api.heweather.com/s6/weather/forecast?',
      data: {
        location: '杭州',
        key: '859a68f5d8cc422da1afc85bac5ae604',
        dataType: 'json'
      },
      success(res) {
        console.log(res.data)
        for (var i = 0; i <= 2; i++) {
          console.log(res.data['HeWeather6'][0]['daily_forecast'][i])
        }
      }
    }) */
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