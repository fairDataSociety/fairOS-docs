---
id: portable-account
title: Portable account
---

# Summary
Addressing web3 login workflow where users can retrieve their wallet in a decentralised manner from anywhere by providing a _username_ and a _password_.

# Context, motivation and guide level explanation
A wallet is an asymmetric keypair that represents an account in Ethereum or in Fair Data Society.
Usually, the private key is stored in the local storage of a wallet provider (such as Metamask or Blossom extension) or in a hardware wallet (such as Ledger).

The solution worked out here allows to log in to the user account from any device in the same way like in case of Web2: providing a username and a password.
Such a login can happen in a fully decentralized way using only Ethereum Name Service (ENS) and Ethereum Swarm.

This facilitates authenticating users from different FDP compatible authentication system. 

The portable account creation happens in 3 steps:
- Wallet generation
- ENS registration (username->public key)
- portable wallet (wallet seed) upload to Ethereum Swarm

The ENS is used to map usernames to public keys. From the public key, the account's ethereum address can be derived easily for everyone.
The Ethereum address is needed to construct Single Owner Chunk (SOC) address along with a consensual 32 bytes of Topic.
The login workflow defines the exact SOC Topic construction:

```
socTopic = H(fdpLoginVersion + username + password)
```

Where the parameter is consist of concatenated strings, the hash function is `keccak256` and the current `fdpLoginVersion` is `FDP-login-v1.0`.
With this, the encrypted seed address on the Swarm network can be calculated, formally

```
socAddress = H(socTopic + ethereumAddress)
```

Thereby, only the user (or who knows the credentials) can calculate the Swarm Hash (`socAddress`) where the encrypted seed of the wallet will be located.

A detailed discussion can be found here: https://github.com/fairDataSociety/FIPs/pull/59