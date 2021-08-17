<!-- 设置页面 -->
<template>
	<view class="conent">
		<!-- 分辨率 -->
		<view class="type">
			<text class="text">分辨率</text>
			<view class="py-1 flex" @click="resolutionFn">
				<text>{{resolution}}</text>
				<image src="../../static/you.png" style="width: 20px;height: 20px;"></image>
			</view>
		</view>
		<!-- 帧率 -->
		<view class="type">
			<text class="text">帧率</text>
			<view class="flex py-1" @click="frameRateFn">
				<text>{{frameRate}}</text>
				<image src="../../static/you.png" style="width: 20px;height: 20px;"></image>
			</view>
		</view>
		<!-- AI 智能降噪 -->
		<view class="type flex">
			<text>AI 智能降噪</text>
			<switch @change="switchFn" style="transform:scale(0.7)" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 分辨率
				resolution: '240 * 320',
				resolutionList: ['240 * 320', '480 * 640', '720 * 1280'],
				// 帧率
				frameRate: '15',
				frameRateList: ['15', '24', '30']
			}
		},
		methods: {
			// 开启智能降噪
			switchFn(e) {
				this.$store.dispatch('upDataetAudioAiNoise', e.target.value)
			},
			// 分辨率
			async resolutionFn() {
				const oIndex = await new Promise((resolve, reject) => {
					uni.showActionSheet({
						itemList: this.resolutionList,
						success: function(res) {
							resolve(res);
						},
					});
				})
				this.resolution = this.resolutionList[oIndex.tapIndex];
				// 设置 分辨率
				const oSplit = this.resolution.split('*');
				this.$store.dispatch('upDataVideoConfig', {
					width: Number(oSplit[0]),
					height: Number(oSplit[1])
				})
			},
			// 帧率
			async frameRateFn() {
				const oIndex = await new Promise((resolve, reject) => {
					uni.showActionSheet({
						itemList: this.frameRateList,
						success: function(res) {
							resolve(res);
						},
					});
				})
				this.frameRate = this.frameRateList[oIndex.tapIndex];
				// 设置帧率
				this.$store.dispatch('upDataVideoConfig', {
					frameRate: Number(this.frameRate)
				})
			}
		}
	}
</script>

<style scoped>
	.conent {
		height: 100vh;
		background-color: #F8F8F8;
		padding: 1px 0;
	}

	.type {
		background-color: #FFFFFF;
		padding: 10px 20px;
		margin: 10px 0 0 0;
	}

	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		color: #808080;
	}

	.py-1 {
		padding: 10px 0;
	}
</style>
