//
//  ARSetupViewController.swift
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2021/7/15.
//

import UIKit

class MenuItem: NSObject {
    var title: String?
    var subtitle: String?
    var state: Bool = false
    
    class func getMenu(dic: NSDictionary) -> MenuItem {
        let item = MenuItem()
        item.title = dic.object(forKey: "title") as? String
        let arr: NSArray = dic.allKeys as NSArray
        arr.contains("subtitle") ? item.subtitle = dic.object(forKey: "subtitle") as? String : nil
        arr.contains("state") ? item.state = dic.object(forKey: "state") as! Bool : nil
        return item
    }
}

class ARSetupViewController: ARBaseViewController {
    private var menus = [MenuItem]()
    private var tableView: UITableView?
    let identifier = "Call_SetUp"
    
    lazy var dimensionsArr = {
        ["240*320", "480*640", "720*1280"]
    }()

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        view.backgroundColor = UIColor(hexString: "#F5F5F5")
        title = "设置"
        navigationItem.leftBarButtonItem = createBarButtonItem(title: "", image: "icon_return")
        
        if callWay == .single {
            menus = [
                MenuItem.getMenu(dic: ["title": "分辨率", "subtitle": dimensionsArr[Default.integer(forKey: "dimensions")]]),
                MenuItem.getMenu(dic: ["title": "帧率", "subtitle": "\(Default.integer(forKey: "frameRate"))"]),
            ]
        } else {
            menus = [
                MenuItem.getMenu(dic: ["title": "开启摄像头", "state": Default.bool(forKey: "video")]),
                MenuItem.getMenu(dic: ["title": "开启麦克风", "state": Default.bool(forKey: "audio")]),
            ]
        }
        menus.append(MenuItem.getMenu(dic: ["title": "AI降噪", "state": Default.bool(forKey: "noise")]))
        
        tableView = UITableView(frame: view.bounds, style: .grouped)
        tableView?.delegate = self
        tableView?.dataSource = self
        tableView?.rowHeight = 50
        tableView?.sectionHeaderHeight = 11
        tableView?.sectionFooterHeight = 0.1
        tableView?.separatorStyle = .none
        tableView?.tableHeaderView = UIView(frame: CGRect(x: 0, y: 0, width: ARScreenWidth, height: 11))
        view.addSubview(tableView!)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        navigationController?.navgationBarColor = UIColor.white
        navigationController?.titleColor = UIColor.black
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        navigationController?.navgationBarColor = UIColor(hexString: "#0F9DFD")
        navigationController?.titleColor = UIColor.white
    }
    
    override var preferredStatusBarStyle: UIStatusBarStyle {
        return .default
    }
}

extension ARSetupViewController: UITableViewDelegate, UITableViewDataSource {
    func numberOfSections(in tableView: UITableView) -> Int {
        return menus.count
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 1
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        var cell = tableView.dequeueReusableCell(withIdentifier: identifier)
        if cell == nil {
            cell = UITableViewCell(style: .value1, reuseIdentifier: identifier)
        }
        cell?.selectionStyle = .none
        cell?.textLabel?.font = UIFont(name: PingFang, size: 15)
        cell?.textLabel?.textColor = UIColor(hexString: "#333333")
        
        let model = menus[indexPath.section]
        cell?.textLabel?.text = model.title
        if callWay == .single, indexPath.section < 2 {
            cell?.accessoryType = .disclosureIndicator
            cell?.detailTextLabel?.text = model.subtitle
        } else {
            let arSwitch = UISwitch()
            arSwitch.tag = indexPath.section
            arSwitch.addTarget(self, action: #selector(switchChange), for: .touchUpInside)
            arSwitch.isOn = menus[indexPath.section].state
            cell?.accessoryView = arSwitch
        }
        return cell!
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        if callWay == .single, indexPath.section < 2 {
            let title: String?
            var arr = [String]()
            if indexPath.section == 0 {
                title = "请选择分辨率"
                arr = dimensionsArr
            } else {
                title = "请选择帧率"
                arr = ["7", "15", "24"]
            }
            
            ARAlertActionSheet.showAlert(titleStr: title, msgStr: nil, style: .actionSheet, currentVC: self, cancelHandler: nil, otherBtns: arr) { index in
                if indexPath.section == 0 {
                    Default.setValue(index, forKey: "dimensions")
                    self.menus[0].subtitle = arr[index]
                } else {
                    Default.setValue(NSInteger(arr[index]), forKey: "frameRate")
                    self.menus[1].subtitle = arr[index]
                }
                
                let indexSet = NSIndexSet(index: indexPath.section)
                tableView.reloadSections(indexSet as IndexSet, with: .none)
            }
        }
    }
    
    @objc private func switchChange(arswitch: UISwitch) {
        let arr = ["video", "audio", "noise"]
        Default.setValue(arswitch.isOn, forKey: arr[arswitch.tag])
        if arswitch.tag == 2 && windowView != nil {
            NotificationCenter.default.post(name: UIResponder.callNotificationNoise, object: nil)
        }
    }
}
