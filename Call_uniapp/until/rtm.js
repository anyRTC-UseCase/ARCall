import Config from "./config.js";
import {
	Utils,
	RTMUtils,
	RTCUtils
} from "./until.js";

// rtm 实时消息引入
const rtmModule = uni.requireNativePlugin("AR-RtmModule");
let Store = {
	// 被叫、主叫区分
	type: false,
	// 当前登陆状态
	logining: {
		state: 0,
		reson: 0,
	},
	// 当前 rtm/rtc
	presentType: 'rtm',
	// 断网后重连查询的 uid
	networkPeerid: '',
	// 断网 30s 后无网络
	networkTimer: false,
	// 断网发送查询后检测是否返回消息
	networkSendDetection: null,
	networkSendDetectionTime: 10000,
};
// rtm 实时消息封装
const RTM = {
	// 初始化
	init: async () => {
		if (Config.APPID) {
			// 生成本地用户标识 Uid
			let oUid = "" + Utils.generateNumber(4);
			// 初始化回调
			await rtmModule.setCallBack((res) => {
				RTM.callBack(res);
			});
			// 初始化实例
			await rtmModule.createInstance({
					appId: Config.APPID,
				},
				(res) => {
					console.log(res);
				}
			);
			// 登录 RTM 系统
			await rtmModule.login({
					token: "",
					userId: oUid,
				},
				(res) => {
					console.log("登录 RTM 系统", res);
					RTMUtils.useLogin(res.code, oUid);
				}
			);
			// // 使用 RTM 呼叫邀请(设置邀请呼叫实例的监听器)
			await rtmModule.setCallEventListener();
		} else {
			uni.showModal({
				title: "提示",
				content: "请前往 /until/config 文件填写 appid",
				showCancel: false,
			});
		}
	},
	// 回调
	callBack: (res) => {
		switch (res.rtmEvent) {
			// SDK 与 RTM 系统的连接状态发生改变回调。
			case "onConnectionStateChanged":
				Store.logining = {
					state: res.state,
					reason: res.reason,
				};
				RTMUtils.ConnectionStateChanged(res.state, res.reason);
				break;
				// 收到点对点消息回调
			case "onPeerMessageReceived":
				Store.networkSendDetection && clearTimeout(Store.networkSendDetection);
				RTMUtils.PeerMessageReceived(res.text, res.peerId, RTM.sendMessageToPeer);
				break;
				// 被订阅用户在线状态改变
			case "onPeersOnlineStatusChanged":
				uni.$emit("PeersOnlineStatusChanged", res);
				break;
				// 返回给主叫：被叫已接受呼叫邀请
			case "onLocalInvitationAccepted":
				Store.presentType = 'rtc';
				RTMUtils.LocalInvitationAccepted(res);
				break;
				// 返回给主叫：呼叫邀请已被取消
			case "onLocalInvitationCanceled":
				Store.presentType = '';
				RTMUtils.LocalInvitationCanceled(res);
				break;
				// 返回给主叫：呼叫邀请进程失败
			case "onLocalInvitationFailure":
				Store.presentType = '';
				RTMUtils.LocalInvitationFailure(res);
				break;
				// 返回给主叫：被叫已收到呼叫邀请
			case "onLocalInvitationReceivedByPeer":
				Store.presentType = 'rtm';
				// 断网重连查询 uid
				Store.networkPeerid = res.calleeId;
				RTMUtils.LocalInvitationReceivedByPeer(res);
				break;
				// 返回给主叫：被叫已拒绝呼叫邀请
			case "onLocalInvitationRefused":
				Store.presentType = '';
				Store.networkPeerid = '';
				RTMUtils.LocalInvitationRefused(res);
				break;
				// 返回给被叫：接受呼叫邀请成功
			case "onRemoteInvitationAccepted":
				Store.presentType = 'rtc';
				RTMUtils.RemoteInvitationAccepted(res);
				break;
				// 返回给被叫：主叫已取消呼叫邀请
			case "onRemoteInvitationCanceled":
				Store.presentType = '';
				Store.networkPeerid = '';
				RTMUtils.RemoteInvitationCanceled(res);
				break;
				// 返回给被叫：来自主叫的呼叫邀请进程失败
			case "onRemoteInvitationFailure":
				Store.presentType = '';
				Store.networkPeerid = '';
				RTMUtils.RemoteInvitationFailure(res);
				break;
				// 返回给被叫：收到一个呼叫邀请
			case "onRemoteInvitationReceived":
				Store.presentType = 'rtm';
				// 断网重连查询 uid
				Store.networkPeerid = res.callerId;
				RTMUtils.RemoteInvitationReceived(res, RTM.refuseRemoteInvitation);
				break;
				// 返回给被叫：拒绝呼叫邀请成功
			case "onRemoteInvitationRefused":
				Store.presentType = '';
				Store.networkPeerid = '';
				RTMUtils.RemoteInvitationRefused(res);
				break;
			default:
				break;
		}
	},
	// 离开
	leave: async function() {
		// 登出 RTM
		await rtmModule.logout((res) => {
			console.log(
				"登出 RTM logout 方法调用",
				res.code === 0 ? "成功" : "失败：" + res
			);
		});
		// 释放 RTM实例
		await rtmModule.release((res) => {
			console.log(
				"释放 RTM实例 release 方法调用",
				res.code === 0 ? "成功" : "失败：" + res
			);
		});
	},
	// 获取登陆状态
	getLoginStatu: function() {
		return Store.logining;
	},
	// 查询所有用户是否在线
	queryPeersOnlineStatus: function(peerIdLits) {
		return new Promise((resolve, reject) => {
			rtmModule.queryPeersOnlineStatus({
					peerIds: peerIdLits,
				},
				(res) => {
					resolve(res);
				}
			);
		});
	},
	// 向指定用户发送点对点消息
	sendMessageToPeer: function(peerId, massge, info = {}) {
		const oInfo = Object.assign({
			Cmd: massge,
		}, info);
		rtmModule.sendMessageToPeer({
				peerId: peerId + "",
				text: JSON.stringify(oInfo),
				enableHistoricalMessaging: false, // 是否保存为历史消息
				enableOfflineMessaging: false, // 是否设置为离线消息
			},
			(res) => {
				// 错误码请查看 https://docs.anyrtc.io/cn/RealTimeMessage/api-ref/rtm_android/peermessageerror
				console.log(
					"向指定用户发送点对点消息 sendMessageToPeer 方法调用",
					res.code === 0 ? "成功" : "失败：" + JSON.stringify(res)
				);
			}
		);
	},
	// 发送呼叫邀请给对方
	sendLocalInvitation: function(calleeId, info) {
		// 记录为主叫
		Store.type = true;
		return new Promise((resolve, reject) => {
			rtmModule.sendLocalInvitation({
					calleeId: calleeId, // 被呼叫者的 user ID
					content: JSON.stringify(info), // 邀请内容
				},
				(res) => {
					resolve(res.code);
				}
			);
		});
	},
	// 接受来自对方的呼叫邀请
	acceptRemoteInvitation: function(calleeId, info = "") {
		Store.type = false;
		// console.log('接受来自对方的呼叫邀请');
		rtmModule.acceptRemoteInvitation({
				calleeId: calleeId, // 供被叫获取主叫的用户 ID
				response: info ? JSON.stringify(info) : "", // 邀请响应
			},
			(res) => {
				console.log(
					res.code === 0 ?
					"" :
					"调用 acceptRemoteInvitation 接受来自对方的呼叫邀请失败"
				);
			}
		);
	},
	// 拒绝来自对方的呼叫邀请
	refuseRemoteInvitation: function(userId, info = "") {
		Store.type = false;
		rtmModule.refuseRemoteInvitation({
				calleeId: userId,
				response: info ? JSON.stringify(info) : "", // 邀请内容
			},
			(res) => {
				console.log(
					res.code === 0 ? "" : "调用 cancelLocalInvitation 取消呼叫失败"
				);
			}
		);
	},
	// 取消给对方的呼叫邀请
	cancelLocalInvitation: function(calleeId, info = "") {
		Store.type = false;
		uni.$emit('isCalling', false);
		rtmModule.cancelLocalInvitation({
				calleeId: calleeId, // 被呼叫者的 user ID
				content: info ? JSON.stringify(info) : "", // 邀请内容
			},
			(res) => {
				console.log(
					res.code === 0 ? "" : "调用 cancelLocalInvitation 取消呼叫失败"
				);
			}
		);
	},
	// 断网重连后查询状态
	networkReconnection: function() {
		if (Store.networkPeerid && !Store.networkTimer) {
			Store.networkSendDetection && clearTimeout(Store.networkSendDetection);
			RTM.sendMessageToPeer(Store.networkPeerid, "CallState");
			// 发送查询(一定时间内无消息，取消呼叫)
			Store.networkSendDetection = setTimeout(() => {
				console.log("发送查询(一定时间内无消息，取消呼叫)", Store);
				if (Store.presentType == 'rtm') {
					uni.$emit('isCalling', false);
					if (Store.type == true) {
						RTM.cancelLocalInvitation(Store.networkPeerid);
					} else {
						RTM.refuseRemoteInvitation(Store.networkPeerid);
					}
				}
			}, Store.networkSendDetectionTime);
		} else {
			Store.networkTimer = false;
		}
	},
	//  30s 无网络连接结束当前通话
	networkEndCall: async function() {
		Store.networkTimer = true;
		if (Store.presentType == 'rtm') {
			// 退回首页
			RTCUtils.destroyRtc({
				reason: 1
			});
			uni.$emit('isCalling', true);
			// rtm重连后取消邀请
			let oTime = setInterval(() => {
				// RTM 重连后发送
				const od = RTM.getLoginStatu();
				if (od.state == 3 && od.reason == 2) {
					clearInterval(oTime);
					if (Store.type == true) {
						RTM.cancelLocalInvitation(Store.networkPeerid);
					} else {
						RTM.refuseRemoteInvitation(Store.networkPeerid);
					}
				}
			}, 500)

		} else {
			uni.$emit("rtc-endcall", {
				message: 'EndCall',
				abnormal: '异常'
			})
		}
	},
};

// 监测 发送消息
uni.$on("sendMessageToPeer", (data) => {
	if (data.Cmd === "EndCall") {
		RTM.sendMessageToPeer(data.peerid, data.Cmd);
	} else if (data.Cmd === "SwitchAudio") {
		console.log("发送切换为语音模式", data);
		RTM.sendMessageToPeer(data.peerid, data.Cmd);
	} else if (data.Cmd === "InitiativeCall") {
		if (Store.type == true) {
			RTM.cancelLocalInvitation(data.peerid);
		} else {
			RTM.refuseRemoteInvitation(data.peerid);
		}
	}
});
export default RTM;
