---
id: architecture
title: Architecture
---

![Architecture](/img/FairOS-Architecture.png)

FairOS has two layers,
- [FairOS-dfs](/docs/fairOS-dfs/introduction), the storage layer,
- [FairOS-compute](/docs/fairOS-compute/introduction), the compute layer.

### FairOS-dfs
The Decentralised File System (dfs) is a stateless layer over Swarm. It uses the building blocks provided by Swarm and exposes high level storage functions like
- creation of Users,
- logical Drives / Pods,
- file system,
- key value database (like levelDB),
- document database (like mongoDB),
- permission management,
- payments and charging.

### FairOS-compute

The FairOS compute is a resource management layer over FairOS-dfs. It provides the following functionalities
- interfacing with Apps/Dapps using adaptors,
- split data processing jobs, allocates compute and schedules them,
- exposes the data in FairOS-dfs to the Apps/Dapps.

The main idea is to make the web 2.0 big data frameworks and applications transition in to web 3.0 world and also give rise to new kind of data Dapps that are web 3.0 native.
