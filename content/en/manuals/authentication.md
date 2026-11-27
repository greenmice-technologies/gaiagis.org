---
title: "Signing in"
description: "Sign in to Gaia, and where to go if you have no account or forgot your password."
translationKey: "authentication"
weight: 1
appScreen:
  - "/login"
  - "/account/register"
  - "/account/activate"
  - "/account/reset/request"
contentStatus: needs-review
---

Open Gaia in your browser. If you are not signed in, you see the **Sign in** page.

The page shows your installation's logo, name, and main color. Under the name it shows this installation's version and the name of that major, such as `1.4.0 (Oceanus)`. A version before 1.0 quotes Oceanus. A local development build adds Dev, such as `0.0.1-SNAPSHOT (Oceanus) Dev`. The registration, activation, and password-reset pages show the same line. Behind the form there is a background image: by default a pattern of thin blue lines. An administrator can replace it in the application settings.

## Sign in

1. Enter your **Username or Email Address**.
2. Enter your **Password**.
3. Tick **Remember me** to stay signed in on this browser.
4. Select **Sign in**.

After you sign in, Gaia opens your [dashboard](account/dashboard.md).

## No account, or a forgotten password

Below the form you find two links:

- **Did you forget your password?** asks for your email and sends you a link to choose a new password.
- **Register a new account** lets you create an account. A new account must be activated from the link sent by email.

An administrator can turn off sign-up and password reset. When they are off, the links are not available.

## Terms and privacy

The sign-in page can link to the **Terms of Service**, the **Privacy Policy**, and the **Cookie Notice**. Those links appear when an administrator sets their addresses in the application settings. The same list can include **About**, **Contact**, and **FAQ**. An empty address hides that link. The pages live on your public website.
