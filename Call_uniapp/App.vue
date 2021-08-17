<script>
	export default {
		onLaunch: function() {
			// 锁定横屏  
			// plus.screen.lockOrientation("landscape-primary");  
			// 锁定竖屏  
			plus.screen.lockOrientation("portrait-primary");
			// 相机、麦克风权限
			this.$Utils.equipment();
			let oa = true;
			// 确保联网
			uni.getNetworkType({
				success: (res) => {
					if (res.networkType !== "none") {
						this.$RTM.init();
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
						this.$RTM.init();
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
