

Page({

  data: {
    goodsObj: {},
    // 商品对象
  GoodsInfo: {},
  },

  onLoad: function (options) {
    const {goods_id} = options
    this.getGoodsDetail(goods_id)
  },

  getGoodsDetail(goods_id){
     wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail',  
      data:{
        goods_id
      },
      header: {
        "content-type": "application/json"
      },
      success:(res)=> {
           console.log(res)
           this.GoodsInfo = goodsObj;
          const goodsObj = res.data.message
         
           this.setData({
           goodsObj: {
            goods_name:  goodsObj.goods_name,
        goods_price: goodsObj.goods_price,
        goods_introduce: goodsObj.goods_introduce.replace(/\.webp/g, '.jpg'),
        pics: goodsObj.pics
           }
           }) 
          }
        
      })
   },
   handlePrevewImage(e) {
    // 1 先构造要预览的图片数组 
    const urls = this.GoodsInfo.pics.map(v => v.pics_mid);
    // 2 接收传递过来的图片url
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current,
      urls
    })
  },
  handleCartAdd() {
    // 1 获取缓存中的购物车 数组
    let cart = wx.getStorageSync("cart") || [];
    // 2 判断 商品对象是否存在于购物车数组中
    let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id);
    if (index === -1) {
      //3  不存在 第一次添加
      this.GoodsInfo.num = 1;
     // this.GoodsInfo.checked = true;
      cart.push(this.GoodsInfo);
    } else {
      // 4 已经存在购物车数据 执行 num++
      cart[index].num++;
    }
    // 5 把购物车重新添加回缓存中
    wx.setStorageSync("cart", cart);
    // 6 弹窗提示
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      // true 防止用户 手抖 疯狂点击按钮 
      mask: true
    })
  }
})