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
	RTC_APPID: "110ce31a7dc3a4719f37ba5e54a4046d", //RTC 应用ID 407ad2d7b9e74eae76fefde3659d6db4
	RTM_APPID: "110ce31a7dc3a4719f37ba5e54a4046d", //RTM 应用ID ee0ca1b2bf559ea6823698acb0600e62
	RTC_MODE: "live", //RTC 通信模式
	RTC_CODEC: "h264", //RTC 视频编码格式
	SELECT_CAMERA_DEVICE: sessionStorage.getItem("defaultCameraDeviceId") || undefined
};

var Store = {
	ownUserId: "" + Utils.generateNumber(4), //自己的用户ID - 这里需要转字符串
	peerUserId: "", //远端的用户的ID
	rtcLogin: false,
	rtmLogin: false,
	iscalling: false, //发起邀请或者被邀请 标识
	
	p2p: {
		localInvitation: null,
		remoteInvitation: null,
	},
	// mulitly

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
		enableAudio: false,//
		enableVideo: false,//
	},
	
};

var rtcClient = ArRTC.createClient({
	mode: Config.RTC_MODE,
	codec: Config.RTC_CODEC
});
var rtmClient = ArRTM.createInstance(Config.RTM_APPID);

//RTC SDK 监听回调
{
	rtcClient.on("user-published", async function(user, mediaType) {
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
			$("#titleAudio > i").removeClass("icon-_hongsebimaixiaoicon icon_color_red").addClass(
				"icon-_yinpinkaiqizhong icon_color_blue")
		}
	});
	rtcClient.on("user-unpublished", async function(user, mediaType) {
		if (mediaType === "video") {
			document.getElementById(user.uid).remove();
		} else if (mediaType === "audio") {
			$("#titleAudio > i").removeClass("icon-_yinpinkaiqizhong icon_color_blue").addClass(
				"icon-_hongsebimaixiaoicon icon_color_red")
		}
	});
	rtcClient.on("user-joined", function() {
		Utils.printLog("user-joined");
	});
	rtcClient.on("user-left", function() {
		Utils.printLog("user-left");

		// if (callMode === 1) {
		!$("#mineVideoPreview").hasClass("audio") && $("#mineVideoPreview").addClass("audio");
		// }
		//释放资源
		Store.iscalling = false;
		Store.localTracks.videoTrack && (Store.localTracks.videoTrack.close(), Store.localTracks.videoTrack = null, Store.hasVideoTrack =
			false);
		Store.localTracks.audioTrack && (Store.localTracks.audioTrack.close(), Store.localTracks.audioTrack = null, Store.hasAudioTrack =
			false);
		rtcClient.leave();
		document.getElementById(Store.ownUserId) && document.getElementById(Store.ownUserId).remove();
		//隐藏视频通讯页面
		!$("#meetPage").hasClass("d-none") && $("#meetPage").addClass("d-none");
		$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
		// 如果在设置页面 退出设置页面
		$("#closeSettingBtn").click()
	});
}

//RTM SDK 监听回调
{
	//登录信令服务
	rtmClient.login({
		uid: Store.ownUserId
	}).then(async function() {
		Store.rtcLogin = true;
		$(".own-user-id-view").html(Store.ownUserId);
		$("#openP2PInvite").attr("disabled", false);
		$("#openMultiInvite").attr("disabled", false);
	}).catch(function(err) {
		Store.rtcLogin = false;
		alertError("RTM 登录失败");
		// $('.alert').alert('close');
	});

	//通知 SDK 与 RTM 系统的连接状态发生了改变。
	rtmClient.on("ConnectionStateChanged", function(newState, reason) {

	});

	//监听订阅用户的上下线状态
	rtmClient.on("PeersOnlineStatusChanged", function(status) {
		Object.keys(status).forEach(statusKey => {
			Utils.printLog("[info]", `user statusKey is ${status[statusKey]}`);
		});
	});

	//收到来自主叫的呼叫邀请。
	rtmClient.on("RemoteInvitationReceived", function(remoteInvitation) {
		Utils.printLog("[info]", `You recive an invitation from ${remoteInvitation.callerId}`);

		if (!Store.iscalling) {
			Store.iscalling = true;
			Store.remoteInvitation = remoteInvitation;

			$("#callerIdView").html(remoteInvitation.callerId);

			var invitationContent = JSON.parse(remoteInvitation.content);
			if (invitationContent.Mode === 0) {
				$(".switch-audio-call_item").fadeIn();
			}

			//显示被呼叫页面
			!$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
			$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").removeClass("d-none");
		} else {
			remoteInvitation.response = JSON.parse({
				Reason: "calling"
			});
			remoteInvitation.refuse();
		}

		//返回给被叫：接受呼叫邀请成功。
		remoteInvitation.on("RemoteInvitationAccepted", async function() {
			Utils.printLog("[info]", `RemoteInvitationAccepted`);
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
			Store.ownUserId = await rtcClient.join(Config.RTC_APPID, invitationContent.ChanId, null, Store.ownUserId);
			//采集并发布媒体流
			await getUserMediaAndPublish(invitationResponse.Mode);
		});
		//返回给被叫：拒绝呼叫邀请成功。
		remoteInvitation.on("RemoteInvitationRefused", function() {
			Utils.printLog("[info]", `RemoteInvitationRefused`);
			//邀请已结束
			Store.iscalling = false;
			Store.remoteInvitation = null;
			alertWhole("已拒绝呼叫邀请", "alert-info");
			//隐藏被呼叫页面
			!$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
			$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
			$("#callerIdView").html("");
		});
		//返回给被叫：主叫已取消呼叫邀请。
		remoteInvitation.on("RemoteInvitationCanceled", function(content) {
			Utils.printLog("[info]", `RemoteInvitationCanceled`);
			//邀请已结束
			Store.iscalling = false;
			Store.remoteInvitation = null;
			alertWhole("已取消呼叫邀请", "alert-info");
			//隐藏被呼叫页面
			!$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
			$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
			$("#callerIdView").html("");
			// 如果在设置页面 退出设置页面
			$("#closeSettingBtn").click()
		});
		//返回给被叫：呼叫邀请进程失败。
		remoteInvitation.on("RemoteInvitationFailure", function(reason) {
			Utils.printLog("[info]", `RemoteInvitationFailure`);
			//邀请已结束
			Store.iscalling = false;
			Store.remoteInvitation = null;
			alertWhole("呼叫邀请失败", "alert-danger");
			//隐藏被呼叫页面
			!$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
			$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
			$("#callerIdView").html("");
		});

	});

	//（SDK 断线重连时触发）当前使用的 RTM Token 已超过 24 小时的签发有效期。
	rtmClient.on("TokenExpired", function() {

	});
}

//方法
async function getUserMediaAndPublish(callMode) {
	var [cameras, microhones] = await Promise.all([
		ArRTC.getCameras(),
		ArRTC.getMicrophones(),
	]);

	if ((cameras.length === 0 && microhones.length === 0) || (callMode === 0 && cameras.length === 0)) {
		alertError("上麦失败！确实麦克风和摄像头");
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
		alertError("没有设备无法发布媒体流");
		return
	}
	//显示 P2P 音频布局
	if (callMode === 1) {
		!$("#mineVideoPreview").hasClass("audio") && $("#mineVideoPreview").addClass("audio");
	}

	//预览本地图像
	var videoBox = document.createElement("div");
	videoBox.id = Store.ownUserId;
	videoBox.className = "video-preview_box";
	document.getElementById('mineVideoPreview').appendChild(videoBox);
	Store.localTracks.videoTrack && Store.localTracks.videoTrack.play(videoBox.id);
	//设置主播身份并发布
	rtcClient.setClientRole("host");
	await rtcClient.publish([Store.localTracks.videoTrack, Store.localTracks.audioTrack]); //不发布
	Store.localTracks.hasVideoTrack = !!Store.localTracks.videoTrack;
	Store.localTracks.hasAudioTrack = !!Store.localTracks.audioTrack;
	$("#videoSwitchBtn").attr("disabled", !Store.localTracks.hasVideoTrack);
	$("#audioSwitchBtn").attr("disabled", !Store.localTracks.hasAudioTrack);
}

function alertError(errorText) {
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
	setTimeout(function() {
		$('[data-dismiss="alert"]').alert('close');
	}, 2000);
}
// 全局警告框
function alertWhole(text, classStyle) {
	if (!classStyle) {
		classStyle = "alert-danger"
	}
	var oMsg = $(
		`
	  <div class="alert ${ classStyle }" role="alert">
	    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	    <span id="errorConten">${text}</span>
	  </div>
	`
	);
	$("#warningWholeBox").html("").append(oMsg);
	//警告框自动消失
	setTimeout(function() {
		$('[data-dismiss="alert"]').alert('close');
	}, 2000);
}

// 设置 方法
async function Setting() {
	//清空默认视频
	$("#settingVideoPreview").html($("#settingVideoPreview img"));
	Store.localTracks.settingVideoTrack.close();
	Store.localTracks.settingVideoTrack = await ArRTC.createCameraVideoTrack({
		cameraId: Store.videoDevice,
		encoderConfig: {
			bitrateMax: 1130,
			// bitrateMin: ,
			frameRate: 15,
			height: Store.videoSize[1],
			width: Store.videoSize[0],
		}
	})

	Store.localTracks.settingVideoTrack.play("settingVideoPreview");
	alertWhole("已成功设置", "alert-success");
}
/**
 * home Page
 **/
//打开p2p邀请页面
$("#openP2PInvite").click(function() {
	!$("#loginForm").hasClass("show") && $("#loginForm").addClass("show");
});
//打开多人邀请页面
$("#openMultiInvite").click(function() {
	!$("#loginMutiFprm").hasClass("show") && $("#loginMutiFprm").addClass("show");
});

//返回首页
// 点对点
$("#backToHome").click(function() {
	$("#loginForm").hasClass("show") && $("#loginForm").removeClass("show");
	//清空表单
	$("#userInputs > input").each(function(index, el) {
		el.value = "";
	});
});
// 多人
$("#multiBackToHome").click(function() {
	$("#loginMutiFprm").hasClass("show") && $("#loginMutiFprm").removeClass("show");
	//清空表单
	$("#multiUserInputs > input").each(function(index, el) {
		el.value = "";
	});
	// 清空用户
	$("#multiUserBtn").html("");
	oRepeat = [];
});
/**
 * p2p invite Page
 **/
// 点对点
inputId("#userInputs > input")
// 多人邀请
inputId("#userMutiModalInputs > input")
function inputId(oid) {
	//监听用户ID输入
	$(oid).bind('input propertychange', function(event) {
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
	$(oid).keydown(function(event) {
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



// 多邀请
// 监听用户ID输入
var oRepeat = []; {
	var oArray = "";

	$('#multiUserInputs > input').bind('input propertychange', function(event) {
		let inputVal = $(this).val();
		let reg = /^[0-9]+$/;

		if (!reg.test(inputVal)) {
			$(this).val('');
		} else {
			$(this).next('input').select();
			$(this).next('input').focus();
			oArray += inputVal;
			if (oArray.length == 4) {
				// 并创建新的div存放
				oRepeat.push(oArray);
				oRepeat = Array.from(new Set([...oRepeat]));
				createButtonUser(oRepeat);
				// 清空所有输入框
				oArray = "";

				setTimeout(function() {
					$('#multiUserInputs > input').each(function() {
						this.value = "";
					})
					$('#multiUserInputs > input')[0].focus();
				}, 500)

			}
		}
	});
	// 创建button
	function createButtonUser(content) {
		$("#multiUserBtn").html("");
		content.map(add => {
			let opt = $(
				`<button type="button" class="btn btn-light">${add}  <i class="iconfont icon-_shanchubiaoqian"></i></button>`
			)
			$("#multiUserBtn").append(opt);
		})

	}

	//监听用户input删除id
	$('#multiUserInputs > input').keydown(function(event) {
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
	$("#multiUserBtn").bind("mouseover", function() {
		// 监听用户其他用户
		$("#multiUserBtn > button").bind("mouseover", function() {
			$(this).children().removeClass("icon-_shanchubiaoqian").addClass("icon-_shanchubiaoqianyouyuandi");
		});
		$("#multiUserBtn > button").bind("mouseleave", function() {
			$(this).children().removeClass("icon-_shanchubiaoqianyouyuandi").addClass("icon-_shanchubiaoqian");
		});
		$("#multiUserBtn > button > i").bind("click", function() {
			if ($(this).parent().index() != -1) {
				oRepeat.splice($(this).parent().index(), 1);
			}
			$(this).parent().remove();
		});
	})

}


// 点对点
//监听打开设置按钮点击
$("#openSettingBtn").click(async function() {
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
		cameras.map(function(camera, index) {
			var label = camera.label !== "" ? camera.label : "Camera " + index;
			var opt = $('<option value="' + camera.deviceId + '">' + label + '</option>');
			$("#videoInputSelect").append(opt)
		});
		Store.videoDevice = cameras[0].deviceId
		$("#audioInputSelect").html("");
		microhones.map(function(camera, index) {
			var label = camera.label !== "" ? camera.label : "Microphone " + index;
			var opt = $('<option value="' + camera.deviceId + '">' + label + '</option>');
			$("#audioInputSelect").append(opt)
		});
		Store.audioDevice = microhones[0].deviceId
		if (cameras.length > 0) {
			Store.localTracks.settingVideoTrack = await ArRTC.createCameraVideoTrack({
				cameraId: Store.videoDevice,
				encoderConfig: {
					bitrateMax: 1130,
					// bitrateMin: ,
					frameRate: 15,
					height: Store.videoSize[1],
					width: Store.videoSize[0],
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
$("#settingVideoResolution").change(function() {
	Store.videoSize = $("#settingVideoResolution").val().split("*").map(Number);
	Setting();
})
//监听用户设置音频设备
$("#audioInputSelect").change(function() {
	Store.audioDevice = $("#audioInputSelect").val();
	Setting();
})
//监听用户设置视频设备
$("#videoInputSelect").change(function() {
	Store.videoDevice = $("#videoInputSelect").val();
	Setting();
})

//监听关闭设置按钮点击
$("#closeSettingBtn").click(function() {
	if ($("#loginSetting").hasClass("show")) {
		$("#loginSetting").removeClass("show");
		Store.localTracks.settingVideoTrack && Store.localTracks.settingVideoTrack.close();
		$("#settingVideoPreview").html("");
	}
});


// 多人通话
// 监听打开设置按钮点击
$("#multiOpenSettingBtn").click(function() {
	if (!$("#loginMutiSetting").hasClass("show")) {
		$("#loginMutiSetting").addClass("show");
	}
})
//监听关闭设置按钮点击
$("#closeMutiSettingBtn").click(function() {
	if ($("#loginMutiSetting").hasClass("show")) {
		$("#loginMutiSetting").removeClass("show");
	}
});

/**
 * makeCallPage Page
 **/
// 点对点
//监听呼叫
async function makeCall(callMode, isP2p = true) {
	var calleeId = "";
	$("#userInputs > input").each(function(index, el) {
		let inputVal = el.value;
		if (inputVal === "") {
			el.focus();
			alertError("请输入完整的用户ID");
			return false;
		}
		calleeId += inputVal;
	});

	if (calleeId.length === 4) {

		//查询状态
		let userOnlineResults = await rtmClient.queryPeersOnlineStatus([calleeId]);

		if (!userOnlineResults[calleeId] || !userOnlineResults[calleeId]) {
			alertError("不允许呼叫，因为对方不在线");
			return;
		}

		if (calleeId == Store.ownUserId) {
			//清空表单
			$("#userInputs > input").each(function(index, el) {
				el.value = "";
			});
			alertError("不能呼叫自己");
			return;
		}

		Store.peerUserId = calleeId;
		//发起呼叫
		var localInvitation = rtmClient.createLocalInvitation(calleeId);
		localInvitation.content = JSON.stringify({
			Mode: callMode,
			Conference: isP2p,
			ChanId: '' + Utils.generateNumber(9),
			UserData: "",
			SipData: ""
		}); //这里将呼叫邀请的内容 设置为视频通讯时使用的频道id - 进入同一个频道
		localInvitation.send();

		//清空表单
		$("#userInputs > input").each(function(index, el) {
			el.value = "";
		});
		// 默认设置 音频、视频打开
		// $(".derail_voice").css("display", "block");
		// $(".derail_voice_close").css("display", "none");
		// $(".derail_video").css("display", "block");
		// $(".derail_video_close").css("display", "none");
		// $("#mineVideoPreview_bg").css("zIndex", "0");

		Store.iscalling = true;
		Store.localInvitation = localInvitation;
		//显示呼叫邀请页面
		$("#calleeIdView").html(localInvitation.calleeId);
		//显示呼叫邀请页面
		!$("#homePage").hasClass("d-none") && $("#homePage").addClass("d-none");
		$("#makeCallPage").hasClass("d-none") && $("#makeCallPage").removeClass("d-none");

		Utils.printLog("[info]", `you sent an invitation to ${calleeId}`);

		//返回给主叫：被叫已收到呼叫邀请。
		localInvitation.on("LocalInvitationReceivedByPeer", function() {
			Utils.printLog("[info]", `Your invitation has been received by ${localInvitation.calleeId}`);

			//对方收到邀请，说明对方已经上线，这个时候应该监听对方的在线状态，如果对方离线 主动取消邀请（防止对方刷新或掉线时无法通知服务端）
			rtmClient.subscribePeersOnlineStatus([localInvitation.calleeId]);
			rtmClient.on("PeersOnlineStatusChanged", (userOnlineStatus) => {
				if (userOnlineStatus[localInvitation.calleeId] === "OFFLINE" && Store.iscalling) {
					localInvitation.cancel();
				}
			});
		});

		//返回给主叫：被叫已接受呼叫邀请。
		localInvitation.on("LocalInvitationAccepted", async function(response) {
			Utils.printLog("[info]", `${localInvitation.calleeId} accepted your invitation`);
			//邀请已结束
			Store.localInvitation = null;
			alertWhole("呼叫邀请成功", "alert-success");
			var invitationResponse = JSON.parse(response);

			//隐藏邀请页，显示会议页面
			!$("#makeCallPage").hasClass("d-none") && $("#makeCallPage").addClass("d-none");
			$("#meetPage").hasClass("d-none") && $("#meetPage").removeClass("d-none");
			$("#calleeIdView").html("");

			var invitationContent = JSON.parse(localInvitation.content);
			//加入实时通讯频道
			Store.ownUserId = await rtcClient.join(Config.RTC_APPID, invitationContent.ChanId, null, Store.ownUserId);
			//采集并发布媒体流
			await getUserMediaAndPublish(invitationResponse.Mode);
		});

		//远端用户拒绝了你的呼叫邀请
		localInvitation.on("LocalInvitationRefused", function(response) {
			Utils.printLog("danger", `Your invitation has been refused by ${localInvitation.calleeId}`);
			//邀请已结束
			Store.iscalling = false;
			Store.localInvitation = null;
			alertWhole("用户拒绝了你的呼叫邀请", "alert-info")
				//隐藏呼叫邀请页面
				!$("#makeCallPage").hasClass("d-none") && $("#makeCallPage").addClass("d-none");
			$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
			$("#calleeIdView").html("");
		});

		//返回给主叫：呼叫邀请已被成功取消。
		localInvitation.on("LocalInvitationCanceled", function() {
			Utils.printLog("[info]", `Local invitation canceled`);
			//邀请已结束
			Store.iscalling = false;
			Store.localInvitation = null;
			alertWhole("呼叫邀请已被成功取消", "alert-success")
				//隐藏呼叫邀请页面
				!$("#makeCallPage").hasClass("d-none") && $("#makeCallPage").addClass("d-none");
			$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
			$("#calleeIdView").html("");
			// 如果在设置页面 退出设置页面
			$("#closeSettingBtn").click()
		});

		//返回给主叫：呼叫邀请进程失败。
		localInvitation.on("LocalInvitationFailure", function(reason) {
			Utils.printLog("[info]", `Send local invitation to ${localInvitation.calleeId} failure`);
			//邀请已结束
			Store.iscalling = false;
			Store.localInvitation = null;
			alertWhole("呼叫邀请失败", "alert-danger")
				//隐藏呼叫邀请页面
				!$("#makeCallPage").hasClass("d-none") && $("#makeCallPage").addClass("d-none");
			$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
			$("#calleeIdView").html("");
		});
	}
}

//监听取消呼叫按钮点击
$("#cancelCallBtn").click(function() {
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



// call多人视频通话
$("#MultipleCalls").click(function() {
	if (oRepeat.length > 0) {
		$("#calleeIdView").html("")
		oRepeat.map(item => {
			let oSpan = $(`
			<span class="multiple_call_span">${item}</span>
			`)
			$("#calleeIdView").append(oSpan);
		})
		$("#homePage").addClass("d-none")
		$("#makeCallPage").removeClass("d-none")
		
	} else{
		alertError("请输入邀请的用户")
	}
})

/**
 * reciveCallPage Page
 **/
//监听接收呼叫按钮点击
function acceptCall(forceAudioCall = false) {
	if (Store.iscalling && Store.remoteInvitation) {
		Store.peerUserId = Store.remoteInvitation.callerId;
		var invitationContent = JSON.parse(Store.remoteInvitation.content);

		var callMode = invitationContent.Mode;

		if (callMode === 0) {
			Store.remoteInvitation.response = JSON.stringify({
				Mode: 0,
				Conference: invitationContent.Conference,
				UserData: "",
				SipData: ""
			});
		} else if (forceAudioCall || callMode === 1) {
			Store.remoteInvitation.response = JSON.stringify({
				Mode: 1,
				Conference: invitationContent.Conference,
				UserData: "",
				SipData: ""
			});
		}
		Store.remoteInvitation.accept();
		Store.iscalling = false;
		Store.remoteInvitation = null;
		//隐藏被呼叫页面
		!$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
		$("#meetPage").hasClass("d-none") && $("#meetPage").removeClass("d-none");
		$("#callerIdView").html("");
	}
}

//监听拒绝呼叫按钮点击
$("#refuseCallBtn").click(function() {
	if (Store.iscalling && Store.remoteInvitation) {
		Store.remoteInvitation.refuse();
		Store.iscalling = false;
		Store.remoteInvitation = null;
		//隐藏被呼叫页面
		!$("#reciveCallPage").hasClass("d-none") && $("#reciveCallPage").addClass("d-none");
		$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
		$("#callerIdView").html("");
	}
});

//切换音频呼叫按钮点击
$("#switchToAudioCall").click(function() {

});






/**
 * meet Page
 **/
// 点对点
//视频开关
$("#videoSwitchBtn").click(function() {
	if (rtcClient && Store.localTracks.hasVideoTrack) {
		Store.localTracks.videoTrack.isMuted = !Store.localTracks.videoTrack.isMuted;
		Store.localTracks.videoTrack.setEnabled(!Store.localTracks.videoTrack.isMuted);

		//显示摄像头开启关闭
		if (Store.localTracks.videoTrack.isMuted) {
			//关闭
			$("#videoSwitchBtn > i").removeClass("icon-_guaduanyinshipinzhong icon_color_blue").addClass(
				"icon-_shipinguanbizhong");
			$("#mineVideoPreview_bg").css("zIndex", "10");
		} else {
			//打开
			$("#videoSwitchBtn > i").removeClass("icon-_shipinguanbizhong").addClass(
				"icon-_guaduanyinshipinzhong icon_color_blue");
			$("#mineVideoPreview_bg").css("zIndex", "0");
		}
	}
});

//音频开关
$("#audioSwitchBtn").click(function() {

	if (rtcClient && Store.localTracks.hasAudioTrack) {
		Store.localTracks.audioTrack.isMuted = !Store.localTracks.audioTrack.isMuted;
		Store.localTracks.audioTrack.setEnabled(!Store.localTracks.audioTrack.isMuted);
		//显示音频开启关闭
		if (Store.localTracks.audioTrack.isMuted) {
			//关闭
			$("#audioSwitchBtn > i").removeClass("icon-_yinpinkaiqizhong icon_color_blue").addClass("icon-_yinpinguanbizhong");
		} else {
			//打开
			$("#audioSwitchBtn > i").removeClass("icon-_yinpinguanbizhong").addClass("icon-_yinpinkaiqizhong icon_color_blue");
		}
	}
});

//挂断开关
$("#hangupBtn").click(function() {
	if (rtcClient) {
		Store.localTracks.videoTrack && (Store.localTracks.videoTrack.close(), Store.localTracks.videoTrack = null, Store.hasVideoTrack =
			false);
		Store.localTracks.audioTrack && (Store.localTracks.audioTrack.close(), Store.localTracks.audioTrack = null, Store.hasAudioTrack =
			false);
		rtcClient.leave();
		Store.iscalling = false;
		document.getElementById(Store.ownUserId) && document.getElementById(Store.ownUserId).remove();
		document.getElementById(Store.peerUserId) && document.getElementById(Store.peerUserId).remove();
		//隐藏视频通讯页面
		!$("#meetPage").hasClass("d-none") && $("#meetPage").addClass("d-none");
		$("#homePage").hasClass("d-none") && $("#homePage").removeClass("d-none");
		// 如果在设置页面 退出设置页面
		$("#closeSettingBtn").click()
	}
});


// 多对多
// 邀请
$("#videoInviteMutiBtn").click(function() {
	if (!$("#videoInviteMutiBtn > i").hasClass("icon_color_blue")) {
		$("#videoInviteMutiBtn > i").addClass("icon-_yaoqingdianji icon_color_blue").removeClass("icon-_yaoqingmoren")
	} else {
		$("#videoInviteMutiBtn > i").addClass("icon-_yaoqingmoren").removeClass("icon-_yaoqingdianji icon_color_blue")
	}
})
// 点击确定
$("#mutiModalBtn").click(function() {
	var calleeId = "";
	console.log($("#userMutiModalInputs > input"));
	$("#userMutiModalInputs > input").each(function(index, el) {
		let inputVal = el.value;
		if (inputVal === "") {
			el.focus();
			alertWhole("请输入完整的用户ID");
			return false;
		}
		console.log(inputVal);
		calleeId += inputVal;
	});
	
})
// 关闭邀请
$("#modalClose").click(function() {
	$("#videoInviteMutiBtn").click()
	// if (!$("#videoInviteMutiBtn > i").hasClass("icon_color_blue")) {
	// 	$("#videoInviteMutiBtn > i").addClass("icon-_yaoqingdianji icon_color_blue").removeClass("icon-_yaoqingmoren")
	// } else {
	// 	$("#videoInviteMutiBtn > i").addClass("icon-_yaoqingmoren").removeClass("icon-_yaoqingdianji icon_color_blue")
	// }
})
