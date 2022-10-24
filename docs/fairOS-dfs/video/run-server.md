---
id: run-server
title: Running FairOS server
---

[![Running FairOS server](./thumbnails/fairOS-Running-Server.png)](https://drive.google.com/file/d/1CqfQCLAc0ops80Ry9LyvaE3vIKYolPRl/view "Running FairOS server")  
To run the FairOS-DFS server, you would need a file called `dfs-linux-[arch]`. `[arch]` here refers to the architecture of you processor. We assume that you have a 64-bit computer here.  
Open a new terminal window/tab, cd into the directory of the executable files, and run the following command:  
<pre>
./dfs-linux-amd64 server --postageBlockId "d0a43787e9240fe515e71d254a430caf9dc122328daff96187b7f2e4d38aa40b"
</pre>
With `d0a43787e9240fe515e71d254a430caf9dc122328daff96187b7f2e4d38aa40b` being the PostageBlockId you have obtained from your Swarm node. If everything goes fine, you should get an output similar to:  
<pre>

  /$$$$$$          /$$            /$$$$$$   /$$$$$$                /$$  /$$$$$$         
 /$$__  $$        |__/           /$$__  $$ /$$__  $$              | $$ /$$__  $$        
| $$  \__//$$$$$$  /$$  /$$$$$$ | $$  \ $$| $$  \__/          /$$$$$$$| $$  \__//$$$$$$$
| $$$$   |____  $$| $$ /$$__  $$| $$  | $$|  $$$$$$  /$$$$$$ /$$__  $$| $$$$   /$$_____/
| $$_/    /$$$$$$$| $$| $$  \__/| $$  | $$ \____  $$|______/| $$  | $$| $$_/  |  $$$$$$ 
| $$     /$$__  $$| $$| $$      | $$  | $$ /$$  \ $$        | $$  | $$| $$     \____  $$
| $$    |  $$$$$$$| $$| $$      |  $$$$$$/|  $$$$$$/        |  $$$$$$$| $$     /$$$$$$$/
|__/     \_______/|__/|__/       \______/  \______/          \_______/|__/    |_______/


Using config file: /home/foo/.dfs.yaml
INFO[2022-10-24T03:12:20-07:00] configuration values                         
INFO[2022-10-24T03:12:20-07:00] version        : 0.7.3-ab15d5a               
INFO[2022-10-24T03:12:20-07:00] dataDir        : /home/foo/.fairOS/dfs      
INFO[2022-10-24T03:12:20-07:00] beeApi         : http://localhost:1633       
INFO[2022-10-24T03:12:20-07:00] beeDebugApi    : http://localhost:1635       
INFO[2022-10-24T03:12:20-07:00] verbosity      : trace                       
INFO[2022-10-24T03:12:20-07:00] httpPort       : :9090                       
INFO[2022-10-24T03:12:20-07:00] pprofPort      : :9091                       
INFO[2022-10-24T03:12:20-07:00] cookieDomain   : api.fairos.io               
INFO[2022-10-24T03:12:20-07:00] postageBlockId : d0a43787e9240fe515e71d254a430caf9dc122328daff96187b7f2e4d38aa40b 
INFO[2022-10-24T03:12:20-07:00] corsOrigins    : []                          
INFO[2022-10-24T03:12:20-07:00] fairOS-dfs API server listening on port: :9090 
INFO[2022-10-24T03:12:20-07:00] fairOS-dfs pprof listening on port: :9091   
</pre>
Congrats! your server is ready to serve you!
