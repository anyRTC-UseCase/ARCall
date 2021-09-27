//
//  ARSignalVideoController.swift
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2021/7/15.
//

import UIKit
import ARtcKit
import ARtmKit

class ARSignalVideoController: ARBaseViewController {
    @IBOutlet weak var backView: UIView!              /* 呼叫背景 */
    @IBOutlet weak var calledView: UIView!            /* 通话中窗口 */
    @IBOutlet weak var callingView: UIView!           /* 呼叫中窗口 */
    @IBOutlet weak var callerIdLabel: UILabel!        /* 呼叫 callerId */
    @IBOutlet weak var callStateLabel: UILabel!       /* 呼叫状态 */
    @IBOutlet weak var timeLabel: UILabel!            /* 呼叫时长 */
    @IBOutlet weak var acceptButton: UIButton!
    @IBOutlet weak var switchAudioButton: UIButton!    /* 视频切换语音 */
    @IBOutlet weak var audioButton: UIButton!         /* 音频状态 */
    @IBOutlet weak var hangupButton: UIButton!
    @IBOutlet weak var switchCameraButton: UIButton!
    @IBOutlet weak var speakerButton: UIButton!        /* 免提 */
    @IBOutlet weak var switchVoiceButton: UIButton!    /* 语音接听 */
    
    var remoteInvitation: ARtmRemoteInvitation?
    var isWatches: Bool = false                      /* 对方是否为手表 */
    var isCallSucess = false                         /* 呼叫是否成功 */
    var isReconnection = false
    
    private var leaveReason: ARLeaveReason = .normal
    private var destroy: Bool = false
    private var windowStatus: ARWindowViewStats = .wait /* 悬浮窗口状态 */
    private var sourceTimer: ARSourceTimer = ARSourceTimer()
    private var timeText: String = "00:00"
    
    private lazy var localInvitation: ARtmLocalInvitation = {
        let invitation = ARtmLocalInvitation()
        invitation.calleeId = infoModel.callerId!
        return invitation
    }()
    
    lazy var localVideo: ARVideoView = {
        // 本地视图显示窗口
        let video = ARVideoView.loadVideoView(uid: localUid, status: .single)
        video.frame = CGRect(x: ARScreenWidth - 108, y: 88, width: 95, height: 157)
        video.callback = {[weak self] (object) in
            guard let weakSelf = self else { return }
            weakSelf.switchVideoSize()
        }
        return video
    }()
    
    lazy var remoteVideo: ARVideoView = {
        // 远程视图显示窗口
        let video = ARVideoView.loadVideoView(uid: infoModel.callerId, status: .single)
        video.frame = UIScreen.main.bounds
        video.callback = {[weak self] (object) in
            guard let weakSelf = self else { return }
            weakSelf.switchVideoSize()
        }
        return video
    }()

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        initializeUI()
        initializeEngine()
        joinChannel()
        playCallBell(isOpen: true)
    }
    
    private func initializeUI() {
        callerIdLabel.text = infoModel.callerId
        
        if infoModel.callType == .calling {
            // 主叫
            acceptButton.isHidden = true
            switchVoiceButton.isHidden = true
            
            let dict0: NSDictionary = [
                                      "Mode": (infoModel.callMode == .video) ? 0 : 1,
                                      "Conference": NSNumber.init(value: false),
                                      "ChanId": infoModel.channelId as Any,
                                      "VidCodec": getJSONStringFromArray(array: ["H264", "MJpeg"]),
                                      "AudCodec": getJSONStringFromArray(array: ["Opus", "G711"]),
                                      "UserData": "",
                                      "SipData": ""]
            localInvitation.content = getJSONStringFromDictionary(dictionary: dict0)
            
            // 发送呼叫邀请
            ARCallRtmManager.callKit.send(localInvitation) { (errorCode) in
                print("sendLocalInvitation \(errorCode.rawValue)")
            }
            
        } else if (infoModel.callType == .passive) {
            // 被叫
            switchVoiceButton.isHidden = (infoModel.callMode == .audio)
            callStateLabel.text = "接听中..."
        }
        
        //监听AI降噪开关
        NotificationCenter.default.addObserver(self, selector: #selector(switchAINoise), name: UIResponder.callNotificationNoise, object: nil)
    }
    
    private func initializeEngine() {
        // init ARtcEngineKit
        rtcKit = ARtcEngineKit.sharedEngine(withAppId: AppID, delegate: self)
        rtcKit.setChannelProfile(.liveBroadcasting)
        
        switchAINoise()
    }
    
    private func joinChannel() {
        rtcKit.joinChannel(byToken: nil, channelId: infoModel.channelId, uid: UserDefaults.string(forKey: .uid)) { (channel, uid, elapsed) in
            print("joinChannel sucess")
        }
    }
    
    private func setVideoEncoderConfiguration() {
        rtcKit.enableVideo()
        // 视频编码配置
        let videoConfig = ARVideoEncoderConfiguration()
        if isWatches {
            let dic = ["Cmd": "SetEncoderType", "VidCodecType": 5, "AudCodecType": 3] as [String : Any]
            rtcKit.setParameters(getJSONStringFromDictionary(dictionary: dic as NSDictionary))
            
            videoConfig.frameRate = 7
            videoConfig.bitrate = 128
            videoConfig.minBitrate = 128
            videoConfig.minFrameRate = 1
            videoConfig.dimensions = CGSize(width: 160, height: 160)
        } else {
            videoConfig.bitrate = 500
            videoConfig.dimensions = getVideoDimensions(index: Default.integer(forKey: "dimensions"))
            videoConfig.frameRate = Default.integer(forKey: "frameRate")
        }
        rtcKit.setVideoEncoderConfiguration(videoConfig)
    }
    
    func setupRemoteVideo() {
        let videoCanvas = ARtcVideoCanvas()
        videoCanvas.uid = infoModel.callerId!
        videoCanvas.view = remoteVideo
        rtcKit.setupRemoteVideo(videoCanvas)
    }
    
    private func sendMessageToPeer(message: ARtmMessage) {
        ARCallRtmManager.rtmKit?.send(message, toPeer: infoModel.callerId!, sendMessageOptions: ARtmSendMessageOptions(), completion: { (errorCode) in
            print("sendMessageToPeer errCode = \(errorCode)")
        })
    }
    
    @IBAction func didClickSignalVcButton(_ sender: UIButton) {
        sender.isSelected.toggle()
        
        if sender.tag == 50 {
            // 最小化
            ARWindowView.loadWindowView(time: timeText , status: windowStatus, vc: self)
            windowView?.uid = infoModel.callerId
            
        } else if sender.tag == 51 {
            
            if infoModel.callType == .calling {
                // 取消呼叫
                ARCallRtmManager.callKit.cancel(localInvitation) { (errorCode) in
                    print("cancel errorCode == \(errorCode.rawValue)")
                }
                leaveReason = .cancle
            } else {
                // 拒绝呼叫邀请
                ARCallRtmManager.callKit.refuse(remoteInvitation!) { (errorCode) in
                    print("refuse errorCode == \(errorCode.rawValue)")
                }
            }
            destroySignalVc()
            
        } else if sender.tag == 52 || sender.tag == 53 {
            // 52 切换语音接听 53 正常接听
            playCallBell(isOpen: false)
            dealWithException(time: 10)
            isCallSucess = true
            (sender.tag == 52) ? infoModel.callMode = .audio : nil
            let dic = ["Mode": NSNumber.init(value: (infoModel.callMode == .audio) ? 1 : 0),
                       "Conference": false]
            remoteInvitation!.response = getJSONStringFromDictionary(dictionary: dic as NSDictionary)
            ARCallRtmManager.callKit.accept(remoteInvitation!) { (errorCode) in
                print("accept errorCode = \(errorCode.rawValue)")
            }
            selectCallMode(mode: infoModel.callMode)
            acceptCallInvitation()
            rtcKit.setClientRole(.broadcaster)
            
        } else if sender.tag == 54 {
            // 切换语音模式
            switchAudioMode()
            let dic = ["Cmd": "SwitchAudio"]
            let message = ARtmMessage(text: getJSONStringFromDictionary(dictionary: dic as NSDictionary))
            sendMessageToPeer(message: message)
            
        } else if sender.tag == 55 {
            // 本地音频
            rtcKit.muteLocalAudioStream(sender.isSelected)
            
        } else if sender.tag == 56 {
            // 通话中 -- 挂断
            let dic = ["Cmd": "EndCall"]
            let message = ARtmMessage(text: getJSONStringFromDictionary(dictionary: dic as NSDictionary))
            sendMessageToPeer(message: message)
            destroySignalVc()
            
        } else if sender.tag == 57 {
            // 切换本地摄像头
            rtcKit.switchCamera()
            
        } else if sender.tag == 58 {
            // 扬声器
            rtcKit.setEnableSpeakerphone(!sender.isSelected)
        }
    }
    
    @objc func switchAINoise() {
        // AI 降噪
        let dic = ["Cmd": "SetAudioAiNoise", "Enable": Default.bool(forKey: "noise") ? 1: 0] as [String : Any]
        rtcKit.setParameters(getJSONStringFromDictionary(dictionary: dic as NSDictionary))
    }
    
    private func switchVideoSize() {
        //  大小屏切换
        if isCallSucess {
            let frame = localVideo.frame
            localVideo.frame = remoteVideo.frame
            remoteVideo.frame = frame
            
            if localVideo.frame.width == ARScreenWidth {
                view.insertSubview(localVideo, belowSubview: calledView)
                view.insertSubview(remoteVideo, belowSubview: calledView)
            } else {
                view.insertSubview(remoteVideo, belowSubview: calledView)
                view.insertSubview(localVideo, belowSubview: calledView)
            }
        }
    }
    
    private func acceptCallInvitation() {
        // 接受呼叫邀请
        if infoModel.callMode == .video {
            view.insertSubview(remoteVideo, belowSubview: calledView)
            view.insertSubview(localVideo, belowSubview: calledView)
            
            setVideoEncoderConfiguration()
            let videoCanvas = ARtcVideoCanvas()
            videoCanvas.view = localVideo.renderView
            view.insertSubview(localVideo, belowSubview: calledView)
            rtcKit.setupLocalVideo(videoCanvas)
        }
    }
    
    private func acceptedInvitation(callMode: CallMode) {
        // 对方已同意呼叫
        if !isCallSucess {
            callStateLabel.text = "接听中..."
            playCallBell(isOpen: false)
            isCallSucess.toggle()
            selectCallMode(mode: callMode)
            infoModel.callMode = callMode
            acceptCallInvitation()
            rtcKit.setClientRole(.broadcaster)
            
            // 兼容异常问题
            leaveReason = .drop
            dealWithException(time: 10)
        }
    }
    
    private func switchAudioMode() {
        // 切换音频呼叫
        windowStatus = .audio
        infoModel.callMode = .audio
        selectCallMode(mode: .audio)
        localVideo.removeFromSuperview()
        remoteVideo.removeFromSuperview()
        
        rtcKit.disableVideo()
    }
    
    private func selectCallMode(mode: CallMode) {
        // 选择呼叫模式
        calledView.isHidden = false
        callingView.isHidden = true
        hangupButton.isHidden = false
        
        let isHidden = (mode == .video)
        backView.isHidden = isHidden
        switchAudioButton.isHidden = !isHidden
        switchCameraButton.isHidden = !isHidden
        audioButton.isHidden = isHidden
        speakerButton.isHidden = isHidden
    }
    
    private func dealWithException(time: NSInteger) {
        NSObject.cancelPreviousPerformRequests(withTarget: self, selector: #selector(destroySignalVc), object: nil)
        if time > 0 {
            self.perform(#selector(destroySignalVc), with: nil, afterDelay: TimeInterval(time))
        }
    }
    
    @objc private func destroySignalVc() {
        if !destroy {
            // 释放所有资源
            destroy.toggle()
            leaveToast(reason: leaveReason)
            dealWithException(time: 0)

            ARWindowView.removeWindowView()
            sourceTimer.stop()
            
            rtcKit.leaveChannel(nil)
            ARtcEngineKit.destroy()
            rtcKit = nil; infoModel = nil
            dismiss(animated: true) {
                let topVc = self.topViewController()
                topVc.viewWillAppear(true)
            }
        }
    }
    
    deinit {
        print("ARSignalVideoController deinit")
    }
}

// MARK: - ARtcEngineDelegate

extension ARSignalVideoController: ARtcEngineDelegate {
    
    func rtcEngine(_ engine: ARtcEngineKit, firstRemoteVideoDecodedOfUid uid: String, size: CGSize, elapsed: Int) {
        // 已完成远端视频首帧解码回调
        if windowView != nil {
            windowView?.windowStats = .video
            windowView?.uid = uid
        } else {
            setupRemoteVideo()
        }
    }
    
    func rtcEngine(_ engine: ARtcEngineKit, connectionChangedTo state: ARConnectionStateType, reason: ARConnectionChangedReason) {
        // 网络连接状态已改变回调
        print("connectionChangedTo \(state.rawValue)  \(reason.rawValue)")
        if reason == .interrupted || state == .disconnected {
            isReconnection = true
            leaveReason = .netError
            showToast(text: "当前网络较差，请检查你的网络设置", image: "icon_warning")
            dealWithException(time: 30)
        } else if state == .connected {
            leaveReason = .normal
            dealWithException(time: 0)
            
            if isReconnection {
                // 兼容异常问题
                isReconnection.toggle()
                dealWithException(time: 10)
                
                let dic = ["Cmd": "CallState"]
                let message = ARtmMessage(text: getJSONStringFromDictionary(dictionary: dic as NSDictionary))
                sendMessageToPeer(message: message)
            }
        }
    }
    
    func rtcEngine(_ engine: ARtcEngineKit, didJoinedOfUid uid: String, elapsed: Int) {
        // 远端用户/主播加入回调
        leaveReason = .normal
        dealWithException(time: 0)
        sourceTimer.start(1) { [weak self] (time) in
            self?.timeLabel.text = "\(time)"
            self?.timeText = "\(time)"
            windowView?.timeLabel.text = "\(time)"
        }
    }
    
    func rtcEngine(_ engine: ARtcEngineKit, didOfflineOfUid uid: String, reason: ARUserOfflineReason) {
        // 远端用户（通信场景）/主播（直播场景）离开当前频道回调
        if reason == .dropped {
            leaveReason = .drop
            dealWithException(time: 10)
        } else if reason == .quit {
            leaveReason = .normal
            destroySignalVc()
        }
    }
    
    func rtcEngine(_ engine: ARtcEngineKit, firstLocalVideoFrameWith size: CGSize, elapsed: Int) {
        // 已显示本地视频首帧的回调
        localVideo.placeholderView.isHidden = true
    }
    
    func rtcEngine(_ engine: ARtcEngineKit, firstRemoteVideoFrameOfUid uid: String, size: CGSize, elapsed: Int) {
        // 已显示远端视频首帧的回调
        if windowView != nil {
            windowView?.placeholderView.isHidden = true
        } else {
            remoteVideo.placeholderView.isHidden = true
        }
    }
    
    func rtcEngine(_ engine: ARtcEngineKit, firstRemoteAudioFrameDecodedOfUid uid: String, elapsed: Int) {
        // 已解码远端音频首帧的回调
        windowStatus = (infoModel.callMode == .video) ? .video : .audio
    }
}

// MARK: - ARtmCallDelegate

extension ARSignalVideoController {
    
    override func rtmKit(_ kit: ARtmKit, messageReceived message: ARtmMessage, fromPeer peerId: String) {
        // 收到点对点消息回调
        let dic = getDictionaryFromJSONString(jsonString: message.text)
        let value = dic.object(forKey: "Cmd") as! String
        if value == "SwitchAudio" {
            // 切换语音通话
            switchAudioMode()
            if windowView != nil {
                windowView?.windowStats = .audio
                windowView?.renderView.removeFromSuperview()
                windowStatus = .audio
            }
        } else if value == "EndCall" {
            // 结束通话
            destroySignalVc()
        } else if value == "CallState" {
            var responseDic = NSDictionary()
            isCallSucess ? (responseDic = ["Cmd": "CallStateResult", "state": 1]) : (responseDic = ["Cmd": "CallStateResult", "state": 2, "Mode": (infoModel.callMode == .video ? 0 : 1)])
            let message = ARtmMessage(text: getJSONStringFromDictionary(dictionary: responseDic as NSDictionary))
            sendMessageToPeer(message: message)

        } else if value == "CallStateResult" {
            dealWithException(time: 0)
            
            let state = dic.object(forKey: "state") as! Int
            if state == 0 {
                // 已经挂断
                destroySignalVc()
            } else if state == 1 {
                // 呼叫等待
                
            } else if state == 2 {
                // 已同意
                if !isCallSucess {
                    let mode = dic.object(forKey: "Mode") as! Int
                    acceptedInvitation(callMode: (mode == 0) ? .video : .audio)
                }
            }
        }
    }
    
    func rtmCallKit(_ callKit: ARtmCallKit, localInvitationAccepted localInvitation: ARtmLocalInvitation, withResponse response: String?) {
        // 被叫已接受呼叫邀请
        if response?.count != 0 {
            let dic: NSDictionary = getDictionaryFromJSONString(jsonString: response!)
            let mode = dic.object(forKey: "Mode")
            let callMode: CallMode = (mode as! Int == 0) ? .video : .audio
            acceptedInvitation(callMode: callMode)
            
            let arr = dic.allKeys as NSArray
            if arr.contains("VidCodec") {
                let vidArr = getArrayFromJSONString(jsonString: dic.object(forKey: "VidCodec") as! String)
                if vidArr.count == 1 {
                    isWatches = true
                    rtcKit.leaveChannel(nil)
                    setVideoEncoderConfiguration()
                    joinChannel()
                }
            }
        } else {
            destroySignalVc()
        }
    }
    
    override func rtmCallKit(_ callKit: ARtmCallKit, localInvitationRefused localInvitation: ARtmLocalInvitation, withResponse response: String?) {
        // 被叫已拒绝呼叫邀请
        leaveReason = .reject
        if response?.count != 0 {
            let dic: NSDictionary = getDictionaryFromJSONString(jsonString: response!)
            let valueArr: NSArray = dic.allValues as NSArray
            if valueArr.contains("Calling") {
                leaveReason = .busy
            }
        }
        destroySignalVc()
    }
    
    func rtmCallKit(_ callKit: ARtmCallKit, localInvitationCanceled localInvitation: ARtmLocalInvitation) {
        // 呼叫邀请已被取消
        destroySignalVc()
    }
    
    func rtmCallKit(_ callKit: ARtmCallKit, localInvitationFailure localInvitation: ARtmLocalInvitation, errorCode: ARtmLocalInvitationErrorCode) {
        // 呼叫邀请发送失败
        leaveReason = .noAnswer
        destroySignalVc()
    }
    
    override func rtmCallKit(_ callKit: ARtmCallKit, remoteInvitationReceived remoteInvitation: ARtmRemoteInvitation) {
        // 收到一个呼叫邀请
        remoteInvitation.response = getJSONStringFromDictionary(dictionary: ["Cmd": "Calling"])
        callKit.refuse(remoteInvitation) { (errorCode) in
            print("refuse errorCode = \(errorCode)")
        }
    }
    
    override func rtmCallKit(_ callKit: ARtmCallKit, remoteInvitationCanceled remoteInvitation: ARtmRemoteInvitation) {
        // 主叫已取消呼叫邀请
        leaveReason = .cancle
        destroySignalVc()
    }
}
