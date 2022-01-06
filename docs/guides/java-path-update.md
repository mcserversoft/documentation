---
sidebar_position: 5
title: Changing the version of Java
slug: path-update
---

With MCSS you can use different versions of java for each of your servers, or set a global override for the version of java that is used by all servers.


## Finding the path to the Java executable {#-java-path}

Once you have installed the java version you need (refer to the [java version guide](/docs/guides/java-version) for more information), you need to locate the Java executable.

To find the version you need, go to `C:\Program Files\Java` and look for the folder that contains the version you need. Open that folder then the `bin` folder. 

Copy the path to this folder as shown below (in this case we're using java 11.0.10)

![explorer path](/img/guides/java-path/explorer.png)

:::caution Alternative Folders
Some providers of Java builds may place the Java executable in a different folder. Here is a list of known alternative folers: <br></br>
AdoptopenJDK: `C:\Program Files\Eclipse Foundation`

:::
## Globally {#-globally}

If you only have one server or if your servers all use the same version of Java, you can set the path globally.
To do so open MCSS then at the tip click on `file > options`.

Scroll down and you will see a text box labeled "Global Java Path override". Paste the path to the folder containing the Java executable you just found.

The path you entered will be used for all servers and should look something like this (in this case we're using java 11.0.10):

<div style={{textAlign: 'center'}}>
  <img src="/img/guides/java-path/java-path-override.png" alt="Global Path override"/>
</div>


## Per server {#-per-server}
If you have multiple servers that require different versions of java, you can override the global Java setting. To do so open the server settings by clicking the ⚙️ and navigate to the advanced tab. 

You will see a text box labeled "Local Java Path override". Paste the path to the folder containing the Java executable you just found.

The path you entered will be used for this server and should look something like this (in this case we're using java 11.0.10):

<div style={{textAlign: 'center'}}>
  <img src="/img/guides/java-path/local-path-override.png" alt="Local Path override"/>
</div>

