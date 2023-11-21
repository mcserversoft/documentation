---
sidebar_position: 3
title: Admin Permissions
description: How to authorize new users on your API
---

Admin is a very powerful permissions to grant. While it respects individual server access & permissions, it provides MCSS backend functionality to the User or API Key.

Introduced in `v13.5`, it grants access to user management tools like user creation, deletion and updating. The amount of functionality is limited, this will be expanded in the near future.

## Protected API Routes

These routes require admin rights:

| HTTP Method | Route | Description |
|-------- |-------- |-------- |
| GET | /api/v2/users | Retrieve list of users |
| GET | /api/v2/users/:userId | Retrieve a specific user |
| POST | /api/v2/users | Create a new user |
| PUT | /api/v2/users/:userId | Edit an existing user |
| DELETE | /api/v2/users/:userId | Delete an existing user |
| POST | /api/v2/users/wipe/sessions | Wipe all active sessions |

For more info about these routes visit the [Users API Documentation](/apis/v2#tag/Users).