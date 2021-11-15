//
//  ARVideoView.swift
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2021/7/20.
//

import UIKit
import AttributedString

class ARVideoView: ARDragView {
    @IBOutlet weak var renderView: UIView!
    @IBOutlet weak var placeholderView: UIView!
    @IBOutlet weak var loadingButton: UIButton!
    @IBOutlet weak var uidLabel: ARMarginLabel!
    
    private var borderLayer: CAShapeLayer?
    var uid: String?
    var status: CallWay?
    var timer: DispatchSourceTimer?
    
    typealias videoBlock = (_ video: ARVideoView) ->()
    var callback: videoBlock!
    
    lazy var animations: CABasicAnimation = {
        let animation = CABasicAnimation.init(keyPath: "transform.rotation.z")
        animation.duration = 2.0
        animation.fromValue = 0.0
        animation.toValue = Double.pi * 2
        animation.repeatCount = MAXFLOAT
        animation.isRemovedOnCompletion = false
        return animation
    }()
    
    lazy var tap: UITapGestureRecognizer = {
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(switchVideoSize))
        tapGesture.numberOfTapsRequired = 1
        return tapGesture
    }()
    
    override var frame: CGRect {
        didSet {
            if status == .single {
                if frame.width == ARScreenWidth {
                    borderLayer?.removeFromSuperlayer()
                    borderLayer = nil
                    dragEnable = false
                    removeGestureRecognizer(tap)
                } else {
                    swiftDrawBoardDottedLine(width: 3, lenth: 1, space: 0, cornerRadius: 0, color: UIColor.white)
                    dragEnable = true
                    addGestureRecognizer(tap)
                }
            }
        }
    }
    
    class func loadVideoView(uid: String?, status: CallWay) -> ARVideoView {
        let video = Bundle.main.loadNibNamed("ARVideoView", owner: nil, options: nil)![0] as! ARVideoView
        video.status = status
        if status == .single {
            video.dragEnable = true
        } else {
            video.uidLabel.isHidden = false
            video.uidLabel.contentInset = UIEdgeInsets(top: 0, left: 5, bottom: 0, right: 5)
            video.uidLabel.text = uid
            video.dragEnable = false
            if uid != UserDefaults.string(forKey: .uid) {
                video.loadingButton.isHidden = false
                video.loadingButton.imageView?.layer.add(video.animations, forKey: "CABasicAnimation")
            }
        }
        video.uid = uid
        return video
    }
    
    @objc func switchVideoSize() {
        if let _ = callback {
            callback(self)
        }
    }
    
    func updateAudioState(state: Bool) {
        if state {
            uidLabel.attributed.text = .init("""
            \(.image(UIImage(named: "icon_openmic")!, .custom(size: CGSize(width: 13, height: 17)))) \(uid!)
            """)
        } else {
            uidLabel.attributed.text = .init("""
            \(.image(UIImage(named: "icon_closemic")!, .custom(size: CGSize(width: 13, height: 17)))) \(uid!)
            """)
        }
    }
    
    func startCountdown() {
        endCountdown()
        // 倒计时60s
        var times = 10
        timer = DispatchSource.makeTimerSource(queue: DispatchQueue.global())
        timer?.schedule(deadline: .now(), repeating: .seconds(1))
        timer?.setEventHandler(handler: {
            if times < 0 {
                self.endCountdown()
                if let _ = self.callback  {
                    DispatchQueue.main.async {
                        self.callback(self)
                    }
                }
            } else {
                DispatchQueue.main.async {
                    times = times - 1
                }
            }
        })
        timer?.resume()
    }
    
    func endCountdown() {
        timer?.cancel()
        timer = nil
    }
    
    func removeVideo() {
        endCountdown()
        self.removeFromSuperview()
    }
    
    func swiftDrawBoardDottedLine(width: CGFloat, lenth: CGFloat, space: CGFloat, cornerRadius: CGFloat, color:UIColor) {
        
        borderLayer?.removeFromSuperlayer()
        borderLayer = nil
        
        self.layer.cornerRadius = cornerRadius
        borderLayer =  CAShapeLayer()
        borderLayer?.bounds = self.bounds
        borderLayer?.position = CGPoint(x: self.bounds.midX, y: self.bounds.midY);
        borderLayer?.path = UIBezierPath(roundedRect: borderLayer!.bounds, cornerRadius: cornerRadius).cgPath
        borderLayer?.lineWidth = width / UIScreen.main.scale
        
        borderLayer?.lineDashPattern = [lenth,space] as [NSNumber]
        borderLayer?.lineDashPhase = 0.1;
        
        borderLayer?.fillColor = UIColor.clear.cgColor
        borderLayer?.strokeColor = color.cgColor
        self.layer.addSublayer(borderLayer!)
    }
}
