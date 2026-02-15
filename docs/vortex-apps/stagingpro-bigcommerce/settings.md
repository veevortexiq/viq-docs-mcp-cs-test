# Settings

The Settings section allows you to configure StagingPro to match your workflow. Access Settings from the main navigation to manage repository connections, notifications, team access, and integrations.

## Settings Tabs Overview

Settings is organised into five tabs:

| Tab | Purpose |
| --- | --- |
| **Connect Repository** | Link your GitHub, GitLab, or Bitbucket repository |
| **Status Notifications** | Configure email, Slack, and Teams alerts |
| **B2B Edition** | Connect B2B store credentials |
| **Connect Agency** | Grant and manage agency access |
| **VIQ Agency** | Manage Vortex IQ agency integrations |


📸 Screenshot: Settings page with tabs

---

## Connect Repository

This tab allows you to connect your code repository for theme deployments.

### Supported Repositories

StagingPro supports three repository providers:


- **GitHub**— Including GitHub Apps integration
- **Bitbucket**— Atlassian's repository service

### Connecting a Repository


- Select your repository provider (GitHub, GitLab, or Bitbucket)
- Follow the provider-specific instructions
- Verify the connection

**For GitHub:**


- Click**Connect to Github App**if using GitHub Apps
- Alternatively, enter your repository details manually


**For Bitbucket:**


- Invite`bitbucket@stagingpro.com`as admin to your workspace
- Add`Stagingpro`as admin collaborator to your repository
- Enter your workspace/repository
- Click**Verify Bitbucket Account**

### Connected Repository View

Once connected, you'll see:


- Connected repository name
- List of team members with access
- Options to change permissions or remove members

📸 Screenshot: Connected repository with team members

### Managing Team Members

**To add a team member:**


- Click**Add Team Member**
- Enter their email address
- Set their permissions
- Click to confirm

**To change permissions:**


- Click**Change Permission**next to the member
- Select the new permission level
- Confirm the change

**To remove a member:**


- Click**Remove**next to the member
- Confirm removal

---

## Status Notifications

Configure how you receive alerts about migration and deployment activity.

### Notification Types

You can enable notifications for:


- **Deployment Notifications**— Alerts for code deployments
- **Data Migration Notifications**— Alerts for content migrations

Check or uncheck these options to control which notifications you receive.

📸 Screenshot: Status Notifications tab

### Email Notifications

Set up email alerts:


- Enter an email address in the**Email Notification**field
- Click the**+**button to add it
- Click**Send Test Email & Save**to verify and save

You can add multiple email addresses. Each appears as a tag that can be removed.

### Microsoft Teams Integration

Connect your Teams channel for notifications:


- Obtain your Teams Channel webhook URL
- Paste it in the**Teams Channel**field
- Click**Send Test Message & Save**to verify
- To disconnect, click**Remove**

### Slack Integration

Connect your Slack workspace:


- Obtain your Slack webhook URL
- Paste it in the**Slack Channel**field
- Click**Send Test Message & Save**to verify
- To disconnect, click**Remove**

> 
**Tip:**Set up multiple notification channels to ensure your team never misses important alerts.

---

## B2B Edition

If you use BigCommerce B2B Edition, this tab allows you to connect your B2B credentials for each environment.

### B2B Connection Table

The table shows all your environments with:

| Column | Description |
| --- | --- |
| **Type** | Environment type (Production, Staging, UAT, etc.) |
| **Store ID** | Your BigCommerce store identifier |
| **Store URL** | Link to the store |
| **Email ID** | B2B Edition login email |
| **Password** | B2B Edition password |
| **Actions** | Connect/Disconnect buttons |


📸 Screenshot: B2B Edition settings

### Connecting B2B for an Environment


- Find the environment in the table
- Enter your**Email ID**for B2B Edition
- Enter your**Password**
- Click**Connect**

Once connected, the button shows**Connected**in green.

> 
**Note:**Don't have an API key? Click the information icon (ℹ) for instructions on obtaining B2B credentials.

---

## Connect Agency

This tab allows merchants to grant agency partners access to their StagingPro account.

### Adding an Agency


- Enter the**Agency Name**
- Enter the**Agency Email**
- Click**Add**

The agency will receive an invitation and appear in the Agency Access list.

📸 Screenshot: Connect Agency form and list

### Agency Access List

View all connected agencies:

| Column | Description |
| --- | --- |
| **Agency Name** | Name of the agency |
| **Email** | Agency contact email |
| **Status** | Connection status (toggle switch, Pending Approval, Rejected) |
| **Date Created** | When access was granted |
| **Date Modified** | Last update time |


### Managing Agency Status

Use the toggle switch to enable or disable agency access. Pending agencies show "Pending Approval" until they complete their setup.

### Approving Agency Requests

If agencies request access to your store:


- Their request appears at the top of the page
- Review the agency details
- Click**Approve**to grant access
- Click**Reject**to deny access

---

## VIQ Agency

This tab manages integrations with Vortex IQ agency services.

### VIQ Agency Access

View all VIQ-connected agencies:

| Column | Description |
| --- | --- |
| **Agency Name** | Name of the Vortex IQ agency |
| **Email** | Agency email |
| **Status** | Connection status (connected, pending, rejected) |
| **Date Created** | When integrated |
| **Date Modified** | Last update |


📸 Screenshot: VIQ Agency list

### Approving VIQ Agency Requests

Pending VIQ agency requests appear with approval options:


- Review the request details
- Click**Approve**to grant access
- Click**Reject**to deny access

---

## Best Practices for Settings

### Notifications


- Set up at least one notification channel
- Include team leads on email notifications
- Use Slack or Teams for real-time team visibility

### Repository Connection


- Connect your repository before attempting code deployments
- Add all team members who need deployment access
- Review and update permissions regularly

### B2B Edition


- Ensure B2B credentials are current for all environments
- Test connections after any password changes
- Keep credentials secure

### Agency Access


- Grant access only to trusted agency partners
- Review agency access periodically
- Remove access when partnerships end

---

Click here → [Understanding the StagingPro App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }