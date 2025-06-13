---
sidebar_position: 3
title: Manually creating a Fabric server
description: Steps to create a new Fabric server, along with a video.
keywords: [fabric, server, create, tutorial, MCSS, mods, modded]
---

## Download Fabric {#download-fabric}

Go to [Fabric's server download page](https://fabricmc.net/use/server/) and choose the version that you want to download. Click on "Executable server (.jar)" to download that version's server launcher.

![Download fabric](/img/docs/create-fabric/download_fabric.png)

You can now use the downloaded jar as the source file for a new server by clicking File > New Server in MCSS.
<br/>
<br/>

:::note Using an installer
If you have a Fabric installer instead of a single launcher jar, you can follow this procedure to create a server, though it's recommended to use the standalone file method as presented above.
:::

## Create the Fabric server {#create-the-fabric-server}

Once the download is done, open the file `fabric-installer-<fabric-version>.jar` to begin the Fabric server installation. <br/>
Choose "install server" and select an empty folder in which the server will temporarily be installed (it will then be moved to the MCSS folder) and click OK. All the required files will be downloaded and placed in the selected folder. It'll ask for the official Minecraft Server jar to be downloaded, this can be done pressing the prompted window

![Install forge](/img/docs/create-fabric/install_fabric.png)

The folder now contains :

* A sub-folder `.fabric-installer`
* A file `fabric-server-launch.jar`
* A file `server.jar`

You can now delete the fabric installer file.

## Import the server in MCSS {#migrate-the-server-to-mcss}

Now, open MCSS and go to "File > Import server". A new window will open, select Fabric server. Then in the left pane, drop your server's jar, for fabric it's `fabric-server-launch.jar`.
Then, choose a name for you server and a folder name (the server will be stored in `mcss/servers/<folder_name>`). Choose the amount of RAM that will be allocated to the server in MB (it's recommended to have at least 4GB, or 4096MB, for a Fabric server), and click on Import Server.<br/>
All the server files are copied to the /servers folder of MCSS and your server will appear in the servers list. <br/>

You can also delete the temporary folder where you installed Forge, it is now useless since all the files have been copied to the /servers folder of the app.

![Migrate fabric](/img/docs/create-fabric/migrate_fabric.png)

Finally, you have to rename your server's jar to `fabric.jar` or it will not be detected by MCSS.

You can now start you Fabric server by clicking the "Start" button. <br/>
At the first server start, the console will show an error asking you to accept the EULA. To do so, click on "servers > show in file explorer" and open the "eula.txt" file. Change the line `eula=false` to `eula=true` and start the server again. <br/>
this time, it will fully start and you will be able to connect from you Minecraft client. <br/>
<br/>
<br/>
Many thanks to Kennas for making this wonderful video on how to install Fabric on MCSS<br/>

<iframe width="560" height="315"
src="https://www.youtube.com/embed/yHd5OAl8L9c"
frameborder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" ></iframe>
