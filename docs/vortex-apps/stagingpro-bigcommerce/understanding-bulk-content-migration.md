# Understanding Bulk Content Migration

Bulk Content Migration assumes that the **destination store / storefront is empty**.

Select your **source environment** (Store & Storefront), then select your **destination environment** (Store & Storefront).  
Choose the entities you wish to migrate and click **Start the Migration**.

Once the migration has been submitted, go to the **History and RollBack** tab to monitor the migration progress.

---

## Bulk Migration Interface

![UBCM1.jpg](../../img/stagingpro/UBCM1.jpg)

---

## Order Data Migration

Under the **Order Data Migration** section, enable:

- **Anonymise Customer Data**

This option **scrambles customer data** from the source environment before migrating it to the destination environment, ensuring **data security** for testing purposes.

---

## Product Migration Notice

When performing a bulk migration of **Products**, you will see a popup describing the following option:

**Add/Update Products Data (brands, categories, and products) from Source Store.**

- This will **not delete** any products, brands, or categories at the destination.
- It will **add missing products**.
- Existing items (same SKU and Name) will be **ignored**.
- Click **Continue Migration** to proceed.

![UBCM2.jpg](../../img/stagingpro/UBCM2.jpg)

---

## Entity Dependencies

!!! note
	- Entities with the **black info-circle icon** have **dependencies**.  
	  Example: *Migrating Products also migrates Brands and Categories.*
	- Entities **without** the icon have **no dependencies** and can be migrated independently.

---

## Premium Features

The following features are available only in the **Premium Plan**:

- [**Schedule Migration**](stagingpro-scheduling.md)
- [**B2B Migration**](stagingpro-bundle-b2b-support.md)

---

Click here → [Understanding the StagingPro App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }