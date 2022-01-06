---
sidebar_position: 5
title: Changing the version of Java
slug: path-update
---

MCSS lets you use [different Java versions for each server](#per-server--per-server) or [a common Java version for all servers](#common-java-version).

<!-- TODO: Explain how to get the path -->
<!-- TODO: Explain how to set the path -->

## Finding the path to the Java executable {#-java-path}

Once you have installed the java version you need (refer to the [java version guide](/docs/guides/java-version) for more information), you need to locate the Java executable.

To find the version you need, go to `C:\Program Files\Java` and look for the folder that contains the version you need. Open that folder then the `bin` folder. 

Copy the path to this folder as shown below (in this case we're using java 11.0.10)

![explorer path](/img/guides/java-path/explorer.png)

## Globally {#-globally}



## Per server {#-per-server}
If you have multiple servers that require different versions of java, you can override the global Java setting for each server. To do so open the server settings and navigate to the advanced tab.  



