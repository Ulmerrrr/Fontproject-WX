// 这里统一管理接口
import {myRequest} from "./request.js"
// 轮播接口
export const GetBanner = function (){
	return myRequest({url:'/banner'})
}
