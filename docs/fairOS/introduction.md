---
id: introduction
title: Introduction
---

The most important resources in a computer are the storage (disk) and compute (processor). Applications that run on a single computer use either or both of these resources. Operating System (OS) are programs which manage these resources and also schedule their usage across multiple applications.   

### Big Data Frameworks

During the turn of the last century, the internet boomed and gave rise to many internet based applications. This helped companies to grow on a global scale, which in turn gave rise to data explosion, which led these companies to start looking for Big Data Processing frameworks.

It is not trivial to build distributed applications because of several factors. Hardware failures and algorithmic consensus are few of the problems that make it complex to build them. Because of that, several frameworks have emerged in the past which helped developers build applications that scale out. Most of them require the applications to be written in different paradigms and demand specific knowledge of the system. It is because of this, that the investment in writing a distributed application is high.

Some applications are CPU heavy and some are IO heavy. The Big Data Frameworks are tuned to specific types, like batch, streaming, iterative etc. For this reason, we cannot say that one framework fits all. These frameworks achieve scaling out by splitting the task in hand in to several pieces and sending them to be processed by different computers at the same time working on different piece of the same data.

In the last couple of decades, many open source applications started to emerge commoditizing Big Data Processing. Some of famous ones are Apache Hadoop, Apache Spark and the likes. Today many enterprises use these frameworks to process their data.

![Big Data Framework Blueprint](/img/BigDataFrameWork.png)

The above diagram shows the basic blueprint of a Big Data Processing Framework. It contains two layers. The lower layer binds together the storage of all the computers involved, in to a Distributed File System (Ex: HDFS) and the upper layer takes care of the programming paradigm required to split the data and process it (ex: MapReduce). They usually have weak consensus which are non byzantine fault tolerant.

The issues with these applications are, 
- they give rise to data silos,
- they are not Byzantine fault tolerant,
- the data is owned by the organization and not by the user,
- external auditing is not possible.

### Internet Computer Blueprint

![Internet Computer](/img/InternetComputer.png)

The above diagram shows a blue print of an Internet Computer which has a Operating System that glues the Web 3.0 storage layer with the already existing Big Data Frameworks. This requires the storage layer to be compatible with these frameworks and at the same time makes the entire system Byzantine fault tolerant by introducing blockchain for consensus.
