//
//  ARMainViewController.swift
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2021/7/14.
//

import UIKit
import ARtmKit
import SVProgressHUD
import Alamofire

class ARMainViewController: ARBaseViewController {
    
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var stackView: UIStackView!
    @IBOutlet weak var calleeIdLabel: UILabel!
    @IBOutlet weak var mainCollectionView: UICollectionView!
    @IBOutlet weak var callButton: UIButton!
    /* collectionView constraint */
    @IBOutlet weak var constraint0: NSLayoutConstraint!
    /* textField constraint */
    @IBOutlet weak var constraint1: NSLayoutConstraint!
    
    var calleeIdArr = [String]()
    
    fileprivate lazy var flowLayout: UICollectionViewFlowLayout = {
        let layout = UICollectionViewFlowLayout()
        layout.minimumInteritemSpacing = 10
        layout.minimumLineSpacing = 10
        layout.itemSize = CGSize(width: 102, height: 44)
        return layout
    }()
    
    fileprivate lazy var calleeIdTextField: UITextField = {
        let textField = UITextField.init(frame: CGRect.zero)
        textField.delegate = self
        textField.keyboardType = .numberPad
        textField.addTarget(self, action: #selector(limitTextField), for: .editingChanged)
        return textField
    }()

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        
        initializeUI()
    }
    
    func initializeUI() {
        self.navigationItem.leftBarButtonItem = createBarButtonItem(title: "", image: "icon_return_w")
        calleeIdLabel.text = "您的呼叫ID：\(localUid)"
        
        let setupButton = UIButton(type: .custom)
        setupButton.setImage(UIImage(named: "icon_set"), for: .normal)
        setupButton.frame = CGRect.init(x: 0, y: 0, width: 40, height: 40)
        setupButton.addTarget(self, action: #selector(setup), for: .touchUpInside)
        self.navigationItem.rightBarButtonItem = UIBarButtonItem(customView: setupButton)
        
        if callWay == .single {
            self.title = "点对点呼叫邀请"
            mainCollectionView.removeFromSuperview()
        } else {
            self.title = "多人呼叫邀请"
            titleLabel.text = "请输入对方的ID，可输入多个"
        }
        
        for objc in stackView.subviews {
            let button = objc as? UIButton
            button?.addTarget(self, action: #selector(didClickTextField), for: .touchUpInside)
        }
        
        self.view.addSubview(calleeIdTextField)
        mainCollectionView.collectionViewLayout = flowLayout
    }
    
    @objc func didClickTextField() {
        calleeIdTextField.becomeFirstResponder()
    }
    
    @objc func setup() {
        
        let storyboard = UIStoryboard.init(name: "Main", bundle: nil)
        let setupVc = storyboard.instantiateViewController(withIdentifier: "Call_SetupVC") as! ARSetupViewController
        navigationController?.navigationBar.titleTextAttributes = [NSAttributedString.Key.foregroundColor : UIColor.black]
        navigationController?.pushViewController(setupVc, animated: true)
    }
    
    @objc func limitTextField() {
        
        if calleeIdTextField.text?.count ?? 0 > 4 {
            calleeIdTextField.text = String((calleeIdTextField.text?.prefix(4))!)
        }
        let calleeId = calleeIdTextField.text
        
        let arr = stringToArr(str: calleeId)
        for index in 0...3 {
            var text = ""
            (index < arr.count) ? (text = String(arr[index])) : nil
            let button: UIButton = stackView.subviews[index] as! UIButton
            button.setTitle(text, for: .normal)
        }
        
        if callWay == .single {
            // 点对点呼叫
            callButton.isEnabled = (calleeId?.count == 4)
            callButton.isEnabled ? (callButton.setTitleColor(UIColor(hexString: "#40A3FB"), for: .normal)) : (callButton.setTitleColor(UIColor.lightGray, for: .normal))
        } else {
            // 多人呼叫
            if calleeIdArr.count < 6 {
                if calleeId?.count == 4 {
                    if calleeIdArr.contains(calleeId!) == false {
                        calleeIdArr.append(calleeId!)
                        calleeIdTextField.text = ""
                        if mainCollectionView.isHidden {
                            mainCollectionView.isHidden = false
                            changeConstraint(exist: true)
                        }
                        mainCollectionView.reloadData()
                        callButton.isEnabled = true
                        callButton.setTitleColor(UIColor(hexString: "#40A3FB"), for: .normal)
                        
                        for index in 0...3 {
                            let button: UIButton = stackView.subviews[index] as! UIButton
                            button.setTitle("", for: .normal)
                        }
                    } else {
                        showToast(text: "当前ID已存在，请重新输入", image: "icon_warning")
                    }
                }
            }
        }
    }
    
    func startSignalCall() {
        ARAlertActionSheet.showAlert(titleStr: nil, msgStr: nil, style: .actionSheet, currentVC: self, cancelBtn: "取消", cancelHandler: nil, otherBtns: ["视频呼叫", "音频呼叫"]) {
            (index) in
            let manager = NetworkReachabilityManager()
            if manager?.networkReachabilityStatus != .notReachable {
                let storyboard = UIStoryboard.init(name: "Main", bundle: nil)
                let signalVc = storyboard.instantiateViewController(withIdentifier: "Call_SignalVC") as! ARSignalVideoController
                
                infoModel = ARCallInfoModel(callMode: (index == 0 ? .video : .audio), channelId: "\(self.generateRandomNumber(num: 9))", callType: .calling, callerId: self.calleeIdTextField.text!)

                let rootVc = UIApplication.shared.keyWindow?.rootViewController
                signalVc.modalPresentationStyle = .overCurrentContext
                rootVc?.present(signalVc, animated: true, completion: nil)
            } else {
                self.showToast(text: "当前网络较差，请检查你的网络设置", image: "icon_warning")
            }
        }
    }
    
    func startGroupCall(arr: NSArray) {
        let storyboard = UIStoryboard.init(name: "Main", bundle: nil)
        let groupVc = storyboard.instantiateViewController(withIdentifier: "Call_GroupVC") as! ARGroupVideoController
        infoModel = ARCallInfoModel(callMode: .video, channelId: "\(self.generateRandomNumber(num: 9))", callType: .calling)
        groupVc.callerIdArr = arr as! [String]
        
        let rootVc = UIApplication.shared.keyWindow?.rootViewController
        groupVc.modalPresentationStyle = .overCurrentContext
        rootVc?.present(groupVc, animated: true, completion: nil)
    }
    
    
    @IBAction func didClickCallButton(_ sender: Any) {
        calleeIdTextField.resignFirstResponder()

        if windowView == nil {
            
            let manager = NetworkReachabilityManager()
            if manager?.networkReachabilityStatus == .notReachable {
                showToast(text: "当前网络较差，请检查你的网络设置", image: "icon_warning")
                return
            }
            
            if callWay == .single {
                let calleeId = calleeIdTextField.text!
                if calleeId != UserDefaults.string(forKey: .uid) {
                    SVProgressHUD.show(UIImage(named: "icon_loadings")!, status: "呼叫中...")
                    ARCallRtmManager.rtmKit?.queryPeersOnlineStatus([calleeId], completion: { (peerOnlineStatus, errorCode) in
                        for onlineStatus in peerOnlineStatus! {
                            if onlineStatus.state == .online {
                                self.startSignalCall()
                            } else {
                                self.showToast(text: "对方不在线，请稍后再试！", image: "icon_warning")
                            }
                        }
                        SVProgressHUD.dismiss(withDelay: 0.3)
                    })
                } else {
                    showToast(text: "不能呼叫自己，请重新输入！", image: "icon_warning")
                }
            } else {
                ARCallRtmManager.rtmKit?.queryPeersOnlineStatus(calleeIdArr, completion: { (peerOnlineStatus, errorCode) in
                    var arr = [String]()
                    var text = ""
                    for onlineStatus in peerOnlineStatus! {
                        if onlineStatus.state == .online {
                            arr.append(onlineStatus.peerId)
                        } else {
                            text.append(" \(onlineStatus.peerId)")
                        }
                    }
                    
                    if text.count != 0 {
                        self.showToast(text: "\(text) 不在线", image: "icon_warning")
                    }
                    
                    if arr.count != 0 {
                        DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + 0.5) {
                            self.startGroupCall(arr: arr as NSArray)
                        }
                    }
                })
            }
        } else {
            showToast(text: "正在通话中，请稍后再试！", image: "icon_warning")
        }
    }
    
    @objc func removeCalleeId(sender: UIButton) {
        calleeIdArr.remove(at: sender.tag)
        mainCollectionView.reloadData()
        
        if calleeIdArr.count == 0 {
            changeConstraint(exist: false)
            callButton.isEnabled = false
            callButton.setTitleColor(UIColor.lightGray, for: .normal)
        }
    }
    
    func changeConstraint(exist: Bool) {
        constraint0.priority = UILayoutPriority(rawValue: exist ? 1000 : 999)
        constraint1.priority = UILayoutPriority(rawValue: exist ? 999 : 1000)
        
        UIView.animate(withDuration: 0.25) {
            self.view.layoutIfNeeded()
        } completion: { (result) in
            self.mainCollectionView.isHidden = !exist
        }
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        view.endEditing(true)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        navigationController?.navigationBar.setBackgroundImage(createImage(UIColor(hexString: "#0F9DFD")), for: .any, barMetrics: .default)
        navigationController?.navigationBar.isTranslucent = false
        navigationController?.navigationBar.shadowImage = UIImage()
        navigationController?.interactivePopGestureRecognizer?.isEnabled = false
        navigationController?.navigationBar.isHidden = false
    }
}

// MARK: - UICollectionViewDataSource, UICollectionViewDelegate

extension ARMainViewController: UICollectionViewDataSource, UICollectionViewDelegate {
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return calleeIdArr.count
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell: ARMainCollectionCell = collectionView.dequeueReusableCell(withReuseIdentifier: "Call_MainCellID", for: indexPath) as! ARMainCollectionCell
        cell.titleLabel.text = calleeIdArr[indexPath.row]
        cell.deleteButton.tag = indexPath.row
        cell.deleteButton.addTarget(self, action: #selector(removeCalleeId), for: .touchUpInside)
        return cell
    }
}

// MARK: - UITextFieldDelegate

extension ARMainViewController: UITextFieldDelegate {
    func textField(_ textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool {
        
        return stringAllIsNumber(string: string) || string == ""
    }
}

class ARMainCollectionCell: UICollectionViewCell {
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var deleteButton: UIButton!
}
