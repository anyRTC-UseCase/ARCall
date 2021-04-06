//
//  ARMeetViewController.h
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/20.
//  Copyright © 2020 AR. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface ARMeetViewController : UIViewController
/** 呼叫数组 */
@property (nonatomic, strong) NSMutableArray * callArr;
/** 主叫、被叫 */
@property (nonatomic, assign) BOOL calling;
@property (nonatomic, copy) NSString * channelId;
@property (nonatomic, strong) ARtmRemoteInvitation * remoteInvitation;

@end

NS_ASSUME_NONNULL_END
