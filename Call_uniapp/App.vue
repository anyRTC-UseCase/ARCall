<script>
	// #ifdef MP-WEIXIN
	import {RTM} from './until/MP-WEIXIN/index.js'
	// #endif
	export default {
		onLaunch: function() {
			
			// #ifdef APP-PLUS
			// 锁定横屏  
			// plus.screen.lockOrientation("landscape-primary");  
			// 锁定竖屏  
			plus.screen.lockOrientation("portrait-primary");
			// 相机、麦克风权限 app
			this.$Utils.equipment();
			// #endif
			
			let oa = true;
			// 确保联网
			uni.getNetworkType({
				success: (res) => {
					if (res.networkType !== "none") {
						// #ifdef APP-PLUS
						this.$RTM.init();
						// #endif

						// #ifdef MP-WEIXIN
						RTM.InItRtm();
						// #endif
						oa = false;
					} else {
						uni.showLoading({
							title: '联网中'
						});
					}
				}
			});
			uni.onNetworkStatusChange((res) => {
				if (res.isConnected) {
					uni.hideLoading();
					if (oa) {
						// #ifdef APP-PLUS
						this.$RTM.init();
						// #endif

						// #ifdef MP-WEIXIN
						RTM.InItRtm();
						// #endif
						oa = false;
					}
				} else {
					uni.showLoading({
						title: '联网中',
						mask: true
					});
				}
			});
			console.log('App Launch 初始化完成时触发');
		},
		onShow: function() {
			console.log('App Show')

		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>