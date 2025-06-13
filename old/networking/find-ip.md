---
sidebar_position: 1
title: Find your IP
description: Find the correct IP address to connect to your Minecraft server
keywords: [ip, address, external, internal, localhost, join, internet]
---

## External IP (Internet) {#external-ip}

This is the IP address that others on the internet can connect to.

You can use the following website to find your IPv4 IP address: [whatismyipaddress.com](https://whatismyipaddress.com)

## Internal IP {#internal-ip}

This is the IP address that others in your own home/business network can connect to.

Finding it is pretty easy, open a command prompt by typing `cmd` in Windows' search bar, then type:

```cmd
ipconfig | findstr IPv4
```

You'll see something like the example below. In this case there are multiple addresses.

```cmd
C:\Users\Username>ipconfig | findstr IPv4
   IPv4 Address. . . . . . . . . . . : 192.168.1.102
   IPv4 Address. . . . . . . . . . . : 192.168.56.1
```

You can verify which one it is by typing the cmd command `ipconfig`. After a good look at it, the adapter name hints that it's the first one. The Default Gateway is also filled in, that's a good indicator.

```cmd
C:\Users\Username>ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : localdomain
   Link-local IPv6 Address . . . . . : fe80::523:15bd:73b0:16b8%4
   IPv4 Address. . . . . . . . . . . : 192.168.1.102
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : fe80::e263:daff:fee2:b61b%4
                                       192.168.1.1

Ethernet adapter VirtualBox Host-Only Network:

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::d847:4e78:8427:9cb0%15
   IPv4 Address. . . . . . . . . . . : 192.168.56.1
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . :

Ethernet adapter Bluetooth-networkconnection 2:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :
```

## Local {#local-ip}

This is a local shortcut to access the server when it's been played from the same computer.

``` cmd
localhost
```

If you have a custom port number e.g. 25566, use:

``` cmd
localhost:25566
```
