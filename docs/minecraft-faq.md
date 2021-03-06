# Minecraft FAQ

---

## How do I setup a Forge server?

> WIP

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
        Download the data pack. It should be a .zip file or directory. To use datapacks, your server must be running Minecraft 1.13 or newer. To update aserver, see [this page](./update-server.md).
        Navigate to your server folder. It can be found in the `Servers` folder in the instalation directory of mcss, you should see all the available servers, navigate to the one you want to add your datapack/s to. You can also get to this folder directly from MCSS, by clicking `Server > Show in file explorer`. Open your world/map folder, most often called `world`, and put your datapacks in the `datapacks` folder. Restart your server and if the datapack is in the correct format and version it should be enabled. You can verify by typing `/datapack list enabled` from the console or as a level 3 operator and find an entry named `[file/your data pack file/directory name]`.
