---
title: 'Organization Form Page'
description: 'Owner form for organization branding, plan, and members.'
translationKey: 'organization-form'
weight: 30
contentStatus: 'canonical-en'
---

Edit form for an organization the current user owns. Same form as the admin update page, scoped to membership.

| | |
| --- | --- |
| Route | `/organizations/:id/edit` |
| Access | Organization owners (`ROLE_USER` + owner guard) |
| Entry | **Edit** on the [Organization Page](organization-detail.md) |

## Features

- Name and slug
- Plan
- Brand title, color, logo, and background
- Override layout (locks member [Preferences](../account/preferences.md) to the organization brand)
- Theme, preset, and surface
- Member list (add / remove / role) on non-personal organizations
- Personal organization hint when the org is the user’s default personal workspace
- Save in the page header

Owners cannot create a new organization from this route. Creation is an admin action.

## Related

- [My Organizations](my-organizations.md)
- [Organization Page](organization-detail.md)
- [Admin Organization Form Page](../administration/application/organizations/organization-form.md)

## Members Dialog

The members dialog is a modal that allows the user to add and remove members from the organization.
It is opened by clicking the "Members" button in the organization form page.
It is also opened by clicking the "Members" button in the organization detail page.

## Coming Soon

- [ ] Add a new member by email with invitation.
