---
id: introduction
title: Introduction
---

![](/img/FairOS-dfs-Architecture.png)

FairOS-dfs is a storage layer built for the [FairOS](/img/fairOS/introduction). It is a stateless thin layer which uses the building blocks provided by Swarm to provide high level functionalities. The above diagram shows the functional blocks of the FairOS-dfs (in green) and its deployment eco-system.


### Use Cases of FairOS-dfs
FairOS-dfs can be used along with Swarm to enable web 3.0 Dapps. Following are some of the use cases that it can be used
- personal data store (like de-centralised dropbox),
- distributed application data store (ex: email app, photo app, content management system, code hub, video app etc.),
- data sharing with everyone over the internet (wikipedia, Open Street Map, Ethereum transactions etc.).


### User
The first step in FairOS-dfs is to create a [portable-account](./portable-account). Every user is associated with a 12 word mnemonic based hd wallet. 
This wallet is encrypted, password protected and stored in Swarm itself. 
The wallet is used to create new key pair whenever it is needed inside the system (ex: when sharing file with another user). 
A user can use this portable-account to login into any fairOS-dfs or fdp-storage based dApp.

### Pod / Logical Drive
A pod is a de-centralised logical drive created by a user in FairOS-dfs. Each pod is associated with a new key pair generated using the user's hd wallet. 
Pods are like containers which can be used to store files/data and related metadata. A pod is always under the control of the user who created it. 
Each Dapp stores the users data in its own pod, so that the user can have separate access control over its data. 
Pod creation is cheap. A user can create multiple pods and use them to organise his data. 
Pods are also used to share large datasets anonymously with other users of the eco-system using a feature called `Public Pods`. 
The owner can update data and any other FairOS-dfs user can read the data. A pod can house a File System / Several DB that is exposed by FairOS-dfs.

Pods are described here in detail : https://github.com/fairDataSociety/FIPs/pull/61

### File System
A pod can host a file system like interface. User/Dapp can create directory and file very similar to a normal file system like ext4/FAT/NTFS. A user can create and store any number of files or directories in a pod. The user can share files in his pod with any other user just like in other centralised drives like dropbox. Not only users, a pod can be used by DApps to store data related to that user.

### Key Value Database
FairOS-dfs also has a Swarm native key value store very similar to levelDB. Dapps can create KV tables, Get, Put or Delete key value pairs. Key is of type string and value is bytes of any length. It also has Seek and Iterate functionalities. See the API-Reference for more details.

### Document Database
FairOS-dfs has a document database muck similar to mongoDB. Dapps can use this schema-less, Swarm native, NoSQL database to store any Json document. Unlike the KV DB, this can have multiple index fields. See the API-Reference for more details.

### Permissions
Every pod has a separate key value pair and can be access controlled. Also when sharing files, it creates a separate KV pair so that the file can be access only by the intended receiver.

### Payments
Swarm has several incentives to keep the network running. Bandwidth and storage space are charged as per the usage. FairOS-dfs will expose these as a per user and per resource interface so that the several users can co-exists on top of one Swarm node. This will also be useful to let the user know which file/data is being charged how much.
