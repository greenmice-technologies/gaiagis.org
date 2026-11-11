---
title: "OAuth providers"
description: "Let people sign in with an account from another service."
translationKey: "oauth-providers"
weight: 20
appScreen:
  - "/admin/oauth-providers"
contentStatus: verified
verifiedAgainst: "828cf266"
---

Open **Administration**, then **Application**, then **OAuth Providers**.

A provider lets people sign in with an account they already have elsewhere. The list is empty until you add one.

## Add a provider

Select **Create a new OAuth Provider** and fill in the details you get from the provider:

- **Code** and **Name** — how the provider is identified and shown
- **Icon URL**
- **Client ID** and **Client Secret**
- **Authorization URI**, **Token URI**, and **User Info URI**
- **Scopes**
- **Email attribute**, **Name attribute**, and **Picture attribute** — where to find these values in what the provider returns
- **Enabled** — whether the provider appears on the sign-in page

Select **Save**.
