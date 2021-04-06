//
//  ARCallViewController.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/20.
//  Copyright © 2020 AR. All rights reserved.
// 单人呼叫

#import "ARCallViewController.h"

@interface ARCallViewController ()<ARtcEngineDelegate,ARtmCallDelegate,ARtmDelegate>

@property (weak, nonatomic) IBOutlet UIView *toolView;
@property (weak, nonatomic) IBOutlet UIView *backView;
@property (weak, nonatomic) IBOutlet UIView *callView;
@property (weak, nonatomic) IBOutlet UIButton *acceptButton;
/** 切换语音接听 */
@property (weak, nonatomic) IBOutlet UIButton *switchVoiceButton;
/** 切换语音模式 */
@property (weak, nonatomic) IBOutlet UIButton *switchButton;
@property (weak, nonatomic) IBOutlet UIButton *audioButton;
@property (weak, nonatomic) IBOutlet UIButton *switchCameraButton;
@property (weak, nonatomic) IBOutlet UIButton *speakerButton;
@property (weak, nonatomic) IBOutlet UIButton *hangupButton;
@property (weak, nonatomic) IBOutlet UILabel *callerIdLabel;
@property (weak, nonatomic) IBOutlet UILabel *timeLabel;
@property (weak, nonatomic) IBOutlet UILabel *stateLabel;

@property (nonatomic, strong) ARtcEngineKit *rtcKit;
@property (nonatomic, strong) ARtmCallKit *rtmCallKit;
@property (nonatomic, strong) ARtmLocalInvitation *localInvitation;

/** 本地视图 */
@property (nonatomic, strong) WMDragView *localView;
/** 远程视图 */
@property (nonatomic, strong) WMDragView *remoteView;
/** 悬浮窗 */
@property (nonatomic, strong) ARtmSuspensionView *suspensionView;
@property (nonatomic, strong) ARtmTimer *rtmTimer;
@property (nonatomic, assign) BOOL callMinimize;
@property (nonatomic, assign) BOOL callState;

@end

@implementation ARCallViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    [ARCallCommon playMusic:YES];
    self.callerIdLabel.text = self.callerId;
    self.rtmTimer = [[ARtmTimer alloc] init];

    ARtmManager.rtmKit.aRtmDelegate = self;
    self.rtmCallKit = [ARtmManager.rtmKit getRtmCallKit];
    self.rtmCallKit.callDelegate = self;

    if (self.calling) {
        //主叫
        self.acceptButton.hidden = YES;
        self.switchVoiceButton.hidden = YES;

        NSDictionary *dic = [[NSDictionary alloc] initWithObjectsAndKeys:[NSNumber numberWithInt:self.mode],@"Mode",[NSNumber numberWithBool:NO],@"Conference",self.channelId,@"ChanId",nil];
        self.localInvitation = [[ARtmLocalInvitation alloc] initWithCalleeId:self.callerId];
        self.localInvitation.content = [ARCallCommon returnJSONStringWithDictionary:dic];
        //发送呼叫请求
        [self.rtmCallKit sendLocalInvitation:self.localInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
            if (errorCode == ARtmInvitationApiCallErrorAlreadySent) {
                NSLog(@"sendLocalInvitation");
            }
        }];
        [self subscribePeersOnline:self.localInvitation.calleeId];
    } else {
        //被叫
        self.switchVoiceButton.hidden = self.mode;
        self.stateLabel.text = @"接听中...";
    }
    [self initializeRtcKit];
    
    //监听AI降噪开关配置
    [NSNotificationCenter.defaultCenter addObserver:self selector:@selector(observerNoise:) name:ARtmCallNoiseNotification object:nil];
}

- (void)initializeRtcKit {
    //===================== rtc 模块 =======================
    //实例化ARtcEngineKit对象
    self.rtcKit = [ARtcEngineKit sharedEngineWithAppId:appID delegate:self];
    ARUserInfo *userInfo = ARUserManager.getUserInfo;
    if (userInfo.aiNoise) {
        //开启AI降噪
        [self switchNoise:YES];
    }
    
    ARVideoEncoderConfiguration *config = [[ARVideoEncoderConfiguration alloc] init];
    if ([userInfo.dimensions isEqualToString:@"240*320"]) {
        config.dimensions = CGSizeMake(320, 180);
    } else if ([userInfo.dimensions isEqualToString:@"480*640"]) {
        config.dimensions = CGSizeMake(640, 480);
    } else {
        config.dimensions = CGSizeMake(1280, 720);
    }
    
    //分辨率
    config.frameRate = userInfo.frameRate;
    //码率
    config.bitrate = 500;
    //编码方向
    config.orientationMode = ARVideoOutputOrientationModeAdaptative;
    //设置视频编码配置
    [self.rtcKit setVideoEncoderConfiguration:config];
    
    [self.rtcKit setClientRole:ARClientRoleAudience];
    [self.rtcKit joinChannelByToken:nil channelId:self.channelId uid:[ARtmManager getLocalUid] joinSuccess:^(NSString * _Nonnull channel, NSString * _Nonnull uid, NSInteger elapsed) {
        NSLog(@"joinChannelByToken");
    }];
    [self.rtcKit setEnableSpeakerphone:!self.mode];
}

- (void)becomeBroadcaster {
    [self.rtcKit setClientRole:ARClientRoleBroadcaster];
    if (!self.mode) {
        //开启视频模块
        [self.rtcKit enableVideo];
        //初始化本地视图
        ARtcVideoCanvas *videoCanvas = [[ARtcVideoCanvas alloc] init];
        videoCanvas.uid = [ARtmManager getLocalUid];
        self.localView.frame = CGRectMake(SCREEN_WIDTH - 140, 30, 120, 160);
        [ARtmManager.rtmWindow addSubview:self.localView];
        videoCanvas.view = self.localView;
        [self.rtcKit setupLocalVideo:videoCanvas];
        //初始化远程视图
        self.remoteView.frame = CGRectMake(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        [self.view insertSubview:self.remoteView atIndex:0];
    }
}

- (IBAction)didClickRtmCallButton:(UIButton *)sender {
    sender.selected = !sender.selected;
    switch (sender.tag) {
        case 50:
            //最小化
            self.callMinimize = YES;
            ARtmManager.rtmWindow.hidden = YES;
            
            if (self.mode || !self.callState) {
                [self popMinimizeSuspension];
            } else {
                if ([self.localView.superview isKindOfClass:[UIWindow class]]) {
                    [self switchVideoSize];
                } else {
                    [UIApplication.sharedApplication.delegate.window addSubview:self.remoteView];
                }
            }
            break;
        case 51:
            if (self.calling) {
                //取消呼叫
                [self.rtmCallKit cancelLocalInvitation:self.localInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
                    NSLog(@"cancelLocalInvitation == %ld",(long)errorCode);
                }];
            } else {
                //被叫拒绝
                [self.rtmCallKit refuseRemoteInvitation:self.remoteInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
                      NSLog(@"refuseRemoteInvitation == %ld",(long)errorCode);
                }];
            }
            [self endCall:ARtmCallStop];
            break;
        case 52:
        case 53:
            {
                [ARCallCommon playMusic:NO];
                //52 切换语音接听 53 正常接听
                (sender.tag == 52) ? (self.mode = 1) : 0;
                NSDictionary *dic = [[NSDictionary alloc] initWithObjectsAndKeys:[NSNumber numberWithInt:self.mode],@"Mode",[NSNumber numberWithBool:NO],@"Conference",nil];
                self.remoteInvitation.response = [ARCallCommon returnJSONStringWithDictionary:dic];
                [self.rtmCallKit acceptRemoteInvitation:self.remoteInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
                    NSLog(@"acceptRemoteInvitation == %ld",(long)errorCode);
                }];
                self.stateLabel.hidden = YES;
                self.callState = YES;
                
                [self switchCallMode:self.mode];
                [self becomeBroadcaster];
            }
            break;
        case 54:
            //切换语音模式
        {
            self.mode = 1;
            NSDictionary *dic = [[NSDictionary alloc] initWithObjectsAndKeys:@"SwitchAudio",@"Cmd", nil];
            ARtmMessage *rtmMessage = [[ARtmMessage alloc] initWithText:[ARCallCommon returnJSONStringWithDictionary:dic]];
            ARtmSendMessageOptions *options = [[ARtmSendMessageOptions alloc] init];
            [ARtmManager.rtmKit sendMessage:rtmMessage toPeer:self.callerId sendMessageOptions:options completion:^(ARtmSendPeerMessageErrorCode errorCode) {
                NSLog(@"sendMessage SwitchAudio");
            }];
            [self.remoteView removeFromSuperview];
            [self.localView removeFromSuperview];
            [self switchCallMode:1];
            [self.rtcKit disableVideo];
            self.backView.hidden = NO;
            [self.rtcKit setEnableSpeakerphone:!self.mode];
        }
            break;
        case 55:
            //音频
            [self.rtcKit muteLocalAudioStream:sender.selected];
            break;
        case 56:
        {
            //挂断(通话中...)
            NSDictionary *dic = [[NSDictionary alloc] initWithObjectsAndKeys:@"EndCall",@"Cmd", nil];
            ARtmMessage *rtmMessage = [[ARtmMessage alloc] initWithText:[ARCallCommon returnJSONStringWithDictionary:dic]];
            ARtmSendMessageOptions *options = [[ARtmSendMessageOptions alloc] init];
            [ARtmManager.rtmKit sendMessage:rtmMessage toPeer:self.callerId sendMessageOptions:options completion:^(ARtmSendPeerMessageErrorCode errorCode) {
                NSLog(@"sendMessage EndCall");
            }];
            [self endCall:ARtmCallStop];
        }
            break;
        case 57:
            //切换摄像头
            [self.rtcKit switchCamera];
            break;
        case 58:
            //扬声器
            [self.rtcKit setEnableSpeakerphone:sender.selected];
            break;
        default:
            break;
    }
}

- (void)observerNoise:(NSNotification *)notification {
    //监听AI降噪开关配置
    NSDictionary * infoDic = [notification object];
    [self switchNoise:[[infoDic objectForKey:@"noise"] boolValue]];
}

- (void)switchNoise:(BOOL)enable {
    //开启AI降噪
    NSDictionary *dic = [[NSDictionary alloc] initWithObjectsAndKeys:@"SetAudioAiNoise",@"Cmd",[NSNumber numberWithInt:(int)enable],@"Enable",nil];
    [_rtcKit setParameters:[ARCallCommon returnJSONStringWithDictionary:dic]];
}

- (void)subscribePeersOnline:(NSString *)calleeId {
    //订阅指定单个或多个用户的在线状态
    if (calleeId.length != 0) {
        [ARtmManager.rtmKit subscribePeersOnlineStatus:@[calleeId] completion:^(ARtmPeerSubscriptionStatusErrorCode errorCode) {
            NSLog(@"subscribePeersOnlineStatus errorcode == %ld",(long)errorCode);
        }];
    }
}

- (void)popMinimizeSuspension {
    //窗口最小化
    if (self.callMinimize) {
        @weakify(self);
        self.suspensionView = [ARtmSuspensionView loadSuspensionView:^{
            @strongify(self);
            ARtmManager.rtmWindow.hidden = NO;
            self.view.hidden = NO;
            self.callMinimize = NO;
            [self.suspensionView removeFromSuperview];
        }];
        NSString *timeTxt;
        (self.timeLabel.text.length != 0) ? (timeTxt = self.timeLabel.text) : (timeTxt = @"等待接听");
        [self.suspensionView.titleButton setTitle:timeTxt forState:UIControlStateNormal];
        [UIApplication.sharedApplication.delegate.window addSubview:self.suspensionView];
    }
}

- (void)endCall:(NSString *)info {
    if (!self.mode) {
        [self.localView removeFromSuperview];
        [self.remoteView removeFromSuperview];
    }
    
    ARtmManager.rtmKit.aRtmDelegate = nil;
    self.rtmCallKit.callDelegate = nil;
    [self.suspensionView removeFromSuperview];
    
    if (self.rtcKit) {
        //离开频道，释放rtc资源
        [self.rtcKit leaveChannel:nil];
        [ARtcEngineKit destroy];
    }
    
    [ARCallCommon playMusic:NO];
    [self.rtmTimer clear];
    [NSNotificationCenter.defaultCenter postNotificationName:ARtmCallEndNotification object:nil];
    [ARCallCommon showInfoWithStatus:info];
    [ARtmManager dismissWindow];
}

//MARK: - ARtmDelegate

- (void)rtmKit:(ARtmKit * _Nonnull)kit peersOnlineStatusChanged:(NSArray< ARtmPeerOnlineStatus *> * _Nonnull)onlineStatus {
    //被订阅用户在线状态改变回调
    if (onlineStatus.count != 0) {
        ARtmPeerOnlineStatus *status = onlineStatus[0];
        if (status.state != ARtmPeerOnlineStateOnline) {
            [self endCall:ARtmUserOffline];
        }
    }
}

- (void)rtmKit:(ARtmKit *)kit messageReceived:(ARtmMessage *)message fromPeer:(NSString *)peerId {
    if ([peerId isEqualToString:self.callerId]) {
        //切换语音模式（通话中...）
        if (message.text.length != 0) {
            NSDictionary *dic = [ARCallCommon dictionaryWithJSONString:message.text];
            NSString *value = [dic objectForKey:@"Cmd"];
            if ([value isEqualToString:@"SwitchAudio"]) {
                [self.remoteView removeFromSuperview];
                [self.localView removeFromSuperview];
                [self switchCallMode:1];
                [self.rtcKit disableVideo];
                self.backView.hidden = NO;
                [self popMinimizeSuspension];
                self.mode = 1;
                [self.rtcKit setEnableSpeakerphone:!self.mode];
            } else if ([value isEqualToString:@"EndCall"]) {
                [self endCall:ARtmCallStop];
            }
        }
    }
}

//MARK: - ARtmCallDelegate

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationReceivedByPeer:(ARtmLocalInvitation * _Nonnull)localInvitation {
    //被叫已收到呼叫邀请
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationAccepted:(ARtmLocalInvitation * _Nonnull)localInvitation withResponse:(NSString * _Nullable) response {
    //被叫已接受呼叫邀请
    self.callState = YES;
    [ARCallCommon playMusic:NO];
    if (response.length != 0) {
        if (self.callMinimize && self.suspensionView && !self.mode) {
            ARtmManager.rtmWindow.hidden = NO;
            [self.suspensionView removeFromSuperview];
        }
        
        NSDictionary *dic = [ARCallCommon dictionaryWithJSONString:response];
        int mode = [[dic objectForKey:@"Mode"] intValue];
        self.mode = mode;
        [self switchCallMode:mode];
        [self becomeBroadcaster];
        self.stateLabel.hidden = YES;
    } else {
        [self endCall:ARtmCallStop];
    }
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationRefused:(ARtmLocalInvitation * _Nonnull)localInvitation withResponse:(NSString * _Nullable) response {
    //被叫已拒绝呼叫邀请
    NSString *info = ARtmCallStop;
    if (response.length != 0) {
        NSDictionary *dic = [ARCallCommon dictionaryWithJSONString:response];
        NSString *value = [dic objectForKey:@"Cmd"];
        if ([value isEqualToString:@"Calling"]) {
            info = ARtmRemoteCallBusy;
        }
    }
    [self endCall:info];
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationCanceled:(ARtmLocalInvitation * _Nonnull)localInvitation {
    //呼叫邀请已被取消
    [self endCall:ARtmCallStop];
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationFailure:(ARtmLocalInvitation * _Nonnull)localInvitation errorCode:(ARtmLocalInvitationErrorCode)errorCode {
    //呼叫邀请发送失败
    [self endCall:ARtmCallStop];
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationReceived:(ARtmRemoteInvitation * _Nonnull)remoteInvitation {
    //收到一个呼叫邀请
    
    //通话中收到一个新的呼叫请求
    NSDictionary *dic = [[NSDictionary alloc] initWithObjectsAndKeys:@"Calling",@"Cmd",nil];
    remoteInvitation.response = [ARCallCommon returnJSONStringWithDictionary:dic];
    [self.rtmCallKit refuseRemoteInvitation:remoteInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
        if (errorCode == ARtmInvitationApiCallErrorOk) {
            NSLog(@"remoteInvitationReceived");
        }
    }];
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationRefused:(ARtmRemoteInvitation * _Nonnull)remoteInvitation {
    //拒绝呼叫邀请成功
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationAccepted:(ARtmRemoteInvitation * _Nonnull)remoteInvitation {
    //接受呼叫邀请成功
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationCanceled:(ARtmRemoteInvitation * _Nonnull)remoteInvitation {
    //主叫已取消呼叫邀请
    [ARCallCommon showInfoWithStatus:ARtmRemoteCanceledInvitation];
    if ([self.callerId isEqualToString:remoteInvitation.callerId]) {
        [self endCall:ARtmRemoteCanceledInvitation];
    }
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationFailure:(ARtmRemoteInvitation * _Nonnull)remoteInvitation errorCode:(ARtmRemoteInvitationErrorCode) errorCode {
    //来自对端的邀请失败
}

//MARK: - ARtcEngineDelegate

- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine firstRemoteVideoDecodedOfUid:(NSString *_Nonnull)uid size:(CGSize)size elapsed:(NSInteger)elapsed {
    //已完成远端视频首帧解码回调
    ARtcVideoCanvas *videoCanvas = [[ARtcVideoCanvas alloc] init];
    videoCanvas.uid = uid;
    videoCanvas.view = self.remoteView;
    //初始化远端用户视图
    [self.rtcKit setupRemoteVideo:videoCanvas];
    self.remoteView.placeholderView.hidden = YES;
}

- (void)rtcEngine:(ARtcEngineKit *)engine didJoinedOfUid:(NSString *)uid elapsed:(NSInteger)elapsed {
    //远端用户/主播加入回调
    [ARCallCommon playMusic:NO];
    @weakify(self);
    [self.rtmTimer creatGCDTimer:0 withTarget:self response:^(NSInteger index) {
        @strongify(self);
        self.timeLabel.text = [ARCallCommon getMMSSFromSS:[NSString stringWithFormat:@"%ld",(long)index]];
        if (self.callMinimize && self.suspensionView) {
            [self.suspensionView.titleButton setTitle:self.timeLabel.text forState:UIControlStateNormal];
        }
    }];
}
- (void)rtcEngineConnectionDidInterrupted:(ARtcEngineKit *)engine {
      [self endCall:@"网络连接已断开"];
}
- (void)rtcEngine:(ARtcEngineKit *)engine didOfflineOfUid:(NSString *)uid reason:(ARUserOfflineReason)reason {
    //远端用户（通信场景）/主播（直播场景）离开当前频道回调
    [self endCall:ARtmCallStop];
}

//MARK: - other

- (void)switchCallMode:(int)mode {
    self.toolView.hidden = NO;
    self.callView.hidden = YES;
    self.hangupButton.hidden = NO;
    //0视频 1语音
    self.switchButton.hidden = mode;
    self.switchCameraButton.hidden = mode;
    self.audioButton.hidden = !mode;
    self.speakerButton.hidden = !mode;
    self.backView.hidden = !mode;
}

- (void)switchVideoSize {
    UIWindow *window;
    self.callMinimize ? ( window = UIApplication.sharedApplication.delegate.window) : (window = ARtmManager.rtmWindow);
    if ([self.localView.superview isKindOfClass:[UIWindow class]]) {
        self.localView.dragEnable = NO;
        self.remoteView.dragEnable = YES;
        CGRect rect = self.localView.frame;
        self.localView.frame = self.view.bounds;
        [self.view insertSubview:self.localView atIndex:0];
        self.remoteView.frame = rect;
        [window addSubview:self.remoteView];
    } else {
        self.localView.dragEnable = YES;
        self.remoteView.dragEnable = NO;
        CGRect rect = self.remoteView.frame;
        self.remoteView.frame = self.view.bounds;
        [self.view insertSubview:self.remoteView atIndex:0];
        self.localView.frame = rect;
        [window addSubview:self.localView];
    }
}

- (void)dealloc {
    [NSNotificationCenter.defaultCenter removeObserver:self];
    NSLog(@"CallVc dealloc");
}

- (WMDragView *)localView {
    if (!_localView) {
        @weakify(self);
        _localView = [[WMDragView alloc] init];
        _localView.placeholderView.backgroundColor = RGBA(28, 28, 28, 1);
        _localView.ClickDragViewBlock = ^(WMDragView *dragView) {
            @strongify(self);
            if (self.callMinimize) {
                ARtmManager.rtmWindow.hidden = NO;
                self.callMinimize = NO;
            } else {
                if ([self.localView.superview isKindOfClass:[UIWindow class]]) {
                    [self switchVideoSize];
                } else {
                    self.toolView.hidden = NO;
                }
            }
        };
    }
    return _localView;
}

- (WMDragView *)remoteView {
    if (!_remoteView) {
        _remoteView = [[WMDragView alloc] init];
        _remoteView.placeholderView.hidden = NO;
        @weakify(self);
        _remoteView.ClickDragViewBlock = ^(WMDragView *dragView) {
            @strongify(self);
            if (self.callMinimize) {
                ARtmManager.rtmWindow.hidden = NO;
                [ARtmManager.rtmWindow addSubview:self.remoteView];
                self.callMinimize = NO;
                [self switchVideoSize];
            } else {
                if ([self.remoteView.superview isKindOfClass:[UIWindow class]]) {
                    [self switchVideoSize];
                } else {
                    self.toolView.hidden = NO;
                }
            }
        };
    }
    return _remoteView;
}

@end
