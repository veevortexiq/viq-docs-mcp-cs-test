# Setup notifications in Slack

Communication between team members is vital in any development project, and keeping in touch with teams working remotely and across different time zones is more important than ever. Vortex Staging has the native ability to send notifications to Slack (and other channels) each me a deployment event occurs.

Slack integration is supported through Incoming Webhooks. Once configured, Vortex Staging can post status messages into a chosen Slack channel.

Before you begin, create a Slack workspace (if needed) and create a channel where notifications should be delivered. You will then create a Slack App and enable Incoming Webhooks for it.

## ****Steps to set up a Slack webhook**

This document assumes that you already have Slack installed in your organization. You will find detailed instructions here if you need assistance downloading and installing Slack.

**Step 1:** From a new browser tab/window, go to api.slack.com

**Step 2:** Click Your apps on the top right hand corner.

![Slack01.png](../../img/shopify-staging/Slack01.png)

**Step 3:** Click the Go to Slack button on the top right hand corner to sign into your Slack account.

![Slack02.png](../../img/shopify-staging/Slack02.png)

**Step 4:** Sign into your Slack account.

![Slack03.png](../../img/shopify-staging/Slack03.png)

**Step 5:** Click on Create a workspace, enter your company or team name, then click Next.

![Slack04.png](../../img/shopify-staging/Slack04.png)

**Step 6:** Enter your name

![Slack05.png](../../img/shopify-staging/Slack05.png)

**Step 7:** Invite your coworkers by entering their email addresses and click Next. You may also skip this **Step for the moment.

![Slack06.png](../../img/shopify-staging/Slack06.png)

**Step 8:** Enter the necessary details (for example, a workspace name such as Testing) and click Next. Your workspace is ready.

![Slack07.png](../../img/shopify-staging/Slack07.png)

**Step 9:** The testing channel will be created and is ready for communication.

![Slack08.png](../../img/shopify-staging/Slack08.png)

**Step 10:** To enable the webhook, go back to api.slack.com, click Your apps, and then click Create an App.

![Slack09png](../../img/shopify-staging/Slack09.png)

![Slack10.png](../../img/shopify-staging/Slack10.png)

**Step 11:** When the Create an app window appears, select From scratch.

![Slack11.png](../../img/shopify-staging/Slack11.png)

**Step 12:** Give your app a name and choose your company's Slack workspace from the dropdown.

!!! IMPORTANT
    If the workspace dropdown is empty, go back to api.slack.com and ensure you are signed into Slack.

![Slack12.png](../../img/shopify-staging/Slack12.png)

**Step 13:** Click Create App, then select Incoming webhooks from the left menu. Switch Activate Incoming Webhooks to On, then click Add New Webhook to Workspace.

![Slack13.png](../../img/shopify-staging/Slack13.png)

**Step 14:** Click Add new webhook to the workspace and grant permissions. The webhook will be created.

![Slack14.png](../../img/shopify-staging/Slack14.png)

**Step 15:** When prompted, select the channel you created and click Allow.

![Slack15.png](../../img/shopify-staging/Slack15.png)

**Step 16:** Copy the generated webhook URL using the Copy button.

![Slack16.png](../../img/shopify-staging/Slack16.png)

**Step 17:** Paste the copied webhook URL into Vortex Staging under Settings -&gt; Status Notifications -&gt; Slack, then click Add.

![Slack17.png](../../img/shopify-staging/Slack17.png)

Enter the test message and click send button.

![Slack18.png](../../img/shopify-staging/Slack18.png)

A confirmation message will be displayed indicating successful delivery.

![Slack19.png](../../img/shopify-staging/Slack19.png)

**Step 18:** Open Slack and navigate to the channel used for the webhook. You should see the notification message posted there.

![Slack20.png](../../img/shopify-staging/Slack20.png)

---

Click here → [Understanding the Staging App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [Staging Onboarding](staging-onboarding/index.md)

---

[← Back to Help Centre](../../index.md){ .md-button }