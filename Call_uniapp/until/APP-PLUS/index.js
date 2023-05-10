// 如果uniapp中
import Vue from 'vue'
import {
	Utils,
	RTMUtils,
	RTCUtils
} from './until.js'
import RTM from './rtm.js'
import RTC from './rtc.js'
/** 注册到Vue原型上 */
Vue.prototype.$Utils = Utils
Vue.prototype.$RTMUtils = RTMUtils
Vue.prototype.$RTM = RTM
Vue.prototype.$RTC = RTC
Vue.prototype.$RTCUtils = RTCUtils
