---
id: quickstart
title: Quick Start
---

FairOS-dfs has two executables
- dfs (FairOS-dfs server),
- dfs-cli (command line client for FairOS-dfs).

The executables are available for several operating systems. The easiest way to run FairOS-dfs is to just download the executable from the [github release](https://github.com/fairDataSociety/fairOS-dfs/releases) page and run it.


:::info
Swarm is a pre-requisite for running FairOS-dfs. It is also recommended to run Swarm and FairOS-dfs on the same machine.  
:::


The default configuration of FairOS-dfs assumes that Swarm is running in the same machine and exposes port 1633.

The following example commands download and run the binary versions of FairOS-dfs server and FairOS-dfs CLI. You have to insert your own [postage batch ID](postage-batch-id).

### Linux

```sh
wget https://github.com/fairDataSociety/fairOS-dfs/releases/download/v0.6.2/dfs-linux-amd64
chmod +x dfs-linux-amd64
./dfs-linux-amd64 server --postageBlockId "RECEIVED_BATCH_ID"
```

In another terminal, run the dfs-cli to connect and test it
```sh
wget https://github.com/fairDataSociety/fairOS-dfs/releases/download/v0.6.2/dfs-cli-linux-amd64
chmod +x dfs-cli-linux-amd64
./dist/dfs-cli-linux-amd64 --postageBlockId "RECEIVED_BATCH_ID"
```


### MacOS

```sh
wget https://github.com/fairDataSociety/fairOS-dfs/releases/download/v0.6.2/dfs-darwin-amd64
chmod +x dfs-darwin-amd64
./dist/dfs-darwin-amd64 server --postageBlockId "RECEIVED_BATCH_ID"
```

In another terminal, run the dfs-cli to connect and test it
```sh
wget https://github.com/fairDataSociety/fairOS-dfs/releases/download/v0.6.2/dfs-cli-darwin-amd64
chmod +x dfs-cli-darwin-amd64
./dist/dfs-cli-darwin-amd64 --postageBlockId "RECEIVED_BATCH_ID"
```
