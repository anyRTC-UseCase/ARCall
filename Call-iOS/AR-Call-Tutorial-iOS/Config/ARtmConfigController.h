//
//  ARtmConfigController.h
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/18.
//  Copyright © 2020 AR. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ARtmConfigMeetCell : UITableViewCell

@property (weak, nonatomic) IBOutlet UILabel *rtmLabel;
@property (weak, nonatomic) IBOutlet UISwitch *rtmSwitch;

@end

NS_ASSUME_NONNULL_BEGIN

@interface ARtmConfigController : UITableViewController
//0单人，1多人
@property (nonatomic, assign) BOOL type;

@end

NS_ASSUME_NONNULL_END
