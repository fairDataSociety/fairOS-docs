---
id: cli-reference
title: REPL client
---

### REPL Commands in dfs-cli
**dfs-cli >>>** <command\> (argument) where, <command\> is listed below
##### user related commands
- user <new\> (user-name) - create a new user and login as that user
- user <del\> (user-name) - deletes a already created user
- user <login\> (user-name) - login as a given user
- user <logout\> (user-name) - logout as user
- user <name\> (first_name) (middle_name) (last_name) (surname) - sets the user name information
- user <name\> - gets the user name information
- user <contact\> (phone) (mobile) (address_line1) (address_line2) (state) (zipcode) - sets the user contact information
- user <contact\> gets the user contact information
- user <share\> \<inbox\> - shows details of the files you have received from other users
- user <share\> \<outbox\> - shows details of the files you have sent to other users
- user <export\> - exports the given user
- user <import\> (user-name) (address) - imports the user to another device
- user <import\> (user-name) (12 word mnemonic) - imports the user if the device is lost"
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
- cd <directory name\>
- ls 
- download <source file in pod, destination directory in local fs\>
- upload <source file in local fs, destination directory in pod, block size in MB\>
- mkdir <directory name\>
- rmdir <directory name\>
- rm <file name\>
- pwd - show present working directory
- stat <file name or directory name\> - shows the information about a file or directory
- share <file name\> -  shares a file with another user
- receive <sharing reference\> \<pod dir\> - receives a file from another user
- receiveinfo <sharing reference\> - shows the received file info before accepting the receive 
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

