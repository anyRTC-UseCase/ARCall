//
//  ARVideoView.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/20.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARVideoView.h"

@interface ARVideoView()

@property (weak, nonatomic) IBOutlet UIImageView *loadingImageView;
@property (weak, nonatomic) IBOutlet UILabel *stateLabel;

@property (nonatomic, copy) ARtmVideoRemoveBlock removeBlock;
@property (nonatomic, strong) ARtmTimer *rtmTimer;
@property (nonatomic, assign) NSInteger offlineIndex;

@end

@implementation ARVideoView

+ (instancetype)loadVideoView:(ARtmVideoRemoveBlock)block{
    ARVideoView *videoView = [[[NSBundle mainBundle]loadNibNamed:@"ARVideoView" owner:self options:nil] lastObject];
    videoView.frame = CGRectZero;
    videoView.removeBlock = block;
    videoView.offlineIndex = 3;
    
    CABasicAnimation *animation = [CABasicAnimation animationWithKeyPath:@"transform.rotation.z"];
    animation.duration = 2.5;
    animation.toValue = [NSNumber numberWithFloat:M_PI * 2];
    animation.repeatCount = MAXFLOAT;
    animation.removedOnCompletion = NO;
    [videoView.loadingImageView.layer addAnimation:animation forKey:@""];
    return videoView;
}

- (void)setUid:(NSString *)uid {
    _uid = uid;
    if ([uid isEqualToString:[ARtmManager getLocalUid]]) {
        self.placeholderView.hidden = YES;
        self.loadingView.hidden = YES;
    }
}

- (void)startCountdown {
    //开启60s倒计时
    if (!self.rtmTimer) {
        self.rtmTimer = [[ARtmTimer alloc] init];
        @weakify(self);
        [self.rtmTimer creatGCDTimer:60 withTarget:self response:^(NSInteger index) {
            @strongify(self);
            NSLog(@"60s倒计时：%ld",(long)index);
            if (index == 3) {
                self.stateLabel.hidden = NO;
            } else if (index == 0 || (self.offlineIndex == 0)) {
                if (self.removeBlock) {
                    [self.rtmTimer clear];
                    self.removeBlock();
                    [self removeFromSuperview];
                }
            }
            
            if (self.offline) {
                self.offlineIndex --;
                self.stateLabel.hidden = NO;
                self.stateLabel.text = @"对方不在线";
            }
        }];
    }
}

- (void)setOffline:(BOOL)offline {
    _offline = offline;
}

- (void)endCountdown {
    //结束倒计时
    if (self.rtmTimer) {
        [self.rtmTimer clear];
    }
}

- (void)dealloc {
    NSLog(@"ARVideoView dealloc");
}

@end
