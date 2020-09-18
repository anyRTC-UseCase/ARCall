//
//  ARtmTimer.h
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/22.
//  Copyright © 2020 AR. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface ARtmTimer : NSObject

/**
 启动定时器
 
 @param timeCount 若大于0，则为倒计时; 若小于等于0，则为计数器；
 @param target 对象
 @param response 回调
 */
- (void)creatGCDTimer:(NSInteger)timeCount withTarget:(id)target response:(void (^)(NSInteger index))response;

//手动销毁
- (void)clear;

@end

NS_ASSUME_NONNULL_END
