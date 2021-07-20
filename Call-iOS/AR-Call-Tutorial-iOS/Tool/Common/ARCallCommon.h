//
//  ARCallCommon.h
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/17.
//  Copyright © 2020 AR. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN
UIKIT_EXTERN NSString *const ARtmUserLogin;
UIKIT_EXTERN NSString *const ARtmUserOffline;
UIKIT_EXTERN NSString *const ARtmCallerIdInvalid;
UIKIT_EXTERN NSString *const ARtmCallLimitMax;
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
UIKIT_EXTERN NSString *const ARtmCallend;
UIKIT_EXTERN NSString *const ARtmCallStop;
UIKIT_EXTERN NSString *const ARtmCallUserExisting;

@interface ARCallCommon : NSObject

/**
 随机字符串
*/
+ (NSString*)randomNumber:(int)len;
/**
 纯数字
*/
+ (BOOL)validateNumber:(NSString *)number;
/**
 字符串拆分
*/
+ (NSArray *)getSubString:(NSString*)str;
/**
 隐藏界面上所有键盘
*/
+ (void)hideKeyBoard;
/**
 提示信息
*/
+ (void)showInfoWithStatus:(NSString *)info;
/**
 当前控制器
*/
+ (UIViewController *)topViewController;
/**
 播放音乐
*/
+ (void)playMusic:(BOOL)play;
/**
 字符串转json
*/
+ (NSDictionary *)dictionaryWithJSONString:(NSString *)jsonString;
/**
 字典转json字符串
*/
+ (NSString *)returnJSONStringWithDictionary:(NSDictionary *)dictionary;
+ (NSString *)fromArrToJSON:(NSArray *)arr;
+ (NSArray *)fromJsonStringToArr:(NSString *)jsonString;
/**
 等分布局
*/
+ (void)makeEqualViews:(NSArray *)views inView:(UIView *)containerView ItemWidth:(CGFloat)itemWidth itemHeight:(CGFloat)itemHeight warpCount:(NSInteger)warpCount;
/**
 传入 秒  得到  xx分钟xx秒
*/
+ (NSString *)getMMSSFromSS:(NSString *)totalTime;

@end

NS_ASSUME_NONNULL_END
