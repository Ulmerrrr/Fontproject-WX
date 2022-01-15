
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import './mock/mock' // 将配置好的mock引入

import {myRequest} from './api/request.js' // 直接引入封装的接口

import * as api from './api/index' // 将统一管理的接口以api对象的形式引入

Vue.config.productionTip = false

Vue.prototype.$myRequest = myRequest // 封装的接口挂载到vue原型上，可以在页面中通过this.$myRequest调用

Vue.prototype.$api = api // 挂载到vue原型上，可以在页面中通过this.$api调用

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif