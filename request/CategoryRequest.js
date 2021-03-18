import request from "./basenetrequest/interface2.js"

/* 分类 */
export function getCategoryList(){
  return request({
    url:'/categories'
  })
}
