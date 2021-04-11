//
//  CalendarManager.m
//  demo
//
//  Created by wangmingjie on 2021/4/11.
//

#import <Foundation/Foundation.h>
#import "UMengSMSPlugin.h"
#import <React/RCTConvert.h>
#import <React/RCTEventDispatcher.h>
#import <UMSMS/UMSMS.h>

@implementation UMengSMSPlugin

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getVerificationCode:(NSString * _Nonnull)number emplateID:(NSString * _Nullable)templateID successCallback:(RCTResponseSenderBlock)successCallback failCallback:(RCTResponseSenderBlock) failCallback)
{
  [UMSMS getVerificationCodeWithPhoneNumber:number templateID:templateID complete:^(NSDictionary * _Nonnull resultDic) {
    if ([resultDic[@"success"] boolValue]==true) {
      successCallback(resultDic);
    }else{
      failCallback(resultDic);
    }
  }];
}

RCT_EXPORT_METHOD(commitVerificationCode:(NSString * _Nonnull)number vCode:(NSString * _Nullable)vCode successCallback:(RCTResponseSenderBlock)successCallback failCallback:(RCTResponseSenderBlock) failCallback)
{
  [UMSMS commitWithPhoneNumber:number vCode:vCode complete:^(NSDictionary * _Nonnull resultDic) {
    if (![resultDic[@"data"] isKindOfClass:[NSNull class]] && [resultDic[@"data"][@"verifyStatus"] boolValue]==true) {
      successCallback(resultDic);
    }else{
      failCallback(resultDic);

    }
  }];
}

@end
