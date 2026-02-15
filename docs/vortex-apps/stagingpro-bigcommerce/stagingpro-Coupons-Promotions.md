# Coupon/Promo Codes (Promotions)

Yes, Coupon Codes, Promo Codes are part of Promotions. When you move Promotions using StagingPro, StagingPro follows the following steps:

* It locates the SKUs and Category Names and their Hierarchy on the source store for the promotions and it then creates the Products and Categories on the destination Store.

* After Categories and associated products are created, it will then generate the Promotion and attach them to the Promotion.

Coupon Code associations are with SKU’s instead of Product ID’s, because they can be different IDs on different BigCommerce instances.

Similarly Category IDs are not taken into account; instead, we take into account the EXACT Category name and create them / attach them primarily based on “Name” and their hierarchy.

As of now all promotions are moved in its entirety.

!!! important
    Be advised that Promotions (created using the API) cannot be edited. Workaround is to delete the promotion, recreate it correctly in source and then migrate so it transfers across correctly. Once BigCommerce allows for Promotions (created using the API) to be edited manually, we will provide the functionality.


---

Click here → [Understanding the StagingPro App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }