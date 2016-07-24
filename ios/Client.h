//
//  Client.h
//  invoiceProject
//
//  Created by Bo Wang on 9/01/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#define CLIENT_TABLE_NAME @"client"
#define CLIENT_ID @"client_id"
#define CLIENT_NAME @"client_name"
#define CLIENT_ADDRESS @"client_address"
#define CLIENT_CITY @"client_city"
#define CLIENT_STATE @"client_state"
#define CLIENT_ZIP @"client_zip"
#define CLIENT_EMAIL @"client_email"
#define CLIENT_PHONE @"client_phone"

@interface Client : NSObject

@property(nonatomic,retain) NSString * clientId;
@property(nonatomic,retain) NSString * clientName;
@property(nonatomic,retain) NSString * clientAddress;
@property(nonatomic,retain) NSString * clientCity;
@property(nonatomic,retain) NSString * clientState;
@property(nonatomic,retain) NSString * clientZip;
@property(nonatomic,retain) NSString * clientEmail;
@property(nonatomic,retain) NSString * clientPhone;

+(BOOL) saveClient:(Client*) client;
+(BOOL) deleteClient:(Client*)client;
+(BOOL) init;
+(NSMutableArray*) getSavedClients;
@end
