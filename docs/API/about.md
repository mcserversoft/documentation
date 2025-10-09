---
sidebar_position: 1
title: Introduction
description: An introduction to the MCSS API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution Work In Progress
This section of the documentation is a work in progress. It is not complete and may change at any time.<br/>
The API is still in development. It is **NOT** perfect and will be improved in the future.
:::

:::info This guide is aimed at developers
The following tips and information is aimed at developers wanting to create apps that utilize the API. If you are a regular user this may not be for you.
As such some steps will assume that you already have basic knowledge of how API calls work and that you can read a documentation.
:::

Since version 12, MCSS supports an API that allows you to interact with your servers remotely.<br/>
If you have any feature requests for the API, feel free to send them over on [Discord](https://discord.gg/DEn89PB).

## What does it do {#-api-about}

The API allows you to control MCSS remotely. As of right now you can :

* Run power actions - Start, Stop, Restart or Kill your servers
* Send commands - run minecraft commands in the console
* Return server information like the icon, status and description
* Scheduler CRUD operations (create, read, update & delete tasks)  

## Enabling it {#-api-enable}

For your safety and to preserve resources, the API is disabled by default.

To enable it, open the settings `file > options` and scroll all the way down. Tick the box labeled `Enable Web API`.

## Managing API keys {#-api-keys}

On the `Web Panel` page you will see a button labeled `Manage Users & API Keys`.<br/>
From this window you will be able to create an API key.

![Screenshot of the Remote Access Manager window, ready to create an API key](/img/docs/api/remote-access-manager-create-key.png)

![Screenshot of the Remote Access Manager window, where an API key has been created](/img/docs/api/remote-access-manager-key-created.png)

If you lose your key, you must delete & create a new key. Keep your key private & secure!

## Making API calls {#-api-calls}

In order to make API calls you need special software.

### Standalone Software {#-standalone-software}

Standalone software allow you to make API calls from a nice interface. These softwares support everything you need, from simple HTTP requests to advanced features like authentication.
<Tabs>
  <TabItem value="postman" label="Postman">Free forever, with unlimited calls and APIs. You can add up to three people to your team to share your work with them.
    You can download postman <a href="https://www.postman.com/downloads/">here</a><img src="/img/docs/intro-api/postman.png"></img></TabItem>
  <TabItem value="insomnia" label="Insomnia">Free forever, with unlimited calls and APIs. You can share your work with as many people as you want.
  You can download Insomnia <a href="https://insomnia.rest/download">here</a><img src="/img/docs/intro-api/insomnia.png"></img></TabItem>
</Tabs>

### IDE extensions {#-ide-extensions}

If you plan on writing code that leverages the API, you may want to use an IDE extension. Visual Studio Code being the most popular, here are a few options for it.

<Tabs>
  <TabItem value="rest client" label="Rest Client">This option is more hands-on, requiring you to write all your requests. But it gives you more control and a more concise interface. You can download it <a href="https://marketplace.visualstudio.com/items?itemName=humao.rest-client">here</a><img src="/img/docs/intro-api/rest-client.png"></img></TabItem>
  <TabItem value="thunder client" label="Thunder Client">The cleanest of the two options, with a dedicated window similar to Insomnia's UI. You can download this extension <a href="https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client">here</a><img src="/img/docs/intro-api/thunder-client.png"></img></TabItem>
</Tabs>

## API Endpoints {#-api-endpoints}

View all [implemented endpoints](/API/endpoints).
