---
sidebar_position: 3
title: Creating a Forge server
--- 

## Download Forge {#-download-forge}

Go to [Forge's website](https://files.minecraftforge.net) and choose the version that you want to download. Click on "Installer" to download that version's installer.

![Forge website](https://mcss.b-cdn.net/docs/guides/forge/download_forge.png)

Wait for the end of the ad and click on "Skip" at the top right of the page. A .jar file will be downloaded, you might need to confirm the download on some browsers.

## Create the Forge server {#-create-the-forge-server}

Once the download is done, open the file `forge-<minecraft_version>-<forge_version>-installer.jar` to begin the Forge server installation. <br/>
Choose "install server" and select an empty folder in which the server will temporarily be installed (it will then be moved to the MCSS folder) and click OK. All the required files will be downloaded and placed in the selected folder.

![The Forge installer](https://mcss.b-cdn.net/docs/guides/forge/install_forge.png)

The folder now contains : 

*   A sub-folder `libraries`
*   A file `<minecraft_version>.json`
*   A file `forge-<minecraft_version>-<forge_version>.jar`
*   A file `minecraft-server.<minecraft_version>.jar`

You can now delete the forge installer file.

## Migrate the server to MCSS {#-migrate-the-server-to-mcss}

Now, open MCSS and go to "File > migrate server". A new windows will open. Inside it, choose a name for you server and a folder name (that will be stored to `mcss/servers/<folder_name>`. Choose the amout of RAM that will be allocated to the server, in MB (it's recommended to have at least 4GB, or 4096MB, for a Forge server).<br/>
In "server type" choose Forge. Finally, select the executable jar file of the server : it's the `forge-<minecraft_version>-<forge_version>.jar` file of the server you created in the steps above and click "Migrate". Do not change the Startup Line, or MCSS will break and your server won't work properly.<br/>
All the server files are copied to the /servers folder of MCSS and your server will appear in the servers list. <br/>

You can also delete the temporary folder where you installed Forge, it is now useless since all the files have been copied to the /servers folder of the app.

![server migration window](https://mcss.b-cdn.net/docs/guides/forge/migrate_forge.png)

You can now start you Forge server by clicking the "Start" button. <br/>
At the first server start, the console will show an error asking you to accept the EULA. To do so, click on "servers > show in file explorer" and open the "eula.txt" file. Change the line `eula=false` to `eula=true` and start the server again. <br/>
this time, it will fully start and you will be able to connect from you Minecraft client.

