<template>
	<view class="content_bg" :style="{width: windowWidth + 'px',height: windowHeight + 'px'}">
		<!-- 导航 -->
		<view class="nav">
			<!-- 返回 -->
			<image src="../../static/icon_return_w.png" mode="" style="height: 16px;width: 10px;" @click="callBack">
			</image>
			<text class="text_color">点对点呼叫邀请</text>
			<image src="../../static/icon_set.png" mode="" style="width: 16px;height: 16px;" @click="setPage"></image>
		</view>
		<view class="content">
			<text class="m-2 text_color">输入对方的 ID</text>
			<ValidCode class="m-2" :maxlength="4" :isPwd="false" @finish="getCode"></ValidCode>
		</view>
		<view style="text-align: center;margin: 60px 20px;">
			<button type="default" style="border-radius: 90px;margin-bottom: 40px;" :disabled="peeerUid.length <= 3"
				@click="startCallFn">开始呼叫</button>
			<!-- 自己的uid -->
			<text class="text_color" style="text-align: center;">您的呼叫ID:
				{{$store.state.uid ? $store.state.uid : '未登录'}}</text>
		</view>
	</view>
</template>

<script>
	import ValidCode from '../../components/validCode.vue'
	export default {
		components: {
			ValidCode
		},
		data() {
			return {
				// 对方 uid
				peeerUid: '',
				// 频道id
				channelId: '',
				windowWidth: 200,
				windowHeight: 200,
				callTypeList: ["视频呼叫", "语音呼叫"],

				disabledCall: true,
			}
		},
		created() {
			// 默认弹窗
			this.$store.dispatch('upDataPopubId', 'poPup-p2p');
			let _this = this;
			uni.getSystemInfo({
				success: function(res) {
					_this.windowWidth = res.windowWidth;
					_this.windowHeight = res.windowHeight;
				}
			})
		},
		methods: {
			// 返回首页
			callBack() {
				uni.redirectTo({
					url: 'index'
				});
			},
			// 获取对方 uid
			getCode(val) {
				if (val === this.$store.state.uid) {
					this.$Utils.hintInfo("呼叫用户不能与自己 uid 一致", "error");
				} else {
					this.peeerUid = val;
				}
			},
			// 前往设置
			setPage() {
				uni.navigateTo({
					url: 'set'
				})
			},
			// 来时呼叫
			async startCallFn() {
				if (this.peeerUid) {
					// 先查询是否在线
					uni.showLoading({
						title: '加载中，请稍后'
					});
					await uni.hideLoading();
					if (await this.PeersOnlineStatusFn()) {
						const oIndex = await new Promise((resolve, reject) => {
							uni.showActionSheet({
								itemList: this.callTypeList,
								success: function(res) {
									resolve(res);
								},
							});
						});
						if (this.disabledCall) {
							this.disabledCall = false;
							this.callFn(oIndex.tapIndex);
						}
					} else {
						this.$Utils.hintInfo('呼叫用户不在线', 'error');
						this.disabledCall = true;
					}
				} else {
					this.$Utils.hintInfo("请输入正确的用户，呼叫对象不能为自己", "error");
				}
			},
			// 发起呼叫
			async callFn(num) {
				if (await this.PeersOnlineStatusFn()) {
					// 生成随机频道Id
					this.channelId = await this.$Utils.generateNumber(9);
					// 携带信息
					const oTnfo = {
						Mode: num, // 呼叫类型 视频通话 0 语音通话 1
						Conference: false, // 是否是多人会议
						ChanId: this.channelId + '', // 频道房间
						UserData: "",
						SipData: "",
						VidCodec: ["H264"],
						AudCodec: ["Opus"],
					}
					// 发起呼叫
					const code = await this.$RTM.sendLocalInvitation(this.peeerUid, oTnfo);
					console.log("发起呼叫", code);
					if (code != 0 && code != 5) {
						console.log(code);
						this.$Utils.hintInfo('调用 sendLocalInvitation 发送呼叫失败');
						this.disabledCall = true;
					} else {
						this.disabledCall = false;
					}
				} else {
					this.$Utils.hintInfo('呼叫用户已离线', 'error');
					this.disabledCall = true;
				}
			},
			// 判断呼叫对象人员在线
			async PeersOnlineStatusFn() {
				// 查看呼叫用户是否存在
				const queryPeersOnline = await this.$RTM.queryPeersOnlineStatus([this.peeerUid + '']);
				console.log("查看呼叫用户是否存在",queryPeersOnline);
				if (queryPeersOnline.code === 0 && queryPeersOnline.peerOnlineStatus[0].state != 2) {
					return true
				} else {
					return false
				}
			}
		}
	}
</script>

<style>
	.m-2 {
		margin: 20px;
	}

	.p-2 {
		padding: 20px;
	}

	.content_bg {
		background: url(../../static/icon_back.png) no-repeat;
		background-size: cover;
		background-position: center;
		position: relative;
	}

	.nav {
		padding: 40px 20px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.text_color {
		color: #FFFFFF;
	}

	.content {}
</style>
