//
//  ARtmHomeViewController.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/28.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARtmHomeViewController.h"
#import "ARtmMainViewController.h"

@interface ARtmHomeViewController ()<ARtmCallDelegate,ARtmDelegate>

@property (weak, nonatomic) IBOutlet UILabel *calleeIdLabel;
@property (nonatomic, copy) NSString *calleeId;
@property (nonatomic, assign) BOOL isLogin;

@end

@implementation ARtmHomeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    if (ARtmManager.getLocalUid.length == 0) {
        self.calleeId = [ARCallCommon randomNumber:4];
        [ARtmManager setLocalUid:self.calleeId];
    } else {
        self.calleeId = ARtmManager.getLocalUid;
    }
    self.calleeIdLabel.text = [NSString stringWithFormat:@"您的呼叫ID：%@",self.calleeId];
    
    @weakify(self);
    [ARtmManager.rtmKit loginByToken:@"" user:self.calleeId completion:^(ARtmLoginErrorCode errorCode) {
        if (errorCode == ARtmLoginErrorOk) {
            @strongify(self);
            self.isLogin = YES;
            NSLog(@"loginByToken Sucess");
        }
    }];
    
    [NSNotificationCenter.defaultCenter addObserver:self selector:@selector(rtmCallEnd:) name:ARtmCallEndNotification object:nil];
}

- (IBAction)didClickLoginButton:(UIButton *)sender {
    if (self.isLogin) {
        ARtmMainViewController *mainVc = [[self storyboard] instantiateViewControllerWithIdentifier:@"ARtm_Main"];
        mainVc.type = sender.tag;
        mainVc.modalPresentationStyle = UIModalPresentationCurrentContext;
        [self presentViewController:mainVc animated:YES completion:nil];
    } else {
        [ARCallCommon showInfoWithStatus:ARtmUserLogin];
    }
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationReceived:(ARtmRemoteInvitation * _Nonnull)remoteInvitation {
    //收到一个呼叫邀请
    [ARCallCommon hideKeyBoard];
    NSDictionary *dic = [ARCallCommon dictionaryWithJSONString:remoteInvitation.content];
    NSString *channelId = [dic objectForKey:@"ChanId"];
    if ([[dic objectForKey:@"Conference"] boolValue]) {
        //多人呼叫
        NSMutableArray *callArr = [NSMutableArray array];
        
        [callArr addObjectsFromArray:[dic objectForKey:@"UserData"]];
        [callArr removeObject:[ARtmManager getLocalUid]];

        ARtmMeetViewController *meetVc = [[UIStoryboard storyboardWithName:@"Main" bundle:nil] instantiateViewControllerWithIdentifier:@"ARtm_Meet"];
        meetVc.calling = NO;
        meetVc.remoteInvitation = remoteInvitation;
        meetVc.channelId = channelId;
        meetVc.callArr = callArr;
        ARtmManager.rtmWindow.rootViewController = meetVc;
    } else {
        //点对点呼叫
        ARtmCallViewController *callVc = [[UIStoryboard storyboardWithName:@"Main" bundle:nil] instantiateViewControllerWithIdentifier:@"ARtm_Call"];
        callVc.remoteInvitation = remoteInvitation;
        callVc.calling = NO;
        callVc.callerId = remoteInvitation.callerId;
        callVc.channelId = [dic objectForKey:@"ChanId"];
        callVc.mode =  [[dic objectForKey:@"Mode"] intValue];
        ARtmManager.rtmWindow.rootViewController = callVc;
    }
}

- (void)rtmCallEnd:(NSNotificationCenter *)nofit {
    if ([ARCallCommon topViewController] == self) {
        NSLog(@"rtmCallEnd HomeView Refresh");
        ARtmManager.rtmKit.aRtmDelegate = self;
        ARtmCallKit *rtmCallKit = [ARtmManager.rtmKit getRtmCallKit];
        rtmCallKit.callDelegate = self;
    }
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    ARtmManager.rtmKit.aRtmDelegate = self;
    ARtmCallKit *rtmCallKit = [ARtmManager.rtmKit getRtmCallKit];
    rtmCallKit.callDelegate = self;
}

- (UIStatusBarStyle)preferredStatusBarStyle {
    return UIStatusBarStyleLightContent;
}

@end
