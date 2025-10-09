---
sidebar_position: 1
title: Accessing server settings
description: How to view and edit the settings of a server in MCSS.
keywords: [import, server, files, existing]
---

import MCserverSettings from '/static/img/docs/server-settings/minecraft-settings.jpg';
import serverSettingsLocation from '/static/img/docs/server-settings/mcss-server-settings-location.jpg';

# How MCSS handles the server settings {#-mcss-handle-settings}

MCSS has two main server settings pages:
- [One for the Minecraft-related settings](#-mcss-minecraft-settings);
- [One for the server execution settings](#-mcss-server-execution-settings).

Both are accessible only in the main MCSS window (and not in the web panel).

## Minecraft-related settings {#-mcss-minecraft-settings}
You can edit Minecraft settings using the ‘Settings’ pane in the dashboard.  
<img src={MCserverSettings} alt="Minecraft Server Settings" style={{width: 400}} />  
On this page, you’ll find settings usually found in the server.properties file.  
You can change settings like difficulty, default gamemode, view distance, MOTD, and more through the UI.  

## Server execution settings {#-mcss-server-execution-settings}
To open server execution settings, click the cogwheel icon or navigate to `Server` > `Edit Server` at the top.  
<img src={serverSettingsLocation} alt="Where you can find the server execution settings" style={{width: 800}} />
This popup lets you change the following settings for the selected server:  
- [Server name and Description](#-mcss-settings-general)
- [Server icon (but only the one that's in the MCSS UI)](#-mcss-settings-general)
- [Assigned RAM (see below for details)](#-mcss-settings-general)
- [Server port](#-mcss-settings-general)
- [Autostart](#-mcss-settings-general)
- [Startup line](#-mcss-settings-advanced)
- [Java version](#-mcss-settings-advanced)
- Keep Online Mode (Crash Handling)
- Update the server

:::tip
Settings on this page are saved only when you click the `Save` button.
:::

:::caution
These settings are generally not backed up. Some changes may prevent your server from starting or could cause data loss. Proceed with caution!
:::

Below we'll cover all pages of this popup.

### General {#-mcss-settings-general}
In this page of the server execution settings you can edit the name, description and more.  
The server icon editable in this section only applies to the MCSS app, not to the Minecraft Server List.  
The autostart setting allows for a server to be started when MCSS first starts.  
Any changes to the port or assigned RAM require a server restart to be applied.  

:::caution
Renaming the server folder requires a manual filesystem change, so it’s not recommended unless absolutely necessary.
:::

:::tip
Editing the assigned RAM only applies when the server uses the default Java Startup Line method.
If you're unsure, review [the advanced page](#-mcss-settings-advanced) of the server settings.
:::

### Advanced {#-mcss-settings-advanced}
In the `Advanced` section, you can set a custom Java path for this server, change the startup Java line, or set the server to use a .bat file.  
To apply the assigned RAM in the `General` tab, select the `Java Startup Line` method and set the `-Xmx` flag to `[RAM]M`.  
When setting a .bat file as startup, MCSS will run the validator to check for common mistakes. Be sure to remove all `pause` statements from the file.  
Additional custom logic (such as automatic restarts) is **NOT** supported by MCSS, and therefore should be removed.

:::tip
Wanting to run a modpack that requires the use of a custom .bat file?  
Follow the [modpack setup guide](/basic/create-server/Forge/create-a-server-with-a-modpack)!
:::

:::caution
Changing the Java version to one not supported by the server will prevent it from starting.  
Follow the [java version matrix](/advanced/java-version) to ensure compatibility, and the [java path update](/advanced/java-path-update) guide to find the correct java path for your version.
:::

### Crash Handling {#-mcss-settings-crash}
Here you can set the behavior MCSS should take when it detects that the server has crashed.  
With the default setting (`Nothing`), the server will not be restarted automatically after a crash or stop.  
The `elevated` setting automatically restarts the server *if it hasn't been shut down by a MCSS input* (via the web panel, by sending a `stop` command in the server console or by clicking on the `stop` or `kill` buttons). This is the safest setting.  
The `aggressive` setting will **always** restart the server, even if it was stopped by MCSS.  
:::danger
The aggressive setting may cause issues with backups and scheduled tasks, resulting in incomplete or partial backups or data corruption.
:::

### Update Server {#-mcss-settings-update}
Here, you can upload a new .jar file to replace the current one. Stop the server before switching .jar files.
:::caution
This process is not recommended for modded versions, as they require updating external libraries separately.
:::