import{
  unStableURL
}from "./config.js"

export default function(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url: unStableURL + options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}
