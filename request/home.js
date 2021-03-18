import request from "./basenetrequest/interface2.js"

/* 分类 */
export function getCateList(){
  return request({
    url:'/home/catitems'
  })
}

/* 楼层数据 */
export function getFloorList(){
  return request({
    url:'/home//floordata'
  })
}