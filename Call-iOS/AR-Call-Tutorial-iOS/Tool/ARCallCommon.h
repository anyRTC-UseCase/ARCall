//
//  ARCallCommon.h
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/17.
//  Copyright © 2020 AR. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

UIKIT_EXTERN NSString *const ARtmUserOffline;
UIKIT_EXTERN NSString *const ARtmCallerIdInvalid;
UIKIT_EXTERN NSString *const ARtmCallProgress;
UIKIT_EXTERN NSString *const ARtmReceivedInvitationByPeer;
UIKIT_EXTERN NSString *const ARtmAcceptedInvitation;
UIKIT_EXTERN NSString *const ARtmRemoteRefusedInvitation;
UIKIT_EXTERN NSString *const ARtmCanceledInvitation;
UIKIT_EXTERN NSString *const ARtmFailureInvitation;
UIKIT_EXTERN NSString *const ARtmRepeatReceivedInvitation;
UIKIT_EXTERN NSString *const ARtmRefusedInvitation;
UIKIT_EXTERN NSString *const ARtmRemoteCanceledInvitation;
UIKIT_EXTERN NSString *const ARtmRemoteCallBusy;
UIKIT_EXTERN NSString *const ARtmReconnection;

@interface ARCallCommon : NSObject

+ (NSString*)randomNumber:(int)len;

+ (BOOL)validateNumber:(NSString *)number;

+ (NSArray *)getSubString:(NSString*)str;
//隐藏界面上所有键盘
+ (void)hideKeyBoard;
//提示信息
+ (void)showInfoWithStatus:(NSString *)info;

@end

NS_ASSUME_NONNULL_END
