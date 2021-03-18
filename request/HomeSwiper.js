import request from "./basenetrequest/interface1.js"

/* 轮播图 */
export function getMultiData(){
  return request({
    url: '/home/multidata'
  })
}
