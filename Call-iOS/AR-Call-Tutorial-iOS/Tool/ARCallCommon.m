//
//  ARCallCommon.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/17.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARCallCommon.h"

NSString *const ARtmUserOffline = @"当前用户不在线";
NSString *const ARtmCallerIdInvalid = @"自己不能呼叫自己";
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
NSString *const ARtmReconnection = @"正在重连...";

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

@end
