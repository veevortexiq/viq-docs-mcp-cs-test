# Vortex Backup FAQs

#####**1. What data entities on my BigCommerce store are protected by the Backup and Restore app?**

The following data items are currently protected:

- Catalogue Data: Products, Categories, Brands, Promotions, Blog Posts,

- Customer Data: Customers, Orders, Coupons, Gift Certificates

- Settings Data: 301 redirects, Channels, Pages, Email Templates


#####**2. What is the difference between ‘Realtime’ and ‘Manual’ backup?**

**Realtime** means the VIQ Backup app is set to actively listen to the BigCommerce store webhooks and tracks changes in real-time.

Realtime backup is done for these data items: Products, Categories, Customers, Orders, Channels, Pages, Email Templates.

**Manual** backups applicable for data entities which don’t have webhooks, so you can take full backups by clicking on ‘**Backup**’ button.

Manual backup is done for these data items: Brands, Promotions, Blog Posts, Coupons, Gift Certificates, 301 redirects.

!!! important
    Users are advised to **initiate manual backup compulsorily** from the settings tab **before** as well as **after** making modifications or deletions to the data for the following mentioned entities.
	
	Click on “**Backup**” button corresponding to each of the data entities given below:
	
	- Brands
	- Promotions
	- Blog Posts
	- Coupons
	- Gift Certificates
	- 301 redirects.


#####**3. Can I restore backup data to another store?**

No, currently the data can only be restored to the same store on which the VIQ Backup app is installed. We are going to support rollback to any of the connected Staging Environments powered by StagingPro in coming months.


#####**4. Why can’t I see images in the restored version of the product?**

Currently, BigCommerce does not provide APIs to back up banner or homepage carousel images. In addition, since there is no API to transfer images from WebDAV, VIQ Backup app does not back up any data stored in WebDAV.

As a result, images (including those in WebDAV or the Image Manager) are not included in backups, consequently, deleted images of products, variants, brands, and categories cannot be restored.

Images are loaded from CDN links. If an image isn’t available, it will simply be skipped, and the products, variants, brands, and categories will still be created without the images.


#####**5. Why there is no ‘restore to version’ button for an order for restoring to its previous version?**

We do not restore orders in BigCommerce because they cannot be deleted and restoring them could trigger actions like customer notification emails.


#####**6. Why does the app dashboard show a discrepancy in the page count compared to the BigCommerce control panel (storefront webpages)?**

The dashboard may show a higher page count than the BigCommerce store because there are no webhooks to track deleted pages, leading to discrepancies in the displayed data.


#####**7. Can you restore data to a specific channel (storefront)?**

!!! important
    📢 Please note that due to BigCommerce API limitations, deleted channels (storefronts) cannot be restored.

- Data entities that will get restored to the same channel (storefront):

- Products

- Categories

- Promotions

- Customers

- Coupon codes

- Gift Certificates

- Pages

- 301 Redirects

- Email Templates

Following data entities are not channel specific:

- Brands

- Blog posts

- Orders

- Coupon codes


If you have any questions or need clarification, please contact us at [**helpdesk@vortexiq.ai**](mailto:helpdesk@vortexiq.ai)

For more known issues related to the backup and restore of data entities, please access the following article → [Backup Known Issues](viq-backup-known-issues.md) 

To view our Onboarding steps, please access the following article → [VIQ Backup Onboarding](viq-backup-onboarding.md)

---

[← Back to Help Center](../../index.md){ .md-button }