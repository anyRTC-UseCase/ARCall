//
//  ARCallRtmManager.swift
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2021/7/14.
//

import Foundation
import ARtmKit

enum LoginStatus {
    case online, offline
}

enum CallWay {
    /* 点对点、多人 */
    case single, group
}

enum CallType {
    /* 主叫、被叫 */
    case calling, passive
}

enum CallMode {
    /* 视频 0、音频 1*/
    case video, audio
}

enum ARLeaveReason {
    case normal
    case busy
    case netError
    case cancle
    case reject
    case noAnswer
    case drop
}

struct ARCallInfoModel {
    var callMode: CallMode = .video
    var channelId: String!
    var callType: CallType?
    var callerId: String?
}

var callWay: CallWay = .single

class ARCallRtmManager: NSObject {
    static var rtmKit = ARtmKit(appId: AppID, delegate: nil)
    static var status: LoginStatus = .offline
    static var callKit: ARtmCallKit = (rtmKit?.getRtmCall())!
}

