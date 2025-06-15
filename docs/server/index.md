---
title: Quick Start Guide
description: A quick guide to start your first Minecraft server.
keywords: [mcss, mc server soft, minecraft, server, wrapper, quick start, guide]
---


# {{ $frontmatter.title }}

This guide will help you quickly set up your first Minecraft server using MC Server Soft (MCSS).

Before you begin, make sure you have completed the [prerequisites](/basic/prerequisites) and have MCSS installed.

## Step 1: Download a server jar

You will need a Minecraft server jar file to run your server. We recommend paper for the best performance and features.
You can download the latest version of Paper from the [PaperMC website](https://papermc.io/downloads/paper).

:::tip
If you are not sure which version to download, choose the latest stable release for the Minecraft version you want to play.
:::

## Step 2: Create a new server

1. Open MC Server Soft.
2. Click on **Add your first server**.
3. Choose the type of server you want to create (e.g., Paper).
4. On the next screen, select the server jar file you downloaded in Step 1.
5. Give your server a name.
6. You can change how much RAM you want to allocate to the server, but the default is usually fine for most users.
7. Accept the EULA by checking the box.
8. Click **Create Server** to finish setting up your server.

:::info
You can change these settings later in the server settings.
:::

## Step 3: Start your server

You're almost done! Now you just need to start your server by clicking the **Start** button on the top right of your screen.
Your server will start, and you will see the console output in the MCSS window.
Once your server is started, you can connect to it using the Minecraft client.

## Step 4: Connect to your server

1. Open Minecraft and go to the **Multiplayer** menu.
2. Click on **Add Server**.
3. Enter a name for your server (e.g., "My MCSS Server").
4. Enter the server address:
    - If you are running the server on the same computer, use `localhost`
    - If you are running the server on a different computer, use the IP address of that computer.
5. Click **Done** to save the server.
6. Select your server from the list and click **Join Server**.

Congratulations! You are now connected to your Minecraft server running on MC Server Soft.

:::info
To find your server's IP address, checkout our [tutorial](/network/server-ip).
:::
:::warning
At this stage your server is not publicly accessible. If you want to allow other players to join your server, you will need to set up port forwarding on your router. Check out our [port forwarding guide](/network/port-forwarding) for more information.
:::
