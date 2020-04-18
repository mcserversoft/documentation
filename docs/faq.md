# FAQ

---

*   [Error occurred during initialization of VM Could not reserve enough space for 2097152KB object heap.](#error-occurred-during-initialization-of-vm)
*   [Unable to connect to the server.](#unable-to-connect-to-the-server)
*   [Is there a mac or linux version?](#is-there-a-mac-version)
*   [Is this 24/7?](#is-this-24-7)
*   [MCSS crashes when starting it.](#mcss-crashes-when-starting-it)
*   [Since v11.5.0 the process name requires a different format.](#process-name-different-format)
*   [Important information about your operating system.](#important-information-os)
*   [Failed to set performance counters.](#failed-to-set-performance-counters)
*   [I have this weird IP address: 2001:0db8:85a3:0000:0000:8a2e:0370:7334, is this normal?](#weird-ip-address)
*   [Updating from 10.4.0.0 or older fails.](#updating-from-10400-fails)


<a name="error-occurred-during-initialization-of-vm"></a>
## Error occurred during initialization of VM Could not reserve enough space for 2097152KB object heap.

You are likely missing the 64bit version of Java. It's either not installed or needs reinstalling.
Want to check if it's installed? Open a command prompt and type:
`java -d64 -version`

If it gives you an error, you don't have it installed. You can download it [here](https://java.com/en/download/windows-64bit.jsp).


<a name="unable-to-connect-to-the-server"></a>
## Unable to connect to the server.

As the server owner, try connecting with "localhost" (without the ""). 
Works? Great! This means there is nothing wrong with the actual server.

However if you want other people to be able to play on your server, you will need to port forward your ip.
[See section on Port forwarding](../../gettingstarted/portforwarding).
 

<a name="is-there-a-mac-version"></a>
## "Is there a mac or linux version?"

No unfortunately there isn't a version for mac. Mcss is Windows only.<br>
**Supported OSs**: Windows Server (2008R2 SP1/2012/2016), Windows 7, 8 and 10
 

<a name="is-this-24-7"></a>
## "Is this 24/7?"

No, it's software that runs on your computer.<br>
Nothing like Aternos.
 

<a name="mcss-crashes-when-starting-it"></a>
## MCSS crashes when starting it.

Do you have [.NET Framework 4.7.2](https://dotnet.microsoft.com/download/dotnet-framework/net472) (or higher) installed?
 

<a name="process-name-different-format"></a>
## Since v11.5.0 the process name requires a different format.

![Screenshot of the process name requires different format dialog](assets/screenshots/dialog_regedit_process_name.png)

This change is required, click 'Yes' to apply the change.


<a name="important-information-os"></a>
## Important information about your operating system.

![Screenshot of outdated operating system dialog](assets/screenshots/dialog_outdated_os_powershell.png)

Read the text in the dialog 😉

> It has been reported by other users that PowerShell can be upgraded on Windows Server 2012 R2 but Windows 7 users can not. Their best option is to switch to the 'Console Read' method. 


<a name="failed-to-set-performance-counters"></a>
## Failed to set performance counters.

![Screenshot of failed to set performance counters dialog](assets/screenshots/dialog_performance_counters.png)

Your performance counters are corrupt. Mcss can automatically do this for you.

In case you want to do this manually:

Open a command prompt with administrator rights and execute the following commands:
<br>`cd c:\windows\system32`
<br>`lodctr /R`
<br>(if the lodctr command fails, simply run it twice)

> More info: [Microsoft Support | How to manually rebuild Performance Counter Library values
](https://support.microsoft.com/en-us/help/300956/how-to-manually-rebuild-performance-counter-library-values)
 

<a name="weird-ip-address"></a>
## "I have this weird IP address: 2001:0db8:85a3:0000:0000:8a2e:0370:7334, is this normal?"

Yes that is completely normal, that is called an IPv6 address. Most people don't have access to IPv6 yet so it's smart to share your IPv4 address instead.

There are 2 versions of the IP protocol.
<br>IPv4: 192.0.2.235
<br>IPv6: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
<br>[More info about IPv6](https://www.networkworld.com/article/3254575/what-is-ipv6-and-why-aren-t-we-there-yet.html)
 
> FUN FACT: IPv6 doesn't have port forwarding, there are no internal and external IPs. Every computer has it's own public IP.


<a name="updating-from-10400-fails"></a>
## Updating from 10.4.0.0 or older fails.

Due to backend api changes version 10.4.0.0 (and older) was considered End of Life (EOL) as of January 1st 2020.
Update from these old builds is no longer possible, they might even break.

You will need to update mcss manually. Download the latest version from the website and rename it to mcss.exe and copy'n replace it with the existing one. (make a backup just in case)
