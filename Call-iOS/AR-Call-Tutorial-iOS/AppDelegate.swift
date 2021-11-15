//
//  AppDelegate.swift
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2021/7/13.
//

import UIKit
import SVProgressHUD

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        Thread.sleep(forTimeInterval: 1)
        UIApplication.shared.isIdleTimerDisabled = true
        
        SVProgressHUD.setDefaultStyle(.light)
        SVProgressHUD.setDefaultMaskType(.black)
        SVProgressHUD.setShouldTintImages(false)
        SVProgressHUD.setMinimumSize(CGSize.init(width: 120, height: 120))
        return true
    }
    
    func application(_ application: UIApplication, shouldAllowExtensionPointIdentifier extensionPointIdentifier: UIApplication.ExtensionPointIdentifier) -> Bool {
        return (extensionPointIdentifier.rawValue == "com.apple.keyboard-service") ? false : true
    }
}

