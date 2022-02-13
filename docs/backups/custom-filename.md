---
sidebar_position: 1
title: Custom ZIP file format
description: Provide a custom format for backup ZIP files
keywords: [backup, zip, custom, format]
---

Provide a custom format for backup ZIP files. If the format is invalid the default will be used.<br/>
Default format: `[backupname]_[unix]`

:::info Be aware of generic formats
Be careful when creating custom file formats. If the format is too generic, the file can easily get overwritten.
If the same backup destination is used by multiple servers, backups might not be able to run.<br/>
Example: `test [date].zip`, only produces 1 unique filename per day.
:::

## Example

![ZIP File Format setting in mcss](/img/docs/backups/mcss_backup_file_setting.jpg)

Results in `Backup of 5555_New backup 1644602572.zip`

## Parameters

| Parameter         | Example                   | Description |
|-------------------|---------------------------|-------------|
| [date]            | 10-2-2022 or 2-10-2022    | Returns the date in the format of the system's "Region and Language" settings   |
| [time]            | 20-15 or 8-15PM           | Returns the time in the format of the system's "Region and Language" settings   |
| [unix]            | 1644601247                | Returns a unix timestamp  |
| [backupname]      | My Backup Name            | Returns the name of the backup    |
| [servername]      | My Server Name            | Returns the name of the server    |
