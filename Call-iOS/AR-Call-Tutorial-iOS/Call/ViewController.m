//
//  ViewController.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/17.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ViewController.h"
#import "ARtmMainViewController.h"

@interface ViewController ()

@property (weak, nonatomic) IBOutlet UILabel *calleeIdLabel;
@property (nonatomic, copy) NSString *calleeId;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    (ARtmManager.getLocalUid.length == 0) ? (self.calleeId = [ARCallCommon randomNumber:4]) : (self.calleeId = ARtmManager.getLocalUid);
    self.calleeIdLabel.text = [NSString stringWithFormat:@"您的呼叫ID：%@",self.calleeId];
}

- (IBAction)didClickLoginButton:(id)sender {
    @weakify(self);
    [ARtmManager.rtmKit loginByToken:@"" user:self.calleeId completion:^(ARtmLoginErrorCode errorCode) {
        if (errorCode == ARtmLoginErrorOk) {
            @strongify(self);
            [ARtmManager setLocalUid:self.calleeId];
            ARtmMainViewController *mainVc = [[self storyboard] instantiateViewControllerWithIdentifier:@"ARtm_Main"];
            mainVc.modalPresentationStyle = UIModalPresentationFullScreen;
            [self presentViewController:mainVc animated:YES completion:nil];
        }
    }];
}

- (UIStatusBarStyle)preferredStatusBarStyle {
    return UIStatusBarStyleLightContent;
}

@end
