---
id: postage-batch-id
title: Postage Batch ID
---

Batch of Postage Stamps - is ID of chequebook in Swarm which used for payments for data uploading/downloading.

Learn detailed info about Stamps in official [Swarm docs](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive).

### Fund your node's wallet

1000000000000000 is 0.1 BZZ

```sh
curl -XPOST "http://localhost:1635/chequebook/withdraw?amount=1000000000000000"
```

### Purchase a Batch of Stamps


```sh
curl -s -XPOST http://localhost:1635/stamps/10000000/20
```
