var Utils = {
	generateNumber(len) {
		var numLen = len || 8;
		var generateNum = Math.ceil(Math.random() * Math.pow(10, numLen));
		return generateNum < Math.pow(10, numLen - 1) ? Utils.generateNumber(numLen) : generateNum;
	},
	printLog() {
		console.log.apply(this, arguments);
	}
}

//配置
var Config = {
	RTC_APPID: "", //RTC 应用ID 
	RTM_APPID: "", //RTM 应用ID 
	RTC_MODE: "live", //RTC 通信模式
	RTC_CODEC: "h264", //RTC 视频编码格式
	SELECT_CAMERA_DEVICE: sessionStorage.getItem("defaultCameraDeviceId") || undefined
};

//数据存储
var Store = {
	ownUserId: "" + Utils.generateNumber(4), //自己的用户ID - 这里需要转字符串
	peerUserId: "", //远端的用户的ID
	//多人
	channelId: "", // 频道房间号
	bigViewUserId: "", // 当前大屏显示用户的userId
	inChannel: false, // 是否已加入频道
	oConference: true, //p2p标识 多人标识 false
	// mutiCharacteristic: false, //多人标识
	rtcLogin: false,
	rtmLogin: false,
	audioOrvideo: false, //语音或视频 标识
	iscalling: false, // 呼叫或被呼叫中
	rtcClient: null,
	rtmClient: null,

	//本地采集的音视频轨道
	localTracks: {
		videoTrack: null,
		audioTrack: null,
		settingVideoTrack: null,
		// p2p
		hasVideoTrack: false,
		hasAudioTrack: false,
		//多人
		enableVideo: true, // 本地摄像头是否关闭
		enableAudio: true, // 本地麦克风是否关闭
	},

	//呼叫设置
	setting: {
		//点对点呼叫设置
		videoSize: [320, 180], //设置视频采集的分辨率大小
		audioDevice: "default", // 设置音频设备ID
		videoDevice: "default", // 设置视频设备ID
		//多人呼叫设置
		enableAudio: true, //
		enableVideo: true, //
		invitationTimeout: 60 * 1000,
	},

	localInvitation: null,
	remoteInvitation: null,
	roomUser: [], // 记录房间内所有邀请或被邀请人员信息
	invitationUserIds: [], // 邀请或被邀请参会人员用户ID

	// 呼叫时间
	duration: 0,
	durationTime: null,
	oReleaseOpen: true,
	cancelP2P: [], //多人通话时wen主叫挂断发送挂断信息
};

// 自定义
var CustomUI = {
	/**
	 *公共
	 */
	// 用户ID输入  用户删除id
	inputChangId: function (oid) {

		//监听用户ID输入
		$(oid).bind('input propertychange', function (event) {
			var inputVal = $(this).val();
			var reg = /^[0-9]+$/;
			if (!reg.test(inputVal)) {
				$(this).val('');
			} else {
				$(this).next('input').select();
				$(this).next('input').focus();
			}
			var oItem = '';
			for (var i = 0; i < $(oid).length; i++) {
				oItem = oItem + $(oid)[i].value
			}

			if (oItem.length == 4) {
				$("#p2pAudioMakeCall").hasClass("disabled") && $("#p2pAudioMakeCall").removeClass("disabled");
				$("#p2pVideoMakeCall").hasClass("disabled") && $("#p2pVideoMakeCall").removeClass("disabled");
				oItem = '';
			} else {
				!$("#p2pAudioMakeCall").hasClass("disabled") && $("#p2pAudioMakeCall").addClass("disabled");
				!$("#p2pVideoMakeCall").hasClass("disabled") && $("#p2pVideoMakeCall").addClass("disabled");
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
					// 按钮变暗
					!$("#p2pAudioMakeCall").hasClass("disabled") && $("#p2pAudioMakeCall").addClass("disabled");
					!$("#p2pVideoMakeCall").hasClass("disabled") && $("#p2pVideoMakeCall").addClass("disabled");
				}
			}
		});

	},
	//关闭设置
	closeSettingBtn: function (fase) {
		if (fase) {
			//p2p
			if ($("#loginSetting").hasClass("show")) {
				$("#loginSetting").removeClass("show");
				$("#settingVideoPreview").html("");
			}
		} else {
			//多人
			if ($("#loginMutiSetting").hasClass("show")) {
				$("#loginMutiSetting").removeClass("show");
			}
		}
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
			$('[data-dismiss="alert"]').alert('close');
		}, 2000);
	},
	// 全局警告框
	alertWhole: function (text, classStyle) {
		if (!classStyle) {
			classStyle = "alert-danger"
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
			$('[data-dismiss="alert"]').alert('close');
		}, 2000);
	},
	//修改标题名称
	setPageTitle: function (title) {
		$('title').html(title);
	},
	// 释放资源
	Release: function () {
		if (Store.oReleaseOpen) {
			Store.oReleaseOpen = false;
			// 清除通话时长
			if (Store.durationTime) {
				clearInterval(Store.durationTime);
				Store.duration = 0;
				$("#audioDuration") && $("#audioDuration").text("00:00");
				$("#videoDuration") && $("#videoDuration").text("00:00");
			}

			//释放资源
			Store.localTracks.videoTrack && (Store.localTracks.videoTrack.close(), Store.localTracks.videoTrack = null,
				Store.hasVideoTrack =
				false);

			Store.localTracks.audioTrack && (Store.localTracks.audioTrack.close(), Store.localTracks.audioTrack = null,
				Store.hasAudioTrack =
				false);

			// 清空标记
			CustomUI.closeStamp();

			Store.ownUserId && $("#" + Store.ownUserId) && $("#" + Store.ownUserId).remove();
			Store.peerUserId && $("#" + Store.peerUserId) && $("#" + Store.peerUserId).remove();
			CustomUI.alertWhole("通话已结束", "alert-info");
			$("#mineMutiTitleVideoPreview").html(""); //清空小窗口
			$("#peerMutiVideoPreview").html(""); //清空大窗口
			$("#multiUserBtn").html("");//清空用户标签
			//隐藏视频通讯页面
			!$("#meetPage").hasClass("d-none") && $("#meetPage").addClass("d-none");
			$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
			!$("#loginForm").hasClass("d-none") && $("#loginForm").addClass("d-none");
			!$("#loginMutiFprm").hasClass("d-none") && $("#loginMutiFprm").addClass("d-none");
			$("#loginHome").hasClass("d-none") && $("#loginHome").removeClass("d-none");
			!$("#makeCallPage").hasClass("d-none") && $("#makeCallPage").addClass("d-none");
			!$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
			!$("#audioPage").hasClass("d-none") && $("#audioPage").addClass("d-none");
			!$("#meetMutiPage").hasClass("d-none") && $("#meetMutiPage").addClass("d-none");
			// p2p如果在设置页面 退出设置页面
			CustomUI.closeSettingBtn(true);
			// 多人关闭设置
			CustomUI.closeSettingBtn(false);
		}
	},
	//清空标记
	closeStamp: function () {
		RTM.rtmChannel = null;
		Store.rtcClient && Store.rtcClient.leave();
		// Store.rtcClient = null;
		// Store.rtmClient = null;
		Store.roomUser = [];
		Store.invitationUserIds = [];
		// Store.ownUserId = "";
		Store.iscalling = false;
		Store.channelId = "";
		Store.inChannel = false;
		Store.audioOrvideo = false;
		Store.cancelP2P = [];
		Store.bigViewUserId = "";
		Store.localTracks = {
			videoTrack: null,
			audioTrack: null,
			settingVideoTrack: null,
			// p2p
			hasVideoTrack: false,
			hasAudioTrack: false,
			enableVideo: true, // 本地摄像头是否关闭
			enableAudio: true, // 本地麦克风是否关闭
		};
		Store.setting = {
			// 点对点呼叫设置
			videoSize: [320, 180], // 设置视频采集的分辨率大小
			audioDevice: "default", // 设置音频设备ID
			videoDevice: "default", // 设置视频设备ID
			// 多人呼叫设置
			enableAudio: true, //
			enableVideo: true, //
			invitationTimeout: 60 * 1000,
		};
	},
	/**
	 *p2p
	 */
	// 显示视频界面 隐藏语音界面
	hiddP2PAudioPage: function () {
		$("#meetPage").hasClass("d-none") && $("#meetPage").removeClass("d-none");
		!$("#meetMutiPage").hasClass("d-none") && $("#meetMutiPage").addClass("d-none");
		!$("#audioPage").hasClass("d-none") && $("#audioPage").addClass("d-none");
	},
	// 显示语音界面 隐藏视频界面
	showP2PAudioPage: function () {
		!$("#meetPage").hasClass("d-none") && $("#meetPage").addClass("d-none");
		!$("#meetMutiPage").hasClass("d-none") && $("#meetMutiPage").addClass("d-none");
		$("#audioPage").hasClass("d-none") && $("#audioPage").removeClass("d-none");
	},
	//隐藏呼叫邀请页面
	hiddenP2PCallPage: function () {
		!$("#makeCallPage").hasClass("d-none") && $("#makeCallPage").addClass("d-none");
		$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
		!$("#loginForm").hasClass("d-none") && $("#loginForm").addClass("d-none");
		!$("#loginMutiFprm").hasClass("d-none") && $("#loginMutiFprm").addClass("d-none");
		$("#loginHome").hasClass("d-none") && $("#loginHome").removeClass("d-none");
		$("#calleeIdView").html("");
		// 如果在设置页面 退出设置页面
		$("#closeSettingBtn").click()
	},
	//隐藏被呼叫页面
	hiddenReciveCallPage: function () {
		!$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
		$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
		!$("#loginForm").hasClass("d-none") && $("#loginForm").addClass("d-none");
		!$("#loginMutiFprm").hasClass("d-none") && $("#loginMutiFprm").addClass("d-none");
		$("#loginHome").hasClass("d-none") && $("#loginHome").removeClass("d-none");
		$("#callerIdView").html("");
		// 如果在设置页面 退出设置页面
		$("#closeSettingBtn").click()
	},
	// 初始设置
	initSetingP2P: function () {
		$("#mineVideoPreview_bg").css("zIndex", "0");
		$("#audioSwitchBtn > i").removeClass("icon-_yinpinguanbizhong").addClass("icon-_yinpinkaiqizhong icon_color_blue");
		$("#mineVideoPreview").html($("#mineVideoPreview_bg"));
		!$("#p2pAudioMakeCall").hasClass("disabled") && $("#p2pAudioMakeCall").addClass("disabled");
		!$("#p2pVideoMakeCall").hasClass("disabled") && $("#p2pVideoMakeCall").addClass("disabled");
		!$("#MultipleCalls").hasClass("disabled") && $("#MultipleCalls").addClass("disabled");
	},
	//接受呼叫
	acceptCall: function (forceAudioCall) {
		if (Store.iscalling && Store.remoteInvitation) {
			Store.peerUserId = Store.remoteInvitation.callerId;
			var invitationContent = JSON.parse(Store.remoteInvitation.content);
			var callMode = invitationContent.Mode;
			if (callMode === 0 && !forceAudioCall) { //视频
				Store.remoteInvitation.response = JSON.stringify({
					Mode: 0,
					Conference: invitationContent.Conference,
					UserData: "",
					SipData: ""
				});
				$("#meetPage").hasClass("d-none") && $("#meetPage").removeClass("d-none");
			} else if (forceAudioCall || callMode === 1) { //音频
				Store.remoteInvitation.response = JSON.stringify({
					Mode: 1,
					Conference: invitationContent.Conference,
					UserData: "",
					SipData: ""
				});
				$("#audioPage").hasClass("d-none") && $("#audioPage").removeClass("d-none");
			}
			// 接受呼叫
			Store.remoteInvitation.accept();

			Store.iscalling = true;
			Store.remoteInvitation = null;
			Store.audioOrvideo = false;
			//隐藏被呼叫页面
			!$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
			$("#callerIdView").html("");
		}
	},
	// 通讯时长
	P2PCommunication: function (fase) {
		if (fase) {
			// 语音
			Store.durationTime = setInterval(function () {
				Store.duration++;
				CustomUI.callDuration(Store.duration, "audioDuration");
			}, 1000);
		} else {
			// 视频
			Store.durationTime = setInterval(function () {
				Store.duration++;
				CustomUI.callDuration(Store.duration, "videoDuration")
			}, 1000);
		}
	},

	// 计算呼叫时间
	callDuration: function (duration, id) {
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
	},

	/**
	 *多人呼叫
	 */
	// 显示被呼叫页面
	showReciveCallPage: function () {
		!$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
		!$("#changAudioBtn").hasClass("d-none") && $("#changAudioBtn").addClass("d-none");
		$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").removeClass("d-none");
	},
	// 显示会议页面
	showMeetPage: function () {
		!$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
		!$("#audioPage").hasClass("d-none") && $("#audioPage").addClass("d-none");
		!$("#meetPage").hasClass("d-none") && $("#meetPage").addClass("d-none");
		!$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
		$("#meetMutiPage").hasClass("d-none") && $("#meetMutiPage").removeClass("d-none");
	},
	// 显示呼叫邀请页面
	showCallPage: function () {
		!$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
		!$("#meetMutiPage").hasClass("d-none") && $("#meetMutiPage").addClass("d-none");
		!$("#MultipleCalls").hasClass("disabled") && $("#MultipleCalls").addClass("disabled");
		$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
	},
	// 创建邀请用户标签
	createButtonUser: function (allInputVal) {
		if (Store.invitationUserIds.length <= 5) {
			if (!~Store.invitationUserIds.indexOf(allInputVal) && allInputVal != Store.ownUserId) {
				// 并创建新的div存放
				Store.invitationUserIds.push(allInputVal);
				var opt = $(
					'<button type="button" class="btn btn-light user-tag" onclick="CustomUI.deleteButtonUser(this, ' + allInputVal +
					')">' +
					allInputVal +
					'<i class="iconfont icon-delete_close"></i>' +
					'<i class="iconfont icon-delete_open"></i>' +
					'</button>'
				)
				$("#multiUserBtn").append(opt);
			} else {
				CustomUI.alertError("该用户重复输入或不能输入自己");
			}
		} else {
			CustomUI.alertWhole("不能一次邀请超过6个");
		}
	},
	// 删除邀请用户标签
	deleteButtonUser: function (item, userid) {
		if (!!~Store.invitationUserIds.indexOf('' + userid)) {
			item.remove();
			Store.invitationUserIds.splice(Store.invitationUserIds.indexOf('' + userid), 1);
			if (Store.invitationUserIds.length == 0) {
				!$("#MultipleCalls").hasClass("disabled") && $("#MultipleCalls").addClass("disabled");
			} else {
				$("#MultipleCalls").hasClass("disabled") && $("#MultipleCalls").removeClass("disabled");
			}
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
			status: status, // 自定义用户状态： 0/1/2/3 等待应答/对方同意/对方拒绝/对方不在线
		});
		// 创建窗口
		var box = $('<div class="video-preview_small_box" id="' + userid + 'Window"></div>');
		var basicView = $(
			'<div class="d-flex video-preview justify-content-center align-items-center" id="' + userid + 'VideoView">' +
			'<img draggable="false" style="position: absolute;" class="d-flex img-responsive" src="assets/images/logo_title.png" />' +
			'</div>' +
			'<!-- 左下角小方格 -->' +
			'<div class="prompt_little d-flex">' +
			'<i class="iconfont icon-audio_close_slant icon_color_red" id="' + userid + 'AudioState"></i>' +
			'<div>' + userid + '</div>' +
			'</div>'
		);
		var statusView = $(
			'<!-- 用户不在线 无人应答 拒绝 -->' +
			'<div id="' + userid +
			'StatusView" class="video-preview_state d-flex justify-content-center align-items-center">' +
			'<div class="video-preview_status d-flex flex-column align-items-center">' +
			'<span><i class="iconfont icon-loading video-icon_font"></i></span>' +
			'<span id="' + userid + 'Status">' + (status === 3 ? "无人应答" : status === 0 && "等待应答") + '</span>' +
			'</div>' +
			'</div>'
		);
		// 大小屏幕切换
		box.bind("click", function () {
			var findUser = Store.roomUser.find(function (user) {
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
					var bitViewUser = Store.roomUser.find(function (user) {
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
				!!~Store.invitationUserIds.indexOf(userid) && Store.invitationUserIds.splice(Store.invitationUserIds.indexOf(
					userid), 1);
				$("#" + userid + "Window") && $("#" + userid + "Window").remove();
			}
		});
	},
	// 更新用户音频状态
	updateUserAudioState: function (userid, haveAudio) {
		if (haveAudio) {
			if ($("#" + userid + "AudioState").hasClass("icon-audio_close_slant")) {
				$("#" + userid + "AudioState").removeClass("icon-audio_close_slant");
			}
		} else {
			if (!$("#" + userid + "AudioState").hasClass("icon-audio_close_slant")) {
				$("#" + userid + "AudioState").addClass("icon-audio_close_slant");
			}
		}
	},
	// 更新用户在线状态
	updateUserViewStatus: function (userid, status) {
		Store.roomUser.map(function (item) {
			if (item.userId === userid) {
				item.status = status;
				if (status === 1 || status === 2) { // 自定义用户状态： 0/1/2/3 无人应答/对方同意/对方拒绝/对方不在线
					$("#" + userid + "StatusView").remove();
				} else {
					$("#" + userid + "Status").html(status === 0 ? "等待应答" : status === 3 && "无人应答");
				}
			}
		});
	}
};
//查看sdk版本
console.log(ArRTC.VERSION);
// 初始化
var RTC = {
	// 初始化RTC
	init: function () {
		if (Store.rtcClient === null) {
			var rtcClient = ArRTC.createClient({
				mode: Config.RTC_MODE,
				codec: Config.RTC_CODEC
			});

			Store.rtcClient = rtcClient;
			// Store.rtcClient.setParameters({
			// //配置内网网关
			// 	ConfPriCloudAddr: {
			// 		ServerAdd: "",
			// 		Port: ,
			// 		Wss: true
			// 	},
			// })
			// RTC SDK 监听用户发布
			rtcClient.on("user-published", async function (user, mediaType) {
				await rtcClient.subscribe(user, mediaType);
				Utils.printLog('[info] subscribe success');
				if (Store.oConference) {
					//p2p
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
					}
				} else {
					// 多人
					var findUser = Store.roomUser.find(function (item) {
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
						// 更改用户的音频状态
						CustomUI.updateUserAudioState(user.uid, user.audioTrack);
					}
					// 更改用户的音频状态
					// CustomUI.updateUserAudioState(user.uid, user.audioTrack);
				}
			});
			// RTC SDK 监听用户取消发布
			rtcClient.on("user-unpublished", async function (user, mediaType) {
				Utils.printLog('[info] user-unpublished');
				if (!Store.oConference) {
					// 多人
					// 远程用户
					var findUser = Store.roomUser.find(function (user) {
						return user.userId === Store.ownUserId;
					});
					if (mediaType === "video") {
						findUser.videoTrack = null;
					} else if (mediaType === "audio") {
						findUser.audioTrack = null;
						// 更改用户的音频状态
						CustomUI.updateUserAudioState(user.uid, false);
					}
				}
			});
			// RTC SDK 监听用户加入频道成功
			rtcClient.on("user-joined", async function (user) {
				Utils.printLog("user-joined");
				// 更改状态
				CustomUI.updateUserViewStatus(user.uid, 1);
			});
			// RTC SDK 监听用户离开频道
			rtcClient.on("user-left", async function (user, reason) {
				Utils.printLog("user-left");
				//因网络断线离开
				if (reason == "ServerTimeOut") {
					CustomUI.alertWhole("用户" + user.uid + "网络断线离开");
				}
				if (!Store.oConference) {
					// 获取频道内的用户
					var userNum = await RTM.rtmChannel.getMembers();
					//多人 
					if (userNum.length >= 2) {

						await CustomUI.alertWhole("用户" + user.uid + "离开", "alert-danger");
						setTimeout(function () {
							// 移除用户窗口
							CustomUI.deleteUserView(user.uid);
						}, 200)

					} else {
						//退出频道
						RTM.rtmChannel && RTM.rtmChannel.leave();
						// 关闭页面，清空所有状态、视图
						$("#mineMutiTitleVideoPreview").html(""); //清空小窗口
						$("#peerMutiVideoPreview").html(""); //清空大窗口
						Store.oReleaseOpen = true;
						//释放资源
						await CustomUI.Release();
					}
				} else {
					//p2p
					//释放资源
					Store.oReleaseOpen = true;
					//取消本地发布
					Store.rtcClient && Store.rtcClient.unpublish();
					await CustomUI.Release();
				}
			});
			// RTC SDK SDK 与服务器的连接状态发生改变回调
			rtcClient.on("connection-state-change", function (curState, revState, reason) {
				if (curState == "RECONNECTING") {
					CustomUI.alertWhole("网络异常");
					// 刷新页面
					setTimeout(function () {
						window.location.reload();
					}, 1000)
				}
			})
		}
	},
	//p2p 采集用户音视频并发布
	getUserMediaAndPublish: async function (callMode) {
		Store.localTracks.audioTrack = null;
		Store.localTracks.videoTrack = null;
		var [cameras, microhones] = await Promise.all([
			ArRTC.getCameras(),
			ArRTC.getMicrophones(),
		]);
		if ((cameras.length === 0 && microhones.length === 0) || (callMode === 0 && cameras.length === 0)) {
			CustomUI.alertError("上麦失败！确实麦克风和摄像头");
			return
		}
		if (cameras.length > 0 && microhones.length > 0 && callMode === 0) { //仅视频呼叫才打开摄像头
			[Store.localTracks.audioTrack, Store.localTracks.videoTrack] = await ArRTC.createMicrophoneAndCameraTracks(
				{}, {
				// encoderConfig: {
				// 	bitrateMax: 1130,
				// 	// bitrateMin: ,
				// 	frameRate: 15,
				// 	height: 180,
				// 	width: 320,
				// }
			}
			);
		} else {
			if (cameras.length > 0 && callMode === 0) {
				Store.localTracks.videoTrack = await ArRTC.createCameraVideoTrack({
					// encoderConfig: {
					// 	bitrateMax: 1130,
					// 	// bitrateMin: ,
					// 	frameRate: 15,
					// 	height: 180,
					// 	width: 320,
					// }
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
			CustomUI.alertError("没有设备无法发布媒体流");
			return;
		}
		$("#UserIdChanel").text(Store.ownUserId);
		//预览本地图像
		var videoBox = document.createElement("div");
		videoBox.id = Store.ownUserId;
		videoBox.className = "video-preview_box";
		document.getElementById('mineVideoPreview').appendChild(videoBox);
		Store.localTracks.videoTrack && Store.localTracks.videoTrack.play(videoBox.id);

		//设置主播身份并发布
		RTC.publishLocalTracks();

		// 标识
		Store.audioOrvideo = true;
		Store.localTracks.hasVideoTrack = !!Store.localTracks.videoTrack;
		Store.localTracks.hasAudioTrack = !!Store.localTracks.audioTrack;
		$("#videoSwitchBtn").attr("disabled", !Store.localTracks.hasVideoTrack);
		$("#audioSwitchBtn").attr("disabled", !Store.localTracks.hasAudioTrack);
	},

	//多人 采集用户音视频
	getUserMedia: async function () {
		var [cameras, microhones] = await Promise.all([
			ArRTC.getCameras(),
			ArRTC.getMicrophones(),
		]);
		if (cameras.length > 0 && microhones.length > 0) {
			[Store.localTracks.audioTrack, Store.localTracks.videoTrack] = await ArRTC.createMicrophoneAndCameraTracks(
				{}, {
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

			if (cameras.length > 0) {
				Store.localTracks.videoTrack = await ArRTC.createCameraVideoTrack({
					encoderConfig: {
						bitrateMax: 1130,
						// bitrateMin: ,
						frameRate: 15,
						height: 180,
						width: 320,
					}
				}).catch(function (err) {
					console.log("err => ", err);
				});
			}

			if (microhones.length > 0) {
				Store.localTracks.audioTrack = await ArRTC.createMicrophoneAudioTrack()
					.catch(function (err) {
						console.log("err => ", err);
					});
			}
		}

		// 预览本地图像
		CustomUI.createUserView(Store.ownUserId, 1);

		var self = Store.roomUser.find(function (user) {
			return user.userId === Store.ownUserId;
		});
		self.audioTrack = Store.localTracks.audioTrack;
		self.videoTrack = Store.localTracks.videoTrack;
		// 预览本地视频采集的图像
		Store.localTracks.videoTrack && Store.localTracks.videoTrack.play(Store.ownUserId + "VideoView", {
			fit: "contain"
		});
		// RTC.setEnableAudio(Store.setting.enableAudio);
		// RTC.setEnableVideo(Store.setting.enableVideo);
	},
	// 发布本地采集的音视频track
	publishLocalTracks: async function () {
		if (Store.localTracks.videoTrack || Store.localTracks.audioTrack) {
			// 设置主播身份并发布
			Store.rtcClient.setClientRole("host");
			await Store.rtcClient.publish([Store.localTracks.videoTrack, Store.localTracks.audioTrack]); //发布
			setTimeout(function () {
				RTC.setEnableAudio(Store.setting.enableAudio);
				RTC.setEnableVideo(Store.setting.enableVideo);
			}, 200);
		}
	},
	// 本地摄像头开关
	setEnableVideo: async function (enable) {
		Store.localTracks.videoTrack && Store.localTracks.videoTrack.setEnabled(enable);
		Store.localTracks.enableVideo = enable;
		if (enable) {
			// RTC.publishLocalTracks()
			!$("#localVideoEnableIcon").hasClass("icon-video_open") && $("#localVideoEnableIcon").addClass("icon-video_open");
			$("#localVideoEnableIcon").hasClass("icon-video_close") && $("#localVideoEnableIcon").removeClass(
				"icon-video_close");
		} else {
			$("#localVideoEnableIcon").hasClass("icon-video_open") && $("#localVideoEnableIcon").removeClass(
				"icon-video_open");
			!$("#localVideoEnableIcon").hasClass("icon-video_close") && $("#localVideoEnableIcon").addClass(
				"icon-video_close");
		}
	},
	// 本地麦克风开关
	setEnableAudio: async function (enable) {
		Store.localTracks.audioTrack && Store.localTracks.audioTrack.setEnabled(enable);
		Store.localTracks.enableAudio = enable;
		// 更改用户的音频状态
		CustomUI.updateUserAudioState(Store.ownUserId, enable);
		if (enable) {
			// RTC.publishLocalTracks()
			!$("#localAudioEnableIcon").hasClass("icon-audio_open") && $("#localAudioEnableIcon").addClass("icon-audio_open");
			$("#localAudioEnableIcon").hasClass("icon-audio_close") && $("#localAudioEnableIcon").removeClass(
				"icon-audio_close");
		} else {
			$("#localAudioEnableIcon").hasClass("icon-audio_open") && $("#localAudioEnableIcon").removeClass(
				"icon-audio_open");
			!$("#localAudioEnableIcon").hasClass("icon-audio_close") && $("#localAudioEnableIcon").addClass(
				"icon-audio_close");
		}
	},
};

var RTM = {
	rtmChannel: null,
	init: function () {
		if (Store.rtmClient === null) {
			var rtmClient = ArRTM.createInstance(Config.RTM_APPID);
			Store.rtmClient = rtmClient;
			// Store.rtmClient.setParameters({
			// 	// 配置内网网关
			// 	confPriCloudAddr: {
			// 		ServerAdd: "",
			// 		Port: ,
			// 		Wss: true
			// 	},
			// })
			// RTM SDK 监听回调
			// 登录信令服务
			Store.rtmClient.login({
				uid: Store.ownUserId
			}).then(function () {
				Store.rtcLogin = true;
				$(".own-user-id-view").html(Store.ownUserId);
				$("#openP2PInvite").attr("disabled", false);
				$("#openMultiInvite").attr("disabled", false);
			}).catch(function (err) {
				Store.rtcLogin = false;
				CustomUI.alertWhole("RTM 登录失败", "alert-danger");
			});

			// 通知 SDK 与 RTM 系统的连接状态发生了改变。
			Store.rtmClient.on("ConnectionStateChanged", function (newState, reason) {
				if (newState == "RECONNECTING") {
					CustomUI.alertWhole("网络异常");
					// 刷新页面
					setTimeout(function () {
						window.location.reload();
					}, 1000);
				}
			});
			//监听订阅用户的上下线状态
			Store.rtmClient.on("PeersOnlineStatusChanged", function (status) {
				Object.keys(status).forEach(statusKey => {
					Utils.printLog("[info]", "user statusKey is " + status[statusKey]);
				});
			});

			// 收到来自主叫的呼叫邀请。
			Store.rtmClient.on("RemoteInvitationReceived", async function (remoteInvitation) {
				Utils.printLog("[info]", "You recive an invitation from " + remoteInvitation.callerId);
				var invitationContent = JSON.parse(remoteInvitation.content);
				Store.oConference = !invitationContent.Conference;
				if (Store.oConference) {
					// 单人
					if (!Store.iscalling && !Store.audioOrvideo) {
						Store.iscalling = true;
						Store.remoteInvitation = remoteInvitation;
						$("#callerIdView").html(remoteInvitation.callerId);
						if (invitationContent.Mode === 0) {
							$(".switch-audio-call_item").fadeIn();
							$("#changAudioBtn").removeClass("d-none")
						} else {
							$("#changAudioBtn").addClass("d-none")
						}
						//显示被呼叫页面
						!$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
						$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").removeClass("d-none");
						//清楚接受邀请按钮绑定的点击事件
						$("#acceptCallBtn").unbind("click");
						// 接受邀请
						$("#acceptCallBtn").on("click", async function () {
							await CustomUI.acceptCall(false);
						})
						// 接受并转为音频通话
						$("#changAudioBtn").on("click", async function () {
							await CustomUI.acceptCall(true);
						})
						//清楚拒绝呼叫按钮绑定的点击事件
						$("#refuseCallBtn").unbind("click");
						//监听拒绝呼叫按钮点击
						$("#refuseCallBtn").on("click", async function () {

							if (Store.iscalling && Store.remoteInvitation) {
								await Store.remoteInvitation.refuse();
								//退出频道
								await RTM.rtmChannel && RTM.rtmChannel.leave();
								await CustomUI.Release();
								//隐藏被呼叫页面
								await CustomUI.hiddenReciveCallPage();

							}
						});
					} else {
						remoteInvitation.response = JSON.stringify({
							Reason: "calling",
							Cmd: "Calling"
						});
						remoteInvitation.refuse();
					}
				} else {
					// 多人
					if (!Store.iscalling) {
						Store.iscalling = true;
						Store.remoteInvitation = remoteInvitation;
						var invitationContent = JSON.parse(remoteInvitation.content);
						// 加入频道
						Store.channelId = invitationContent.ChanId;
						RTM.joinChannel(invitationContent.ChanId);

						var invitationUsers = invitationContent.UserData;

						Store.invitationUserIds = JSON.parse(JSON.stringify(invitationUsers)); // 拷贝数组
						for (var i = Store.invitationUserIds.length - 1; i >= 0; i--) {
							if (Store.invitationUserIds[i] === Store.ownUserId) {
								Store.invitationUserIds.splice(i, 1);
							}
						}
						$("#callerIdView").html(invitationUsers.join(","));
						// 显示被呼叫页面
						CustomUI.showReciveCallPage();
						// 超时未同意或拒绝的一律按拒绝处理
						var callTimer = setTimeout(function () {
							// 离开频道
							RTM.rtmChannel && RTM.rtmChannel.leave();
							Store.iscalling = false;
							remoteInvitation = null;
							// 隐藏被呼叫页面
							CustomUI.showCallPage();
							$("#callerIdView").html("");
							CustomUI.Release();
						}, Store.setting.invitationTimeout);
						//清楚接受邀请按钮绑定的点击事件
						$("#acceptCallBtn").unbind("click");
						// 接收邀请
						$("#acceptCallBtn").on("click", async function () {
							// 清除倒计时定时器
							callTimer && clearTimeout(callTimer);
							var remoteInvitation = Store.remoteInvitation;
							if (Store.iscalling && remoteInvitation) {
								var invitationContent = JSON.parse(remoteInvitation.content);

								Store.iscalling = true;
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
								// 查询用户在线状态
								var userOnlineStatus = await Store.rtmClient.queryPeersOnlineStatus(invitationUsers);
								// 遍历创建用户视图窗口
								Store.invitationUserIds.map(function (userid) {
									if (userOnlineStatus[userid]) {
										// 创建用户视图窗口
										CustomUI.createUserView(userid, 0);
									}
								});
								// 主叫取消呼叫
								if (remoteInvitation.state === "CANCELED") {
									CustomUI.deleteUserView(remoteInvitation.callerId, 1);
									Store.inChannel = false;
									if (!Store.inChannel) {
										var invitationContent = JSON.parse(remoteInvitation.content);
										// var invitationResponse = JSON.parse(remoteInvitation.response);
										// 加入实时通讯频道
										Store.ownUserId = await Store.rtcClient.join(Config.RTC_APPID, invitationContent.ChanId, null, Store.ownUserId);
										// 已加入频道
										Store.inChannel = true;
										// 采集
										await RTC.getUserMedia();
										// 发布媒体流
										await RTC.publishLocalTracks();
									}
								}
							}
						});
						//清楚拒绝呼叫按钮绑定的点击事件
						$("#refuseCallBtn").unbind("click");
						// 拒绝邀请
						$("#refuseCallBtn").on("click", async function () {
							if (Store.iscalling && remoteInvitation) {
								// 清除倒计时定时器
								callTimer && clearTimeout(callTimer);
								// 拒绝呼叫邀请
								remoteInvitation.refuse();
								//退出频道
								RTM.rtmChannel && RTM.rtmChannel.leave();
								// Store.rtcClient && Store.rtcClient.leave();
								// 清除标记
								CustomUI.closeStamp();
								// Store.localTracks.videoTrack && Store.localTracks.videoTrack.close();
								// Store.localTracks.audioTrack && Store.localTracks.audioTrack.close();
								// 关闭页面，清空所有状态、视图
								$("#mineMutiTitleVideoPreview").html(""); //清空小窗口
								$("#peerMutiVideoPreview").html(""); //清空大窗口
								Store.iscalling = false;
								remoteInvitation = null;
								// 隐藏被呼叫页面
								CustomUI.showCallPage();
								$("#callerIdView").html("");
							}
						});
					} else {
						// 返回 正在通话中
						remoteInvitation.response = JSON.stringify({
							Cmd: "Calling"
						});
						remoteInvitation.refuse();
					}
				}
				// 返回给被叫：接受呼叫邀请成功。
				remoteInvitation.on("RemoteInvitationAccepted", async function () {
					Utils.printLog("[info]", "RemoteInvitationAccepted");
					if (Store.oConference) {
						// p2p
						Store.iscalling = true;
						Store.remoteInvitation = null;
						// 恢复初始设置
						CustomUI.initSetingP2P();
						var invitationContent = JSON.parse(remoteInvitation.content);
						var invitationResponse = JSON.parse(remoteInvitation.response);
						//加入实时通讯频道
						Store.ownUserId = await Store.rtcClient.join(Config.RTC_APPID, invitationContent.ChanId, null, Store.ownUserId);			
						//采集并发布媒体流
						if (invitationResponse.Mode == 1) {
							$("#audioPage").removeClass("d-none");
							// 通讯时长
							CustomUI.P2PCommunication(true);
						} else {
							$("#audioPage").addClass("d-none");
							// 通讯时长
							CustomUI.P2PCommunication(false);
						}
						await RTC.getUserMediaAndPublish(invitationResponse.Mode);
					} else {
						// 多人
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
					}
				});

				// 返回给被叫：拒绝呼叫邀请成功。
				remoteInvitation.on("RemoteInvitationRefused", function () {
					Utils.printLog("[info]", "RemoteInvitationRefused");
					if (Store.oConference) {
						//邀请已结束
						Store.iscalling = false;
						Store.remoteInvitation = null;
						CustomUI.alertWhole("已拒绝呼叫邀请", "alert-info");
						// CustomUI.Release();
						//隐藏被呼叫页面
						CustomUI.hiddenP2PCallPage();
					} else {
						if (Store.invitationUserIds.length >= 2) {
							// 更新用户状态及窗口显示 - 对方已接收
							CustomUI.updateUserViewStatus(remoteInvitation.callerId, 2);
						}

						CustomUI.alertWhole("已拒绝呼叫邀请", "alert-info");
						// 隐藏被呼叫页面
						!$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
						$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
						$("#callerIdView").html("");
					}
				});

				// 返回给被叫：主叫已取消呼叫邀请。
				remoteInvitation.on("RemoteInvitationCanceled", function (content) {
					Utils.printLog("[info]", "RemoteInvitationCanceled");
					if (Store.oConference) {
						//邀请已结束
						Store.iscalling = false;
						Store.remoteInvitation = null;
						CustomUI.alertWhole("已取消呼叫邀请", "alert-info");
						//隐藏被呼叫页面
						CustomUI.hiddenP2PCallPage();
						CustomUI.Release();
						!$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
						$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
					}
				});

				// 返回给被叫：呼叫邀请进程失败。
				remoteInvitation.on("RemoteInvitationFailure", function (reason) {
					Utils.printLog("[info]", "RemoteInvitationFailure");
					if (Store.oConference) {
						//邀请已结束
						Store.iscalling = false;
						Store.remoteInvitation = null;
						CustomUI.alertWhole("呼叫邀请失败", "alert-danger");
						//隐藏被呼叫页面
						CustomUI.hiddenP2PCallPage();
					} else {
						CustomUI.alertWhole("呼叫邀请失败", "alert-danger");
						// 移除窗口
						CustomUI.deleteUserView(remoteInvitation.callerId);
					}
				});
			});
			//（SDK 断线重连时触发）当前使用的 RTM Token 已超过 24 小时的签发有效期。
			Store.rtmClient.on("TokenExpired", function () { });
			// 接受p2p转换语音的消息
			Store.rtmClient.on("MessageFromPeer", function (message, peerId) {
				var cmd = JSON.parse(message.text);
				if (cmd.Cmd == "SwitchAudio") {
					Store.localTracks.videoTrack && Store.localTracks.videoTrack.setEnabled(false);
					$("#" + Store.ownUserId) && $("#" + Store.ownUserId).remove();
					clearInterval(Store.durationTime);
					// 通讯时长
					CustomUI.P2PCommunication(true);
					CustomUI.showP2PAudioPage();
				}
			})
		}
	},
	// 加入频道
	joinChannel: function (chanId) {
		if (Store.rtmClient) {
			var rtmChannel = Store.rtmClient.createChannel(chanId);
			this.rtmChannel = rtmChannel
			rtmChannel.join();
			// 监听频道消息
			rtmChannel.on("ChannelMessage", function (message, memberId) {
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
				// 创建用户视图窗口 - 等待界面
				CustomUI.createUserView(memberId, 3);
			});
			// 监听频道人员离开
			rtmChannel.on("MemberLeft", async function (memberId) {
				// 获取频道内的用户
				var userNum = await RTM.rtmChannel.getMembers();
				if (userNum.length < 2) {
					//退出频道
					RTM.rtmChannel && RTM.rtmChannel.leave();
					// 关闭页面，清空所有状态、视图
					$("#mineMutiTitleVideoPreview").html(""); //清空小窗口
					$("#peerMutiVideoPreview").html(""); //清空大窗口
					Store.oReleaseOpen = true;
					//释放资源
					CustomUI.Release();
				} else {
					CustomUI.alertWhole("用户" + memberId + "离开", "alert-danger");
					setTimeout(function () {
						// 移除窗口
						CustomUI.deleteUserView(memberId);
					}, 200)

				}
			});
		}
	},
	// 创建呼叫邀请并发送
	createLocalInvitationAndSend: async function (userid, channelId) {
		var localInvitation = Store.rtmClient.createLocalInvitation(userid);
		// 邀请的人员
		var oUserData = await RTM.rtmChannel.getMembers();
		if ([Store.ownUserId].concat(Store.invitationUserIds).length > oUserData.length) {
			oUserData = [Store.ownUserId].concat(Store.invitationUserIds)
		}
		// 设置邀请内容
		localInvitation.content = JSON.stringify({
			Mode: 0, // 呼叫的类型0:视频 1:语音
			Conference: true,
			ChanId: channelId,
			UserData: oUserData, // 邀请的人员添加到UserData [Store.ownUserId].concat(Store.invitationUserIds)
			SipData: "",
		});
		// 发送邀请
		localInvitation.send();
		localInvitation.cancelP2P = true;
		// ---监听邀请回调
		Utils.printLog("[info]", "you sent an invitation to " + userid);
		// 返回给主叫：被叫已收到呼叫邀请。
		localInvitation.on("LocalInvitationReceivedByPeer", function () {
			Utils.printLog("[info]", "Your invitation has been received by " + localInvitation.calleeId);
		});

		// 返回给主叫：被叫已接受呼叫邀请。
		localInvitation.on("LocalInvitationAccepted", async function (response) {
			localInvitation.cancelP2P = false;
			Utils.printLog("[info]", localInvitation.calleeId + " accepted your invitation");
			// 更新用户状态及窗口显示 - 对方已接收
			CustomUI.updateUserViewStatus(localInvitation.calleeId, 1);
		});

		// 远端用户拒绝了你的呼叫邀请
		localInvitation.on("LocalInvitationRefused", async function (response) {
			localInvitation.cancelP2P = false;
			Utils.printLog("danger", "Your invitation has been refused by " + localInvitation.calleeId);
			if (response) {
				var oResponse = JSON.parse(response);
				if (oResponse.Cmd == "Calling") {
					CustomUI.alertWhole("用户" + localInvitation.calleeId + "正在通话中", "alert-info");
				} else {
					CustomUI.alertWhole("用户" + localInvitation.calleeId + "拒绝了你的呼叫邀请或对方wu操作", "alert-info");
				}
			}
			// 邀请的人员
			var oUserData = await RTM.rtmChannel.getMembers();
			// 挂断 Store.invitationUserIds
			if (oUserData.length < 2) {
				// 释放采集设备
				setTimeout(async function () {

					await Store.localTracks.videoTrack && Store.localTracks.videoTrack.close();
					await Store.localTracks.audioTrack && Store.localTracks.audioTrack.close();
					//退出频道
					await RTM.rtmChannel && RTM.rtmChannel.leave();
					// Store.rtcClient && Store.rtcClient.leave();
					// 关闭页面，清空所有状态、视图
					$("#mineMutiTitleVideoPreview").html(""); //清空小窗口
					$("#peerMutiVideoPreview").html(""); //清空大窗口
					// 返回呼叫邀请页面
					CustomUI.showCallPage();
					//释放资源
					await CustomUI.Release();
					// 清空标记
					await CustomUI.closeStamp();
					//清空
					$("#multiUserBtn").html("");
				}, 1000)
				CustomUI.alertWhole("用户" + localInvitation.calleeId + "拒绝了你的呼叫邀请", "alert-info");
			} else {
				// 更新用户状态及窗口显示 - 对方已拒绝
				CustomUI.updateUserViewStatus(localInvitation.calleeId, 2);
				// 移除用户窗口
				CustomUI.deleteUserView(localInvitation.calleeId);
			}
		});

		// 返回给主叫：呼叫邀请已被成功取消。
		localInvitation.on("LocalInvitationCanceled", function () {
			Utils.printLog("[info]", "Local invitation canceled");
		});

		// 返回给主叫：呼叫邀请进程失败。
		localInvitation.on("LocalInvitationFailure", function (reason) {
			Utils.printLog("[info]", "Send local invitation to " + localInvitation.calleeId + " failure");
			// 邀请已结束
			CustomUI.alertWhole("呼叫" + localInvitation.calleeId + "邀请失败" + reason, "alert-danger");
			// 移除窗口
			CustomUI.deleteUserView(localInvitation.calleeId);
		});
		return localInvitation;
	}
};

// -----main.js
// 检测是否有硬件设备
(async function () {
	var [cameras, microhones] = await Promise.all([
		ArRTC.getCameras(),
		ArRTC.getMicrophones(),
	]);
	if (cameras.length === 0 && microhones.length === 0) {
		CustomUI.alertWhole("缺少麦克风和摄像头设备", "alert-danger");
		$("#MultipleCalls").prop("disabled", true);
		return;
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
	// 初始化RTC
	RTC.init();
	// 初始化RTM
	RTM.init();
})();

// p2p呼叫
function p2p() {
	// 设置 方法
	async function Setting() {
		//清空默认视频
		$("#settingVideoPreview").html($("#settingVideoPreview img"));
		Store.localTracks.settingVideoTrack && Store.localTracks.settingVideoTrack.close();
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
		CustomUI.alertWhole("已成功设置", "alert-success");
	}
	// 呼叫
	async function makeCall(callMode) {
		var rtmClient = Store.rtmClient;
		// 登录
		var calleeId = "";
		$("#userInputs > input").each(function (index, el) {
			var inputVal = el.value;
			if (inputVal === "") {
				el.focus();
				CustomUI.alertError("请输入完整的用户ID");
				return false;
			}
			calleeId += inputVal;
		});

		if (calleeId.length === 4) {
			//查询状态
			var userOnlineResults = await rtmClient.queryPeersOnlineStatus([calleeId]);
			if (!userOnlineResults[calleeId] || !userOnlineResults[calleeId]) {
				CustomUI.alertError("不允许呼叫，因为对方不在线");
				return;
			}
			if (calleeId == Store.ownUserId) {
				//清空表单
				$("#userInputs > input").each(function (index, el) {
					el.value = "";
				});
				CustomUI.alertError("不能呼叫自己");
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
			// 恢复初始设置
			CustomUI.initSetingP2P();
			// 隐藏语音通话界面
			if (callMode == 0) {
				!$("#audioPage").hasClass("d-none") && $("#audioPage").addClass("d-none");
			}
			Store.iscalling = true;
			Store.localInvitation = localInvitation;
			//显示呼叫邀请页面
			$("#calleeIdView").html(localInvitation.calleeId);
			//显示呼叫邀请页面
			!$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
			$("#makeCallPage").hasClass("d-none") && $("#makeCallPage").removeClass("d-none");
			Store.setting.invitationTimeout = 60 * 1000;
			// 60s无操作
			var timOut = setTimeout(function () {
				//取消邀请
				localInvitation.cancel();
				//离开频道
				RTM.rtmChannel && RTM.rtmChannel.leave();
				CustomUI.alertWhole("无人接听");
			}, Store.setting.invitationTimeout);

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
				// 清除无操作定时器
				clearTimeout(timOut);
				//邀请已结束
				Store.localInvitation = null;
				Store.iscalling = true;
				CustomUI.alertWhole("呼叫邀请成功", "alert-success");
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
					CustomUI.P2PCommunication(true);
				} else {
					// 视频通话
					$("#meetPage").hasClass("d-none") && $("#meetPage").removeClass("d-none");
					// 通讯时长
					CustomUI.P2PCommunication(false);
				}
				//采集并发布媒体流
				await RTC.getUserMediaAndPublish(invitationResponse.Mode);
			});

			//远端用户拒绝了你的呼叫邀请
			localInvitation.on("LocalInvitationRefused", function (response) {
				Utils.printLog("danger", "Your invitation has been refused by " + localInvitation.calleeId);
				// 清除无操作定时器
				clearTimeout(timOut);
				//邀请已结束
				Store.iscalling = false;
				Store.localInvitation = null;
				if (response.Reason == "calling") {
					CustomUI.alertWhole("用户正在通话中", "alert-info");
				} else {
					CustomUI.alertWhole("用户拒绝了你的呼叫邀请", "alert-info");
				}
				//隐藏呼叫邀请页面
				CustomUI.hiddenP2PCallPage();
			});

			//返回给主叫：呼叫邀请已被成功取消。
			localInvitation.on("LocalInvitationCanceled", function () {
				Utils.printLog("[info]", "Local invitation canceled");
				// 清除无操作定时器
				clearTimeout(timOut);
				//邀请已结束
				Store.iscalling = false;
				Store.localInvitation = null;
				CustomUI.alertWhole("呼叫邀请已被成功取消", "alert-success");
				//隐藏呼叫邀请页面
				CustomUI.hiddenP2PCallPage();
			});

			//返回给主叫：呼叫邀请进程失败。
			localInvitation.on("LocalInvitationFailure", function (reason) {
				Utils.printLog("[info]", "Send local invitation to " + localInvitation.calleeId + " failure");
				// 清除无操作定时器
				clearTimeout(timOut);
				//邀请已结束
				Store.iscalling = false;
				Store.localInvitation = null;
				CustomUI.alertWhole("呼叫邀请失败", "alert-danger");
				//隐藏呼叫邀请页面
				CustomUI.hiddenP2PCallPage();
			});
		}
	}
	//设置——本地采集音视频
	async function collectAudioVedio() {
		var [cameras, microhones] = await Promise.all([
			ArRTC.getCameras(),
			ArRTC.getMicrophones(),
		]);
		if (cameras.length === 0 && microhones.length === 0) {
			CustomUI.alertError("上麦失败！确实麦克风和摄像头");
			return
		}
		$("#videoInputSelect").html("");
		cameras.map(function (camera, index) {
			var label = camera.label !== "" ? camera.label : "Camera " + index;
			var opt = $('<option value="' + camera.deviceId + '">' + label + '</option>');
			$("#videoInputSelect").append(opt);
		});

		if (cameras.length > 0) {
			Store.setting.videoDevice = cameras[0].deviceId;
		}

		$("#audioInputSelect").html("");
		microhones.map(function (camera, index) {
			var label = camera.label !== "" ? camera.label : "Microphone " + index;
			var opt = $('<option value="' + camera.deviceId + '">' + label + '</option>');
			$("#audioInputSelect").append(opt);
		});
		if (microhones.length > 0) {
			Store.setting.audioDevice = microhones[0].deviceId;
		}

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
			//清空默认视频
			$("#settingVideoPreview").html($("#settingVideoPreview img"));
			if ($("#loginSetting").hasClass("show")) {
				Store.localTracks.settingVideoTrack.play("settingVideoPreview");
			} else {
				Store.localTracks.settingVideoTrack.close();
				$("#settingVideoPreview").html("");
			}
		}
	};
	// p2p挂断
	async function p2pGup() {
		Store.oReleaseOpen = true;
		if (Store.rtcClient.localTracks.length > 0) {
			Store.iscalling = false;
			Store.localInvitation = null;
			// 发送挂断信息
			await Store.rtmClient.sendMessageToPeer({
				text: JSON.stringify({
					Cmd: "EndCall"
				})
			},
				Store.peerUserId, // 对端用户的 uid。
			);
			RTM.rtmChannel && RTM.rtmChannel.leave();
			CustomUI.Release();
			// 恢复初始设置
			CustomUI.initSetingP2P();
		}
	}
	// 监听用户ID输入 监听用户删除id
	CustomUI.inputChangId("#userInputs > input");
	/**
	 * setting
	 */
	// 视频采集设备状态变化
	ArRTC.onCameraChanged = function (info) {
		CustomUI.alertWhole("您的视频设备发生变化");
		if ($("#loginSetting").hasClass("show")) {
			collectAudioVedio();
		}
	};
	// 音频采集
	ArRTC.onMicrophoneChanged = function (info) {
		CustomUI.alertWhole("您的音频设备发生变化");
		if ($("#loginSetting").hasClass("show")) {
			collectAudioVedio();
		}
	};

	//监听打开设置按钮点击
	$("#openSettingBtn").click(async function () {
		if (!$("#loginSetting").hasClass("show")) {
			$("#loginSetting").addClass("show");
			await collectAudioVedio();
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
		Store.localTracks.settingVideoTrack && Store.localTracks.settingVideoTrack.close();
		Store.localTracks.settingVideoTrack = null;
		CustomUI.closeSettingBtn(true);
	});

	/**
	 * reciveCallPage Page
	 **/
	// 语音呼叫
	$("#p2pAudioMakeCall").click(function () {
		makeCall(1);
	});
	// 视频呼叫
	$("#p2pVideoMakeCall").click(function () {
		makeCall(0);
	});
	// 监听取消呼叫按钮点击
	$("#cancelCallBtn").click(function () {
		if (Store.iscalling && Store.localInvitation) {
			Store.localInvitation.cancel();
			Store.iscalling = false;
			Store.localInvitation = null;
			//隐藏呼叫邀请页面
			CustomUI.hiddenP2PCallPage();
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

	// 音频挂断
	$("#hangupAudioBtn").click(function () {
		p2pGup();
	});
	// p2p视频挂断
	$("#hangupBtn").click(function () {
		p2pGup();
	})

	// 切换语音
	$("#switchToAudioCall").click(async function () {
		if (Store.rtcClient && Store.localTracks.hasAudioTrack && Store.localTracks.hasVideoTrack) {
			// 禁用视频轨道
			Store.localTracks.videoTrack.setEnabled(false);
			clearInterval(Store.durationTime);
			// 通讯时长
			CustomUI.P2PCommunication(true);
			// 隐藏视频通讯页面 进入音频通话界面
			CustomUI.showP2PAudioPage();
			var mediaMessage = await Store.rtmClient.sendMessageToPeer({
				text: JSON.stringify({
					Cmd: "SwitchAudio"
				})
			},
				Store.peerUserId, // 对端用户的 uid。
			);
		}
	})
}

// 多人呼叫
function multi() {
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
		if (Store.invitationUserIds.length == 0) {
			!$("#MultipleCalls").hasClass("disabled") && $("#MultipleCalls").addClass("disabled");
		} else {
			$("#MultipleCalls").hasClass("disabled") && $("#MultipleCalls").removeClass("disabled");
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
	$("#userVideoCameraSetting").change(function () {
		var videoEnable = $(this).prop("checked");
		Store.setting.enableVideo = videoEnable;
	});

	// 监听用户麦克风设置开关
	$("#userMicrophoneSetting").change(function () {
		var audioEnable = $(this).prop("checked");
		Store.setting.enableAudio = audioEnable;
	});

	// 监听用户ID输入 - 邀请用户
	CustomUI.inputChangId("#userMutiModalInputs > input");

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
		CustomUI.closeSettingBtn(false);
	});

	// 发起多人音视频通话
	$("#MultipleCalls").click(async function () {
		if (Store.invitationUserIds.length > 0) {
			// RTM 加入频道
			var channelId = '' + Utils.generateNumber(9);
			Store.channelId = channelId;
			RTM.joinChannel(channelId);
			// 查询呼叫的用户是否在线
			var userOnlineStatus = await Store.rtmClient.queryPeersOnlineStatus(Store.invitationUserIds);

			var oArray = [];
			// 遍历邀请
			Store.invitationUserIds.map(function (userid, value) {
				//不在线
				if (!userOnlineStatus[userid]) {
					oArray.push(userid);
				}
			});

			oArray.map(function (usser) {
				if (Store.invitationUserIds.indexOf(usser) != -1) {
					Store.invitationUserIds.splice(Store.invitationUserIds.indexOf(usser), 1)
				};
			});

			if (Store.invitationUserIds.length > 0) {
				if (oArray.length > 0) {
					CustomUI.alertWhole("用户" + oArray + "不在线");
				}
				// 显示会议页面
				CustomUI.showMeetPage();
				var oArray = [];
				Store.invitationUserIds.map(function (userid) {
					// 创建用户视图窗口
					CustomUI.createUserView(userid, 0);
					// 创建呼叫邀请并发送
					var localInvitation = RTM.createLocalInvitationAndSend(userid, channelId);
					oArray.push(localInvitation);
				});
				Store.cancelP2P = oArray;
				if (!Store.inChannel) {
					Store.iscalling = true;
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
				CustomUI.alertWhole("您输入的用户全都不在线");

			}
			$("#multiUserBtn").html("");
		} else {
			CustomUI.alertWhole("请输入邀请的用户");
		}
	});

	// 视频开关
	$("#setVideoEnableBtn").click(function () {
		Store.localTracks.enableVideo = !Store.localTracks.enableVideo;
		// RTC.setEnableVideo(Store.localTracks.enableVideo);
		// RTC.setEnableAudio(Store.localTracks.enableAudio);
		setTimeout(function () {
			RTC.setEnableVideo(Store.localTracks.enableVideo);
		}, 200);
	});

	// 音频开关
	$("#setAudioEnableBtn").click(function () {
		Store.localTracks.enableAudio = !Store.localTracks.enableAudio;
		// RTC.setEnableVideo(Store.localTracks.enableVideo);
		setTimeout(function () {
			RTC.setEnableAudio(Store.localTracks.enableAudio);
		}, 200);
	});

	// 挂断
	$("#hangupMutiBtn").click(function () {
		if (Store.inChannel) {
			//大屏用户切回去原来的小视图
			var bitViewUser = Store.roomUser.find(function (user) {
				return user.userId === Store.bigViewUserId;
			}
			);
			if (bitViewUser) {
				bitViewUser.videoTrack.stop();
			}
			//收到邀请无操作 主叫挂断
			Store.cancelP2P.map(item => {
				item.then(function (res) {
					if (res.cancelP2P) {
						res.cancel()
					}
				})
			})
			//取消本地发布
			Store.rtcClient && Store.rtcClient.unpublish();
			// 释放采集设备
			Store.localTracks.videoTrack && Store.localTracks.videoTrack.close();
			Store.localTracks.audioTrack && Store.localTracks.audioTrack.close();
			//退出频道
			RTM.rtmChannel && RTM.rtmChannel.leave();
			// 关闭页面，清空所有状态、视图
			$("#mineMutiTitleVideoPreview").html(""); //清空小窗口
			$("#peerMutiVideoPreview").html(""); //清空大窗口
			// 返回呼叫邀请页面
			CustomUI.showCallPage();
			// 清空标记
			CustomUI.closeStamp();
			// 关闭设置
			CustomUI.closeSettingBtn(false);
		}
	});

	// 会议中邀请
	$("#mutiModalBtn").click(async function () {
		var userid = "";
		$('#userMutiModalInputs > input').each(function () {
			userid += this.value;
		});
		// 清空所有输入框
		$('#userMutiModalInputs > input').each(function () {
			this.value = "";
		});
		// 筛选并创建用户标签
		if (userid.length !== 4) {
			CustomUI.alertWhole("用户ID不合法", "alert-danger");
			return;
		}
		//邀请时查看用户已存在
		if (~Store.invitationUserIds.indexOf(userid) || userid == Store.ownUserId) {
			CustomUI.alertWhole("用户已存在", "alert-danger");
			return;
		}
		// 查询用户是否在线
		var userOnlineStatus = await Store.rtmClient.queryPeersOnlineStatus([userid]);
		// 不在线，发送频道消息通知其他人员创建等待窗口
		if (!userOnlineStatus[userid]) {
			CustomUI.alertWhole("用户不在线,无法邀请", "alert-danger");
			return;
		}
		// 发送邀请
		RTM.createLocalInvitationAndSend(userid, Store.channelId);
		// 创建用户视图窗口
		CustomUI.createUserView(userid, userOnlineStatus[userid] ? 0 : 3);
		// 隐藏邀请窗口
		$('#invitationModal').modal('hide');
	});
}

p2p();
multi();
// 点击p2p呼叫
$("#openP2PInvite").click(function () {
	!$("#loginHome").hasClass("d-none") && $("#loginHome").addClass("d-none");
	$("#loginForm").hasClass("d-none") && $("#loginForm").removeClass("d-none");
	CustomUI.setPageTitle("anyrtc P2P呼叫邀请DEMO - anyRTC")
	Store.oConference = true;
});
// 点击多人呼叫
$("#openMultiInvite").click(function () {
	!$("#loginHome").hasClass("d-none") && $("#loginHome").addClass("d-none");
	$("#loginMutiFprm").hasClass("d-none") && $("#loginMutiFprm").removeClass("d-none");
	CustomUI.setPageTitle("anyrtc 多人呼叫邀请DEMO - anyRTC")
	Store.oConference = false;
});
// 回退到首页 
async function backToHome() {
	!$("#loginForm").hasClass("d-none") && $("#loginForm").addClass("d-none");
	!$("#loginMutiFprm").hasClass("d-none") && $("#loginMutiFprm").addClass("d-none");
	$("#loginHome").hasClass("d-none") && $("#loginHome").removeClass("d-none");
	CustomUI.setPageTitle("anyrtc 呼叫邀请DEMO - anyRTC")
};
