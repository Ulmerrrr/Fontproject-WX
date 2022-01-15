import Mock from 'mockjs'
 
 // 引入轮播的数据
import banner from './banner.json'
 
 // 首页轮播接口
Mock.mock(
 '/mock/banner',
 {code: 200, data: banner, sucess: true})