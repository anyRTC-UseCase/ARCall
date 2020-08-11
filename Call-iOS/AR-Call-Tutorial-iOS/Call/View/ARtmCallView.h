//
//  ARtmCallView.h
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/17.
//  Copyright © 2020 AR. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol ARtmCallViewDelegate <NSObject>

- (void)rtmCallViewdidClick:(UIButton *)sender call:(BOOL)isCall;

@end


@interface ARtmCallView : UIView

@property (weak, nonatomic) IBOutlet UIView *toolView;
@property (weak, nonatomic) IBOutlet UIView *callView;

+ (instancetype)loadCallView:(id<ARtmCallViewDelegate>)delegate call:(BOOL)isCall uid:(NSString *)uid;

@end

NS_ASSUME_NONNULL_END
