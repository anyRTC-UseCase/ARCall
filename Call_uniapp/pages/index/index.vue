<template>
	<view class="content_bg"
		:style="{width: windowWidth + 'px',height: windowHeight + 'px'}">
		<view class="content_bg_img">
			<image class="content_bg_img_" src="../../static/icon_back.png" mode=""></image>
		</view>
		<view class="content colum_flex" style="">
			<!-- icon -->
			<view class="colum_flex">
				<image src="../../static/icon_logo.png" mode="" style="width: 80px;height: 80px;"></image>
				<text style="color: #FFFFFF;margin-top: 40px;">AR 呼叫邀请场景展示</text>
			</view>
			<!-- 场景选择 -->
			<view class="colum_flex" style="margin-top: 100px;">
				<view style="display: flex;justify-content: center;">
					<view class="p-2 colum_flex" style="background-color: #FFFFFF;border-radius: 6px;"
						@click="goBack('p2p')">
						<image src="../../static/icon_single.png" mode="" style="width: 60px;height: 60px;"></image>
						<text style="margin-top: 10px;">点对点呼叫邀请</text>
					</view>
				</view>

				<text style="color: #FFFFFF;margin-top: 40px;text-align: center;">您的呼叫ID:
					{{uid ? uid : '未登录'}}</text>
			</view>
		</view>

	</view>
</template>
<script>
	import {
		mapState
	} from "vuex"
	
	export default {
		computed: {
			...mapState(['uid'])
		},
		onLoad(options) {
			// 默认弹窗
			// #ifdef APP-PLUS
			this.$store.dispatch('upDataPopubId', 'poPup');
			if (options.state === 'end' || options.state === 'abnormityEnd') {
				setTimeout(() => {
					this.$Utils.hintInfo(options.state === 'end' ? '通话已结束' : '通话异常', options.state === 'end' ?
						'success' : 'warn');
				}, 800)
			}
			// #endif

			// #ifdef MP-WEIXIN
			// if (options.state === 'end' || options.state === 'abnormityEnd') {
			// 	uni.showToast({
			// 		title: options.state === 'end' ? '通话已结束' : '通话异常',
			// 		icon: "none",
			// 		duration: 2000
			// 	});
			// }
			// #endif
		},
		data() {
			return {
				windowWidth: 200,
				windowHeight: 200,
			}
		},
		created() {
			// 默认弹窗
			// #ifdef APP-PLUS
			this.$store.dispatch('upDataPopubId', 'poPup');
			// #endif
			let _this = this;
			uni.getSystemInfo({
				success: function(res) {
					_this.windowWidth = res.windowWidth;
					_this.windowHeight = res.windowHeight;
				}
			});
		},
		methods: {
			// 跳转
			goBack(url) {
				if (this.uid) {
					uni.navigateTo({
						url,
						animationType: "slide-in-bottom",
						animationDuration: 300,
						success(res) {
							console.log("成功", res);
						},
						fail(res) {
							console.log("失败", res);
						}
					});
				} else {
					uni.showToast({
						title: '未登录',
						icon: "none",
						duration: 2000
					});
				}
			}
		}
	}
</script>
<style scoped>
	.m-2 {
		margin: 20px;
	}

	.p-2 {
		padding: 20px;
	}

	.content_bg {
		position: relative;
	}
	
	.content_bg_img {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		z-index: -1;
	}
		
	.content_bg_img_ {
		flex: 1;
		width: 100%;
		height: 100%;
	}

	.content {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.colum_flex {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>