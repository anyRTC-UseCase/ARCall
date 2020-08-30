//
//  ARtmInvitationView.h
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/23.
//  Copyright © 2020 AR. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

typedef void (^ARtmInvitationBlock)(NSString *uid);

@interface ARtmInvitationView : UIView

+ (instancetype)loadInvitationView:(ARtmInvitationBlock)block;

@end

NS_ASSUME_NONNULL_END
