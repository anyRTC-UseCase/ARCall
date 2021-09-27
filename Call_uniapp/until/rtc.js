import Config from "./config.js";
import {
	Utils,
	RTCUtils
} from './until.js';
// rtc 音视频引入
const rtcModule = uni.requireNativePlugin('AR-RtcModule');
// uniapp 监测
let Store = {
	// 检测 Store 存在的定时器
	existTimer: null,
	destroyRtcTimer: null,
	channel: "", // 频道
	// 对方网络异常定时器（10s后关闭通话）
	networkAnomaly: null,
	networkAnomalyTime: 10000,
	// 加入频道后，频道无其他用户，通话异常定时器
	joinChannelUser: null,
	joinChannelUserTime: 10000,
};
// rtc 实时音频通话
const RTC = {
	// 初始化
	init: async function(etAudioAiNoise) {
		// 初始化回调 
		await rtcModule.setCallBack(res => {
			RTC.callBack(res);
		});
		// 初始化实例 RTC_APPID
		await rtcModule.create({
			"appId": Config.APPID
		}, res => {
			console.log('初始化实例 rtc', res);
		});
		// 私人定制 (本项目定制：智能降噪 )
		etAudioAiNoise && await rtcModule.setParameters({
			Cmd: 'SetAudioAiNoise',
			Enable: 1
		}, (res) => {
			console.log('私人定制', res);
		});
	},
	// 相关回调(仅列举常用回调)
	callBack: function(res) {
		switch (res.engineEvent) {
			// 网络连接中断
			case "onConnectionLost":
				console.log("onConnectionLost", res);
				break;
				// 网络连接状态已改变回调
			case "onConnectionStateChanged":
				console.log("网络连接状态已改变回调", res);
				break;
				// 发生警告回调
			case "onWarning":
				RTCUtils.Warning(res.warningCode);
				break;
				// 发生错误回调
			case "onError":
				RTCUtils.Error(res.errorCode);
				break;
				// 加入频道成功回调
			case "onJoinChannelSuccess":
				// 本地渲染
				RTC.localVideo({
					"channel": Store.channelId + '',
					"uid": Store.uid + '',
				});
				// 10s内无用户加入频道
				Store.joinChannelUser = setTimeout(() => {
					Utils.hintRTCInfo('对方网络异常', 'warn');
					setTimeout(() => {
						RTC.destroyRtc(1);
					}, 2000);
				}, Store.joinChannelUserTime)
				break;
			case "onRejoinChannelSuccess":
				console.log("重新加入频道回调 onRejoinChannelSuccess", res);
				break;
				// 远端用户加入当前频道回调
			case "onUserJoined":
				console.log("远端用户加入当前频道回调", res);
				// 清除异常定时器
				Store.networkAnomaly && clearTimeout(Store.networkAnomaly);
				// 清除无远端用户加入
				Store.joinChannelUser && clearTimeout(Store.joinChannelUser);
				Utils.hintRTCInfo('用户' + res.uid + '加入频道', 'info');
				break;
				// 远端用户离开当前频道回调
			case "onUserOffline":
				console.log("远端用户离开当前频道回调", res);
				// RTC.leave();
				if (res.reason != 0) {
					Utils.hintRTCInfo('对方网络异常', 'warn');
					// 异常（如果时间限制下还没有再次进入,结束当前通话)
					Store.networkAnomaly = setTimeout(() => {
						RTC.destroyRtc(res.reason);
					}, Store.networkAnomalyTime);
				}
				break;
				// 网络连接状态已改变回调
			case "onConnectionStateChanged":
				RTCUtils.ConnectionStateChanged(res);
				break;
				// 已显示远端视频首帧回调
			case "onFirstRemoteVideoFrame":
				break;
			case "onFirstRemoteVideoDecoded":
				RTC.remotenableVideo({
					channel: Store.channel,
					uid: res.uid
				})
				break;
				// 远端用户视频状态发生已变化回调(当频道内的用户超过 17 时，该回调可能不准确)
			case "onRemoteVideoStateChanged":
				RTCUtils.RemoteVideoStateChanged(res);
				break;
				// 	// 远端音频状态发生改变回调
				// case "onRemoteAudioStateChanged":
				// 	break;
				// 	// 本地音频状态发生改变回调
				// case "onLocalAudioStateChanged":
				// 	break;
				// 	// 本地视频状态发生改变回调
				// case "onLocalVideoStateChanged":
				// 	break;
				// 重新加入频道回调

				// 	// 离开频道回调
				// case "onLeaveChannel":
				// 	break;
				// 已发送本地音频首帧回调
				// case "onFirstLocalAudioFrame":
				// 	break;
				// 	// 已显示本地视频首帧回调
				// case "onFirstLocalVideoFrame":
				// 	break;
				// 	// Token 服务即将过期回调
				// case "onTokenPrivilegeWillExpire":
				// 	break;
				// 	// Token 过期回调
				// case "onRequestToken":
				// 	break;
				// 	// 用户角色已切换回调(直播场景下)
				// case "onClientRoleChanged":
				// 	break;
				// 	// 本地或远端视频大小或旋转信息发生改变回调
				// case "onVideoSizeChanged":
				// 	break;
				// 	// 通话中远端音频流的统计信息回调
				// case "onRemoteAudioStats":
				// 	break;
				// 	// 当前通话统计回调。 该回调在通话中每两秒触发一次
				// case "onRtcStats":
				// 	break;
				// 	// 通话中每个用户的网络上下行 last mile 质量报告回调
				// case "onNetworkQuality":
				// 	break;
				// 	// 通话中本地视频流的统计信息回调
				// case "onLocalVideoStats":
				// 	break;
				// 	// 通话中本地音频流的统计信息回调
				// case "onLocalAudioStats":
				// 	break;
				// 	// 通话中远端视频流的统计信息回调
				// case "onRemoteVideoStats":
				// 	break;
		}
	},
	// 加入频道
	joinChannel: async function(info) {
		// 通话中
		uni.$emit('isCalling', true);
		Store.channel = info.channelId;
		// 开启视频
		Store.mode = info.mode;
		if (Store.mode === 0) {
			await RTC.enableVideo();
		}
		// 开启免提
		await RTC.setEnableSpeakerphone(true);
		// 加入 rtc 频道
		await rtcModule.joinChannel({
			"token": info.token,
			"channelId": info.channelId + '',
			"uid": info.uid,
		}, (res) => {
			console.log('RTC joinChannel 方法调用', res.code === 0 ? '成功' : '失败：' + res);
		});
	},
	// 音频是否免提
	setEnableSpeakerphone: function(fase) {
		// 默认扬声器播放
		rtcModule.setEnableSpeakerphone({
			"enabled": fase
		}, (res) => {
			console.log('RTC 远端加入房间后设置' + fase ? '开启' : '关闭' + '扬声器播放', res.code === 0 ? '成功' : '失败：' +
				res);
		});
	},
	// 音频是否关闭
	enableLocalAudio: function(checked) {
		rtcModule.enableLocalAudio({
			"enabled": checked
		}, (res) => {
			console.log('RTC 音频' + checked ? '开启' : '关闭', res.code === 0 ? '成功' : '失败：' + res);
		})
	},
	// 摄像头（前后）
	switchCamera: function() {
		rtcModule.switchCamera((res) => {
			console.log('RTC 摄像头前后 switchCamera 方法调用', res.code === 0 ? '成功' : '失败：' +
				res);
		})
	},
	// 转语音
	toSpeech: function() {
		if (rtcModule && rtcModule.disableVideo) {
			// 关闭视频模块
			rtcModule.disableVideo((res) => {
				console.log('RTC 关闭视频模块 disableVideo 方法调用', res.code === 0 ? '成功' : '失败：' +
					res);
			})
		}
	},
	// 启用视频（加入房间后自动发布）
	enableVideo: function() {
		Store.existTimer && clearInterval(Store.existTimer)
		Store.existTimer = setInterval(async () => {
			if (Store.VideoConfig) {
				clearInterval(Store.existTimer)
				if (!Store.VideoConfig.width) {
					Store.VideoConfig = {
						"width": 720,
						"height": 1280,
						"frameRate": 15,
						"bitrate": 2000,
						"orientationMode": 2
					}
				}
				// 设置视频编码属性
				await rtcModule.setVideoEncoderConfiguration(Store.VideoConfig, (res) => {
					console.log('RTC 设置视频编码属性 setVideoEncoderConfiguration 方法调用', res
						.code ===
						0 ? '成功' :
						'失败：' + res);
				});
				// 启用视频
				await rtcModule.enableVideo((res) => {
					console.log('RTC 启用视频 enableVideo 方法调用', res.code === 0 ? '成功' : '失败：' +
						res);
				});
			}
		}, 50)
	},
	// 本地启用视频后
	localVideo: function(data) {
		setTimeout(async () => {
			// console.log("本地启用视频后",data);
			// // 渲染视频
			await Store.location.setupLocalVideo({
				"renderMode": 1,
				"channelId": data.channel,
				"uid": data.uid,
				"mirrorMode": 0
			}, (res) => {
				console.log('渲染视频', res);
			});
			// 本地预览
			await Store.location.startPreview((res) => {
				console.log('本地预览', res);
			})
		}, 200)
	},
	// 远端加入房间后进行
	remotenableVideo: async function(data) {
		await Store.remote.setupRemoteVideo({
			"renderMode": 1,
			"channelId": data.channel,
			"uid": data.uid,
			"mirrorMode": 0
		}, (res) => {
			console.log('渲染远端视频', res);
		})
		// 本地预览
		await Store.remote.startPreview((res) => {
			console.log('远端本地预览', res);
		})
	},
	/**
	 * 如果你只在一个页面写 可以直接调 destory 
		如果你是用的单例 离开页面引擎不销毁 就用 leaveChannel
	 */
	// 挂断
	leave: function() {
		// 离开频道
		rtcModule.leaveChannel((res) => {
			console.log("调用离开频道 leaveChannel", res);
		});
	},
	// 销毁实例
	destroyRtc: function(data) {
		if (rtcModule && rtcModule.destroyRtc) {
			// 销毁实例
			rtcModule.destroyRtc((res) => {
				console.log("销毁实例", res);
				if (res.code === 0) {
					RTCUtils.destroyRtc(data);
				}
			});
			// 销毁 rtc 监听函数;
			uni.$off('location-cavasview');
			uni.$off('rtc-endcall');
		}
	}
}

// 监测 rtc 视频渲染所需
uni.$on("location-cavasview", data => {
	if (data) {
		Store = Object.assign(Store, data);
	}
})

// 监测 rtc 收到的挂断信息
uni.$on("rtc-endcall", data => {
	// 挂断
	if (data.message === "EndCall") {
		console.log("监测 rtc 收到的挂断信息", data,Store);
		Utils.restoreAll();
		if (!Store.channel && !Store.uid) {
			// // 清除(呼叫时取消呼叫)
			uni.$emit("sendMessageToPeer", {
				Cmd: "InitiativeCall",
				peerid: data.peerId
			});
		} else if (Store.channel) {
			data.abnormal == "异常" ? RTC.destroyRtc(1) : RTC.destroyRtc();
		}
	}
})
export default RTC;
