//
//  ARBaseViewController.swift
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2021/7/14.
//

import UIKit
import ARtmKit
import ARtcKit

var rtcKit: ARtcEngineKit!
var infoModel: ARCallInfoModel!

class ARBaseViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        ARCallRtmManager.rtmKit!.aRtmDelegate = self
        ARCallRtmManager.callKit.callDelegate = self
    }
    
    func playCallBell(isOpen: Bool) {
        if rtcKit != nil {
            if isOpen {
                let path = Bundle.main.path(forResource: "rtm_bell", ofType: "mp3")
                rtcKit.startAudioMixing(path!, loopback: true, replace: true, cycle: -1)
            } else {
                rtcKit.stopAudioMixing()
            }
        }
    }
    
    override var preferredStatusBarStyle: UIStatusBarStyle {
        return .lightContent
    }
}

extension ARBaseViewController: ARtmDelegate, ARtmCallDelegate {
    
    func rtmKit(_ kit: ARtmKit, peersOnlineStatusChanged onlineStatus: [ARtmPeerOnlineStatus]) {
        // 被订阅用户在线状态改变回调
    }
    
    func rtmKit(_ kit: ARtmKit, messageReceived message: ARtmMessage, fromPeer peerId: String) {
        // 收到点对点消息回调
        let dic = getDictionaryFromJSONString(jsonString: message.text)
        let value = dic.object(forKey: "Cmd") as! String
        if value == "CallState" && windowView == nil {
            let responseDic = ["Cmd": "CallStateResult", "state": 0] as [String : Any]
            let message = ARtmMessage(text: getJSONStringFromDictionary(dictionary: responseDic as NSDictionary))
            ARCallRtmManager.rtmKit?.send(message, toPeer: peerId, sendMessageOptions: ARtmSendMessageOptions(), completion: { (errorCode) in
                print("CallState errCode = \(errorCode)")
            })
        }
    }
    
    func rtmKit(_ kit: ARtmKit, connectionStateChanged state: ARtmConnectionState, reason: ARtmConnectionChangeReason) {
        // 连接状态改变的回调
        print("connectionStateChanged = \(state.rawValue)")
    }
    
    func rtmCallKit(_ callKit: ARtmCallKit, remoteInvitationCanceled remoteInvitation: ARtmRemoteInvitation) {
        // 主叫已取消呼叫邀请
    }
    
    func rtmCallKit(_ callKit: ARtmCallKit, localInvitationRefused localInvitation: ARtmLocalInvitation, withResponse response: String?) {
        // 被叫已拒绝呼叫邀请
    }
    
    func rtmCallKit(_ callKit: ARtmCallKit, remoteInvitationReceived remoteInvitation: ARtmRemoteInvitation) {
        // 收到呼叫邀请
        let dic = getDictionaryFromJSONString(jsonString: remoteInvitation.content!)
        let conference: Bool = dic.object(forKey: "Conference") as! Bool
        
        let storyboard = UIStoryboard.init(name: "Main", bundle: nil)
        let videoVc: UIViewController = storyboard.instantiateViewController(withIdentifier: conference ? "Call_GroupVC" : "Call_SignalVC")
        infoModel = ARCallInfoModel(callMode: (dic.object(forKey: "Mode") as! Int == 0) ? .video : .audio, channelId: dic.object(forKey: "ChanId") as? String, callType: .passive, callerId: remoteInvitation.callerId)
        
        if conference {
            let groupVc = videoVc as! ARGroupVideoController
            var arr = dic.object(forKey: "UserData") as! [String]
            arr.remove(UserDefaults.string(forKey: .uid)!)
            groupVc.callerIdArr = arr
            groupVc.remoteInvitation = remoteInvitation
        } else {
            let signalVc = videoVc as! ARSignalVideoController
            signalVc.remoteInvitation = remoteInvitation
            
            let arr: NSArray = dic.allKeys as NSArray
            if arr.contains("VidCodec"){
                let object = dic.object(forKey: "VidCodec")
                
                var vidArr = NSArray()
                if object is String {
                    vidArr = getArrayFromJSONString(jsonString: dic.object(forKey: "VidCodec") as! String)
                } else {
                    vidArr = dic.object(forKey: "VidCodec") as! NSArray
                }
                signalVc.isWatches = (vidArr.count == 1) ? true : false
            }
        }

        let rootVc = UIApplication.shared.keyWindow?.rootViewController
        videoVc.modalPresentationStyle = .overCurrentContext
        rootVc?.present(videoVc, animated: true, completion: nil)
    }
}
