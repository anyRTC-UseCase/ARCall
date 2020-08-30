//
//  KeyBoardView.h
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/28.
//  Copyright © 2020 AR. All rights reserved.
//

#import <UIKit/UIKit.h>

@class KeyBoardView;

@protocol KeyBoardViewDelegate <NSObject>

- (BOOL)keyBoardView:(KeyBoardView *)keyBoardView shouldChangeCharactersInRange:(NSRange)range replacementString:(NSString *)string;

@end

@interface KeyBoardView : UIView

@property (nonatomic, assign) id <KeyBoardViewDelegate> delegate;

/**
 字符串
 */
@property (nonatomic, strong) NSMutableString *string;

@end

