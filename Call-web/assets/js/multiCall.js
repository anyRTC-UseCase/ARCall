// 数据存储
var Store = {
  ownUserId: "" + Utils.generateNumber(4), // 自己的用户ID - 这里需要转字符串
  iscalling: false,   // 呼叫或被呼叫中
  channelId: "",      // 频道房间号
  inChannel: false,   // 是否已加入频道
  rtcClient: null,
  rtmClient: null,
  bigViewUserId: "",   // 当前大屏显示用户的userId
  //本地采集的音视频轨道
  localTracks: {
    videoTrack       : null,
    audioTrack       : null,
    settingVideoTrack: null,
    enableVideo      : true,   // 本地摄像头是否关闭
    enableAudio      : true,   // 本地麦克风是否关闭
  },
  //呼叫设置
  setting: {
    //点对点呼叫设置
    videoSize  : [320, 180],   // 设置视频采集的分辨率大小
    audioDevice: "default",    // 设置音频设备ID
    videoDevice: "default",    // 设置视频设备ID
    //多人呼叫设置
    enableAudio: true,   //
    enableVideo: true,   //
    invitationTimeout: 60 * 1000,
  },
  roomUser: [],   // 记录房间内所有邀请或被邀请人员信息
  invitationUserIds: [],   // 邀请或被邀请参会人员用户ID
};

// RTC
var RTC = {
  // 初始化RTC
  init: function () {

    if (Store.rtcClient === null) {
      var rtcClient = ArRTC.createClient({
        mode : Config.RTC_MODE,
        codec: Config.RTC_CODEC
      });
      Store.rtcClient = rtcClient;

      // RTC SDK 监听用户发布
      rtcClient.on("user-published", async function (user, mediaType) {
        await rtcClient.subscribe(user, mediaType);
        Utils.printLog('[info] subscribe success');

        var findUser = Store.roomUser.find(function(item) {
          return item.userId === user.uid
        });
        if (findUser.status !== 1) {
          findUser.status = 1;
          CustomUI.updateUserViewStatus(user.uid, findUser.status);
        }
        if (mediaType === "video") {
          findUser.videoTrack = user.videoTrack;
          user.videoTrack && user.videoTrack.play(user.uid + "VideoView", {
            fit: "contain"
          });
        } else {
          findUser.audioTrack = user.audioTrack;
          user.audioTrack && user.audioTrack.play();
        }
        // 更改用户的音频状态
        CustomUI.updateUserAudioState(user.uid, user.audioTrack);
      });
      // RTC SDK 监听用户取消发布
      rtcClient.on("user-unpublished", async function (user, mediaType) {
        Utils.printLog('[info] user-unpublished');

        // 远程用户
        var findUser = Store.roomUser.find(function(user) {
          return user.userId === Store.ownUserId;
        });
        if (mediaType === "video") {
          // user.videoTrack.stop();
          findUser.videoTrack = null;
        } else if (mediaType === "audio") {
          findUser.audioTrack = null;
          // 更改用户的音频状态
          CustomUI.updateUserAudioState(user.uid, false);
        }
      });
      // RTC SDK 监听用户加入频道成功
      rtcClient.on("user-joined", function (user) {
        Utils.printLog("user-joined");
      });
      // RTC SDK 监听用户离开频道
      rtcClient.on("user-left", function (user) {
        Utils.printLog("user-left");
        SystemUI.alertWhole("用户"+user.uid+"离开", "alert-danger");
        // 移除用户窗口
        CustomUI.deleteUserView(user.uid);
      });
    }
  },
  // 采集用户音视频
  getUserMedia: async function () {
    var [cameras, microhones] = await Promise.all([
      ArRTC.getCameras(),
      ArRTC.getMicrophones(),
    ]);

    if (Store.setting.enableVideo && cameras.length > 0 && Store.setting.enableAudio && microhones.length > 0) {
      [Store.localTracks.audioTrack, Store.localTracks.videoTrack] = await ArRTC.createMicrophoneAndCameraTracks(
        null, 
        {
          encoderConfig: {
            bitrateMax: 1130,
            // bitrateMin: ,
            frameRate: 15,
            height   : 180,
            width    : 320,
          }
        }
      );
    } else {
      if (Store.setting.enableVideo && cameras.length > 0) {
        $("#setVideoEnableBtn").show();
        Store.localTracks.videoTrack = await ArRTC.createCameraVideoTrack({
          encoderConfig: {
            bitrateMax: 1130,
            // bitrateMin: ,
            frameRate: 15,
            height   : 180,
            width    : 320,
          }
        }).catch(function (err) {
          console.log("err => ", err);
        });
      } else {
        $("#setVideoEnableBtn").hide();
      }
      if (Store.setting.enableAudio && microhones.length > 0) {
        $("#setAudioEnableBtn").show();
        Store.localTracks.audioTrack = await ArRTC.createMicrophoneAudioTrack()
          .catch(function (err) {
            console.log("err => ", err);
          });
      } else {
        $("#setAudioEnableBtn").hide();
      }
    }

    // 预览本地图像
    CustomUI.createUserView(Store.ownUserId, 1);

    var self = Store.roomUser.find(function(user) {
      return user.userId === Store.ownUserId;
    });

    self.audioTrack = Store.localTracks.audioTrack;
    self.videoTrack = Store.localTracks.videoTrack;
    // 预览本地视频采集的图像
    Store.localTracks.videoTrack && Store.localTracks.videoTrack.play(Store.ownUserId + "VideoView", {
      fit: "contain"
    });
    RTC.setEnableAudio(Store.setting.enableAudio);
    RTC.setEnableVideo(Store.setting.enableVideo);
  },
  // 发布本地采集的音视频track
  publishLocalTracks: async function() {
    if (Store.localTracks.videoTrack || Store.localTracks.audioTrack) {
      // 设置主播身份并发布
      Store.rtcClient.setClientRole("host");
      await Store.rtcClient.publish([Store.localTracks.videoTrack, Store.localTracks.audioTrack]); //不发布
    }
  },
  // 本地摄像头开关
  setEnableVideo: function(enable) {
    Store.localTracks.videoTrack && Store.localTracks.videoTrack.setEnabled(enable);
    Store.localTracks.enableVideo = enable;

    if (enable) {
      !$("#localVideoEnableIcon").hasClass("icon-video_open") && $("#localVideoEnableIcon").addClass("icon-video_open");
      $("#localVideoEnableIcon").hasClass("icon-video_close") && $("#localVideoEnableIcon").removeClass("icon-video_close");
    } else {
      $("#localVideoEnableIcon").hasClass("icon-video_open") && $("#localVideoEnableIcon").removeClass("icon-video_open");
      !$("#localVideoEnableIcon").hasClass("icon-video_close") && $("#localVideoEnableIcon").addClass("icon-video_close");
    }
  },
  // 本地麦克风开关
  setEnableAudio: function(enable) {
    Store.localTracks.audioTrack && Store.localTracks.audioTrack.setEnabled(enable);
    Store.localTracks.enableAudio = enable;
    // 更改用户的音频状态
    CustomUI.updateUserAudioState(Store.ownUserId, enable);

    if (enable) {
      !$("#localAudioEnableIcon").hasClass("icon-audio_open") && $("#localAudioEnableIcon").addClass("icon-audio_open");
      $("#localAudioEnableIcon").hasClass("icon-audio_close") && $("#localAudioEnableIcon").removeClass("icon-audio_close");
    } else {
      $("#localAudioEnableIcon").hasClass("icon-audio_open") && $("#localAudioEnableIcon").removeClass("icon-audio_open");
      !$("#localAudioEnableIcon").hasClass("icon-audio_close") && $("#localAudioEnableIcon").addClass("icon-audio_close");
    }
  },
};

// RTM
var RTM = {
  rtmChannel: null,
  init: function () {
    if (Store.rtmClient === null) {
      var rtmClient = ArRTM.createInstance(Config.RTM_APPID);
      Store.rtmClient = rtmClient;

      // RTM SDK 监听回调
      // 登录信令服务
      rtmClient.login({
        uid: Store.ownUserId
      }).then(async function () {
        $(".own-user-id-view").html(Store.ownUserId);
        $("#openP2PInvite").attr("disabled", false);
        $("#openMultiInvite").attr("disabled", false);
      }).catch(function (err) {
        SystemUI.alertWhole("RTM 登录失败", "alert-danger");
      });

      // 通知 SDK 与 RTM 系统的连接状态发生了改变。
      rtmClient.on("ConnectionStateChanged", function (newState, reason) {

      });

      // 收到来自主叫的呼叫邀请。
      rtmClient.on("RemoteInvitationReceived", function (remoteInvitation) {
        Utils.printLog("[info]", "You recive an invitation from "+ remoteInvitation.callerId);

        if (!Store.iscalling) {
          Store.iscalling = true;
          Store.remoteInvitation = remoteInvitation;

          var invitationContent = JSON.parse(remoteInvitation.content);
          var invitationUsers = JSON.parse(invitationContent.UserData);
          Store.invitationUserIds = JSON.parse(JSON.stringify(invitationUsers));// 拷贝数组
          for (var i = Store.invitationUserIds.length - 1; i >= 0; i--) {
            if (Store.invitationUserIds[i] === Store.ownUserId) {
              Store.invitationUserIds.splice(i, 1);
            }
          }
          $("#callerIdView").html(invitationUsers.join(","));

          // 加入频道
          Store.channelId = invitationContent.ChanId;
          RTM.joinChannel(invitationContent.ChanId);

          // 显示被呼叫页面
          CustomUI.showReciveCallPage();

          // 超时未同意或拒绝的一律按拒绝处理
          var callTimer = setTimeout(function() {
            // 离开频道
            RTM.rtmChannel && RTM.rtmChannel.leave();
            Store.iscalling = false;
            remoteInvitation = null;
            // 隐藏被呼叫页面
            CustomUI.showCallPage();
            $("#callerIdView").html("");
          }, Store.setting.invitationTimeout);

          // 接收邀请
          $("#acceptCallBtn").one("click", async function () {
            if (Store.iscalling && remoteInvitation) {
              // 清除倒计时定时器
              callTimer && clearTimeout(callTimer);
              remoteInvitation.response = JSON.stringify({
                Mode: 0,
                Conference: invitationContent.Conference,
                UserData: "",
                SipData: ""
              });
              remoteInvitation.accept();
              // 隐藏被呼叫页面
              CustomUI.showMeetPage();
              $("#callerIdView").html("");
              // 显示所有用户的视图窗口 && 查询到离线的用户，60秒后移除该人员图像
              // 查询用户在线状态
              var userOnlineStatus = await Store.rtmClient.queryPeersOnlineStatus(invitationUsers);
              // 遍历创建用户视图窗口
              Store.invitationUserIds.map(function (userid) {
                // if (userid === Store.ownUserId) return;
                // 创建用户视图窗口
                CustomUI.createUserView(userid, userOnlineStatus[userid] ? 0 : 3);
                // 如果用户不在线（这里已经判断类型了），超时60秒需要
                if (userOnlineStatus[userid] === false) {
                  Store.roomUser.map(function (item) {
                    if (item.userId === userid) {
                      item.status = 3;// 用户不在线
                    }
                  });
                  // 如果对方超时没有上线，移除等待画面
                  setTimeout(function () {
                    var findUsers = Store.roomUser.filter(function (item) {
                      return item.userId === userid
                    });
                    if (findUsers.length > 0) {
                      // 邀请没有成功移除用户视图窗口
                      findUsers[0].status === 3 && CustomUI.deleteUserView(userid);
                    }
                  }, Store.setting.invitationTimeout);
                }
              });
            }
          });

          // 拒绝邀请
          $("#refuseCallBtn").one("click", async function () {
            if (Store.iscalling && remoteInvitation) {
              // 清除倒计时定时器
              callTimer && clearTimeout(callTimer);
              // 拒绝呼叫邀请
              remoteInvitation.refuse();
              // 离开频道
              RTM.rtmChannel && RTM.rtmChannel.leave();
              Store.iscalling = false;
              remoteInvitation = null;
              // 隐藏被呼叫页面
              CustomUI.showCallPage();
              $("#callerIdView").html("");
            }
          });
        } else {
          remoteInvitation.response = JSON.parse({
            Cmd: "calling"
          });
          remoteInvitation.refuse();
        }

        // 返回给被叫：接受呼叫邀请成功。
        remoteInvitation.on("RemoteInvitationAccepted", async function () {
          Utils.printLog("[info]", "RemoteInvitationAccepted");

          // 更新用户状态及窗口显示 - 对方已接收
          CustomUI.updateUserViewStatus(remoteInvitation.callerId, 1);

          if (!Store.inChannel) {
            var invitationContent = JSON.parse(remoteInvitation.content);
            var invitationResponse = JSON.parse(remoteInvitation.response);
            // 加入实时通讯频道
            Store.ownUserId = await Store.rtcClient.join(Config.RTC_APPID, invitationContent.ChanId, null, Store.ownUserId);
            // 已加入频道
            Store.inChannel = true;
            // 采集
            await RTC.getUserMedia();
            // 发布媒体流
            await RTC.publishLocalTracks();
          }
        });

        // 返回给被叫：拒绝呼叫邀请成功。
        remoteInvitation.on("RemoteInvitationRefused", function () {
          Utils.printLog("[info]", "RemoteInvitationRefused");

          // 更新用户状态及窗口显示 - 对方已接收
          CustomUI.updateUserViewStatus(remoteInvitation.callerId, 2);

          SystemUI.alertWhole("已拒绝呼叫邀请", "alert-info");

          // 隐藏被呼叫页面
          !$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
          $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
          $("#callerIdView").html("");
        });

        // 返回给被叫：主叫已取消呼叫邀请。
        remoteInvitation.on("RemoteInvitationCanceled", function (content) {
          Utils.printLog("[info]", "RemoteInvitationCanceled");
        });

        // 返回给被叫：呼叫邀请进程失败。
        remoteInvitation.on("RemoteInvitationFailure", function (reason) {
          Utils.printLog("[info]", "RemoteInvitationFailure");

          SystemUI.alertWhole("呼叫邀请失败", "alert-danger");
          // 移除窗口
          CustomUI.deleteUserView(remoteInvitation.callerId);
        });

      });

      //（SDK 断线重连时触发）当前使用的 RTM Token 已超过 24 小时的签发有效期。
      rtmClient.on("TokenExpired", function () {

      });
    }
  },
  // 加入频道
  joinChannel: function (chanId) {
    if (Store.rtmClient) {
      var rtmChannel = Store.rtmClient.createChannel(chanId);
      this.rtmChannel = rtmChannel;
      rtmChannel.join();
      
      // 监听频道消息
      rtmChannel.on("ChannelMessage", function (message, memberId) {
        console.log("message", message, memberId);
        if (message.text) {
          var text = JSON.parse(message.text);

          if (text.Cmd === "Invitation") {
            // 只有对方不在线，才会收到这条消息
            CustomUI.createUserView(text.UserId, 3);

            // 如果对方超时没有上线，移除等待画面
            setTimeout(function () {
              var findUser = Store.roomUser.find(function (item) {
                return item.userId === text.UserId
              });
              if (findUser) {
                // 邀请没有成功移除用户视图窗口
                findUser.status === 3 && CustomUI.deleteUserView(text.UserId);
              }
            }, Store.setting.invitationTimeout);
          }
        }
      });
      // 监听频道人员加入, 如果人数超过512，该回调失效
      rtmChannel.on("MemberJoined", function (memberId) {

      });
      // 监听频道人员离开
      rtmChannel.on("MemberLeft", function (memberId) {
        SystemUI.alertWhole("用户"+memberId+"离开", "alert-danger");
        // 移除窗口
        CustomUI.deleteUserView(memberId);
      });
    }
  },
  // 创建呼叫邀请并发送
  createLocalInvitationAndSend: function (userid, channelId) {
    var localInvitation = Store.rtmClient.createLocalInvitation(userid);
    // 设置邀请内容
    localInvitation.content = JSON.stringify({
      Mode: 0,// 呼叫的类型0:视频 1:语音
      Conference: true,
      ChanId: channelId,
      UserData: JSON.stringify([Store.ownUserId].concat(Store.invitationUserIds)),// 邀请的人员添加到UserData
      SipData: ""
    });
    // 发送邀请
    localInvitation.send();

    // ---监听邀请回调
    Utils.printLog("[info]", "you sent an invitation to " + userid);

    // 返回给主叫：被叫已收到呼叫邀请。
    localInvitation.on("LocalInvitationReceivedByPeer", function () {
      Utils.printLog("[info]", "Your invitation has been received by "+localInvitation.calleeId);

      //对方收到邀请，说明对方已经上线，这个时候应该监听对方的在线状态，如果对方离线 主动取消邀请（防止对方刷新或掉线时无法通知服务端）
      // rtmClient.subscribePeersOnlineStatus([localInvitation.calleeId]);
      // rtmClient.on("PeersOnlineStatusChanged", (userOnlineStatus) => {
      //   if (userOnlineStatus[localInvitation.calleeId] === "OFFLINE" && Store.iscalling) {
      //     localInvitation.cancel();
      //   }
      // });
    });

    // 返回给主叫：被叫已接受呼叫邀请。
    localInvitation.on("LocalInvitationAccepted", async function (response) {
      Utils.printLog("[info]", localInvitation.calleeId + " accepted your invitation");

      // 更新用户状态及窗口显示 - 对方已接收
      CustomUI.updateUserViewStatus(localInvitation.calleeId, 1);

      // var invitationResponse = JSON.parse(response);
      // var invitationContent = JSON.parse(localInvitation.content);
      // if (!Store.inChannel) {
      //   //加入实时通讯频道
      //   Store.ownUserId = await Store.rtcClient.join(Config.RTC_APPID, invitationContent.ChanId, null, Store.ownUserId);
      //   //已加入频道
      //   Store.inChannel = true;
      //   //采集并发布媒体流
      //   await RTC.publishLocalTracks();
      // }
    });

    // 远端用户拒绝了你的呼叫邀请
    localInvitation.on("LocalInvitationRefused", function (response) {
      Utils.printLog("danger", "Your invitation has been refused by " + localInvitation.calleeId);

      SystemUI.alertWhole("用户" + localInvitation.calleeId + "拒绝了你的呼叫邀请", "alert-info")
      // 更新用户状态及窗口显示 - 对方已拒绝
      CustomUI.updateUserViewStatus(localInvitation.calleeId, 2);
      // 移除用户窗口
      CustomUI.deleteUserView(localInvitation.calleeId);
    });

    // 返回给主叫：呼叫邀请已被成功取消。
    localInvitation.on("LocalInvitationCanceled", function () {
      Utils.printLog("[info]", "Local invitation canceled");
    });

    // 返回给主叫：呼叫邀请进程失败。
    localInvitation.on("LocalInvitationFailure", function (reason) {
      Utils.printLog("[info]", "Send local invitation to " + localInvitation.calleeId + " failure");
      // 邀请已结束
      SystemUI.alertWhole("呼叫" + localInvitation.calleeId + "邀请失败" + reason, "alert-danger");
      // 移除窗口
      CustomUI.deleteUserView(localInvitation.calleeId);
    });
  }
};

// 自定义
var CustomUI = {
  // 显示被呼叫页面
  showReciveCallPage: function() {
    !$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
    $("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").removeClass("d-none");
  },
  // 显示会议页面
  showMeetPage: function() {
    !$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
    !$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
    $("#meetMutiPage").hasClass("d-none") && $("#meetMutiPage").removeClass("d-none");
  },
  // 显示呼叫邀请页面
  showCallPage: function() {
    !$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
    !$("#meetMutiPage").hasClass("d-none") && $("#meetMutiPage").addClass("d-none");
    $("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
  },
  // 创建邀请用户标签
  createButtonUser: function (allInputVal) {
    if (!~Store.invitationUserIds.indexOf(allInputVal)) {
      // 并创建新的div存放
      Store.invitationUserIds.push(allInputVal);
      var opt = $(
        '<button type="button" class="btn btn-light user-tag" onclick="CustomUI.deleteButtonUser(this, ' +allInputVal+')">' + 
          allInputVal +
          '<i class="iconfont icon-delete_close"></i>' + 
          '<i class="iconfont icon-delete_open"></i>' + 
        '</button>'
      )
      $("#multiUserBtn").append(opt);
    }
  },
  // 删除邀请用户标签
  deleteButtonUser: function (item, userid) {
    if (!!~Store.invitationUserIds.indexOf(''+userid)) {
      item.remove();
      Store.invitationUserIds.splice(Store.invitationUserIds.indexOf(''+userid), 1);
    }
  },
  // 创建用户视图窗口 - 自定义用户状态： 0/1/2/3 等待应答/对方同意/对方拒绝/对方不在线
  createUserView: function (userid, status) {
    var isExisited = false;
    Store.roomUser.map(function (item) {
      if (item.userId === userid) {
        isExisited = true;
      }
    });
    if (isExisited) return;

    Store.roomUser.push({
      userId: userid,
      info: null,
      status: status,        // 自定义用户状态： 0/1/2/3 等待应答/对方同意/对方拒绝/对方不在线
    });
    // 创建窗口
    var box = $('<div class="video-preview_small_box" id="' + userid + 'Window"></div>');
    var basicView = $(
      '<div class="d-flex video-preview justify-content-center align-items-center" id="' + userid + 'VideoView">' + 
        '<img draggable="false" style="position: absolute;" class="d-flex img-responsive" src="assets/images/logo_title.png" />' + 
      '</div>' +
      '<!-- 左下角小方格 -->' +
      '<div class="prompt_little d-flex">' +
        '<i class="iconfont icon-audio_close_slant icon_color_red" id="'+ userid + 'AudioState"></i>' +
        '<div>' + userid + '</div>' +
      '</div>'
    );
    var statusView = $(
      '<!-- 用户不在线 无人应答 拒绝 -->' + 
      '<div id="' + userid + 'StatusView" class="video-preview_state d-flex justify-content-center align-items-center">' +
        '<div class="video-preview_status d-flex flex-column align-items-center">' +
          '<span><i class="iconfont icon-loading video-icon_font"></i></span>' + 
          '<span id="' + userid + 'Status">' + (status === 3 ? "用户不在线" : status === 0 && "无人应答") + '</span>' + 
        '</div>' + 
      '</div>'
    );
    // 大小屏幕切换
    box.bind("click", function() {
      var findUser = Store.roomUser.find(function(user) {
        return user.userId === userid;
      });
      if (!findUser || !findUser.videoTrack) return;
      //当前大屏没有用户
      if (Store.bigViewUserId === "") {
        Store.bigViewUserId = userid;
        findUser.videoTrack.stop();
        findUser.videoTrack.play("peerMutiVideoPreview", {
          fit: "contain"
        });
      } else {
        if (Store.bigViewUserId !== userid) {
          //大屏用户切回去原来的小视图
          var bitViewUser = Store.roomUser.find(function(user) {
            return user.userId === Store.bigViewUserId;
          });
          bitViewUser.videoTrack.stop();
          bitViewUser.videoTrack.play(Store.bigViewUserId + "VideoView", {
            fit: "contain"
          });
          //当前点击的小窗口切换到大屏
          Store.bigViewUserId = userid;
          findUser.videoTrack.stop();
          findUser.videoTrack.play("peerMutiVideoPreview", {
            fit: "contain"
          });
        } else {
          findUser.videoTrack.stop();
          findUser.videoTrack.play(userid + "VideoView", {
            fit: "contain"
          });
          Store.bigViewUserId = "";
        }
      }
    });
    box.append(basicView);
    if (status === 0 || status === 3) {
      box.append(statusView);
    }
    $("#mineMutiTitleVideoPreview").append(box);


  },
  // 删除用户视图窗口
  deleteUserView: function (userid) {
    Store.roomUser.map(function (item, index) {
      if (item.userId === userid) {
        Store.roomUser.splice(index, 1);
        !!~Store.invitationUserIds.indexOf(userid) && Store.invitationUserIds.splice(Store.invitationUserIds.indexOf(userid), 1);
        $("#" + userid + "Window") && $("#" + userid + "Window").remove();
      }
    });
  },
  // 更新用户音频状态
  updateUserAudioState: function (userid, haveAudio) {
    if (haveAudio) {
      if ($("#"+userid+"AudioState").hasClass("icon-audio_close_slant")) {
        $("#"+userid+"AudioState").removeClass("icon-audio_close_slant");
      }
    } else {
      if (!$("#"+userid+"AudioState").hasClass("icon-audio_close_slant")) {
        $("#"+userid+"AudioState").addClass("icon-audio_close_slant");
      }
    }
  },
  // 更新用户在线状态
  updateUserViewStatus: function (userid, status) {
    Store.roomUser.map(function (item) {
      if (item.userId === userid) {
        item.status = status;

        if (status === 1 || status === 2) {// 自定义用户状态： 0/1/2/3 无人应答/对方同意/对方拒绝/对方不在线
          $("#" + userid + "StatusView").remove();
        } else {
          $("#" + userid + "Status").html(status === 0 ? "无人应答" : status === 3 && "对方不在线");
        }
      }
    });
  }
};

// --------main.js
// 检测是否有硬件设备
(async function() {
  var [cameras, microhones] = await Promise.all([
    ArRTC.getCameras(),
    ArRTC.getMicrophones(),
  ]);

  if (cameras.length === 0 && microhones.length === 0) {
    SystemUI.alertWhole("缺少麦克风和摄像头设备", "alert-danger");
    $("#MultipleCalls").prop("disabled", true);
    return;
  } else {
    if (cameras.length === 0) {
      Store.setting.enableVideo = false;
      $("#userVideoCameraSetting").porp("disabled", true);
    }
    if (microhones.length === 0) {
      Store.setting.enableAudio = false;
      $("#userMicrophoneSetting").porp("disabled", true);
    }
  }

  // 初始化RTC
  RTC.init();
  // 初始化RTM
  RTM.init();
})();

// 监听用户ID输入 - 创建用户用户标签
$('#multiUserInputs > input').bind('input propertychange', function (event) {
  var inputVal = $(this).val();
  var reg = /^[0-9]+$/;

  if (!reg.test(inputVal)) {
    $(this).val('');
  } else {
    $(this).next('input').select();
    $(this).next('input').focus();

    var allInputVal = "";
    $('#multiUserInputs > input').each(function () {
      allInputVal += this.value;
    });
    // 筛选并创建用户标签
    if (allInputVal.length === 4) {
      // 生成用户标签
      CustomUI.createButtonUser(allInputVal);
      // 清空所有输入框
      $('#multiUserInputs > input').each(function () {
        this.value = "";
      });
      $('#multiUserInputs > input')[0].focus();
    }
  }
});

// 监听用户删除id
$('#multiUserInputs > input').keydown(function (event) {
  // 删除往前 添加往后
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

// 监听用户摄像头设置开关
$("#userVideoCameraSetting").change(function() {
  var videoEnable = $(this).prop("checked");
  Store.setting.enableVideo = videoEnable;
});

// 监听用户麦克风设置开关
$("#userMicrophoneSetting").change(function() {
  var audioEnable = $(this).prop("checked");
  Store.setting.enableAudio = audioEnable;
});

// 监听用户ID输入 - 邀请用户
$('#userMutiModalInputs > input').bind('input propertychange', function (event) {
  var inputVal = $(this).val();
  var reg = /^[0-9]+$/;

  if (!reg.test(inputVal)) {
    $(this).val('');
  } else {
    $(this).next('input').select();
    $(this).next('input').focus();
  }
});

// 监听用户删除id
$('#userMutiModalInputs > input').keydown(function (event) {
  // 删除往前 添加往后
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

// 监听打开设置按钮点击
$("#multiOpenSettingBtn").click(function () {
  if (!$("#loginMutiSetting").hasClass("show")) {
    $("#loginMutiSetting").addClass("show");
    $("#userVideoCameraSetting").prop("checked", Store.setting.enableVideo);
    $("#userMicrophoneSetting").prop("checked", Store.setting.enableAudio);
  }
});

// 监听关闭设置按钮点击
$("#closeMutiSettingBtn").click(function () {
  if ($("#loginMutiSetting").hasClass("show")) {
    $("#loginMutiSetting").removeClass("show");
  }
});

// 发起多人音视频通话
$("#MultipleCalls").click(async function () {
  if (Store.invitationUserIds.length > 0) {
    // RTM 加入频道
    var channelId = '' + Utils.generateNumber(9);
    Store.channelId = channelId;
    RTM.joinChannel(channelId);

    // 显示会议页面
    CustomUI.showMeetPage();

    // 查询呼叫的用户是否在线
    var userOnlineStatus = await Store.rtmClient.queryPeersOnlineStatus(Store.invitationUserIds);
    // 遍历邀请
    Store.invitationUserIds.map(function (userid) {
      // 创建用户视图窗口
      CustomUI.createUserView(userid, userOnlineStatus[userid] ? 0 : 3);
      // 创建呼叫邀请并发送
      RTM.createLocalInvitationAndSend(userid, channelId);
      // 如果用户不在线（这里已经判断类型了），超时60秒需要
      if (userOnlineStatus[userid] === false) {
        setTimeout(function () {
          var findUsers = Store.roomUser.filter(function (item) {
            return item.userId === userid
          });
          if (findUsers.length === 0) {
            // 邀请没有成功移除用户视图窗口
            CustomUI.deleteUserView(userid);
          }
        }, Store.setting.invitationTimeout);
      }
    });

    if (!Store.inChannel) {
      // 采集本地图像
      await RTC.getUserMedia();
      // 加入实时通讯频道
      Store.ownUserId = await Store.rtcClient.join(Config.RTC_APPID, channelId, null, Store.ownUserId);
      // 已加入频道
      Store.inChannel = true;
      // 采集并发布媒体流
      await RTC.publishLocalTracks();
    }
  } else {
    SystemUI.alertWhole("请输入邀请的用户", "alert-danger");
  }
});

// 视频开关
$("#setVideoEnableBtn").click(function() {
  Store.localTracks.enableVideo = !Store.localTracks.enableVideo;
  RTC.setEnableVideo(Store.localTracks.enableVideo);
});

// 音频开关
$("#setAudioEnableBtn").click(function() {
  Store.localTracks.enableAudio = !Store.localTracks.enableAudio;
  RTC.setEnableAudio(Store.localTracks.enableAudio);
});

// 挂断
$("#hangupMutiBtn").click(function() {
  if (Store.inChannel) {
    // 释放采集设备
    Store.localTracks.videoTrack && Store.localTracks.videoTrack.close();
    Store.localTracks.audioTrack && Store.localTracks.audioTrack.close();
    //退出频道
    Store.rtmClient.logout();
    Store.rtcClient.leave();

    // 关闭页面，清空所有状态、视图
    $("#mineMutiTitleVideoPreview").html("");//清空小窗口
    $("#peerMutiVideoPreview").html("");//清空大窗口
    
    // 返回呼叫邀请页面
    CustomUI.showCallPage();

    // 清空标识 reset
    {
      Store.RTM.rtmChannel = null;
      Store.inChannel = false;
      Store.rtmClient = null;
      Store.rtcClient = null;
      Store.channelId = "";
      Store.invitationUserIds = [];
      Store.localTracks = {
        videoTrack       : null,
        audioTrack       : null,
        settingVideoTrack: null,
        enableVideo      : true,   // 本地摄像头是否关闭
        enableAudio      : true,   // 本地麦克风是否关闭
      };
      Store.ownUserId = "";
      Store.roomUser = [];
      Store.setting = {
        // 点对点呼叫设置
        videoSize  : [320, 180],   // 设置视频采集的分辨率大小
        audioDevice: "default",    // 设置音频设备ID
        videoDevice: "default",    // 设置视频设备ID
        // 多人呼叫设置
        enableAudio: true,   //
        enableVideo: true,   //
      };
    }
  }
});

// 会议中邀请
$("#mutiModalBtn").click(async function () {
  var userid = "";
  $('#userMutiModalInputs > input').each(function () {
    userid += this.value;
  });
  // 筛选并创建用户标签
  if (userid.length !== 4) {
    systemUI.alertWhole("用户ID不合法", "alert-danger");
    return;
  }
  // 清空所有输入框
  $('#userMutiModalInputs > input').each(function () {
    this.value = "";
  });
  
  // 查询用户是否在线
  var userOnlineStatus = await Store.rtmClient.queryPeersOnlineStatus([userid]);

  // 不在线，发送频道消息通知其他人员创建等待窗口
  if (!userOnlineStatus[userid]) {
    RTM.rtmChannel.sendMessage({
      text: JSON.stringify({
        Cmd: "Invitation",
        UserId: userid
      })
    });
    // 如果对方超时没有上线，移除等待画面
    setTimeout(function () {
      var findUser = Store.roomUser.find(function (item) {
        return item.userId === userid
      });
      if (findUser) {
        // 邀请没有成功移除用户视图窗口
        findUser.status === 3 && CustomUI.deleteUserView(userid);
      }
    }, Store.setting.invitationTimeout);
  }
  // 发送邀请
  RTM.createLocalInvitationAndSend(userid, Store.channelId);
  // 创建用户视图窗口
  CustomUI.createUserView(userid, userOnlineStatus[userid] ? 0 : 3);
  // 隐藏邀请窗口
  $('#invitationModal').modal('hide');
});