//
//  ARtmManager.m
//  ARtmKitDemo
//
//  Created by 余生丶 on 2020/6/19.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARtmManager.h"
#import "ARtmUserManager.h"

static ARtmKit *rtmKit_ = nil;
static NSString *localUid = nil;
static NSMutableDictionary *offlineDic = nil;
static UIWindow *rtmWindow_ = nil;

@implementation ARtmManager

+ (void)load {
    rtmKit_ = [[ARtmKit alloc] initWithAppId:appID delegate:nil];
    offlineDic = [NSMutableDictionary dictionary];
}

+ (ARtmKit * _Nullable)rtmKit {
    return rtmKit_;
}

+ (void)setLocalUid:(NSString *)uid {
    localUid = uid;
    if (uid.length != 0) {
        ARtmUserInfo *userInfo = [[ARtmUserInfo alloc] init];
        userInfo.uid = uid;
        userInfo.frameRate = 15;
        userInfo.dimensions = @"480*640";
        userInfo.audio = YES;
        userInfo.video = YES;
        [ARtmUserManager saveAccountInformation:userInfo];
    } else {
        [ARtmUserManager deleteAccountInformation];
    }
}

+ (NSString *)getLocalUid {
    return ARtmUserManager.fetchUserInfo.uid;
}

+ (void)addOfflineMessage:(ARtmMessage * _Nonnull)message fromUser:(NSString * _Nonnull)uid {
    if (message.isOfflineMessage) {
        NSMutableArray *infoArr = nil;
        if (offlineDic[uid]) {
            infoArr = offlineDic[uid];
        } else {
            infoArr = [NSMutableArray array];
        }
        
        [infoArr addObject:message];
        
        if (!offlineDic[uid]) {
            offlineDic[uid] = infoArr;
        }
    }
}

+ (UIWindow *)rtmWindow {
    if (!rtmWindow_) {
        rtmWindow_ = [[UIWindow alloc] initWithFrame:UIScreen.mainScreen.bounds];
        UIWindow *currentKeyWindow = [UIApplication sharedApplication].keyWindow;
        rtmWindow_.backgroundColor = [UIColor clearColor];
        rtmWindow_.hidden = NO;
        rtmWindow_.tag = ARtmWindowIdentifier;
        [rtmWindow_ makeKeyAndVisible];
        rtmWindow_.windowLevel = UIWindowLevelNormal + 2;
        [currentKeyWindow makeKeyWindow];
    }
    return rtmWindow_;
}

+ (void)dismissWindow {
    if (rtmWindow_) {
        [rtmWindow_ removeFromSuperview];
        rtmWindow_ = nil;
    }
}

@end
