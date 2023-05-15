import Vue from 'vue'
import App from './App'
import store from './store/index.js'
/** APP **/
// #ifdef APP-PLUS
import './until/APP-PLUS/index.js'
// #endif

Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App,
	store
})
app.$mount()
