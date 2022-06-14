---
sidebar_position: 2
title: Manually creating a Forge server 
description: Steps to create a new Forge server
keywords: [forge, create, server, create-forge-server, MCSS, mods, modded]
---

There are 2 options on how to add a forge server to mcss.

* [Use the integrated Forge installer](/basic/create-server/Forge/create-forge-server)
* Manually create & import Forge server

This guide will show you how to manually create and an import a forge server.

## Download Forge {#-download-forge}

Go to [Forge's website](https://files.minecraftforge.net) and choose the version that you want to download. Click on "Installer" to download that version's installer.

![Download forge](/img/docs/create-forge/download_forge.png)

Wait for the end of the ad and click on "Skip" at the top right of the page. A .jar file will be downloaded, you might need to confirm the download on some browsers.

## Create the Forge server {#-create-the-forge-server}

Once the download is done, open the file `forge-<minecraft_version>-<forge_version>-installer.jar` to begin the Forge server installation. <br/>
Choose "install server" and select an empty folder in which the server will temporarily be installed (it will then be moved to the MCSS folder) and click OK. All the required files will be downloaded and placed in the selected folder.

![Install forge](/img/docs/create-forge/install_forge.png)

The folder now contains :

* A sub-folder `libraries`
* A file `<minecraft_version>.json`
* A file `forge-<minecraft_version>-<forge_version>.jar`
* A file `minecraft-server.<minecraft_version>.jar`

You can now delete the forge installer file.

## Import the server in MCSS {#-migrate-the-server-to-mcss}

Now, open MCSS and go to "File > Import server". A new window will open, select Forge server. Then in the left pane, drop any file from your server's folder.<br/>
Then, choose a name for you server and a folder name (the server will be stored in `mcss/servers/<folder_name>`). Choose the amount of RAM that will be allocated to the server in MB (it's recommended to have at least 4GB, or 4096MB, for a Forge server), and click on Import Server.<br/>
All the server files are copied to the /servers folder of MCSS and your server will appear in the servers list. <br/>

You can also delete the temporary folder where you installed Forge, it is now useless since all the files have been copied to the /servers folder of the app.

![Migrate forge](/img/docs/create-forge/migrate_forge.png)

## Tweaking the server start settings

A warning will appear asking you to set the launch options.
Open it, and select your server's launcher :

* For Forge version 1.16 and prior, select the `forge-<version>.jar` in the jar selector. Finish the install process, and you're done !
* For Forge 1.17 or newer, check the "use a .bat file" and select the `run.bat` created by the installer, then follow the next steps.

![Launch options config](/img/docs/create-forge/set_launch_options.png)

You must now edit the .bat file for it to work with MCSS.<br/>
Open the mcss server settings and open the 'Advanced' tab.

Click on the ✏️ pencil icon next to the "Use Bat file" option :

![Install forge](/img/docs/create-forge/forge_edit_bat_file.png)

You might see something like this:

```batch
REM Forge requires a configured set of both JVM and program arguments.
REM Add custom JVM arguments to the user_jvm_args.txt
REM Add custom program arguments {such as nogui} to this file in the next line before the %* or
REM  pass them to this script directly
java @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.18.1-39.0.45/win_args.txt %*
pause
```
You must remove the *pause* statement at the bottom and add the *nogui* parameter, as well as replace `java` with your full path to java.exe.<br/>
You can use the Path Picker (in the server's settings) to find it, make sure to use [the right version](/advanced/java-version.md) depending on your server.

```batch
REM Forge requires a configured set of both JVM and program arguments.
REM Add custom JVM arguments to the user_jvm_args.txt
REM Add custom program arguments {such as nogui} to this file in the next line before the %* or
REM  pass them to this script directly
"C:\Program Files\Java\jdk-17.0.2\bin\java.exe" @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.18.1-39.0.45/win_args.txt nogui %*
```

## Set the EULA file

At the first server start, the console will show an error asking you to accept the EULA. To do so, click on "servers > show in file explorer" and open the "eula.txt" file. Change the line `eula=false` to `eula=true` and start the server again. <br/>
This time, it will fully start and you will be able to connect from you Minecraft client.

That's it, now you have a fully functioning forge server in mcss.