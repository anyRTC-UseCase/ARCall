import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		popubId: '', // 弹窗 ID
		uid: '', // 本地用户 uid
		// 视频编码属性
		VideoConfig: {
			"width": 240,
			"height": 320,
			"bitrate": 0,
			"frameRate": 15,
			"orientationMode": 0
		},
		etAudioAiNoise: false, // 开启 AI 智能降噪
	},
	mutations: {
		// 更新弹窗 ID
		upDataPopubId(state, data) {
			state.popubId = data;
		},
		// 更新本地用户 uid
		upDataUId(state, data) {
			state.uid = data;
		},
		// 更新视频编码属性
		upDataVideoConfig(state, data) {
			state.VideoConfig = Object.assign(state.VideoConfig, data);
		},
		// 更新 是否开启 AI 智能降噪
		upDataetAudioAiNoise(state, data) {
			state.etAudioAiNoise = data;
		},
		
	},
	actions: {
		// 更改弹窗 ID
		upDataPopubId({
			commit
		}, data) {
			commit('upDataPopubId', data);
		},
		// 更新本地用户 uid
		upDataUId({
			commit
		}, data) {
			commit('upDataUId', data);
		},
		// 更新视频编码属性
		upDataVideoConfig({
			commit
		}, data) {
			commit('upDataVideoConfig', data);
		},
		// 更新 是否开启 AI 智能降噪
		upDataetAudioAiNoise({
			commit
		}, data) {
			commit('upDataetAudioAiNoise', data);
		},	
	}
})
export default store
