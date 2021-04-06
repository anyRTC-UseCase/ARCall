//
//  ARUserManager.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/19.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARUserManager.h"

@implementation ARUserInfo

- (void)encodeWithCoder:(NSCoder *)aCoder{
    [aCoder encodeObject:self.uid forKey:@"uid"];
    [aCoder encodeObject:self.dimensions forKey:@"dimensions"];
    [aCoder encodeInteger:self.frameRate forKey:@"frameRate"];
    [aCoder encodeBool:self.video forKey:@"video"];
    [aCoder encodeBool:self.audio forKey:@"audio"];
    [aCoder encodeBool:self.aiNoise forKey:@"aiNoise"];
}

- (instancetype)initWithCoder:(NSCoder *)aDecoder{
    if (self = [super init]) {
        self.uid = [aDecoder decodeObjectForKey:@"uid"];
        self.dimensions = [aDecoder decodeObjectForKey:@"dimensions"];
        self.frameRate = [aDecoder decodeIntegerForKey:@"frameRate"];
        self.video = [aDecoder decodeBoolForKey:@"video"];
        self.audio = [aDecoder decodeBoolForKey:@"audio"];
        self.aiNoise = [aDecoder decodeBoolForKey:@"aiNoise"];
    }
    return self;
}

@end

@implementation ARUserManager

+ (BOOL)saveAccountInformation:(ARUserInfo *)user{
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    NSString *filePath = [documentsDirectory stringByAppendingPathComponent:@"userAccounts.data"];
    
    if ([[NSFileManager defaultManager] fileExistsAtPath:filePath]) {
        [self deleteAccountInformation];
    }
    return [NSKeyedArchiver archiveRootObject:user toFile:filePath];
}

+ (BOOL)deleteAccountInformation{
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    NSString *filePath = [documentsDirectory stringByAppendingPathComponent:@"userAccounts.data"];
    NSFileManager *manager = [NSFileManager defaultManager];
    if ([manager fileExistsAtPath:filePath]) {
        return  [manager removeItemAtPath:filePath error:nil];
    }
    return  NO;
}

+ (ARUserInfo *)getUserInfo{
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    NSString *filePath = [documentsDirectory stringByAppendingPathComponent:@"userAccounts.data"];
    return [NSKeyedUnarchiver unarchiveObjectWithFile:filePath];
}


@end
