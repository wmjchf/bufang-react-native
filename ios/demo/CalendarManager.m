//
//  CalendarManager.m
//  demo
//
//  Created by wangmingjie on 2021/4/11.
//

#import <Foundation/Foundation.h>
#import "CalendarManager.h"
#import <React/RCTConvert.h>
#import <React/RCTEventDispatcher.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(RCTResponseSenderBlock)callback)
{
  NSString *message = @"callback message!!!";
    callback(@[[NSNull null], message]);}

@end
