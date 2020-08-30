//
//  CALayer+ARBordColor.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/20.
//  Copyright © 2020 AR. All rights reserved.
//


#import <QuartzCore/QuartzCore.h>

@interface CALayer (BorderColor)

@end


#import "CALayer+ARBordColor.h"

@implementation CALayer (ARBordColor)


- (void)setBorderColorWithUIColor:(UIColor *)color
{
    
    self.borderColor = color.CGColor;
}

@end
