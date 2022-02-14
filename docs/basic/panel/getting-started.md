---
sidebar_position: 1
title: Getting started
description: How to get started with the integrated remote panel
keywords: [remote, panel, api, mcss, web, control, internet, enable]
---

:::info Your connection is not private
When you first connect to the panel, you will get a message saying "your connection is not private". This is due to the way MCSS handles the connection. Feel safe to click on "Advanced" and "connect anyways".
:::

## Enabling the remote panel {#-enable-panel}

To enable the remote panel, navigate to `file > options` then  scroll down to the "Remote Access / Developer API" section.

If you haven't enabled the API already, follow [this guide](/API/about#-api-enable) to do so.

If the API is enabled already, click on "Enable Web Panel", then close MCSS completely for the changes to take effect.

## Accessing the panel locally {#-local-access}

If the option to "Show Web API/Panel on startup" is enabled, the panel will be automatically opened when you start MCSS.

If not, you can connect from the computer running MCSS by navigating to `localhost:25560` from your web browser.

:::caution Local only
This will only work if you are accessing the web panel from the computer that is running MCSS. As such it is only recommended for testing purposes, as the GUI offers more features.
:::

## Accessing the panel from your local network {#-LAN-access}

To have access to the panel from another PC than the one hosting mcss, first enable remote access in the settings by checking "Allow Remote Access" in the API section.

You can now access your servers from any other PC **on your local network** by opening a browser and going to `http://<host's local ip>:<API port>`.

## Accessing the panel from anywhere {#-anywhere-access}

You can also enable fully remote access to allow anyone with credentials to control your MCSS instance.

To do this, first [enable remote access in mcss](#LAN-access).

You will have to port forward the API through your router in order for other people to be able to use it. We have a complete guide on that [here](/networking/port-forwarding)

You can now access the panel from anywhere by going to `http://<your public ip>:<API port>`

:::caution Security

If you enable remote access, it is highly recommended that you also enable SSL. This will allow your connection to the panel to be encrypted, protecting your password and servers. Do this by checking "Enable SSl" in the API settings.

:::

However, doing so will cause warnings like this one to appear in browsers :
[certificate warning](/img/docs/panel/ssl-warning.png)

This is normal and expected as MCSS uses a self-signed certificate. Using a verified one isn't possible here since certificates are only valid for domain names and not IPs, and a given certificate can only be used on one server at a time.

Your panel should now be accessible by going to `https://<your public ip>:<API port>` and dissmissing the warning.