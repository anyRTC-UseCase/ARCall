//
//  ARTouchView.swift
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2021/7/23.
//

import UIKit

class ARTouchView: UIView {
    
    override func hitTest(_ point: CGPoint, with event: UIEvent?) -> UIView? {
        // touch event, solve the occlusion problem
        if endDragLocation.contains(point) {
            if self.point(inside: point, with: event) {
                for object in self.subviews.reversed() {
                    if object is ARVideoView {
                        let videoView = object as! ARVideoView
                        if videoView.dragEnable {
                            return videoView
                        }
                    }
                }
            }
        } else {
            return super.hitTest(point, with: event)
        }
        return nil;
    }
}
