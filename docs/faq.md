---
sidebar_position: 100
title: FAQ
description: Frequently asked questions and their answers
keywords: [faq, mcss, frequently, asked, questions, answers, issues, bugs]
---
# FAQ - Frequently Asked Questions

## MCSS crashes when opening console or player manager (v13 and above). {#-faq-dll-crash}

You get this error when opening the console, player manager or other text editor:

```
Exception Message: Could not load the Scintilla module at the path 'C:\Users\Desktop\AppData\Local\Temp\Scintilla.NET\5.1.5\x86\Scintilla.dll'.
Exception TargetSite: System.Windows.Forms.CreateParams get_CreateParams()
Exception StackTrace: 
   at ScintillaNET.Scintilla.get_CreateParams()
   at System.Windows.Forms.Control..ctor(Boolean autoInstallSyncContext)
   at System.Windows.Forms.Control..ctor()
   at ScintillaNET.Scintilla..ctor()
   at McssMain.Controls.ScintillaEditor.ScintillaControl..ctor()
   at McssMain.Controls.ScintillaEditor.BasicTextEditor..ctor()
```

This is because you are missing 2 dependencies.
- Microsoft Visual C++ 2015-2019 Redistributable (x64)
- Microsoft Visual C++ 2015-2019 Redistributable (x86)

| Architecture  | Link | Notes |
|---|---|---|
| X86 | https://aka.ms/vs/17/release/vc_redist.x86.exe | Permalink for latest supported x86 version |
| X64 | https://aka.ms/vs/17/release/vc_redist.x64.exe | Permalink for latest supported x64 & ARM64 version |

Or if you rather download it from the Microsoft website: [https://docs.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist](https://docs.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist)

> While mcss is currently built against x86 it might change in the future. So it's recommended to install both. A lot of applications require this, at some point your computer will have this installed anyway.

## My 1.17 server won't start {#-faq-1-17-wont-start}

Since Minecraft version 1.17, both client and server need Java 16 or above to run.

:::info Change Java Version
You will need to specify the path to the corresponding `java.exe` for each server. Please follow this [Java Guide](/advanced/java-version) to configure it.
:::

## Error occurred during initialization of VM Could not reserve enough space {#-faq-error-initialization-vm}

You are likely using the 32bit version of Java. You need the 64bit version. It's either not installed or needs reinstalling.

To check which version you are currently using, open a command prompt and type `java -version`<br/>
If you see 32-bit or an error, you need a new version of Java.

:::info Choosing a Java Version
Depending on what server type / version you need a specific java version.
Refer to our [Java Guide](/advanced/java-version) to see which version you need. Download links are also listed.
:::

## Unable to connect to the server {#-faq-unable-to-connect}

See following [troubleshooting guide](/networking/troubleshooting).

## Failed To Bind to Port {#-faq-failed-bind-port}

Try killing all java processes (refer to [regain-control](#-faq-crash)) and start your server again.

If you added an IP to the 'server-ip' field in the server.properties file make sure to remove it.
If you're running multiple servers make sure they're not using the same port.
If you're still getting this error restarting your computer will usually resolve it.

## Is there a Mac or Linux version? {#-faq-mac-linux-support}

MCSS is currently only available on Windows.

## Is this 24/7? {#-faq-24-7}

MCSS runs on your computer. As long as it is online, the server is. So yes, if your computer in ON 24/7, the server can be too

## Is there a way to remote control MCSS ? {#-faq-remote-control}

For now there is a web API in early dev stage. Look [here](https://documenter.getpostman.com/view/7749159/TzJsexSC) for more info, the dev builds are available on [Discord](https://discord.com/invite/DEn89PB)
A remote control panel is currently being made, but nothing public yet. Updates will be posted on Discord when progress is made.

## Dashboard graphs are stuck to 0% CPU and 1MB of RAM {#-faq-dashboard-stats-stuck}

### On "normal" servers {#-faq-stats-normal}

This issue happens with the latest versions of Java. It can easily be fixed by defining the path to your version of java.

To fix it, you have to specify the direct path to your java binaries in MCSS.

1. open the `file > options` menu
1. in the `Global Java path override` line, add the path to your java.exe (most often in `C:\Program Files\Java\jdk-<version>\bin\java.exe`), or use the Path Picker
1. restart MCSS and try to start a server again, the graphs should display the correct information.

You can also add a different Java path for some server if only one requires Java 11 or higher. To do this, stop the server, go to the servers tab and click view settings on the three dots.
There, you will be able to set a local Java path, under the Advanced tab.

### On a server using a .bat file {#-faq-stats-bat}

If you're using a bat file to start your server (like on Forge 1.17+ servers), the process is different :<br/>
Open the server's settings, and click on the advanced tab, then click the pencil icon next to the bat file selector :

![Edit bat](/img/docs/create-forge/forge_edit_bat_file.png)

In you bat file, replace `java` by your full path to java.exe, in quotes (you can use the path picker to find it).

## MCSS crashes when starting it (v12 and below). {#-faq-crash-start}

Do you have [.NET Framework 4.7.2](https://dotnet.microsoft.com/download/dotnet-framework/net48) (or higher) installed?

## How do I regain control of my server if MCSS crashes? {#-faq-crash}

To regain control of your servers you need to kill all Java processes,to do this you go to "Quick Options" > "Kill all Java processes"

![Screenshot of the Kill all java processes option](/img/docs/faq/mcss_kill_java.png)

:::warning warning
This will kill ALL Java processes, not only MCSS hosted Minecraft servers.<br/>
This includes:
- The game itself
- Any other program running Java or relying on Java to function
:::

## Since v11.5.0 the process name requires a different format. {#-faq-process-name-format}

![Screenshot of the process name requires different format dialog](/img/docs/faq/dialog_regedit_process_name.png)

This change is required, click 'Yes' to apply the change.

## Failed to set performance counters. {#-faq-failed-performance-counters}

![Screenshot of failed to set performance counters dialog](/img/docs/faq/dialog_performance_counters.png)

Your performance counters are corrupt. MCSS can automatically do this for you. Click "Yes" to fix it.

In case you want to do this manually:

Open a command prompt with administrator rights and execute the following commands:

```cmd
cd c:\windows\system32`
lodctr /R`
(if the lodctr command fails, simply run it again)
```

> More info: [Microsoft Support | How to manually rebuild Performance Counter Library values](https://support.microsoft.com/en-us/help/300956/how-to-manually-rebuild-performance-counter-library-values)

## I have this weird long IP address, is this normal? {#-faq-ipv6}

Yes that is completely normal, that is called an IPv6 address. Most people don't have access to IPv6 yet so it's smart to share your IPv4 address instead.

There are 2 versions of the IP protocol.

- IPv4: 192.x.x.x
- IPv6: 2001:0db8:85a3:0000:0000:8a2e:0370:7334

[More info about IPv6](https://www.networkworld.com/article/3254575/what-is-ipv6-and-why-aren-t-we-there-yet.html)

:::info IPv6 doesn't need port forwarding
IPv6 doesn't require port forwarding. With IPv4 you have a private and public IP. This is not the case with IPv6, because there are plenty of addresses to hand out. So each computer gets its own public address.
:::

## Updating from 10.4.0.0 or older fails. {#-faq-update-10-failed}

Due to backend API changes version 10.4.0.0 (and older) was considered End of Life (EOL) as of January 1st 2020.
Update from these old builds is no longer possible, they might even break.

You will need to update MCSS manually. Download the latest version from the website and rename it to MCSS.exe and copy and replace it with the existing one. (make a backup just in case)

## Trouble starting a server {#-faq-trouble-starting-server}

### The console remains empty and the server does nothing {#-faq-console-empty}

You either don't have Java installed or MCSS doesn't know where it is.

Make sure you have installed the correct version by following [this guide](/advanced/java-version)

If you know you have the correct version already installed, follow [this guide](/advanced/java-path-update) to tell MCSS where to look.

> *The above steps were adapted from https://www.java.com/en/download/help/path.xml*

### The console does something, but the server fails to start {#-faq-server-error}

Read the error. More often than not, Minecraft throws easy to read errors that tell you exactly what went wrong. The answer to your issue could be even be in this FAQ !

## error: unable to access jarfile

**If this issue happens on a newly create server**, the it usually means the name of your server's JAR doesn't match with that in the startup flags.

Try to re-create the server. If the issue persists, join our discord server and we'll guide you trhough the steps to solve your issue. Alternatively if you know what you're doing you can edit the startup flags and the JAR's name to mnake them match

**If this issue occurs on an existing, working server**, it means the JAR is being used somewhere else. The first fix would be to kill all java processes (through MCSS or task manager). If that doesn't work, restart your computer.


## MCSS has crashed and I want to help fix it. {#-faq-mcss-crashed-help-out}

To help fix it, you can upload your Windows event logs and MCSS logs.
*(please zip all the files and send them to me by email, SpigotMC or Discord)*

To get the MCSS logs:

- MCSS logs can be found in the MCSS folder under /logs

To get the Windows event logs:

- Go to start and type eventvwr

You can follow the other steps on screenshot below.

![Screenshot of the event viewer](/img/docs/faq/event_viewer.png)

## The UTF-8 encoding doesn't work, I *really really* need it to work. {#-faq-utf8}

The sad reality is that UTF-8 is a second-class citizen in Windows.

As of Windows 10 version 1903, you have the option to set the system locale (language for non-Unicode programs) to UTF-8, but the feature is in beta.

To activate it:

- Run `intl.cpl` (which opens the regional settings in Control Panel)
- Follow the instructions in the screen shot below.

![Screenshot of the region settings window as part of the control panel](/img/docs/faq/utf8.png)

In some cases, the server needs to be started with additional parameters. E.g `-Dfile.encoding=UTF-8`, this varies from the server type used. More research is required on your end.

After setting this all up, this still doesn't guarantee that it will work. This just shows how bad the UTF-8 console support in Windows really is.

(sources)

- [https://stackoverflow.com/a/57134096](https://stackoverflow.com/a/57134096)
- [https://books.google.be/books?id=tkFPDwAAQBAJ&pg=PA436&lpg=PA436&dq=UTF-8+is+a+second-class+citizen+in+Windows&source=bl&ots=E9LdoNrGie&sig=ACfU3U0CaOrY_k5aj-tZ8xri76hgEAZ5Vw&hl=en&sa=X&ved=2ahUKEwja_vj00-DoAhVFDuwKHdBjAiwQ6AEwAHoECAsQKQ](https://books.google.be/books?id=tkFPDwAAQBAJ&pg=PA436&lpg=PA436&dq=UTF-8+is+a+second-class+citizen+in+Windows&source=bl&ots=E9LdoNrGie&sig=ACfU3U0CaOrY_k5aj-tZ8xri76hgEAZ5Vw&hl=en&sa=X&ved=2ahUKEwja_vj00-DoAhVFDuwKHdBjAiwQ6AEwAHoECAsQKQ)
