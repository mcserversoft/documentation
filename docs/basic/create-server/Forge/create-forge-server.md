---
sidebar_position: 1
title: Creating a Forge server
description: Steps to create a new Forge server
keywords: [forge, create, server, create-forge-server, MCSS, mods, modded]
---

There are 2 options on how to add a forge server to mcss.

* Use the integrated Forge installer
* [Manually create & import Forge server](/basic/create-server/Forge/create-forge-server-manually)

This guide will show you how to use the integrated installer.

:::tip About the installer
The integrated Forge installer works for Forge & Fabric. It was added in v12.1.<br/>
It's still pretty new, if it fails we recommend using the "[manual way](/basic/create-server/Forge/create-forge-server-manually)".
:::

:::warning Using a modpack?
Modpacks often require [specialized setup](/basic/create-server/Forge/create-a-server-with-a-modpack).  
Note that if the modpack ships with a startup script, furhter modification is required to make it compatible with MCSS.
:::

## Use the integrated Forge installer {#download-forge}

## Download Forge Installer {#download-forge-installer}

Go to [Forge's website](https://files.minecraftforge.net) and choose the version that you want to download. It must be the installer file. This is very important. If not available (e.g. very old versions) then you must use the "[manual way](/basic/create-server/Forge/create-forge-server-manually)"

> If you are looking to download the fabric installer take a look at the [Sourcing a server file](/basic/create-server/sourcing-server-file) page.

![Download forge](/img/docs/create-forge/download_forge.png)

Wait for the end of the ad and click on "Skip" at the top right of the page. A .jar file will be downloaded, you might need to confirm the download on some browsers.

## Create the Forge server {#create-the-forge-server}

Once the download is complete, you can start creating the new Forge Server.<br/>
In the 'Server File' section select the downloaded installer file.

![Install forge](/img/docs/create-forge/forge_installer.png)

## Let the installer do its job {#let-the-installer-do-its-job}

During the server creation process, the forge server will be installed in the background. This could take a couple of minutes depending on your system.

![Install forge](/img/docs/create-forge/forge_installer_busy.png)

## Tweaking the server start settings {#tweaking-the-server-start-settings}

You now have to specify your server's launcher file.

For Forge 1.16 or earlier, open you server's folder using the folder icon, and rename the `forge-<version>.jar` to `forge.jar`.<br/>
You can now start your server.

If you're using Forge 1.17 or newer, open the mcss server settings and open the 'Advanced' tab:

![Install forge](/img/docs/create-forge/forge_incorrect_server_settings.png)

Select the 'Use Bat file' option and select the available file. Next click on the ✏️ pencil icon:

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

You must remove the *pause* statement at the bottom and add the *nogui* parameter:

```batch
REM Forge requires a configured set of both JVM and program arguments.
REM Add custom JVM arguments to the user_jvm_args.txt
REM Add custom program arguments {such as nogui} to this file in the next line before the %* or
REM  pass them to this script directly
java @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.18.1-39.0.45/win_args.txt nogui %*
```

That's it, now you have a fully functioning forge server in mcss.
