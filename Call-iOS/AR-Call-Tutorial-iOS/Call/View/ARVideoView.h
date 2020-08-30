//
//  ARVideoView.h
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/20.
//  Copyright © 2020 AR. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

typedef void (^ARtmVideoRemoveBlock)(void);

@interface ARVideoView : UIView

@property (weak, nonatomic) IBOutlet UIView *placeholderView;
@property (weak, nonatomic) IBOutlet UIView *loadingView;
@property (weak, nonatomic) IBOutlet UIButton *titleButton;
@property (nonatomic, copy) NSString *uid;

+ (instancetype)loadVideoView:(ARtmVideoRemoveBlock)block;
- (void)startCountdown;
- (void)endCountdown;

@end

NS_ASSUME_NONNULL_END
