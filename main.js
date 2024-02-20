import Vue from 'vue'
import App from './App'

// vuex
import store from './store'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'
import mixin from './common/mixin'
import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html'

import navBar from '@/components/navbar.vue'
Vue.component('mpHtml', mpHtml)
Vue.component('navbar', navBar)
Vue.prototype.$store = store



Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(uView)

import $public from '@/util/public.js' //引入公共函数库
Vue.prototype.$public = $public //挂载

// #ifdef MP
// 引入uView对小程序分享的mixin封装
const mpShare = require('@/uni_modules/uview-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)
// #endif

Vue.mixin(mixin)

const app = new Vue({
    store,
    ...App
})

// 引入请求封装
require('./util/request/index')(app)

app.$mount()
