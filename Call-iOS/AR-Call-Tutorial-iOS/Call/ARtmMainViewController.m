//
//  ARtmMainViewController.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/17.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARtmMainViewController.h"
#import <AVFoundation/AVFoundation.h>

@interface ARtmMainViewController ()<UITextFieldDelegate,ARtmCallDelegate,ARtmDelegate,ARtcEngineDelegate,ARtmCallViewDelegate>

@property (weak, nonatomic) IBOutlet UILabel *calleeIdLabel;
@property (weak, nonatomic) IBOutlet UIStackView *stackView;
@property (weak, nonatomic) IBOutlet UIButton *callButton;

@property (nonatomic, strong) UITextField *calleeIdTextField;
/* 呼叫弹框 **/
@property (nonatomic, strong) ARtmCallView *rtmCallView;
@property (nonatomic, strong) WMDragView *localView;
@property (nonatomic, strong) WMDragView *remoteView;
@property (nonatomic, strong) ARtmCallKit *callKit;
@property (nonatomic, strong) ARtcEngineKit *rtcKit;

@property (nonatomic, copy) NSString *localUid;
@property (nonatomic, copy) NSString *remoteUid;
@property (nonatomic, assign) BOOL callMinimize;
/* 本地呼叫请求 **/
@property (nonatomic, strong) ARtmLocalInvitation * localInvitation;
/* 远程呼叫邀请 **/
@property (nonatomic, strong) ARtmRemoteInvitation * remoteInvitation;
@property (nonatomic, strong) AVAudioPlayer *player;

@end

@implementation ARtmMainViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    UIApplication.sharedApplication.idleTimerDisabled = YES;
    self.localUid = ARtmManager.getLocalUid;
    self.calleeIdLabel.text = [NSString stringWithFormat:@"您的呼叫ID：%@",self.localUid];
    
    ARtmManager.rtmKit.aRtmDelegate = self;
    //一个 ARtmCallKit 实例
    self.callKit = [ARtmManager.rtmKit getRtmCallKit];
    self.callKit.callDelegate = self;
    [self initializeUIKit];
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

- (void)initializeRtcKit {
    //===================== rtc 模块 =======================
    ARVideoEncoderConfiguration *config = [[ARVideoEncoderConfiguration alloc] init];
    ARtmUserInfo *userInfo = [ARtmUserManager fetchUserInfo];
    if ([userInfo.dimensions isEqualToString:@"320P"]) {
        config.dimensions = CGSizeMake(320, 180);
    } else if ([userInfo.dimensions isEqualToString:@"480P"]) {
        config.dimensions = CGSizeMake(640, 480);
    } else {
        config.dimensions = CGSizeMake(1280, 720);
    }
    
    //实例化ARtcEngineKit对象
    self.rtcKit = [ARtcEngineKit sharedEngineWithAppId:appID delegate:self];
    //分辨率
    config.frameRate = userInfo.frameRate;
    //码率
    config.bitrate = 1000;
    //编码方向
    config.orientationMode = ARVideoOutputOrientationModeAdaptative;
    //设置视频编码配置
    [self.rtcKit setVideoEncoderConfiguration:config];
    
    //开启视频模块
    [self.rtcKit enableVideo];
    //初始化本地视图
    ARtcVideoCanvas *videoCanvas = [[ARtcVideoCanvas alloc] init];
    videoCanvas.uid = [ARtmManager getLocalUid];
    self.localView.frame = CGRectMake(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    [self.rtmCallView insertSubview:self.localView atIndex:0];
    videoCanvas.view = self.localView;
    [self.rtcKit setupLocalVideo:videoCanvas];
    //开启视频预览
    [self.rtcKit startPreview];
}

- (void)makeCall:(NSString *)calleeId {
    [self playMusic:YES];
    //创建本地呼叫请求
    self.localInvitation = nil;
    self.localInvitation = [[ARtmLocalInvitation alloc] initWithCalleeId:calleeId];
    self.localInvitation.content = [ARCallCommon randomNumber:9];
    self.rtmCallView = [ARtmCallView loadCallView:self call:YES uid:calleeId];
    UIWindow *window = UIApplication.sharedApplication.delegate.window;
    [window addSubview:self.rtmCallView];
    
    //发送呼叫请求
    @weakify(self);
    [self.callKit sendLocalInvitation:self.localInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
        @strongify(self);
        if (errorCode == ARtmInvitationApiCallErrorAlreadySent) {
            [self initializeRtcKit];
        }
    }];
    
    //订阅指定单个或多个用户的在线状态
    [ARtmManager.rtmKit subscribePeersOnlineStatus:@[calleeId] completion:^(ARtmPeerSubscriptionStatusErrorCode errorCode) {
        NSLog(@"subscribePeersOnlineStatus errorcode == %ld",(long)errorCode);
    }];
}

- (IBAction)didClickCallButton:(id)sender {
    __block NSString *calleeId = self.calleeIdTextField.text;
    if (![calleeId isEqualToString:[ARtmManager getLocalUid]]) {
        if (!self.rtmCallView) {
            if (calleeId.length == 4) {
                @weakify(self);
                [self.calleeIdTextField resignFirstResponder];
                //查询指定用户的在线状态
                [ARtmManager.rtmKit queryPeersOnlineStatus:@[calleeId] completion:^(NSArray<ARtmPeerOnlineStatus *> * _Nullable peerOnlineStatus, ARtmQueryPeersOnlineErrorCode errorCode) {
                    if (errorCode == ARtmQueryPeersOnlineErrorOk && peerOnlineStatus.count != 0) {
                        @strongify(self);
                        ARtmPeerOnlineStatus *onlineStatus = peerOnlineStatus[0];
                        if (onlineStatus.state == ARtmPeerOnlineStateOnline) {
                            [self makeCall:calleeId];
                        } else {
                            [ARCallCommon showInfoWithStatus:ARtmUserOffline];
                        }
                    }
                }];
            }
        } else {
            [ARCallCommon showInfoWithStatus:ARtmCallProgress];
        }
    } else {
        [ARCallCommon showInfoWithStatus:ARtmCallerIdInvalid];
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
    if (onlineStatus.count != 0) {
        ARtmPeerOnlineStatus *status = onlineStatus[0];
        if (status.state != ARtmPeerOnlineStateOnline) {
            [self.callKit cancelLocalInvitation:self.localInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
                NSLog(@"cancelLocalInvitation == %ld",(long)errorCode);
            }];
            [self unsubscribePeers:self.localInvitation.calleeId];
            [self endRtmCall];
            [ARCallCommon showInfoWithStatus:ARtmUserOffline];
        }
    }
}

//MARK: - ARtmCallDelegate

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationReceivedByPeer:(ARtmLocalInvitation * _Nonnull)localInvitation {
    //被叫已收到呼叫邀请
    NSLog(@"%@",ARtmReceivedInvitationByPeer);
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationAccepted:(ARtmLocalInvitation * _Nonnull)localInvitation withResponse:(NSString * _Nullable) response {
    //被叫已接受呼叫邀请
    NSLog(@"%@",ARtmAcceptedInvitation);
    [self playMusic:NO];
    [self unsubscribePeers:self.localInvitation.calleeId];
    
    self.rtmCallView.callView.hidden = YES;
    self.rtmCallView.toolView.hidden = NO;
    [self.rtcKit joinChannelByToken:nil channelId:self.localInvitation.content uid:self.localUid joinSuccess:^(NSString * _Nonnull channel, NSString * _Nonnull uid, NSInteger elapsed) {
        NSLog(@"joinChannelByToken");
    }];
    self.localInvitation = nil;
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationRefused:(ARtmLocalInvitation * _Nonnull)localInvitation withResponse:(NSString * _Nullable) response {
    //被叫已拒绝呼叫邀请
    if ([response isEqualToString:@"calling"]) {
        //对方正在通话中...
        [ARCallCommon showInfoWithStatus:ARtmRemoteCallBusy];
    } else {
        [ARCallCommon showInfoWithStatus:ARtmRemoteRefusedInvitation];
    }
    
    [self unsubscribePeers:self.localInvitation.calleeId];
    [self endRtmCall];
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationCanceled:(ARtmLocalInvitation * _Nonnull)localInvitation {
    //呼叫邀请已被取消
    NSLog(@"%@",ARtmCanceledInvitation);
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationFailure:(ARtmLocalInvitation * _Nonnull)localInvitation errorCode:(ARtmLocalInvitationErrorCode)errorCode {
    //呼叫邀请发送失败
    [self endRtmCall];
    if (errorCode == ARtmLocalInvitationErrorRemoteOffline) {
        [ARCallCommon showInfoWithStatus:ARtmUserOffline];
    } else {
        [ARCallCommon showInfoWithStatus:ARtmFailureInvitation];
    }
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationReceived:(ARtmRemoteInvitation * _Nonnull)remoteInvitation {
    //收到一个呼叫邀请
    if (self.rtmCallView) {
        //拒绝标识(正在通话中...)
        remoteInvitation.response = @"calling";
        [self.callKit refuseRemoteInvitation:remoteInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
            if (errorCode == ARtmInvitationApiCallErrorOk) {
                NSLog(@"remoteInvitationReceived");
            }
        }];
    } else {
        //弹出通话框
        [ARCallCommon hideKeyBoard];
        [self playMusic:YES];
        self.remoteInvitation = remoteInvitation;
        self.rtmCallView = [ARtmCallView loadCallView:self call:NO uid:remoteInvitation.callerId];
        UIWindow *window = UIApplication.sharedApplication.delegate.window;
        [window addSubview:self.rtmCallView];
        [self initializeRtcKit];
    }
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationRefused:(ARtmRemoteInvitation * _Nonnull)remoteInvitation {
    //拒绝呼叫邀请成功
    NSLog(@"%@",ARtmRefusedInvitation);
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationAccepted:(ARtmRemoteInvitation * _Nonnull)remoteInvitation {
    //接受呼叫邀请成功
    [self.rtcKit joinChannelByToken:nil channelId:remoteInvitation.content uid:self.localUid joinSuccess:^(NSString * _Nonnull channel, NSString * _Nonnull uid, NSInteger elapsed) {
        NSLog(@"joinChannelByToken");
    }];
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationCanceled:(ARtmRemoteInvitation * _Nonnull)remoteInvitation {
    //主叫已取消呼叫邀请
    [self endRtmCall];
    [ARCallCommon showInfoWithStatus:ARtmRemoteCanceledInvitation];
    NSLog(@"%@",ARtmRemoteCanceledInvitation);
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationFailure:(ARtmRemoteInvitation * _Nonnull)remoteInvitation errorCode:(ARtmRemoteInvitationErrorCode) errorCode {
    //来自对端的邀请失败
    [self endRtmCall];
}

//MARK: - ARtcEngineDelegate

- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine firstRemoteVideoDecodedOfUid:(NSString *_Nonnull)uid size:(CGSize)size elapsed:(NSInteger)elapsed {
    //已完成远端视频首帧解码回调
    ARtcVideoCanvas *videoCanvas = [[ARtcVideoCanvas alloc] init];
    self.remoteView.frame = CGRectMake(SCREEN_WIDTH - 140, 30, 120, 160);
    [UIApplication.sharedApplication.delegate.window addSubview:self.remoteView];
    videoCanvas.uid = uid;
    videoCanvas.view = self.remoteView;
    //初始化远端用户视图
    [self.rtcKit setupRemoteVideo:videoCanvas];
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.3 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        [self switchVideoSize];
    });
}

- (void)rtcEngine:(ARtcEngineKit *)engine didOfflineOfUid:(NSString *)uid reason:(ARUserOfflineReason)reason {
    //远端用户（通信场景）/主播（直播场景）离开当前频道回调
    [self endRtmCall];
}

- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine remoteVideoStateChangedOfUid:(NSString *_Nonnull)uid state:(ARVideoRemoteState)state reason:(ARVideoRemoteStateReason)reason elapsed:(NSInteger)elapsed {
    //远端视频状态发生改变回调
    if (reason == ARVideoRemoteStateReasonRemoteMuted) {
        self.remoteView.placeholderView.hidden = NO;
    } else if (reason == ARVideoRemoteStateReasonRemoteUnmuted) {
        self.remoteView.placeholderView.hidden = YES;
    }
}

//MARK: - ARtmCallViewDelegate

- (void)rtmCallViewdidClick:(UIButton *)sender call:(BOOL)isCall{
    switch (sender.tag) {
        case 50:
            if (isCall) {
                //取消呼叫
                [self unsubscribePeers:self.localInvitation.calleeId];
                //取消给对方的呼叫邀请
                [self.callKit cancelLocalInvitation:self.localInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
                    NSLog(@"cancelLocalInvitation == %ld",(long)errorCode);
                }];
                [self endRtmCall];
            } else {
                //拒绝呼叫
                [self.callKit refuseRemoteInvitation:self.remoteInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
                    NSLog(@"refuseRemoteInvitation == %ld",(long)errorCode);
                }];
                [self endRtmCall];
            }
            break;
        case 51:
            //同意呼叫
            self.rtmCallView.callView.hidden = YES;
            self.rtmCallView.toolView.hidden = NO;
            [self playMusic:NO];
            [self.callKit acceptRemoteInvitation:self.remoteInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
                NSLog(@"acceptRemoteInvitation == %ld",(long)errorCode);
            }];
            self.remoteInvitation = nil;
            break;
        case 52:
            //大小屏
            if (self.localView.superview != self.rtmCallView) {
                [self switchVideoSize];
            }
            self.rtmCallView.hidden = YES;
            self.callMinimize = YES;
            break;
        case 53:
            //离开
            [self.rtcKit leaveChannel:nil];
            [self endRtmCall];
            break;
        case 100:
            //音频
            [self.rtcKit muteLocalAudioStream:sender.selected];
            break;
        case 101:
            //扬声器
            [self.rtcKit setEnableSpeakerphone:!sender.selected];
            break;
        case 102:
            //视频
            [self.rtcKit muteLocalVideoStream:sender.selected];
            self.localView.placeholderView.hidden = !sender.selected;
            break;
        case 103:
            //旋转摄像头
            [self.rtcKit switchCamera];
            break;
        default:
            break;
    }
}

//MARK: - UITextFieldDelegate

- (BOOL)textField:(UITextField *)textField shouldChangeCharactersInRange:(NSRange)range replacementString:(NSString *)string {
    if ([string isEqualToString:@""]) {
        return YES;
    }
    return [ARCallCommon validateNumber:string];
}

//MARK: - other

- (void)playMusic:(BOOL)play {
    if (play) {
        NSString * path = [NSBundle.mainBundle pathForResource:@"rtm_call" ofType:@"mp3"];
        NSURL *tempUrl = [NSURL fileURLWithPath:path];
        NSError *error = nil;
        if (!self.player) {
            self.player = [[AVAudioPlayer alloc]initWithContentsOfURL:tempUrl error:&error];
        }
        self.player.numberOfLoops = -1;
        [self.player prepareToPlay];
        [self.player play];
    } else {
        [self.player stop];
        self.player = nil;
    }
}

- (void)unsubscribePeers:(NSString *)peerId {
    //退订指定单个或多个用户的在线状态
    if (peerId.length != 0) {
        [ARtmManager.rtmKit unsubscribePeersOnlineStatus:@[peerId] completion:^(ARtmPeerSubscriptionStatusErrorCode errorCode) {
            NSLog(@"unsubscribePeersOnlineStatus errorCode == %ld",(long)errorCode);
        }];
    }
}

- (void)endRtmCall {
    //结束通话
    [self.rtmCallView removeFromSuperview];
    [self.localView removeFromSuperview];
    [self.remoteView removeFromSuperview];
    self.rtmCallView = nil;
    self.localView = nil;
    self.remoteView = nil;
    self.localInvitation = nil;
    self.remoteInvitation = nil;
    [self playMusic:NO];
    [self.rtcKit leaveChannel:nil];
    self.rtcKit = nil;
    [ARtcEngineKit destroy];
}

- (void)switchVideoSize {
    //大小屏处理
    if (self.localView.superview == self.rtmCallView) {
        self.localView.dragEnable = YES;
        self.remoteView.dragEnable = NO;
        CGRect rect = self.remoteView.frame;
        self.remoteView.frame = self.view.bounds;
        [self.rtmCallView insertSubview:self.remoteView belowSubview:self.rtmCallView.toolView];
        self.localView.frame = rect;
        [UIApplication.sharedApplication.delegate.window addSubview:self.localView];
    } else {
        self.localView.dragEnable = NO;
        self.remoteView.dragEnable = YES;
        CGRect rect = self.localView.frame;
        self.localView.frame = self.view.bounds;
        [self.rtmCallView insertSubview:self.localView belowSubview:self.rtmCallView.toolView];
        self.remoteView.frame = rect;
        [UIApplication.sharedApplication.delegate.window addSubview:self.remoteView];
    }
}

- (void)limitTextField:(UITextField *)textField {
    //限制纯数字输入
    if (textField.text.length > 4) {
        textField.text = [textField.text substringToIndex:4];
    }
    
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

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    [ARCallCommon hideKeyBoard];
}

- (void)didClickTextField:(UIButton *)button {
    [self.calleeIdTextField becomeFirstResponder];
}

- (UIStatusBarStyle)preferredStatusBarStyle {
    return UIStatusBarStyleLightContent;
}

- (WMDragView *)localView {
    if (!_localView) {
        @weakify(self);
        _localView = [[WMDragView alloc] init];
        _localView.placeholderView.backgroundColor = RGBA(28, 28, 28, 1);
        _localView.ClickDragViewBlock = ^(WMDragView *dragView) {
            @strongify(self);
            if (self.callMinimize) {
                self.rtmCallView.hidden = NO;
                self.callMinimize = NO;
            } else {
                if (self.localView.superview == self.rtmCallView) {
                    self.rtmCallView.toolView.hidden = NO;
                } else {
                    [self switchVideoSize];
                }
            }
        };
    }
    return _localView;
}

- (WMDragView *)remoteView {
    if (!_remoteView) {
        @weakify(self);
        _remoteView = [[WMDragView alloc] init];
        _remoteView.ClickDragViewBlock = ^(WMDragView *dragView) {
            @strongify(self);
            if (self.callMinimize) {
                [self switchVideoSize];
                self.rtmCallView.hidden = NO;
                self.callMinimize = NO;
            } else {
                if (self.remoteView.superview == self.rtmCallView) {
                     self.rtmCallView.toolView.hidden = NO;
                } else {
                   [self switchVideoSize];
                }
            }
        };
    }
    return _remoteView;
}

@end
