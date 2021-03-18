import{ getMultiData } from '../../request//HomeSwiper.js'  /* 分层处理 轮播图 */
import { getCateList,  getFloorList} from '../../request/home.js' /* 分类*/

wx-Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    cataList:[],
    floorList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
        getMultiData().then(res => {
          console.log(res)
          const banners = res.data.data.banner.list
        /*   const recommends = res.data.data.recommend.list */
          this.setData({
            banners:banners
          })
        })
        /* 分类栏 */
        getCateList().then(res=>{
           console.log (res)
           const cateList = res.data.message
           this.setData ({
             cateList:cateList
           })
        })
        /* 楼层数据 */
        getFloorList().then(res=>{
           console.log (res)
           const floorList = res.data.message
           this.setData ({
            floorList:floorList
           }) 
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