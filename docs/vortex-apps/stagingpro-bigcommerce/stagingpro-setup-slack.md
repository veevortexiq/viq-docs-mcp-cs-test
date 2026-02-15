# Setup notifications in Slack

## **Introduction**

Communication between team members is vital in any development project, and keeping in touch with teams working remotely and across different time zones is more important than ever. StagingPro has the native ability to send notifications to Slack (and other channels) each time a deployment event occurs.

## **Setting up the Slack channel**

This document assumes that you already have Slack installed in your organization. You will find detailed instructions here if you need assistance downloading and installing Slack.

**Step 1**: Click on the "…" next to the "Channels" menu item.

**Step 2**: Select "Create a channel" from the popup menu

![Slack01.png](../../img/stagingpro/Slack01.png)

**Step 3**: Give your channel a unique name and click "Create"

![Slack02.png](../../img/stagingpro/Slack02.png)

**Step 4**: If everybody in your organization is going to have access to the StagingPro notifications, then you can leave the default "Add all members of \[your Slack name\]" and click the "Add" button. Alternatively, type the user names of each individual you would like to be part of this channel and click "Add."

![Slack03.png](../../img/stagingpro/Slack03.png)

The new channel is created, and you will see it displayed in the left-hand menu.

![Slack04.png](../../img/stagingpro/Slack04.png)

## **Creating the app**

Before you can link StagingPro to Slack, we first need to create a connector (or webhook) that listens for incoming messages. To do this, we need to create an app.

**Step 1**: From a new browser window, go to [api.slack.com](http://api.slack.com)

**Step 2**: Click the "Create an app" button.

![Slack05.png](../../img/stagingpro/Slack05.png)

**Step 3**: When the Create an app window appears, select "From scratch"

![Slack06.png](../../img/stagingpro/Slack06.png)

**Step 4**: Give your app a good name and choose your company's Slack workspace in the dropdown menu.

IMPORTANT: If the workspace dropdown is empty, you must go back to [api.slack.com](http://api.slack.com) and log into Slack.

**Step 5**: Click on “Create App”

![Slack07.png](../../img/stagingpro/Slack07.png)

**Step 6**: Under "Add features and functionality," select "Incoming Webhooks" and click "Save Changes" at the bottom of the screen.

![Slack08.png](../../img/stagingpro/Slack08.png)

**Step 7**: Make sure that the "Activate Incoming Webhooks" toggle is set to "On" and click "Add New Webhook to Workspace" at the bottom of the page.

![Slack09.png](../../img/stagingpro/Slack09.png)

**Step 8**: A security message will appear asking your permission to access your Slack workspace. Use the dropdown menu to select the channel you created in Setting up a slack channel and click "Allow."

![Slack10.png](../../img/stagingpro/Slack10.png)

**Step 9**: Once redirected to the previous page, use the "Copy" button to add the newly generated link to the clipboard. Either paste this link somewhere you will find it again or continue to the next section.

![Slack11.png](../../img/stagingpro/Slack11.png)

## **Connecting the app to StagingPro**

**Step 1**: Open the StagingPro app, navigate to Settings, and then "Status Notifications"

**Step 2**: Click on "Add Channel" and select the "Slack" icon.

![Slack12.png](../../img/stagingpro/Slack12.png)

**Step 3**: Paste the URL you copied in the previous section into the Slack channel text box and click on Send Test Message.

![Slack13.png](../../img/stagingpro/Slack13.png)

**Step 4**: Provide a test message and click "Send"

![Slack14.png](../../img/stagingpro/Slack14.png)

**Step 5**: Go back to your Slack channel and make sure the message you have just sent has appeared.

---

Click here → [Understanding the StagingPro App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }