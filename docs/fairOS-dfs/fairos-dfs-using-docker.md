---
id: fairos-dfs-using-docker
title: Running with Docker
---

Docker containers for fairOS-dfs are hosted at [Docker Hub](https://hub.docker.com/r/fairdatasociety/fairos-dfs) for your convenience.

### Quick Start

Try fairOS-dfs out by simply running the following command in your Terminal.

```bash
docker run\
  -p 9090:9090 \
  --rm -it fairdatasociety/fairos-dfs\
  server \
    --network="testnet" \
    --rpc="https://xdai.dev.fairdatasociety.org" \
    --beeApi="https://bee-1.fairdatasociety.org" \
    --postageBlockId=0000000000000000000000000000000000000000000000000000000000000000
```

#### Versions

In order to use specific versions of fairOS-dfs, pull with required version

```bash
docker pull fairdatasociety/fairos-dfs:v0.9.2-rc2
```

#### Using Tags

```bash
docker pull fairdatasociety/fairos-dfs:latest
```