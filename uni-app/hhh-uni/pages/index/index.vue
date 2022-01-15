<template>
	<view class="container" @click="getSwiper">
		<swiper :circular="true" :indicator-dots="true" :autoplay="true" :interval="600" :duration="1000">
			<swiper-item v-for="item in banner">
				<view class="swiper-item">
					<img :src="item.imgUrl" alt="">
				</view>
			</swiper-item>
		</swiper>
		<button @click="open">点我弹出框</button>
		<uni-popup ref="popup" type="bottom">
			<view>
				我是弹出来的
		    </view> 
		</uni-popup>
	</view>
</template>

<script>
	// import {myRequest} from '../.././api/request.js' // 直接引入封装好的接口使用，缺点：每次使用都要引入很麻烦。
	
	 // import {GetBanner} from '../.././api/index.js' // // 引入统一管理的接口使用，缺点：每次使用都要引入很麻烦。
	export default {
		data() {
			return {
			  banner:[]
			}
		},
		onLoad(){
			this.getSwiper()
		},
		methods: {	
			open: function () {
				this.$refs.popup.open('top')
			},
			
			// 获取轮播的数据（有好几种方法）
			async getSwiper(){
				
				 // 方法零:直接使用uniapp内置的方法来请求
				 // uni.request({
				 //     url: '/mock/banner',
				 //     data: {
				 //         text: 'uni.request'
				 //     },
				 //     header: {
				 //         'custom-header': 'hello' //自定义请求头信息
				 //     },
				 //     success: (res) => {
				 //         console.log(res.data);
				 //     }
				 // });
				 
				 // 方法一:先通过 import {myRequest} from '../.././api/request.js'直接引入封装好的接口,再使用
				 // myRequest({url:'/banner'}).then((res)=>{
				 //  	console.log(res)
				 //   })
				
				// 方法二:通过挂载到vue原型上的this.$myRequest来获取数据
				// this.$myRequest({url:'/banner'}).then((res)=>{
				// 	console.log(res)
				// })
				
				
			    // 方法三:通过async，await把异步转为同步来获取数据
			    /* const res = await this.$myRequest({url:'/banner'})
			    console.log(res.data) */
				
				// 方法四:先通过 import {GetBanner} from '../../api/index.js'  // 引入统一管理的接口使用，再使用
				// GetBanner().then((res)=>{
				// 	console.log(res)
				// })
				
				// 方法五：通过挂载到vue原型上的this.$api来获取数据
				// this.$api.GetBanner().then((res)=>{
				//  	console.log(res)
				//  })
				 
				 // 方法六（比较推荐），通过async，await把异步转为同步并且使用统一管理的接口挂载到vue原型上的this.$api来获取数据
				 const res = await this.$api.GetBanner()
				 console.log(res.data.data)
				 this.banner = res.data.data
			}
		}
	}
</script>

<style>
	.container {
		width: 600rpx;
		height: 280rpx;
	}
	img {
		width: 600rpx;
		height: 280rpx;
	}
</style>
