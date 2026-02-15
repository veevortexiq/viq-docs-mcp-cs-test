# FAQs {#top}

[Q. How can I setup the StagingPro App on Production and Staging stores?](#setup-app)

[Q. What are Staging Environments?](#what-are-staging-environments)

[Q. Setting up StagingPro for the first time?](#setup-stagingpro-first-time)

[Q. Why is StagingPro is taking a long time to create an environment?](#long-time)

[Q. How do I add GitHub accounts?](#github-account-setup)

[Q. How do I set up notification settings?](#notification-settings)

[Q. How do I link Sandbox environments to your Production store?](#link-sandbox-to-production)

[Q. How do I migrate specific products?](#migrate-specific-products)

[Q. Can I create an environment containing only BigCommerce sample data?](#bigcommerce-sample-data)

[Q. I approved a GitHub commit but need to rollback – how do I undo my changes?](#rollback-github-commit)

[Q. I have a number of third-party extensions installed. Will these be copied to the new environment?](#third-party-extensions)

[Q. How do I prevent confidential customer data being migrated to sandbox stores meant for testing and development?](#prevent-confidential-data-migration)

[Q. I am using an external agency. Can I prevent changes being made to my production environment without me first approving it?](#restrict-production-changes)

[Q. Can I limit notifications which are only applicable to me?](#limit-notifications)

[Q. I want to break my site down into multi “Niche” websites. Can I do this with StagingPro?](#multi-niche-websites)

[Q. Can I create a GitHub ID though the app?](#create-github-id)

[Q. How does StagingPro speed up my project?](#stagingpro-benefits)

[Q. What is the difference between a staging and development environment?](#staging-vs-development)

[Q. Can I choose specific content to Migrate?](#selective-migration)

[Q. How StagingPro helps with BigCommerce store development work?](#stagingpro-bigcommerce)

[Q. Are entity increment id’s migrated as-is from the source to the destination store?](#entity-increment-ids)

[Q. How can I Schedule migrations?](#schedule-migrations)

[Q. What are the data migration limitations?](#migration-limitations)

[Q. What to do if I get ‘invitation not received’ message in GitHub connection screen?](#invitation-not-received)

[Q. Why did my Gift Certificate not migrate?](#gift-certificate-not-migrated)

[Q. Why can't I move products without Brands and Categories](#brands-categories)

[Q. Can you pause or cancel a data migration after it begins?](#cancel-migration)

[Q. Will reviews migrate when I use the Product Catalog interface?](#reviews-migrate)


---
---

### Q. How can I setup the StagingPro App on Production and Staging stores? {#setup-app}

Please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md) to quickly get started.


[go top](#top)


---

### Q. What are Staging Environments? {#what-are-staging-environments}
A production environment is the public-facing view of your website. It is where you install StagingPro, and any changes StagingPro makes to the production environment will affect your live website.

A staging environment (stage) is a near replica of a production environment for software testing. Code builds and updates require Staging environments to ensure quality under a production-like environment before application deployment to the production environment.


[go top](#top)


---

### Q. Setting up StagingPro for the first time? {#setup-stagingpro-first-time}
Whether you are a store owner or an agency with dozens of team members, StagingPro has been designed to get you up and running within minutes. 

Refer to [StagingPro Onboarding](stagingpro-onboarding/index.md) as reference to quickly get started.


[go top](#top)

---

### Q. How do I add GitHub accounts? {#github-account-setup}

Please refer to this article - [Github Account Setup](stagingpro-github-account-setup.md)


[go top](#top)

---

### Q. Why is StagingPro is taking a long time to create an environment? {#long-time}
The size of the production or source environment is partly responsible for the speed of any migration. The Enterprise version of BigCommerce allows faster and unlimited access to APIs hence will result in faster data migration than other tires of BigCommerce stores.

Design, store settings, brands, categories, etc., are moved within seconds, but more oversized items like orders can consume significantly longer time. Anonymising data will further slow down the process due to the extra steps involved.

While the whole point of a staging environment is to match as close as possible to the production version, there are cases where copying all your orders to make a design change on your homepage is complete overkill. Before creating a new environment, think about what you are moving to and why.


[go top](#top)

---

### Q. How do I set up notification settings? {#notification-settings}

For notifications in Slack → [Setup notifications in Slack](stagingpro-setup-slack.md)

For notifications in Teams → [Setup notifications in Teams](stagingpro-setup-teams.md)

For notifications by Email → [Setup notifications by Email](stagingpro-setup-email.md)


[go top](#top)

---

### Q. How do I link Sandbox environments to your Production store? {#link-sandbox-to-production}

#### Overview

With **StagingPro pre-installed on the Production site**, note the **Production store hash ID**.  
You can identify the type of store by checking the **Plan Level**:

- **Production Store:** `Plan Level: Enterprise Plan Store`
- **Staging Store:** `Plan Level: Sandbox Store`


#### Step 1: Enter the Production Store Hash in the Staging Store

When you launch the **StagingPro app on the Staging site**, enter the **Production store hash ID** in the designated field.

The store hash is generally in the following format:

```
https://store-a1b2c3d4e5.mybigcommerce.com/
```

In this example, **`a1b2c3d4e5`** is the **store hash ID**.

Click **Save** to apply the change.

> **IMPORTANT**  
> The **Production store hash ID must be entered only in the ID field of the respective Sandbox store**.


#### Step 2: Approve the Connection Request

After saving, a **connection request notification** will appear on the **Production Store**, awaiting approval.

1. Navigate to the **Production Store**
2. Click the **Approve** button to authorize the connection request


#### Step 3: Configure the Connected Environment

Once approved:

1. Specify a **name** for the connected environment
2. Choose **one** of the following options:
   - **Just connect the Staging Environment**
   - **Delete Products, Brands, and Categories from the Staging Environment**
   - **Delete all catalog data and move Data and Themes from Production to the Staging website**
3. Click **OK**


#### Step 4: Confirmation

- The newly linked environment will appear on the **Home Page list**
- Repeat the above steps for **all additional environments**

> **Note**  
> **`Production`** is a **restricted and reserved name** used internally and **cannot be renamed**.


[go top](#top)

---

### Q. How do I migrate specific products? {#migrate-specific-products}

While you can, of course, migrate all products between environments, StagingPro gives you the flexibility to select specific products to migrate. This is possible using Selective Migration > Products. Please refer to this [article](understanding-selective-content-migration.md).


[go top](#top)

---

### Q. Can I create an environment containing only BigCommerce sample data? {#bigcommerce-sample-data}

Refer to [StagingPro Onboarding](stagingpro-onboarding/index.md) as reference to quickly get started.


[go top](#top)

---

### Q. I approved a GitHub commit but need to rollback – how do I undo my changes? {#rollback-github-commit}

At present, StagingPro has the ability to rollback design changes only. 

From the dashboard, click on the “History and Rollback” tab.

- image

Click the blue Rollback button. Version numbers are shown for each deployment for your record. Redeployment will lead to the previous version being redeployed to the Website.


[go top](#top)

---

### Q. I have a number of third-party extensions installed. Will these be copied to the new environment? {#third-party-extensions}

No, third party extensions will not be copied/migrated. They have to be reinstalled and configured for each environment. This feature will be added to our road map and will be made available as soon as BigCommerce provides relevant APIs and App providers support this functionality. 

Refer to [Data Migration Known Issues](stagingpro-known-issues.md)


[go top](#top)

---

### Q. How do I prevent confidential customer data being migrated to sandbox stores meant for testing and development? {#prevent-confidential-data-migration}

You don’t have to share any personal information. By default StagingPro will transfer all order and customer information; however, you can choose to anonymize the data.

From the dashboard, select the “Content Migration” tab, and under the Order Data Migration settings, you will be able to choose whether or not you want to anonymize


[go top](#top)

---

### Q. I am using an external agency. Can I prevent changes being made to my production environment without me first approving it? {#restrict-production-changes}

As a store owner, you will be able to restrict access to those who may or may not use the StagingPro app through your BigCommerce user permissions. Once you give Administrator rights to the agency, they will be able to send changes to production.

Administrator permissions are assigned to GitHub, so if you have advanced knowledge of GitHub, you could retain admin rights yourself while giving contributor or viewer rights to your agency. Please get in touch with your agency first because this may cause difficulty for your project.


[go top](#top)

---

### Q. Can I limit notifications which are only applicable to me? {#limit-notifications}

At this time, it is not possible to specify which messages you will receive. If you have set up notifications via email or a link to a channel, StagingPro will notify you for every event.


[go top](#top)

---

### Q. I want to break my site down into multi “Niche” websites. Can I do this with StagingPro? {#multi-niche-websites}

Yes, you can. StagingPro will create as many environments as your license will allow. Use the Content and Design Migration settings to deselect the elements you do not want to move. By selecting the “Design and Content” and “Store Settings,” you will be creating an ‘Empty’ store with zero products but keeping the supporting store settings.


[go top](#top)

---


### Q. Can I create a GitHub ID though the app? {#create-github-id}

No. You must first have a GitHub id, which you can get by registering for free by clicking [here](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github).


[go top](#top)

---

### Q. How does StagingPro speed up my project? {#stagingpro-benefits}

StagingPro has been designed with agencies in mind. The goal is to minimize manual work as possible, thus eliminating mistakes. Most BigCommerce agencies have worked out different workarounds, and many are successful, but they all consume time. On a large team, just setting up each developer for GitHub and arranging multiple instances on their local environments can take hours.

The more human interaction sets up a new environment, the more chances of committing mistakes. Some can be costly mistakes if they are only identified once a project is underway.

StagingPro eliminates mistakes by automating the creation of different environments while at the same time setting up the GitHub environment for each team member. No more custom scripts or importing of data from CSV files. Everything gets done at once while you concentrate on more important things.


[go top](#top)

---

### Q. What is the difference between a staging and development environment? {#staging-vs-development}

From a technical perspective, there is no difference between the two. From an agency point of view, the terminology is used to indicate the purpose of the environment. For example, a development environment is where the developers themselves work. The code may or may not be completed and may or may not have been tested.

The staging server is where the code is deployed so that your clients can take a look at it before it goes live. It must have the same configuration settings as the production environment, and the software can be tested in live conditions.

StagingPro only distinguishes between the two during the setup process to align with agency terminology. Still, these names can be edited to make them more meaningful to you and your team.


[go top](#top)

---

### Q. Can I choose specific content to Migrate? {#selective-migration}

Through Selective Content Migration. Refer [Pages and Layouts](selective-content-migration/pages&layouts.md)


[go top](#top)

																										
---

### Q. How StagingPro helps with BigCommerce store development work? {#stagingpro-bigcommerce}

StagingPro is used for migrating store data from production to sandbox environments for the purposes of development, testing and validation.


[go top](#top)

---

### Q. Are entity increment id’s migrated as-is from the source to the destination store? {#entity-increment-ids}

No. During StagingPro migrations from a source store to a destination store, StagingPro does not have control over the increment IDs assigned by BigCommerce when data is created in the target store. These IDs are internal reference numbers automatically generated and managed by BigCommerce.

As a result, products should be referenced using their SKU, not the product increment ID, as SKUs are preserved during migration.

Similarly, when orders are migrated, new order IDs are assigned by BigCommerce. Migrated orders are set to a Pending status to prevent accidental fulfillment from the destination store.


[go top](#top)

---

### Q. How can I schedule migrations? {#schedule-migrations}

a) On the home page, click on the Schedule Content Migration

b) Click on the Products tab

c) Select the Catalog from the drop down list i.e., the source environment

d) Click on the checkboxes for the desired promotions to be migrated

e) Click on the Schedule Copy button

f) Then, click on the destination environment


[go top](#top)

---

### Q. What are the data migration limitations? {#migration-limitations}

Please refer to this article - [Data migration known issues](stagingpro-data-migration-known-issues.md)


[go top](#top)

---

### Q. What to do if I get ‘invitation not received’ messagee in GitHub connection screen? {#invitation-not-received}

##### q. I have owner access to all of our BigCommerce stores (sandboxes and prod). StagingPro is installed in the production store and I can see the StagingPro dashboard. I have created a repo in the companies github repo as described in the documents. I added the stagingpro user, but when I paste the url in BigCommerce, I get invite not received message as shown below, why?

> image

Recommend checking the following article to get familiarised with StagingPro - [StagingPro Onboarding](stagingpro-onboarding/index.md)

As it relates to ‘GitHub’, please confirm if you tried the following steps for adding GitHub accounts?
Refer to this article - [Add GitHub accounts](stagingpro-github-account-setup.md)


[go top](#top)

---

### Q. Why did my Gift Certificate not migrate? {#gift-certificate-not-migrated}

Gift certificates must first be activated within BigCommerce before migration, meaning that, depending on the BigCommerce settings, the first environment created during the StagingPro installation may not include them.

You can still do a partial migration of gift certificates after the environment has been created by following these steps.

Step 1: Within BigCommerce, navigate to “Marketing,” “Gift Certificates,” and make sure that the “Enable Gift Certificates” is ticked.

> images


[go top](#top)

---

### Q. Why can't I move products without Brands and Categories? {#brands-categories}

Brands and Categories are dependencies of Products which means they go hand in hand with each other. 

Although it is not necessary to have a product in a specific category and even brands are not compulsory StagingPro considers all three to be critical and will migrate all three by default.

 When migrating products you will be presented with the following popup screen giving you the options available

You can choose to delete all existing data (brands, categories and products only) first before starting the migration. This means that a brand new catalogue will be created.

Option 2 is mostly for cases where you just need to update some data between environments. Any existing products, categories or brands will be left alone while only new, unsynchronised data will be migrated


[go top](#top)

---

### Q. Can you pause or cancel a data migration after it begins? {#cancel-migration}

Currently, it can not be paused or cancelled as the data migration will carry on till the process is completed.
Our team will review this as a feature request in our development roadmap.


[go top](#top)

---

### Q. Will reviews migrate when I use the Product Catalog interface? {#reviews-migrate}

Yes, they will migrate.


[go top](#top)


---

Click here → [Understanding the StagingPro App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }