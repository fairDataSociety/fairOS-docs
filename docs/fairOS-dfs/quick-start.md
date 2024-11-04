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
wget https://github.com/fairDataSociety/fairOS-dfs/releases/download/v0.10.02/dfs_linux_amd64
chmod +x dfs_linux_amd64
./dfs_linux_amd64 server --postageBlockId "RECEIVED_BATCH_ID"
```

In another terminal, run the dfs-cli to connect and test it
```sh
wget https://github.com/fairDataSociety/fairOS-dfs/releases/download/v0.10.02/dfs_cli_linux_amd64
chmod +x dfs_cli_linux_amd64
./dfs_cli_linux_amd64
```


### MacOS

```sh
wget https://github.com/fairDataSociety/fairOS-dfs/releases/download/v0.10.02/dfs_darwin_amd64
chmod +x dfs_darwin_amd64
./dfs_darwin_amd64 server --postageBlockId "RECEIVED_BATCH_ID"
```

In another terminal, run the dfs-cli to connect and test it
```sh
wget https://github.com/fairDataSociety/fairOS-dfs/releases/download/v0.10.02/dfs_cli_darwin_amd64
chmod +x dfs_cli_darwin_amd64
./dfs_cli_darwin_amd64
```

:::info
FairOS-dfs is still in testnet. While running the server use `--ens-network` as testnet and `--rpc` endpoint should point to a sepolia node, irrespective of the network you are using for Swarm.
:::

:::info
FairOS-dfs is not using goerli testnet anymore. It has switched to sepolia. If you want to keep using your old account please use the old mnemonic to re-register. You will be able to access your data.
:::

:::info
Use https://create.fairdatasociety.org/#/register to register your account, then use the server and cli
:::