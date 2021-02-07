---
id: quickstart
title: Quick Start
---

FairOS-dfs has two executables
- dfs (FairOS-dfs server)
- dfs-cli (command line client for FairOS-dfs)

The executables are available for MacOS, Linux and Raspbian. The easiest way to run FairOS-dfs is to just download the executable from the github release page run it. 


:::info
Swarm is a pre-requsiste for running FairOS-dfs. It is also recommended to run Swarm and FairOS-dfs in the same machine.  
:::


The default configuration of FairOS-dfs assumes that Swarm is running in the same machine and in port 1633.

### Linux

```sh
wget https://github.com/fairDataSociety/fairOS-dfs/releases/download/v0.2.0/dfs-linux-amd64.zip
unzip dfs-linux-amd64.zip
rm dfs-linux-amd64.zip
./dist/dfs-linux-amd64 server
```

In another terminal, run the dfs-cli to connect and test it
```sh
wget https://github.com/fairDataSociety/fairOS-dfs/releases/download/v0.2.0/dfs-cli-linux-amd64.zip
unzip dfs-cli-linux-amd64.zip
rm dfs-cli-linux-amd64.zip
./dist/dfs-cli-linux-amd64
```


### MacOS

```sh
wget https://github.com/fairDataSociety/fairOS-dfs/releases/download/v0.2.0/dfs-darwin-amd64.zip
unzip dfs-darwin-amd64.zip
rm dfs-darwin-amd64.zip
./dist/dfs-darwin-amd64 server
```

In another terminal, run the dfs-cli to connect and test it
```sh
wget https://github.com/fairDataSociety/fairOS-dfs/releases/download/v0.2.0/dfs-cli-darwin-amd64.zip
unzip dfs-cli-darwin-amd64.zip
rm dfs-cli-darwin-amd64.zip
./dist/dfs-cli-darwin-amd64
```


