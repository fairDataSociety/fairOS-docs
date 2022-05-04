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
- curl 'http://localhost:9090/v2/user/signup' -H 'Content-Type: application/json' -d '{"user_name":"<username\>","password":"<password\>","mnemonic":"<12 words from bip39 list>"}'
- curl 'http://localhost:9090/v1/user/signup' -H 'Content-Type: application/json' -d '{"user_name":"<username\>","password":"<password\>"}'
- curl 'http://localhost:9090/v1/user/login' -H 'Content-Type: application/json' -d '{"user_name":"<username\>","password":"<password\>"}' -v
- curl 'http://localhost:9090/v2/user/login' -H 'Content-Type: application/json' -d '{"user_name":"<username\>","password":"<password\>"}' -v
- curl 'http://localhost:9090/v1/user/isloggedin?user_name=<username\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/user/?user_name=<username\>'
- curl --request GET 'http://localhost:9090/v2/user/present?user_name=<username\>'

#### User should be logged in for these APIs to work
- curl --request POST 'http://localhost:9090/v1/user/logout' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/user/export' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE 'http://localhost:9090/v1/user/delete' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>' --header 'Content-Type: application/json' --data-raw '{"password": "<password\>"}'
- curl --request DELETE 'http://localhost:9090/v2/user/delete' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>' --header 'Content-Type: application/json' --data-raw '{"password": "<password\>"}'
- curl --request GET 'http://localhost:9090/v1/user/stat' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v2/user/migrate' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>' --header 'Content-Type: application/json' --data-raw '{"password": "<password\>"}'

### Pod Related APIs
- curl --request POST 'http://localhost:9090/v1/pod/new' -H 'Content-Type: application/json' -d '{"pod_name":"<pod_name\>","password":"<password\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/pod/open' -H 'Content-Type: application/json' -d '{"pod_name":"<pod_name\>","password":"<password\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/pod/sync' -H 'Content-Type: application/json' -d '{"pod_name":"<pod_name\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/pod/close' -H 'Content-Type: application/json' -d '{"pod_name":"<pod_name\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/pod/share' -H 'Content-Type: application/json' -d '{"pod_name":"<pod_name\>","password":"<password\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE 'http://localhost:9090/v1/pod/delete' -X DELETE -H 'Content-Type: application/json' -d '{"pod_name":"<pod name\>","password":"<password\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/pod/ls' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/pod/stat?pod_name=<pod_name\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/pod/present?pod_name=<pod_name\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/pod/receive?reference=<string\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/pod/receiveinfo?reference=<string\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'

### File System Related APIs
#### Directory APIs
- curl --request POST 'http://localhost:9090/v1/dir/mkdir' --header 'Content-Type: application/json' --data-raw '{"dir_path": "<dir_with_path\>","pod_name": "<pod_name\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE 'http://localhost:9090/v1/dir/rmdir' --header 'Content-Type: application/json' --data-raw '{"dir_path": "<dir_with_path\>","pod_name": "<pod_name\>"}' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/dir/ls?pod_name=<pod_name\>&dir_path=<dir_with_path\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/dir/stat?pod_name=<pod_name\>&dir_path=<dir_with_path\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/dir/present?pod_name=<pod_name\>&dir_path=<dir_with_path\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'

#### File APIs
- curl --request POST -H "fairOS-dfs-Compression: snappy/gzip" --form 'dir_path=<dir_with_path\>' --form 'pod_name=<pod_name\>' --form 'block_size=\<in_Mb\>' --form 'files=@\<filename1\>' http://localhost:9090/v1/file/upload --header 'Content-Type: multipart/form-data' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'(compression header optional)
- curl --request POST --form 'file_path="<file_path\>"' --form 'pod_name="<pod_name\>"'  http://localhost:9090/v1/file/download -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>' --header 'Content-Type: multipart/form-data'
- curl --request POST 'http://localhost:9090/v1/file/share' http://localhost:9090/v1/file/share -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>' --header 'Content-Type: application/json' --data-raw '{"pod_name": "<pod_name\>","pod_path_file": "<file_path\>","dest_user": "<destination_user_address\>"}'
- curl --request GET 'http://localhost:9090/v1/file/stat?file_path=<file_path\>&pod_name=<pod_name\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE http://localhost:9090/v1/file/delete --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>' --data-raw '{"pod_name": "<pod_name\>","file_path": "<file_path\>"}'
  curl --request GET 'http://localhost:9090/v1/file/receive?pod_name=<pod_name\>&sharing_ref=<string\>&dir_path=<file_path\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
  curl --request GET 'http://localhost:9090/v1/file/receiveinfo?pod_name=<pod_name\>&sharing_ref=<string\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
  
### Key Value DB Related APIs
- curl --request POST http://localhost:9090/v1/kv/new --data-raw '{"pod_name": "<pod_name\>","table_name": "<table_name\>","indexType": "string"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST http://localhost:9090/v1/kv/open --data-raw '{"pod_name": "<pod_name\>","table_name": "<table_name\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST http://localhost:9090/v1/kv/count --data-raw '{"pod_name": "<pod_name\>","table_name": "<table_name\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET http://localhost:9090/v1/kv/ls?pod_name=<pod_name\> -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE http://localhost:9090/v1/kv/delete --data-raw '{"pod_name": "<pod_name\>","table_name": "<table_name\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST http://localhost:9090/v1/kv/entry/put --data-raw '{"pod_name": "<pod_name\>","table_name": "<table_name\>","key": "<key\>","value": "string"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/kv/entry/get?pod_name=<pod_name\>&table_name=<table_name\>&key=<key\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE 'http://localhost:9090/v1/kv/entry/del' --data-raw '{"pod_name": "<pod_name\>","table_name": "<table_name\>","key": "<key\>","value": "string"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/kv/loadcsv' --form 'pod_name="<pod_name\>"' --form 'table_name="<table_name\>"' --form 'csv=@"<csv_file_location\>"' --header 'Content-Type: multipart/form-data' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/kv/seek' --data-raw '{"pod_name": "pod1005","table_name": "tea_table26","start_prefix": "key_1"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/kv/seek/next?pod_name=<pod_name\>&table_name=<table_name\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'

### Document DB Related APIs
- curl --request POST 'http://localhost:9090/v1/doc/new' --data-raw '{"pod_name": "<pod_name\>","table_name": "<table_name\>","si": "first_name=string,age=number","mutable": true }' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/doc/open' --data-raw '{"pod_name": "<pod_name\>","table_name": "<table_name\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/doc/count' --data-raw '{"pod_name": "<pod_name\>","table_name": "<table_name\>","expr": "<expression\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/doc/find?pod_name=<pod_name\>&table_name=<table_name\>&expr=<expression\>&limit=<number\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/doc/ls?pod_name=<pod_name\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE 'http://localhost:9090/v1/doc/delete' --data-raw '{"pod_name": "<pod_name\>","table_name": "<table_name\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/doc/entry/put' -data-raw '{"pod_name": "<pod_name\>","table_name": "<table_name\>","doc": "<string\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request GET 'http://localhost:9090/v1/doc/entry/get?pod_name=<pod_name\>&table_name=<table_name\>&id=<_id\>' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request DELETE 'http://localhost:9090/v1/doc/entry/del' --data-raw '{"pod_name": "<pod_name\>","table_name": "<table_name\>","id": "<_id\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/doc/loadjson' --form 'pod_name="<pod_name\>"' --form 'table_name="<table_name\>"' --form 'json=@"<json_file_location\>"' --header 'Content-Type: multipart/form-data' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
- curl --request POST 'http://localhost:9090/v1/doc/indexjson' --data-raw '{"pod_name": "<pod_name\>","table_name": "<table_name\>","file": "<json_path_in_pod\>"}' --header 'Content-Type: application/json' -H 'Cookie: fairOS-dfs=<COOKIE_FROM_LOGIN\>'
