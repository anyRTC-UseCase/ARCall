//
//  ARtmManager.h
//  ARtmKitDemo
//
//  Created by 余生丶 on 2020/6/19.
//  Copyright © 2020 AR. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface ARtmManager : NSObject

+ (ARtmKit * _Nullable)rtmKit;
+ (void)setLocalUid:(NSString *)uid;
+ (NSString *)getLocalUid;
+ (void)addOfflineMessage:(ARtmMessage * _Nonnull)message fromUser:(NSString * _Nonnull)uid;

@end

NS_ASSUME_NONNULL_END
