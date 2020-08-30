//
//  ARtmMainViewController.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/17.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARtmMainViewController.h"
#import <AVFoundation/AVFoundation.h>
#import "ARtmConfigController.h"

@implementation ARtmCollectionViewCell

@end

@interface ARtmMainViewController ()<UITextFieldDelegate,ARtmCallDelegate,ARtmDelegate,ARtcEngineDelegate,UICollectionViewDelegate,UICollectionViewDataSource,UICollectionViewDelegateFlowLayout>

@property (weak, nonatomic) IBOutlet UILabel *titleLabel;
@property (weak, nonatomic) IBOutlet UILabel *calleeIdLabel;
@property (weak, nonatomic) IBOutlet UIStackView *stackView;
@property (weak, nonatomic) IBOutlet UIButton *callButton;
@property (weak, nonatomic) IBOutlet UICollectionView *rtmCollectionView;
@property (weak, nonatomic) IBOutlet UILabel *tipsLabel;

@property (nonatomic, strong) UITextField *calleeIdTextField;
@property (nonatomic, strong) ARtcEngineKit *rtcKit;
@property (nonatomic, strong) ARtmCallKit *rtmCallKit;
@property (nonatomic, copy) NSString *localUid;
@property (nonatomic, copy) NSString *remoteUid;
@property (nonatomic, strong) NSMutableArray *callArr;
@property (nonatomic, strong) AVAudioPlayer *player;

@end

@implementation ARtmMainViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    UIApplication.sharedApplication.idleTimerDisabled = YES;
    self.localUid = ARtmManager.getLocalUid;
    self.calleeIdLabel.text = [NSString stringWithFormat:@"您的呼叫ID：%@",self.localUid];
    if (self.type) {
        self.titleLabel.text = @"多人呼叫邀请";
        self.tipsLabel.text = @"请输入对方的ID，可输入多个";
        self.callArr = [NSMutableArray arrayWithCapacity:6];
    }
    
    ARtmManager.rtmKit.aRtmDelegate = self;
    self.rtmCallKit = [ARtmManager.rtmKit getRtmCallKit];
    self.rtmCallKit.callDelegate = self;
    [self initializeUIKit];
    [NSNotificationCenter.defaultCenter addObserver:self selector:@selector(rtmCallEnd:) name:ARtmCallEndNotification object:nil];
}

- (void)initializeUIKit {
    for (UIButton *button in self.stackView.subviews) {
        [button addTarget:self action:@selector(didClickTextField:) forControlEvents:UIControlEventTouchUpInside];
    }
    //隐藏键盘
    self.calleeIdTextField = [[UITextField alloc] initWithFrame:CGRectZero];
    self.calleeIdTextField.delegate = self;
    self.calleeIdTextField.keyboardType = UIKeyboardTypeNumberPad;
    [self.view addSubview:self.calleeIdTextField];
    [self.calleeIdTextField addTarget:self action:@selector(limitTextField:) forControlEvents:UIControlEventEditingChanged];
}

- (IBAction)didClickCallButton:(id)sender {
    [ARCallCommon hideKeyBoard];
    //当前是否正在通话
    BOOL index = false;
    for (UIWindow *window in UIApplication.sharedApplication.windows) {
        if (window.tag == ARtmWindowIdentifier) {
            index = true;
        }
    }
    
    if (!index) {
        if (self.type) {
            //多人呼叫
            if (self.callArr.count != 0) {
                ARtmMeetViewController *meetVc = [[UIStoryboard storyboardWithName:@"Main" bundle:nil] instantiateViewControllerWithIdentifier:@"ARtm_Meet"];
                meetVc.channelId = [ARCallCommon randomNumber:9];
                meetVc.calling = YES;
                meetVc.callArr = self.callArr;
                ARtmManager.rtmWindow.rootViewController = meetVc;
            }
        } else {
            //单人呼叫
            __block NSString *calleeId = self.calleeIdTextField.text;
            if (![calleeId isEqualToString:[ARtmManager getLocalUid]]) {
                if (calleeId.length == 4) {
                    @weakify(self);
                    [self.calleeIdTextField resignFirstResponder];
                    //查询指定用户的在线状态
                    [ARtmManager.rtmKit queryPeersOnlineStatus:@[calleeId] completion:^(NSArray<ARtmPeerOnlineStatus *> * _Nullable peerOnlineStatus, ARtmQueryPeersOnlineErrorCode errorCode) {
                        if (errorCode == ARtmQueryPeersOnlineErrorOk && peerOnlineStatus.count != 0) {
                            @strongify(self);
                            ARtmPeerOnlineStatus *onlineStatus = peerOnlineStatus[0];
                            if (onlineStatus.state == ARtmPeerOnlineStateOnline) {
                                [self makeRtmCall];
                            } else {
                                [ARCallCommon showInfoWithStatus:ARtmUserOffline];
                            }
                        }
                    }];
                }
            } else {
                [ARCallCommon showInfoWithStatus:ARtmCallerIdInvalid];
            }
        }
    } else {
        [ARCallCommon showInfoWithStatus:@"当前正在通话中..."];
    }
}

- (void)makeRtmCall {
    //点对点呼叫邀请
    @weakify(self);
    [UIAlertController showActionSheetInViewController:self withTitle:nil message:nil cancelButtonTitle:@"取消" destructiveButtonTitle:nil otherButtonTitles:@[@"视频呼叫",@"语音呼叫"] popoverPresentationControllerBlock:^(UIPopoverPresentationController * _Nonnull popover) {
        
    } tapBlock:^(UIAlertController * _Nonnull controller, UIAlertAction * _Nonnull action, NSInteger buttonIndex) {
        if (buttonIndex != 0) {
            @strongify(self);
            ARtmCallViewController *callVc = [[UIStoryboard storyboardWithName:@"Main" bundle:nil] instantiateViewControllerWithIdentifier:@"ARtm_Call"];
            callVc.calling = YES;
            callVc.callerId = self.calleeIdTextField.text;
            callVc.channelId = [ARCallCommon randomNumber:9];
            (buttonIndex == 2) ? (callVc.mode = 0) : (callVc.mode = 1);
            ARtmManager.rtmWindow.rootViewController = callVc;
        }
    }];
}

- (IBAction)didClickLogoutButton:(id)sender {
    if (self.childViewControllers.count == 0) {
        [self dismissViewControllerAnimated:YES completion:nil];
    } else {
        [ARCallCommon showInfoWithStatus:@"当前正在通话中..."];
    }
}


- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    UINavigationController *nav = segue.destinationViewController;
    ARtmConfigController *configVc = nav.childViewControllers[0];
    configVc.type = self.type;
}

- (void)rtmCallEnd:(NSNotificationCenter *)nofit {
    ARtmManager.rtmKit.aRtmDelegate = self;
    self.rtmCallKit.callDelegate = self;
    NSLog(@"rtmCallEnd Main Refresh");
    if (self.type) {
        [self.callArr removeAllObjects];
        [self.rtmCollectionView reloadData];
        self.callButton.selected = NO;
        self.callButton.backgroundColor = RGBA(224, 224, 224, 1);
    }
}

//MARK: - ARtmDelegate

- (void)rtmKit:(ARtmKit * _Nonnull)kit connectionStateChanged:(ARtmConnectionState)state reason:(ARtmConnectionChangeReason)reason {
    //连接状态改变回调
    if (state == ARtmConnectionStateReconnecting && reason == ARtmConnectionChangeReasonInterrupted) {
        [ARCallCommon showInfoWithStatus:ARtmReconnection];
    }
    NSLog(@"state == %ld reason == %ld",(long)state,(long)reason);
}

- (void)rtmKit:(ARtmKit * _Nonnull)kit peersOnlineStatusChanged:(NSArray< ARtmPeerOnlineStatus *> * _Nonnull)onlineStatus {
    //被订阅用户在线状态改变回调
}

//MARK: - ARtmCallDelegate

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationReceivedByPeer:(ARtmLocalInvitation * _Nonnull)localInvitation {
    //被叫已收到呼叫邀请
    NSLog(@"%@",ARtmReceivedInvitationByPeer);
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationAccepted:(ARtmLocalInvitation * _Nonnull)localInvitation withResponse:(NSString * _Nullable) response {
    //被叫已接受呼叫邀请
    NSLog(@"%@",ARtmAcceptedInvitation);
    [ARCallCommon playMusic:NO];
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationRefused:(ARtmLocalInvitation * _Nonnull)localInvitation withResponse:(NSString * _Nullable) response {
    //被叫已拒绝呼叫邀请
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationCanceled:(ARtmLocalInvitation * _Nonnull)localInvitation {
    //呼叫邀请已被取消
    NSLog(@"%@",ARtmCanceledInvitation);
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationFailure:(ARtmLocalInvitation * _Nonnull)localInvitation errorCode:(ARtmLocalInvitationErrorCode)errorCode {
    //呼叫邀请发送失败
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationReceived:(ARtmRemoteInvitation * _Nonnull)remoteInvitation {
    //收到一个呼叫邀请
    [ARCallCommon hideKeyBoard];
    NSDictionary *dic = [ARCallCommon dictionaryWithJSONString:remoteInvitation.content];
    NSString *channelId = [dic objectForKey:@"ChanId"];
    if ([[dic objectForKey:@"Conference"] boolValue]) {
        //多人呼叫
        NSMutableArray *arr = [NSMutableArray arrayWithArray:[dic objectForKey:@"UserData"]];
        [arr removeObject:[ARtmManager getLocalUid]];
        
        ARtmMeetViewController *meetVc = [[UIStoryboard storyboardWithName:@"Main" bundle:nil] instantiateViewControllerWithIdentifier:@"ARtm_Meet"];
        meetVc.calling = NO;
        meetVc.remoteInvitation = remoteInvitation;
        meetVc.channelId = channelId;
        meetVc.callArr = arr;
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

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationRefused:(ARtmRemoteInvitation * _Nonnull)remoteInvitation {
    //拒绝呼叫邀请成功
    NSLog(@"%@",ARtmRefusedInvitation);
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationAccepted:(ARtmRemoteInvitation * _Nonnull)remoteInvitation {
    //接受呼叫邀请成功
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationCanceled:(ARtmRemoteInvitation * _Nonnull)remoteInvitation {
    //主叫已取消呼叫邀请
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationFailure:(ARtmRemoteInvitation * _Nonnull)remoteInvitation errorCode:(ARtmRemoteInvitationErrorCode) errorCode {
    //来自对端的邀请失败
}

//MARK: - UITextFieldDelegate

- (BOOL)textField:(UITextField *)textField shouldChangeCharactersInRange:(NSRange)range replacementString:(NSString *)string {
    if ([string isEqualToString:@""]) {
        return YES;
    }
    return [ARCallCommon validateNumber:string];
}

//MARK: - UICollectionViewDelegate,UICollectionViewDataSource

- (NSInteger)collectionView:(UICollectionView*)collectionView numberOfItemsInSection:(NSInteger)section{
    return self.callArr.count;
}

- (CGSize)collectionView:(UICollectionView *)collectionView layout:(UICollectionViewLayout*)collectionViewLayout sizeForItemAtIndexPath:(NSIndexPath*)indexPath{
    return CGSizeMake((0.84 * SCREEN_WIDTH - 30)/3, 44);
}

- (__kindof UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath {
    ARtmCollectionViewCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:@"ARtm_CollectionCell" forIndexPath:indexPath];
    cell.deleteButton.tag = indexPath.row;
    [cell.deleteButton addTarget:self action:@selector(removeLabel:) forControlEvents:UIControlEventTouchUpInside];
    cell.titleLabel.text = self.callArr[indexPath.row];
    return cell;
}

//MARK: - other

- (void)removeLabel:(UIButton *)sender {
    //删除标签
    [self.callArr removeObjectAtIndex:sender.tag];
    if (self.callArr.count < 2) {
        CGFloat itemWidth = self.rtmCollectionView.frame.size.width;
        self.rtmCollectionView.contentInset = UIEdgeInsetsMake(0, 0, 0, itemWidth - (itemWidth - 30)/3);
    }
    self.rtmCollectionView.hidden = !self.callArr.count;
    [self.rtmCollectionView reloadData];
    
    if (self.callArr.count == 0) {
        self.callButton.selected = NO;
        self.callButton.backgroundColor = RGBA(224, 224, 224, 1);
    }
}

- (void)limitTextField:(UITextField *)textField {
    //限制输入
    if (textField.text.length > 4) {
        textField.text = [textField.text substringToIndex:4];
    }
    if (self.type) {
        //多人呼叫
        if (self.callArr.count < 6) {
            NSArray *arr = [ARCallCommon getSubString:textField.text];
            for (NSInteger i = 0; i < self.stackView.subviews.count; i++) {
                NSString *subText;
                UIButton *button = self.stackView.subviews[i];
                (i < arr.count) ? (subText = arr[i]) : @"";
                [button setTitle:subText forState:UIControlStateNormal];
            }
            
            if (textField.text.length == 4) {
                if ([textField.text isEqualToString:ARtmManager.getLocalUid]) {
                    [ARCallCommon showInfoWithStatus:ARtmCallerIdInvalid];
                } else {
                    //去除重复号码
                    [self.callArr removeObject:textField.text];
                    [self.callArr addObject:textField.text];
                    self.callButton.selected = YES;
                    self.callButton.backgroundColor = [UIColor whiteColor];
                    
                    self.rtmCollectionView.contentInset = UIEdgeInsetsMake(0, 0, 0, 0);
                    if (self.callArr.count < 2) {
                        CGFloat itemWidth = self.rtmCollectionView.frame.size.width;
                        self.rtmCollectionView.contentInset = UIEdgeInsetsMake(0, 0, 0, itemWidth - (itemWidth - 30)/3);
                    }
                    
                    textField.text = @"";
                    self.rtmCollectionView.hidden = NO;
                    [self.rtmCollectionView reloadData];
                    for (NSInteger i = 0; i < self.stackView.subviews.count; i++) {
                        UIButton *button = self.stackView.subviews[i];
                        [button setTitle:@"" forState:UIControlStateNormal];
                    }
                }
            }
        } else {
            [ARCallCommon showInfoWithStatus:ARtmCallLimitMax];
        }
    } else {
        //单人呼叫
        if (textField.text.length == 4) {
            self.callButton.selected = YES;
            self.callButton.backgroundColor = [UIColor whiteColor];
        } else {
            self.callButton.selected = NO;
            self.callButton.backgroundColor = RGBA(224, 224, 224, 1);
        }
        
        NSArray *arr = [ARCallCommon getSubString:textField.text];
        for (NSInteger i = 0; i < self.stackView.subviews.count; i++) {
            NSString *subText;
            UIButton *button = self.stackView.subviews[i];
            (i < arr.count) ? (subText = arr[i]) : @"";
            [button setTitle:subText forState:UIControlStateNormal];
        }
    }
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    [ARCallCommon hideKeyBoard];
}

- (void)didClickTextField:(UIButton *)button {
    [self.calleeIdTextField becomeFirstResponder];
}

- (UIStatusBarStyle)preferredStatusBarStyle {
    return UIStatusBarStyleLightContent;
}

- (void)dealloc {
    [[NSNotificationCenter defaultCenter] removeObserver:self];
    NSLog(@"dealloc");
}

@end
