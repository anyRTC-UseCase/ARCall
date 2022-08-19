//
//  ARGroupVideoController.swift
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2021/7/15.
//

import UIKit
import ARtcKit
import ARtmKit
import SnapKit

class ARGroupVideoController: ARBaseViewController {
    @IBOutlet weak var callingView: UIView!                     /* 呼叫中 */
    @IBOutlet weak var calledView: UIView!                      /* 通话中工具 */
    @IBOutlet weak var callerIdLabel: UILabel!                  /* 呼叫 callerId */
    @IBOutlet weak var timeLabel: UILabel!                      /* 呼叫时长 */
    @IBOutlet weak var containerView: UIView!                   /* 视图容器 */
    @IBOutlet weak var containerConstraint: NSLayoutConstraint!  /* 容器高度 */
    @IBOutlet weak var audioButton: UIButton!
    @IBOutlet weak var videoButton: UIButton!
    
    var callerIdArr = [String]()
    var remoteInvitation: ARtmRemoteInvitation?
    private var videoArr = [ARVideoView]()
    private var cancleArr = [String]()                          /* 未呼通 - 取消呼叫邀请 */
    private var rtmChannel: ARtmChannel?
    private var destroy = false
    private var sourceTimer: ARSourceTimer = ARSourceTimer()
    private var timeText: String = "00:00"
    
    private lazy var localVideo: ARVideoView = {
        // 本地视图显示窗口
        let video = ARVideoView.loadVideoView(uid: localUid, status: .group)
        return video
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        initializeEngine()
        playCallBell(isOpen: true)
        
        if infoModel.callType == .calling {
            cancleArr = callerIdArr
            callingView.isHidden = true
            joinGroupChannel()
        } else {
            var text = ""
            for callerId in callerIdArr {
                text = String(format: "%@ %@", text, callerId)
            }
            callerIdLabel.text = text
        }
        
        rtmChannel = ARCallRtmManager.rtmKit?.createChannel(withId: infoModel.channelId, delegate: self)
        rtmChannel?.join(completion: { (errorCode) in
            print("join errorCode = \(errorCode.rawValue)")
        })
    }
    
    private func joinGroupChannel() {
        initializeUI()
        setVideoConfiguration()
        joinChannel()
        videoLayout()
    }
    
    private func initializeUI() {
        
        for object in callerIdArr {
            if infoModel.callType == .calling {
                sendLocalInvitation(calleeId: object)
            }
            
            let _ = createVideoWithUid(uid: object)
            queryPeersOnlineStatus(peerIds: [object], invitation: false)
        }
        
        NotificationCenter.default.addObserver(self, selector: #selector(switchAINoise), name: UIResponder.callNotificationNoise, object: nil)
    }
    
    private func initializeEngine() {
        // init ARtcEngineKit
        rtcKit = ARtcEngineKit.sharedEngine(withAppId: AppID, delegate: self)
        rtcKit.setChannelProfile(.liveBroadcasting)
        rtcKit.setClientRole(.broadcaster)
        rtcKit.enableDualStreamMode(true)
        
        rtcKit.enableVideo()
        let videoCanvas = ARtcVideoCanvas()
        videoCanvas.view = localVideo.renderView
        rtcKit.setupLocalVideo(videoCanvas)
        videoArr.insert(localVideo, at: 0)
        
        let audio = Default.bool(forKey: "audio")
        let video = Default.bool(forKey: "video")
        rtcKit.muteLocalAudioStream(!audio)
        rtcKit.muteLocalVideoStream(!video)
        audioButton.isSelected = !audio
        videoButton.isSelected = !video
        localVideo.placeholderView.isHidden = video
        localVideo.updateAudioState(state: audio)
    }
    
    private func joinChannel() {
        rtcKit.joinChannel(byToken: nil, channelId: infoModel.channelId, uid: UserDefaults.string(forKey: .uid)) { (channel, uid, elapsed) in
            print("joinChannel sucess")
        }
    }
    
    private func setVideoConfiguration() {
        rtcKit.enableVideo()
        
        // setup videoConfig
        let videoConfig = ARVideoEncoderConfiguration()
        videoConfig.dimensions = CGSize(width: 640, height: 480)
        videoConfig.bitrate = 500
        videoConfig.frameRate = 15
        rtcKit.setVideoEncoderConfiguration(videoConfig)
    }
    
    @objc func switchAINoise() {
        // AI 降噪
        let dic = ["Cmd": "SetAudioAiNoise", "Enable": Default.bool(forKey: "noise") ? 1: 0] as [String : Any]
        rtcKit.setParameters(getJSONStringFromDictionary(dictionary: dic as NSDictionary))
    }
    
    private func sendLocalInvitation(calleeId: String) {
        // 发送呼叫邀请
        let arr = NSMutableArray()
        arr.addObjects(from: callerIdArr)
        arr.insert(UserDefaults.string(forKey: .uid) as Any, at: 0)
        
        let dic = ["Mode": 0, "Conference": true, "ChanId": infoModel.channelId as Any, "UserData": arr] as [String : Any]
        let localInvitation: ARtmLocalInvitation = ARtmLocalInvitation(calleeId: calleeId)
        localInvitation.content = getJSONStringFromDictionary(dictionary: dic as NSDictionary)
        ARCallRtmManager.callKit.send(localInvitation) { (errorCode) in
            print("errorCode = \(errorCode.rawValue)")
        }
    }
    
    private func queryPeersOnlineStatus(peerIds: NSArray, invitation: Bool) {
        // 查询在线用户状态
        ARCallRtmManager.rtmKit?.queryPeersOnlineStatus(peerIds as! [String], completion: { (peerOnlineStatus, errorCode) in
            for onlineStatus in peerOnlineStatus! {
                if !invitation {
                    if onlineStatus.state != .online {
                        let video = self.getVideoWithUid(uid: onlineStatus.peerId)
                        video?.startCountdown()
                    }
                } else {
                    // 邀请
                    let peerId = onlineStatus.peerId
                    if onlineStatus.state != .online {
                        self.showToast(text: "\(peerId) 不在线，请稍后重试！", image: "icon_warning")
                    } else {
                        self.callerIdArr.append(peerId)
                        let _ = self.createVideoWithUid(uid: peerId)
                        self.videoLayout()
                        self.sendLocalInvitation(calleeId: peerId)
                    }
                }
            }
        })
    }
    
    @IBAction func didClickGroupVcButton(_ sender: UIButton) {
        sender.isSelected.toggle()
        
        if sender.tag == 50 {
            // 最小化
            ARWindowView.loadWindowView(time: timeText, status: .audio, vc: self)
            
        } else if sender.tag == 51 {
            // 邀请
            let alertVc = ARAlertTextFieldController(title: "邀请用户", message: nil, preferredStyle: .alert)
            let cancelAction =  UIAlertAction (title:  "取消" , style: .cancel , handler:  nil )
            let okAction =  UIAlertAction (title:  "确定" , style: . default , handler: {
                    action  in
                let peerId = alertVc.textField.text
                if peerId?.count == 4 {
                    if !self.callerIdArr.contains(peerId!) && peerId != UserDefaults.string(forKey: .uid) {
                        self.queryPeersOnlineStatus(peerIds: [peerId as Any], invitation: true)
                    } else {
                        self.showToast(text: "邀请失败，用户已存在", image: "icon_warning")
                    }
                }
            })
            cancelAction.setValue(UIColor(hexString: "#666666"), forKey: "titleTextColor")
            alertVc.addAction(cancelAction)
            alertVc.addAction(okAction)
            present(alertVc, animated: true, completion: nil)
            DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + 0.1) {
                alertVc.textField.becomeFirstResponder()
            }
            
        } else if sender.tag == 52 {
            // 开关本地音频发送
            rtcKit.muteLocalAudioStream(sender.isSelected)
            localVideo.updateAudioState(state: !sender.isSelected)
            
        } else if sender.tag == 53 {
            // 启用/关闭扬声器播放
            rtcKit.setEnableSpeakerphone(!sender.isSelected)
            
        } else if sender.tag == 54 {
            // 开关本地视频发送
            rtcKit.muteLocalVideoStream(sender.isSelected)
            localVideo.placeholderView.isHidden = !sender.isSelected
            
        } else if sender.tag == 55 {
            // 挂断
            destroyGroupVc()
            
        } else if sender.tag == 56 {
            // 切换摄像头
            rtcKit.switchCamera()
            
        } else if sender.tag == 100 {
            // 拒绝
            ARCallRtmManager.callKit.refuse(remoteInvitation!) { (errorCode) in
                print("refuse errorCode = \(errorCode.rawValue)")
            }
            destroyGroupVc()
            
        } else if sender.tag == 101 {
            // 同意
            playCallBell(isOpen: false)
            ARCallRtmManager.callKit.accept(remoteInvitation!) { (errorCode) in
                print("accept errorCode = \(errorCode.rawValue)")
            }
            callingView.isHidden = true
            joinGroupChannel()
        }
    }
    
    fileprivate func createVideoWithUid(uid: String) -> ARVideoView {
        // 创建视图显示窗口
        let video = getVideoWithUid(uid: uid)
        if video == nil {
            let videoView = ARVideoView.loadVideoView(uid: uid, status: .group)
            videoArr.append(videoView)
            
            videoView.callback = {[weak self] (object) in
                guard let weakSelf = self else { return }
                let video = weakSelf.getVideoWithUid(uid: object.uid!)!
                weakSelf.videoArr.remove(video)
                video.removeVideo()
                weakSelf.videoLayout()
            }
            return videoView
        }
        return video!
    }
    
    fileprivate func getVideoWithUid(uid: String) -> ARVideoView? {
        // 获取指定的视图显示窗口
        var video: ARVideoView?
        for object in videoArr {
            if object.uid == uid {
                video = object
                break
            }
        }
        return video
    }
    
    private func destroyGroupVc() {
        if !destroy {
            // 释放所有资源
            destroy.toggle()
            let topVc = topViewController()
            if topVc is ARAlertTextFieldController {
                topVc.dismiss(animated: false, completion: nil)
            }
            ARWindowView.removeWindowView()
            leaveToast(reason: .normal)
            
            for calleeId in cancleArr {
                let localInvitation = ARtmLocalInvitation()
                localInvitation.calleeId = calleeId
                ARCallRtmManager.callKit.cancel(localInvitation) { (errorCode) in
                    print("cancel errorCode = \(errorCode.rawValue)")
                }
            }
            
            rtmChannel?.leave()
            rtmChannel?.channelDelegate = nil
            ARCallRtmManager.rtmKit?.destroyChannel(withId: infoModel.channelId)
            
            if rtcKit != nil {
                rtcKit.leaveChannel(nil)
                ARtcEngineKit.destroy()
            }
            rtcKit = nil; infoModel = nil
            dismiss(animated: true) {
                let topVc = self.topViewController()
                topVc.viewWillAppear(true)
            }
        }
    }
    
    deinit {
        print("ARGroupVideoController deinit")
    }
}

// MARK: - ARtcEngineDelegate

extension ARGroupVideoController: ARtcEngineDelegate {
    
    func rtcEngine(_ engine: ARtcEngineKit, firstRemoteVideoDecodedOfUid uid: String, size: CGSize, elapsed: Int) {
        // 已完成远端视频首帧解码回调
        let video = getVideoWithUid(uid: uid)
        if video != nil {
            let videoCanvas = ARtcVideoCanvas()
            videoCanvas.uid = uid
            videoCanvas.view = video!.renderView
            rtcKit.setupRemoteVideo(videoCanvas)
        }
    }
    
    func rtcEngine(_ engine: ARtcEngineKit, didJoinedOfUid uid: String, elapsed: Int) {
        // 远端用户/主播加入回调
        playCallBell(isOpen: false)
        let video = getVideoWithUid(uid: uid)
        video?.loadingButton.isHidden = true
        sourceTimer.start(1) { [weak self] (time) in
            self?.timeLabel.text = "\(time)"
            self?.timeText = "\(time)"
            windowView?.timeLabel.text = "\(time)"
        }
    }
    
    func rtcEngine(_ engine: ARtcEngineKit, didOfflineOfUid uid: String, reason: ARUserOfflineReason) {
        // 远端用户（通信场景）/主播（直播场景）离开当前频道回调
    }
    
    func rtcEngine(_ engine: ARtcEngineKit, firstLocalVideoFrameWith size: CGSize, elapsed: Int) {
        // 已显示本地视频首帧的回调
        localVideo.placeholderView.isHidden = Default.bool(forKey: "video")
    }
    
    func rtcEngine(_ engine: ARtcEngineKit, firstRemoteVideoFrameOfUid uid: String, size: CGSize, elapsed: Int) {
        // 已显示远端视频首帧的回调
        let video = getVideoWithUid(uid: uid)
        video?.placeholderView.isHidden = true
    }
    
    func rtcEngine(_ engine: ARtcEngineKit, remoteVideoStateChangedOfUid uid: String, state: ARVideoRemoteState, reason: ARVideoRemoteStateReason, elapsed: Int) {
        // 远端视频状态发生改变回调
        let video = getVideoWithUid(uid: uid)
        if reason == .remoteMuted {
            video?.placeholderView.isHidden = false
        } else if reason == .remoteUnmuted {
            video?.placeholderView.isHidden = true
        }
    }
    
    func rtcEngine(_ engine: ARtcEngineKit, remoteAudioStateChangedOfUid uid: String, state: ARAudioRemoteState, reason: ARAudioRemoteStateReason, elapsed: Int) {
        // 远端音频状态发生改变回调
        let video = getVideoWithUid(uid: uid)
        if reason == .reasonRemoteMuted {
            video?.updateAudioState(state: false)
        } else if reason == .reasonRemoteUnmuted {
            video?.updateAudioState(state: true)
        }
    }
}

// MARK: - ARtmCallDelegate

extension ARGroupVideoController {
    
    override func rtmCallKit(_ callKit: ARtmCallKit, localInvitationRefused localInvitation: ARtmLocalInvitation, withResponse response: String?) {
        // 被叫已拒绝呼叫邀请
        let video = getVideoWithUid(uid: localInvitation.calleeId)
        if video != nil {
            videoArr.remove(video!)
            videoLayout()
        }
    }
    
    override func rtmCallKit(_ callKit: ARtmCallKit, remoteInvitationReceived remoteInvitation: ARtmRemoteInvitation) {
        // 收到一个呼叫邀请
        remoteInvitation.response = getJSONStringFromDictionary(dictionary: ["Cmd": "Calling"])
        callKit.refuse(remoteInvitation) { (errorCode) in
            print("refuse errorCode = \(errorCode.rawValue)")
        }
    }
    
    override func rtmCallKit(_ callKit: ARtmCallKit, remoteInvitationCanceled remoteInvitation: ARtmRemoteInvitation) {
        // 主叫已取消呼叫邀请
        destroyGroupVc()
    }
    
}

// MARK: - ARtmChannelDelegate

extension ARGroupVideoController: ARtmChannelDelegate {
    
    func channel(_ channel: ARtmChannel, memberJoined member: ARtmMember) {
        // 远端用户加入频道回调
        var video = getVideoWithUid(uid: member.uid)
        if !callerIdArr.contains(member.uid) {
            callerIdArr.append(member.uid)
        }
        
        if video == nil {
            video = createVideoWithUid(uid: member.uid)
            videoLayout()
        }
        video?.loadingButton.isHidden = true
    }
    
    func channel(_ channel: ARtmChannel, memberLeft member: ARtmMember) {
        // 频道成员离开频道回调
        let video = getVideoWithUid(uid: member.uid)
        video?.removeVideo()
        if video != nil {
            videoArr.remove(video!)
            videoLayout()
        }
        
        callerIdArr.remove(member.uid)
        cancleArr.remove(member.uid)
    }
}

// MARK - videoLayout

extension ARGroupVideoController {
    
    func videoLayout() {
        videoArr.count <= 1 ? destroyGroupVc() : nil
        
        let count = videoArr.count
        let padding: CGFloat = 1.0
        var warpCount: CGFloat = 2.0
        let rate: CGFloat = 1.0
        if count > 4 {
            if count <= 9 {
                warpCount = 3.0
            } else if count <= 16 {
                warpCount = 4.0
            } else {
                warpCount = 5.0
            }
        }
        
        let itemWidth: CGFloat = (ARScreenWidth - padding * (warpCount - 1))/warpCount
        let itemHeight: CGFloat = itemWidth * rate
        let index = ceil(CGFloat(videoArr.count)/warpCount)
        containerConstraint.constant = itemHeight * index + (index - 1) * padding
        
        var lastView: UIView!
        for (index, object) in videoArr.enumerated() {
            let video = object as UIView
            containerView.insertSubview(video, at: 0)
            
            let rowCount: NSInteger = videoArr.count % NSInteger(warpCount) == 0 ? videoArr.count / NSInteger(warpCount) : videoArr.count / NSInteger(warpCount) + 1
            
            let currentRow: NSInteger = index / NSInteger(warpCount)
            let currentColumn: NSInteger = index % NSInteger(warpCount)
            
            video.snp.remakeConstraints({ (make) in
                make.width.equalTo(itemWidth)
                make.height.equalTo(itemHeight)

                if (currentRow == 0) {
                    make.top.equalTo(containerView)
                }
                
                if (currentRow == rowCount - 1) {
                    make.bottom.equalTo(containerView)
                }
                
                if currentRow != 0 && (currentRow != rowCount - 1) {
                    if currentColumn == 0 {
                        make.top.equalTo(lastView.snp_bottom).offset(padding)
                    } else {
                        make.bottom.equalTo(lastView.snp_bottom).offset(padding)
                    }
                }
                
                if (currentColumn == 0) {
                    make.left.equalTo(containerView);
                }
                
                if (currentColumn == Int(warpCount) - 1) {
                    make.right.equalTo(containerView)
                }
                
                if currentColumn != 0 && (currentColumn != Int(warpCount) - 1) {
                    make.left.equalTo(lastView.snp_right).offset(padding)
                }
            })
            lastView = video
        }
    }
}
