---
sidebar_position: 3
title: Tweaking the Java Path Detection
description: Adding more locations to the Java Path Detection
keywords: [java, path, detection]
---

In mcss you can use the 'Java Path Picker' to easily change the java version of the server. Out of the box this feature doesn't work when you install Java in non-typical locations.

![explorer path](/img/docs/java-path/java-path-picker.png)

These are the default search locations:

``` powershell
C:\Program Files (x86)\Java
C:\Program Files\Java
C:\Program Files (x86)\Eclipse Adoptium
C:\Program Files\Eclipse Adoptium
C:\Program Files (x86)\Eclipse Foundation
C:\Program Files\Eclipse Foundation
```

## Adding more locations to search {#edit-locations}

If you have installed Java in another locations you can manually add these to the mcss config file (`resources\mcss_config.json`).
Mcss must be fully closed before you make these changes. The setting is called `potentialInstalledJavaLocations`.

Example:

```json
...
"potentialInstalledJavaLocations": [
    ...
    "C:\\Program Files (x86)\\Eclipse Foundation",
    "C:\\Program Files\\Eclipse Foundation",
    "D:\\Program Files\\Eclipse Foundation"
]
...
```
