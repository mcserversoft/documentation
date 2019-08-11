[Migrate a Forge server](#migrate-a-forge-server)

*   [Download the server template](#download-the-server-template)
*   [Generate an GUID](#generate-an-guid)
*   [Transferring the server files](#transferring-the-server-files)
*   [Wrapping it up](#wrapping-it-up)

<div class="alert alert-dismissible alert-warning">Make sure that mcss is not running (not even in the background).</div>

<a class="anchor" name="migrate-a-forge-server"></a>

## Migrate a Forge server

<a class="anchor" name="download-the-server-template"></a>

### Download the server template

Download this [server template](https://www.mcserversoft.com/backend/files/click.php?id=41), unzip it and place the folder into your /servers folder.

Like so:

    servers/
    +-- ...
    +-- forge server template
        +-- mcss_server_config.json

Feel free to change the folder name (ex. 'forge server template' could become 'My Epic Forge Server').

<a class="anchor" name="generate-an-guid"></a>

### Generate an GUID

Time to generate an GUID for the server, go to this [website (uuidgenerator.net)](https://www.uuidgenerator.net/guid). It will give you an unique GUID.

Open the 'mcss_server_config.json' file in your template and fill in the GUID. Make sure that you do not copy any spaces or new lines.

Example:

    "guid":"3b6f961c-944f-484a-bc92-92c9125d14e0"

Save and close the file.

<a class="anchor" name="transferring-the-server-files"></a>

### Transferring the server files

You can now copy your old server files into the server folder.

<a class="anchor" name="wrapping-it-up"></a>

### Wrapping it up

Start mcss and you should see your migrated forge server, don't start the server yet.

Go to the "Servers" window and click on the "?" icon in the top of the forge server tile and choose "View settings".

In that window, you can now set the server name, and all other options. In the startup line, don't forget to change "{0}.jar" so that it matches the jar file in your server directory.

![Screenshot of the instance settings window]({assets_url}migrate_forge_settings.png)