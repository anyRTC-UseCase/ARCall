//
//  ARVideoView.swift
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2021/7/16.
//

import UIKit
import ARtcKit

enum ARWindowViewStats {
    /* 接听等待 视频接听 音频or多人  */
    case wait, video, audio
}

let videoPadding: CGFloat = 8.0
var windowView: ARWindowView?

class ARWindowView: ARDragView {
    
    @IBOutlet weak var renderView: UIView!
    @IBOutlet weak var placeholderView: UIView!
    @IBOutlet weak var waitView: UIView!
    @IBOutlet weak var timeLabel: UILabel!
    
    var uid: String? {
        didSet {
            let videoCanvas = ARtcVideoCanvas()
            videoCanvas.uid = uid!
            videoCanvas.view = renderView
            rtcKit.setupRemoteVideo(videoCanvas)
        }
    }
    
    var windowStats: ARWindowViewStats? {
        didSet {
            switch windowStats {
            case .wait,.audio:
                waitView.isHidden = false
                frame = CGRect(x: (ARScreenWidth - 89.0 - videoPadding), y: ARScreenHeight/2.5, width: 89.0, height: 89.0)
                break
            case .video:
                waitView.isHidden = true
                frame = CGRect(x: ARScreenWidth - 103.0, y: ARScreenHeight/2.5, width: 95.0, height: 157.0)
                break
            default: break
            }
        }
    }
    
    class func loadWindowView(time: String, status: ARWindowViewStats, vc: UIViewController) {
        removeWindowView()
        windowView = Bundle.main.loadNibNamed("ARWindowView", owner: nil, options: nil)![0] as? ARWindowView
        windowView?.windowStats = status
        windowView?.dragEnable = true
        windowView?.containVc = vc
        vc.dismiss(animated: false, completion: nil)
        UIApplication.shared.keyWindow?.addSubview(windowView!)
        
        if time != "00:00" {
            windowView?.timeLabel.text = time
        }
    }
    
    class func removeWindowView() {
        for subView in UIApplication.shared.keyWindow!.subviews {
            if subView == windowView {
                windowView?.containVc = nil
                windowView?.removeFromSuperview()
                windowView = nil
                break;
            }
        }
    }
    
    override func touchesEnded(_ touches: Set<UITouch>, with event: UIEvent?) {
        super.touchesEnded(touches, with: event)
        
        let touch = touches.first
        let currentLocation = touch?.location(in: self.superview)
        
        if startFrameLocation == currentLocation {
            let rootVc = UIApplication.shared.keyWindow?.rootViewController
            containVc?.modalPresentationStyle = .overCurrentContext
            containVc?.transitioningDelegate = self
            if containVc is ARSignalVideoController {
                let signalVc = containVc as! ARSignalVideoController
                signalVc.setupRemoteVideo()
                
                var currentFrame = frame
                currentFrame.size = CGSize(width: 95, height: 157)
                if signalVc.localVideo.frame.width == ARScreenWidth {
                    signalVc.remoteVideo.frame = currentFrame
                } else {
                    signalVc.localVideo.frame = currentFrame
                }
            }
            rootVc?.present(containVc!, animated: true, completion: {
                ARWindowView.removeWindowView()
            })
            return
        }
        
        superview?.touchesEnded(touches, with: event)
    }
    
    deinit {
        print("ARWindowView deinit")
    }
}

// MARK: - UIViewControllerTransitioningDelegate

extension ARWindowView: UIViewControllerTransitioningDelegate {
    func animationController(forPresented presented: UIViewController, presenting: UIViewController, source: UIViewController) -> UIViewControllerAnimatedTransitioning? {
        let animated = ArAnimatedTransitioning()
        animated.originLocation = self.frame.origin
        return animated
    }
}

// MARK: - UIViewControllerAnimatedTransitioning

class ArAnimatedTransitioning: NSObject,UIViewControllerAnimatedTransitioning {
    
    var originLocation: CGPoint = CGPoint.zero
    
    func transitionDuration(using transitionContext: UIViewControllerContextTransitioning?) -> TimeInterval {
        return 0.8
    }
    
    func animateTransition(using transitionContext: UIViewControllerContextTransitioning) {
        let containerView = transitionContext.containerView
        let toView: UIView = transitionContext.view(forKey: .to)!
        containerView.addSubview(toView)
        
        let animatedView = ArAnimatedView(frame: UIScreen.main.bounds)
        containerView.addSubview(animatedView)
        let snapImage = snapView(targetView: toView)
        animatedView.imageView.image = snapImage
        
        animatedView.startAnimatingWithView(view: toView, fromRect: CGRect(x: originLocation.x, y: originLocation.y, width: 95, height: 157), toRect: UIScreen.main.bounds)
        
        UIView.animate(withDuration: transitionDuration(using: transitionContext), delay: 0, options: UIView.AnimationOptions.curveEaseInOut, animations: { () -> Void in
            }) { (finish: Bool) -> Void in
                transitionContext.completeTransition(true)
        }
    }
}

class ArAnimatedView: UIView {
    
    lazy var imageView: UIImageView = {
        let imageV = UIImageView.init(frame: frame)
        imageV.contentMode = .scaleAspectFill
        self.addSubview(imageV)
        return imageV
    }()
    
    var toView: UIView?
    var shapeLayer: CAShapeLayer?
    
    override init(frame: CGRect) {
        super.init(frame: frame)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func startAnimatingWithView(view: UIView, fromRect: CGRect, toRect: CGRect)  {
        toView = view
        toView?.isHidden = true
        shapeLayer = CAShapeLayer()
        shapeLayer?.path = UIBezierPath.init(roundedRect: fromRect, cornerRadius: 6).cgPath
        shapeLayer?.fillColor = UIColor.lightGray.cgColor
        imageView.layer.mask = shapeLayer
        
        let basicAnimation: CABasicAnimation = CABasicAnimation.init(keyPath: "path")
        basicAnimation.duration = 0.25
        basicAnimation.toValue = UIBezierPath.init(roundedRect: toRect, cornerRadius: 6).cgPath
        basicAnimation.isRemovedOnCompletion = false
        basicAnimation.fillMode = .forwards
        shapeLayer?.add(basicAnimation, forKey: "CABasicAnimation")
        
        self.perform(#selector(remove), with: nil, afterDelay: 0.25)
    }
    
    @objc func remove() {
        toView?.isHidden = false
        self.removeFromSuperview()
    }
}
