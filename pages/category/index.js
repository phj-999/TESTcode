import { getCategoryList } from "../../request/CategoryRequest";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList:[],
    rightContent:[],
    Cates:[],
    currentIndex:0,
    scrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

       //  获取本地存储中的数据 
       const Cates = wx.getStorageSync("cates");
       // 判断
       if (!Cates) {
         // 不存在  发送请求获取数据
         this. getCategoryList();
       } else {
         // 有旧的数据 定义过期时间  10s 改成 5分钟
         if (Date.now() - Cates.time > 1000 * 10) {
           // 重新发送请求
           this. getCategoryList()
         } else {
           // 可以使用旧的数据
           this.Cates = Cates.data;
           let leftMenuList = this.Cates.map(v => v.cat_name);
           let rightContent = this.Cates[0].children;
           this.setData({
             leftMenuList,
             rightContent,
             scrollTop:0
           })
         }
       }

  },
  /* 请求数据 */
  getCategoryList(){
  getCategoryList().then(res=>{
    console.log(res)
    this.Cates=res.data.message
/* 存储数据 */
    wx.setStorageSync("cates", { time: Date.now(), data: this.Cates });

    let leftMenuList = this.Cates.map(v=>v.cat_name)
    let rightContent = this.Cates[0].children

    this.setData({
      leftMenuList:leftMenuList,
      rightContent: rightContent
    })
  })
},
 /* 左侧菜单栏点击事件 */
  handleItemTap(e){
    const {index}=e.currentTarget.dataset;
    let rightContent = this.Cates[index].children;
    this.setData({
      currentIndex: index,
      rightContent,
      // 重新设置 右侧内容的scroll-view标签的距离顶部的距离
      scrollTop: 0
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