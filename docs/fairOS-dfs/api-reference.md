---
id: api-reference
title: API Reference
---
FairOS-dfs API documentation is given here 

- <a href="../../api/index.html" target="_blank" rel="noopener noreferrer">FairOS-dfs OpenAPI reference.</a>


:::info
User Signup, User Login, Pod Open APIs will return a cookie named 'fairOS-dfs'. This needs to be stored in browsers memory and should be sent in every API request thereafter. 
:::

FairOS-dfs exposes its functionality using REST APIs. There are five groups of APIs
### User Related APIs
#### APIs that will work without user login
- curl 'http://localhost:9090/v2/user/signup' -H 'Content-Type: application/json' -d '{"userName":"<username\>","password":"<password\>","mnemonic":"<12 words from bip39 list>"}'
- ~~curl 'http://localhost:9090/v1/user/signup' -H 'Content-Type: application/json' -d '{"userName":"<username\>","password":"<password\>"}'~~
- ~~curl 'http://localhost:9090/v1/user/login' -H 'Content-Type: application/json' -d '{"userName":"<username\>","password":"<password\>"}' -v~~
- curl 'http://localhost:9090/v2/user/login' -H 'Content-Type: application/json' -d '{"userName":"<username\>","password":"<password\>"}' -v
- curl 'http://localhost:9090/v1/user/isloggedin?userName=<username\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- ~~curl --request GET 'http://localhost:9090/v1/user/present?userName=<username\>'~~
- curl --request GET 'http://localhost:9090/v2/user/present?userName=<username\>'

#### User should be logged in for these APIs to work
- curl --request POST 'http://localhost:9090/v1/user/logout' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- ~~curl --request POST 'http://localhost:9090/v1/user/export' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'~~
- ~~curl --request DELETE 'http://localhost:9090/v1/user/delete' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>' --header 'Content-Type: application/json' --data-raw '{"password": "<password\>"}'~~
- curl --request DELETE 'http://localhost:9090/v2/user/delete' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>' --header 'Content-Type: application/json' --data-raw '{"password": "<password\>"}'
- curl --request GET 'http://localhost:9090/v1/user/stat' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v2/user/migrate' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>' --header 'Content-Type: application/json' --data-raw '{"password": "<password\>"}'

### Pod Related APIs
- curl --request POST 'http://localhost:9090/v1/pod/new' -H 'Content-Type: application/json' -d '{"podName":"<podName\>","password":"<password\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/pod/open' -H 'Content-Type: application/json' -d '{"podName":"<podName\>","password":"<password\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/pod/sync' -H 'Content-Type: application/json' -d '{"podName":"<podName\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/pod/close' -H 'Content-Type: application/json' -d '{"podName":"<podName\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/pod/share' -H 'Content-Type: application/json' -d '{"podName":"<podName\>","password":"<password\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE 'http://localhost:9090/v1/pod/delete' -X DELETE -H 'Content-Type: application/json' -d '{"podName":"<pod name\>","password":"<password\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/pod/ls' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/pod/stat?podName=<podName\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/pod/present?podName=<podName\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/pod/receive?reference=<string\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/pod/receiveinfo?reference=<string\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'

### File System Related APIs
#### Directory APIs
- curl --request POST 'http://localhost:9090/v1/dir/mkdir' --header 'Content-Type: application/json' --data-raw '{"dirPath": "<dir_with_path\>","podName": "<podName\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE 'http://localhost:9090/v1/dir/rmdir' --header 'Content-Type: application/json' --data-raw '{"dirPath": "<dir_with_path\>","podName": "<podName\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/dir/ls?podName=<podName\>&dirPath=<dir_with_path\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/dir/stat?podName=<podName\>&dirPath=<dir_with_path\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/dir/present?podName=<podName\>&dirPath=<dir_with_path\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'

#### File APIs
- curl --request POST -H "fairOS-dfs-Compression: snappy/gzip" --form 'dirPath=<dir_with_path\>' --form 'podName=<podName\>' --form 'block_size=\<in_Mb\>' --form 'files=@\<filename1\>' http://localhost:9090/v1/file/upload --header 'Content-Type: multipart/form-data' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'(compression header optional)
- curl --request POST --form 'filePath="<filePath\>"' --form 'podName="<podName\>"'  http://localhost:9090/v1/file/download -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>' --header 'Content-Type: multipart/form-data'
- curl --request POST 'http://localhost:9090/v1/file/share' http://localhost:9090/v1/file/share -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>' --header 'Content-Type: application/json' --data-raw '{"podName": "<podName\>","pod_path_file": "<filePath\>","dest_user": "<destination_user_address\>"}'
- curl --request GET 'http://localhost:9090/v1/file/stat?filePath=<filePath\>&podName=<podName\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE http://localhost:9090/v1/file/delete --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>' --data-raw '{"podName": "<podName\>","filePath": "<filePath\>"}'
  curl --request GET 'http://localhost:9090/v1/file/receive?podName=<podName\>&sharingRef=<string\>&dirPath=<filePath\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
  curl --request GET 'http://localhost:9090/v1/file/receiveinfo?podName=<podName\>&sharingRef=<string\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
  
### Key Value DB Related APIs
- curl --request POST http://localhost:9090/v1/kv/new --data-raw '{"podName": "<podName\>","tableName": "<tableName\>","indexType": "string"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST http://localhost:9090/v1/kv/open --data-raw '{"podName": "<podName\>","tableName": "<tableName\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST http://localhost:9090/v1/kv/count --data-raw '{"podName": "<podName\>","tableName": "<tableName\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET http://localhost:9090/v1/kv/ls?podName=<podName\> -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE http://localhost:9090/v1/kv/delete --data-raw '{"podName": "<podName\>","tableName": "<tableName\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST http://localhost:9090/v1/kv/entry/put --data-raw '{"podName": "<podName\>","tableName": "<tableName\>","key": "<key\>","value": "string"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/kv/entry/get?podName=<podName\>&tableName=<tableName\>&key=<key\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE 'http://localhost:9090/v1/kv/entry/del' --data-raw '{"podName": "<podName\>","tableName": "<tableName\>","key": "<key\>","value": "string"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/kv/loadcsv' --form 'podName="<podName\>"' --form 'tableName="<tableName\>"' --form 'csv=@"<csv_file_location\>"' --header 'Content-Type: multipart/form-data' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/kv/seek' --data-raw '{"podName": "pod1005","tableName": "tea_table26","start_prefix": "key_1"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/kv/seek/next?podName=<podName\>&tableName=<tableName\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'

### Document DB Related APIs
- curl --request POST 'http://localhost:9090/v1/doc/new' --data-raw '{"podName": "<podName\>","tableName": "<tableName\>","si": "first_name=string,age=number","mutable": true }' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/doc/open' --data-raw '{"podName": "<podName\>","tableName": "<tableName\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/doc/count' --data-raw '{"podName": "<podName\>","tableName": "<tableName\>","expr": "<expression\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/doc/find?podName=<podName\>&tableName=<tableName\>&expr=<expression\>&limit=<number\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/doc/ls?podName=<podName\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE 'http://localhost:9090/v1/doc/delete' --data-raw '{"podName": "<podName\>","tableName": "<tableName\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/doc/entry/put' -data-raw '{"podName": "<podName\>","tableName": "<tableName\>","doc": "<string\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/doc/entry/get?podName=<podName\>&tableName=<tableName\>&id=<_id\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE 'http://localhost:9090/v1/doc/entry/del' --data-raw '{"podName": "<podName\>","tableName": "<tableName\>","id": "<_id\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/doc/loadjson' --form 'podName="<podName\>"' --form 'tableName="<tableName\>"' --form 'json=@"<json_file_location\>"' --header 'Content-Type: multipart/form-data' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/doc/indexjson' --data-raw '{"podName": "<podName\>","tableName": "<tableName\>","file": "<json_path_in_pod\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
