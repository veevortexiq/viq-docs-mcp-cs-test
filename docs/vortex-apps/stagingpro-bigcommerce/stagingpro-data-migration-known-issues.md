# Data Migration Known Issues

StagingPro cannot migrate all parts of BigCommerce, and most issues are already known. Some are under development, while others depend on future BigCommerce updates.

## Products
- Channel Assignment Required for Product Migration  
- Products not assigned to any channel affect both bulk and selective content migration; internal testing has confirmed this limitation. 
- If a product has no channel assignment, it will be excluded from migration tasks, which can lead to incomplete data transfer.

## Shared Modifier Options and Shared Variant Options
StagingPro does not currently support migrating Shared Modifier Options or Shared Variant Options. Regular modifier and variant options migrate correctly. BigCommerce is working on APIs for Shared Options (no confirmed ETA).

Customs Information is not part of the standard Product API and is not migrated.

## Orders
- Order IDs are incremental in BigCommerce, so migrated orders will have new numbers.
- Destination store orders cannot be deleted, causing count to grow with repeated migrations.
- Original order number storage is on the roadmap.
- Orders migrate with statuses “as-is”.
- Recommended: disable customer order notifications in Marketing → Transaction Emails.

## Widgets
Widget migration is supported only for stores whitelisted for the new Page Widgets API (Selective Migration). Multi‑column widget layouts are not yet supported.

## Blog-type Pages
BigCommerce API does not support migrating pages with `blog` page type. These must be created manually in the Control Panel.

## "The URL is duplicate" API Notification

**Pages & Categories**
	- Conflicts occur when Page URLs and Category URLs overlap. Ensure unique URL values.
	
**Products**
	- If no visible duplicate exists, BigCommerce Support may need to run an orphan URL cleanup.

## Multi‑Shipment Orders
BigCommerce API allows only one shipment per order. Additional shipments are not migrated. Payment method becomes “Manual”.

## Incorrect Order Count
Some orders cannot be created due to BigCommerce limitations. Issue under investigation.

## Complex Rules
Complex product rules are not supported and may be added to the roadmap.

## Migrating Apps
Only channel data stored in BigCommerce is migrated; app‑internal data cannot be migrated.

## Migrating Custom Scripts
Scripts in Script Manager are not migrated.

## Migrating Metafields
Metafields at Brand, Category, and Product levels can be migrated.

## Related Products
Migration is supported.

## Migrating Custom Fields
Product custom fields migrate correctly. Customer custom fields do not exist in BigCommerce except for B2B “Extra Fields”.

## Customer Custom Form Fields
Migrated only if custom form fields also exist in the destination store. BigCommerce API does not create customer fields.

## Payment Methods
Payment methods cannot be migrated currently.

## Gift Certificates
Migrated only if “Enable Gift Certificate” is enabled.

## Images
- There is currently no BigCommerce API to move banners and home page carousel images. We are looking at alternative migration methods and hope to have a solution shortly. It is worth noting that images outside of the THEME/ Template folder cannot be migrated as of now.

- BigCommerce has no API to move images from WEBDAV and Image Manager. Any images such as Carousel images used in the Cornerstone theme, will not automatically move using StagingPro. Those images can be moved manually from your side.

- There is currently no BigCommerce API available for moving category image URLs. Once such an API becomes available, it will be considered for inclusion in our implementation roadmap.

!!! note
	For product images to get migrated successfully, the image should not have any ‘spaces’ or '&' character in the name of the image file.

## Social Media Links
BigCommerce API does not allow migrating these values.

## Category & Brand Landing Pages
Not supported via API. Workaround: migrate Categories, Brands, Widgets, Widget Templates, and Pages.

## Category Template Layout File
Ensure `layout_file` exists in the destination theme. Migrate theme, then categories.

## Data Dependencies
Examples include product–variation and product–category relationships.

## Tax Classes
Not currently available via API.

## Page Redirects
301 redirects are not migrated (planned future feature).

## Themes
Themes are applied only to the default store.

## High Variant Count Product Issues
Products with exceptionally high variant counts may return 500 errors. Requires BigCommerce engineering intervention.

## API Rate Limits
BigCommerce applies quota‑based rate limits refreshed every 30 seconds.

| Plan Type | Quota |
|----------|-------|
| Enterprise / Enterprise‑Test | By plan & [resource](https://support.bigcommerce.com/s/article/Platform-Limits#storelimits) |
| Other sandboxes (Dev/Partner/Employee) | By [resource](https://support.bigcommerce.com/s/article/Platform-Limits#storelimits) |
| Pro | 60k/hr (450 per 30s) |
| Plus & Standard | 20k/hr (150 per 30s) |

## Customer Segmentation
Planned roadmap item.

## Coupon Codes
When migrating coupon codes, also migrate categories if dependencies exist.

## Promotions
Automatic and coupon promotions migrate.  
However, API‑created or legacy promotions cannot be edited after migration—must delete and recreate in source before migrating again.

## Other Issues
For any additional issues, raise a support ticket.  


---

Click here → [Understanding the StagingPro App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }