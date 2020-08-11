//
//  ARtmConfigController.m
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/18.
//  Copyright © 2020 AR. All rights reserved.
//

#import "ARtmConfigController.h"
#import "ARtmUserManager.h"

@interface ARtmConfigController ()

@property (nonatomic, strong) NSArray *dataArr;
@property (nonatomic, strong) NSArray *subArr;

@end

@implementation ARtmConfigController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.navigationItem.title = @"设置";
    self.dataArr = @[@"分辨率",@"帧率"];
    self.subArr = @[@[@"320P",@"480P",@"720P"],@[@"24",@"15",@"7"]];
    
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

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return self.dataArr.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"ARtmConfigCellID"];
    cell.selectionStyle = UITableViewCellSelectionStyleNone;
    cell.textLabel.text = @[@"分辨率",@"帧率"][indexPath.row];
    ARtmUserInfo *userInfo = [ARtmUserManager fetchUserInfo];
    if (indexPath.row == 0) {
        cell.detailTextLabel.text = userInfo.dimensions;
    } else {
        cell.detailTextLabel.text = [NSString stringWithFormat:@"%ld",(long)userInfo.frameRate];
    }
    cell.accessoryType = UITableViewCellAccessoryDisclosureIndicator;
    return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    UIAlertController *alertVc = [UIAlertController alertControllerWithTitle:[NSString stringWithFormat:@"%@设置",self.dataArr[indexPath.row]] message:nil preferredStyle:UIAlertControllerStyleActionSheet];
    NSArray *optionsArr = self.subArr[indexPath.row];
    for (NSInteger i = 0; i < optionsArr.count; i++) {
        UIAlertAction *action = [UIAlertAction actionWithTitle:optionsArr[i] style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
            ARtmUserInfo *userInfo = [ARtmUserManager fetchUserInfo];
            if (indexPath.row == 0) {
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

@end
