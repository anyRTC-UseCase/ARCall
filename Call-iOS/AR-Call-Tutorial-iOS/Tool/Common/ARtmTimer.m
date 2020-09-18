//
//  ARtmTimer.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/22.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARtmTimer.h"

@interface ARtmTimer()

@property (nonatomic, strong) dispatch_source_t timer;

@end

@implementation ARtmTimer

- (void)creatGCDTimer:(NSInteger)timeCount withTarget:(id)target response:(void (^)(NSInteger index))response{
    if (self.timer) {
        dispatch_source_cancel(self.timer);
        self.timer = nil;
    };
    
    dispatch_queue_t queue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
    self.timer = dispatch_source_create(DISPATCH_SOURCE_TYPE_TIMER,0, 0, queue);
    dispatch_source_set_timer(self.timer, dispatch_walltime(NULL, 0), (uint64_t)(1.0 *NSEC_PER_SEC), 0);
    NSTimeInterval seconds = timeCount;
    NSDate *endTime = [NSDate dateWithTimeIntervalSinceNow:seconds];
    
    NSTimeInterval time = [[NSDate date] timeIntervalSince1970];
    long second = time;
    
    __weak typeof(self)weakSelf = target;
    dispatch_source_set_event_handler(self.timer, ^{
        !weakSelf ? (dispatch_source_cancel(self.timer)) : 0;
        if (timeCount > 0) {
            int interval = [endTime timeIntervalSinceNow];
            if (interval <= 0) {
                interval = 0;
                dispatch_source_cancel(self.timer);
            }
            dispatch_async(dispatch_get_main_queue(), ^{
                response ? (response(interval)) : 0;
            });
        } else {
            dispatch_async(dispatch_get_main_queue(), ^{
                response ? (response([[NSDate date] timeIntervalSince1970] - second)) : 0;
            });
        }
    });
    // 启动定时器
    dispatch_resume(self.timer);
}

- (void)clear {
    if (self.timer) {
        dispatch_source_cancel(self.timer);
        self.timer = nil;
    }
}

@end
