
# Getting Started with StagingPro

## Accessing StagingPro

StagingPro is available directly through the BigCommerce App Marketplace. Once installed, you can access it from your BigCommerce control panel.

### To Access StagingPro:


- Log in to your BigCommerce store's control panel
- Navigate to**Apps**in the main menu
- Select**StagingPro**from your installed apps
- You will be taken to the StagingPro dashboard

> 
**Tip:**Bookmark the StagingPro dashboard for quick access during your workflow.

## First Login Experience

When you first access StagingPro, you'll see the main dashboard with the following navigation options:


- **Home**— Your main dashboard
- **Bulk Content Migration**— Migrate all your store data at once
- **Selective Content Migration**— Choose specific items to migrate
- **History & Rollback**— View past migrations and deployments
- **Settings**— Configure notifications, integrations, and team access

On your first visit, we recommend:


- **Explore Settings**— Set up your notification preferences so you receive alerts about migration status
- **Review Your Environments**— Understand which environments are available (Production, Staging, UAT, etc.)
- **Plan Your First Migration**— Start with a small selective migration to familiarise yourself with the process

## Understanding Environments

StagingPro works with multiple**environments**. Each environment is a separate instance of your store that can hold different data and configurations.

### Common Environment Types

| Environment | Purpose |
| --- | --- |
| **Production** | Your live store that customers see and purchase from. Changes here affect real customers immediately. |
| **Staging** | A testing environment that mirrors your production store. Use this to prepare and test changes. |
| **UAT** | User Acceptance Testing environment for final validation before deploying to production. |
| **Integration** | Used for testing integrations with third-party services. |


### Environment Direction

When migrating data, you always specify:


- **Source Environment**— Where the data comes from
- **Destination Environment**— Where the data goes to

For example, you might:


- Copy products from**Production**to**Staging**to test updates
- Copy approved changes from**Staging**to**Production**when ready to go live

## Recommended Setup

Before you start migrating content, we recommend the following setup:

### 1. Configure Notifications

Navigate to**Settings > Status Notifications**and set up:


- **Email Notifications**— Add email addresses to receive migration alerts
- **Slack Integration**— Connect your Slack workspace for team notifications (optional)
- **Microsoft Teams Integration**— Connect Teams for enterprise notifications (optional)

You can enable notifications for:


- Deployment notifications
- Data migration notifications

### 2. Connect Your Repository (For Theme Deployments)

If you plan to deploy theme changes, navigate to**Settings > Connect Repository**and connect your:


- **GitHub**repository
- **GitLab**repository, or
- **Bitbucket**repository

This enables code deployment workflows with approval processes.

### 3. Set Up Team Members

Add team members who need access to StagingPro:


- Go to**Settings > Connect Repository**
- Click**Add Team Member**
- Enter their email address and set permissions

### 4. Configure B2B Edition (If Applicable)

If you use BigCommerce B2B Edition:


- Navigate to**Settings > B2B Edition**
- Enter your B2B credentials for each environment
- Click**Connect**to link your B2B stores

## Safety Guidelines

> 
**Important:**Always follow these guidelines to protect your production store.

### Before Any Migration


- **Verify Source and Destination**— Double-check you've selected the correct environments
- **Review Selected Items**— Confirm you're migrating exactly what you intend
- **Consider Timing**— Schedule migrations during off-peak hours when possible
- **Notify Your Team**— Inform relevant team members before major migrations

### During Migration


- **Monitor Progress**— Watch the migration status in History & Rollback
- **Don't Run Multiple Migrations**— Wait for one migration to complete before starting another

### After Migration


- **Verify Results**— Check the destination environment to confirm changes applied correctly
- **Review Migration History**— Check for any errors or warnings in the migration details
- **Test Functionality**— If migrating to production, verify critical functions work correctly

### What NOT to Do


- ❌ Never migrate untested changes directly to production
- ❌ Avoid migrating during peak shopping hours
- ❌ Don't ignore error messages—investigate and resolve them
- ❌ Never assume a migration worked—always verify

---

Click here → [Understanding the StagingPro App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }