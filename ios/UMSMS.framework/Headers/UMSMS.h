//
//  UMSMS.h
//  UMSMS
//
//  Copyright © 2020 All rights reserved.
//

#import <Foundation/Foundation.h>


@interface UMSMS : NSObject
/**
*  获取当前SDK版本号
*  @return  字符串，sdk版本号
*/
+ (NSString *_Nonnull)getVersion;
/**
*  初始化SDK调用参数，app生命周期内调用一次
*  @param  info app对应的秘钥
*  @param  complete 结果异步回调
*/
+ (void)setSMSSDKInfo:(NSString * _Nonnull)info complete:(void(^_Nullable)(NSDictionary * _Nonnull resultDic))complete;

/**
*  获取验证码
*  @param  number 手机号
*  @param  templateID 模板ID
*  @param  complete 结果异步回调
*/
+ (void)getVerificationCodeWithPhoneNumber:(NSString * _Nonnull)number templateID:(NSString * _Nullable)templateID complete:(void(^_Nullable)(NSDictionary * _Nonnull resultDic))complete;


/**
*  提交验证码
*  @param  number 手机号
*  @param  vCode 验证码
*  @param  complete 结果异步回调
*/
+ (void)commitWithPhoneNumber:(NSString * _Nonnull)number vCode:(NSString * _Nonnull)vCode complete:(void(^_Nullable)(NSDictionary * _Nonnull resultDic))complete;


@end

