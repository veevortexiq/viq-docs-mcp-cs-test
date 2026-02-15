# Understanding Bulk Content Migration

Bulk Content Migration assumes that the **destination store / storefront is empty**.

Select your **source environment** (Store & Storefront), then select your **destination environment** (Store & Storefront).  
Choose the entities you wish to migrate and click **Start the Migration**.

Once the migration has been submitted, go to the **History and RollBack** tab to monitor the migration progress.


## Bulk Migration Interface

Bulk migration assumes the destination store is empty.

Select your **source environment** (Store & Storefront), then select your **destination environment** (Store & Storefront).<br>Choose the entities you wish to migrate and click **Start the Migration**.

Entity selection matters:

* If you select Collections only, the app migrates collections only.
* If you select Products only, the app migrates products only.
* Products will be associated with Collections only when both Products and Collections are selected and migrated together.

To perform a bulk migration, select the data entities you want to migrate e.g., Products and click “Start the Migration” button.

Once the migration has been submitted, go to the **History and RollBack** tab to monitor the migration progress.

* New products will get added to the destination store from source store. Existing products in the destination will not be changed.

Note: The destination store cannot be a production environment for the delete-and-recreate option, because bulk deletion of products is not permitted in production.

Select the appropriate option and click Continue Migration.

### **Additional notes for bulk migrations**

* If products already exist in the destination and you migrate again, they will not be updated.
* If products are not present in the destination and only collections are migrated, the product count shown against collections will appear as 0.
* Only inventory items with a non-zero quantity are migrated from the source to the destination.

### **Important note before Orders and Customers migration**

Before migrating Orders or Customers, disable notifications on the target store. This avoids triggering customer emails from the destination environment during testing.

In Shopify Admin, go to Settings &gt; Notifications, ensure the Recipients option is turned off (or otherwise for relevant notification types.

<br>Under the **Order Data Migration** section, enable:

* **Anonymise Customer Data**

This option **scrambles customer data** from the source environment before migrating it to the destination environment, ensuring **data security** for testing purposes.


---

## What we migrate

Click on this **[<u>article</u>](what-we-migrate.md)** to know what data entities are migrated from source to destination.


---

Click here → [Understanding the Staging App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [Staging Onboarding](staging-onboarding/index.md)

---

[← Back to Help Centre](../../index.md){ .md-button }