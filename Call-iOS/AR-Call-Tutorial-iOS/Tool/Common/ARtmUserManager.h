//
//  ARtmUserManager.h
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/19.
//  Copyright © 2020 AR. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface ARtmUserInfo : NSObject<NSCoding>

/** 分辨率 */
@property (nonatomic, copy) NSString *dimensions;
/** 帧率 */
@property (nonatomic, assign) ARVideoFrameRate frameRate;
@property (nonatomic, copy) NSString * uid;
@property (nonatomic, assign) BOOL video;
@property (nonatomic, assign) BOOL audio;

@end

@interface ARtmUserManager : NSObject

/* 保存用户信息 **/
+ (BOOL)saveAccountInformation:(ARtmUserInfo *)user;

/* 删除用户信息 **/
+ (BOOL)deleteAccountInformation;

/* 获取用户信息 **/
+ (ARtmUserInfo *)fetchUserInfo;

@end

NS_ASSUME_NONNULL_END
