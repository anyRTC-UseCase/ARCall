//
//  ARBaseView.swift
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2021/7/20.
//

import UIKit

var endDragLocation = CGRect(x: ARScreenWidth - 108, y: 88, width: 95, height: 157)

class ARDragView: UIView {

    var startLocation: CGPoint? = CGPoint(x: 0, y: 0)
    var startFrameLocation: CGPoint? = CGPoint(x: 0, y: 0)
    var containVc: UIViewController?
    /* 是否可拖拽，默认 false */
    var dragEnable: Bool = false
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        super.touchesBegan(touches, with: event)
        if dragEnable {
            let touch = touches.first
            startLocation = touch?.location(in: self)
            startFrameLocation = touch?.location(in: self.superview)
        }
    }
    
    override func touchesMoved(_ touches: Set<UITouch>, with event: UIEvent?) {
        super.touchesMoved(touches, with: event)
        if dragEnable {
            let touch = touches.first
            let currentLocation = touch?.location(in: self.superview)
            
            let width: CGFloat = self.width/2
            let height: CGFloat = self.height/2
            let centerX = currentLocation!.x + (width - startLocation!.x)
            let centerY = currentLocation!.y + (height - startLocation!.y)
            
            let x: CGFloat = min((ARScreenWidth - width), max(centerX, width))
            let y: CGFloat = min((ARScreenHeight - width), max(centerY, height))
            self.center = CGPoint(x: x, y: y)
        }
    }
    
    override func touchesEnded(_ touches: Set<UITouch>, with event: UIEvent?) {
        super.touchesEnded(touches, with: event)
        if dragEnable {
            let touch = touches.first
            let currentLocation = touch?.location(in: self.superview)
            
            let left = currentLocation?.x
            let right: CGFloat = ARScreenWidth - currentLocation!.x
            
            var y = center.y
            y = min((ARScreenHeight - (isFullScreen() ? 126 : 115)), max(y, (isFullScreen() ? 126 : 115)))
            
            if left! <= right {
                UIView.animate(withDuration: 0.25) {
                    self.center = CGPoint(x: self.width/2 + 8, y: y)
                }
            } else {
                UIView.animate(withDuration: 0.25) {
                    self.center = CGPoint(x: ARScreenWidth - self.width/2 - 8, y: y);
                }
            }
            
            endDragLocation = self.frame
        }
    }
}
