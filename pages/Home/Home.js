// pages/Home/Home.js

const app = getApp()

const config = require('./../../config/index.js');
const URL = require('./../../config/url.js');
const http = require('./../../config/http.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: [
  
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    ],
    swiperCurrent: 0,
    autoplay: true,
  


    lists:[
      {
        title:'迪奥口红1迪奥口红1迪奥口红1迪奥口红1迪奥',
        listimg: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        pire:'1299', //团购价
        usernum:'2人拼',
        pire2: '1399', //单购价

      },
      {
        title: '迪奥口红2',
        listimg: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        pire: '1299', //团购价
        usernum: '3人拼',
        pire2: '1399', //单购价
      },
      {
        title: '迪奥口红3',
        listimg: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        pire: '1299', //团购价
        usernum: '4人拼',
        pire2: '1399', //单购价
      }
    ]
   
    },
  swiperChange: function (e) {

    this.setData({

      swiperCurrent: e.detail.current  // current 改变时会触发 change 事件

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    // 全局 URL 配置
    console.log(URL.testUrl);
    // 全局请求
    http(URL.homeUrl, {pageIndex: 1, pageSize: 20}).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })

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