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

typedef NS_ENUM(NSInteger, ARVideoState) {
    ARVideoStateinvitationOffline = 0,
    ARVideoStateinvitationOnline = 1,
    ARVideoStateinvitationFailed = 2,
    ARVideoStateinvitationRefused = 3,
    ARVideoStateinvitationCalling = 4
};
typedef NS_ENUM(NSInteger, ARVideoSetting) {
    ARVideoStateinvitationVideoMute = 0,
    ARVideoStateinvitationVideoUnmute = 1,
};


@interface ARVideoView : UIView

@property (weak, nonatomic) IBOutlet UIView *placeholderView;
@property (weak, nonatomic) IBOutlet UIView *loadingView;
@property (weak, nonatomic) IBOutlet UIButton *titleButton;
@property (weak, nonatomic) IBOutlet UILabel *stateLabel;
@property (nonatomic, copy) NSString *uid;
@property (nonatomic, assign) ARVideoState state;
@property (nonatomic, assign) ARVideoSetting videoSetting;


+ (instancetype)loadVideoView:(ARtmVideoRemoveBlock)block;
- (void)startCountdown;
- (void)endCountdown;

@end

NS_ASSUME_NONNULL_END
