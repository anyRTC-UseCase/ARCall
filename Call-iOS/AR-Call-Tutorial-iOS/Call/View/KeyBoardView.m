//
//  KeyBoardView.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/28.
//  Copyright © 2020 AR. All rights reserved.
//

#import "KeyBoardView.h"
#import <Foundation/Foundation.h>

@implementation KeyBoardView

- (instancetype)initWithFrame:(CGRect)frame {
    self = [super initWithFrame:frame];
    if (self) {
        self.string = [NSMutableString string];
        self.frame = frame;
        self.backgroundColor = [UIColor colorWithRed:206.0 / 255 green:206.0 / 255 blue:206.0 / 255 alpha:1];
        [self initKeyBoardView];
    }
    return self;
}

/**
 初始化键盘
 */
- (void)initKeyBoardView {
    //set the key titles
    NSArray *titleArray = [[NSArray alloc] initWithObjects:@"1", @"2", @"3", @"4", @"5", @"6", @"7", @"8", @"9", @" ", @"0", @"x", nil];
    
    //design the keyboard
    int index = 0;
    float button_width = (self.bounds.size.width - 3) / 3;
    float button_height = (self.bounds.size.height - 4) / 4;
    //12
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 3; j++) {
            float x = 0 + j * (button_width + 1);
            float y = 0 + i * (button_height + 1);
            UIButton *button = [self addButtonWithTitle:titleArray[index]
                                                  frame:CGRectMake(x, y, button_width, button_height)
                                                  image:nil
                                              highImage:[UIImage imageNamed:@"bgcolor.png"]];
            //设置删除按钮
            if (i == 3 && j == 2) {
                UIImageView *image = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"keyboardDel.png"]];
                image.center = CGPointMake(button.bounds.size.width / 2, button.bounds.size.height / 2);
                [button addSubview:image];
            }
            //设置颜色
            if ((i == 3 && j == 0) || (i == 3 && j == 2)) {
                button.backgroundColor = [UIColor colorWithRed:209.0 / 255 green:212.0 / 255 blue:218.0 / 255 alpha:1];
            } else {
                button.backgroundColor = [UIColor whiteColor];
            }
            [button addTarget:self action:@selector(onClick:) forControlEvents:UIControlEventTouchUpInside];
            [self addSubview:button];
            index++;
        }
    }
}

/**
 设置按钮

 @param title 设置title 12334...
 @param frame_rect 按钮rect
 @param normal_image 按钮的正常图片
 @param high_image 按钮按下图片
 @return 按钮
 */
- (UIButton *)addButtonWithTitle:(NSString *)title
                           frame:(CGRect)frame_rect
                           image:(UIImage *)normal_image
                       highImage:(UIImage *)high_image {
    UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];
    [button setFrame:frame_rect];
    button.titleLabel.font = [UIFont boldSystemFontOfSize:20];
    [button setTitle:title forState:UIControlStateNormal];
    [button setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    [button setBackgroundImage:normal_image forState:UIControlStateNormal];
    [button setBackgroundImage:high_image forState:UIControlStateHighlighted];
    
    return button;
}

/**
 点击按钮事件

 @param button 按钮
 */
- (void)onClick:(UIButton *)button {
    //左下角空白键不允许按 并且当当前没输入任何内容不允许输入x
    if (![button.currentTitle isEqualToString:@" "] &&
        !(self.string.length == 0 && [button.currentTitle isEqualToString:@""])) {
        
        [[self string] appendString:button.currentTitle];
        NSString *str = button.currentTitle;
        //call the delegate, first make sure it can respond to selector, then do the delegate method
        if ([self.delegate respondsToSelector:@selector(keyBoardView:shouldChangeCharactersInRange:replacementString:)]) {
            BOOL canLogin = [self.delegate keyBoardView:self shouldChangeCharactersInRange:NSMakeRange(self.string.length - 1, 1) replacementString:str];
            if (canLogin && button.currentTitle.length == 0) {
                //按x 减1
                [self.string deleteCharactersInRange:NSMakeRange(self.string.length - 1, 1)];
            }
        }
    }
}

@end
