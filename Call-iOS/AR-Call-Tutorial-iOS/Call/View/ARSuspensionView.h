//
//  ARSuspensionView.h
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/24.
//  Copyright © 2020 AR. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

typedef void (^ARtmSuspensionViewBlock)(void);

@interface ARtmSuspensionView : WMDragView

@property (weak, nonatomic) IBOutlet UIButton *titleButton;

+ (instancetype)loadSuspensionView:(ARtmSuspensionViewBlock)block;

@end

NS_ASSUME_NONNULL_END
