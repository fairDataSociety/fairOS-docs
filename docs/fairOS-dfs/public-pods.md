---
id: public-pods
title: Public Pods
---

FairOS supports sharing pods publicly. This means that anyone can access the data in the pod, without having to be authenticated. 
This is useful for sharing data with the public.

Users can import a shared pod into their own account, or they can access it directly from an running fairos-dfs server without having to be authenticated.

### How to create a pod and store files and folders

To create a pod, users have several options:

- Download [Fairdrive Desktop App (FDA)](https://github.com/fairDataSociety/fairdrive-desktop-app/releases) and create a pod there, add files and create a shared pod reference.
- Go to [Fairdrive](https://app.fairdrive.fairdatasociety.org), create a pod and get shared pod reference
- Download the (FairOS dfs server and cli)[https://github.com/fairDataSociety/fairOS-dfs/releases]  on your computer. Once you have done that, you can use the FairOS command-line interface (CLI) to create a new pod. The CLI will generate a unique pod reference for your new pod, which you can then use to access it from any other device that has FairOS installed.

### How do I create a shared pod reference?

To create a shared pod reference, you can simply share the unique pod reference for your pod with others. Anyone who has this pod reference can access your pod and its contents.

In FDA press "Share pod"

![image](https://user-images.githubusercontent.com/1674145/233343946-31c499c1-bfe2-4a05-8a03-013794fd772e.png)

and a dialog will open:

![image](https://user-images.githubusercontent.com/1674145/233344271-247b3133-47b0-4d34-8599-4cfb80c359f5.png)


### How do I import a shared pod into my FairOS?

To import a shared pod into your FairOS, you can use the FairOS CLI to add the pod reference to your list of pods. Once you have done that, you will be able to access the shared pod and its contents from your own device.

### How do I share a pod as a public pod?

In FDA go to Pod->Receive/Import and paste reference.

![image](https://user-images.githubusercontent.com/1674145/233344521-ce000b8b-9392-41d3-b2f4-4e4f1c514169.png)

You will be able to see shared pods, under "Shared" tab.

To share a pod as a public pod, you can simply publish the pod reference on a public website or other online platform. Anyone who has the pod reference will be able to access the pod and its contents through the FairOS web interface, using the URL https://fairos-server-url/public/share_pod_reference.

### Serving web pages from your pod
FairOS will serve index.html from pod if it is accessed from http through **public** endpoint.

Simply add the file to the root directory of your pod, and FairOS will automatically serve it to any browser that accesses the pod through the web interface. This means that you can create Single Page Applications (SPAs) using frameworks like React, and host them on FairOS.

FairOS is a file system build on top of Swarm decentralized cloud storage system that allows users to create pods, store files and folders in them, and share those pods with others. Each pod has a unique pod reference that can be used to access it from anywhere. FairOS also allows users to serve index.html files and host static single page applications (SPA).