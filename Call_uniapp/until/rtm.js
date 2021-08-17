import Config from "./config.js";
import { Utils, RTMUtils } from "./until.js";

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
};
// rtm 实时消息封装
const RTM = {
  // 初始化
  init: async () => {
    if (Config.RTM_APPID && Config.RTC_APPID) {
      // 生成本地用户标识 Uid
      let oUid = "" + Utils.generateNumber(4);
      // 初始化回调
      await rtmModule.setCallBack((res) => {
        RTM.callBack(res);
      });
      // 初始化实例
      await rtmModule.createInstance(
        {
          appId: Config.RTM_APPID,
        },
        (res) => {
          console.log(res);
        }
      );
      // 登录 RTM 系统
      await rtmModule.login(
        {
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
    console.log("回调", res.rtmEvent);
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
        RTMUtils.PeerMessageReceived(res.text, res.peerId);
        break;
      // 被订阅用户在线状态改变
      case "onPeersOnlineStatusChanged":
        uni.$emit("PeersOnlineStatusChanged", res);
        break;
      // 返回给主叫：被叫已接受呼叫邀请
      case "onLocalInvitationAccepted":
        RTMUtils.LocalInvitationAccepted(res);
        break;
      // 返回给主叫：呼叫邀请已被取消
      case "onLocalInvitationCanceled":
        RTMUtils.LocalInvitationCanceled(res);
        break;
      // 返回给主叫：呼叫邀请进程失败
      case "onLocalInvitationFailure":
        RTMUtils.LocalInvitationFailure(res);
        break;
      // 返回给主叫：被叫已收到呼叫邀请
      case "onLocalInvitationReceivedByPeer":
        RTMUtils.LocalInvitationReceivedByPeer(res);
        break;
      // 返回给主叫：被叫已拒绝呼叫邀请
      case "onLocalInvitationRefused":
        RTMUtils.LocalInvitationRefused(res);
        break;
      // 返回给被叫：接受呼叫邀请成功
      case "onRemoteInvitationAccepted":
        RTMUtils.RemoteInvitationAccepted(res);
        break;
      // 返回给被叫：主叫已取消呼叫邀请
      case "onRemoteInvitationCanceled":
        RTMUtils.RemoteInvitationCanceled(res);
        break;
      // 返回给被叫：来自主叫的呼叫邀请进程失败
      case "onRemoteInvitationFailure":
        RTMUtils.RemoteInvitationFailure(res);
        break;
      // 返回给被叫：收到一个呼叫邀请
      case "onRemoteInvitationReceived":
        RTMUtils.RemoteInvitationReceived(res, RTM.refuseRemoteInvitation);
        break;
      // 返回给被叫：拒绝呼叫邀请成功
      case "onRemoteInvitationRefused":
        RTMUtils.RemoteInvitationRefused(res);
        break;
      default:
        break;
    }
  },
  // 离开
  leave: async function () {
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
  getLoginStatu: function () {
    return Store.logining;
  },
  // 查询所有用户是否在线
  queryPeersOnlineStatus: async function (peerIdLits) {
    return await new Promise((resolve, reject) => {
      rtmModule.queryPeersOnlineStatus(
        {
          peerIds: peerIdLits,
        },
        (res) => {
          resolve(res);
        }
      );
    });
  },
  // 订阅指定单个或多个用户的在线状态
  subscribePeersOnlineStatus: function (peerIdLits) {
    rtmModule.subscribePeersOnlineStatus(
      {
        peerIds: peerIdLits,
      },
      (res) => {
        //smething
        console.log("订阅指定单个或多个用户的在线状态", res);
      }
    );
  },
  // 取消订阅
  unsubscribePeersOnlineStatus: function (peerIdLits) {
    rtmModule.unsubscribePeersOnlineStatus(
      {
        peerIds: peerIdLits,
      },
      (res) => {
        //smething
        console.log("取消订阅指定单个或多个用户的在线状态", res);
      }
    );
  },
  // 向指定用户发送点对点消息
  sendMessageToPeer: function (peerId, massge) {
    console.log("massge", massge);
    rtmModule.sendMessageToPeer(
      {
        peerId: peerId + "",
        text: JSON.stringify({
          Cmd: massge,
        }),
        enableHistoricalMessaging: true, // 是否保存为历史消息
        enableOfflineMessaging: true, // 是否设置为离线消息
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
  sendLocalInvitation: async function (calleeId, info) {
    console.log("发送呼叫邀请给对方的消息", JSON.stringify(info));
    // 记录为主叫
    Store.type = true;
    return await new Promise((resolve, reject) => {
      rtmModule.sendLocalInvitation(
        {
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
  acceptRemoteInvitation: function (calleeId, info = "") {
    Store.type = false;
    // console.log('接受来自对方的呼叫邀请');
    rtmModule.acceptRemoteInvitation(
      {
        calleeId: calleeId, // 供被叫获取主叫的用户 ID
        response: info ? JSON.stringify(info) : "", // 邀请响应
      },
      (res) => {
        Utils.hintInfo(
          res.code === 0
            ? ""
            : "调用 acceptRemoteInvitation 接受来自对方的呼叫邀请失败"
        );
      }
    );
    // 订阅对方在线状态
    RTM.subscribePeersOnlineStatus([calleeId]);
  },
  // 拒绝来自对方的呼叫邀请
  refuseRemoteInvitation: function (userId, info = "") {
    Store.type = false;
    rtmModule.refuseRemoteInvitation(
      {
        calleeId: userId,
        response: info ? JSON.stringify(info) : "", // 邀请内容
      },
      (res) => {
        Utils.hintInfo(
          res.code === 0 ? "" : "调用 cancelLocalInvitation 取消呼叫失败"
        );
      }
    );
  },
  // 取消给对方的呼叫邀请
  cancelLocalInvitation: function (calleeId, info = "") {
    console.log("取消给对方的呼叫邀请");
    Store.type = false;
    rtmModule.cancelLocalInvitation(
      {
        calleeId: calleeId, // 被呼叫者的 user ID
        content: info ? JSON.stringify(info) : "", // 邀请内容
      },
      (res) => {
        console.log("取消给对方的呼叫邀请", res);
        Utils.hintInfo(
          res.code === 0 ? "" : "调用 cancelLocalInvitation 取消呼叫失败"
        );
      }
    );
    // 取消订阅
    RTM.unsubscribePeersOnlineStatus([calleeId]);
  },
};

// 监测 发送消息
uni.$on("sendMessageToPeer", (data) => {
  if (data.Cmd === "EndCall") {
    // console.log("发送挂断消息", data);
    RTM.sendMessageToPeer(data.peerid, data.Cmd);
    // 取消订阅
    RTM.unsubscribePeersOnlineStatus([data.peerid]);
  } else if (data.Cmd === "SwitchAudio") {
    // console.log("发送切换为语音模式", data);
    RTM.sendMessageToPeer(data.peerid, data.Cmd);
  } else if (data.Cmd === "InitiativeCall") {
    if (Store.type == true) {
      RTM.cancelLocalInvitation(data.peerid);
    } else {
      RTM.refuseRemoteInvitation(data.peerid);
    }
    // 取消订阅
    RTM.unsubscribePeersOnlineStatus([data.peerid]);
  }
});
export default RTM;
