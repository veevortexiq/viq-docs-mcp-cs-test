# **Quick Setup**

## **Environments**

Step 1:  <a href="#plan"> </a> [Plan your environments](#plan) <br> Also refer to [Best practice naming conventions and testing guidance in your new StagingPro environments](#practice)

Step 2:  <a href="#app"> </a> [Check that the StagingPro app is pre-installed](#app)

Step 3:  <a href="#link"> </a> [Link additional environments to Production](#link) <br>To easily access all areas of your store’s backend admin Control Panel (including your Sandbox stores) you need Store Owner\* access. <br>\*See the BigCommerce article for <a title="https://support.bigcommerce.com/s/article/Store-Owner" href="https://support.bigcommerce.com/s/article/Store-Owner">Store Owner User Role and Permissions</a>

---

### Plan your environments {#plan}
<h3 id="plan"> </h3>

**StagingPro comes with three license tiers.**

For the Standard Tier two Staging Environments are provisioned in addition to the Production Store.

For the Plus Tier, three Staging Environments are provisioned in addition to the Production Store.

For the Premium Tier five Staging Environments are provisioned in addition to the Production Store.

The suggested best practice for naming the staging environents is as follows:

1st Staging website: **Staging**

2nd Staging website: **UAT**

3rd Staging website: **Integration1**

4th Staging website: **Integration2**

5th Staging website: **Integration3**

Before you start, you must plan your environments so it will be setup correctly in StagingPro

Doing so will help you to determine:

* The correct environment names before linking/association tasks
* Distinguish between production and non-production environments (as any migration tests must happen in non-production environments first)

To do this, prepare a tabulation of the environments assigned for use with StagingPro for ease of reference as follows:

<table><tbody><tr><td><p><th rowspan="1" colspan="1" data-colwidth="161"><p><strong>Proposed environment name</strong></p></th><th rowspan="1" colspan="1" data-colwidth="90"><p><strong>Store Hash ID</strong></p></th><th rowspan="1" colspan="1" data-colwidth="254"><p><strong>Description</strong></p></th></p></td></tr><tr><td><p><td rowspan="1" colspan="1" data-colwidth="161"><p>Production</p></td><td rowspan="1" colspan="1" data-colwidth="90"><p>a123b321</p></td><td rowspan="1" colspan="1" data-colwidth="254"><p>This is the live store</p></td></p></td></tr><tr><td><p><td rowspan="1" colspan="1" data-colwidth="161"><p>Staging</p></td><td rowspan="1" colspan="1" data-colwidth="90"><p>a432c456</p></td><td rowspan="1" colspan="1" data-colwidth="254"><p>This is the pre-deployment store for smoke tests</p></td></p></td></tr><tr><td><p><td rowspan="1" colspan="1" data-colwidth="161"><p>UAT</p></td><td rowspan="1" colspan="1" data-colwidth="90"><p>a723d367</p></td><td rowspan="1" colspan="1" data-colwidth="254"><p>This is the user acceptance store configured for production builds </p></td></p></td></tr><tr><td><p><td rowspan="1" colspan="1" data-colwidth="161"><p>Integration</p></td><td rowspan="1" colspan="1" data-colwidth="90"><p>b648ce56</p></td><td rowspan="1" colspan="1" data-colwidth="254"><p>This is for system integration checks</p></td></p></td></tr></tbody></table>

---

#### Best practice naming conventions and testing guidance in StagingPro environments {#practice}

As best practice and to avoid confusion, you can use the following naming conventions to clearly label your StagingPro environments.

* **Production** - use this name for your live store site which contains all finished and approved codes/data. This is the <u>default system name</u> and <u>cannot be changed/altered to any other value</u>
* **Staging** - use this name for your pre-deployment site that is setup to mimic your live site configurations and used for your smoke tests before deployment to ‘Production'
* **UAT** - use this name for your site configured to run as a production build with a separate database. Used by clients to check that feature requests are working as expected before deployment to ‘Staging’
* **Integration** - use this name for your site configured for system integration tests and checks for functional/non-functional elements before deployment to ‘UAT’.
  * You can also label your integration environments with numeric values, e.g. Integration1, Integration2

Screenshot provided for ease of reference.

**IMPORTANT!**<br>As an additional best practice, it is highly recommended to test migrations first to non-Production environments. This helps you to gain a better understanding of StagingPro’s functionality, while safely launching/reviewing your test migrations. <br><br>Only after comprehensive testing and proper validation in non-Production environments, should you migrate data to a live Production environment.

---

### Check that StagingPro app is pre-installed {#app}
<h3 id="app"> </h3> 
<ul>
<li>
<p>With StagingPro pre-installed on the Production site, note the Production store hash ID. You can see the Plan Level of the store to detect that it is a production Store. An example name of a production Plan Level is “<strong>Plan Level:</strong> Enterprise Plan Store” Similarly, in a Staging store, the plan level is shown as “<strong>Plan Level:</strong> Sandbox Store”.</p>
</li>
<li>
<p>When you launch the StagingPro app on the Staging site, enter the Productions store hash here The store hash is generally in the following format: <a title="https://store-a1b2c3d4e5.mybigcommerce.com/" href="https://store-a1b2c3d4e5.mybigcommerce.com/" class="_ymio1r31 _ypr0glyw _zcxs1o36 _mizu1v1w _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y _4bfu1r31 _1hms8stv _ajmmnqa1 _vchhusvi _kqswh2mm _syaz13af _ect4ttxp _1a3b1r31 _4fpr8stv _5goinqa1 _f8pj13af _9oik1r31 _1bnxglyw _jf4cnqa1 _30l313af _1nrm1r31 _c2waglyw _1iohnqa1 _9h8h12zz _10531ra0 _1ien1ra0 _n0fx1ra0 _1vhv17z1">https://store-a1b2c3d4e5.mybigcommerce.com/</a> which means a1b2c3d4e5 is the store hash ID.<br /></p>

</li>
</ul>
<p>And click ‘Save’ to save the change.</p>
<p><strong>IMPORTANT</strong>: production hash ID must be entered only in the ID field of the respective Sandbox store</p>
<ul>
<li>
<p>You will see the following notification message of a ‘connection request’ awaiting approval on the Production Store.</p>
</li>
<li>

<p>Head over to the Production Store and click the ‘Approve’ button as per the screenshot below to authorize the ‘connection request.’<br /></p>

</li>
<li>
<p>Specify the name for your connected environment and choose one of the following three options and click ‘Ok’:</p>
<ul>
<li><strong>Just connect the Staging Environment</strong></li>
<li><strong>Delete Products, Brands, and Categories from Staging Environment</strong></li>
<li><strong>Delete all catalog data and move Data, Themes from Production to the Staging website.</strong></li>
</ul>
</li>
<li>

<p>The newly linked environment will show up on the Home Page list.<br /></p>

</li>
<li>
<p>Repeat for all additional environments</p>
</li>
</ul>
<p>Note: 'Production' is a restricted and <u>reserved</u> name used in the coding and hence cannot be renamed to any other value.</p>
<hr />
</h3>

&nbsp;

###  Link additional environments to Production {#link}
<h3 id="link"> </h3> 


* With StagingPro pre-installed on the Production site, note the Production store hash ID. You can see the Plan Level of the store to detect that it is a production Store. An example name of a production Plan Level is “**Plan Level:** Enterprise Plan Store” Similarly, in a Staging store, the plan level is shown as “**Plan Level:** Sandbox Store”.
* When you launch the StagingPro app on the Staging site, enter the Productions store hash here The store hash is generally in the following format: <a title="https://store-a1b2c3d4e5.mybigcommerce.com/" href="https://store-a1b2c3d4e5.mybigcommerce.com/" class="_ymio1r31 _ypr0glyw _zcxs1o36 _mizu1v1w _1ah3dkaa _ra3xnqa1 _128mdkaa _1cvmnqa1 _4davt94y _4bfu1r31 _1hms8stv _ajmmnqa1 _vchhusvi _kqswh2mm _syaz13af _ect4ttxp _1a3b1r31 _4fpr8stv _5goinqa1 _f8pj13af _9oik1r31 _1bnxglyw _jf4cnqa1 _30l313af _1nrm1r31 _c2waglyw _1iohnqa1 _9h8h12zz _10531ra0 _1ien1ra0 _n0fx1ra0 _1vhv17z1">https://store-a1b2c3d4e5.mybigcommerce.com/</a> which means a1b2c3d4e5 is the store hash ID.<br>


And click ‘Save’ to save the change.

**IMPORTANT**: production hash ID must be entered only in the ID field of the respective Sandbox store

* You will see the following notification message of a ‘connection request’ awaiting approval on the Production Store.


  Head over to the Production Store and click the ‘Approve’ button as per the screenshot below to authorize the ‘connection request.’<br>



* Specify the name for your connected environment and choose one of the following three options and click ‘Ok’:
  * **Just connect the Staging Environment**
  * **Delete Products, Brands, and Categories from Staging Environment**
  * **Delete all catalog data and move Data, Themes from Production to the Staging website.**


  The newly linked environment will show up on the Home Page list.<br>



* Repeat for all additional environments

Note: 'Production' is a restricted and <u>reserved</u> name used in the coding and hence cannot be renamed to any other value.

&nbsp;

## **Integrations**

Step 4: [Add GitHub Accounts](../stagingpro-github-account-setup.md)

Step 5: [Setup notifications in Slack](../stagingpro-setup-slack.md)

Step 6: [Setup notifications in Teams](../stagingpro-setup-teams.md)

Step 7: [Setup notifications by Email](../stagingpro-setup-email.md)


---

Click here → [Understanding the StagingPro App pages](../app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](../stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }