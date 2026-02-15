# Data Dependencies

When performing partial migrations, it is important to know that some data depend on others. For example, while it is possible to migrate a Product, this data will not be complete unless the brands, categories, variations, etc., have been migrated.

The list of known data migration issues can be found [here](../stagingpro-data-migration-known-issues.md)

<table><tbody><tr><td><p><strong>Migrating Entity</strong></p></td><td><p><strong>Other Entities Migrated</strong></p></td></tr><tr><td><p>Products</p></td><td><p>Brands and Categories</p></td></tr><tr><td><p>Product Reviews</p></td><td><p>Brands, Categories and Products</p></td></tr><tr><td><p>Price List Records</p></td><td><p>Brands, Categories, Products and Price Lists</p></td></tr><tr><td><p>Price List Assignments</p></td><td><p>Prices Lists and Customer Groups</p></td></tr><tr><td><p>Customers</p></td><td><p>Customer Groups</p></td></tr><tr><td><p>Shipping Methods</p></td><td><p>Shipping Zones</p></td></tr><tr><td><p>Promotions<br />
Also refer the article [Coupon/Promo Codes Promotions](stagingpro-coupons-promotions.md)</p></td><td><p>Brands, Categories, Products, Customer Groups, Shipping Zones</p></td></tr></tbody></table>

In the current release, WebDAV images don't migrate.<br>To view our onboarding steps, please access the following article → [StagingPro Onboarding](index.md)

For B2B Edition/Bundle B2B, the following data will be automatically migrated when you select any of the data fields on the left as below:

<table><tbody><tr><td><p><strong>B2B Migrating Entity</strong></p></td><td><p><strong>Dependant Entities that will automatically be migrated by StagingPro</strong></p></td></tr><tr><td><p>Companies</p></td><td><p>CustomerGroups, PriceLists</p></td></tr><tr><td><p>Addresses</p></td><td><p>B2B Companies</p></td></tr><tr><td><p>Users</p></td><td><p>Customers, B2B Companies</p></td></tr><tr><td><p>Orders</p></td><td><p>Orders, B2B Companies</p></td></tr><tr><td><p>SuperAdmins</p></td><td><p>B2B Companies</p></td></tr><tr><td><p>Quotes</p></td><td><p>Products, Orders, B2B Orders</p></td></tr><tr><td><p>ShoppingLists</p></td><td><p>B2B Companies, B2B Users</p></td></tr><tr><td><p>Invoices</p></td><td><p>Products, Orders, B2B Companies</p></td></tr></tbody></table>

---

Click here → [Understanding the StagingPro App pages](../app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](../stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }