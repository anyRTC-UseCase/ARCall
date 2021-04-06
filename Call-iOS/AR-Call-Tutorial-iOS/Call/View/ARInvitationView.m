//
//  ARInvitationView.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/23.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARInvitationView.h"

@interface ARInvitationView()<UITextFieldDelegate>

@property (weak, nonatomic) IBOutlet UIStackView *stackView;
@property (weak, nonatomic) IBOutlet UILabel *titleLabel;

@property (nonatomic, copy) ARtmInvitationBlock invitationBlock;
@property (nonatomic, copy) NSString *calleeIdText;

@end

@implementation ARInvitationView

+ (instancetype)loadInvitationView:(ARtmInvitationBlock)block {
    ARInvitationView *invitationView = [[[NSBundle mainBundle]loadNibNamed:@"ARInvitationView" owner:self options:nil] lastObject];
    invitationView.frame = CGRectMake(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    invitationView.invitationBlock = block;
    return invitationView;
}

- (IBAction)didClickCancleButton:(id)sender {
    [self removeFromSuperview];
}

- (IBAction)didClickConfirmButton:(id)sender {
    [self.calleeIdTextField resignFirstResponder];
    if (self.calleeIdTextField.text.length == 4 && self.titleLabel.text.length == 0) {
        if (self.invitationBlock) {
            self.invitationBlock(self.calleeIdTextField.text);
        }
        [self removeFromSuperview];
    }
}

- (void)awakeFromNib {
    [super awakeFromNib];
    [self.calleeIdTextField addTarget:self action:@selector(limitTextField:) forControlEvents:UIControlEventEditingChanged];
}

- (void)limitTextField:(UITextField *)textField {
    self.titleLabel.text = @"";
    if (textField.text.length > 4) {
        textField.text = [textField.text substringToIndex:4];
    }
    
    if (textField.text.length == 4) {
        if ([ARtmManager.getLocalUid isEqualToString:textField.text]) {
             self.titleLabel.text = ARtmCallerIdInvalid;
         } else if ([self.callArr containsObject:textField.text]) {
             self.titleLabel.text = ARtmCallUserExisting;
         }
    }
    
    NSArray *arr = [ARCallCommon getSubString:textField.text];
    for (NSInteger i = 0; i < self.stackView.subviews.count; i++) {
        NSString *subText;
        UIButton *button = self.stackView.subviews[i];
        (i < arr.count) ? (subText = arr[i]) : @"";
        [button setTitle:subText forState:UIControlStateNormal];
    }
}

- (void)setCallArr:(NSMutableArray *)callArr {
    _callArr = callArr;
    if (![_callArr containsObject:self.calleeIdText]) {
        self.titleLabel.text = @"";
    }
}

//MARK: - UITextFieldDelegate

- (BOOL)textField:(UITextField *)textField shouldChangeCharactersInRange:(NSRange)range replacementString:(NSString *)string {
    if ([string isEqualToString:@""]) {
        return YES;
    }
    return [ARCallCommon validateNumber:string];
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    [self.calleeIdTextField resignFirstResponder];
}


@end
