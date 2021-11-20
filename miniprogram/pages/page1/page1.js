// pages/page1/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {  
    a: function () {
   
  }

  },
  nextPTPage1:function(){
    wx.navigateTo({
      url:'/pages/putong_page1/putong_page1',
    })
  },
  nextJJPage1:function(){
    wx.navigateTo({
      url:'/pages/jinjie_page1/jinjie_page1',
    })
  },
  nextGJPage1:function(){
    wx.navigateTo({
      url:'/pages/gaoji_page1/gaoji_page1',
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