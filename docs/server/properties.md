---
title: Server Settings
description: A guide to the server.properties file and its configuration options.
---

# Minecraft Server Properties Guide

The `server.properties` file is the main configuration file for your Minecraft server. It controls how your server behaves, what features are enabled, and how players interact with your world. This guide covers the most important settings you'll need to understand.

## World and Gameplay Settings

### level-name

This is the name of your world folder. By default, it's set to "world". If you want to use a different world, change this to match the folder name. For example, if you have a world folder called "my-awesome-world", set this to `level-name=my-awesome-world`.

### gamemode

Controls the default game mode for new players joining your server:

- `survival` - Players must gather resources, have hunger, and can die
- `creative` - Players have unlimited resources and can fly
- `adventure` - Like survival but players can only break blocks with the right tools
- `spectator` - Players can fly through blocks and observe but can't interact

### difficulty

Sets how challenging the game is:

- `peaceful` - No hostile mobs spawn, players regenerate health
- `easy` - Hostile mobs spawn but deal less damage
- `normal` - Standard Minecraft difficulty
- `hard` - Hostile mobs deal more damage and have additional abilities

### hardcore

When set to `true`, players are banned from the server when they die. The server also locks to hard difficulty. Only enable this if you want a permanent death experience.

## World Generation

### level-type

Determines what type of world generates:

- `minecraft:normal` - Standard Minecraft world generation
- `minecraft:flat` - Completely flat world (superflat)
- `minecraft:large_biomes` - Normal world but with much larger biomes
- `minecraft:amplified` - Extreme terrain with very tall mountains

### generate-structures

When `true`, structures like villages, dungeons, and strongholds will generate in your world. Set to `false` if you want a world without these structures.

### level-seed

This is the world generation seed. Leave it empty for a random world, or enter a specific seed if you want a particular world layout. Seeds are like recipes for world generation - the same seed will always create the same world.

## Player Management

### max-players

The maximum number of players that can be online at the same time. Set this based on your server's performance and how many people you want to allow.

### white-list

When `true`, only players listed in the `whitelist.json` file can join your server. This is useful for private servers where you only want specific people to join.

### allow-flight

Normally, Minecraft kicks players who appear to be flying (to prevent cheating). Set this to `true` if you're using mods or plugins that allow legitimate flight.

### player-idle-timeout

Players who don't move or interact for this many minutes will be automatically kicked. Set to `0` to disable this feature.

## Server Protection

### online-mode

This is crucial for server security. When `true`, players must have a legitimate Minecraft account and be logged into Minecraft's servers to join. Only set this to `false` if you're running a local server or have specific reasons to allow cracked clients.

:::warning
Unless you have a good reason to disable online mode, **always keep this set to `true`**. Running a server in offline mode can lead to security issues and allow unauthorized access.
We will not provide support for servers running in offline mode.
:::

### enable-command-block

Command blocks are powerful tools that can run server commands automatically. Set to `true` only if you need them, as they can be used to grief or cause performance issues if misused.

### spawn-protection

Creates a protected area around the world spawn point where only server operators can build. The value is the radius in blocks (default is usually 16). Set to `0` to disable spawn protection.

## Performance Settings

### view-distance

How far players can see in chunks (16x16 block areas). Higher values let players see further but use more server resources. Most servers use 8-12 for a good balance between visibility and performance.

### simulation-distance

How far from players the server will simulate things like mob movement, crop growth, and redstone. Lower values improve performance but may cause farms or contraptions to stop working when players are far away.

### max-tick-time

If the server takes longer than this many milliseconds to process a single game tick, it will shut down with a warning. This prevents the server from becoming completely unresponsive, but you might need to increase it if you have complex redstone contraptions.

## Networking

### server-ip

This setting controls which network interface your Minecraft server will listen on for incoming connections. Understanding this setting is important for getting your server accessible to players.

When set to blank (empty), your server will listen on all available network interfaces - this is usually what you want. It's like telling Minecraft "accept connections from any IP address that points to this machine."

Your computer might have multiple IP addresses pointing to it:

- Your public IP (what the internet sees)
- Your local network IP (like 192.168.1.100)
- VPN IP addresses if you're using VPN software
- Other network adapters

If you leave `server-ip` blank, players can connect using any of these IP addresses that point to your machine. This gives you the most flexibility.

However, if you set `server-ip` to a specific IP address (like `192.168.1.100`), then Minecraft will ONLY accept connections coming to that exact IP address. Any connections to your other IP addresses will be rejected, even if they point to the same machine.

**When to change this setting:**

- Usually, leave it blank for maximum compatibility
- Set it to a specific IP only if you have multiple network cards and want to restrict which one handles Minecraft traffic
- If you're having connection issues, your server wrapper software might handle this automatically

**Common mistake:** Setting this to an IP address that doesn't actually point to your machine will make your server completely unreachable, as Minecraft will only listen for connections to an address that doesn't exist on your system.

## Communication

### motd

The "Message of the Day" that appears in the server list when players browse for servers. You can use color codes (like `§a` for green) and the `\n` sequence to create multiple lines.

### enable-rcon

RCON (Remote Console) allows you to send commands to your server from external tools. Only enable this if you need it and make sure to set a strong RCON password.

## Monster and Animal Spawning

### spawn-monsters

When `true`, hostile mobs like zombies and creepers will spawn. Set to `false` for a peaceful experience.

### spawn-animals

When `true`, passive mobs like cows and sheep will spawn. These are generally harmless and provide resources.

### spawn-npcs

When `true`, villagers will spawn in villages. Villagers are useful for trading but can impact performance in large numbers.

## Important Notes

Always back up your world before making major changes to server.properties. Some settings (like changing the world type) can cause issues with existing worlds.

After changing settings in server.properties, you need to restart your server for the changes to take effect. Simply reloading or using the `/reload` command won't apply these changes.

If you're unsure about a setting, it's usually safe to leave it at the default value until you understand what it does and why you might want to change it.
