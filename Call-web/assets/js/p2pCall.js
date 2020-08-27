//数据存储
var Store = {
  ownUserId: "" + Utils.generateNumber(4), //自己的用户ID - 这里需要转字符串
  peerUserId: "", //远端的用户的ID
  rtcLogin: false,
  rtmLogin: false,
  iscalling: false, //发起邀请或者被邀请 标识
  audioOrvideo: false, //语音或视频 标识

  rtcClient: null,
  rtmClient: null,

  //本地采集的音视频轨道
  localTracks: {
    videoTrack: null,
    audioTrack: null,
    settingVideoTrack: null,
    hasVideoTrack: false,
    hasAudioTrack: false,
  },

  //呼叫设置
  setting: {
    //点对点呼叫设置
    videoSize: [320, 180], //设置视频采集的分辨率大小
    audioDevice: "default", // 设置音频设备ID
    videoDevice: "default", // 设置视频设备ID
    //多人呼叫设置
    // enableAudio: false, //
    // enableVideo: false, //
  },

  localInvitation: null,
  remoteInvitation: null,
  // //邀请或被邀请参会人员用户ID
  // invitationUserIds: [],
  // 无响应设置
  timer: null,
};

// 呼叫时间
var duration = 0;
var durationTime = null;



// 登录 进行初始化

//RTC
var RTC = {
  //初始化RTC
  init: function () {
    if (Store.rtcClient === null) {
      var rtcClient = ArRTC.createClient({
        mode: Config.RTC_MODE,
        codec: Config.RTC_CODEC
      });
      Store.rtcClient = rtcClient;
      //RTC SDK 监听回调
      rtcClient.on("user-published", async function (user, mediaType) {
        await rtcClient.subscribe(user, mediaType);
        Utils.printLog('[info] subscribe success');
        if (mediaType === "video") {
          var videoBox = document.createElement("div");
          videoBox.id = user.uid;
          videoBox.className = "video-preview_box";
          document.getElementById('peerVideoPreview').appendChild(videoBox);
          user.videoTrack && user.videoTrack.play(videoBox.id, {
            fit: "contain"
          });
        } else {
          user.audioTrack && user.audioTrack.play();
          // $("#titleAudio > i").removeClass("icon-_hongsebimaixiaoicon icon_color_red").addClass(
          // 	"icon-_yinpinkaiqizhong icon_color_blue")
        }
      });
      rtcClient.on("user-unpublished", async function (user, mediaType) {
        if (mediaType === "video") {
          document.getElementById(user.uid).remove();
          clearInterval(durationTime)
          // 通讯时长
          durationTime = setInterval(function () {
            duration++;
            callDuration(duration, "audioDuration")
          }, 1000);
          // 显示语音界面 隐藏视频界面
          !$("#meetPage").hasClass("d-none") && $("#meetPage").addClass("d-none");
          $("#audioPage").hasClass("d-none") && $("#audioPage").removeClass("d-none");

        }
        // else if (mediaType === "audio") {
        // $("#titleAudio > i").removeClass("icon-_yinpinkaiqizhong icon_color_blue").addClass(
        // 	"icon-_hongsebimaixiaoicon icon_color_red")
        // }
      });
      rtcClient.on("user-joined", function (user) {
        $("#UserIdChanel").html(user.uid)
        Utils.printLog("user-joined");
      });
      rtcClient.on("user-left", function () {
        Utils.printLog("user-left");
        // if (callMode === 1) {
        // !$("#mineVideoPreview").hasClass("audio") && $("#mineVideoPreview").addClass("audio");
        // 清除通话时长
        if (durationTime) {
          clearInterval(durationTime);
          duration = 0;
          $("#audioDuration") && $("#audioDuration").text("00:00");
          $("#videoDuration") && $("#videoDuration").text("00:00");
        }
        // }
        //释放资源
        Store.iscalling = false;
        Store.audioOrvideo = false;
        Store.localTracks.videoTrack && (Store.localTracks.videoTrack.close(), Store.localTracks.videoTrack = null,
          Store.hasVideoTrack = false);
        Store.localTracks.audioTrack && (Store.localTracks.audioTrack.close(), Store.localTracks.audioTrack = null,
          Store.hasAudioTrack = false);
        rtcClient.leave();
        document.getElementById(Store.ownUserId) && document.getElementById(Store.ownUserId).remove();
        //隐藏视频通讯页面
        !$("#meetPage").hasClass("d-none") && $("#meetPage").addClass("d-none");
        $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
        // 如果在设置页面 退出设置页面
        $("#closeSettingBtn").click()
      });
      rtcClient.on("connection-state-change", async function (ConnectionState) {});

    }
  },
  //采集用户音视频并发布
  getUserMediaAndPublish: async function (callMode) {
    var [cameras, microhones] = await Promise.all([
      ArRTC.getCameras(),
      ArRTC.getMicrophones(),
    ]);

    if ((cameras.length === 0 && microhones.length === 0) || (callMode === 0 && cameras.length === 0)) {
      SystemUI.alertError("上麦失败！确实麦克风和摄像头");
      return
    }

    if (cameras.length > 0 && microhones.length > 0 && callMode === 0) { //仅视频呼叫才打开摄像头
      [Store.localTracks.audioTrack, Store.localTracks.videoTrack] = await ArRTC.createMicrophoneAndCameraTracks(
        null, {
          encoderConfig: {
            bitrateMax: 1130,
            // bitrateMin: ,
            frameRate: 15,
            height: 180,
            width: 320,
          }
        }
      );
    } else {
      if (cameras.length > 0 && callMode === 0) {
        Store.localTracks.videoTrack = await ArRTC.createCameraVideoTrack({
            encoderConfig: {
              bitrateMax: 1130,
              // bitrateMin: ,
              frameRate: 15,
              height: 180,
              width: 320,
            }
          })
        .catch(err => {
          console.log("err => ", err);
        });
      }
      if (microhones.length > 0) {
        Store.localTracks.audioTrack = await ArRTC.createMicrophoneAudioTrack()
        .catch(err => {
          console.log("err => ", err);
        });

      }
    }

    if (!Store.localTracks.videoTrack && !Store.localTracks.audioTrack) {
      SystemUI.alertError("没有设备无法发布媒体流");
      return
    }
    //显示 P2P 音频布局
    // console.log(callMode);
    // if (callMode === 1) {
    // $("#audioPage").hasClass("d-none") && $("#audioPage").removeClass("d-none");
    // } else {

    // }

    //预览本地图像
    var videoBox = document.createElement("div");
    videoBox.id = Store.ownUserId;
    videoBox.className = "video-preview_box";
    document.getElementById('mineVideoPreview').appendChild(videoBox);
    Store.localTracks.videoTrack && Store.localTracks.videoTrack.play(videoBox.id);

    //设置主播身份并发布
    Store.rtcClient.setClientRole("host");
    await Store.rtcClient.publish([Store.localTracks.videoTrack, Store.localTracks.audioTrack]); //发布

    // 标识
    Store.audioOrvideo = true;
    Store.localTracks.hasVideoTrack = !!Store.localTracks.videoTrack;
    Store.localTracks.hasAudioTrack = !!Store.localTracks.audioTrack;
    $("#videoSwitchBtn").attr("disabled", !Store.localTracks.hasVideoTrack);
    $("#audioSwitchBtn").attr("disabled", !Store.localTracks.hasAudioTrack);
  }
};

//RTM
var RTM = {
  init: function () {
    if (Store.rtmClient === null) {
      var rtmClient = ArRTM.createInstance(Config.RTM_APPID);
      Store.rtmClient = rtmClient;
      //RTM SDK 监听回调
      //登录信令服务
      rtmClient.login({
        uid: Store.ownUserId
      }).then(async function () {
        Store.rtcLogin = true;
        $(".own-user-id-view").html(Store.ownUserId);
        $("#openP2PInvite").attr("disabled", false);
        $("#openMultiInvite").attr("disabled", false);
      }).catch(function (err) {
        Store.rtcLogin = false;
        alertError.alertError("RTM 登录失败");
        // $('.alert').alert('close');
      });

      //通知 SDK 与 RTM 系统的连接状态发生了改变。
      rtmClient.on("ConnectionStateChanged", function (newState, reason) {});

      //监听订阅用户的上下线状态
      rtmClient.on("PeersOnlineStatusChanged", function (status) {
        Object.keys(status).forEach(statusKey => {
          Utils.printLog("[info]", "user statusKey is " + status[statusKey]);
        });
      });

      //收到来自主叫的呼叫邀请。
      rtmClient.on("RemoteInvitationReceived", function (remoteInvitation) {
        Utils.printLog("[info]", "You recive an invitation from " + remoteInvitation.callerId);
        if (!Store.iscalling && !Store.audioOrvideo) {
          Store.iscalling = true;
          Store.remoteInvitation = remoteInvitation;

          $("#callerIdView").html(remoteInvitation.callerId);

          var invitationContent = JSON.parse(remoteInvitation.content);
          if (invitationContent.Mode === 0) {
            $(".switch-audio-call_item").fadeIn();
            $("#changAudioBtn").removeClass("d-none")
          } else {
            $("#changAudioBtn").addClass("d-none")
          }
          //显示被呼叫页面
          !$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
          $("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").removeClass("d-none");

          Store.timer = setTimeout(function () {
            SystemUI.alertWhole("无操作，退出邀请", "alert-info");
            !$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
            $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
          }, 60000)
        } else {
          remoteInvitation.response = {
            Reason: "calling"
          };
          remoteInvitation.refuse();
        }


        //返回给被叫：接受呼叫邀请成功。
        remoteInvitation.on("RemoteInvitationAccepted", async function () {
          Utils.printLog("[info]", "RemoteInvitationAccepted");
          //邀请已结束
          Store.iscalling = false;
          Store.remoteInvitation = null;
          var invitationContent = JSON.parse(remoteInvitation.content);
          var invitationResponse = JSON.parse(remoteInvitation.response);
          // Mode: callMode,
          // Conference: isP2p,
          // ChanId: Utils.generateNumber(9),
          // UserData: "",
          // SipData: ""

          //加入实时通讯频道
          Store.ownUserId = await Store.rtcClient.join(Config.RTC_APPID, invitationContent.ChanId, null, Store.ownUserId);
          //采集并发布媒体流
          if (invitationResponse.Mode == 1) {
            $("#audioPage").removeClass("d-none");
            // 通讯时长
            durationTime = setInterval(function () {
              duration++;
              callDuration(duration, "audioDuration")
            }, 1000);
          } else {
            $("#audioPage").addClass("d-none");
            // 通讯时长
            durationTime = setInterval(function () {
              duration++;
              callDuration(duration, "videoDuration")
            }, 1000);
          }
          await RTC.getUserMediaAndPublish(invitationResponse.Mode);

          // 恢复初始设置
          $("#videoSwitchBtn > i").removeClass("icon-_shipinguanbizhong").addClass(
            "icon-_guaduanyinshipinzhong icon_color_blue");
          $("#mineVideoPreview_bg").css("zIndex", "0");
          $("#audioSwitchBtn > i").removeClass("icon-_yinpinguanbizhong").addClass(
            "icon-_yinpinkaiqizhong icon_color_blue");



        });
        //返回给被叫：拒绝呼叫邀请成功。
        remoteInvitation.on("RemoteInvitationRefused", function () {
          Utils.printLog("[info]", "RemoteInvitationRefused");
          //邀请已结束
          Store.iscalling = false;
          Store.remoteInvitation = null;
          SystemUI.alertWhole("已拒绝呼叫邀请", "alert-info");
          //隐藏被呼叫页面
          !$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
          $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
          $("#callerIdView").html("");
        });
        //返回给被叫：主叫已取消呼叫邀请。
        remoteInvitation.on("RemoteInvitationCanceled", function (content) {
          Utils.printLog("[info]", "RemoteInvitationCanceled");
          //邀请已结束
          Store.iscalling = false;
          Store.remoteInvitation = null;
          SystemUI.alertWhole("已取消呼叫邀请", "alert-info");
          //隐藏被呼叫页面
          !$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
          $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
          $("#callerIdView").html("");
          // 如果在设置页面 退出设置页面
          $("#closeSettingBtn").click()
        });
        //返回给被叫：呼叫邀请进程失败。
        remoteInvitation.on("RemoteInvitationFailure", function (reason) {
          Utils.printLog("[info]", "RemoteInvitationFailure");
          //邀请已结束
          Store.iscalling = false;
          Store.remoteInvitation = null;
          SystemUI.alertWhole("呼叫邀请失败", "alert-danger");
          //隐藏被呼叫页面
          !$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
          $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
          $("#callerIdView").html("");
        });

      });
      //（SDK 断线重连时触发）当前使用的 RTM Token 已超过 24 小时的签发有效期。
      rtmClient.on("TokenExpired", function () {

      });
    }
  },

};


// 设置 方法
async function Setting() {
  //清空默认视频
  $("#settingVideoPreview").html($("#settingVideoPreview img"));
  Store.localTracks.settingVideoTrack.close();
  Store.localTracks.settingVideoTrack = await ArRTC.createCameraVideoTrack({
    cameraId: Store.setting.videoDevice,
    encoderConfig: {
      bitrateMax: 1130,
      // bitrateMin: ,
      frameRate: 15,
      height: Store.setting.videoSize[1],
      width: Store.setting.videoSize[0],
    }
  })

  Store.localTracks.settingVideoTrack.play("settingVideoPreview");
  SystemUI.alertWhole("已成功设置", "alert-success");
}


RTC.init()
RTM.init()

function inputChangId(oid) {
  //监听用户ID输入
  $(oid).bind('input propertychange', function (event) {
    let inputVal = $(this).val();
    let reg = /^[0-9]+$/;
    if (!reg.test(inputVal)) {
      $(this).val('');
    } else {
      $(this).next('input').select();
      $(this).next('input').focus();
    }
  });
  //监听用户删除id
  $(oid).keydown(function (event) {
    //删除往前 添加往后
    if ($(this).index() < 4) {
      if (event.keyCode == 46 || event.keyCode == 8) {
        if (this.value === "") {
          $(this).prev('input').val('');
          $(this).prev('input').focus();
        } else {
          this.value = "";
        }
      }
    }
  });
}

// 监听用户ID输入 监听用户删除id
inputChangId("#userInputs > input")

/**
 * setting
 */
//监听打开设置按钮点击
$("#openSettingBtn").click(async function () {
  if (!$("#loginSetting").hasClass("show")) {
    $("#loginSetting").addClass("show");

    var [cameras, microhones] = await Promise.all([
      ArRTC.getCameras(),
      ArRTC.getMicrophones(),
    ]);

    if (cameras.length === 0 && microhones.length === 0) {
      alertError("上麦失败！确实麦克风和摄像头");
      return
    }

    $("#videoInputSelect").html("");
    cameras.map(function (camera, index) {
      var label = camera.label !== "" ? camera.label : "Camera " + index;
      var opt = $('<option value="' + camera.deviceId + '">' + label + '</option>');
      $("#videoInputSelect").append(opt)
    });
    Store.setting.videoDevice = cameras[0].deviceId
    $("#audioInputSelect").html("");
    microhones.map(function (camera, index) {
      var label = camera.label !== "" ? camera.label : "Microphone " + index;
      var opt = $('<option value="' + camera.deviceId + '">' + label + '</option>');
      $("#audioInputSelect").append(opt)
    });
    Store.setting.audioDevice = microhones[0].deviceId
    if (cameras.length > 0) {
      Store.localTracks.settingVideoTrack = await ArRTC.createCameraVideoTrack({
        cameraId: Store.setting.videoDevice,
        encoderConfig: {
          bitrateMax: 1130,
          // bitrateMin: ,
          frameRate: 15,
          height: Store.setting.videoSize[1],
          width: Store.setting.videoSize[0],
        }
      });

      if ($("#loginSetting").hasClass("show")) {
        Store.localTracks.settingVideoTrack.play("settingVideoPreview");
      } else {
        Store.localTracks.settingVideoTrack.close();
        $("#settingVideoPreview").html("");
      }
    }
  }
});
//监听用户设置视频大小
$("#settingVideoResolution").change(function () {
  Store.setting.videoSize = $("#settingVideoResolution").val().split("*").map(Number);
  Setting();
})
//监听用户设置音频设备
$("#audioInputSelect").change(function () {
  Store.setting.audioDevice = $("#audioInputSelect").val();
  Setting();
})
//监听用户设置视频设备
$("#videoInputSelect").change(function () {
  Store.setting.videoDevice = $("#videoInputSelect").val();
  Setting();
})

//监听关闭设置按钮点击
$("#closeSettingBtn").click(function () {
  if ($("#loginSetting").hasClass("show")) {
    $("#loginSetting").removeClass("show");
    Store.localTracks.settingVideoTrack && Store.localTracks.settingVideoTrack.close();
    $("#settingVideoPreview").html("");
  }
});

/**
 * reciveCallPage Page
 **/
// 呼叫
async function makeCall(callMode) {
  var rtmClient = Store.rtmClient;
  var calleeId = "";
  $("#userInputs > input").each(function (index, el) {
    var inputVal = el.value;
    if (inputVal === "") {
      el.focus();
      SystemUI.alertError("请输入完整的用户ID");
      return false;
    }
    calleeId += inputVal;
  });

  if (calleeId.length === 4) {

    //查询状态
    var userOnlineResults = await rtmClient.queryPeersOnlineStatus([calleeId]);
    if (!userOnlineResults[calleeId] || !userOnlineResults[calleeId]) {
      SystemUI.alertError("不允许呼叫，因为对方不在线");
      return;
    }

    if (calleeId == Store.ownUserId) {
      //清空表单
      $("#userInputs > input").each(function (index, el) {
        el.value = "";
      });
      SystemUI.alertError("不能呼叫自己");
      return;
    }
    // 远端用户id
    Store.peerUserId = calleeId;
    //发起呼叫
    var localInvitation = rtmClient.createLocalInvitation(calleeId);
    localInvitation.content = JSON.stringify({
      Mode: callMode,
      Conference: false,
      ChanId: "" + Utils.generateNumber(9),
      UserData: "",
      SipData: "",

    }); //这里将呼叫邀请的内容 设置为视频通讯时使用的频道id - 进入同一个频道
    localInvitation.send();

    //清空表单
    $("#userInputs > input").each(function (index, el) {
      el.value = "";
    });
    // 默认设置 音频
    // 恢复初始设置
    // $("#videoSwitchBtn > i").removeClass("icon-_shipinguanbizhong").addClass(
    // 	"icon-_guaduanyinshipinzhong icon_color_blue");
    $("#mineVideoPreview_bg").css("zIndex", "0");
    $("#audioSwitchBtn > i").removeClass("icon-_yinpinguanbizhong").addClass("icon-_yinpinkaiqizhong icon_color_blue");
    // 
    if (callMode == 0) {
      if (!$("#audioPage").hasClass("d-none")) {
        $("#audioPage").addClass("d-none")
      }
    }

    Store.iscalling = true;
    Store.localInvitation = localInvitation;
    //显示呼叫邀请页面
    $("#calleeIdView").html(localInvitation.calleeId);
    //显示呼叫邀请页面
    !$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
    $("#makeCallPage").hasClass("d-none") && $("#makeCallPage").removeClass("d-none");

    Utils.printLog("[info]", "you sent an invitation to " + calleeId);

    //返回给主叫：被叫已收到呼叫邀请。
    localInvitation.on("LocalInvitationReceivedByPeer", function () {
      Utils.printLog("[info]", "Your invitation has been received by " + localInvitation.calleeId);

      //对方收到邀请，说明对方已经上线，这个时候应该监听对方的在线状态，如果对方离线 主动取消邀请（防止对方刷新或掉线时无法通知服务端）
      rtmClient.subscribePeersOnlineStatus([localInvitation.calleeId]);
      rtmClient.on("PeersOnlineStatusChanged", (userOnlineStatus) => {
        if (userOnlineStatus[localInvitation.calleeId] === "OFFLINE" && Store.iscalling) {
          localInvitation.cancel();
        }
      });
    });

    //返回给主叫：被叫已接受呼叫邀请。
    localInvitation.on("LocalInvitationAccepted", async function (response) {
      Utils.printLog("[info]", localInvitation.calleeId + " accepted your invitation");
      //邀请已结束
      Store.localInvitation = null;
      SystemUI.alertWhole("呼叫邀请成功", "alert-success");
      var invitationResponse = JSON.parse(response);
      //隐藏邀请页，显示会议页面
      !$("#makeCallPage").hasClass("d-none") && $("#makeCallPage").addClass("d-none");

      $("#calleeIdView").html("");
      var invitationContent = JSON.parse(localInvitation.content);
      //加入实时通讯频道
      Store.ownUserId = await Store.rtcClient.join(Config.RTC_APPID, invitationContent.ChanId, null, Store.ownUserId);

      if (invitationResponse.Mode == 1) {
        // 语音通话
        $("#audioPage").hasClass("d-none") && $("#audioPage").removeClass("d-none");
        // 通讯时长
        durationTime = setInterval(function () {
          duration++;
          callDuration(duration, "audioDuration")
        }, 1000);
      } else {
        // 视频通话
        $("#meetPage").hasClass("d-none") && $("#meetPage").removeClass("d-none");
        // 通讯时长
        durationTime = setInterval(function () {
          duration++;
          callDuration(duration, "videoDuration")
        }, 1000);
      }
      //采集并发布媒体流
      await RTC.getUserMediaAndPublish(invitationResponse.Mode);

    });

    //远端用户拒绝了你的呼叫邀请
    localInvitation.on("LocalInvitationRefused", function (response) {
      Utils.printLog("danger", "Your invitation has been refused by " + localInvitation.calleeId);
      //邀请已结束
      Store.iscalling = false;
      Store.localInvitation = null;
      if (response.Reason == "calling") {
        SystemUI.alertWhole("用户正在通话中", "alert-info");
      } else {
        SystemUI.alertWhole("用户拒绝了你的呼叫邀请", "alert-info");
      }
      //隐藏呼叫邀请页面
      !$("#makeCallPage").hasClass("d-none") && $("#makeCallPage").addClass("d-none");
      $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
      $("#calleeIdView").html("");
    });

    //返回给主叫：呼叫邀请已被成功取消。
    localInvitation.on("LocalInvitationCanceled", function () {
      Utils.printLog("[info]", "Local invitation canceled");
      //邀请已结束
      Store.iscalling = false;
      Store.localInvitation = null;
      SystemUI.alertWhole("呼叫邀请已被成功取消", "alert-success");
      //隐藏呼叫邀请页面
      !$("#makeCallPage").hasClass("d-none") && $("#makeCallPage").addClass("d-none");
      $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
      $("#calleeIdView").html("");
      // 如果在设置页面 退出设置页面
      $("#closeSettingBtn").click()
    });

    //返回给主叫：呼叫邀请进程失败。
    localInvitation.on("LocalInvitationFailure", function (reason) {
      Utils.printLog("[info]", "Send local invitation to " + localInvitation.calleeId + " failure");
      //邀请已结束
      Store.iscalling = false;
      Store.localInvitation = null;
      SystemUI.alertWhole("呼叫邀请失败", "alert-danger");
      //隐藏呼叫邀请页面
      !$("#makeCallPage").hasClass("d-none") && $("#makeCallPage").addClass("d-none");
      $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
      $("#calleeIdView").html("");
    });
  }
}

//监听取消呼叫按钮点击
$("#cancelCallBtn").click(function () {

  if (Store.iscalling && Store.localInvitation) {
    Store.localInvitation.cancel();
    Store.iscalling = false;
    Store.localInvitation = null;
    //隐藏呼叫邀请页面
    !$("#makeCallPage").hasClass("d-none") && $("#makeCallPage").addClass("d-none");
    $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
    $("#calleeIdView").html("");
  }
});

//监听接收呼叫按钮点击
function acceptCall(forceAudioCall = false) {
  if (Store.iscalling && Store.remoteInvitation) {
    Store.peerUserId = Store.remoteInvitation.callerId;
    var invitationContent = JSON.parse(Store.remoteInvitation.content);
    var callMode = invitationContent.Mode;
    if (Store.timer) {
      clearTimeout(Store.timer)
    }

    if (callMode === 0 && !forceAudioCall) {
      Store.remoteInvitation.response = JSON.stringify({
        Mode: 0,
        Conference: invitationContent.Conference,
        UserData: "",
        SipData: ""
      });
      $("#meetPage").hasClass("d-none") && $("#meetPage").removeClass("d-none");
    } else if (forceAudioCall || callMode === 1) {
      Store.remoteInvitation.response = JSON.stringify({
        Mode: 1,
        Conference: invitationContent.Conference,
        UserData: "",
        SipData: ""
      });
      $("#audioPage").hasClass("d-none") && $("#audioPage").removeClass("d-none");
    }
    Store.remoteInvitation.accept();

    Store.iscalling = false;
    Store.remoteInvitation = null;
    Store.audioOrvideo = false;
    //隐藏被呼叫页面
    !$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
    $("#callerIdView").html("");
  }
}
//监听拒绝呼叫按钮点击
$("#refuseCallBtn").click(function () {
  if (Store.iscalling && Store.remoteInvitation) {
    if (Store.timer) {
      clearTimeout(Store.timer)
    }
    Store.remoteInvitation.refuse();
    Store.iscalling = false;
    Store.audioOrvideo = false;
    Store.remoteInvitation = null;
    //隐藏被呼叫页面
    !$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
    $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
    $("#callerIdView").html("");
  }
});

/**
 * meet Page
 **/

// 音频开关
$("#audioSwitchBtn").click(function () {
  if (Store.rtcClient && Store.localTracks.hasAudioTrack) {
    Store.localTracks.audioTrack.isMuted = !Store.localTracks.audioTrack.isMuted;
    Store.localTracks.audioTrack.setEnabled(!Store.localTracks.audioTrack.isMuted);
    //显示音频开启关闭
    if (Store.localTracks.audioTrack.isMuted) {
      //关闭
      $("#audioSwitchBtn > i").removeClass("icon-audio_open icon_color_blue").addClass("icon-audio_close");
    } else {
      //打开
      $("#audioSwitchBtn > i").removeClass("icon-audio_close").addClass("icon-audio_open icon_color_blue");
    }
  }
});
// 音频挂断开关
$("#hangupAudioBtn").click(function () {
  $("#hangupBtn").click();
})


//视频挂断开关
$("#hangupBtn").click(function () {
  if (Store.rtcClient) {
    if (Store.timer) {
      clearTimeout(Store.timer)
    }
    // 清除通话时长
    if (durationTime) {
      clearInterval(durationTime);
      duration = 0;
      $("#audioDuration") && $("#audioDuration").text("00:00");
      $("#videoDuration") && $("#videoDuration").text("00:00");
    }


    // Store.localTracks.videoTrack && (Store.localTracks.videoTrack.close(), Store.localTracks.videoTrack = null, Store.hasVideoTrack =
    // 	false);
    // Store.localTracks.audioTrack && (Store.localTracks.audioTrack.close(), Store.localTracks.audioTrack = null, Store.hasAudioTrack =
    // 	false);
    // console.log(Store.rtcClient);
    setTimeout(function () {
        Store.localTracks.videoTrack && (Store.localTracks.videoTrack.close(), Store.localTracks.videoTrack = null,
          Store.hasVideoTrack =
          false);
        Store.localTracks.audioTrack && (Store.localTracks.audioTrack.close(), Store.localTracks.audioTrack = null,
          Store.hasAudioTrack =
          false);
        Store.rtcClient.leave();
        Store.iscalling = false;
        Store.audioOrvideo = false;
        document.getElementById(Store.ownUserId) && document.getElementById(Store.ownUserId).remove();
        document.getElementById(Store.peerUserId) && document.getElementById(Store.peerUserId).remove();
      }, 1500)

      // Store.rtcClient.leave();
      // Store.iscalling = false;

      //隐藏视频通讯页面
      !$("#meetPage").hasClass("d-none") && $("#meetPage").addClass("d-none");
    $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
    // 如果在设置页面 退出设置页面
    $("#closeSettingBtn").click()
    // 恢复初始设置

    $("#mineVideoPreview_bg").css("zIndex", "0");
    $("#audioSwitchBtn > i").removeClass("icon-_yinpinguanbizhong").addClass("icon-_yinpinkaiqizhong icon_color_blue");
  }
});

// 切换语音
$("#switchToAudioCall").click(function () {
  if (Store.rtcClient && Store.localTracks.hasAudioTrack && Store.localTracks.hasVideoTrack) {

    // 禁用视频轨道
    Store.localTracks.videoTrack.setEnabled(false);
    clearInterval(durationTime)
    // 通讯时长
    durationTime = setInterval(function () {
      duration++;
      callDuration(duration, "audioDuration")
    }, 1000);
    // 隐藏视频通讯页面 进入音频通话界面
    !$("#meetPage").hasClass("d-none") && $("#meetPage").addClass("d-none");
    $("#audioPage").hasClass("d-none") && $("#audioPage").removeClass("d-none");
  }
})

// 呼叫时间函数
function callDuration(duration, id) {
  var oMin = 0;
  var oSec = 0;
  oMin = Math.floor(duration / 60);
  if (oMin < 10) {
    oMin = "0" + oMin;
  }
  oSec = Math.floor(duration % 60);
  if (oSec < 10) {
    oSec = "0" + oSec;
  }
  $("#" + id).text(oMin + ":" + oSec);
}
