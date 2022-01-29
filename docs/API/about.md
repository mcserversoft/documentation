---
sidebar_position: 1
title: About the API
---

:::caution Work In Progress
This section of the documentation is a work in progress. It is not complete and may change at any time.<br/>
The API is still in development. It is **not** perfect and will be improved in the future.
:::

Since version 12, MCSS supports an API that allows you to interact with your servers remotely.

It is currently in it's first iteration, but is a work in progress.

If you have any feature requests for the API, feel free to send them over on [Discord](https://discord.gg/DEn89PB).

## What does it do {#-api-about}

The API allows you to control MCSS remotely. As of right now you can : 

* Run power actions - Start, Stop, Restart or Kill your servers

* Send commands - run minecraft commands in the console

* Return server information like the icon, status and description


## Enabling it {#-api-enable}

For your safety and to preserve resources, the API is disabled by default. To enable it, open the settings `file > options` and scroll all the way down.

Tick a box labeled `Enable Web API`. Below you will see a button labeled `Manage Users`. From the new window you will be able to create and delete users. Create a new user, then restart MCSS to apply all the changes.

