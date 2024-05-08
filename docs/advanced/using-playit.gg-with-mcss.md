---
sidebar_position: 4
title: Using playit.gg with MCSS
description: Using playit.gg to avoid port forwarding and other issues
keywords: [port, forward, forwarding, port-forward; port-forwarding, network, friends, join, internet, playit.gg, playit, ngrok, tunnel]
---

## Introduction {#-introduction}

If you're having trouble with port forwarding or you are under something called [CGNAT](https://en.wikipedia.org/wiki/Carrier-grade_NAT), you may not be able to port forward at all.
[playit.gg](https://playit.gg/) helps to bypass the requirement to port forward, creating a "tunnel" from your PC to their servers.  

The core functionality of [playit.gg](https://playit.gg/) is free, but additional features are behind a paywall (such as using a custom domain).

## Creating an account and configuring the tunnel(s)

This procedure can be a little bit daunting, but the playit.gg developers tried to make it as straightforward as possible.  
If you're having issues following this guide, there are plenty of video tutorials online about using playit.gg for a minecraft server.

### Step 1 : Create an account on playit.gg {#-step-1}

Creating an account on playit is extremely simple.  
You can go to the website [of playit](https://playit.gg), and click on the "Login" button in the top right corner of the page.  
There, you can click on "Create an Account" to go to the creation page. 

After creating the account, you'll be met with an "onboarding" process.  
This is really simple, but we'll go over it anyway.

### Step 2 : The playit onboarding process {#-step-2}

The website will ask for you to download the playit program. Download it and install it. After it's done, make sure that it is running before clicking "Yes, it's running".  

Once the application is running, it will give you a "Claim URL" or a code to enter. Opening the claim URL will automatically add an "Agent" (a computer running the playit program) to your account.  

The third step on the website is to just wait for the app to connect to the playit network. We'll wait for that before continuing.  

At this point, your website should look something like this:  

![Full screen screenshot with the playit.gg onboarding process](/img/docs/playitgg/playitonboarding.png)



After that's done, you'll have to define the rules for the first tunnel.  
Click on "Create Tunnel" to proceed.  

From this point on, your setup may vary a little, depending on which port your server is using. In our case, we'll use the default 25565 port, but you may use a different one by changing it when necessary.  

On this page, you can choose the type of tunnel you need (You should choose between Minecraft JAVA and BEDROCK in most cases, but TCP is also an option [should you need to use playit.gg for the web panel](#-using-playit-for-the-panel))

![Image of the playit tunnel configuration, in the "shared IP" tab, using the free region option and Minecraft JAVA option. Tunnel is enabled.](/img/docs/playitgg/playittunnelconf.png)

After clicking on "Add tunnel", you will be redirected to a page containing additional settings about the tunnel you just created.  
You should keep the IP field the same (the IP `127.0.0.1` means localhost, aka the same machine that the playit app is located), but if you changed the port of the minecraft server, you can set it here.  

**After this, the tunnel should be up and running correctly.**  

### Step 3 : Using the playit tunnel {#-step-3}

On the tunnel page, you'll find a lot of information about the tunnel you created. What is interesting to us is the "Allocation" or "Shared IP".  
It should look something like this:  

![Image containing the playit tunnel information](/img/docs/playitgg/playittunnelinfo.png)

:::info
In this image the full IP and port have been censored, you won't see the green or red rectangles. In place of the X's you should see numbers.  
We'll use the X's in the example below, but be sure to replace the IP and PORT with what YOU see on the website.
:::

To connect to the server, we just take the IP (in this case `XX.ip.gl.ply.gg`) and we add the port (in this case `47XXX`) after a colon.  
The result would be `XX.ip.gl.ply.gg:47XXX`. It is important to use the port, as without it the tunnel won't work.


## Using playit.gg for the web panel {#-using-playit-for-the-panel}

To use playit.gg for the web panel, first enable the panel following our [documentation page](/webpanel/getting-started).  
After that's done, you can go into the playit.gg user area, in the tunnels section. Here you'll see all the tunnels you created. You want to click on the "add tunnel" button.

![Image of the tunnel list, containing a total of two tunnels. An arrow points to the "add tunnel" button.](/img/docs/playitgg/playittunneladdtunnel.png)
:::info
In this image the MCSS panel tunnel has already been created. Don't worry if you don't see it there, we'll create it now.
:::

Creating a tunnel is very similar to before, with the difference that now we **have** to choose TCP as the tunnel option.  
Selecting TCP will make you confirm that you won't host malware from the tunnel. Click through the warning and select TCP again.

:::warning
Choosing something else than TCP for the panel will make the tunnel not work. Make sure to select the correct option.
:::

This tunnel has additional settings, but all we care about is the port. You should set it to the same port you configured in the MCSS settings.

After the tunnel is created, we follow the same process that we used to connect to the minecraft server above.

:::info 
Due to the structure of the tunnel, you **have** to specify `https://` before the IP if you set SSL to true in the panel settings. Just like above, we need the port added to the end of the IP.

It is normal to see the "Website not secure" warning when loading the panel.
:::

