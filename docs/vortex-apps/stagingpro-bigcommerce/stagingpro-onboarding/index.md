# Onboarding

Hello, thank you for choosing StagingPro. Welcome, we are delighted to have you on board. This brief tour is designed to help you get familiar with the platform, settle in quickly, and make the most of the features available under your selected StagingPro licence plan.

Whether you are a store owner or an agency managing multiple team members, StagingPro is designed to get you up and running within minutes.

## **Quick setup (Environments)**

Step 1:  <a href="#plan"> </a> [Plan your environments](stagingpro-quick-setup.md#plan) <br> &nbsp; &nbsp; Also refer to [Best practice naming conventions and testing guidance in your new StagingPro environments](stagingpro-quick-setup.md#practice)

Step 2:  <a href="quick-setup.md#app"> </a> [Check that the StagingPro app is pre-installed](stagingpro-quick-setup.md#app)

Step 3:  <a href="quick-setup.md#link"> </a> [Link additional environments to Production](stagingpro-quick-setup.md#link) <br> nbsp; To easily access all areas of your store’s backend admin Control Panel (including your Sandbox stores) you need Store Owner\* access. <br>\*See the BigCommerce article for <a title="https://support.bigcommerce.com/s/article/Store-Owner" href="https://support.bigcommerce.com/s/article/Store-Owner">Store Owner User Role and Permissions</a>

## **Quick setup (Integrations)**

Step 4: [Add GitHub Accounts](../stagingpro-github-account-setup.md)

Step 5: [Setup notifications in Slack](../stagingpro-setup-slack.md)

Step 6: [Setup notifications in Teams](../stagingpro-setup-teams.md)

Step 7: [Setup notifications by Email](../stagingpro-setup-email.md)


## **Test a Migration**

Step 8: Try a test ‘Content Migration’ to a non-Production destination store

  * Please note that some data elements like Promotions will automatically move all other related data entities in full. Please refer to [Data Dependencies](stagingpro-data-dependencies.md), [Coupon Codes/Promotions](../stagingpro-coupons-promotions.md), [Known Data Migration Issues](../stagingpro-data-migration-known-issues.md) and [Product Fixes/Releases](../stagingpro-product-releases.md) before attempting a test migration
  
Step 9: Try a test ‘Product Catalog’ migration to a non-Production destination store

Step 10: Please ensure your storefront is NOT in a status of ‘*Prelaunch*’. The expected state for proper migration is with the status of ‘**Active**’

**IMPORTANT**: You MUST perform comprehensive testing and proper validation in non-Production environments first. Only after validation and approval, should you migrate data to a live Production environment.

For **B2B migration** - refer [this article](../stagingpro-bundle-b2b-support.md)

## **Migration Types - Bulk Migration vs Selective Migration**

### **Bulk Migration** (Migration that **creates** records in an empty destination store)
  * When you perform a Bulk migration, StagingPro assumes the entities are not present in the destination and the StagingPro app will simply create them on the target store. If the entities already exist, it will show error notifications. There is no update action for existing entities.
  * When you select ‘Products’, by default, the product stock inventory count wont migrate. Use Selective Migration for Products instead.
  * **NOTE**: New Product ids are linked to orders during Bulk Content Migration
  * **Data Dependencies**

    There are many cases where data migration may cause a conflict unless related data is migrated simultaneously. An example of this is the relationship between a product and its variations or a product and its categories. A summary list of dependencies can be found below.
	
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr style="background-color: #f4b400; text-align: left;">
      <th>Sl.No</th>
      <th>Selected Entity</th>
      <th>Dependant Entities Migrated Automatically</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Products</td>
      <td>Brands, Categories</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Product Reviews</td>
      <td>Brands, Categories, Products</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Price List Records</td>
      <td>Brands, Categories, Products, Price Lists</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Price List Assignments</td>
      <td>Price Lists, Customer Groups</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Customers</td>
      <td>Customer Groups</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Shipping Methods</td>
      <td>Shipping Zones</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Promotions</td>
      <td>Brands, Categories, Products, Customer Groups, Shipping Zones</td>
    </tr>
  </tbody>
</table>


### **Selective Migration** (Migration that **updates** records in the destination store)
  
  * **Products**
    * If products already exist on the destination store, it will updated during a migration. Products with multiple variation items will be deleted and recreated on the target store.
    * Selective Product Migration now features the ‘Copy All Products’ button, which means you can run a selective update on all products now, as an on-demand task
    * Now by default (Product Stock count wont migrate unless you specify the checkbox value on the popup 'Migrate Product Stock inventory count to target store'
    * As it relates to product images, if you delete product images on the source store SKU and perform a Selective Product migration, the corresponding product images will not be deleted from the destination SKU. As an example,
      * lets say you have a SKU with 10 images on source store which you have performed a selective migration to destination.
      * If you remove 5 images from the source SKU and repeat the Selective Product Migration, the corresponding images are not removed from the destination store. You need to delete these images manually on the destination store
	  
  * **Promotions**
    * With current behaviour, promotions that exist in the source store are migrated to the destination store
	
  * **Categories**
    * If categories exist in the destination store, you can use this option to update the categories on the target store
    * When migrating the category from source to destination, if the category already exists at the destination inside another parent category, then StagingPro creates a category with the same name as per the source category structure in the destination.
      * In this case you will have two categories in the destination with same name.
      * StagingPro will not delete the old category in the destination, it remains same.
    * **IMPORTANT NOTE**: When performing a ‘Selective Migration (Categories)’, only the checkboxed user-selected *Categories* will move to the destination store. Hence, if you want the Products associated with these *Categories* to migrate as well, then:
      * As a follow-up step, you must next perform the ‘Selective Migration (Products’) for those respective Categories.
        * But remember when performing the ‘Selective Migration’ of these Products, the associated categories will be overwritten (<u>not</u> appended) at the destination.
        * Hence review your product-category associations on the source store before performing a ‘Selective Product Migration’ to destination
		
  * **Custom Pages and Page Templates**
    * You can use this to migrate Custom pages from Source store + storefront to destination.
    * You can select ‘*Migrate Global Widgets*’ depending on your migration preference
      * IMPORTANT note, this option only applies to older customers not using the new Page Widgets API. This option is a default selection when your stores are whitelisted to use the new Page Widgets API<br>
    * Page content (text) is updated if the page already exists. If it does not exist, a new page is created. With respect to widgets and widget templates, all existing widgets contained within a page will be removed and recreated again
    * Homepage should be a selectable option under ‘Page Templates’ tab

!!! important
    For reliable **Pages** **migration** we highly recommend you use the new Page Widgets API. Send your store hashes to our Helpdesk Team so it is whitelisted on both BigCommerce as well as our StagingPro systems. Once whitelisting is confirmed, you can use the new Page Widgets API for improved migration accuracy.
	
  * **Themes**
    * You can migrate Themes selectively from your source to destination BigCommerce store.
    * Select the Theme of your choice and use the ‘Copy Theme’ button to start the migration

## **Time taken for Data Migrations**

Well, this is based on many factors such as the data available in your tenant, the data dependencies, BigCommerce API throttling, transfer connections speeds etc and can range from a few seconds for simple migrations to several hours for data intensive migrations

## **API Access (Selected Plans only)**

Depending on the subscription entitlement for selected plans, it is also possible to access to our StagingPro APIs to manage data and deployments using APIs between environments.<br><br>Our StagingPro REST API documentation is available at the following URL:<br><a title="https://www.apimatic.io/apidocs/stagingpro/v/1_0#/rest/step-by-step-tutorial" href="https://www.apimatic.io/apidocs/stagingpro/v/1_0#/rest/step-by-step-tutorial">https://www.apimatic.io/apidocs/stagingpro/v/1_0#/rest/step-by-step-tutorial</a>

## **FAQs**

For quick reference, here are some [FAQs](../stagingpro-faqs.md)

## **Knowledgebase**

The knowledgebase URL is → [Welcome to StagingPro](../index.md)

## **Support Tickets Helpdesk**

* Support ticket portal URL is → [https://helpdesk.vortexiq.ai/portal/en/home](https://helpdesk.vortexiq.ai/portal/en/home), which is the correct channel to log any support ticket requests for the Helpdesk team to review.
  * you can track all of your tickets here as well as search for knowledge base articles
  * Using the Support Ticket portal helps with faster team assignment for investigation and resolution
  
* Email (creates a ticket): <a title="mailto:helpdesk@stagingpro.com" href="mailto:helpdesk@stagingpro.com">helpdesk@stagingpro.com</a>, however Support ticket portal is the best way to reach out to Helpdesk

!!! IMPORTANT
    For support troubleshooting, the StagingPro tech team may request access mainly to sandbox stores, but temporary Production store access will be requested as appropriate. As with Bulk Migration behaviour, items on the target sandbox store will need to be deleted before attempting a migration to ensure the migration happens correctly. 
	
	Please ensure that:
    **You do not store important, business critical or development essential data on a sandbox store as this is for test migrations only! Keep your configuration settings safe elsewhere.**
    
	If there is any information we need to be aware before granting access to our tech team for troubleshooting e.g.,

    i) data on staging that you’re team is actively working on and you wish to retain

    ii) your development workflow processes we need to be aware of, 
	
	please let us know <u>before access is granted and our testing begins</u>.
	

## **Support Phone Number**

* **StagingPro Support** +44 20 4547 9292


---

[← Back to Help Centre](../../index.md){ .md-button }