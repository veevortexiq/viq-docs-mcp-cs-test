# Vortex Backup Known Issues

The following are some of the known issues or limitations of the app that arise from restrictions or behaviors specific to the BigCommerce platform.

## **Backup Strategy Overview**

##### 1. **Entities with One-Time Full Backup + Realtime Backup (via Webhooks)**

For the following data entities, a one-time full backup is performed during app installation. After that, **real-time backups** are triggered automatically whenever changes are detected via **BigCommerce Webhooks**:
    
  - Customers
  - Orders
  - Channels
  - Categories
  - Products
  - Pages
  - Email Templates

By default, real-time backup is **enabled** for all of the above entities after installation. This can be **enabled or disabled** anytime from the **Settings** page.

##### 2. **Entities with One-Time Full Backup + On-demand Backup**

!!! important
    Users are advised to **initiate manual backup compulsorily, before making changes as well as immediately after making any changes,** from the settings tab before making modifications or deletions to the data for the following mentioned entities.

Click on “**Backup**” button corresponding to each of the data entities given below.

The following entities also receive a **one-time full backup** during app installation. However, **realtime backups are not supported**, as BigCommerce does not provide webhooks for these data types.
 
  - Brands
  - Coupons
  - Promotions
  - Blog Posts
  - 301 Redirects
  - Gift Certificates

Users can initiate a **manual full backup** using the **"Backup"** button.

!!! note
    Please note that this is a backup tool, and data is not actively synced. As a result, the entities mentioned above may still appear as 'live' even if they hav been deleted. We are currently exploring a backup-and-compare mechanism for a future release.

## **Images in WebDAV / Image manager**

Currently, BigCommerce does not provide APIs to back up banner or homepage carousel images. Since there is no API to transfer images from WebDAV, VIQ Backup does not back up any images stored in WebDAV.

Additionally, image url associations do not restore, because the BigCommerce API only returns the relative CDN url path, but '**not**' the actual WebDAV url path.  Hence, due to the BC API limitation of not returning the actual WebDAV path, deleted image links of  products, variants, brands, and categories cannot be restored. If an image isn’t available, it will simply be skipped, and the products, variants, brands, and categories will still be created without the images.

## **Products**

**a)** When a **deleted** product is being restored, the system assigns it a **new product ID**. This is because BigCommerce generates product IDs incrementally, and as a result, VIQ Backup cannot retain the original product ID.

**b)** Updates to a product’s variant data (add, update, or delete) **do not** trigger BigCommerce webhooks. However, changes to other product fields **do** trigger webhook events.

!!! tip
    Therefore, to ensure that variant data is properly backed up, it is advisable to make a minor update to a standard product field (such as the description or name) whenever variant data is modified. This will trigger the webhook and allow the backup process to capture the changes to the variants.

**c)** When a product is restored to a previous version in which the associated brand or category no longer exists, the following message is displayed:

![KI1.png](../../img/viq-backup/KI1.png)

### **Inventory**

In the initial release, inventory restoration will be limited to the **default location** only. Functionality for **multiple locations**, **safety stock** and **low stock level thresholds** will be considered for a subsequent release.

## **Brands**

When a **deleted** brand is being restored, it is created with a **new ID**. As a result, previous associations are not retained and products must be **manually re-associated**. However, when a brand is restored to a previous version, the existing ID is preserved and associations remain intact.

## **Categories**

When a **deleted** category is being restored, it is created with a **new ID**. As a result, previous associations are not retained, products must be **manually re-associated**, and the **Template layout file** resets to **Default**. However, when a category is restored to a previous version, the Template layout file remains unchanged and continues to reflect the value from the current version prior to restore.

## **Customers**

When a **deleted** customer is being restored, it is created with a **new ID**, as a result, previous associations are not retained. Any changes to customer addresses — whether adding, deleting, or updating — do not trigger webhooks. To trigger a webhook and create a version, you must save the customer record. The BigCommerce API do exist for restoring the custom fields.

## Version Comparison Notes

!!! note
    The **Summary** tab always displays the **complete dataset**. Difference comparison is **not supported** here. To view differences between versions, use the **Source Code** view.
!!! warning
	The **deleted version cannot be indicated** in the version dropdown list, for **non-webhook entities** such as:

	- Brands
	- Coupons
	- Promotions
	- Blog Posts
	- 301 Redirects
	- Gift Certificates

	because the webhook events are not available for these entities.

## **Multi-Storefront**

Products, categories and promotions are associated with specific channels and are successfully restored to their respective channels. Customers are also linked to a channel and restored accordingly. Pages, 301 redirects, and email templates each have a direct association with a single channel and are restored to the same.

Brands, blog posts, coupon codes, and gift certificates are not channel-specific, while orders cannot be restored and moreover they have no channel dependency.

## **Orders**

We do not restore orders in BigCommerce because they cannot be deleted, and restoring them could trigger actions like customer notification emails. Instead, historical versions are displayed in the Restore Center, allowing users to view and compare different versions.

!!! info
	💡The **order count** may differ from the store dashboard because the app includes all orders — active, incomplete, archived, as well as incomplete orders with declined payment status — in its calculation.

##### **Archived Orders**

Currently, archived orders are not included in backups and therefore cannot be restored.

## **Duplicate Revisions**

Occasionally, we receive multiple webhook notifications from BigCommerce for the same data change. While we typically identify and remove these duplicates, if there is a significant delay between the webhook events, the later-arriving data may be retained. This does not impact the accuracy or functionality of data restoration.

## **Realtime backup of a data entity is disabled**

The **Enable/Disable** toggle controls the subscription to BigCommerce webhooks. When realtime backup of a data entity is disabled, VIQ Backup sends an immediate API request to unsubscribe; however, it may take up to **10 minutes** for this change to take effect. In some cases, changes made just before disabling may still appear in the backup. This behavior is not due to accidental data capture but results from the timing and nature of data sent by BigCommerce during the transition.

## **Restore of deleted data before App installation**

We do not restore data that was deleted prior to App installation.

## **Pages**

The page count shown in the dashboard may differ from the actual list of pages in the BigCommerce store, as there are no webhooks available to track deleted pages. As a result, the dashboard may display a higher count than the current number of pages in the store.

## **Channels**
!!! warning
	📢 Please note that due to BigCommerce API limitations, deleted channels cannot be restored.

## **Gift Certificates**

Only the gift certificates (Orders > Gift Certificates) purchased by the customers are backed up and can be restored. The gift certificate settings (Marketing > Gift Certificates) are not backed up and cannot be restored.

When a deleted **gift certificate** is restored, it is created with a **new ID**. As a result, previous associations are not retained, orders must be **manually re-associated**.

## **B2B Data Entities**

At present, B2B data entities are not included in backups and therefore cannot be restored. Support for these entities may be considered in future releases.

To view our Onboarding steps, please access the following article → [Backup Onboarding](viq-backup-onboarding.md)

---

[← Back to Help Center](../../index.md){ .md-button }