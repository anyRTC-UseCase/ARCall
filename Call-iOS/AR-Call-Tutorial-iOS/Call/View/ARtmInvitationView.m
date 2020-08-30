//
//  ARtmInvitationView.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/23.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARtmInvitationView.h"
#import "KeyBoardView.h"

@interface ARtmInvitationView()<KeyBoardViewDelegate>

@property (weak, nonatomic) IBOutlet UIStackView *stackView;

@property (nonatomic, copy) ARtmInvitationBlock invitationBlock;
@property (nonatomic, copy) NSString *calleeIdText;
@property (nonatomic, strong) KeyBoardView *keyBoard;

@end

@implementation ARtmInvitationView

+ (instancetype)loadInvitationView:(ARtmInvitationBlock)block {
    ARtmInvitationView *invitationView = [[[NSBundle mainBundle]loadNibNamed:@"ARtmInvitationView" owner:self options:nil] lastObject];
    invitationView.frame = CGRectMake(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    invitationView.invitationBlock = block;
    return invitationView;
}

- (void)awakeFromNib {
    [super awakeFromNib];
    for (UIButton *button in self.stackView.subviews) {
        [button addTarget:self action:@selector(didClickTextField:) forControlEvents:UIControlEventTouchUpInside];
    }
    
    self.calleeIdText = @"";
    //隐藏键盘
    self.keyBoard = [[KeyBoardView alloc] initWithFrame:CGRectMake(0, SCREEN_HEIGHT, SCREEN_WIDTH, 200)];
    [self addSubview:self.keyBoard];
    self.keyBoard.delegate = self;
}

- (IBAction)didClickCancleButton:(id)sender {
    [self removeFromSuperview];
}

- (IBAction)didClickConfirmButton:(id)sender {
    if (self.calleeIdText.length == 4) {
        if (self.invitationBlock) {
            self.invitationBlock(self.calleeIdText);
        }
        [self removeFromSuperview];
    }
}

- (void)didClickTextField:(UIButton *)button {
    self.keyBoard.frame = CGRectMake(0, SCREEN_HEIGHT - 200, SCREEN_WIDTH, 200);
    [UIView animateWithDuration:0.25 animations:^{
        [self layoutIfNeeded];
    } completion:^(BOOL finished) {
        
    }];
}

//MARK: - KeyBoardViewDelegate

- (BOOL)keyBoardView:(KeyBoardView *)keyBoardView shouldChangeCharactersInRange:(NSRange)range replacementString:(NSString *)string {
    if ([string isEqualToString:@"x"]) {
        if(self.calleeIdText.length > 0) {
            self.calleeIdText = [self.calleeIdText substringToIndex:([self.calleeIdText length]-1)];
        }
    } else {
        if (self.calleeIdText.length < 4) {
            self.calleeIdText = [NSString stringWithFormat:@"%@%@",self.calleeIdText,string];
        }
    }
    
    if (self.calleeIdText.length != 0) {
        NSArray *arr = [ARCallCommon getSubString:self.calleeIdText];
        for (NSInteger i = 0; i < self.stackView.subviews.count; i++) {
            NSString *subText;
            UIButton *button = self.stackView.subviews[i];
            (i < arr.count) ? (subText = arr[i]) : @"";
            [button setTitle:subText forState:UIControlStateNormal];
        }
    }
    return YES;
}


@end
