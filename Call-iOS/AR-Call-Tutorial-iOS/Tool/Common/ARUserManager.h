//
//  ARUserManager.h
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/19.
//  Copyright © 2020 AR. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface ARUserInfo : NSObject<NSCoding>

/** 分辨率 */
@property (nonatomic, copy) NSString *dimensions;
/** 帧率 */
@property (nonatomic, assign) ARVideoFrameRate frameRate;
@property (nonatomic, copy) NSString * uid;
@property (nonatomic, assign) BOOL video;
@property (nonatomic, assign) BOOL audio;
/** AI降噪，默认关闭 */
@property (nonatomic, assign) BOOL aiNoise;

@end

@interface ARUserManager : NSObject

/* 保存用户信息 **/
+ (BOOL)saveAccountInformation:(ARUserInfo *)user;

/* 删除用户信息 **/
+ (BOOL)deleteAccountInformation;

/* 获取用户信息 **/
+ (ARUserInfo *)getUserInfo;

@end

NS_ASSUME_NONNULL_END
