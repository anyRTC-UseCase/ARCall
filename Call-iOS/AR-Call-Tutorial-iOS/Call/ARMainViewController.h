//
//  ARMainViewController.h
//  AR-Call-Tutorial-iOS
//
//  Created by 余生丶 on 2020/7/17.
//  Copyright © 2020 AR. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface ARCollectionViewCell : UICollectionViewCell

@property (weak, nonatomic) IBOutlet UIButton *deleteButton;
@property (weak, nonatomic) IBOutlet UILabel *titleLabel;

@end

@interface ARMainViewController : UIViewController
//0单人，1多人
@property (nonatomic, assign) BOOL type;

@end

NS_ASSUME_NONNULL_END
