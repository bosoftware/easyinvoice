//
//  Client.m
//  invoiceProject
//
//  Created by Bo Wang on 9/01/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//
#import "Common.h"

#import "Client.h"
#import "FMDatabase.h"

@implementation Client


+(BOOL) init{
  FMDatabase *db = [FMDatabase databaseWithPath:DATABASE_PATH];
  if (![db open]) {
    NSLog(@"error");
    return NO;
  };
  [Client checkTableCreatedInDb:db];
  [db close];
  return YES;
}

+(BOOL)checkTableCreatedInDb:(FMDatabase *)db
{
  NSString *createStr=[NSString stringWithFormat:@"CREATE  TABLE  IF NOT EXISTS '%@' ('%@' integer primary key autoincrement , '%@' VARCHAR, '%@' VARCHAR, '%@' VARCHAR,'%@' VARCHAR, '%@' VARCHAR,'%@' VARCHAR,'%@' VARCHAR)",CLIENT_TABLE_NAME,CLIENT_ID,CLIENT_NAME,CLIENT_EMAIL,CLIENT_PHONE,CLIENT_ADDRESS,CLIENT_CITY,CLIENT_STATE,CLIENT_ZIP];
  
  BOOL worked = [db executeUpdate:createStr];
  return worked;
  
}

+(BOOL) saveClient:(Client*)client{
  FMDatabase *db = [FMDatabase databaseWithPath:DATABASE_PATH];
  if (![db open]) {
    NSLog(@"error");
    return NO;
  };
  
  NSString *sqlStr ;
  if (client.clientId==nil || client.clientId.length==0){
    sqlStr=[NSString stringWithFormat:@"INSERT INTO  %@(%@,%@,%@,%@,%@,%@,%@) VALUES (?, ?,?,?,?,?,?)",CLIENT_TABLE_NAME,CLIENT_NAME,CLIENT_EMAIL,CLIENT_PHONE,CLIENT_ADDRESS,CLIENT_CITY,CLIENT_STATE,CLIENT_ZIP];
  }else{
    sqlStr=[NSString stringWithFormat:@"Update  %@ set %@=?, %@=?,%@=?,%@=?,%@=?,%@=? ,%@ =? where %@=?",CLIENT_TABLE_NAME,CLIENT_NAME,CLIENT_EMAIL,CLIENT_PHONE,CLIENT_ADDRESS,CLIENT_CITY,CLIENT_STATE,CLIENT_ZIP,CLIENT_ID];
  }
  
  
  BOOL worked = [db executeUpdate:sqlStr,client.clientName,client.clientEmail,client.clientPhone,client.clientAddress,client.clientCity,client.clientState,client.clientZip,client.clientId];
  [db close];
  
  
  return worked;
  
}



+(NSMutableArray*) getSavedClients{
  FMDatabase *db = [FMDatabase databaseWithPath:DATABASE_PATH];
  if (![db open]) {
    NSLog(@"error");
    return NO;
  };
  NSMutableArray * rtn = [[NSMutableArray alloc] init];
  FMResultSet *rs=[db executeQuery:[NSString stringWithFormat:@"select * from %@ order by %@ desc",CLIENT_TABLE_NAME,CLIENT_ID]];
  while ([rs next]) {
    Client * client = [[Client alloc]init];
    client.clientId =[rs stringForColumn:CLIENT_ID];
    client.clientName=[rs stringForColumn:CLIENT_NAME];
    client.clientAddress=[rs stringForColumn:CLIENT_ADDRESS];
    client.clientCity=[rs stringForColumn:CLIENT_CITY];
    client.clientEmail=[rs stringForColumn:CLIENT_EMAIL];
    client.clientPhone=[rs stringForColumn:CLIENT_PHONE];
    client.clientState=[rs stringForColumn:CLIENT_STATE];
    client.clientZip=[rs stringForColumn:CLIENT_ZIP];
    [rtn addObject:client];
  }
  [rs close];
  [db close];
  return rtn;
}
@end
