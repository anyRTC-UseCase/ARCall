<!-- rtm 呼叫邀请页面 -->
<template>
	<view class="conent content_bg"
		:style="{width: windowWidth + 'px',height: windowHeight + 'px'}">
		<view class="content_bg_img">
			<image class="content_bg_img_" src="../../static/icon_back.png" mode=""></image>
		</view>
		
		<!-- 头像 -->
		<view class="">
			<image style="width: 120px;height: 120px;" src="../../static/icon_head.png" mode=""></image>
		</view>
		<!-- 用户 uid 标识 -->
		<text class="m-2" style="color: #FFFFFF;font-size: 20px;">{{uid}}</text>
		<!-- 呼叫方式 -->
		<view style="display: flex;flex-direction: column;align-items: center;margin: 40px 0;">
			<image style="width: 60px;height: 60px;" src="../../static/animation.png" mode=""></image>
			<text class="m-2" style="color: #FFFFFF;">{{type === '主叫'? mode + '呼叫中' : '收到主叫发起的' + mode}}</text>
		</view>
		<!-- 操作方式 -->
		<view class="options">
			<view style="display: flex;justify-content: flex-end;padding: 0 40px;margin-bottom: 20px;">
				<!-- 视频转语音(仅被叫有效)-->
				<view class="icon" v-if="type === '被叫' && mode === '视频'" @click="switchFn">
					<image class="icon_img" src="../../static/icon_switch_voice.png"></image>
					<text class="icon_text">转语音</text>
				</view>
			</view>
			<view class="type" :style="{justifyContent: type === '被叫' ? 'space-between': 'center'}">
				<!-- 挂断 -->
				<view class="icon" @click="cancelFn">
					<image class="icon_img" src="../../static/icon_hangup.png"></image>
					<text class="icon_text">挂断</text>
				</view>
				<!-- 接听(仅被叫有效)-->
				<view v-if="type === '被叫'" class="icon" @click="acceptFn">
					<image class="icon_img" src="../../static/icon_accept.png"></image>
					<text class="icon_text">接听</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// #ifdef MP-WEIXIN
	import {
		Store
	} from '../../until/MP-WEIXIN/index.js'
	// #endif

	export default {
		onLoad(option) {
			if (option.info) {
				// 默认弹窗
				this.$store.dispatch('upDataPopubId', 'poPup-rtm');
				const oInfo = JSON.parse(option.info);
				this.mode = oInfo.mode;
				this.type = oInfo.type;
				this.uid = oInfo.uid;
			}
			let _this = this;
			uni.getSystemInfo({
				success: function(res) {
					_this.windowWidth = res.windowWidth;
					_this.windowHeight = res.windowHeight;
				}
			})
		},
		data() {
			return {
				uid: '', // 用户 uid
				mode: '', // 呼叫方式：语音/视频
				type: '', // 呼叫类别：主叫/被叫
				windowHeight: 400,
				windowWidth: 200,

				current: 'rtm',
				network: false,

				networkEnd: null,
			}
		},
		created() {
			// #ifdef APP-PLUS
			// 断网后处理
			uni.onNetworkStatusChange((res) => {
				if (res.isConnected) {
					clearTimeout(this.networkEnd);
					let oTime = setInterval(() => {
						// RTM 重连后发送
						const od = this.$RTM.getLoginStatu();
						if (od.state == 3 && od.reason == 2) {
							clearInterval(oTime);
							// 断网重连发送状态信息
							console.log("断网重连发送状态信息");
							this.$RTM.networkReconnection();
						}
					}, 500)
				} else {
					this.networkEnd = setTimeout(() => {
						// 30s 无网络连接结束当前通话
						this.$RTM.networkEndCall();
					}, 30000);
				}
			});
			// #endif
		},
		methods: {
			// 挂断
			async cancelFn() {
				// #ifdef APP-PLUS
				// 结束正在通话
				this.$Utils.restoreAll();
				if (this.type === "主叫") {
					// 主叫挂断(取消呼叫邀请)
					await this.$RTM.cancelLocalInvitation(this.uid);
				} else {
					// 被叫挂断(拒绝对方的呼叫邀请)  
					console.log("被叫挂断(拒绝对方的呼叫邀请)", this.uid);
					await this.$RTM.refuseRemoteInvitation(this.uid);
				}
				// #endif


				// #ifdef MP-WEIXIN
				if (this.type === "主叫") {
					// 主叫取消
					Store.localInvitation && await Store.localInvitation.cancel();
				} else {
					// 被叫拒绝
					Store.remoteInvitation && await Store.remoteInvitation.refuse();
				}
				// #endif
			},
			// 接听
			acceptFn() {
				// #ifdef APP-PLUS
				this.current = 'rtc'
				this.$RTM.acceptRemoteInvitation(this.uid, {
					Mode: this.mode === '视频' ? 0 : 1, // 
					Conference: false, // p2p 呼叫
					UserData: "",
					SipData: "",
				});
				// #endif

				// #ifdef MP-WEIXIN
				if (Store.remoteInvitation) {
					console.log("接受邀请", Store.remoteInvitation);
					// 设置响应模式
					Store.remoteInvitation.response = JSON.stringify({
						Mode: this.mode === '视频' ? 0 : 1,
						Conference: false,
						UserData: "",
						SipData: "",
					});
					// 本地模式
					Store.Mode = this.mode === '视频' ? 0 : 1;
					// 接受邀请
					Store.remoteInvitation.accept();
				}
				// #endif
			},
			// 转语音
			switchFn() {
				// #ifdef APP-PLUS
				this.current = 'rtc'
				// 转语音并接受呼叫
				this.$RTM.acceptRemoteInvitation(this.uid, {
					Mode: 1, // 语音
					Conference: false, // p2p 呼叫
					UserData: "",
					SipData: "",
				});
				// #endif

				// #ifdef MP-WEIXIN
				if (Store.remoteInvitation) {
					// 设置响应模式
					Store.remoteInvitation.response = JSON.stringify({
						Mode: 1,
						Conference: false,
						UserData: "",
						SipData: "",
					});
					// 本地模式
					Store.Mode = 1;
					// 接受邀请
					Store.remoteInvitation.accept();
				}
				// #endif
			},
		}
	}
</script>

<style scoped>
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

	.conent {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.m-2 {
		margin: 20px;
	}

	.p-2 {
		padding: 20px;
	}

	.options {
		position: fixed;
		bottom: 20px;
		width: 100%;
	}

	.type {
		display: flex;
		flex-direction: row;
		padding: 0 40px;
	}

	.icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.icon_img {
		width: 60px;
		height: 60px;
		border-radius: 60px;
		margin-bottom: 10px;
	}

	.icon_text {
		color: #FFFFFF;
	}
</style>