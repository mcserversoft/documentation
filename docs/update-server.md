# Updating a server

---

***You can also copy and replace the server files, but there is a gui available as shown below.***

## Download the server jar file

Visit the corresponding site for your server type (as displayed in the table below) and download the server jar file that you want to update your server to. Make sure that you update to the correct server type (spigot -> spigot) and not (spigot -> taco).

| Name | Project Download | Easy Download |
|------|------------------|---------------|
| CraftBukkit | [https://bukkit.gamepedia.com/FAQ#Where_can_I_get_it.3F](https://bukkit.gamepedia.com/FAQ#Where_can_I_get_it.3F) | [https://getbukkit.org/download/craftbukkit](https://getbukkit.org/download/craftbukkit) |
| Spigot | [https://hub.spigotmc.org/jenkins/job/BuildTools/](https://hub.spigotmc.org/jenkins/job/BuildTools/) | [https://getbukkit.org/download/spigot](https://getbukkit.org/download/spigot) |
| Paper | [https://papermc.io/downloads](https://papermc.io/downloads) | |
| BungeeCord | [https://ci.md-5.net/job/BungeeCord/](https://ci.md-5.net/job/BungeeCord/) | [https://ci.md-5.net/job/BungeeCord/lastStableBuild/artifact/bootstrap/target/BungeeCord.jar](https://ci.md-5.net/job/BungeeCord/lastStableBuild/artifact/bootstrap/target/BungeeCord.jar) |
| Waterfall | [https://papermc.io/downloads#Waterfall](https://papermc.io/downloads#Waterfall) | |
| Vanilla | [https://www.minecraft.net/en-us/download/server](https://www.minecraft.net/en-us/download/server) | [https://getbukkit.org/download/vanilla](https://getbukkit.org/download/vanilla) |
| Forge | [https://files.minecraftforge.net](https://files.minecraftforge.net) | |
| TacoSpigot | **(JENKINS CI DOWN)** [https://github.com/TacoSpigot/TacoSpigot/releases/tag/v1.9.4-R0.1](https://github.com/TacoSpigot/TacoSpigot/releases/tag/v1.9.4-R0.1)| |


!!! warning "No API jars"
    Make sure that you don't download an api jar! They can be identified by the '-api' tag in their name.

![Screenshot of the Update Instance window](assets/screenshots/update_server_links.png)

## Select the server jar file

Now it's time to select the server jar file you downloaded in the previous step. You can either drop it onto the form or you can browse for it with the 'Select file' option.

![Screenshot of the Update Instance window where you can select your server file](assets/screenshots/update_server_files.png)

## Start the update

Click 'Update' to start the process. This won't take long.

![Screenshot of the Update Instance window with an update button where you can update the selected server file](assets/screenshots/update_server_update.png)

## Wrapping it up

All done! Wasn't that easy?

![Screenshot of the Update Instance window after successfully updating a server](assets/screenshots/update_server_complete.png)
