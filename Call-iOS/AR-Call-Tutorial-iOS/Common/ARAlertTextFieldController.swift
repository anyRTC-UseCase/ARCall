//
//  ARAlertTextFieldController.swift
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2021/7/23.
//

import UIKit

class ARAlertTextFieldController: UIAlertController,UITextFieldDelegate {

    private var stackView: UIStackView!
    var textField: UITextField!
    
    override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
        super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
        let contentView = UIView()
        let controller = UIViewController()
        controller.view = contentView
        
        textField = UITextField()
        textField.keyboardType = .numberPad
        contentView.addSubview(textField)
        textField.addTarget(self, action: #selector(limitTextField), for: .editingChanged)
        
        stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.spacing = 10
        contentView.addSubview(stackView)
        stackView.snp.makeConstraints({ (make) in
            make.edges.equalToSuperview().inset(UIEdgeInsets(top: 20, left: 0, bottom: 20, right: 0))
        })
        for _ in 0...3 {
            let button = UIButton(type: .custom)
            button.layer.borderColor = UIColor(hexString: "#DDDDDD").cgColor
            button.layer.masksToBounds = true
            button.layer.cornerRadius = 5
            button.backgroundColor = UIColor.white
            button.setTitleColor(UIColor.black, for: .normal)
            stackView.addArrangedSubview(button)
            button.snp.makeConstraints { (make) in
                make.width.equalTo(50)
                make.height.equalTo(43)
            }
        }
        
        //super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
        self.setValue(controller, forKey: "contentViewController")
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    @objc func limitTextField() {
        if textField.text?.count ?? 0 > 4 {
            textField.text = String((textField.text?.prefix(4))!)
        }
        let calleeId = textField.text
        
        let arr = stringToArr(str: calleeId)
        for index in 0...3 {
            var text = ""
            (index < arr.count) ? (text = String(arr[index])) : nil
            let button: UIButton = stackView.subviews[index] as! UIButton
            button.setTitle(text, for: .normal)
        }
    }
    
    func textField(_ textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool {
        
        return stringAllIsNumber(string: string) || string == ""
    }
}


class ARSourceTimer: NSObject {
    var sourceTimer: DispatchSourceTimer?
    
    func start(_ timeInterval: TimeInterval = 1, timeCount: @escaping (_ time: String)->()){
        if sourceTimer == nil {
            sourceTimer = DispatchSource.makeTimerSource(queue: DispatchQueue.global())
            sourceTimer?.schedule(deadline: .now(), repeating: timeInterval)
            
            var index = 0
            sourceTimer?.setEventHandler(handler: {
                index += 1
                
                DispatchQueue.main.async {
                    timeCount(timeStampToString(timeStamp: index))
                }
            })
            sourceTimer?.resume()
        }
    }
    
    func stop() {
        sourceTimer?.cancel()
    }
}

// 秒数转 00:00
func timeStampToString(timeStamp: Int) -> String {
    let minute = Int(timeStamp/60)
    let second = Int(timeStamp - minute * 60)
    let timeString = String.init(format: "%02d:%02d",minute,second)
    return timeString
}
