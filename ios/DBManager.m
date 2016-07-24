//
//  DBManager.m
//  invoiceProject
//
//  Created by Bo Wang on 16/01/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "DBManager.h"
#import "Client.h"

@implementation DBManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(saveClient:(NSString*) clientId clientName:(NSString *)clientName clientEmail:(NSString *)clientEmail clientPhone:(NSString*)clientPhone clientAddress:(NSString*) clientAddress clientCity:(NSString*)clientCity clientState:(NSString*)clientState clientPostCode:(NSString*)clientPostCode)
{
  Client * client = [[Client alloc]init];
  client.clientId = clientId;
  client.clientName = clientName;
  client.clientEmail=clientEmail;
  client.clientPhone=clientPhone;
  client.clientAddress=clientAddress;
  client.clientCity=clientCity;
  client.clientState=clientState;
  client.clientZip=clientPostCode;
  [Client saveClient:client];
}


RCT_EXPORT_METHOD(getAllClients:(RCTResponseSenderBlock)callback){
  
  NSArray * clients = [Client getSavedClients];
  
  NSMutableArray * rtn = [[NSMutableArray alloc]init];
  
  for (Client * client in clients){
    NSDictionary * dic = @{
                           @"clientId":client.clientId,
                           @"clientName":client.clientName
                           };
    [rtn addObject:dic];
    
  }
  
  callback(@[[NSNull null], rtn]);
  
}
@end
