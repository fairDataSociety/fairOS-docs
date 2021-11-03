---
id: api-reference
title: API Reference
---
FairOS-dfs API documentation is given here 

- <a href="../../api" target="_blank" rel="noopener noreferrer">FairOS-dfs OpenAPI reference.</a>


:::info
User Signup, User Login, Pod Open APIs will return a cookie named 'fairOS-dfs'. This needs to be stored in browsers memory and should be sent in every API request thereafter. 
:::

FairOS-dfs exposes its functionality using REST APIs. There are five groups of APIs
### User Related APIs
#### APIs that will work without user login
- curl 'http://localhost:9090/v1/user/signup' -H 'Content-Type: application/json' -d '{"user_name":"<username\>","password":"<password\>","mnemonic":"<12 words from bip39 list>"}'
- curl 'http://localhost:9090/v1/user/signup' -H 'Content-Type: application/json' -d '{"user_name":"<username\>","password":"<password\>"}'
- curl 'http://localhost:9090/v1/user/login' -H 'Content-Type: application/json' -d '{"user_name":"<username\>","password":"<password\>"}'
- curl 'http://localhost:9090/v1/user/import' -H 'Content-Type: application/json' -d '{"user_name":"<username\>","password":"<password\>","mnemonic":"<12 words from bip39 list>"}'
- curl 'http://localhost:9090/v1/user/import' -H 'Content-Type: application/json' -d '{"user_name":"<username\>","password":"<password\>","address":"<address\>"}'
- curl 'http://localhost:9090/v1/user/isloggedin?user_name=<username\>' -H 'Cookie: fairOS-dfs=<DFS cookie from user/login method>'


#### User should be logged in for these APIs to work
- curl 'http://localhost:9090/v1/user/logout' -X 'POST' -H 'Cookie: fairOS-dfs=<DFS cookie from user/login method>'
- curl 'http://localhost:9090/v1/user/export' -X 'POST' -H 'Cookie: fairOS-dfs=<DFS cookie from user/login method>'
- curl 'http://localhost:9090/v1/user/delete' -X 'DELETE' -H 'Cookie: fairOS-dfs=<DFS cookie from user/login method>' -H 'Content-Type: application/json' -d '{"password":"<password\>"}'
- curl 'http://localhost:9090/v1/user/stat' -H 'Cookie: fairOS-dfs=<DFS cookie from user/login method>'

### Pod Related APIs
- curl 'http://localhost:9090/v1/pod/new' -H 'Content-Type: application/json' -d '{"pod_name":"<pod name\>","password":"<password\>"}' -H 'Cookie: fairOS-dfs=<DFS cookie from user/login method>'
- curl 'http://localhost:9090/v1/pod/open' -H 'Content-Type: application/json' -d '{"pod_name":"<pod name\>","password":"<password\>"}' -H 'Cookie: fairOS-dfs=<DFS cookie from user/login method>'
- curl 'http://localhost:9090/v1/pod/sync' -H 'Content-Type: application/json' -d '{"pod_name":"<pod name\>"}' -H 'Cookie: fairOS-dfs=<DFS cookie from user/login method>'
- curl 'http://localhost:9090/v1/pod/close' -H 'Content-Type: application/json' -d '{"pod_name":"<pod name\>"}' -H 'Cookie: fairOS-dfs=<DFS cookie from user/login method>'
- curl 'http://localhost:9090/v1/pod/delete' -X DELETE -H 'Content-Type: application/json' -d '{"pod_name":"<pod name\>"}' -H 'Cookie: fairOS-dfs=<DFS cookie from user/login method>'
- curl 'http://localhost:9090/v1/pod/ls' -H 'Cookie: fairOS-dfs=<DFS cookie from user/login method>'
- curl 'http://localhost:9090/v1/pod/stat?pod_name=<pod_name>' -H 'Cookie: fairOS-dfs=<DFS cookie from user/login method>'

### File System Related APIs
#### Directory APIs
- POST -F 'dir=\<dir_with_path\>'  http://localhost:9090/v1/dir/mkdir
- DELETE -F 'dir=\<dir_with_path\>'  http://localhost:9090/v1/dir/rmdir
- GET -F 'dir=\<dir_with_path\>'  http://localhost:9090/v1/dir/ls
- GET -F 'dir=\<dir_with_path\>'  http://localhost:9090/v1/dir/stat

#### File APIs
- POST -F -H "fairOS-dfs-Compression: snappy/gzip" 'pod_dir=\<dir_with_path\>' -F 'block_size=\<in_Mb\>' -F 'files=@\<filename1\>' -F 'files=@\<filename2\>' http://localhost:9090/v1/file/upload  (compression header optional)
- POST -F 'file=\<file_path\>'  http://localhost:9090/v1/file/download
- POST -F 'file=\<file_path\>' -F 'to=\<destination_user_address\>' http://localhost:9090/v1/file/share
- POST -F 'ref=\<sharing_reference\>' -F 'dir=\<pod_dir_to_store_file\>' http://localhost:9090/v1/file/share/receive
- POST -F 'ref=\<sharing_reference\>' http://localhost:9090/v1/file/share/receiveinfo
- GET  -F 'file=\<file_path\>'  http://localhost:9090/v1/file/stat
- DELETE -F 'file=\<file_path\>'  http://localhost:9090/v1/file/delete

### Key Value DB Related APIs
- POST -F 'file=\<kv table name\>' http://localhost:9090/v1/kv/new
- POST -F 'file=\<kv table name\>' http://localhost:9090/v1/kv/open
- POST -F 'file=\<kv table name\>' http://localhost:9090/v1/kv/count
- POST http://localhost:9090/v1/kv/ls
- DELETE -F 'file=\<kv table name\>' http://localhost:9090/v1/kv/delete
- POST -F 'file=\<kv table name\>' -F 'key=\<key\>' -F 'value=\<bytes\>' http://localhost:9090/v1/kv/entry/put
- GET -F 'file=\<kv table name\>' -F 'key=\<key\>' http://localhost:9090/v1/kv/entry/get
- DELETE -F 'file=\<kv table name\>' -F 'key=\<key\>' http://localhost:9090/v1/kv/entry/del
- POST -F 'file=\<kv table name\>' -F 'csv=@\<csv_file\>' http://localhost:9090/v1/kv/loadcsv
- POST -F 'file=\<kv table name\>' -F 'start=\<start_prefix\>' -F 'end=\<end\>' -F 'limit=\<no of records\>' http://localhost:9090/v1/kv/seek
- GET -F 'file=\<nkv table ame\>' http://localhost:9090/v1/kv/seek/getnext

### Document DB Related APIs
- POST -F 'name=\<document table name\>' http://localhost:9090/v1/doc/new
- POST -F 'name=\<document table name\>' http://localhost:9090/v1/doc/open
- POST -F 'name=\<tdocument able name\>' -F 'expr=\<expression\>' http://localhost:9090/v1/doc/count
- POST -F 'name=\<document table name\>' -F 'expr=\<expression\>' -F 'limit=\<no of records\>' http://localhost:9090/v1/doc/find
- POST http://localhost:9090/v1/doc/ls
- DELETE -F 'name=\<tdocument able name\>' http://localhost:9090/v1/doc/delete
- POST -F 'name=\<tdocument able name\>' -F 'doc=\<json document in bytes\>' http://localhost:9090/v1/doc/entry/put
- GET -F 'name=\<document table name\>' -F 'id=\<document id\>' http://localhost:9090/v1/doc/entry/get
- DELETE -F 'name=\<document table name\>' -F 'id=\<document id\>' http://localhost:9090/v1/doc/entry/del
- POST -F 'name=\<document table name\>' -F 'json=@\<json_file\>' http://localhost:9090/v1/doc/loadjson
- POST -F 'name=\<document table name\>' -F 'file=\<pod file\>' http://localhost:9090/v1/doc/indexjson
