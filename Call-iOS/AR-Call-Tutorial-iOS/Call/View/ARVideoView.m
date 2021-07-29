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

@property (nonatomic, copy) ARtmVideoRemoveBlock removeBlock;
@property (nonatomic, strong) ARtmTimer *rtmTimer;
@property (nonatomic, assign) NSInteger offlineIndex;

@end

@implementation ARVideoView

+ (instancetype)loadVideoView:(ARtmVideoRemoveBlock)block{
    ARVideoView *videoView = [[[NSBundle mainBundle]loadNibNamed:@"ARVideoView" owner:self options:nil] lastObject];
    videoView.frame = CGRectZero;
    videoView.removeBlock = block;
    videoView.offlineIndex = 2;
    
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
    // 开启60s倒计时
    [self endCountdown];
    @weakify(self);
    [self.rtmTimer creatGCDTimer:60 withTarget:self response:^(NSInteger index) {
        @strongify(self);
        NSLog(@"60s倒计时：%ld",(long)index);
        if (index == 1) {
            self.stateLabel.text = @"无人接听";
        } else if (index == 0 || (self.offlineIndex == 0)) {
            if (self.removeBlock) {
                [self.rtmTimer clear];
                self.removeBlock();
                [self removeFromSuperview];
            }
        }
        (self.state > 1) ? (self.offlineIndex --) : 0;
    }];
}

- (void)setState:(ARVideoState)state {
    _state = state;
    switch (state) {
        case ARVideoStateinvitationOffline:
            self.stateLabel.text = @"等待接听";
            break;
        case ARVideoStateinvitationOnline:
            self.stateLabel.text = @"";
            break;
        case ARVideoStateinvitationFailed:
            self.stateLabel.text = @"邀请失败";
            break;
        case ARVideoStateinvitationRefused:
            self.stateLabel.text = @"对方拒绝";
            break;
        case ARVideoStateinvitationCalling:
            self.stateLabel.text = @"对方正忙";
            break;
        default:
            break;
    }
    
    if (state > 1) {
        [self endCountdown];
        @weakify(self);
        [self.rtmTimer creatGCDTimer:2 withTarget:self response:^(NSInteger index) {
            @strongify(self);
            if (self.removeBlock && index == 0) {
                [self.rtmTimer clear];
                self.removeBlock();
                [self removeFromSuperview];
            }
        }];
    }
}

- (void)endCountdown {
    //结束倒计时
    [self.rtmTimer clear];
    self.rtmTimer = nil;
}

- (ARtmTimer *)rtmTimer {
    if (!_rtmTimer) {
        _rtmTimer = [[ARtmTimer alloc] init];
    }
    return _rtmTimer;
}

- (void)dealloc {
    NSLog(@"ARVideoView dealloc");
}

@end
