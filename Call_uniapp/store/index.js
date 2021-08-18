import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		popubId: '', // 弹窗 ID
		uid: '', // 本地用户 uid
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
	}
})
export default store
