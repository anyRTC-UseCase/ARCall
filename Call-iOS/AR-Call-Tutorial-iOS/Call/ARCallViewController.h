//
//  ARCallViewController.h
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/20.
//  Copyright © 2020 AR. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface ARCallViewController : UIViewController

@property (nonatomic, assign) int mode;
@property (nonatomic, copy) NSString * callerId;
@property (nonatomic, copy) NSString * channelId;
/** 主叫、被叫 */
@property (nonatomic, assign) BOOL calling;
@property (nonatomic, strong) ARtmRemoteInvitation * remoteInvitation;

@end

NS_ASSUME_NONNULL_END
