//
//  ARtmSuspensionView.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/24.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARtmSuspensionView.h"

@interface ARtmSuspensionView()

@property (nonatomic, copy) ARtmSuspensionViewBlock rtmBlock;

@end

@implementation ARtmSuspensionView

+ (instancetype)loadSuspensionView:(ARtmSuspensionViewBlock)block {
    ARtmSuspensionView *suspensionView = [[[NSBundle mainBundle]loadNibNamed:@"ARtmSuspensionView" owner:self options:nil] lastObject];
    suspensionView.backgroundColor = RGBA(221, 221, 224, 1);
    suspensionView.frame = CGRectMake(SCREEN_WIDTH - 79, 74, 79, 79);
    suspensionView.rtmBlock = block;
    return suspensionView;
}

- (IBAction)didClickButton:(id)sender {
    if (self.rtmBlock) {
        self.rtmBlock();
    }
}

- (void)dealloc {
    NSLog(@"ARtmSuspensionViewBlock dealloc");
}


@end
