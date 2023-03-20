---
id: introduction
title: Welcome
slug: /
---

:::info
This documentation is for the goland implementation of FairOS-dfs. JS implementation is available at [fdp-storage](https://github.com/fairDataSociety/fdp-storage).
:::

[//]: # ()
[//]: # (:::info)

[//]: # (FairOS-dfs version v0.9.0 has breaking changes and is not compatible with the last stable version v0.7.3.)

[//]: # (This release works with bee v1.9.0 or above.)

[//]: # (:::)

Hello and welcome to [FairOS](/docs/fairOS/introduction), the missing Operating System (OS) for a Fair Data Society. FairOS is a project being done under the banner of [Fair Data Society](https://fairdatasociety.org/) (FDS).

###  What is FairOS?
If we think of the Internet as a big computer, FairOS is poised to be the de-centralised OS that manages the resources of the computers in its network, much like storage and compute. The nodes that run FairOS will be part of the global network that will run applications which can make use of the storage and compute that is available. It consists of two layers, namely FairOS-dfs (storage) and FairOS-compute (compute).

### Why FairOS?
FairOS is designed so that users can run Apps/dApps over the internet (like any cloud application) but still own and control all their data. Both data and compute are de-centralised, censorship resistant and follow the blueprint of Web 3.0 and [fair data principles](https://principles.fairdatasociety.org/). Since all the data of a user is stored in a single logical place, data can be shared between the applications. It's like having all the benefits of running an application in a cloud, but the user has absolute control over their data.

Also, FairOS-dfs makes building a dApp on top of it easier by exposing File System and Database like constructs. If a developer moves from Web 2.0 to Web 3.0, FairOS-dfs will make sure they feel at home by providing similar storage tools that they are used to in Web 2.0.

### FairOS ![](/img/favicon.ico "") and Swarm🐝
The storage layer of FairOS, the Decentralised File System (dfs) uses Swarm as the base storage thereby inheriting all the benefits of Swarm. On top of that, it builds other storage business logic, to expose things needed for an application to run. Think of Swarm as the device driver of the hard disk inside your laptop and FairOs-dfs as the Ext4 file system and other databases that run on top of it, except that FairOS-dfs does this for a group of computers instead of one.  

### How far is the development of FairOS
Right now the team is concentrating on building FairOS-dfs, the storage layer of FairOS. FairOS-dfs is in Beta release now and applications can make use of its storage capabilities by installing it alongside Swarm. FairOS-compute is still in the research stage.

### Installation
Don't have FairOS-dfs installed yet? It's easy! Head over to the [installation](/docs/fairOS-dfs/manual-installation) section to get FairOS up and running on your computer.

### Are any Dapps using FairOS now?
Yes. [Fairdrive](https://fairdrive.fairdatasociety.org/) is a live and kicking Dapp that runs on top of FairOS-dfs. It is a Personal Data Store (PDS) which is used to store
- personal files of the user (like a de-centralised Dropbox),
- application data, of any Dapp that uses [fairos-connect](https://github.com/fairDataSociety/fairos-connect), a javascript library.

And many more apps are being developed using FairOS-dfs, to give just a few examples: [Photo viewer](https://app.photo.fairdatasociety.org/), [Dracula markdown editor](https://app.dracula.fairdatasociety.org/).

### API Reference
To learn more about how to get the most out of FairOS, head over to the [quick start](/docs/fairOS-dfs/quickstart) section to find out how to create logical drives to store data, share files with your friends, use data stores like Key Value Databases or Document Databases, and much much more...

### Development
We'd love you to join us! Are you up to the challenge of helping us to create FairOS and the other incredible technologies we're building on top of it? You are invited to contribute code to the FairOS-dfs or build any other dApp using it.

### Community
There is a budding community behind FairOS. Get involved in our Telegram channel or Discord.

- [Telegram](https://t.me/joinchat/GCEfnpZbpfZgVyoK),
- [Discord](https://discord.gg/KrVTmahcUA).


### Reporting a bug
If your FairOS-dfs isn't working, [get in touch and let us know!](https://github.com/fairDataSociety/fairOS-dfs/issues)


Thanks for being here, PLUR.
