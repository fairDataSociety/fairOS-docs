---
id: cli-reference
title: REPL client
---

### REPL Commands in dfs-cli
**dfs-cli >>>** <command\> (argument) where, <command\> is listed below
##### user related commands
- user <new\> (user-name) (mnemonic) - create a new user and login as that user
- user <del\> - deletes a logged in user
- user <login\> (user-name) - login as a given user
- user <logout\> - logout a logged in user
- user <present\> (user-name) - returns true if the user is present, false otherwise
- user <stat\> - shows information about a user

##### pod related commands
- pod <new\> (pod-name) - create a new pod and login to that pod
- pod <del\> (pod-name) - deletes a already created pod
- pod <login\> (pod-name) - login to a already created pod
- pod <stat\> (pod-name) - display meta information about a pod
- pod <sync\> (pod-name) - sync the contents of a logged in pod from Swarm
- pod <logout\>  - logout of a logged in pod
- pod <ls\> - lists all the pods created for this account

##### directory & file related commands
- cd <directory name>
- ls 
- download <destination dir in local fs> <relative path of source file in pod>
- upload <source file in local fs> <destination directory in pod> <block size (ex: 1Mb, 64Mb)>, <compression (snappy/gzip)>
- mkdir <directory name>
- rmdir <directory name>
- rm <file name>
- pwd - show present working directory
- stat <file name or directory name> - shows the information about a file or directory
- share <file name> -  shares a file with another user
- receive <sharing reference> <pod dir> - receives a file from another user
- receiveinfo <sharing reference> - shows the received file info before accepting it 

##### Key Value store commands
- kv <new\> (table-name) - create new key value store
- kv <delete\> (table-name) - delete the  key value store
- kv <ls\> - lists all the key value stores
- kv <open\> (table-name) - open already created key value store
- kv <get\> table-name) (key) - get value from key
- kv <put\> (table-name) (key) (value) - put key and value in kv store"
- kv <del\> (table-name) (key) - delete key and value from the store
- kv <loadcsv\> (table-name) (local csv file) - loads the csv file in to kv store
- kv <seek\> (table-name) (start-key) (end-key) (limit) - seek to the given start prefix
- kv <getnext\> (table-name) - get the next element
- kv <count\> (table-name) - number of records in the store

##### Document store commands
- doc <new\> (table-name) (si=indexes) - creates a new document store
- doc <delete\> (table-name) - deletes a document store
- doc <open\> (table-name) - open the document store
- doc <ls\>  - list all document dbs
- doc <count\> (table-name) (expr) - count the docs in the table satisfying the expression
- doc <find\> (table-name) (expr) (limit)- find the docs in the table satisfying the expression and limit
- doc <put\> (table-name) (json) - insert a json document in to document store
- doc <get\> (table-name) (id) - get the document having the id from the store
- doc <del\> (table-name) (id) - delete the document having the id from the store
- doc <loadjson\> (table-name) (local json file) - load the json file in to the newly created document db  
- doc <indexjson\> (table-name) (pod file) - load the json file in pod to the newly created document db 

##### management commands
- help - display this help
- exit - exits from the prompt

