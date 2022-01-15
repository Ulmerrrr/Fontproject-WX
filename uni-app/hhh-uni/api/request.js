// 这里进行接口封装，相当于axios的二次封装


// 定义基础路径
const baseUrl = '/mock'
//封装接口，相当于axios的二次封装
export const myRequest =(options) =>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl+options.url,//接口地址：前缀+方法中传入的地址
			method:options.method || 'GET',//请求方法：传入的方法或者默认是“GET”
			data:options.data || {},//传递参数：传入的参数或者默认传递空集合
			success:(res)=> {
				if(res.data.sucess != true){
					return uni.showToast({
						title:'获取数据失败',
						icon:'none'
					})
				}
				resolve(res)
			},
			// 这里的接口请求，如果出现问题就输出接口请求失败
			fail: (err) => {
				uni.showToast({
					title:"请求接口失败",
					icon:"none"
						})
				reject(err)
			}
		})
	})
}