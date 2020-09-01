//
//  ARtmMeetViewController.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/8/20.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARtmMeetViewController.h"
#import "ARVideoView.h"
#import "ARtmInvitationView.h"

@interface ARtmMeetViewController ()<ARtcEngineDelegate,ARtmCallDelegate,ARtmDelegate,ARtmChannelDelegate>

@property (weak, nonatomic) IBOutlet UIView *rtmCallView;
@property (weak, nonatomic) IBOutlet UIView *toolView;
@property (weak, nonatomic) IBOutlet UIView *rtmContentView;
@property (weak, nonatomic) IBOutlet NSLayoutConstraint *rtmPadding;
@property (weak, nonatomic) IBOutlet UILabel *callLabel;
@property (weak, nonatomic) IBOutlet UILabel *timeLabel;
@property (weak, nonatomic) IBOutlet UIButton *audioButton;
@property (weak, nonatomic) IBOutlet UIButton *videoButton;

@property (nonatomic, strong) ARtcEngineKit *rtcKit;
@property (nonatomic, strong) ARtmCallKit *rtmCallKit;
@property (nonatomic, strong) ARtmChannel *rtmChannel;
/* 本地视图 **/
@property (nonatomic, strong) ARVideoView *localView;
/* 多人呼叫id **/
@property (nonatomic, strong) NSMutableArray *rtmCallArr;
/* 多人视图 **/
@property (nonatomic, strong) NSMutableArray *videoArr;
/* 未接通 **/
@property (nonatomic, strong) NSMutableArray *cancleCallArr;
/* 通话时长计时 **/
@property (nonatomic, strong) ARtmTimer *rtmTimer;
/* 悬浮窗 **/
@property (nonatomic, strong) ARtmSuspensionView *suspensionView;
/* 邀请 **/
@property (nonatomic, strong) ARtmInvitationView *invitationView;

@end

@implementation ARtmMeetViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    [[UIApplication sharedApplication].windows.firstObject makeKeyWindow];
    [[UIApplication sharedApplication].windows.firstObject makeKeyAndVisible];
    
    [ARCallCommon playMusic:YES];
    self.rtmCallView.hidden = self.calling;
    self.videoArr = [NSMutableArray array];
    self.rtmCallArr = [NSMutableArray arrayWithArray:self.callArr];
    self.cancleCallArr = [NSMutableArray array];
    
    //rtm 回调
    ARtmManager.rtmKit.aRtmDelegate = self;
    self.rtmCallKit = [ARtmManager.rtmKit getRtmCallKit];
    self.rtmCallKit.callDelegate = self;
    //创建rtm频道
    self.rtmChannel = [ARtmManager.rtmKit createChannelWithId:self.channelId delegate:self];
    [self.rtmChannel joinWithCompletion:^(ARtmJoinChannelErrorCode errorCode) {
        NSLog(@"joinWithCompletion");
    }];
    
    [self makeRtmCall];
    if (self.calling) {
        //主叫初始化rtc
        [self.cancleCallArr addObjectsFromArray:self.rtmCallArr];
        [self initializeRtcKit];
    } else {
        //被叫
        self.callLabel.text = @"";
        for (NSString *callId in self.callArr) {
            self.callLabel.text = [NSString stringWithFormat:@"%@%@ ",self.callLabel.text,callId];
        }
    }
    
    //监听视图
    [self addObserver:self forKeyPath:@"videoArr" options:NSKeyValueObservingOptionNew|NSKeyValueObservingOptionOld context:nil];
}

- (void)initializeRtcKit {
    //===================== rtc 模块 =======================
    ARtmUserInfo *userInfo = [ARtmUserManager fetchUserInfo];
    ARVideoEncoderConfiguration *config = [[ARVideoEncoderConfiguration alloc] init];
    config.dimensions = CGSizeMake(640, 480);
    //实例化ARtcEngineKit对象
    self.rtcKit = [ARtcEngineKit sharedEngineWithAppId:appID delegate:self];
    //分辨率
    config.frameRate = userInfo.frameRate;
    //码率
    config.bitrate = 500;
    //编码方向
    config.orientationMode = ARVideoOutputOrientationModeAdaptative;
    //设置视频编码配置
    [self.rtcKit setVideoEncoderConfiguration:config];
    
    //开启视频模块
    [self.rtcKit enableVideo];
    
    self.localView = [ARVideoView loadVideoView:^{
        NSLog(@"localView");
    }];
    [self.localView.titleButton setTitle:ARtmManager.getLocalUid forState:UIControlStateNormal];
    self.localView.uid = ARtmManager.getLocalUid;
    [self.rtmContentView insertSubview:self.localView atIndex:0];
    [self.videoArr insertObject:self.localView atIndex:0];
    
    //初始化本地视图
    ARtcVideoCanvas *videoCanvas = [[ARtcVideoCanvas alloc] init];
    videoCanvas.uid = [ARtmManager getLocalUid];
    videoCanvas.view = self.localView;
    [self.rtcKit setupLocalVideo:videoCanvas];
    //开启双流模式
    [self.rtcKit enableDualStreamMode:YES];
    [self videoLayout];
    [self.rtcKit joinChannelByToken:nil channelId:self.channelId uid:[ARtmManager getLocalUid] joinSuccess:^(NSString * _Nonnull channel, NSString * _Nonnull uid, NSInteger elapsed) {
        NSLog(@"joinChannelByToken");
    }];
    
    //配置选项
    [self.rtcKit muteLocalAudioStream:!userInfo.audio];
    [self.rtcKit muteLocalVideoStream:!userInfo.video];
    self.videoButton.selected = !userInfo.video;
    self.audioButton.selected = !userInfo.audio;
    self.localView.titleButton.selected = !userInfo.audio;
    self.localView.placeholderView.hidden = userInfo.video;
}

- (void)makeRtmCall {
    //发送呼叫请求
    NSMutableArray * arr = [NSMutableArray arrayWithArray:self.rtmCallArr];
    [arr insertObject:ARtmManager.getLocalUid atIndex:0];
    
    for (NSString *uid in self.rtmCallArr) {
        [self createVideoView:uid];
        if (self.calling) {
            NSDictionary *dic = [[NSDictionary alloc] initWithObjectsAndKeys:[NSNumber numberWithInt:0],@"Mode",[NSNumber numberWithBool:YES],@"Conference",self.channelId,@"ChanId",arr,@"UserData",nil];
            ARtmLocalInvitation *localInvitation = [[ARtmLocalInvitation alloc] initWithCalleeId:uid];
            localInvitation.content = [ARCallCommon returnJSONStringWithDictionary:dic];
            [self.rtmCallKit sendLocalInvitation:localInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
                NSLog(@"sendLocalInvitation errorCode = %ld",(long)errorCode);
            }];
        }
    }
}

- (IBAction)didClickRtmMeetButton:(UIButton *)sender {
    sender.selected = !sender.selected;
    switch (sender.tag) {
        case 50:
        {
            //最小化
            ARtmManager.rtmWindow.hidden = YES;
            @weakify(self);
            self.suspensionView = [ARtmSuspensionView loadSuspensionView:^{
                @strongify(self);
                ARtmManager.rtmWindow.hidden = NO;
                [self.suspensionView removeFromSuperview];
            }];
            NSString *timeTxt;
            (self.timeLabel.text.length != 0) ? (timeTxt = self.timeLabel.text) : (timeTxt = @"等待接听");
            [self.suspensionView.titleButton setTitle:timeTxt forState:UIControlStateNormal];
            [UIApplication.sharedApplication.delegate.window addSubview:self.suspensionView];
        }
            break;
        case 51:
        {
            //邀请
            @weakify(self);
            self.invitationView = [ARtmInvitationView loadInvitationView:^(NSString * _Nonnull uid) {
                @strongify(self);
                [self invitationUser:uid];
            }];
            self.invitationView.callArr = self.rtmCallArr;
            [ARtmManager.rtmWindow addSubview:self.invitationView];
        }
            break;
        case 52:
            //静音
            [self.rtcKit muteLocalAudioStream:sender.selected];
            self.localView.titleButton.selected = sender.selected;
            break;
        case 53:
            //扬声器
            [self.rtcKit setEnableSpeakerphone:!sender.selected];
            break;
        case 54:
            //视频
            [self.rtcKit muteLocalVideoStream:sender.selected];
            self.localView.placeholderView.hidden = !sender.selected;
            break;
        case 55:
        {
            //挂断
            [self endCall];
        }
            break;
        case 56:
            //转换摄像头
            [self.rtcKit switchCamera];
            break;
        case 100:
            //拒绝
            [self.rtmCallKit refuseRemoteInvitation:self.remoteInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
                NSLog(@"refuseRemoteInvitation == %ld",(long)errorCode);
            }];
            [self endCall];
            break;
        case 101:
            //接听
            [ARCallCommon playMusic:NO];
            [self.rtmCallKit acceptRemoteInvitation:self.remoteInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
                NSLog(@"acceptRemoteInvitation == %ld",(long)errorCode);
            }];
            [self initializeRtcKit];
            self.rtmCallView.hidden = YES;
            break;
        default:
            break;
    }
}

- (void)invitationUser:(NSString *)uid {
    //邀请用户
    if (uid.length != 0) {
        @weakify(self);
        [ARtmManager.rtmKit queryPeersOnlineStatus:@[uid] completion:^(NSArray<ARtmPeerOnlineStatus *> * _Nullable peerOnlineStatus, ARtmQueryPeersOnlineErrorCode errorCode) {
            if (peerOnlineStatus.count != 0) {
                @strongify(self);
                ARtmPeerOnlineStatus *onlineStatus = peerOnlineStatus[0];
                if (onlineStatus.state != ARtmPeerOnlineStateOnline) {
                    //不在线
                       NSDictionary *dic = [[NSDictionary alloc] initWithObjectsAndKeys:@"Invitation",@"Cmd",uid,@"UserId",nil];
                       
                       ARtmMessage *message = [[ARtmMessage alloc] initWithText:[ARCallCommon returnJSONStringWithDictionary:dic]];
                       ARtmSendMessageOptions *options = [[ARtmSendMessageOptions alloc] init];
                        [self.rtmChannel sendMessage:message sendMessageOptions:options completion:^(ARtmSendChannelMessageErrorCode errorCode) {
                            NSLog(@"Channel sendMessage Sucess");
                       }];
                }
                
                //邀请
                [self.rtmCallArr addObject:uid];
                [self createVideoView:uid];
                
                //发送呼叫请求
                [self.cancleCallArr addObject:uid];
                NSMutableArray * arr = [NSMutableArray arrayWithArray:self.rtmCallArr];
                [arr insertObject:ARtmManager.getLocalUid atIndex:0];
                NSDictionary *dic = [[NSDictionary alloc] initWithObjectsAndKeys:[NSNumber numberWithInt:0],@"Mode",[NSNumber numberWithBool:YES],@"Conference",self.channelId,@"ChanId",arr,@"UserData",nil];
                ARtmLocalInvitation *localInvitation = [[ARtmLocalInvitation alloc] initWithCalleeId:uid];
                localInvitation.content = [ARCallCommon returnJSONStringWithDictionary:dic];
                [self.rtmCallKit sendLocalInvitation:localInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
                    NSLog(@"sendLocalInvitation errorCode = %ld",(long)errorCode);
                }];
            }
        }];
    }
}

- (void)queryPeersOnlineStatus:(NSArray *)arr {
    //查询指定用户的在线状态
    @weakify(self);
    [ARtmManager.rtmKit queryPeersOnlineStatus:arr completion:^(NSArray<ARtmPeerOnlineStatus *> * _Nullable peerOnlineStatus, ARtmQueryPeersOnlineErrorCode errorCode) {
        @strongify(self);
        for (ARtmPeerOnlineStatus * onlineStatus in peerOnlineStatus) {
            if (onlineStatus.state != ARtmPeerOnlineStateOnline) {
                //开启60s倒计时
                [self.videoArr enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
                    ARVideoView *videoView = (ARVideoView *)obj;
                    if ([videoView.uid isEqualToString:onlineStatus.peerId]) {
                        [videoView startCountdown];
                    }
                }];
            }
        }
    }];
}

- (void)videoLayout {
    NSUInteger count = self.videoArr.count;
    CGFloat column = 2.0;
    NSInteger rate = 1;
    
    if (count > 4) {
        if (count <= 9) {
            column = 3;  // 3*3
        } else if (count > 9 && count <= 16) {
            column = 4;  // 4*4
        } else if (count > 16) {
            column = 5;
        }
    }
    
    CGFloat video_width = SCREEN_WIDTH/column;
    CGFloat video_height = video_width * rate;
    NSInteger index = ceil(self.videoArr.count/column);
    self.rtmPadding.constant =  video_height * index;
    [ARCallCommon makeEqualViews:self.videoArr inView:self.rtmContentView ItemWidth:video_width itemHeight:video_height warpCount:column];
}

- (void)createVideoView:(NSString *)uid {
    @weakify(self);
    ARVideoView *remoteView = [ARVideoView loadVideoView:^{
        @strongify(self);
        [self.videoArr enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
            ARVideoView *videoView = (ARVideoView *)obj;
            if ([videoView.uid isEqualToString:uid]) {
                [[self mutableArrayValueForKey:@"videoArr"] removeObject:videoView];
                [self videoLayout];
                *stop = YES;
            }
        }];
        [self.rtmCallArr removeObject:uid];
        self.invitationView ? (self.invitationView.callArr = self.rtmCallArr) : 0;
        
    }];
    [remoteView.titleButton setTitle:uid forState:UIControlStateNormal];
    remoteView.uid = uid;
    [self.rtmContentView insertSubview:remoteView atIndex:0];
    [self.videoArr addObject:remoteView];
    [self videoLayout];
    [self queryPeersOnlineStatus:@[uid]];
}

- (void)endCall {
    [ARCallCommon playMusic:NO];
    for (NSString *uid in self.cancleCallArr) {
        //未接通的取消呼叫邀请
        ARtmLocalInvitation *localInvitation = [[ARtmLocalInvitation alloc] initWithCalleeId:uid];
        [self.rtmCallKit cancelLocalInvitation:localInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
            NSLog(@"cancelLocalInvitation");
        }];
    }
    
    for (ARVideoView *videoView in self.videoArr) {
        //移除60s定时器
        [videoView endCountdown];
    }
    
    //离开频道
    [self.rtmChannel leaveWithCompletion:nil];
    //释放rtm频道资源
    [ARtmManager.rtmKit destroyChannelWithId:self.channelId];
    
    ARtmManager.rtmKit.aRtmDelegate = nil;
    self.rtmCallKit.callDelegate = nil;
    [self.suspensionView removeFromSuperview];
    
    if (self.rtcKit) {
        //离开频道，释放rtc资源
        [self.rtcKit leaveChannel:nil];
        [ARtcEngineKit destroy];
    }
    
    [ARCallCommon showInfoWithStatus:ARtmCallStop];
    [NSNotificationCenter.defaultCenter postNotificationName:ARtmCallEndNotification object:nil];
    [self removeObserver:self forKeyPath:@"videoArr"];
    [ARtmManager dismissWindow];
}

-(void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary<NSKeyValueChangeKey,id> *)change context:(void *)context {
    if ((self.videoArr.count == 1 && [self.videoArr containsObject:self.localView]) || (self.videoArr.count == 0)) {
        [self endCall];
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
    [ARCallCommon playMusic:NO];
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationRefused:(ARtmLocalInvitation * _Nonnull)localInvitation withResponse:(NSString * _Nullable) response {
    //被叫已拒绝呼叫邀请
    NSLog(@"localInvitationRefused");
    [self.videoArr enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        ARVideoView *videoView = (ARVideoView *)obj;
        if ([videoView.uid isEqualToString:localInvitation.calleeId]) {
            [[self mutableArrayValueForKey:@"videoArr"] removeObject:videoView];
            [videoView removeFromSuperview];
            [self videoLayout];
            *stop = YES;
        }
    }];
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationCanceled:(ARtmLocalInvitation * _Nonnull)localInvitation {
    //呼叫邀请已被取消
    NSLog(@"%@",ARtmCanceledInvitation);
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit localInvitationFailure:(ARtmLocalInvitation * _Nonnull)localInvitation errorCode:(ARtmLocalInvitationErrorCode)errorCode {
    //呼叫邀请发送失败
    NSLog(@"localInvitationFailure");
    [self.videoArr enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        ARVideoView *videoView = (ARVideoView *)obj;
        if ([videoView.uid isEqualToString:localInvitation.calleeId]) {
            if (errorCode == ARtmLocalInvitationErrorRemoteOffline) {
                videoView.offline = YES;
            } else {
                [[self mutableArrayValueForKey:@"videoArr"] removeObject:videoView];
                [videoView removeFromSuperview];
                [self videoLayout];
            }
            *stop = YES;
        }
    }];
    [self.rtmCallArr removeObject:localInvitation.calleeId];
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationReceived:(ARtmRemoteInvitation * _Nonnull)remoteInvitation {
    //收到一个呼叫邀请
    NSDictionary *dic = [[NSDictionary alloc] initWithObjectsAndKeys:@"Calling",@"Cmd",nil];
    remoteInvitation.response = [ARCallCommon returnJSONStringWithDictionary:dic];
    //通话中收到一个新的呼叫请求
    [self.rtmCallKit refuseRemoteInvitation:remoteInvitation completion:^(ARtmInvitationApiCallErrorCode errorCode) {
        if (errorCode == ARtmInvitationApiCallErrorOk) {
            NSLog(@"remoteInvitationReceived");
        }
    }];
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
    NSLog(@"%@",ARtmRemoteCanceledInvitation);
}

- (void)rtmCallKit:(ARtmCallKit * _Nonnull)callKit remoteInvitationFailure:(ARtmRemoteInvitation * _Nonnull)remoteInvitation errorCode:(ARtmRemoteInvitationErrorCode) errorCode {
    //来自对端的邀请失败
}

//MARK: - ARtmChannelDelegate

- (void)channel:(ARtmChannel * _Nonnull)channel memberJoined:(ARtmMember * _Nonnull)member {
    //远端用户加入频道回调
    NSLog(@"memberJoined uid == %@",member.uid);
    if (![self.rtmCallArr containsObject:member.uid]) {
        [self.rtmCallArr addObject:member.uid];
        [self createVideoView:member.uid];
    }
}

- (void)channel:(ARtmChannel * _Nonnull)channel memberLeft:(ARtmMember * _Nonnull)member {
    //频道成员离开频道回调
    NSLog(@"memberLeft");
    [self.videoArr enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        ARVideoView *videoView = (ARVideoView *)obj;
        if ([videoView.uid isEqualToString:member.uid]) {
            [[self mutableArrayValueForKey:@"videoArr"] removeObject:videoView];
            [videoView removeFromSuperview];
            [self videoLayout];
            *stop = YES;
        }
    }];
    [self.rtmCallArr removeObject:member.uid];
    [self.cancleCallArr removeObject:member.uid];
}

- (void)channel:(ARtmChannel * _Nonnull)channel messageReceived:(ARtmMessage * _Nonnull)message fromMember:(ARtmMember * _Nonnull)member {
    //收到频道消息回调
    if (message.text.length != 0) {
        NSDictionary *dic = [ARCallCommon dictionaryWithJSONString:message.text];
        NSString *value = [dic objectForKey:@"Cmd"];
        if ([value isEqualToString:@"Invitation"]) {
            NSString *uid = [dic objectForKey:@"UserId"];
            if (uid.length != 0) {
                [self.rtmCallArr addObject:uid];
                [self createVideoView:uid];
            }
        }
    }
}

//MARK: - ARtcEngineDelegate

- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine firstRemoteVideoDecodedOfUid:(NSString *_Nonnull)uid size:(CGSize)size elapsed:(NSInteger)elapsed {
    //已完成远端视频首帧解码回调
    [self.videoArr enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        ARVideoView *videoView = (ARVideoView *)obj;
        if ([videoView.uid isEqualToString:uid]) {
            videoView.placeholderView.hidden = YES;
            ARtcVideoCanvas *videoCanvas = [[ARtcVideoCanvas alloc] init];
            videoCanvas.uid = uid;
            videoCanvas.view = videoView;
            [self.rtcKit setupRemoteVideo:videoCanvas];
            //设置订阅的视频流类型
            [self.rtcKit setRemoteVideoStream:uid type:ARVideoStreamTypeLow];
            *stop = YES;
        }
    }];
}

- (void)rtcEngine:(ARtcEngineKit *)engine didJoinedOfUid:(NSString *)uid elapsed:(NSInteger)elapsed {
    //远端用户/主播加入回调
    [self.cancleCallArr removeObject:uid];
    [ARCallCommon playMusic:NO];
    [self.videoArr enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        ARVideoView *videoView = (ARVideoView *)obj;
        if ([videoView.uid isEqualToString:uid]) {
            videoView.loadingView.hidden = YES;
            [videoView endCountdown];
            *stop = YES;
        }
    }];
    
    if (!self.rtmTimer) {
        //计时器
        @weakify(self);
        self.rtmTimer = [[ARtmTimer alloc] init];
        [self.rtmTimer creatGCDTimer:0 withTarget:self response:^(NSInteger index) {
            @strongify(self);
            self.timeLabel.text = [ARCallCommon getMMSSFromSS:[NSString stringWithFormat:@"%ld",(long)index]];
            if (self.suspensionView) {
                [self.suspensionView.titleButton setTitle:self.timeLabel.text forState:UIControlStateNormal];
            }
        }];
    }
}

- (void)rtcEngine:(ARtcEngineKit *)engine didOfflineOfUid:(NSString *)uid reason:(ARUserOfflineReason)reason {
    //远端用户（通信场景）/主播（直播场景）离开当前频道回调
    [self.videoArr enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        ARVideoView *videoView = (ARVideoView *)obj;
        if ([videoView.uid isEqualToString:uid]) {
            [[self mutableArrayValueForKey:@"videoArr"] removeObject:videoView];
            [videoView removeFromSuperview];
            [self videoLayout];
            *stop = YES;
        }
    }];
}

- (void)rtcEngine:(ARtcEngineKit *_Nonnull)engine remoteVideoStateChangedOfUid:(NSString *_Nonnull)uid state:(ARVideoRemoteState)state reason:(ARVideoRemoteStateReason)reason elapsed:(NSInteger)elapsed {
    //远端视频状态发生改变回调
    [self.videoArr enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        ARVideoView *videoView = (ARVideoView *)obj;
        if ([videoView.uid isEqualToString:uid]) {
            if (reason == ARVideoRemoteStateReasonRemoteMuted) {
                videoView.placeholderView.hidden = NO;
            } else if (reason == ARVideoRemoteStateReasonRemoteUnmuted) {
                videoView.placeholderView.hidden = YES;
            }
        }
    }];
}

- (void)rtcEngine:(ARtcEngineKit *)engine firstRemoteAudioFrameOfUid:(NSString *)uid elapsed:(NSInteger)elapsed {
    //sip
    [ARCallCommon playMusic:NO];
    [self.videoArr enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        ARVideoView *videoView = (ARVideoView *)obj;
        NSLog(@"videoView == %@ uid == %@",videoView.uid,uid);
        if ([videoView.uid isEqualToString:uid]) {
            videoView.loadingView.hidden = YES;
            *stop = YES;
        }
    }];
}

- (void)rtcEngine:(ARtcEngineKit *)engine remoteAudioStateChangedOfUid:(NSString *)uid state:(ARAudioRemoteState)state reason:(ARAudioRemoteStateReason)reason elapsed:(NSInteger)elapsed {
    //本地音频状态改变
    [self.videoArr enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        ARVideoView *videoView = (ARVideoView *)obj;
        if ([videoView.uid isEqualToString:uid]) {
            if (reason == ARAudioRemoteReasonRemoteMuted) {
                videoView.titleButton.selected = YES;
            } else if (reason == ARAudioRemoteReasonRemoteUnmuted) {
                videoView.titleButton.selected = NO;
            }
        }
    }];
}

//MARK: - other

- (UIStatusBarStyle)preferredStatusBarStyle {
    return UIStatusBarStyleLightContent;
}

- (void)dealloc {
    NSLog(@"Meet dealloc");
}



@end
