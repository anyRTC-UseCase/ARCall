//
//  ViewController.swift
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2021/7/13.
//

import UIKit

var localUid: String = ""
let Default = UserDefaults.standard

class ViewController: ARBaseViewController {
    @IBOutlet var calleeIdLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        var uid = UserDefaults.string(forKey: .uid)
        if uid == nil {
            uid = "\(generateRandomNumber(num: 4))"
            UserDefaults.set(value: uid!, forKey: .uid)
            Default.setValue(true, forKey: "video")
            Default.setValue(true, forKey: "audio")
            Default.setValue(false, forKey: "noise")
            Default.setValue(1, forKey: "dimensions")
            Default.setValue(15, forKey: "frameRate")
        }
        localUid = uid!
        self.calleeIdLabel.text = "您的呼叫ID：\(localUid)"
        
        ARCallRtmManager.rtmKit?.login(byToken: nil, user: localUid, completion: { errorCode in
            print("login == \(errorCode.rawValue)")
        })
    }
    
    @IBAction func didClickStatusButton(_ sender: UIButton) {
        callWay = (sender.tag == 1) ? .group : .single
    }
    
    override func viewWillAppear(_ animated: Bool) {
        self.navigationController?.setNavigationBarHidden(true, animated: true)
        super.viewWillAppear(animated)
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        self.navigationController?.setNavigationBarHidden(false, animated: true)
        super.viewWillDisappear(animated)
    }
}
