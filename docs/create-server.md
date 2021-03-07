# Creating a server

---

## Choosing a server type

There are many types to choose from. If you are setting up your first server or if these server types are new to you, it's important to know what each one does and what it brings to the table.

Some focus on adding more functionality, others on performance and others bring both.

> More info can be found on the [Server Types](/server-types) page.

![Part of a screenshot of the create instance window, slightly faded out towards the bottom](assets/screenshots/create_server_type.png)

## Details and accepting the Minecraft EULA

It's time to fill in all details about your server.

![Screenshot of the create instance window](assets/screenshots/create_server_eula.png)

Setting name | Description
--- | ---
Server Name | A name for your server, this is only visible to you.
Folder Path | A unique location for your server, stored in the /servers directory.
Startup Line | The command used to start the server. It is tempting to change the <var>[RAM]</var> variable but I can only discourage you from doing so. Instead use the appropriate <var>Server Ram</var> <br><br> ***Default:*** `java -Xms256M -Xmx[RAM]M -jar {0}.jar --nojline`
Server Ram | The amount of memory that will be dedicated to your server. if you are just starting out, keep it at its default value and increase when needed. <br><br>***Default:*** 1024 MB
Server Port | This is the port of your computer that wil be used by your Minecraft server to recieve and send data. The default is <var>25565</var>, if your plan on running more than 1 server at the time, you can simply increment it each time.<br><br> ***Default:*** 25565
EULA | Accept the [Minecraft EULA](https://account.mojang.com/documents/minecraft_eula) to continue.


## Get the server files with the updater

![Screenshot of the create instance window](assets/screenshots/create_server_files.png)

Click on 'Open Updater Tool'. Since version 10.0.4.4 server files are no longer provided. You will need to use the [updater tool](/update-server) to get them.

When that's done, click on 'Create Server', this should only take a few seconds or even less.

## Wrapping it up

All done! Wasn't that easy?

![Screenshot of the create instance window](assets/screenshots/create_server_finished.png)
