//
//  ARtmUserManager.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/19.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARtmUserManager.h"

@implementation ARtmUserInfo

- (void)encodeWithCoder:(NSCoder *)aCoder{
    [aCoder encodeObject:self.uid forKey:@"uid"];
    [aCoder encodeObject:self.dimensions forKey:@"dimensions"];
    [aCoder encodeInteger:self.frameRate forKey:@"frameRate"];
}

- (instancetype)initWithCoder:(NSCoder *)aDecoder{
    if (self = [super init]) {
        self.uid = [aDecoder decodeObjectForKey:@"uid"];
        self.dimensions = [aDecoder decodeObjectForKey:@"dimensions"];
        self.frameRate = [aDecoder decodeIntegerForKey:@"frameRate"];
    }
    return self;
}

@end

@implementation ARtmUserManager

+ (BOOL)saveAccountInformation:(ARtmUserInfo *)user{
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    NSString *filePath = [documentsDirectory stringByAppendingPathComponent:@"userAccount.data"];
    
    if ([[NSFileManager defaultManager] fileExistsAtPath:filePath]) {
        [self deleteAccountInformation];
    }
    return [NSKeyedArchiver archiveRootObject:user toFile:filePath];
}

+ (BOOL)deleteAccountInformation{
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    NSString *filePath = [documentsDirectory stringByAppendingPathComponent:@"userAccount.data"];
    NSFileManager *manager = [NSFileManager defaultManager];
    if ([manager fileExistsAtPath:filePath]) {
        return  [manager removeItemAtPath:filePath error:nil];
    }
    return  NO;
}

+ (ARtmUserInfo *)fetchUserInfo{
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    NSString *filePath = [documentsDirectory stringByAppendingPathComponent:@"userAccount.data"];
    return [NSKeyedUnarchiver unarchiveObjectWithFile:filePath];
}


@end
