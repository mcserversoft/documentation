---
title: I need UTF8 encoding
sidebar-postion: 13
---

The sad reality is that UTF-8 is a second-class citizen in Windows.

As of Windows 10 version 1903, you have the option to set the system locale (language for non-Unicode programs) to UTF-8, but the feature is in beta.

To activate it: * Run intl.cpl (which opens the regional settings in Control Panel) * Follow the instructions in the screen shot below.

![test](https://mcss.b-cdn.net/docs/faq/utf8.png)

In some cases, the server needs to be started with additional parameters. E.g -Dfile.encoding=UTF-8, this varies from the server type used. More research is required on your end.

After setting this all up, you have no guarantee it will work. Goes to show how bad UTF-8 console support in Windows really is.