---
sidebar_position: 2
title: Creating a Forge server
description: Steps to create a new Forge server
keywords: [forge, create, server, create-forge-server, MCSS, mods, modded]
---

## Download Forge {#-download-forge}

Go to [Forge's website](https://files.minecraftforge.net) and choose the version that you want to download. Click on "Installer" to download that version's installer.

![Download forge](/img/docs/create-forge/download_forge.png)

Wait for the end of the ad and click on "Skip" at the top right of the page. A .jar file will be downloaded, you might need to confirm the download on some browsers.

## Create the Forge server {#-create-the-forge-server}

Once the download is done, open the file `forge-<minecraft_version>-<forge_version>-installer.jar` to begin the Forge server installation. <br/>
Choose "install server" and select an empty folder in which the server will temporarily be installed (it will then be moved to the MCSS folder) and click OK. All the required files will be downloaded and placed in the selected folder.

![Install forge](/img/docs/create-forge/install_forge.png)

The folder now contains :

*   A sub-folder `libraries`
*   A file `<minecraft_version>.json`
*   A file `forge-<minecraft_version>-<forge_version>.jar`
*   A file `minecraft-server.<minecraft_version>.jar`

You can now delete the forge installer file.

## Import the server in MCSS {#-migrate-the-server-to-mcss}

Now, open MCSS and go to "File > Import server". A new window will open, select Forge server. Then in the left pane, drop your server's jar, for Forge it's `forge-<version>.jar`
Then, choose a name for you server and a folder name (the server will be stored in `mcss/servers/<folder_name>`). Choose the amount of RAM that will be allocated to the server in MB (it's recommended to have at least 4GB, or 4096MB, for a Forge server), and click on Import Server.<br/>
All the server files are copied to the /servers folder of MCSS and your server will appear in the servers list. <br/>

You can also delete the temporary folder where you installed Forge, it is now useless since all the files have been copied to the /servers folder of the app.

![Migrate forge](/img/docs/create-forge/migrate_forge.png)


:::note Forge 1.17 and above
To use forge 1.17 or above, follow this guide then replace the startup line with the following: <br></br> ```java -Xms[RAM]M @user_jvm_args.txt @libraries/net/minecraftforge/forge/<forge version>/win_args.txt  %*``` <br></br>
(replace `forge version` with the version you downloaded - e.g. 1.18-38.0.17)
:::

You can now start you Forge server by clicking the "Start" button. <br/>
At the first server start, the console will show an error asking you to accept the EULA. To do so, click on "servers > show in file explorer" and open the "eula.txt" file. Change the line `eula=false` to `eula=true` and start the server again. <br/>
this time, it will fully start and you will be able to connect from you Minecraft client.

