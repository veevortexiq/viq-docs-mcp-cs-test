# Understanding the Settings Page

The Settings page is organized into the following tabs:

### 1. Connect Repository

In the Connect Repository tab, you can link your preferred Git repository for theme deployments.
StagingPro currently supports the following integrations:

- [GitHub Integration](github-account-setup.md)
- [Bitbucket Integration](bitbucket-integration.md)

!!! important
	The preferred authentication method is a **Fine-Grained Access** Token.
!!! warning
	It is **highly recommended** to generate and use a **GitHub Fine-Grained Access Token** before connecting your repository to StagingPro.

### 2. Status Notifications

In the Status Notifications tab, you can configure how you want to receive notifications for:

- Code deployments
- Content migrations

You can receive notifications via:

- [Email](stagingpro-setup-email.md)
- [Microsoft Teams](stagingpro-setup-teams.md)
- [Slack channels](stagingpro-setup-slack.md)

### 3. Configuration Settings

The Configuration Settings tab displays the theme configuration values defined in the **config.json** file.

StagingPro automatically pulls the config.json from your BigCommerce store and syncs it to your connected GitHub repository.
It also provides an interface to add custom configuration values, such as CRM/ERP URLs or keys.

By clicking **Update config.json**, you can:

- Add or update configuration values
- Specify URLs and API keys
- Extend your theme configuration as needed

---
Click here → [Understanding the StagingPro App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md)

---
## Related Videos

### StagingPro Connect with GitHub
Quick demonstration of how StagingPro tracks code commit changes after GitHub integration is set. 
<video height="600" width="800" controls>
  <source src="https://pub-1955da82cf7a4464b07d4fdb178ea58d.r2.dev/history_rollback-settings/Staging_Code_Deployment_Workflow_StagingPro_Connect_with_GitHub.mp4" type="video/mp4">
</video>

### GitHub Branch Creation
Quick reference steps on how to generate a preview url for visibility and code change validation. 
<video height="600" width="800" controls>
  <source src="https://pub-1955da82cf7a4464b07d4fdb178ea58d.r2.dev/history_rollback-settings/Staging_Code_Deployment_Workflow_GitHub_Branch_Creation.mp4" type="video/mp4">
</video>

---

Click here → [Understanding the StagingPro App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }