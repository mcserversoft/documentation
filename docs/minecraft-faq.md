# Minecraft FAQ

---

*   [How do I setup a Forge server?](#setup-forge)
*   [How do I add mods/plugins/datapacks to my server?](#add-modifications)
*   [How do I make it so friends can join?](#port-fowarding)
*   [How do I op myself or my friends?](#add-operators)
*   [Server says it cant keep up?](#server-cant-keep-up)


<a name="setup-forge"></a>
## How do I setup a Forge server?

Forge installation is a bit more complicated than any other server type because forge needs some libraries to run. 

To install all the requiered files, download the forge installer for the version you want from the official [forge website](https://files.minecraftforge.net/). You will have a file named `forge-xxx.xxx.xxx.xxx-installer.jar`, open this file, choose install server and select an **EMPTY** folder anywhere on your computer. Once the installation is done, all the server files are in the folder you selected before.

Now, migrate the server in MCSS. Select the `forge-xxx.xxx.xxx.xxx.jar` and NOT the `minecraft-server.jar` as the main jar, click migrate and you should be able to run the forge server in MCSS 

**!! When migrating the server you also have to selct the RAM amount, the server name and the server type. !!**

<a name="add-modifications"></a>
## How to add Modifications to your server

* ### Mods
    * #### Downloading Mods
        You can download mods from sites such as [CurseForge](https://www.curseforge.com/) or [Minecraft Mods](https://www.minecraftmods.com/).
    * #### Installing Mods
        To install the previously downloaded mod/s, you need to navigate to your server files, these can be found in the `Servers` folder in the instalation directory of mcss, you should see all the available servers, navigate to the one you want to add your mod/s to *(The server needs to be Forge to be able to support mod/s)* there should be a folder called `mods` *(If this folder does not exist run the server and look again, if it still hasnt generated you can ask for help in help support)* you simply drag and drop your downloaded mod/s into that folder, restart or start your server and your done!
* ### Plugins
    * #### Plugin Compatability
        |  | Bukkit (server) | Spigot (server) | Paper (server) | Sponge (server) |
        |---|---|---|---|---|
        | Bukkit (plugin) | ✅ | ✅ | ✅ | ❌ |
        | Spigot (plugin) | ❌ | ✅ | ✅ | ❌ |
        | Paper (plugin) | ❌ | ❌ | ✅ | ❌ |
        | Sponge (plugin) | ❌ | ❌ | ❌ | ✅ |
    * #### Downloading Plugins
        You can download plugins from sites such as [Spigot](https://www.spigotmc.org/resources/) or [Bukkit](https://dev.bukkit.org/).
    * #### Installing Plugins
        To install the previously downloaded plugin/s, you need to navigate to your server files, these can be found in the `Servers` folder in the instalation directory of mcss, you should see all the available servers, navigate to the one you want to add your plugin/s to *(The server needs to be Bukkit, Spigot or Paper to be able to support the relative plugin/s)* there should be a folder called `plugins` *(If this folder does not exist run the server and look again, if it still hasnt generated you can ask for help in help support)* you simply drag and drop your downloaded plugin/s into that folder, restart or start your server and your done!
* ### Datapacks
    * #### Downloading Datapacks
        You can download plugins from sites such as [Planet Minecraft](https://www.planetminecraft.com/data-packs/).
    * #### Installing Datapacks
        Download the data pack. It should be a .zip file or directory. Navigate to your server files, these can be found in the `Servers` folder in the instalation directory of mcss, you should see all the available servers, navigate to the one you want to add your datapack/s to. Put the data pack into a folder named `datapacks`. Restart your server and if the datapack is in the correct format and version it should be enabled. You can verify by typing `/datapack list enabled` from the console or as a level 3 operator and find an entry named `[file/your data pack file/directory name]`.

<a name="port-fowarding"></a>
## How do I make it so friends can join?

We have a detailed port fowarding guide [here](/port-forwarding)


<a name="add-operators"></a>
## How do I op myself or my friends?

To op anyone on your serer simply run the /op command in console like follows *(without the `/`)*

`op <playername>`

<a name=""server-cant-keep-up></a>
##Server says it cant keep up?

This error is usually posted when creating new worlds or doing heavy functions, in that case you can ignore it but, the error can also origonate from to much ram ot to little cpu being given to the server.
To fix it try changing ram ammounts, if the problem still ensues it is most likely a cpu problem or an issue with a plugin or mod *(if you are running plugins or mods)*