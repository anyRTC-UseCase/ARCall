//
//  ARtmCallView.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/17.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARtmCallView.h"

@interface ARtmCallView()


@property (weak, nonatomic) IBOutlet UILabel *calleeIdLabel;
@property (weak, nonatomic) IBOutlet UIButton *acceptButton;
@property (weak, nonatomic) IBOutlet UILabel *stateLabel;
@property (weak, nonatomic) id<ARtmCallViewDelegate> delegate;
@property (assign, nonatomic) BOOL isCall;
@property (copy, nonatomic) NSString *uid;

@end

@implementation ARtmCallView

+ (instancetype)loadCallView:(id<ARtmCallViewDelegate>)delegate call:(BOOL)isCall uid:(NSString *)uid {
    ARtmCallView *callView = [[[NSBundle mainBundle] loadNibNamed:@"ARtmCallView" owner:self options:nil] lastObject];
    callView.frame = CGRectMake(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    callView.isCall = isCall;
    callView.uid = uid;
    callView.acceptButton.hidden = isCall;
    callView.delegate = delegate;
    return callView;
}

- (void)awakeFromNib {
    [super awakeFromNib];
    UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(didClickToolView:)];
    [self.toolView addGestureRecognizer:tap];
}

- (void)didClickToolView:(UITapGestureRecognizer *)tap {
    self.toolView.hidden = YES;
}

- (void)setIsCall:(BOOL)isCall {
    _isCall = isCall;
    if (!isCall) {
        self.stateLabel.text = @"接听中...";
    }
}

- (void)setUid:(NSString *)uid {
    _uid = uid;
    self.calleeIdLabel.text = uid;
}

- (IBAction)didClickButton:(UIButton *)sender {
    if (self.delegate && [self.delegate respondsToSelector:@selector(rtmCallViewdidClick:call:)]) {
        (sender.tag >= 100) ? (sender.selected = !sender.selected) : 0;
        [self.delegate rtmCallViewdidClick:sender call:self.isCall];
    }
}

@end
