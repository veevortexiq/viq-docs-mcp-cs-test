# Setup notifications in Teams

## **Introduction**

Communication between team members is vital in any development project, and with teams working remotely and across different time zones, keeping in touch is more important than ever. StagingPro has the native ability to send notifications to Microsoft Teams (and other channels) each time a deployment event occurs.

<!-- ![Teams01.png](../../../img/stagingpro/Teams01.png) -->
<img width="468" height="217" src="../../../img/stagingpro/Teams01.png">

## **Creating a team in Microsoft Teams**

Microsoft Teams allows you to specify different groups of people you regularly communicate with. Under each of these groups (known as “Teams”), communication is through smaller chats (known as channels). These channels allow users to communicate with individuals or larger groups within the team.

Before looking at channels, we must ensure that you have at least one team configured. If this is your first time using Microsoft Teams, there are three easy steps to follow when setting up a new team. You can find more detailed information on the Microsoft website by clicking [here](https://docs.microsoft.com/en-us/microsoftteams/get-started-with-teams-create-your-first-teams-and-channels).

**Step 1**: Open Microsoft Teams. Click on “Teams” in the left-hand side panel.

**Step 2**: Click the “Create Team” button as indicated below

<!-- ![Teams02.png](../../../img/stagingpro/Teams02.png) -->
<img width="468" height="217" src="../../../img/stagingpro/Teams02.png">

**Step 3:** Give your team a name. Please note that this name needs to be unique, but Teams will warn you if your name clashes with another name previously set up. Click “Next” when you are ready.

<!-- ![Teams03.png](../../../img/stagingpro/Teams03.png) -->
<img width="468" height="217" src="../../../img/stagingpro/Teams03.png">

**Step 4:** Finally, we need to add team members. Start by typing the first few letters of a team member’s name, and Teams should display the desired user. Alternatively, you can enter a team member’s email address, and if this does not exist in teams, they will be allowed to join this team as a “guest.”

<!-- ![Teams04.png](../../../img/stagingpro/Teams04.png) -->
<img width="468" height="217" src="../../../img/stagingpro/Teams04.png">

The image below shows that your team creation has been successful.

<!-- ![Teams05.png](../../../img/stagingpro/Teams05.png) -->
<img width="468" height="217" src="../../../img/stagingpro/Teams05.png">

## **Creating a new Teams channel**

If you have followed the steps in the previous section, you would now have successfully set up a Team, so next, we need to take a look at creating a channel. Think about channels as separate “chat” windows between individuals or group of users within the team.

**Step 1:** To set up a channel, click on the “…” that you will see to the right of the name you have given to your team. When the popup menu appears, click on “Add Channel.”

<!-- ![Teams06.png](../../../img/stagingpro/Teams06.png) -->
<img width="468" height="217" src="../../../img/stagingpro/Teams06.png">

Step2: Next, we need to give the channel a name. Once again, note that this has to be a unique name, but Teams will notify you if the name you choose clashes with a name previously created.

<!-- ![Teams07.png](../../../img/stagingpro/Teams07.png) -->
<img width="468" height="217" src="../../../img/stagingpro/Teams07.png">

Your channel has now been created.

## **Connecting your Teams channel to StagingPro**

Now that you have both a Team and a channel, we need to link these to StagingPro so that notifications will be visible to everybody with access to the Teams channel.

**Step 1:** Hover over your new channel name until the “…” appear, and click this.

**Step 2**: From the popup menu that appears, click on “**Workflows**”

<!-- ![Teams08.png](../../../img/stagingpro/Teams08.png) -->
<img width="165" height="293" src="../../../img/stagingpro/Teams08.png">


**Step 3:** Click on "Post to a channel when a webhook request is received"

<!-- ![Teams09.png](../../../img/stagingpro/Teams09.png) -->
<img width="370" height="321" src="../../../img/stagingpro/Teams09.png">

**Step 4:** In the next screen that appears, enter the name of the workflow and click on next button

<!-- ![Teams10.png](../../../img/stagingpro/Teams10.png) -->
<img width="468" height="217" src="../../../img/stagingpro/Teams10.png">

**Step 5:** Click on Add workflow button

<!-- ![Teams11.png](../../../img/stagingpro/Teams11.png) -->
<img width="468" height="217" src="../../../img/stagingpro/Teams11.png">

**Step 6**: Copy and save the unique workflow URL present in the dialog. The URL maps to the channel and you can use it to send information to Teams. Select Done. The workflow is now available in the Teams channel.

<!-- ![Teams12.png](../../../img/stagingpro/Teams12.png) -->
<img width="468" height="217" src="../../../img/stagingpro/Teams12.png">

**Step 7:** Open StagingPro, navigate to “Settings,” and click on the “Status Notifications” tab. Click on “Add Channels” and select the Microsoft Teams icon.

**Step 8**: Paste the previously copied link into the highlighted textbox and click “Send Test Message & Save”.

<!-- ![Teams13.png](../../../img/stagingpro/Teams13.png) -->
<img width="468" height="217" src="../../../img/stagingpro/Teams13.png">

**Step 9:** Leave the default message, type your notification, and click send. You will see a notification window confirming that the message has been sent.

<!-- ![Teams14.png](../../../img/stagingpro/Teams14.png) -->
<img width="468" height="217" src="../../../img/stagingpro/Teams14.png">

**Step 10:** Go back to teams and confirm that the test message has appeared in your new channel.

<!-- ![Teams15.png](../../../img/stagingpro/Teams15.png) -->
<img width="468" height="217" src="../../../img/stagingpro/Teams15.png">


---

Click here → [Understanding the StagingPro App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }