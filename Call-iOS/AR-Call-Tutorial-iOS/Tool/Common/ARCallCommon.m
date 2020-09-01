//
//  ARCallCommon.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/17.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARCallCommon.h"

NSString *const ARtmUserLogin = @"正在登录...";
NSString *const ARtmUserOffline = @"当前用户已离线";
NSString *const ARtmCallerIdInvalid = @"自己不能呼叫自己";
NSString *const ARtmCallLimitMax = @"最多只能一次呼叫6个人";
NSString *const ARtmCallProgress = @"当前会话正在进行中...";
NSString *const ARtmReceivedInvitationByPeer = @"被叫已收到呼叫邀请";
NSString *const ARtmAcceptedInvitation = @"被叫已接受呼叫邀请";
NSString *const ARtmRemoteRefusedInvitation = @"被叫已拒绝呼叫邀请";
NSString *const ARtmCanceledInvitation = @"呼叫邀请已被取消";
NSString *const ARtmFailureInvitation = @"呼叫邀请发送失败";
NSString *const ARtmRepeatReceivedInvitation = @"收到一个新的呼叫请求，已拒绝";
NSString *const ARtmRefusedInvitation = @"拒绝呼叫邀请成功";
NSString *const ARtmRemoteCanceledInvitation = @"对方已取消呼叫";
NSString *const ARtmRemoteCallBusy = @"对方正在通话中...";
NSString *const ARtmReconnection = @"已离线,正在重连...";
NSString *const ARtmCallend = @"对方已挂断";
NSString *const ARtmCallStop = @"当前通话已结束";
NSString *const ARtmCallUserExisting = @"该id已存在呼叫中";

static AVAudioPlayer *player;

@implementation ARCallCommon

+ (NSString*)randomNumber:(int)len {
    char* charSet = "0123456789";
    char* temp = malloc(len + 1);
    for (int i = 0; i < len; i++) {
        int randomPoz = (int) floor(arc4random() % strlen(charSet));
        temp[i] = charSet[randomPoz];
    }
    temp[len] = '\0';
    NSMutableString* randomString = [[NSMutableString alloc] initWithUTF8String:temp];
    free(temp);
    return randomString;
}

+ (BOOL)validateNumber:(NSString *)number {
    BOOL res = YES;
    NSCharacterSet *tmpset = [NSCharacterSet characterSetWithCharactersInString:@"0123456789"];
    int i = 0;
    while (i < number.length) {
        NSString *string = [number substringWithRange:NSMakeRange(i, 1)];
        NSRange range = [string rangeOfCharacterFromSet:tmpset];
        if (range.length == 0) {
            res = NO;
            break;
        }
        i++;
    }
    return res;
}

+ (NSArray *)getSubString:(NSString*)str {
    NSMutableArray *textArray = [NSMutableArray array];
    for (NSInteger i = 0; i < str.length; i++) {
        NSRange   range =  NSMakeRange(i, 1);
        NSString *subStr = [str substringWithRange:range];
        [textArray addObject:subStr];
    }
    return textArray;
}

//隐藏界面上所有键盘
+ (void)hideKeyBoard {
    for (UIWindow* window in [UIApplication sharedApplication].windows) {
        for (UIView* view in window.subviews) {
            [self dismissAllKeyBoardInView:view];
        }
    }
}

+ (BOOL) dismissAllKeyBoardInView:(UIView *)view {
    if([view isFirstResponder]) {
        [view resignFirstResponder];
        return YES;
    }
    
    for(UIView *subView in view.subviews) {
        if([self dismissAllKeyBoardInView:subView]) {
            return YES;
        }
    }
    return NO;
}

+ (void)showInfoWithStatus:(NSString *)info {
    [SVProgressHUD setFont:[UIFont fontWithName:@"PingFang SC" size:16]];
    [SVProgressHUD showImage:[UIImage imageNamed:@"icon_tip"] status:info];
    [SVProgressHUD dismissWithDelay:1.0];
}

//当前控制器
+ (UIViewController *)topViewController {
    UIViewController *resultVc;
    resultVc = [self topViewController:[[UIApplication sharedApplication].keyWindow rootViewController]];
    while (resultVc.presentedViewController) {
        resultVc = [self topViewController:resultVc.presentedViewController];
    }
    return resultVc;
}

+ (UIViewController *)topViewController:(UIViewController *)vc {
    if ([vc isKindOfClass:[UINavigationController class]]) {
        return [self topViewController:[(UINavigationController *)vc topViewController]];
    } else if ([vc isKindOfClass:[UITabBarController class]]) {
        return [self topViewController:[(UITabBarController *)vc selectedViewController]];
    } else {
        return vc;
    }
    return nil;
}

+ (void)playMusic:(BOOL)play {
    if (play) {
        NSString * path = [NSBundle.mainBundle pathForResource:@"rtm_call" ofType:@"mp3"];
        NSURL *tempUrl = [NSURL fileURLWithPath:path];
        NSError *error = nil;
        if (!player) {
            player = [[AVAudioPlayer alloc]initWithContentsOfURL:tempUrl error:&error];
        }
        player.numberOfLoops = -1;
        [player prepareToPlay];
        [player play];
    } else {
        if (player.isPlaying && player) {
            [player stop];
            player = nil;
        }
    }
}

+ (NSDictionary *)dictionaryWithJSONString:(NSString *)jsonString {
  NSParameterAssert(jsonString.length > 0);
  NSData *data = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
  NSError *error = nil;
  NSDictionary *dict =
      [NSJSONSerialization JSONObjectWithData:data options:0 error:&error];
  if (error) {
    NSLog(@"Error parsing JSON: %@", error.localizedDescription);
  }
  return dict;
}

+ (NSString *)returnJSONStringWithDictionary:(NSDictionary *)dictionary {
    //字典转json去空格换行符
    NSError *error;
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:dictionary options:NSJSONWritingPrettyPrinted error:&error];
    NSString *jsonString;
    if (!jsonData) {
        NSLog(@"%@",error);
    } else {
        jsonString = [[NSString alloc]initWithData:jsonData encoding:NSUTF8StringEncoding];
    }
    NSMutableString *mutStr = [NSMutableString stringWithString:jsonString];
    NSRange range = {0,jsonString.length};
    //去掉字符串中的空格
    [mutStr replaceOccurrencesOfString:@" " withString:@"" options:NSLiteralSearch range:range];
    NSRange range2 = {0,mutStr.length};
    //去掉字符串中的换行符
    [mutStr replaceOccurrencesOfString:@"\n" withString:@"" options:NSLiteralSearch range:range2];
    return mutStr;
}

//等分布局
+ (void)makeEqualViews:(NSArray *)views inView:(UIView *)containerView ItemWidth:(CGFloat)itemWidth itemHeight:(CGFloat)itemHeight warpCount:(NSInteger)warpCount{
    //可以通过lastView确定行列的位置
    //UIView *lastView;
    for (NSInteger i = 0; i < views.count; i++) {
        UIView *videoView = views[i];
        videoView.frame = CGRectZero;
        [containerView addSubview:videoView];
        
        NSInteger rowCount = views.count % warpCount == 0 ? views.count / warpCount : views.count / warpCount + 1;
        
        // 当前行
        NSInteger currentRow = i / warpCount;
        // 当前列
        NSInteger currentColumn = i % warpCount;
        
        [videoView mas_remakeConstraints:^(MASConstraintMaker *make) {
           
            make.width.equalTo(@(itemWidth - 0.5));
            
            make.height.equalTo(@(itemHeight - 0.5));
            
            // 第一行
            if (currentRow == 0) {
                make.top.equalTo(containerView);
            }
            
            // 最后一行
            if (currentRow == rowCount - 1) {
                make.bottom.equalTo(containerView);
            }
            
            // 中间的若干行
            if (currentRow != 0 && currentRow != rowCount - 1){
                CGFloat offset = (1-(currentRow/((CGFloat)rowCount-1)))*(itemHeight);
                make.bottom.equalTo(containerView).multipliedBy(currentRow/((CGFloat)rowCount-1)).offset(offset);
                //make.bottom.equalTo(lastView.mas_bottom);
            }
            
            // 第一列
            if (currentColumn == 0) {
                make.left.equalTo(containerView);
            }
            // 最后一列
            if (currentColumn == warpCount - 1) {
                make.right.equalTo(containerView);
            }
            // 中间若干列
            if (currentColumn != 0 && currentColumn != warpCount - 1) {
                CGFloat offset = (1-(currentColumn/((CGFloat)warpCount-1)))*(itemWidth);
                make.right.equalTo(containerView).multipliedBy(currentColumn/((CGFloat)warpCount-1)).offset(offset);
                //make.left.equalTo(lastView.mas_right);
            }
        }];
        //lastView = videoView;
    }
}

//传入 秒  得到  xx分钟xx秒
+ (NSString *)getMMSSFromSS:(NSString *)totalTime {
    
    NSInteger seconds = [totalTime integerValue];
    
    //format of minute
    NSString *str_minute = [NSString stringWithFormat:@"%02zd",seconds/60];
    //format of second
    NSString *str_second = [NSString stringWithFormat:@"%02zd",seconds%60];
    //format of time
    NSString *format_time = [NSString stringWithFormat:@"%@:%@",str_minute,str_second];
    
    return format_time;
}

@end
