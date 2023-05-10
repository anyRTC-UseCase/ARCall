小程序专属页面
<template>
	<view class="call">
		<!-- 视频通话 -->
		<view v-if="mode === 0" class="live">
			<!-- 可移动 -->
			<movable-area class="movable-area">
				<movable-view direction="all" :x="windowWidth-140" :y="20" class="live-pusher">
					<!-- 本地录制 -->
					<live-pusher v-if="livePusherUrl.length > 0" autopush :url="livePusherUrl" mode="FHD"
						@statechange="statechange" @error="error" style="height: 100%;width: 100%;" />
				</movable-view>
			</movable-area>

			<!-- 远端播放 -->
			<view class="live-player">
				<live-player v-if="livePlayerUrl.length > 0" :src="livePlayerUrl" mode="RTC" autoplay
					@statechange="statechange" @error="error"
					style="height: 100%;width: 100%;position: absolute;z-index: -100;">
					<!-- 通话计时 -->
					<cover-view class="calltime text_color">{{calltime}}</cover-view>
					<!-- 操作 -->
					<cover-view class="operate">
						<cover-view class="operate-item" @click="switchAudio">
							<cover-image class="operate_img" src="../../static/icon_switch_voice.png"></cover-image>
							<cover-view class="text_color m">切换至语音</cover-view>
						</cover-view>
						<cover-view class="operate-item" @click="endCall">
							<cover-image class="operate_img" src="../../static/icon_hangup.png"></cover-image>
							<cover-view class="text_color m">挂断</cover-view>
						</cover-view>
						<cover-view class="operate-item" @click="switchCamera">
							<cover-image v-if="devicePosition == 'front'" class="operate_img"
								src="../../static/icon_switch.png"></cover-image>
							<cover-image v-else class="operate_img" src="../../static/icon_switchs.png"></cover-image>
							<cover-view class="text_color m">
								{{devicePosition == 'front' ? '前' : '后'}}摄像头
							</cover-view>
						</cover-view>
					</cover-view>
				</live-player>
				<!-- style="height: 100%;width: 100%;position: absolute;z-index: -100;"  -->
			</view>

		</view>
		<!-- 语音通话 -->
		<view v-else class="live" style="background-color: rgba(0, 0, 0, 0.5);" >
			<!-- 本地推流 关闭摄像头-->
			<live-pusher v-if="livePusherUrl.length > 0" style="width: 0px;height: 0px;" mode='RTC'
				:enable-camera='false' :url='livePusherUrl' autopush></live-pusher>
			<!-- 远端拉流 -->
			<live-player v-if="livePlayerUrl.length > 0" style="width: 0px;height: 0px;" autoplay mode='RTC'
				:src='livePlayerUrl' @error="error" @statechange="statechange" :sound-mode='soundMode'></live-player>

			<!-- 远端用户信息 -->
			<view class="peerinfo">
				<image class="icon_head" src="../../static/icon_head.png"></image>
				<text class="text_color m">{{peerid}}</text>
			</view>
			<!-- 通话计时 -->
			<view class="calltime">
				<text class="text_color">{{calltime}}</text>
			</view>
			<!-- 操作 -->
			<view class="operate">
				<view class="operate-item" @click="muteAudio">
					<image v-if="enableMic" class="operate_img" src="../../static/icon_closeaudio.png"></image>
					<image v-else class="operate_img" src="../../static/icon_openaudio.png"></image>
					<text class="text_color m">静音</text>
				</view>
				<view class="operate-item" @click="endCall">
					<image class="operate_img" src="../../static/icon_hangup.png"></image>
					<text class="text_color m">挂断</text>
				</view>
				<view class="operate-item" @click="handsFree">
					<image v-if="soundMode === 'speaker'" class="operate_img" src="../../static/icon_speakers.png"
						mode=""></image>
					<image v-else class="operate_img" src="../../static/icon_speaker.png" mode=""></image>
					<text class="text_color m">免提</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		RTM,
		Store,
		Until,
		RTC,
		liveCode
	} from "../../until/MP-WEIXIN/index.js"
	export default {
		data() {
			return {
				// 通话方式
				mode: 0,
				// 远端uid
				peerid: "",
				// 本地录制地址(小程序特有推流)
				livePusherUrl: "",
				// 远端播放(小程序特有拉流)
				livePlayerUrl: "",

				// 前置或后置，值为front, back
				devicePosition: 'front',
				// 开启或关闭麦克风
				enableMic: false,
				// 开启免提
				soundMode: 'speaker',

				calltime: "00:00",
			}
		},
		onLoad: function(options) {
			const _this = this;
			Store.State = 2;
			// 推拉流变更
			uni.$on("livePusherUrlEvent", (data) => {
				console.log("推拉流变更", data);
				if (data.livePusherUrl) {
					_this.livePusherUrl = data.livePusherUrl
				}

				if (data.livePlayerUrl) {
					_this.livePlayerUrl = data.livePlayerUrl
				}
			});

			// 通话模式变更
			uni.$on("callModeChange", (data) => {
				_this.mode = data.mode;
				Store.Mode = data.mode;
				if (data.mode === 1) {
					// 被动变更
					Store.rtcClient.muteLocal('video');
				}
			})

			// 可用宽度
			try {
				const oInfo = uni.getSystemInfoSync();
				this.windowWidth = oInfo.windowWidth;
				this.mode = Store.Mode;

				this.peerid = Store.peerUserId || '6666';

				// 开启通话计时
				Store.callTimer = setInterval(() => {
					_this.calltime = Until.calculagraph()
				}, 1000)
			} catch (error) {
				console.log("error", error);
			}
		},
		onUnload: function() {
			uni.$off('livePusherUrlEvent');
			uni.$off('callModeChange');
		},
		methods: {
			// 切换至语音
			switchAudio() {
				this.peerid = Store.peerUserId;
				this.mode = 1
				Store.Mode = 1;
				// 被动变更
				Store.rtcClient.muteLocal('video');
				// 发送切换语音消息
				RTM.rtmInternal.sendMessage(Store.peerUserId, {
					Cmd: "SwitchAudio",
				})
			},
			// 挂断
			endCall() {
				RTC.rtcInternal.leaveChannel(true);
			},
			// 翻转摄像头
			switchCamera() {
				wx.createLivePusherContext().switchCamera();
				this.devicePosition = this.devicePosition == 'front' ? 'back' : 'front';
			},
			// 静音
			muteAudio() {
				this.enableMic = this.enableMic ? false : true;
				RTC.rtcInternal.switchAudio(this.enableMic);
			},
			// 免提
			handsFree() {
				this.soundMode = this.soundMode == 'speaker' ? 'ear' : 'speaker';
			},
			// 微信组件状态
			statechange(e) {
				if (e.detail.code == 2004) {
					uni.hideLoading();
				}
				if (e.detail.code != 1006 && e.detail.message) {
					uni.showToast({
						title: liveCode[e.detail.code] || e.detail.message,
						icon: 'none',
					})
				}

				console.log('live-pusher code:', e.detail)
			},
			// 微信组件错误
			error(e) {
				console.log(e.detail);
				switch (e.detail.errCode) {
					case 10001:
						uni.showToast({
							title: '用户禁止使用摄像头',
							icon: 'none',
							duration: 2000
						})
						break;
					case 10002:
						uni.showToast({
							title: '用户禁止使用录音',
							icon: 'none',
							duration: 2000
						})
						break;
					default:
						break;
				}
			},
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 200rpx 0;
		box-sizing: border-box;
		position: relative;
		height: 100vh;
	}

	.icon_back {
		position: absolute;
		z-index: -1;
		top: 0;
		height: 100%;
		width: 100%;
	}

	.text_color {
		color: #fff;
	}

	/* pages/pagecall/pagecall.wxss */
	.m {
		margin: 10px;
	}

	.live {
		position: relative;
		height: 100vh;
	}

	.movable-area {
		pointer-events: none;
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		z-index: 999;
	}

	/* 本地 */
	.live-pusher {
		pointer-events: auto;
		position: absolute;
		width: 280rpx;
		height: 320rpx;
		z-index: 999;
		border-radius: 6px;
	}

	/* 远端 */
	.live-player {
		position: absolute;
		height: 100vh;
		width: 100%;
		z-index: 99;
	}

	/* 操作 */
	.operate {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 240rpx;
		display: flex;
		justify-content: space-around;
		z-index: 9999;
	}

	.operate-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.operate_img {
		width: 60px;
		height: 60px;
	}

	.peerinfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 90px;
	}

	.icon_head {
		width: 120px;
		height: 120px;
	}

	.calltime {
		position: absolute;
		bottom: 280rpx;
		width: 100%;
		text-align: center;
	}
</style>