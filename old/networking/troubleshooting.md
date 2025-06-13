---
sidebar_position: 3
title: Troubleshooting
description: Why can I or others not connect to my Minecraft server
keywords: [troubleshooting, can't connect, failed, network, friends, join, internet]
---

# Troubleshooting connection issues

## First-time hosting {#first-time-hosting}

There could be multiple reasons why you can't connect to the server. These steps should help your troubleshoot the issue(s).

* Start the server.
* Verify in the console that the server has fully started.
* On the **same machine** as the server, use the Minecraft client to login with `localhost`, if you have edited the default port number use `localhost:port` respectively:
  * ✔️ Works, the server works fine locally.
  * ❌ Fails, no connection:
    * Server is not online or is still starting.
    * Wrong port number.
    * You are not trying this from the same machine.
    * Firewall or anti-virus is blocking the connection.
* After verifying that localhost works
  * Check your [port forwarding](/networking/port-forwarding).
  * Check your firewall and anti-virus.
  * Check that you are using the [correct IP](/networking/find-ip) and port number.

### Others can connect but not me {#others-can-connect-not-me}

Your internet provider (ISP) is blocking [loopback](https://en.wikipedia.org/wiki/Loopback) traffic.

In other words they block internal connections that just loopback to the same network.<br/>
*(It's like leaving your house everytime you want to go to another room.)*

Solution is not to use the external IP. You must use `localhost` or your [internal IP](/networking/find-ip) e.g. `192.168.1.102`.

## Connection fails randomly {#connection-fails-randomly}

### Recheck port forwarding {#recheck-port-forwarding}

It's possible that you need to recheck your [port forwarding](/networking/port-forwarding). Your [internal IP](/networking/find-ip) could have changed.

You can avoid this by assigning a static address to your server.<br/>
Some good tutorials:

* [https://www.howtogeek.com/howto/19249/how-to-assign-a-static-ip-address-in-xp-vista-or-windows-7/](https://www.howtogeek.com/howto/19249/how-to-assign-a-static-ip-address-in-xp-vista-or-windows-7/)
* [https://www.online-tech-tips.com/computer-tips/how-to-assign-a-static-ip-address-to-a-windows-11-10-pc/](https://www.online-tech-tips.com/computer-tips/how-to-assign-a-static-ip-address-to-a-windows-11-10-pc/)

### Check Firewall / Anti-Virus {#check-firewall-anti-virus}

While not uncommon, it's possible that your anti-virus has decided to block the connection.
