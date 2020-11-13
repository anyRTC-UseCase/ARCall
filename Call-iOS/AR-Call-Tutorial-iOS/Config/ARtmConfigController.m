//
//  ARtmConfigController.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/18.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARtmConfigController.h"
#import "ARtmUserManager.h"

@implementation ARtmConfigMeetCell

@end

@interface ARtmConfigController ()

@property (nonatomic, strong) NSArray *dataArr;
@property (nonatomic, strong) NSArray *configArr;

@end

@implementation ARtmConfigController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.navigationItem.title = @"设置";
    
    UIButton *leftButton = [UIButton buttonWithType:UIButtonTypeCustom];
    leftButton.frame = CGRectMake(0, 0, 30, 30);
    [leftButton setImage:[UIImage imageNamed:@"icon_return"] forState:UIControlStateNormal];
    [leftButton addTarget:self action:@selector(didClickButton:) forControlEvents:UIControlEventTouchUpInside];
    self.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithCustomView:leftButton];
    self.tableView.tableFooterView = [UIView new];
}

- (void)didClickButton:(UIButton *)sender {
    [self dismissViewControllerAnimated:YES completion:nil];
}

#pragma mark - Table view data source

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    return self.dataArr.count;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return 1;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    NSString * identifier;
    (self.type || (indexPath.section == 2)) ? (identifier = @"ARtmMeetCellID") : (identifier = @"ARtmCallCellID");
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:identifier];
    cell.selectionStyle = UITableViewCellSelectionStyleNone;
    ARtmUserInfo *userInfo = [ARtmUserManager fetchUserInfo];
    if (self.type || indexPath.section == 2) {
        ARtmConfigMeetCell *meetCell = (ARtmConfigMeetCell *)cell;
        meetCell.rtmLabel.text = self.dataArr[indexPath.section];
        meetCell.rtmSwitch.tag = indexPath.section;
        [meetCell.rtmSwitch addTarget:self action:@selector(valueChange:) forControlEvents:UIControlEventValueChanged];
        BOOL state = false;
        switch (indexPath.section) {
            case 0:
                state = userInfo.video;
                break;
            case 1:
                state = userInfo.audio;
                break;
            case 2:
                state = userInfo.aiNoise;
                break;
            default:
                break;
        }
        meetCell.rtmSwitch.on = state;
    } else {
        NSString *textInfo;
        (indexPath.section == 0) ? (textInfo = userInfo.dimensions) : (textInfo = [NSString stringWithFormat:@"%ld",(long)userInfo.frameRate]);
        cell.textLabel.text = self.dataArr[indexPath.section];
        cell.detailTextLabel.text = textInfo;
    }
    return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    if (!self.type && indexPath.section != 2) {
        UIAlertController *alertVc = [UIAlertController alertControllerWithTitle:[NSString stringWithFormat:@"请选择%@",self.dataArr[indexPath.row]] message:nil preferredStyle:UIAlertControllerStyleActionSheet];
        NSArray *optionsArr = self.configArr[indexPath.section];
        for (NSInteger i = 0; i < optionsArr.count; i++) {
            UIAlertAction *action = [UIAlertAction actionWithTitle:optionsArr[i] style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
                ARtmUserInfo *userInfo = [ARtmUserManager fetchUserInfo];
                if (indexPath.section == 0) {
                    userInfo.dimensions = action.title;
                } else {
                    userInfo.frameRate = [action.title integerValue];
                }
                [ARtmUserManager saveAccountInformation:userInfo];
                [SVProgressHUD showSuccessWithStatus:@"设置成功"];
                [SVProgressHUD dismissWithDelay:0.8];
                [tableView reloadData];
            }];
            [alertVc addAction:action];
        }
        
        UIAlertAction *action = [UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleCancel handler:nil];
        [alertVc addAction:action];
        [self presentViewController:alertVc animated:YES completion:nil];
    }
}

- (CGFloat)tableView:(UITableView *)tableView heightForHeaderInSection:(NSInteger)section {
    return 0.1;
}

//MARK : - other

- (void)valueChange:(UISwitch *)rtmSwitch {
    ARtmUserInfo *userInfo = [ARtmUserManager fetchUserInfo];
    switch (rtmSwitch.tag) {
        case 0:
            userInfo.audio = rtmSwitch.isOn;
            break;
        case 1:
            userInfo.video = rtmSwitch.isOn;
            break;
        case 2:
            userInfo.aiNoise = rtmSwitch.isOn;
            if (rtmSwitch.tag == 2) {
                BOOL index = false;
                for (UIWindow *window in UIApplication.sharedApplication.windows) {
                    if (window.tag == ARtmWindowIdentifier) {
                        index = true;
                        break;
                    }
                }
                
                if (index) {
                    //降噪开关
                    [NSNotificationCenter.defaultCenter postNotificationName:ARtmCallNoiseNotification object:@{@"noise":[NSNumber numberWithBool:rtmSwitch.isOn]}];
                }
            }
            break;
        default:
            break;
    }
    [ARtmUserManager saveAccountInformation:userInfo];
}

- (NSArray *)dataArr {
    return self.type ? (@[@"开启摄像头",@"开启麦克风",@"AI降噪"]) : (@[@"分辨率",@"帧率",@"AI降噪"]);
}

- (NSArray *)configArr {
    return @[@[@"240*320",@"480*640",@"720*1280"],@[@"24",@"15",@"7"]];
}

@end
