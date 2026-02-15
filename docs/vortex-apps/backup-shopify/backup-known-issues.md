# Known Issues

The following are some of the known issues or limitations of the app that arise from restrictions or behaviors specific to the Shopify platform.
The following are some of the known issues or limitations of the app that arise from restrictions or behaviors specific to the Shopify platform.

### Products

a) When a deleted product is being restored, the system assigns it a new product ID. This is because Shopify generates product IDs incrementally, and as a result, VIQ Backup cannot retain the original product ID. Additionally, image url associations do not restore, hence, images are not restored.

b) Updates to a product’s variant data (add, update, or delete) do not trigger Shopify webhooks. However, changes to other product fields do trigger webhook events.

Therefore, to ensure that variant data is properly backed up, it is advisable to make a minor update to a standard product field (such as the description or name) whenever variant data is modified. This will trigger the webhook and allow the backup process to capture the changes to the variants.

### Orders

We do not restore orders in Shopify because they cannot be deleted, and restoring them could trigger actions like customer notification emails. Instead, historical versions are displayed in the Restore Center, allowing users to view and compare different versions.

!!! Note
    The **order count** may differ from the store dashboard because the app includes all orders —<u>active, incomplete, archived</u>, as well as <u>incomplete orders with declined payment status</u> — in its calculation.

> **Archived Orders**
> Currently, archived orders are not included in backups and therefore cannot be restored.

### Files (Images)

The VIQ Backup app does not include files stored under Content → Files in the Shopify admin. As a result, any deleted files in this section cannot be restored through the app.<br>We recommend manually backing up these files and storing them securely.

### Duplicate Revisions

Occasionally, we receive multiple webhook notifications from Shopify for the same data change, causing multiple versions in the [Restore Center](https://vortexiq.atlassian.net/wiki/spaces/VIAAFS/pages/90374146/Understanding+the+Restore+Center). While we typically identify and remove these duplicates, if thern.

### Version Comparison Notes

!!! Note
    The **Summary** tab always displays the **complete dataset**. Difference comparison is **not supported** here. To view differences between versions, use the **Source Code** view.

!!! Important
    The **deleted version cannot be indicated** in the version dropdown list, for **non-webhook entities** such as:

	· Discount Codes

	· Discount Automatic

	· Blogs

	· Pages

	· Files

	· Themes

	· Gift Cards

    because the webhook events are not available for these entities.

### Realtime backup of a data entity is disabled

The **Enable/Disable** toggle controls the subscription to BigCommerce webhooks. 

When realtime backup of a data entity is disabled, VIQ Backup sends an immediate API request to unsubscribe; however, it may take up to **10 minutes** for this change to take effect. 

In some cases, changes made just before disabling may still appear in the backup. 

This behavior is not due to accidental data capture but results from the timing and nature of data sent by BigCommerce during the transition.


### Restore of deleted data before App installation

We do not restore data that was deleted prior to App installation.

---

Click here → [Understanding the Backup App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [Backup Onboarding](backup-onboarding.md)

---

[← Back to Help Centre](../../index.md){ .md-button }