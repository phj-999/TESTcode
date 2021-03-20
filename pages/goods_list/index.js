
Page({
  /**
   * 页面的初始数据
   */
  data: {
    
    tabs: [
      {
        id: 0,
        value: "综合",
        
      },
      {
        id: 1,
        value: "销量",
        
      },
      {
        id: 2,
        value: "价格",
      
      }
    ],
    active:0,
    goodsList:[]
  },
  parmas:[{query:"",
    cid:"",
    pagenum:1,
    pagesize:10}],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getgoodslist()  
  },
  getgoodslist(){
    var  that = this
    wx.showLoading({
      title: "加载中",
      mask: true
    }),
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search',  
      data:{
        query:"",
    cid:"",

    pagenum:"",
    pagesize:10
      },
      success(res) {
       // var that =this
       // console.log(res.data)
        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
          wx.hideLoading()
           console.log(res.data)
           const goodsList = res.data.message
           that.setData({
             //appData中图片和数据在goods中  要解构出来
            goodsList:[...goodsList,...goodsList.goods]
           })
          }else{
            wx.hideLoading()
            wx.showToast({
            title: '连接失败，稍后再试',
            icon: 'error',
            mask:true,
            duration: 2000
          })}
        
      },
    })
  },
     /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
     this.getgoodslist()
     this.parmas.pagenum=1
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

      
  

})
