[Port forwarding](#port-forwarding)

*   [Introduction](#introduction)
*   [Different network devices](#different-network-devices)
*   [Accessing your router/modem's web interface](#accessing-your-router-modem-web-interface)
*   [Setting up the port forward](#setting-up-the-port-forward)

<a class="anchor" name="port-forwarding"></a>

## Port forwarding

<a class="anchor" name="introduction"></a>

### Introduction

I could have just written an A to Z tutorial but at the end of the day you would still have no idea what you actually did. Troubleshooting problems and maintaining your network would be tricky and painfull. So in this guide I'll be focusing on port forwarding and the basic logic arround it.

Port forwarding or port mapping isn't that difficult, it just requires a lot of time and a lot of different steps. The pupose of port forwarding is to make a specific program on your computer accessible to other computers on the internet. It is commonly used for hosting game servers, peer-to-peer transfers, voice-over-ip applications and much more.

![Overview of two networks. In the first one, port forwarding isn't setup correctly and fails, in the seconds everything works great]({assets_url}/images/portforward_overview.png)

It isn't something you need to configure on your computer but in your modem's and/or router's web interface. In most household networks the modem contains a router with wireless capability and everything is hooked up to that. So in that case you would only need to change the settings in the modem itself.

In my case, I have a modem with the wireless features turned off and I've hooked up a more powerful router to the modem. So I will need to portforward the modem and the external router.

As you can see it becomes a bit confusing, if you don't know how your network is setup.

<a class="anchor" name="different-network-devices"></a>

### Different network devices

In any network you might find one of these devices:

*   **Modem**
*   This is usually provided by your internet service provider, ISP for short. Simply put: it provides a way to recieve and send data needed for your telephone, TV and internet connection.

*   **Router (with or without wireless capabilities)**
*   A device that creates a network between the computers in your home by wire or wifi. Many internet provider install modems with an built-in router.

*   **Switch**
*   Looks the same as a router but it does less. You would use a switch to expand your network, <var>ex. 1 cable goes in, 3 cables go elsewhere.</var>

*   **Hub (honestly, throw this thing away)**
*   Hubs are very old, they are the switches of the past. All they do is receive signals and forward them to all connected devices. They add unneeded latency and noise on the network. Just want to point out is that it would be a good time to upgrade to a switch.

So go ahead and look arround to see how your network is setup.

<a class="anchor" name="accessing-your-router-modem-web-interface"></a>

### Accessing your router/modem's web interface

Now that you have a good sense on which router/modem you are running behind. It's finally time to connect to the machine that you want to configure.

#### Step 1: Find the ip of the modem/device (default gateway)

Open up a command line prompt, you can do this by pressing <kbd><kbd>Windows Key</kbd> + <kbd>R</kbd></kbd> and type <var>cmd</var> and hit <kbd>Enter</kbd>. Or you can search for <var>Command Prompt</var> under your apps.

![Partial screenshot of a cmd window]({assets_url}/images/portforward_cmd.png)

Type <var>ipconfig</var> and hit <kbd>Enter</kbd>.

![Partial screenshot of a cmd window]({assets_url}/images/portforward_cmd_ipconfig.png)

This is my result, it will look different but the layout is more or less the same. What we need it the IP address of the <var>Default Gateway</var>.

![Partial screenshot of a cmd window]({assets_url}/images/portforward_cmd_result.png)

Open a browser and type that into the address bar.

![Screenshot of the browser Opera with a login screen of the router]({assets_url}/images/portforward_browser.png)

<a class="anchor" name="setting-up-the-port-forward"></a>

### Setting up the port forward

Every manufacturer has its own interface, so they look all different. It would be impossible for me to cover all of them and continuing would be useless for all the people who don't own a TP-Link router with this model.

Instead I'm going to refer you to [www.portforward.com/router.htm](https://portforward.com/router.htm), they have over hundreds of tutorials for almost every brand and model.

I hope this guide has been somewhat useful to you, good luck!