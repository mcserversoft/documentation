##Error occurred during initialization of VM Could not reserve enough space for 2097152KB object heap

You are likely missing the 64bit version of Java. It's either not installed or needs reinstalling.
Want to check if it's installed? Open a command prompt and type:
`java -d64 -version`

If it gives you an error, you don't have it installed. You can download it [here](https://java.com/en/download/windows-64bit.jsp).

##Unable to connect to the server

As the server owner, try connecting with "localhost" (without the ""). 
Works? Great! This means there is nothing wrong with the actual server.

However if you want other people to be able to play on your server, you will need to port forward your ip.
[See section on Port forwarding](../../gettingstarted/portforwarding).
 
##"Is there a mac version?"

No unfortunately there isn't a version for mac. Mcss is Windows only.<br>
**Supported OSs**: Windows Server (2008R2 SP1/2012/2016), Windows 7, 8 and 10
 
##"Is this 24/7?"

No, it's software that runs on your computer.<br>
Nothing like Aternos.
 
##MCSS crashes when starting it

Do you have [.NET Framework 4.7.2](https://dotnet.microsoft.com/download/dotnet-framework/net472) (or higher) installed?

 
##Failed to set performance counters. You might need to rebuild your Performance Counters. Error code: 0x001

Your performance counters are corrupt.
To rebuild them, open a command prompt with administrator rights and execute the following commands:
<br>`cd c:\windows\system32`
<br>`lodctr /R`
<br>(if the lodctr command fails, simply run it again ^^)

More info: [Microsoft Support | How to manually rebuild Performance Counter Library values
](https://support.microsoft.com/en-us/help/300956/how-to-manually-rebuild-performance-counter-library-values)
 
##"I have this weird IP address: 2001:0db8:85a3:0000:0000:8a2e:0370:7334, is this normal?"

Yes that is completely normal, that is called an IPv6 address. Most people don't have access to IPv6 yet so it's smart to share your IPv4 address instead.

(examples) There are 2 versions of the IP protocol.
IPv4: 192.0.2.235
IPv6: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
<br>[More info about IPv6](https://www.networkworld.com/article/3254575/what-is-ipv6-and-why-aren-t-we-there-yet.html)
 
##"Is the MCSSCommunicatorMod also available for older MC versions?"

Yes it is, if you require a version that is not in the list below, please request on the [Discord](https://discord.gg/DEn89PB) server.
<br>[Forge MC 1.9](https://www.mcserversoft.com/backend/downloads/MCSSCommunicatorMod_1.9.zip)
<br>[Forge MC 1.10](https://www.mcserversoft.com/backend/downloads/MCSSCommunicatorMod_1.10.zip)
<br>[Forge MC 1.12](https://www.mcserversoft.com/backend/downloads/MCSSCommunicatorMod_1.12.zip)
 
##"The playerlist of my imported Vanilla server isn't working."<br>"My imported Vanilla server is acting weird."

For a while (before August 2019) the server template had a fault in it. The following steps will guide you in correcting this:

* Stop the server and exit out of mcss (make sure it's not running in the background).
* Open up the server's config file (ex. servers\Vanilla\mcss_server_config.json)
* Look for ***"instanceType"***, in your case that will be set to 6, change it to 7. (or if there aren't any numbers, change Forge to Vanilla)

That's it, done.
 
##Updating from 10.4.0.0 fails

There was an issue with the old api returning incorrect info, resulting in a caching issue.
Exit out of mcss and delete the `/resources/cache/updates` folder. Start mcss again and the update will succeed.

##[Future Entry] It's 2020 and I can't update my old < 10.4 builds

Due to backend api changes version 10.4.0.0 (and older) was considered End of Life (EOL) as of January 1st 2020.
Update from these old builds is no longer possible, they might even break.

You will need to update mcss manually. Download the latest version from the website and rename it to mcss.exe and copy'n replace it with the existing one. (make a backup just in case)