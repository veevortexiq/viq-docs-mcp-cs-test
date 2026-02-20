---
title: Roles & Permissions — Team Access Control for Vortex IQ | Vortex IQ Help Centre
---

<!--
SEO METADATA
Primary Keyword: ecommerce team access control
Secondary Keywords: role-based access control ecommerce platform, AI platform user permissions, team management ecommerce AI, user roles ecommerce dashboard, workspace access management
Search Intent: Informational / Navigational
Meta Title: Roles & Permissions: Team Access Control in Vortex IQ
Meta Description: Manage your team's access with role-based permissions. Three built-in roles and fully customisable access levels ensure every team member sees exactly what their job requires.
Schema Target: TechArticle / SoftwareApplication
-->

# Roles & Permissions

**Vortex IQ's role-based access control system gives every team member precisely the access their role requires — no more, no less. Three built-in roles cover the most common team structures, and Administrators can create custom roles with granular permissions for any workflow. Every access decision is enforced automatically across the entire platform.**

---

## Why Role-Based Access Control Matters for eCommerce Teams

Access control is the invisible foundation of operational security. When every team member can see and do everything in your platform, the risk of accidental changes, unauthorised actions, and data exposure grows with every person you add to the workspace.

The cost of getting this wrong is substantial. Malicious insider incidents cost organisations an average of **$4.99 million per breach** in 2025, and **it takes an average of 81 days to detect and contain an insider threat** — an extended window during which the damage compounds with every passing day (Source: [Ponemon Institute — 2025 Cost of Insider Risks Global Report, via Syteca](https://www.syteca.com/en/blog/insider-threat-statistics-facts-and-figures)). The underlying challenge is consistent: **93% of security professionals say strict visibility and access control is an important factor**, yet only **36% have an effective unified access control solution in place** (Source: [BrightDefense — Insider Threat Statistics 2026](https://www.brightdefense.com/resources/insider-threat-statistics/)).

NIST's foundational research on role-based access control estimated **$1.1 billion in industry savings** from reduced downtime, more efficient access provisioning, and more effective policy administration — demonstrating that robust access control is not just a security measure, but a direct operational efficiency gain (Source: [NIST Role-Based Access Control Research, via RTI International](https://csrc.nist.gov/projects/role-based-access-control)).

Vortex IQ's permissions system was designed to give every team member exactly the access their job requires, and nothing beyond it.

---

## The Three Built-In Roles

Every Vortex IQ workspace comes with three pre-configured system roles. These roles are created automatically when your workspace is set up and cannot be deleted — they form the foundation of your team's access structure.

### Administrator

**Full access to all features within the workspace.** Administrators can invite users, assign roles, configure AI Guardrails and Brand DNA settings, activate and deactivate agents, approve agent actions, connect and disconnect platforms, manage subscriptions, and view the full Audit Trail.

Administrators are the only role that can modify workspace-level settings, including Brand Persona, Brand Voice Profile, and connected source permissions. The initial workspace account (the master account) is automatically assigned the Administrator role.

### Manager

**Can manage agents, tools, and platform connections — and can approve AI agent actions.** Managers have the operational access needed to run the day-to-day digital workforce: activating agents, reviewing and approving agent recommendations, and managing platform integrations. Managers cannot modify team roles, invite new users, or change workspace Guardrails settings.

### User (Viewer)

**Read-only access to dashboards, reports, and agent outputs.** Users with the Viewer role can access all monitoring dashboards in the Nerve Centre, read Vortex Mind intelligence reports, review Ask Viq conversation history, and browse the Agent Hub catalogue. They cannot activate agents, approve actions, or modify any configuration.

---

## Step-by-Step: Managing Users and Roles

### Step 1: Open the Users Management Screen

Navigate to **Settings** in the left-hand navigation sidebar, then select the **Account Information** tab. The **Users** sub-section shows all team members currently in your workspace, including their name, email address, assigned role, and account status.

![Vortex IQ Settings — Account Information Users tab showing the team members list with names, email addresses, roles, and status indicators](<../../aios screenshots/settings-account information  users.png>)

*The Users management screen: every team member in your workspace listed with their name, email, assigned role, and current account status — active, inactive, or suspended.*

From this screen, you can:

- View all current workspace members and their access levels.
- See each user's status (active, inactive, or suspended).
- Click any user to edit their role or account status.
- Deactivate or suspend a team member without deleting their account history.

### Step 2: Review Account Details

The **Account Details** sub-section shows your organisation's profile information — company name, domain, and contact details — along with your current plan and the master account designation.

![Vortex IQ Settings — Account Information showing Account Details with organisation profile, plan information, and master account details](<../../aios screenshots/settings-account information  account details .png>)

*The Account Details view: organisation profile, domain, and master account information — the primary workspace configuration that determines your organisation's identity within the platform.*

### Step 3: Invite a New User

To add a team member to your workspace:

1. Click **Add New User** from the Users management screen.
2. Enter the new user's **first name**, **last name**, and **email address**.
3. Select the **role** to assign (Administrator, Manager, User, or a custom role you have created).
4. Click **Send Invitation**.

The invited user receives an email with a secure link to access the workspace. Until they accept the invitation and complete setup, their account appears with an **Invited** status in the Users list.

![Vortex IQ Settings — Add New User form showing first name, last name, email, and role selector fields](<../../aios screenshots/settings-account information  users add new user.png>)

*The Add New User form: enter the team member's name, email address, and assign their role — an invitation is sent immediately and their account appears in the Users list with an Invited status.*

!!! note "Invitation Expiry"
    Invitations that have not been accepted within a set period show as **Invited Expired** in the Users list. You can resend the invitation from the user's detail view.

### Step 4: Change a User's Role

To change an existing team member's access level:

1. Click on the user's name in the Users list to open their detail view.
2. Select the new role from the **Role** dropdown.
3. Save the change.

The updated permissions take effect immediately. The user's next action in the workspace will be governed by their new role — no logout or session reset required.

!!! warning "Changing Administrator Roles"
    Before removing the Administrator role from a team member, ensure at least one other Administrator remains active in the workspace. A workspace with no active Administrator cannot be configured or managed.

### Step 5: Manage User Status

Each user account in your workspace has one of three statuses:

- **Active** — the user has full access to their assigned role's capabilities.
- **Inactive** — the user's account is disabled. They cannot log in, but their account history and configuration are retained and can be restored.
- **Suspended** — similar to inactive, used when an account is under review or pending investigation.

To change a user's status, open their detail view and toggle the status. Deactivating a user takes effect immediately — their active session is terminated and they cannot log back in until the account is reactivated.

!!! note "Master Account Protection"
    The **master account** — the primary Administrator account created during workspace setup — cannot be deactivated or deleted. This prevents workspace lockout scenarios where no Administrator access remains available.

### Step 6: Create a Custom Role (Optional)

If your team structure requires access levels beyond the three built-in roles, Administrators can create custom roles with granular permission assignments:

1. Navigate to **Settings → Roles** within the admin interface.
2. Click **Create New Role**.
3. Give the role a name and description.
4. Select permissions from the available permission catalogue — organised by module (Users, Agents, Deployments, Monitoring, and more).
5. Save the role — it becomes available immediately as an option when inviting or updating team members.

Custom roles can be edited at any time. The three system roles (Administrator, Manager, User) cannot be edited or deleted — only custom roles support full modification.

---

## AI Safety & Guardrails

Role-based access control is not a standalone setting — it is integrated throughout every layer of the Vortex IQ platform.

**Agent Activation:**
Only Administrator and Manager roles can activate agents in the Agent Hub or through Ask Viq. Viewer-role users can browse the Agent Hub catalogue and read agent outputs, but cannot activate, configure, or deactivate any agent.

**Action Approval:**
Only Administrator and Manager roles can approve agent action recommendations (the Human-in-the-Loop approval cards). A Viewer user who sees an approval card in a conversation thread cannot confirm or decline it.

**Settings & Configuration:**
Only Administrators can modify workspace settings, Guardrails configuration, user roles, and subscription details. Managers have operational access without configuration authority.

**Audit Trail:**
Every user invitation, role assignment, status change, and permission update is logged automatically in your [Audit Trail](audit-trails.md), with a timestamp and the identity of the Administrator who made the change.

---

## Role Permissions at a Glance

| Capability | Administrator | Manager | Viewer |
| :--- | :---: | :---: | :---: |
| Browse Agent Hub catalogue | ✓ | ✓ | ✓ |
| Activate / deactivate agents | ✓ | ✓ | — |
| Approve agent actions (Human-in-the-Loop) | ✓ | ✓ | — |
| Ask Viq — send queries | ✓ | ✓ | ✓ |
| View Vortex Mind reports | ✓ | ✓ | ✓ |
| Generate Vortex Mind reports | ✓ | ✓ | — |
| View Nerve Centre dashboards | ✓ | ✓ | ✓ |
| Create & configure monitors | ✓ | ✓ | — |
| Invite & manage team members | ✓ | — | — |
| Assign & modify roles | ✓ | — | — |
| Configure Brand DNA & Guardrails | ✓ | — | — |
| Connect / disconnect platforms | ✓ | ✓ | — |
| Manage subscription | ✓ | — | — |
| View Audit Trail | ✓ | ✓ | — |

---

## Frequently Asked Questions

**Q: Can I have multiple Administrators in my workspace?**
Yes. There is no limit on the number of Administrators in a workspace. For larger teams, having multiple Administrators ensures that configuration access is not a single point of failure. All Administrator actions are logged individually in the Audit Trail, so accountability is maintained regardless of how many Administrators the workspace has.

**Q: What happens to an agent's configuration when the user who set it up is deactivated?**
Agent configurations, active monitors, and workspace data are associated with the workspace, not the individual user account. When a team member's account is deactivated, their configured agents and settings remain active and accessible to other Administrators and Managers. Nothing is lost when a user account is suspended or deactivated.

**Q: Can I limit which specific agents a Manager can activate?**
The built-in Manager role provides access to all agents available under your subscription plan. If you need more granular control — for example, limiting a team member to only SEO-related agents — create a custom role with the specific permissions required for that use case and assign it instead.

**Q: How do I transfer the master account if the original Administrator leaves the organisation?**
The master account designation is tied to the workspace itself and is managed through account settings. Contact Vortex IQ support if you need to transfer the master account designation to a different Administrator — this process requires identity verification to protect workspace security.

**Q: Are custom roles affected when we upgrade our subscription plan?**
No. Custom roles and their permission assignments are not affected by subscription plan changes. Upgrading your plan makes additional agents and features available; the roles that can access those new capabilities are determined by your existing role-permission configuration.

---

[← Back to Help Centre](../index.md){ .md-button }
