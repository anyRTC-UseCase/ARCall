// SDK 配置
var Config = {
  RTC_APPID: "", //RTC 应用ID
  RTM_APPID: "", //RTM 应用ID
  RTC_MODE: "live", //RTC 通信模式
  RTC_CODEC: "h264", //RTC 视频编码格式
  SELECT_CAMERA_DEVICE:
    sessionStorage.getItem("defaultCameraDeviceId") || undefined,
  // RTC 私有云配置
  RTC_setParameters: {
    // 是否开启私有云配置
    switch: false,
    // setParameters: {
    //   //配置私有云网关
    //   ConfPriCloudAddr: {
    //     ServerAdd: "",
    //     Port: ,
    //     Wss: false,
    //   },
    // },
  },
  // RTM 私有云配置
  RTM_setParameters: {
    // 是否开启私有云配置
    switch: false,
    // setParameters: {
    //   //配置内网网关
    //   confPriCloudAddr: {
    //     ServerAdd: "",
    //     Port: ,
    //     Wss: false,
    //   },
    // },
  },
};

// 页面工具类
var Utils = {
  // 生成uid
  generateNumber(len) {
    var numLen = len || 8;
    var generateNum = Math.ceil(Math.random() * Math.pow(10, numLen));
    return generateNum < Math.pow(10, numLen - 1)
      ? Utils.generateNumber(numLen)
      : generateNum;
  },
  // 断网处理
  updateOnlineStatus(e) {
    // 仅p2p
    if (!Store.Conference && Store.network.status != 0) {
      const { type } = e;
      Store.localwork = type === "online";
      if (navigator.onLine) {
        Store.networkSet && clearTimeout(Store.networkSet);
        console.log("重连后查询对方状态信息", Store);
        // 重连后查询对方状态信息
        OperationPackge.p2p.networkSendInfo();
        // 连网
      } else {
        Store.networkSet && clearTimeout(Store.networkSet);
        Utils.alertWhole("网络异常");
        // 断网 30s 无网络连接自动挂断
        Store.networkSet = setTimeout(() => {
          console.log("断网 30s 无网络连接自动挂断", Store);
          Store.lineworkRTC = false;
          OperationPackge.p2p.cancelCall(3);
        }, 22000);
        let oTimr = 0;
        let onTimr = setInterval(() => {
          oTimr++;
          if (navigator.onLine || oTimr >= 22) {
            clearInterval(onTimr);
            Store.networkSet && clearTimeout(Store.networkSet);
          }
        }, 1000);
      }
    }
  },
  // 事件打印
  printLog() {
    console.log.apply(this, arguments);
  },
  // 局部警告框
  alertError: function (errorText) {
    var errMsg = $(
      `
        <div class="alert alert-danger" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <span id="errorConten">${errorText}</span>
        </div>
      `
    );
    $("#warningBox").html("").append(errMsg);
    //警告框自动消失
    setTimeout(function () {
      $('[data-dismiss="alert"]').alert("close");
    }, 2000);
  },
  // 全局警告框
  alertWhole: function (text, classStyle) {
    if (!classStyle) {
      classStyle = "alert-danger";
    }
    var oMsg = $(
      `
      <div class="alert ${classStyle}" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <span id="errorConten">${text}</span>
      </div>
    `
    );
    $("#warningWholeBox").html("").append(oMsg);
    //警告框自动消失
    setTimeout(function () {
      $('[data-dismiss="alert"]').alert("close");
    }, 2000);
  },
  //修改标题名称
  setPageTitle: function (title) {
    $("title").html(title);
  },
  // 生成用户标签
  createButtonUser: function (allInputVal) {
    if (Store.invitationUserIds.length <= 5) {
      if (
        !~Store.invitationUserIds.indexOf(allInputVal) &&
        allInputVal != Store.ownUserId
      ) {
        // 并创建新的div存放
        Store.invitationUserIds.push(allInputVal);
        var opt = $(
          '<button type="button" class="btn btn-light user-tag" onclick="Utils.deleteButtonUser(this, ' +
            allInputVal +
            ')">' +
            allInputVal +
            '<i class="iconfont icon-delete_close"></i>' +
            '<i class="iconfont icon-delete_open"></i>' +
            "</button>"
        );
        $("#multiUserBtn").append(opt);
      } else {
        Utils.alertError("该用户重复输入或不能输入自己");
      }
    } else {
      Utils.alertWhole("不能一次邀请超过6个");
    }
  },
  // 删除邀请用户标签
  deleteButtonUser: function (item, userid) {
    if (!!~Store.invitationUserIds.indexOf("" + userid)) {
      item.remove();
      Store.invitationUserIds.splice(
        Store.invitationUserIds.indexOf("" + userid),
        1
      );
      if (Store.invitationUserIds.length == 0) {
        !$("#MultipleCalls").hasClass("disabled") &&
          $("#MultipleCalls").addClass("disabled");
      } else {
        $("#MultipleCalls").hasClass("disabled") &&
          $("#MultipleCalls").removeClass("disabled");
      }
    }
  },
  // 创建用户视图窗口 - 自定义用户状态： 0/1 等待应答/无人应答
  createUserView: async function (userid, status) {
    if ($(`#${userid}Window`).length == 0) {
      // console.log("创建窗口", userid);
      // 创建窗口
      var box = $(
        '<div class="video-preview_small_box" id="' + userid + 'Window"></div>'
      );
      var basicView = $(
        '<div class="d-flex video-preview justify-content-center align-items-center" id="' +
          userid +
          'VideoView">' +
          '<img draggable="false" style="position: absolute;" class="d-flex img-responsive" src="assets/images/logo_title.png" />' +
          "</div>" +
          "<!-- 左下角小方格 -->" +
          '<div class="prompt_little d-flex">' +
          '<i class="iconfont icon-audio_close_slant icon_color_red" id="' +
          userid +
          'AudioState"></i>' +
          "<div>" +
          userid +
          "</div>" +
          "</div>"
      );
      var statusView = $(
        "<!-- 用户不在线 无人应答 拒绝 -->" +
          '<div id="' +
          userid +
          'StatusView" class="video-preview_state d-flex justify-content-center align-items-center">' +
          '<div class="video-preview_status d-flex flex-column align-items-center">' +
          '<span><i class="iconfont icon-loading video-icon_font"></i></span>' +
          '<span id="' +
          userid +
          'Status">' +
          (status === 1 ? "无人应答" : status === 0 && "等待应答") +
          "</span>" +
          "</div>" +
          "</div>"
      );
      box.append(basicView);
      if (status === 0 || status === 3) {
        box.append(statusView);
        // 创建计时
        Store.invitationClearTimeouts["Timeouts" + userid] = setTimeout(
          function () {
            Utils.alertWhole("用户" + userid + "60s无人接听");
          },
          Store.invitationTimeout
        );
      }
      $("#mineMutiTitleVideoPreview").append(box);
    } else {
      // console.log("已经创建视图");
      Utils.updateUserViewStatus(userid, 1);
    }
  },
  // 大小屏幕切换
  switchover: function (user) {
    $(`#${user.uid}Window`).bind("click", async function () {
      // 当前大屏没有用户
      if (!Store.bigMutiUser.uid) {
        if (user.uid !== Store.ownUserId) {
          // 设置为大流
          await Store.rtcClient.setRemoteVideoStreamType(user.uid, 0);
        }
        Store.bigMutiUser = user;
        await user.videoTrack.stop();
        await user.videoTrack.play("peerMutiVideoPreview", {
          fit: "contain",
        });
      } else {
        // 当前大屏用户与想展示用户不符
        if (Store.bigMutiUser.uid !== user.uid) {
          if (Store.ownUserId !== Store.bigMutiUser.uid) {
            // 设置为小流
            await Store.rtcClient.setRemoteVideoStreamType(
              Store.bigMutiUser.uid,
              1
            );
          }
          // 大屏用户切回去原来的小视图
          await Store.bigMutiUser.videoTrack.stop();
          await Store.bigMutiUser.videoTrack.play(
            Store.bigMutiUser.uid + "VideoView",
            {
              fit: "contain",
            }
          );
          if (user.uid !== Store.ownUserId) {
            // 设置为大流
            await Store.rtcClient.setRemoteVideoStreamType(user.uid, 0);
          }
          //当前点击的小窗口切换到大屏
          Store.bigMutiUser = user;
          await user.videoTrack.stop();
          await user.videoTrack.play("peerMutiVideoPreview", {
            fit: "contain",
          });
        } else {
          if (user.uid !== Store.ownUserId) {
            // 设置为小流
            await Store.rtcClient.setRemoteVideoStreamType(user.uid, 1);
          }
          console.log("切换至小品");
          await user.videoTrack.stop();
          await user.videoTrack.play(user.uid + "VideoView", {
            fit: "contain",
          });

          Store.bigMutiUser = {};
        }
      }
    });
  },
  // 更新用户在线状态
  updateUserViewStatus: function (userid, status) {
    // console.log("更新用户在线状态");
    Store.invitationUserIds.map(function (item) {
      if (item === userid) {
        if (status === 1 || status === 2) {
          // 自定义用户状态： 0/1/2/3 无人应答/对方同意/对方拒绝/对方不在线
          $("#" + userid + "StatusView").remove();
          // 停止计时
          Store.invitationClearTimeouts["Timeouts" + userid] &&
            clearTimeout(Store.invitationClearTimeouts["Timeouts" + userid]);
        } else {
          $("#" + userid + "Status").html(
            status === 0 ? "等待应答" : status === 2 && "对方拒绝"
          );
        }
      }
    });
  },
  // 删除用户视图窗口
  deleteUserView: async function (userid) {
    // console.log("删除用户视图", userid);
    // 停止计时
    Store.invitationClearTimeouts["Timeouts" + userid] &&
      clearTimeout(Store.invitationClearTimeouts["Timeouts" + userid]);
    Store.invitationUserIds.map(function (item, index) {
      if (item === userid) {
        Store.invitationUserIds.splice(index, 1);
      }
    });
    // 如果删除的视图有大视图，清空大视图存储数据
    if (Store.bigMutiUser && Store.bigMutiUser.uid === userid) {
      Store.bigMutiUser = {};
    }
    $("#" + userid + "Window") && (await $("#" + userid + "Window").remove());
    // 频道内剩余两人时
    var oUserData = await Store.rtmChannel.getMembers();
    if (oUserData.length < 2) {
      // 释放资源
      await SdkPackge.RTC.LocalTracksClose();
      await PageShow.initSetingMulti(); // 恢复初始
      // 恢复默认
      await OperationPackge.public.restoreDefault();
      // 显示首页
      await PageShow.showIndex();
    }
  },
  // 更新用户音频状态
  updateUserAudioState: function (userid, haveAudio) {
    if (haveAudio) {
      $("#" + userid + "AudioState").hasClass("icon-audio_close_slant") &&
        $("#" + userid + "AudioState").removeClass("icon-audio_close_slant");
    } else {
      !$("#" + userid + "AudioState").hasClass("icon-audio_close_slant") &&
        $("#" + userid + "AudioState").addClass("icon-audio_close_slant");
    }
  },
  // 用户ID输入  用户删除id (仅能输入一位用户)
  inputChangId: function (oid) {
    //监听用户ID输入
    $(oid).bind("input propertychange", function (event) {
      var inputVal = $(this).val();
      var reg = /^[0-9]+$/;
      if (!reg.test(inputVal)) {
        $(this).val("");
      } else {
        $(this).next("input").select();
        $(this).next("input").focus();
      }
      var oItem = "";
      for (var i = 0; i < $(oid).length; i++) {
        oItem = oItem + $(oid)[i].value;
      }
      if (oItem.length == 4) {
        $("#p2pAudioMakeCall").hasClass("disabled") &&
          $("#p2pAudioMakeCall").removeClass("disabled");
        $("#p2pVideoMakeCall").hasClass("disabled") &&
          $("#p2pVideoMakeCall").removeClass("disabled");
        oItem = "";
      } else {
        !$("#p2pAudioMakeCall").hasClass("disabled") &&
          $("#p2pAudioMakeCall").addClass("disabled");
        !$("#p2pVideoMakeCall").hasClass("disabled") &&
          $("#p2pVideoMakeCall").addClass("disabled");
      }
    });

    //监听用户删除id
    $(oid).keydown(function (event) {
      //删除往前 添加往后
      if ($(this).index() < 4) {
        if (event.keyCode == 46 || event.keyCode == 8) {
          if (this.value === "") {
            $(this).prev("input").val("");
            $(this).prev("input").focus();
          } else {
            this.value = "";
          }
          // 按钮变暗
          !$("#p2pAudioMakeCall").hasClass("disabled") &&
            $("#p2pAudioMakeCall").addClass("disabled");
          !$("#p2pVideoMakeCall").hasClass("disabled") &&
            $("#p2pVideoMakeCall").addClass("disabled");
        }
      }
    });
  },
  // 用户ID输入  用户删除id (输入多位用户并输出)
  inputChangIds: function () {
    // 监听用户ID输入 - 创建用户用户标签
    $("#multiUserInputs > input").bind(
      "input propertychange",
      function (event) {
        var inputVal = $(this).val();
        var reg = /^[0-9]+$/;
        if (!reg.test(inputVal)) {
          $(this).val("");
        } else {
          $(this).next("input").select();
          $(this).next("input").focus();
          var allInputVal = "";
          $("#multiUserInputs > input").each(function () {
            allInputVal += this.value;
          });
          // 筛选并创建用户标签
          if (allInputVal.length === 4) {
            // 生成用户标签
            Utils.createButtonUser(allInputVal);
            // 清空所有输入框
            $("#multiUserInputs > input").each(function () {
              this.value = "";
            });
            $("#multiUserInputs > input")[0].focus();
          }
        }
        if (Store.invitationUserIds.length == 0) {
          !$("#MultipleCalls").hasClass("disabled") &&
            $("#MultipleCalls").addClass("disabled");
        } else {
          $("#MultipleCalls").hasClass("disabled") &&
            $("#MultipleCalls").removeClass("disabled");
        }
      }
    );
    // 监听用户删除id
    $("#multiUserInputs > input").keydown(function (event) {
      // 删除往前 添加往后
      if ($(this).index() < 4) {
        if (event.keyCode == 46 || event.keyCode == 8) {
          if (this.value === "") {
            $(this).prev("input").val("");
            $(this).prev("input").focus();
          } else {
            this.value = "";
          }
        }
      }
    });
  },
};

// 本地数据存储
var Store = {
  repetitionClick: false, // 按钮重复点击标记
  Conference: false, // 选择的呼叫模式  false: p2p呼叫  true: 多人呼叫
  Calling: false, // 正在通话中(标识)
  JoinRTCChannel: false, // 加入 RTC 频道(标识)
  rtcClient: null, // 存放 RTC 客户端
  rtmClient: null, // 存放 RTM 客户端
  rtmChannel: null, // 存放 RTM 频道实例
  localInvitation: null, // 存放主叫邀请实例
  invitationClearTimeouts: {}, // 存放多个有效期计时(定时器仅多人呼叫使用)
  bigMutiUser: {}, // 大屏展示(仅多人呼叫使用)
  recordUser: [], // 记录页面展示的音视频轨道(仅多人呼叫使用)
  remoteInvitation: null, // 存放被叫邀请实例
  invitationTimeout: 58 * 1000, // 邀请有效期限
  invitationClearTimeout: null, // 邀请有效期计时(定时器)
  callDurationInterval: 0, // 通话时长
  callDurationClearInterval: null, // 通话时长计时(定时器)
  ownUserId: "" + Utils.generateNumber(4), //自己的用户ID - 这里需要转字符串
  peerUserId: "", // 远端的用户的ID
  // peerUserIdRTM: "", // 远端用户RTM的id
  channelId: "" + Utils.generateNumber(9), // 频道房间
  // RTC 本地采集的音视频轨道
  localTracks: {
    videoTrack: null,
    audioTrack: null,
  },
  // RTC 远端视频轨道
  remoteVideoTracks: null,
  // 设置
  setting: {
    // p2p设置
    // 是否显示视频相关数据
    videoDataShow: false,
    // 数据显示定时器
    videoStatsInterval: null,

    videoSize: [1920, 1080], //设置视频采集的分辨率大小
    audioDevice: "default", // 设置音频设备ID
    videoDevice: "default", // 设置视频设备ID
    // 多人设置
    enableAudio: true, // 声音开关
    enableVideo: true, // 视频开关
  },
  invitationUserIds: [], // 存放多人通话的用户id
  // 接听后频道无人
  callChannelPro: null,
  callChannelProTime: 15000,

  localwork: true, // 本地网络
  lineworkRTM: true, // RTM网络连接状态
  lineworkRTC: true, // RTC网络连接状态
  // 断网相关(p2p)
  network: {
    // type: "rtm", // 断网时所在页面 rtm rtc
    calltype: 0, // 呼叫类型 0:主叫 1:被叫
    status: 0, // 当前状态 呼叫中:1 已接受:2 挂断:0
    Mode: 0, // 通话类型 语音、视频
  },
  networkSet: null, // 断网定时挂断
  networkTime: 30000, // 断网定时挂断时间
  remodVideoEnd: null, // 远端断网定时器
  remodVideoEndTime: 10000,
  networkReconnection: null, // 断网重连后发送信息无响应
  networkReconnectionTime: 10000,
};
// 页面隐藏显示操作类
var PageShow = {
  // 显示首页
  showIndex: function () {
    !$("#meetPage").hasClass("d-none") && $("#meetPage").addClass("d-none");
    $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
    !$("#loginForm").hasClass("d-none") && $("#loginForm").addClass("d-none");
    !$("#loginMutiFprm").hasClass("d-none") &&
      $("#loginMutiFprm").addClass("d-none");
    $("#loginHome").hasClass("d-none") && $("#loginHome").removeClass("d-none");
    !$("#makeCallPage").hasClass("d-none") &&
      $("#makeCallPage").addClass("d-none");
    !$("#reciveCallPage").hasClass("d-none") &&
      $("#reciveCallPage").addClass("d-none");
    !$("#audioPage").hasClass("d-none") && $("#audioPage").addClass("d-none");
    !$("#meetMutiPage").hasClass("d-none") &&
      $("#meetMutiPage").addClass("d-none");
  },
  // 初始设置 (P2P)
  initSetingP2P: function () {
    // 清空所有输入框 (p2p)
    $("#userInputs > input").each(function () {
      this.value = "";
    });
    // 音频通话计时
    $("#audioDuration").html("00:00");
    // 视频通话计时
    $("#videoDuration").html("00:00");
    $("#userInputs > input")[0].focus();
    $("#mineVideoPreview_bg").css("zIndex", "0");
    $("#audioSwitchBtn > i")
      .removeClass("icon-_yinpinguanbizhong")
      .addClass("icon-_yinpinkaiqizhong icon_color_blue");
    $("#mineVideoPreview").html($("#mineVideoPreview_bg"));
    $("#peerVideoPreview").html($("#peerVideoPreview_bg"));
    !$("#p2pAudioMakeCall").hasClass("disabled") &&
      $("#p2pAudioMakeCall").addClass("disabled");
    !$("#p2pVideoMakeCall").hasClass("disabled") &&
      $("#p2pVideoMakeCall").addClass("disabled");
    !$("#MultipleCalls").hasClass("disabled") &&
      $("#MultipleCalls").addClass("disabled");
    $("#loginMutiSetting").hasClass("show") &&
      $("#loginMutiSetting").removeClass("show");
  },
  // 断网重连(p2p)
  networkP2P: function () {
    $("#peerVideoPreview").html($("#peerVideoPreview_bg"));
  },
  // 断网远端显示/隐藏(p2p)
  networkRemoShow: function (fase = true) {
    $("#peerVideoPreview").html("");
    fase
      ? $("#peerVideoPreview").addClass("video-preview_big_network")
      : $("#peerVideoPreview").removeClass("video-preview_big_network");
  },
  // 初始设置 (多人)
  initSetingMulti: function () {
    $("#mineMutiTitleVideoPreview").html(""); // 清空小窗口
    $("#peerMutiVideoPreview").html($("#peerMutiVideoPreview img")); // 清空大窗口
    $("#callerIdView").html("");
    $("#multiUserBtn").html(""); // 清空生成的标签
    $("#loginMutiSetting").hasClass("show") &&
      $("#loginMutiSetting").removeClass("show");
  },
  // 登录 RTM
  loginRTM: function () {
    $(".own-user-id-view").html(Store.ownUserId);
    $("#openP2PInvite").attr("disabled", false);
    $("#openMultiInvite").attr("disabled", false);
  },
  // 语音呼叫邀请页面
  makeVoiceCall: function () {
    $("#calleeIdView").html(Store.localInvitation.calleeId);
    !$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
    !$("#makeCallPage").hasClass("d-none") &&
      $("#makeCallPage").addClass("d-none");
    $("#audioPage").hasClass("d-none") && $("#audioPage").removeClass("d-none");
  },
  // 视频呼叫邀请页面
  makeVideoCall: function () {
    $("#calleeIdView").html(Store.localInvitation.calleeId);
    !$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
    !$("#audioPage").hasClass("d-none") && $("#audioPage").addClass("d-none");
    $("#makeCallPage").hasClass("d-none") &&
      $("#makeCallPage").removeClass("d-none");
  },
  // 被呼叫页面 是否转语音
  toSpeech: function (params) {
    params === 1
      ? $("#changAudioBtn").addClass("d-none")
      : ($(".switch-audio-call_item").fadeIn(),
        $("#changAudioBtn").removeClass("d-none"));
  },
  // 显示被呼叫页面
  showCalledPage: function () {
    $("#callerIdView").html(Store.remoteInvitation.callerId);
    !$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
    $("#reciveCallPage").hasClass("d-none") &&
      $("#reciveCallPage").removeClass("d-none");
  },
  // 隐藏呼叫邀请页面
  hiddenCallPage: function () {
    !$("#makeCallPage").hasClass("d-none") &&
      $("#makeCallPage").addClass("d-none");
    $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
    !$("#loginForm").hasClass("d-none") && $("#loginForm").addClass("d-none");
    !$("#loginMutiFprm").hasClass("d-none") &&
      $("#loginMutiFprm").addClass("d-none");
    $("#loginHome").hasClass("d-none") && $("#loginHome").removeClass("d-none");
    $("#calleeIdView").html("");
    // 如果在设置页面 退出设置页面
    $("#closeSettingBtn").click();
  },
  // 隐藏被呼叫页面
  hiddenCalledPage: function () {
    !$("#reciveCallPage").hasClass("d-none") &&
      $("#reciveCallPage").addClass("d-none");
    $("#callerIdView").html("");
  },
  // 显示视频页面
  showVideoPage: function () {
    !$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
    !$("#audioPage").hasClass("d-none") && $("#audioPage").addClass("d-none");
    $("#meetPage").hasClass("d-none") && $("#meetPage").removeClass("d-none");
  },
  // 显示语音页面
  showVoicePage: function () {
    !$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
    !$("#meetPage").hasClass("d-none") && $("#meetPage").addClass("d-none");
    $("#audioPage").hasClass("d-none") && $("#audioPage").removeClass("d-none");
  },
  // 音频开关(p2p)
  audioSwitch: function () {
    if (Store.localTracks.audioTrack) {
      Store.localTracks.audioTrack.isMuted
        ? $("#audioSwitchBtn > i")
            .removeClass("icon-audio_open icon_color_blue")
            .addClass("icon-audio_close")
        : $("#audioSwitchBtn > i")
            .removeClass("icon-audio_close")
            .addClass("icon-audio_open icon_color_blue");
    }
  },

  // 显示会议页面 (多人)
  showMeetPage: function () {
    !$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
    !$("#audioPage").hasClass("d-none") && $("#audioPage").addClass("d-none");
    !$("#meetPage").hasClass("d-none") && $("#meetPage").addClass("d-none");
    !$("#reciveCallPage").hasClass("d-none") &&
      $("#reciveCallPage").addClass("d-none");
    $("#meetMutiPage").hasClass("d-none") &&
      $("#meetMutiPage").removeClass("d-none");
  },
  // 本地麦克风状态
  setEnableAudio: function (enable) {
    if (enable) {
      !$("#localAudioEnableIcon").hasClass("icon-audio_open") &&
        $("#localAudioEnableIcon").addClass("icon-audio_open");
      $("#localAudioEnableIcon").hasClass("icon-audio_close") &&
        $("#localAudioEnableIcon").removeClass("icon-audio_close");
    } else {
      $("#localAudioEnableIcon").hasClass("icon-audio_open") &&
        $("#localAudioEnableIcon").removeClass("icon-audio_open");
      !$("#localAudioEnableIcon").hasClass("icon-audio_close") &&
        $("#localAudioEnableIcon").addClass("icon-audio_close");
    }
  },
  // 本地摄像头开关
  setEnableVideo: function (enable) {
    if (enable) {
      !$("#localVideoEnableIcon").hasClass("icon-video_open") &&
        $("#localVideoEnableIcon").addClass("icon-video_open");
      $("#localVideoEnableIcon").hasClass("icon-video_close") &&
        $("#localVideoEnableIcon").removeClass("icon-video_close");
    } else {
      $("#localVideoEnableIcon").hasClass("icon-video_open") &&
        $("#localVideoEnableIcon").removeClass("icon-video_open");
      !$("#localVideoEnableIcon").hasClass("icon-video_close") &&
        $("#localVideoEnableIcon").addClass("icon-video_close");
    }
  },
};

// SDK 相关封装
var SdkPackge = {
  // SDK 相关环境匹配
  Support: {
    // 硬件设备支持
    hardwareSupport: async function () {
      var [cameras, microhones] = await Promise.all([
        ArRTC.getCameras(),
        ArRTC.getMicrophones(),
      ]);
      if (cameras.length === 0 && microhones.length === 0) {
        Utils.alertWhole("缺少麦克风和摄像头设备", "alert-danger");
        $("#MultipleCalls").prop("disabled", true);
        return false;
      } else {
        if (cameras.length === 0) {
          Store.setting.enableVideo = false;
          $("#userVideoCameraSetting").prop("disabled", true);
        }
        if (microhones.length === 0) {
          Store.setting.enableAudio = false;
          $("#userMicrophoneSetting").prop("disabled", true);
        }
      }
      // 视频设备列表
      SdkPackge.Support.camerasList(cameras);
      // 音频设备列表
      SdkPackge.Support.microhonesList(microhones);
      return true;
    },
    // 视频设备状态变化
    cameraChanged: async function (info) {
      Utils.alertWhole("您的视频设备发生变化");
      await SdkPackge.Support.hardwareSupport();
    },
    // 音频设备状态变化
    microphoneChanged: async function (info) {
      Utils.alertWhole("您的音频设备发生变化");
      await SdkPackge.Support.hardwareSupport();
    },
    // 视频设备列表(可选择)
    camerasList: function (cameras) {
      $("#videoInputSelect").html("");
      if (cameras.length > 0) {
        cameras.map(function (camera, index) {
          var label = camera.label !== "" ? camera.label : "Camera " + index;
          var opt = $(
            '<option value="' + camera.deviceId + '">' + label + "</option>"
          );
          $("#videoInputSelect").append(opt);
        });
        Store.setting.videoDevice = cameras[0].deviceId;
      }
    },
    // 音频设备列表(可选择)
    microhonesList: function (microhones) {
      $("#audioInputSelect").html("");
      if (microhones.length > 0) {
        microhones.map(function (camera, index) {
          var label =
            camera.label !== "" ? camera.label : "Microphone " + index;
          var opt = $(
            '<option value="' + camera.deviceId + '">' + label + "</option>"
          );
          $("#audioInputSelect").append(opt);
        });
        Store.setting.audioDevice = microhones[0].deviceId;
      }
    },
  },
  // RTC 相关
  RTC: {
    // RTC 初始化
    init: function () {
      // console.log("初始化RTC");
      // 创建RTC客户端
      Store.rtcClient = ArRTC.createClient({
        mode: Config.RTC_MODE,
        codec: Config.RTC_CODEC,
      });
      // 配置私有云
      Config.RTC_setParameters.switch
        ? Store.rtcClient.setParameters(Config.RTC_setParameters.setParameters)
        : "";
      // RTC SDK 监听用户发布
      Store.rtcClient.on("user-published", SdkPackge.RTC.userPublished);
      // RTC SDK 监听用户取消发布
      Store.rtcClient.on("user-unpublished", SdkPackge.RTC.userUnpublished);
      //  RTC SDK 监听用户加入频道成功
      Store.rtcClient.on("user-joined", SdkPackge.RTC.userJoined);
      // RTC SDK 监听用户离开频道
      Store.rtcClient.on("user-left", SdkPackge.RTC.userLeft);
      // RTC SDK 连接状态
      Store.rtcClient.on(
        "connection-state-change",
        SdkPackge.RTC.connectionStateChange
      );
    },
    // 用户发布
    userPublished: async function (user, mediaType) {
      // 订阅用户发布的音视频
      await Store.rtcClient.subscribe(user, mediaType);
      // console.log("用户" + user.uid + "发布" + mediaType);
      Utils.printLog("[info] subscribe success");
      // 模式判断 多人/p2p
      Store.Conference
        ? OperationPackge.multi.userPublished(user, mediaType)
        : OperationPackge.p2p.userPublished(user, mediaType);
    },
    // 用户取消发布
    userUnpublished: async function (user, mediaType) {
      Utils.printLog("[info] user-unpublished success");
      // 模式判断 多人/p2p
      Store.Conference
        ? OperationPackge.multi.userUnpublished(user, mediaType)
        : OperationPackge.p2p.userUnpublished(user, mediaType);
    },
    // 用户加入频道
    userJoined: async function (user) {
      // console.log("用户加入频道" + user.uid);
      // 多人操作
      if (Store.Conference) {
        // 更新视图
        Utils.updateUserViewStatus(user.uid, 1);
      } else {
        OperationPackge.p2p.userJoined(user);
      }
    },
    // 用户离开频道
    userLeft: async function (user, reason) {
      // console.log("用户离开频道", user);
      // 模式判断 多人/p2p
      Store.Conference
        ? OperationPackge.multi.userLeft(user, reason)
        : OperationPackge.p2p.userLeft(user, reason);
    },
    // SDK 与服务器的连接状态发生改变
    connectionStateChange: async function (curState, revState, reason) {
      Store.lineworkRTC =
        curState == "CONNECTED" || curState == "DISCONNECTED" ? true : false;
      if (curState != "DISCONNECTED") {
        Utils.alertWhole(
          Store.lineworkRTC ? "RTC 连接成功" : "RTC 连接中",
          Store.lineworkRTC ? "alert-success" : "alert-info"
        );
      }
    },

    // 本地采集用户音视频
    getUserMedia: async function () {
      var [cameras, microhones] = await Promise.all([
        ArRTC.getCameras(),
        ArRTC.getMicrophones(),
      ]);
      if (cameras.length > 0 && microhones.length > 0) {
        [Store.localTracks.audioTrack, Store.localTracks.videoTrack] =
          await ArRTC.createMicrophoneAndCameraTracks(
            {
              microphoneId: Store.setting.audioDevice,
            },
            {
              cameraId: Store.setting.videoDevice,
              encoderConfig: {
                // bitrateMax: 1130,
                // bitrateMin: ,
                frameRate: 15,
                height: Store.setting.videoSize[1],
                width: Store.setting.videoSize[0],
              },
            }
          );
      } else {
        if (cameras.length > 0) {
          Store.localTracks.videoTrack = await ArRTC.createCameraVideoTrack({
            cameraId: Store.setting.videoDevice,
            encoderConfig: {
              bitrateMax: 1130,
              // bitrateMin: ,
              frameRate: 15,
              height: Store.setting.videoSize[1],
              width: Store.setting.videoSize[0],
            },
          }).catch(function (err) {
            console.log("err => ", err);
          });
        }
        if (microhones.length > 0) {
          Store.localTracks.audioTrack = await ArRTC.createMicrophoneAudioTrack(
            {
              microphoneId: Store.setting.audioDevice,
            }
          ).catch(function (err) {
            console.log("err => ", err);
          });
        }
      }
      // 音频展示(p2p)
      PageShow.audioSwitch();
    },
    // 发布本地采集的音视频track
    publishLocalTracks: async function () {
      if (Store.localTracks.videoTrack || Store.localTracks.audioTrack) {
        // 设置主播身份
        await Store.rtcClient.setClientRole("host");
        // 发布
        console.log(Store.localTracks);
        const oArray = [];
        Store.localTracks.videoTrack &&
          oArray.push(Store.localTracks.videoTrack);
        Store.localTracks.audioTrack &&
          oArray.push(Store.localTracks.audioTrack);
        if (oArray.length == 2) {
          await Store.rtcClient.publish(oArray);
        } else {
          await Store.rtcClient.publish(
            Store.localTracks.videoTrack || Store.localTracks.audioTrack
          );
        }
      }
    },
    // 取消本地发布
    unpublishLocalTracks: async function () {
      // 取消本地音频发布
      Store.localTracks.audioTrack &&
        Store.localTracks.audioTrack.on("track-ended", () => {
          Store.rtcClient.unpublish(Store.localTracks.audioTrack);
        });
      // 取消本地视频发布
      Store.localTracks.videoTrack &&
        Store.localTracks.videoTrack.on("track-ended", () => {
          Store.rtcClient.unpublish(Store.localTracks.videoTrack);
          $("#" + Store.ownUserId + "VideoView").html(
            $("#" + Store.ownUserId + "VideoView" + " " + "img")
          );
        });
    },
    // 释放采集设备
    LocalTracksClose: function () {
      Store.localTracks.videoTrack &&
        (Store.localTracks.videoTrack.close(),
        (Store.localTracks.videoTrack = null));
      Store.localTracks.audioTrack &&
        (Store.localTracks.audioTrack.close(),
        (Store.localTracks.audioTrack = null));
    },
  },
  // RTM 相关
  RTM: {
    // RTM 初始化
    init: function () {
      // 创建 RTM 客户端
      // console.log("初始化RTM")
      Store.rtmClient = ArRTM.createInstance(Config.RTM_APPID);
      // 配置私有云
      Config.RTM_setParameters.switch
        ? Store.rtmClient.setParameters(Config.RTM_setParameters.setParameters)
        : "";
      // 配置私有云
      // 登录 RTM
      Store.rtmClient
        .login({
          uid: Store.ownUserId,
        })
        .then(function () {
          Store.rtcLogin = true;
          // 页面操作
          PageShow.loginRTM();
        })
        .catch(function (err) {
          Store.rtcLogin = false;
          Utils.alertWhole("RTM 登录失败", "alert-danger");
        });

      // 监听收到来自主叫的呼叫邀请
      Store.rtmClient.on(
        "RemoteInvitationReceived",
        SdkPackge.RTM.RemoteInvitationReceived
      );
      // 监听收到来自对端的点对点消息
      Store.rtmClient.on("MessageFromPeer", SdkPackge.RTM.MessageFromPeer);
      // 通知 SDK 与 RTM 系统的连接状态发生了改变
      Store.rtmClient.on(
        "ConnectionStateChanged",
        SdkPackge.RTM.ConnectionStateChanged
      );
    },
    // 收到来自主叫的呼叫邀请
    RemoteInvitationReceived: async function (remoteInvitation) {
      Utils.printLog(
        "[info]",
        "You recive an invitation from " + remoteInvitation.callerId
      );
      // 是否正在通话
      if (Store.Calling) {
        // 正在通话中
        await OperationPackge.public.callIng(remoteInvitation);
      } else {
        // 存放被叫实例
        Store.remoteInvitation = remoteInvitation;
        // 解析主叫呼叫信息
        var invitationContent = JSON.parse(remoteInvitation.content);
        // 关闭设置
        await OperationPackge.p2p.closeSeting();
        // 标识为正在通话中
        Store.Calling = true;
        if (
          !invitationContent.VidCodec ||
          !invitationContent.AudCodec ||
          (invitationContent.VidCodec &&
            invitationContent.VidCodec.indexOf("H264") !== -1) ||
          (invitationContent.AudCodec &&
            invitationContent.AudCodec.indexOf("Opus") !== -1)
        ) {
          Store.Conference = invitationContent.Conference;
          // 远端
          Store.peerUserId = remoteInvitation.callerId;
          Store.Conference // 多人逻辑操作
            ? OperationPackge.multi.RemoteInvitationReceived(invitationContent) // p2p逻辑操作
            : OperationPackge.p2p.RemoteInvitationReceived(invitationContent);
        } else {
          // 手表不支持 web 端
          await OperationPackge.public.watches(remoteInvitation);
        }
      }
    },
    // 收到来自对端的点对点消息
    MessageFromPeer: function (message, peerId, messageProps) {
      message.text = JSON.parse(message.text);
      // console.log("收到来自对端的点对点消息", message);
      switch (message.text.Cmd) {
        case "SwitchAudio":
          // 视频转语音
          var oTime = setInterval(async function () {
            if (Store.localTracks.videoTrack) {
              clearInterval(oTime);
              // 语音通话
              await PageShow.showVoicePage();

              // 关闭视频并释放
              (await Store.localTracks.videoTrack) &&
                (Store.localTracks.videoTrack.close(),
                (Store.localTracks.videoTrack = null));
              Store.setting.videoStatsInterval &&
                clearInterval(Store.setting.videoStatsInterval);
              // console.log("关闭视频并释放", Store.localTracks.videoTrack);
              // 显示音频通话时长
              OperationPackge.public.communicationDuration("audioDuration");
              Utils.alertWhole("视频通话转为音频通话", "alert-success");
            }
          }, 500);
          break;
        case "EndCall":
          if (Store.localTracks.audioTrack || Store.localTracks.videoTrack) {
            OperationPackge.p2p.hangupInfo();
          }
          break;
        case "CallState":
          // 收到此信令返回给对方状态
          if (peerId === Store.peerUserId) {
            Store.networkReconnection &&
              clearTimeout(Store.networkReconnection);
          }
          // 回复
          OperationPackge.p2p.replySendInfo(peerId);
          break;
        case "CallStateResult":
          Store.networkReconnection && clearTimeout(Store.networkReconnection);
          console.log("本地断网重连后对方状态", message, peerId);
          break;
        default:
          break;
      }
    },
    // SDK 与 RTM 系统的连接状态
    ConnectionStateChanged: async function (newState, reason) {
      Store.lineworkRTM = newState == "CONNECTED" ? true : false;
      Utils.alertWhole(
        Store.lineworkRTM ? "RTM 连接成功" : "RTM 连接中",
        Store.lineworkRTM ? "alert-success" : "alert-info"
      );
      console.log("SDK 与 RTM 系统的连接状态", newState, reason);
      if (newState === "RECONNECTING" && Store.network.status != 0) {
        Utils.alertWhole("网络异常");
      }
    },
  },
  // RTM 频道相关(多人通话使用)
  RTMChannel: {
    init: function () {
      Store.rtmChannel = Store.rtmClient.createChannel(Store.channelId);
      // 监听频道消息
      Store.rtmChannel.on(
        "ChannelMessage",
        OperationPackge.multi.ChannelMessage
      );
      // 监听频道人员加入, 如果人数超过512，该回调失效
      Store.rtmChannel.on("MemberJoined", OperationPackge.multi.MemberJoined);
      // 监听频道人员离开
      Store.rtmChannel.on("MemberLeft", OperationPackge.multi.MemberLeft);
    },
  },
};
// 此应用使用的相关逻辑操作封装
var OperationPackge = {
  // 公共的操作
  public: {
    // 回退到首页
    backToHome: async function () {
      !$("#loginForm").hasClass("d-none") && $("#loginForm").addClass("d-none");
      !$("#loginMutiFprm").hasClass("d-none") &&
        $("#loginMutiFprm").addClass("d-none");
      $("#loginHome").hasClass("d-none") &&
        $("#loginHome").removeClass("d-none");
      Utils.setPageTitle("anyrtc 呼叫邀请DEMO - anyRTC");
    },
    // 通讯时长  id 传入要显示的元素id  (现仅提供p2p操作)
    communicationDuration: function (id) {
      // 清除视频通话时长
      Store.callDurationClearInterval &&
        clearInterval(Store.callDurationClearInterval);
      Store.callDurationClearInterval = setInterval(function () {
        Store.callDurationInterval++;
        var oMin = Math.floor(Store.callDurationInterval / 60);
        var oSec = Math.floor(Store.callDurationInterval % 60);
        oMin >= 10 ? oMin : (oMin = "0" + oMin);
        oSec >= 10 ? oSec : (oSec = "0" + oSec);
        $("#" + id).text(oMin + ":" + oSec);
      }, 1000);
    },
    // 本地存储恢复
    restoreDefault: function () {
      // console.log("加入RTC频道", Store.JoinRTCChannel);
      Store.rtcClient && Store.JoinRTCChannel && Store.rtcClient.leave();
      Store.rtmChannel && Store.Conference && Store.rtmChannel.leave();
      // 邀请有效期计时(定时器)
      Store.invitationClearTimeout &&
        clearTimeout(Store.invitationClearTimeout);
      // 清除通话计时
      Store.callDurationClearInterval &&
        (clearInterval(Store.callDurationClearInterval),
        (Store.callDurationClearInterval = null));
      // 清除视频数据展示
      Store.setting.videoStatsInterval &&
        clearInterval(Store.setting.videoStatsInterval);

      Store.networkSet && clearTimeout(Store.networkSet);
      Store.remodVideoEnd && clearTimeout(Store.remodVideoEnd);
      // 恢复
      Object.assign(Store, {
        Conference: false, // 选择的呼叫模式  false: p2p呼叫  true: 多人呼叫
        invitationTimeout: 58 * 1000, // 邀请有效期限
        invitationClearTimeout: null, // 邀请有效期计时(定时器)
        callDurationInterval: 0, // 通话时长
        callDurationClearInterval: null, // 通话时长计时(定时器)
        localInvitation: null, // 存放主叫邀请实例
        remoteInvitation: null, // 存放被叫邀请实例
        rtmChannel: null, // 存放 RTM 频道实例
        Calling: false, // 正在通话中(标识)
        JoinRTCChannel: false, // 加入 RTC 频道(标识)
        //  hangupMuti: false, // 主叫挂断(仅多人使用)
        peerUserId: "", // 远端的用户的ID
        channelId: "" + Utils.generateNumber(9), // 频道房间
        invitationUserIds: [],
        // RTC 本地采集的音视频轨道
        localTracks: {
          videoTrack: null,
          audioTrack: null,
        },
        // 断网相关(p2p)
        network: {
          // type: "rtm", // 断网时所在页面 rtm rtc
          calltype: 0, // 呼叫类型 0:主叫 1:被叫
          status: 0, // 当前状态 呼叫中:1 已接受:2 挂断:0
          Mode: 0, // 通话类型 语音、视频
        },
        networkSet: null,
        remodVideoEnd: null,
      });
    },
    // 正在通话中
    callIng: async function (remoteInvitation) {
      // 是否正在通话中
      // console.log("正在通话中", Store.ownUserId);
      remoteInvitation.response = await JSON.stringify({
        // Reason: "Calling",
        refuseId: Store.ownUserId,
        Reason: "calling",
        Cmd: "Calling",
      });
      await remoteInvitation.refuse();
    },
    // 手表不支持 web 通话
    watches: async function (remoteInvitation) {
      remoteInvitation.response = await JSON.stringify({
        // Reason: "Calling",
        refuseId: Store.ownUserId,
        Reason: "calling",
        Cmd: "platfrom",
      });
      await remoteInvitation.refuse();
    },
  },
  p2p: {
    // 语音呼叫
    makeVoiceCall: async function () {
      // 关闭设置
      await OperationPackge.p2p.closeSeting();
      // 获取输入的用户
      var oPeerId = await OperationPackge.p2p.getPeerUserId();
      // 查询输入用户合法性
      Store.peerUserId = await OperationPackge.p2p.peerUserVaplidity(oPeerId);
      if (Store.peerUserId) {
        Store.repetitionClick = true;
        Store.network = Object.assign(Store.network, {
          // type: "rtm",
          calltype: 0, // 主叫
          status: 1, // 呼叫中
          Mode: 1,
        });
        await OperationPackge.p2p.createLocalInvitationAndSend(1);
        // 恢复初始设置
        await PageShow.initSetingP2P();
        // 显示呼叫邀请页面
        await PageShow.makeVideoCall();
        Store.repetitionClick = false;
      }
    },
    // 视频呼叫
    makeVideoCall: async function () {
      // 关闭设置
      await OperationPackge.p2p.closeSeting();
      var oPeerId = await OperationPackge.p2p.getPeerUserId();
      Store.peerUserId = await OperationPackge.p2p.peerUserVaplidity(oPeerId);
      if (Store.peerUserId) {
        Store.repetitionClick = true;
        Store.network = Object.assign(Store.network, {
          // type: "rtm",
          calltype: 0, // 主叫
          status: 1, // 呼叫中
          Mode: 1,
        });
        await OperationPackge.p2p.createLocalInvitationAndSend(0);
        // 恢复初始设置
        await PageShow.initSetingP2P();
        // 显示呼叫邀请页面
        await PageShow.makeVideoCall();
        Store.repetitionClick = false;

        OperationPackge.p2p.videoStats();
      }
    },
    // 接受呼叫
    acceptCall: async function (type) {
      // console.log("接受呼叫");
      var invitationContent = await JSON.parse(Store.remoteInvitation.content);
      Store.network = await Object.assign(Store.network, {
        // type: "rtm",
        calltype: 1, // 被叫
        status: 2, // 呼叫中
        Mode: invitationContent.Mode,
      });

      if (invitationContent.Mode === 1 || type === "语音呼叫") {
        // 设置响应模式
        Store.remoteInvitation.response = await JSON.stringify({
          Mode: 1,
          Conference: false,
          UserData: "",
          SipData: "",
        });
        // 显示语音页面
        PageShow.showVoicePage();
      } else if (invitationContent.Mode === 0 && type === "视频呼叫") {
        Store.remoteInvitation.response = JSON.stringify({
          Mode: 0,
          Conference: false,
          UserData: "",
          SipData: "",
        });
        OperationPackge.p2p.videoStats();
        // 显示视频页面
        PageShow.showVideoPage();
      }
      // 接受呼叫
      await Store.remoteInvitation.accept();
      await PageShow.hiddenCalledPage();
    },
    // 取消当前通话
    cancelCall: async function (type = 0) {
      Store.invitationClearTimeout &&
        clearTimeout(Store.invitationClearTimeout);
      // 隐藏被呼叫页面
      await PageShow.hiddenCallPage();
      // 页面恢复初始
      await PageShow.initSetingP2P();
      // 回到首页
      await PageShow.showIndex();
      switch (type) {
        case 0:
          Utils.alertWhole("通话已结束", "alert-success");
          break;
        case 1:
          Utils.alertWhole("网络异常，结束通话", "alert-warning");
          break;
        case 2:
          // Utils.alertWhole("已拒绝邀请", "alert-info");
          break;
        case 3:
          Utils.alertWhole("网络连接断开", "alert-warning");
          break;
        default:
          break;
      }
      Store.network = await Object.assign(Store.network, {
        status: 0,
      });

      // 网络正常后
      let oNormal = setInterval(() => {
        if (navigator.onLine) {
          if (Store.lineworkRTC && Store.lineworkRTM) {
            clearInterval(oNormal);
            if (Store.localTracks.audioTrack || Store.localTracks.videoTrack) {
              // Store.peerUserIdRTM ? Store.peerUserIdRTM :
              // 发送挂断信息
              Store.rtmClient &&
                Store.rtmClient
                  .sendMessageToPeer(
                    {
                      text: JSON.stringify({
                        Cmd: "EndCall",
                      }),
                    },
                    Store.peerUserId // 对端用户的 uid。
                  )
                  .catch((err) => {
                    // 你的代码：点对点消息发送失败。
                    // console.log(err);
                  });
              //  释放采集设备
              SdkPackge.RTC.LocalTracksClose();
              OperationPackge.public.restoreDefault();
            } else if (type != 2) {
              if (Store.network.calltype == 0) {
                // 挂断
                Store.localInvitation && Store.localInvitation.cancel();
              } else {
                // 拒绝接听
                Store.remoteInvitation && Store.remoteInvitation.refuse();
              }
            } else {
              OperationPackge.public.restoreDefault();
            }
          }
        }
      }, 200);
    },

    // 音视频设置
    setOperation: async function (data) {
      switch (data) {
        case "分辨率":
          Store.localTracks.videoTrack.setEncoderConfiguration({
            height: Store.setting.videoSize[1],
            width: Store.setting.videoSize[0],
          });
          break;
        case "设置音频设备":
          Store.localTracks.audioTrack.setDevice(Store.setting.audioDevice);
          break;
        case "设置视频设备":
          Store.localTracks.videoTrack.setDevice(Store.setting.videoDevice);
          break;
        default:
          break;
      }
    },
    // 视频相关数据
    videoStats: function () {
      Store.setting.videoStatsInterval &&
        clearInterval(Store.setting.videoStatsInterval);
      if (Store.setting.videoDataShow) {
        // var oa = null;
        Store.setting.videoStatsInterval = setInterval(async function () {
          // 通话总数据
          const oCallAll = await Store.rtcClient.getRTCStats();
          // 本地音频数据
          const oLocalAudio = await Store.rtcClient.getLocalAudioStats();
          // console.log("本地音频数据", oLocalAudio);
          // 本地视频数据
          const oLocalVideo = await Store.rtcClient.getLocalVideoStats();
          // console.log("本地视频数据", oLocalVideo);

          if (oLocalVideo) {
            $("#userLocalVideoData").removeClass("d-none");
            const oLocalVideoList = [
              {
                description: "视频采集分辨率(高*宽)",
                value:
                  (oLocalVideo.captureResolutionHeight || 0) +
                  " * " +
                  (oLocalVideo.captureResolutionWidth || 0),
                unit: "",
              },
              {
                description: "实际发送分辨率(高*宽)",
                value:
                  (oLocalVideo.sendResolutionHeight || 0) +
                  " * " +
                  (oLocalVideo.sendResolutionWidth || 0),
                unit: "",
              },
              {
                description: "视频采集帧率",
                value: oLocalVideo.captureFrameRate || 0,
                unit: "fps",
              },
              {
                description: "网络延迟RTT",
                value: oCallAll.RTT || 0,
                unit: "ms",
              },
              {
                description: "发送带宽",
                value: (
                  (Number(oLocalAudio.sendBitrate || 0) +
                    Number(oLocalVideo.sendBitrate || 0)) /
                  1024 /
                  8
                ).toFixed(3),
                unit: "kB/s",
              },
              {
                description: "接收带宽",
                value: ((Number(oCallAll.RecvBitrate) || 0) / 1024 / 8).toFixed(
                  3
                ),
                unit: "kB/s",
              },
              {
                description: "音频发送丢包率",
                value: Number(oLocalAudio.packetLossRate || 0).toFixed(3),
                unit: "%",
              },
              {
                description: "视频发送丢包率",
                value: Number(oLocalVideo.packetLossRate || 0).toFixed(3),
                unit: "%",
              },
              // {
              //   description: "视频编码格式",
              //   value: oLocalVideo.codecType || "",
              //   unit: "",
              // },
              // {
              //   description: "视频编码延迟",
              //   value: oLocalVideo.encodeDelay || 0,
              //   unit: "ms",
              // },
              // {
              //   description: "视频发送码率",
              //   value: oLocalVideo.sendBitrate || 0,
              //   unit: "bps",
              // },
              // {
              //   description: "发送的视频总字节数",
              //   value: oLocalVideo.sendBytes || 0,
              //   unit: "bytes",
              // },
              // {
              //   description: "发送的视频总包数",
              //   value: oLocalVideo.sendPackets || 0,
              //   unit: "",
              // },
              // {
              //   description: "发送的视频总丢包数",
              //   value: oLocalVideo.sendPacketsLost || 0,
              //   unit: "",
              // },
              // {
              //   description: "视频目标发送码率",
              //   value: oLocalVideo.targetSendBitrate || 0,
              //   unit: "bps",
              // },
              // {
              //   description: "视频总时长",
              //   value: oLocalVideo.totalDuration || 0,
              //   unit: "s",
              // },
              // {
              //   description: "视频总卡顿时长",
              //   value: oLocalVideo.totalFreezeTime || 0,
              //   unit: "s",
              // },
            ];
            $("#userLocalVideoData").html(`
            ${oLocalVideoList
              .map(
                (stat) =>
                  `<p class="stats-row">${stat.description}: ${stat.value} ${stat.unit}</p>`
              )
              .join("")}`);
          } else {
            $("#userLocalVideoData").addClass("d-none");
          }

          // 远端视频数据
          const oRemoVideoData = await Store.rtcClient.getRemoteVideoStats();
          const oRemoVideo = oRemoVideoData[Store.peerUserId];
          // console.log("远端视频数据", oRemoVideo);
          // 远端音频数据
          const oRemoAudioData = await Store.rtcClient.getRemoteAudioStats();
          const oRemoAudio = oRemoAudioData[Store.peerUserId];
          // console.log("远端音频数据", oRemoAudio);
          if (oRemoVideo && oRemoAudio) {
            $("#userRemodeVideoData").removeClass("d-none");
            const oRemoVideoList = [
              {
                description: "视频接收分辨率(高*宽)",
                value:
                  (oRemoVideo.receiveResolutionHeight || 0) +
                  " * " +
                  (oRemoVideo.receiveResolutionWidth || 0),
                unit: "",
              },
              {
                description: "视频接收帧率",
                value: oRemoVideo.receiveFrameRate || 0,
                unit: "fps",
              },
              {
                description: "接收带宽",
                value: (
                  ((Number(oRemoVideo.receiveBitrate) || 0) +
                    (Number(oRemoAudio.receiveBitrate) || 0)) /
                  1024 /
                  8
                ).toFixed(3),
                unit: "kB/s",
              },
              {
                description: "视频接收丢包率",
                value: Number(oRemoVideo.packetLossRate || 0).toFixed(3),
                unit: "%",
              },
              {
                description: "音频接收丢包率",
                value: Number(oRemoAudio.packetLossRate || 0).toFixed(3),
                unit: "%",
              },
              // {
              //   description: "视频解码帧率",
              //   value: oRemoVideo.decodeFrameRate || 0,
              //   unit: "fps",
              // },
              // {
              //   description: "视频渲染帧率",
              //   value: oRemoVideo.renderFrameRate || 0,
              //   unit: "fps",
              // },
              // {
              //   description: "远端视频编码格式",
              //   value: oRemoVideo.codecType || "",
              //   unit: "",
              // },
              // {
              //   description: "传输延迟",
              //   value: oRemoVideo.transportDelay || 0,
              //   unit: "ms",
              // },
              // {
              //   description: "视频端到端延迟",
              //   value: oRemoVideo.end2EndDelay || 0,
              //   unit: "ms",
              // },
              // {
              //   description: "接收视频延迟",
              //   value: oRemoVideo.receiveDelay || 0,
              //   unit: "ms",
              // },
              // {
              //   description: "接收的视频卡顿率",
              //   value: oRemoVideo.freezeRate || 0,
              //   unit: "",
              // },

              // {
              //   description: "接收的视频总字节数",
              //   value: oRemoVideo.receiveBytes || 0,
              //   unit: "bytes",
              // },
              // {
              //   description: "接收的视频总包数",
              //   value: oRemoVideo.receivePackets || 0,
              //   unit: "",
              // },
              // {
              //   description: "接收的视频总丢包数",
              //   value: oRemoVideo.receivePacketsLost || 0,
              //   unit: "",
              // },
              // {
              //   description: "接收的视频总时长",
              //   value: oRemoVideo.totalDuration || 0,
              //   unit: "s",
              // },
              // {
              //   description: "接收的视频总卡顿时长",
              //   value: oRemoVideo.totalFreezeTime || 0,
              //   unit: "s",
              // },
            ];
            $("#userRemodeVideoData").html(`
            ${oRemoVideoList
              .map(
                (stat) =>
                  `<p class="stats-row">${stat.description}: ${stat.value} ${stat.unit}</p>`
              )
              .join("")}`);
          } else {
            $("#userRemodeVideoData").addClass("d-none");
          }
        }, 1000);
      } else {
        $("#userLocalVideoData").addClass("d-none");
        $("#userRemodeVideoData").addClass("d-none");
      }
    },
    // 关闭设置
    closeSeting: function () {
      var oTimeTemporary = setInterval(async function () {
        if (Store.localTracks.videoTrack || Store.localTracks.audioTrack) {
          await clearInterval(oTimeTemporary);
          $("#loginSetting").hasClass("show") &&
            ($("#loginSetting").removeClass("show"),
            $("#loginMutiSetting").hasClass("show") &&
              $("#loginMutiSetting").removeClass("show"),
            await SdkPackge.RTC.LocalTracksClose());
        }
      }, 50);
    },
    // 获取输入的用户
    getPeerUserId: function () {
      var calleeId = "";
      $("#userInputs > input").each(function (index, el) {
        var inputVal = el.value;
        if (inputVal === "") {
          el.focus();
          Utils.alertError("请输入完整的用户ID");
          return false;
        }
        calleeId += inputVal;
      });
      return calleeId;
    },
    // 查询输入用户合法性
    peerUserVaplidity: async function (calleeId) {
      if (calleeId.length === 4) {
        //查询状态
        var userOnlineResults = await Store.rtmClient.queryPeersOnlineStatus([
          calleeId,
        ]);
        if (!userOnlineResults[calleeId] || !userOnlineResults[calleeId]) {
          Utils.alertError("不允许呼叫，因为对方不在线");
          return;
        }
        if (calleeId == Store.ownUserId) {
          //清空表单
          $("#userInputs > input").each(function (index, el) {
            el.value = "";
          });
          Utils.alertError("不能呼叫自己");
          return;
        }
        return calleeId;
      }
    },

    // RTM 主叫: 创建呼叫邀请并发送 (callMode: 视频通话 0 语音通话 1)
    createLocalInvitationAndSend: async function (callMode) {
      // 加入实时通讯频道
      Store.ownUserId = await Store.rtcClient.join(
        Config.RTC_APPID,
        Store.channelId,
        null,
        Store.ownUserId
      );
      Store.JoinRTCChannel = true;
      // 创建呼叫邀请
      Store.localInvitation = Store.rtmClient.createLocalInvitation(
        Store.peerUserId
      );
      // 这里将呼叫邀请的内容 设置为视频通讯时使用的频道id - 进入同一个频道
      Store.localInvitation.content = JSON.stringify({
        Mode: callMode, // 呼叫类型 视频通话 0 语音通话 1
        Conference: false, // 是否是多人会议
        ChanId: Store.channelId, // 频道房间
        UserData: "",
        SipData: "",
        VidCodec: ["H264"],
        AudCodec: ["Opus"],
      });
      // 发送呼叫邀请
      Store.localInvitation.send();
      Utils.printLog("[info]", "you sent an invitation to " + Store.peerUserId);
      // 监听被叫已收到呼叫邀请
      Store.localInvitation.on(
        "LocalInvitationReceivedByPeer",
        OperationPackge.p2p.localInvitationReceivedByPeer
      );
      // 监听被叫已接受呼叫邀请
      Store.localInvitation.on(
        "LocalInvitationAccepted",
        OperationPackge.p2p.localInvitationAccepted
      );
      // 监听被叫拒绝了你的呼叫邀请
      Store.localInvitation.on(
        "LocalInvitationRefused",
        OperationPackge.p2p.localInvitationRefused
      );
      // 监听呼叫邀请进程失败
      Store.localInvitation.on(
        "LocalInvitationFailure",
        OperationPackge.p2p.localInvitationFailure
      );
      // 监听呼叫邀请已被成功取消
      Store.localInvitation.on(
        "LocalInvitationCanceled",
        OperationPackge.p2p.localInvitationCanceled
      );
    },
    // p2p 本地视频视图渲染
    createVideoAdd: function () {
      // console.log("p2p 本地视频视图渲染");
      $("#UserIdChanel").text(Store.ownUserId);
      //预览本地图像
      var videoBox = document.createElement("div");
      videoBox.id = Store.ownUserId;
      videoBox.className = "video-preview_box";
      document.getElementById("mineVideoPreview").appendChild(videoBox);
      Store.localTracks.videoTrack &&
        Store.localTracks.videoTrack.play(videoBox.id, {
          fit: "contain",
        });
    },
    // p2p 远端音视频渲染
    createPeerVideoAdd: function (peer) {
      // 清除容器内其他内容
      $("#peerVideoPreview").html($("#peerVideoPreview_bg"));
      // console.log("p2p 远端音视频渲染");
      var videoBox = document.createElement("div");
      videoBox.id = peer.uid;
      videoBox.className = "video-preview_box";
      document.getElementById("peerVideoPreview").appendChild(videoBox);
      peer.videoTrack &&
        peer.videoTrack.play(videoBox.id, {
          fit: "contain",
        });
    },
    // RTM 主叫: 呼叫邀请有效期
    localInvitationValidity: function () {
      // 呼叫邀请有效期
      Store.invitationClearTimeout = setTimeout(function () {
        Utils.alertWhole("60s无人接听,取消呼叫");
      }, Store.invitationTimeout);
    },
    // RTM 主叫: 被叫已收到呼叫邀请
    localInvitationReceivedByPeer: async function () {
      Utils.printLog(
        "[info]",
        "Your invitation has been received by " + Store.localInvitation.calleeId
      );
      // 标识为正在通话中
      Store.Calling = true;
      // 呼叫邀请有效期开始计时
      OperationPackge.p2p.localInvitationValidity();
      Store.network = Object.assign(Store.network, {
        Mode: 0,
        status: 1,
        calltype: 0,
      });
    },
    // RTM 主叫: 被叫已接受呼叫邀请
    localInvitationAccepted: async function (response) {
      Utils.printLog(
        "[info]",
        Store.localInvitation.calleeId + " accepted your invitation"
      );
      // console.log("p2p 被叫已接受呼叫邀请");
      // 呼叫邀请有效期清除计时
      Store.invitationClearTimeout &&
        clearTimeout(Store.invitationClearTimeout);
      Utils.alertWhole("呼叫邀请成功", "alert-success");
      var invitationResponse = JSON.parse(response);
      // 采集音视频
      await SdkPackge.RTC.getUserMedia();
      // 隐藏邀请页面
      PageShow.hiddenCallPage();
      Store.network = Object.assign(Store.network, {
        Mode: invitationResponse.Mode,
        status: 2,
        calltype: 0,
      });
      if (invitationResponse.Mode == 1) {
        // 语音通话
        PageShow.showVoicePage();
        // 关闭视频并释放
        Store.localTracks.videoTrack &&
          (await Store.localTracks.videoTrack.close(),
          (Store.localTracks.videoTrack = null));
        // 发布媒体流
        await SdkPackge.RTC.publishLocalTracks();
        // 显示通话时长
        OperationPackge.public.communicationDuration("audioDuration");
      } else {
        // 本地预览
        await OperationPackge.p2p.createVideoAdd();
        // 视频通话
        PageShow.showVideoPage();
        // 发布媒体流
        await SdkPackge.RTC.publishLocalTracks();
        // 显示通话时长
        OperationPackge.public.communicationDuration("videoDuration");
      }
    },
    // RTM 主叫: 被叫拒绝了你的呼叫邀请
    localInvitationRefused: async function (response) {
      if (Store.localInvitation) {
        Utils.printLog(
          "danger",
          "Your invitation has been refused by " +
            Store.localInvitation.calleeId
        );
        // console.log("p2p 被叫拒绝了你的呼叫邀请", response);
        // 呼叫邀请有效期清除计时
        Store.invitationClearTimeout &&
          clearTimeout(Store.invitationClearTimeout);
        // 字符串转换
        response ? (response = JSON.parse(response)) : "";
        response.Cmd == "Calling"
          ? Utils.alertWhole("呼叫的用户正在通话中", "alert-info")
          : Utils.alertWhole("用户拒绝了你的呼叫邀请", "alert-info");
        // 本地存储恢复
        OperationPackge.public.restoreDefault();
        // 隐藏呼叫邀请页面
        PageShow.hiddenCallPage();
      }
    },
    // RTM 主叫: 呼叫邀请进程失败
    localInvitationFailure: async function (response) {
      // 呼叫邀请有效期清除计时
      Store.invitationClearTimeout &&
        clearTimeout(Store.invitationClearTimeout);
    },
    // RTM 主叫: 呼叫邀请已被成功取消 (主动挂断)
    localInvitationCanceled: async function () {
      // console.log("p2p 呼叫邀请已被成功取消  主叫主动挂断");
      // 呼叫邀请有效期清除计时
      Store.invitationClearTimeout &&
        clearTimeout(Store.invitationClearTimeout);
      // 本地存储恢复
      await OperationPackge.public.restoreDefault();
      // 隐藏呼叫邀请页面
      PageShow.hiddenCallPage();
    },

    // RTM 被叫: p2p 收到来自主叫的呼叫邀请
    RemoteInvitationReceived: async function (invitationContent) {
      Store.channelId = invitationContent.ChanId;
      Store.network = await Object.assign(Store.network, {
        // type: "rtm",
        calltype: 1, // 被叫
        status: 1, // 呼叫中
        Mode: invitationContent.Mode,
      });
      // console.log("p2p 收到来自主叫的呼叫邀请", Store);
      // 被呼叫页面 转换语音按钮是否显示
      PageShow.toSpeech(invitationContent.Mode);
      // 被呼叫页面展示
      PageShow.showCalledPage();
      // 监听接受呼叫邀请
      Store.remoteInvitation.on(
        "RemoteInvitationAccepted",
        OperationPackge.p2p.RemoteInvitationAccepted
      );
      // 监听拒绝呼叫邀请
      Store.remoteInvitation.on(
        "RemoteInvitationRefused",
        OperationPackge.p2p.RemoteInvitationRefused
      );
      // 监听主叫取消呼叫邀请
      Store.remoteInvitation.on(
        "RemoteInvitationCanceled",
        OperationPackge.p2p.RemoteInvitationCanceled
      );
      // 监听呼叫邀请进程失败
      Store.remoteInvitation.on(
        "RemoteInvitationFailure",
        OperationPackge.p2p.RemoteInvitationFailure
      );
    },
    // RTM 被叫: 接受呼叫邀请成功
    RemoteInvitationAccepted: async function () {
      var invitationContent = JSON.parse(Store.remoteInvitation.response);
      // 接受邀请进入计时，如果频道一定时间内无人加入取消
      Store.callChannelPro = setTimeout(() => {
        console.log("接受邀请进入计时，如果频道一定时间内无人加入取消");
        OperationPackge.p2p.cancelCall(1);
      }, Store.callChannelProTime);
      // RTC 加入房间
      Store.ownUserId = await Store.rtcClient.join(
        Config.RTC_APPID,
        Store.channelId + "",
        null,
        Store.ownUserId
      );
      Store.JoinRTCChannel = true;
      // 采集音视频
      await SdkPackge.RTC.getUserMedia();
      // 隐藏被呼叫页面
      await PageShow.hiddenCalledPage();
      Store.network = Object.assign(Store.network, {
        Mode: invitationContent.Mode,
        status: 2,
        calltype: 1,
      });
      if (invitationContent.Mode == 1) {
        // 语音通话
        await PageShow.showVoicePage();
        // 关闭视频并释放
        Store.localTracks.videoTrack &&
          (await Store.localTracks.videoTrack.close(),
          (Store.localTracks.videoTrack = null));
        // 发布媒体流
        await SdkPackge.RTC.publishLocalTracks();
        // 显示通话时长
        await OperationPackge.public.communicationDuration("audioDuration");
      } else {
        // 本地预览
        await OperationPackge.p2p.createVideoAdd();
        // 视频通话
        await PageShow.showVideoPage();
        // 发布媒体流
        await SdkPackge.RTC.publishLocalTracks();
        // 显示通话时长
        await OperationPackge.public.communicationDuration("videoDuration");
      }
    },
    // RTM 被叫: 拒绝呼叫邀请成功
    RemoteInvitationRefused: async function () {
      // console.log("RTM 被叫: 拒绝呼叫邀请成功", Store);
      Utils.printLog("[info]", "RemoteInvitationRefused");
      OperationPackge.p2p.cancelCall(2);
    },
    // RTM 被叫: 主叫取消呼叫邀请
    RemoteInvitationCanceled: async function () {
      // console.log("RTM 被叫: 主叫取消呼叫邀请", Store.network);
      if (Store.network.status == 1) {
        Utils.printLog("[info]", "RemoteInvitationCanceled");
        // 恢复默认
        await OperationPackge.public.restoreDefault();
        // 隐藏被呼叫页面
        await PageShow.hiddenCallPage();
        // 页面提示
        Utils.alertWhole("主叫取消呼叫邀请");
        // 显示首页
        PageShow.showIndex();
      }
    },
    // RTM 被叫: 呼叫邀请进程失败
    RemoteInvitationFailure: async function () {
      if (Store.network.status == 1) {
        Utils.printLog("[info]", "RemoteInvitationFailure");
        // 恢复默认
        await OperationPackge.public.restoreDefault();
        // 隐藏被呼叫页面
        await PageShow.hiddenCallPage();
        // 页面提示
        Utils.alertWhole("呼叫邀请进程失败");
        // 显示首页
        PageShow.showIndex();
      }
    },

    // RTM 收到挂断信息
    hangupInfo: async function () {
      await Utils.alertWhole("通话已结束", "alert-success");
      // 释放采集设备
      await SdkPackge.RTC.LocalTracksClose();
      // 本地存储恢复
      await OperationPackge.public.restoreDefault();
      // 通话页面恢复初始
      await PageShow.initSetingP2P();
      // 回到首页
      await PageShow.showIndex();
    },

    // RTC 用户发布
    userPublished: async function (user, mediaType) {
      // console.log("p2p 用户" + user.uid + "发布" + mediaType);
      Store.peerUserId = user.uid; // 存储远端用户uid
      if (mediaType === "video") {
        PageShow.networkRemoShow(false);
        // 远端用户发布的视频渲染
        OperationPackge.p2p.createPeerVideoAdd(user);
      } else {
        user.audioTrack && user.audioTrack.play();
      }
    },
    // RTC 用户取消发布
    userUnpublished: async function (user, mediaType) {
      if (mediaType === "video") {
        PageShow.networkRemoShow(true);
      }
      // console.log("用户" + user.uid + "取消发布" + mediaType);
    },
    // RTC 用户加入频道
    userJoined: function (user) {
      console.log("RTC 用户加入频道", user, Store.peerUserId);
      if (user.uid == Store.peerUserId) {
        Store.callChannelPro && clearTimeout(Store.callChannelPro);
        Store.remodVideoEnd && clearTimeout(Store.remodVideoEnd);
      }
    },
    // RTC 用户离开频道
    userLeft: async function (user, reason) {
      console.log("RTC 用户离开频道", user, reason);
      //因网络断线离开
      if (reason == "ServerTimeOut") {
        Utils.alertWhole("对方网络异常", "alert-warning");
        // await PageShow.networkP2P();
        // 10s 远端不在加入离开
        Store.remodVideoEnd = setTimeout(async () => {
          Utils.alertWhole("通话异常", "alert-warning");
          // 释放采集设备
          await SdkPackge.RTC.LocalTracksClose();
          // 本地存储恢复
          await OperationPackge.public.restoreDefault();
          // 页面恢复初始
          await PageShow.initSetingP2P();
          // 回到首页
          await PageShow.showIndex();
        }, Store.remodVideoEndTime);
        // 保留页面
      } else {
        Utils.alertWhole("通话已结束", "alert-success");
        // 释放采集设备
        await SdkPackge.RTC.LocalTracksClose();
        // 本地存储恢复
        await OperationPackge.public.restoreDefault();
        // 页面恢复初始
        await PageShow.initSetingP2P();
        // 回到首页
        await PageShow.showIndex();
      }
    },

    // p2p 断网重连后发送查询信息
    networkSendInfo: function () {
      let oSend = setInterval(() => {
        if (Store.lineworkRTC && Store.lineworkRTM) {
          clearInterval(oSend);
          // 发送查询信息
          Store.rtmClient &&
            Store.rtmClient
              .sendMessageToPeer(
                {
                  text: JSON.stringify({
                    Cmd: "CallState",
                  }),
                },
                Store.peerUserId // 对端用户的 uid。
              )
              .catch((err) => {
                // 你的代码：点对点消息发送失败。
                // console.log(err);
              });
          // 一定时间无响应取消
          Store.networkReconnection = setTimeout(() => {
            console.log("发送查询信息,一定时间无响应取消");
            OperationPackge.p2p.cancelCall(1);
          }, Store.networkReconnectionTime);
        }
      }, 500);
    },
    // p2p 回复远端断网重连所需信息
    replySendInfo: function (peerId) {
      let oSend = setInterval(() => {
        if (Store.lineworkRTC && Store.lineworkRTM) {
          clearInterval(oSend);
          // 发送查询信息
          Store.rtmClient &&
            Store.rtmClient
              .sendMessageToPeer(
                {
                  text: JSON.stringify({
                    Cmd: "CallStateResult",
                    state:
                      Store.peerUserId !== peerId ? 0 : Store.network.status,
                    Mode: Store.network.Mode,
                  }),
                },
                peerId // 对端用户的 uid。
              )
              .catch((err) => {
                // 你的代码：点对点消息发送失败。
                // console.log(err);
              });
        }
      }, 500);
    },
  },
  multi: {
    // 频道消息
    ChannelMessage: function (message) {
      // console.log("频道消息", message);
    },
    // 频道人员加入
    MemberJoined: function (memberId) {
      // console.log("频道人员加入", memberId);
    },
    // 频道人员离开
    MemberLeft: async function (memberId) {
      // console.log("频道人员离开", memberId);
      await Utils.deleteUserView(memberId);
    },

    // 音视频设置
    setVideoOrAudio: async function () {
      await Store.localTracks.audioTrack.setEnabled(Store.setting.enableAudio);
      await Store.localTracks.videoTrack.setEnabled(Store.setting.enableVideo);
      await PageShow.setEnableAudio(Store.setting.enableAudio);
      await PageShow.setEnableVideo(Store.setting.enableVideo);
    },

    // 发起呼叫
    makeCall: async function (userOnlineStatus) {
      // 在线人员
      Store.invitationUserIds = userOnlineStatus.oOline;
      // 标识为正在通话中
      Store.Calling = true;
      // 本地用户加入 RTM 频道
      await OperationPackge.multi.JoinRTMChannel();
      // 本地用户加入 RTC 实时通讯频道
      Store.ownUserId = await Store.rtcClient.join(
        Config.RTC_APPID,
        Store.channelId,
        null,
        Store.ownUserId
      );
      // 标识加入 RTC 频道
      Store.JoinRTCChannel = true;
      // 提示用户不在线
      userOnlineStatus.oNotOline.length > 0 &&
        Utils.alertWhole("用户" + userOnlineStatus.oNotOline + "不在线");
      // 显示会议页面
      await PageShow.showMeetPage();
      // 创建窗口
      await Utils.createUserView(Store.ownUserId);
      // 发送呼叫邀请 并创建用户视图
      await OperationPackge.multi.SendLocalInvitation(userOnlineStatus.oOline);
      // 本地音视频渲染
      await OperationPackge.multi.LocalAudioVideoRender();
    },
    // 查询呼叫的用户是否在线
    QueryPeersOnlineStatus: async function () {
      var userOnlineStatus = await Store.rtmClient.queryPeersOnlineStatus(
        Store.invitationUserIds
      );
      // 分离在线用户和不在线用户
      var oOline = [];
      var oNotOline = [];
      Store.invitationUserIds.map(function (userid, index) {
        //不在线
        if (userOnlineStatus[userid]) {
          oOline.push(userid);
        } else {
          oNotOline.push(userid);
        }
      });
      return {
        oOline, // 在线用户
        oNotOline, // 不在线用户
      };
    },
    // 加入 RTM 频道
    JoinRTMChannel: async function () {
      // 正在通话中
      Store.Calling = true;
      // RTM 频道初始化
      await SdkPackge.RTMChannel.init();
      // 加入 RTM 频道
      await Store.rtmChannel.join();
    },
    // 发送呼叫邀请
    SendLocalInvitation: function (Online) {
      Online.map(function (userid) {
        // 创建呼叫用户视图
        Utils.createUserView(userid, 0);
        // 创建呼叫邀请并发送
        OperationPackge.multi.createLocalInvitationAndSend(userid);
      });
    },
    // 接受呼叫
    acceptCall: async function () {
      // 查询频道内在线用户
      var oUserData = await Store.rtmChannel.getMembers();
      Store.invitationUserIds = oUserData;
      Store.remoteInvitation.response = await JSON.stringify({
        Mode: 0,
        Conference: true,
        refuseId: Store.ownUserId,
        UserData: "",
        SipData: "",
      });
      await Store.remoteInvitation.accept();
      // 隐藏被呼叫页面
      await PageShow.hiddenCalledPage();
      // 在线的用户创建视图窗口
      await Store.invitationUserIds.map(function (userid) {
        // 创建用户视图窗口
        Utils.createUserView(userid, 0);
      });
      // 显示会议页面
      await PageShow.showMeetPage();
    },
    // 本地音视频渲染
    LocalAudioVideoRender: async function () {
      // 释放采集设备
      await SdkPackge.RTC.LocalTracksClose();
      // 采集本地图像
      await SdkPackge.RTC.getUserMedia();
      // 发布音视频
      await SdkPackge.RTC.publishLocalTracks();
      // 开启双流
      await Store.rtcClient
        .enableDualStream()
        .then(() => {
          console.log("Enable Dual stream success!");
        })
        .catch((err) => {
          console.log("开启双流失败", err);
        });

      // 设置音视频
      await OperationPackge.multi.setVideoOrAudio();

      // 本地预览
      Store.localTracks.videoTrack &&
        (await Store.localTracks.videoTrack.play(
          Store.ownUserId + "VideoView",
          {
            fit: "contain",
          }
        ));
      await Utils.updateUserViewStatus(Store.ownUserId, 1);
      // 更新音频状态
      await Utils.updateUserAudioState(
        Store.ownUserId,
        Store.setting.enableAudio
      );
      // 绑定大小屏切换
      Store.localTracks.videoTrack &&
        (await Utils.switchover({
          uid: Store.ownUserId,
          videoTrack: Store.localTracks.videoTrack,
        }));
    },
    // 会议邀请 邀请用户
    MeetingUser: async function () {
      var userid = "";
      $("#userMutiModalInputs > input").each(function () {
        userid += this.value;
      });
      // 清空所有输入框
      $("#userMutiModalInputs > input").each(function () {
        this.value = "";
      });
      // 筛选用户
      if (userid.length !== 4) {
        Utils.alertWhole("用户ID不合法", "alert-danger");
        return;
      }
      // 查看用户已存在
      if (
        ~Store.invitationUserIds.indexOf(userid) ||
        userid == Store.ownUserId
      ) {
        Utils.alertWhole("邀请的用户已存在", "alert-danger");
        return;
      }
      // 用户是否在线
      var userOnlineStatus = await Store.rtmClient.queryPeersOnlineStatus([
        userid,
      ]);
      if (!userOnlineStatus[userid]) {
        Utils.alertWhole("用户不在线,无法邀请", "alert-danger");
        return;
      }
      return userid;
    },
    // RTM 主叫: 创建呼叫邀请并发送
    createLocalInvitationAndSend: async function (userid) {
      var localInvitation = await Store.rtmClient.createLocalInvitation(userid);
      var oUserData = await Store.rtmChannel.getMembers();
      if (
        [Store.ownUserId].concat(Store.invitationUserIds).length >
        oUserData.length
      ) {
        oUserData = [Store.ownUserId].concat(Store.invitationUserIds);
      }
      oUserData = [...new Set(oUserData)];
      // 设置邀请内容
      localInvitation.content = await JSON.stringify({
        Mode: 0, // 呼叫的类型0:视频 1:语音
        Conference: true,
        ChanId: Store.channelId,
        UserData: oUserData, // 邀请的人员添加到UserData [Store.ownUserId].concat(Store.invitationUserIds)
        SipData: "",
        VidCodec: ["H264"],
        AudCodec: ["Opus"],
      });
      // 发送
      await localInvitation.send();
      Utils.printLog("[info]", "you sent an invitation to " + userid);
      // 主叫：被叫已收到呼叫邀请。
      localInvitation.on("LocalInvitationReceivedByPeer", async function () {
        Utils.printLog(
          "[info]",
          "Your invitation has been received by " + localInvitation.calleeId
        );
      });
      // 主叫：被叫已接受呼叫邀请。
      localInvitation.on(
        "LocalInvitationAccepted",
        OperationPackge.multi.LocalInvitationAccepted
      );
      // 主叫: 被叫拒绝呼叫邀请
      localInvitation.on(
        "LocalInvitationRefused",
        OperationPackge.multi.LocalInvitationRefused
      );
      // 主叫: 呼叫邀请已被成功取消。
      localInvitation.on("LocalInvitationCanceled", function () {
        Utils.printLog("[info]", "Local invitation canceled");
      });
      // 主叫：呼叫邀请进程失败。
      localInvitation.on(
        "LocalInvitationFailure",
        OperationPackge.multi.LocalInvitationFailure
      );
    },
    // RTM 主叫: 被叫已接受呼叫邀请。
    LocalInvitationAccepted: async function (response) {
      // console.log("被叫已接受呼叫邀请。", response);
      if (response) {
        response = JSON.parse(response);
        Utils.printLog(
          "[info]",
          response.refuseId + " accepted your invitation"
        );
        // 更新用户状态及窗口显示 - 对方已接收
        Utils.updateUserViewStatus(response.refuseId, 1);
      }
    },
    // RTM 主叫: 被叫拒绝呼叫邀请
    LocalInvitationRefused: async function (response) {
      // console.log("被叫拒绝呼叫邀请",response);
      response = response ? JSON.parse(response) : "";
      // 更新用户状态及窗口显示 - 对方已拒绝
      await Utils.updateUserViewStatus(response.refuseId, 2);
      if (response.Cmd == "Calling") {
        await Utils.alertWhole("呼叫的用户正在通话中", "alert-info");
      } else {
        await Utils.alertWhole(
          "用户" + response.refuseId + "拒绝呼叫邀请",
          "alert-info"
        );
      }
      // 移除用户窗口
      await Utils.deleteUserView(response.refuseId);
    },
    // RTM 主叫: 呼叫邀请进程失败
    LocalInvitationFailure: function (reason) {
      // console.log("呼叫邀请进程失败", reason);
    },
    // RTM 被叫: 多人 收到来自主叫的呼叫邀请
    RemoteInvitationReceived: async function (invitationContent) {
      Utils.printLog(
        "[info]",
        "You recive an invitation from " + Store.remoteInvitation.callerId
      );
      // console.log("多人 收到来自主叫的呼叫邀请");
      // 加入的频道
      Store.channelId = invitationContent.ChanId;
      // 加入 RTM 频道
      await OperationPackge.multi.JoinRTMChannel();
      // 显示被呼叫页面
      await PageShow.showCalledPage();
      // 显示邀请人
      $("#callerIdView").html(invitationContent.UserData.join(","));
      // 隐藏转换语音通话按钮
      PageShow.toSpeech(1);
      // 被叫: 接受呼叫邀请
      Store.remoteInvitation.on(
        "RemoteInvitationAccepted",
        OperationPackge.multi.RemoteInvitationAccepted
      );
      // 被叫: 拒绝呼叫邀请
      Store.remoteInvitation.on(
        "RemoteInvitationRefused",
        OperationPackge.multi.RemoteInvitationRefused
      );
      // 被叫: 主叫已取消呼叫邀请
      Store.remoteInvitation.on(
        "RemoteInvitationCanceled",
        OperationPackge.multi.RemoteInvitationCanceled
      );
      // 被叫: 呼叫邀请进程失败
      Store.remoteInvitation.on(
        "RemoteInvitationFailure",
        OperationPackge.multi.RemoteInvitationFailure
      );
    },
    // RTM 被叫: 接受呼叫邀请
    RemoteInvitationAccepted: async function () {
      // console.log("被叫: 接受呼叫邀请");
      // 加入 RTC 实时通讯频道
      Store.ownUserId = await Store.rtcClient.join(
        Config.RTC_APPID,
        Store.channelId,
        null,
        Store.ownUserId
      );
      Store.JoinRTCChannel = true;
      // 更新用户状态及窗口显示 - 对方已接收
      await Utils.updateUserViewStatus(Store.remoteInvitation.callerId, 1);
      await OperationPackge.multi.LocalAudioVideoRender();
    },
    // RTM 被叫: 拒绝呼叫邀请
    RemoteInvitationRefused: async function () {
      Utils.alertWhole("已拒绝呼叫邀请", "alert-info");
      PageShow.initSetingMulti(); // 恢复初始
      // 恢复默认
      await OperationPackge.public.restoreDefault();
      // 显示首页
      PageShow.showIndex();
    },
    // RTM 被叫: 主叫已取消呼叫邀请
    RemoteInvitationCanceled: async function () {
      // console.log("主叫已取消呼叫邀请");
      // 恢复默认
      await OperationPackge.public.restoreDefault();
      // 隐藏被呼叫页面
      await PageShow.hiddenCallPage();
      // 页面提示
      Utils.alertWhole("主叫取消呼叫邀请");
      // 显示首页
      PageShow.showIndex();
    },
    // RTM 被叫: 呼叫邀请进程失败
    RemoteInvitationFailure: function () {
      // console.log("呼叫邀请进程失败");
    },
    // RTC 用户发布
    userPublished: async function (user, mediaType) {
      // console.log("用户" + user.uid + "发布" + mediaType);
      var oArray = await Store.invitationUserIds.concat([user.uid]);
      Store.invitationUserIds = Array.from(await new Set(oArray));
      // 创建视图
      await Utils.createUserView(user.uid);
      // 默认接收小流
      await Store.rtcClient
        .setRemoteVideoStreamType(user.uid, 1)
        .then(() => {})
        .catch((err) => {
          console.log("默认接收小流失败", err);
        });
      if (mediaType === "video") {
        // 绑定大小屏切换
        await Utils.switchover(user);
        // 存放用户发布的视频
        user.videoTrack &&
          (await user.videoTrack.play(user.uid + "VideoView", {
            fit: "contain",
          }));
      } else {
        user.audioTrack && (await user.audioTrack.play());
        // 更改用户的音频状态
        await Utils.updateUserAudioState(user.uid, user.hasAudio);
      }
    },
    // RTC 用户取消发布
    userUnpublished: async function (user, mediaType) {
      // console.log("用户" + user.uid + "取消发布" + mediaType);
      if (mediaType === "audio") {
        Utils.updateUserAudioState(user.uid, false);
      }
    },
    // RTC 用户离开频道
    userLeft: async function (user, reason) {
      // console.log("RTC 用户离开频道", reason);
      //因网络断线离开
      if (reason == "ServerTimeOut") {
        Utils.alertWhole("用户" + user.uid + "网络断线离开");
      } else {
        await Utils.alertWhole("用户" + user.uid + "离开", "alert-danger");
      }
    },
  },
};

// SDK 自检
(async function () {
  //查看sdk版本
  console.log("RTC SDK 版本",ArRTC.VERSION);
  console.log("RTM SDK 版本",ArRTM.VERSION);
  // 视频设备状态变化
  ArRTC.onCameraChanged = function (info) {
    SdkPackge.Support.cameraChanged(info);
  };
  // 音频设备状态变化
  ArRTC.onMicrophoneChanged = function (info) {
    SdkPackge.Support.microphoneChanged(info);
  };
  // SDK 设备支持检测
  var fase = await SdkPackge.Support.hardwareSupport();
  fase &&
    // 初始化RTC
    (SdkPackge.RTC.init(),
    // 初始化RTM
    SdkPackge.RTM.init());
})();

// p2p点击相关操作4
{
  // 选择p2p呼叫
  $("#openP2PInvite").click(function () {
    !$("#loginHome").hasClass("d-none") && $("#loginHome").addClass("d-none");
    $("#loginForm").hasClass("d-none") && $("#loginForm").removeClass("d-none");
    Utils.setPageTitle("anyrtc P2P呼叫邀请DEMO - anyRTC");
    Store.Conference = false;
  });

  // 打开设置
  $("#openSettingBtn").click(async function () {
    if (!$("#loginSetting").hasClass("show")) {
      $("#loginSetting").addClass("show");
      // 清空容器
      await $("#settingVideoPreview").html("");
      // 释放采集设备
      await SdkPackge.RTC.LocalTracksClose();
      // 重新采集视频
      await SdkPackge.RTC.getUserMedia();
      // 本地预览
      Store.localTracks.videoTrack &&
        Store.localTracks.videoTrack.play("settingVideoPreview");
      Store.localTracks.audioTrack && Store.localTracks.audioTrack.play();
    }
  });
  // 关闭设置
  $("#closeSettingBtn").click(async function () {
    await OperationPackge.p2p.closeSeting();
  });

  // 监听用户是否开启视频相关数据展示
  $("#videoDataSwitch").change(function () {
    var videoEnable = $(this).prop("checked");
    Store.setting.videoDataShow = videoEnable;
  });

  // 监听用户设置视频大小
  $("#settingVideoResolution").change(async function () {
    Store.setting.videoSize = await $("#settingVideoResolution")
      .val()
      .split("*")
      .map(Number);
    await OperationPackge.p2p.setOperation("分辨率");
  });
  // 监听用户设置音频设备
  $("#audioInputSelect").change(async function () {
    Store.setting.audioDevice = $("#audioInputSelect").val();
    await OperationPackge.p2p.setOperation("设置音频设备");
  });
  // 监听用户设置视频设备
  $("#videoInputSelect").change(async function () {
    Store.setting.videoDevice = $("#videoInputSelect").val();
    await OperationPackge.p2p.setOperation("设置视频设备");
  });

  // 监听用户ID输入 监听用户删除id
  Utils.inputChangId("#userInputs > input");
  // 语音呼叫
  $("#p2pAudioMakeCall").click(function () {
    if (navigator.onLine && Store.lineworkRTC && Store.lineworkRTM) {
      if (!Store.repetitionClick) {
        OperationPackge.p2p.makeVoiceCall();
      }
    } else {
      // 页面提示
      Utils.alertWhole("当前网络不可用");
    }
  });
  // 视频呼叫
  $("#p2pVideoMakeCall").click(function () {
    if (navigator.onLine && Store.lineworkRTC && Store.lineworkRTM) {
      if (!Store.repetitionClick) {
        OperationPackge.p2p.makeVideoCall();
      }
    } else {
      // 页面提示
      Utils.alertWhole("当前网络不可用");
    }
  });
  // 主叫-呼叫页面 挂断
  $("#cancelCallBtn").click(function () {
    // 挂断
    Store.localInvitation && Store.localInvitation.cancel();
    // 隐藏呼叫邀请页面
    PageShow.hiddenCallPage();
    // 本地存储恢复
    OperationPackge.public.restoreDefault();
  });

  // 被叫-呼叫页面 转语音通话
  $("#changAudioBtn").on("click", function () {
    OperationPackge.p2p.acceptCall("语音呼叫");
  });

  // 音视频展示-语音通话页面 音频开关
  $("#audioSwitchBtn").click(function () {
    Store.localTracks.audioTrack.isMuted =
      !Store.localTracks.audioTrack.isMuted;
    Store.localTracks.audioTrack.setEnabled(
      !Store.localTracks.audioTrack.isMuted
    );
    PageShow.audioSwitch();
  });
  // 音视频展示-语音通话页面 音频挂断
  $("#hangupAudioBtn").click(function () {
    // 取消当前通话
    OperationPackge.p2p.cancelCall();
  });
  // 音视频展示-视频通话页面 视频挂断
  $("#hangupBtn").click(function () {
    // 取消当前通话
    OperationPackge.p2p.cancelCall();
  });
  // 音视频展示-视频通话页面 切换语音通话
  $("#switchToAudioCall").click(async function () {
    // console.log("切换语音通话", Store.peerUserId);
    if (Store.localTracks.videoTrack) {
      await Store.rtmClient.sendMessageToPeer(
        {
          text: JSON.stringify({
            Cmd: "SwitchAudio",
          }),
        },
        Store.peerUserId // 对端用户的 uid。
      );
      // 语音通话
      await PageShow.showVoicePage();
      // 关闭视频并释放
      (await Store.localTracks.videoTrack) &&
        (Store.localTracks.videoTrack.close(),
        (Store.localTracks.videoTrack = null));
      Store.setting.videoStatsInterval &&
        clearInterval(Store.setting.videoStatsInterval);
      // 显示音频通话时长
      await OperationPackge.public.communicationDuration("audioDuration");
    }
  });
}

// 多人点击相关操作
{
  // 选择多人呼叫
  $("#openMultiInvite").click(function () {
    !$("#loginHome").hasClass("d-none") && $("#loginHome").addClass("d-none");
    $("#loginMutiFprm").hasClass("d-none") &&
      $("#loginMutiFprm").removeClass("d-none");
    Utils.setPageTitle("anyrtc 多人呼叫邀请DEMO - anyRTC");
    Store.Conference = true;
  });
  // 用户输入
  Utils.inputChangIds("#multiUserInputs > input");
  // 监听打开设置按钮点击
  $("#multiOpenSettingBtn").click(function () {
    if (!$("#loginMutiSetting").hasClass("show")) {
      $("#loginMutiSetting").addClass("show");
      $("#userVideoCameraSetting").prop("checked", Store.setting.enableVideo);
      $("#userMicrophoneSetting").prop("checked", Store.setting.enableAudio);
    }
  });
  // 监听用户摄像头设置开关
  $("#userVideoCameraSetting").change(function () {
    var videoEnable = $(this).prop("checked");
    Store.setting.enableVideo = videoEnable;
  });
  // 监听用户麦克风设置开关
  $("#userMicrophoneSetting").change(function () {
    var audioEnable = $(this).prop("checked");
    Store.setting.enableAudio = audioEnable;
  });
  // 监听关闭设置按钮点击
  $("#closeMutiSettingBtn").click(function () {
    $("#loginMutiSetting").hasClass("show") &&
      $("#loginMutiSetting").removeClass("show");
  });
  // 发起多人音视频通话
  $("#MultipleCalls").click(async function () {
    if (Store.invitationUserIds.length > 0) {
      // 查询呼叫的用户是否在线
      var userOnlineStatus =
        await OperationPackge.multi.QueryPeersOnlineStatus();
      // 输入的用户中有在线的
      if (userOnlineStatus.oOline.length > 0) {
        // 主叫处理
        await OperationPackge.multi.makeCall(userOnlineStatus);
      } else {
        Utils.alertWhole("您输入的用户全都不在线");
        Store.invitationUserIds = [];
        $("#multiUserBtn").html("");
      }
    } else {
      Utils.alertWhole("请输入邀请的用户");
    }
  });
  // 音频开关
  $("#setAudioEnableBtn").click(async function () {
    Store.setting.enableAudio = !Store.setting.enableAudio;
    Store.localTracks.audioTrack &&
      (await Store.localTracks.audioTrack.setEnabled(
        Store.setting.enableAudio
      ));
    // 更改用户的音频状态
    Utils.updateUserAudioState(Store.ownUserId, Store.setting.enableAudio);
    PageShow.setEnableAudio(Store.setting.enableAudio);
  });
  // 视频开关
  $("#setVideoEnableBtn").click(async function () {
    Store.setting.enableVideo = !Store.setting.enableVideo;
    if (!Store.setting.enableAudio) {
      Store.localTracks.audioTrack.setEnabled(!Store.setting.enableAudio);
      setTimeout(function () {
        Store.localTracks.audioTrack.setEnabled(Store.setting.enableAudio);
      }, 200);
    }
    Store.localTracks.videoTrack &&
      (await Store.localTracks.videoTrack.setEnabled(
        Store.setting.enableVideo
      ));
    // console.log("视频开关", Store.setting.enableVideo);
    await PageShow.setEnableVideo(Store.setting.enableVideo);
  });
  // 挂断
  $("#hangupMutiBtn").click(async function () {
    Object.keys(Store.invitationClearTimeouts).forEach(function (key) {
      Store.invitationClearTimeouts[key] &&
        clearTimeout(Store.invitationClearTimeouts[key]);
    });
    // 释放采集设备
    await SdkPackge.RTC.LocalTracksClose();

    // 通话页面恢复初始
    await PageShow.initSetingMulti();
    // 回到首页
    await PageShow.showIndex();
    // 本地存储恢复
    await OperationPackge.public.restoreDefault();
  });
  // 输入框 (会议中邀请)
  Utils.inputChangId("#userMutiModalInputs > input");
  // 会议中邀请
  $("#mutiModalBtn").click(async function () {
    // 获取邀请用户
    var userid = await OperationPackge.multi.MeetingUser();
    if (userid) {
      // 发送邀请
      await OperationPackge.multi.createLocalInvitationAndSend(userid);
      // 创建用户视图窗口
      Utils.createUserView(userid, 0);
      // 隐藏邀请窗口
      $("#invitationModal").modal("hide");
    }
  });
}

// 被叫页面P2P与多人公共操作
{
  // 被叫-呼叫页面 接受邀请
  $("#acceptCallBtn").on("click", function () {
    Store.Conference
      ? OperationPackge.multi.acceptCall()
      : OperationPackge.p2p.acceptCall("视频呼叫");
  });

  // 被叫-呼叫页面 拒绝接听
  $("#refuseCallBtn").on("click", function () {
    Store.remoteInvitation.response = JSON.stringify({
      refuseId: Store.ownUserId,
    });
    // 拒绝接听
    Store.remoteInvitation && Store.remoteInvitation.refuse();
  });
}

// 断网
window.addEventListener("online", Utils.updateOnlineStatus);
window.addEventListener("offline", Utils.updateOnlineStatus);
