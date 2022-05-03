---
id: manual-installation
title: Build from source
---

FairOS-dfs can be manually installed by compiling the stable or latest code.

:::info
Since FairOS-dfs is written in golang, it is necessary to have a running [go version 1.5 or higher](https://go.dev/dl/).
:::


### Stable Version

```sh
git clone https://github.com/fairDataSociety/fairOS-dfs.git
cd fairOS-dfs
git checkout v0.8.0
make binary
./dist/dfs server --postageBlockId "RECEIVED_BATCH_ID" #(starts FairOS-dfs in server mode)
./dist/dfs-cli #(starts the FairOS-dfs client)
```


### Bleeding Edge Version
```sh
git clone https://github.com/fairDataSociety/fairOS-dfs.git
cd fairOS-dfs
make binary
./dist/dfs server --postageBlockId "RECEIVED_BATCH_ID" #(starts FairOS-dfs in server mode)
./dist/dfs-cli #(starts the FairOS-dfs client)
```
