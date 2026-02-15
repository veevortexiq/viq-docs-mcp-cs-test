# Frequently Asked Questions

Common questions about Shopify to Shopify migration.

---

## General Questions

### What happens to my original store data?
Your source store data is **never modified or deleted**. The migration only reads data from your source store and creates copies in the destination store.

### How long does a migration take?
Migration time depends on your data volume:

| Data Size | Approximate Time |
|-----------|-----------------|
| Small (< 1,000 products) | 15-30 minutes |
| Medium (1,000-10,000 products) | 1-3 hours |
| Large (10,000+ products) | Several hours |

Orders and customers add additional time based on volume.

### Can I migrate multiple times?
Yes! The platform uses duplicate detection—if a record already exists in the destination (matched by email, handle, etc.), it's skipped. This means you can safely run migrations multiple times without creating duplicates.

### What if my migration fails partway through?
Failed items are logged with error details. You can review failures and retry. Already-migrated records won't be duplicated on retry.

---

## Products & Inventory

### Will my product images transfer?
Yes. Product images are downloaded from your source store and re-uploaded to the destination. This ensures images are hosted properly in your new store.

### How is inventory handled?
Inventory quantities are transferred based on **location name matching**. If your destination store has a location named "Warehouse" and your source has the same, inventory will transfer correctly.

**Tip:** Create locations with matching names in your destination store before migrating products.

### What about products in multiple collections?
Product-collection relationships are preserved. After products and collections are migrated, the platform associates them correctly based on product handles.

### Are product metafields migrated?
Standard metafields (text, numbers, dates, JSON, URLs, etc.) are fully migrated. Some reference-type metafields require additional handling:
- **File references:** Migrate files first
- **Product/collection references:** These entities must exist in destination
- **Metaobject references:** Migrate metaobjects separately

### What happens to product SEO data?
SEO titles and meta descriptions transfer directly, helping preserve your search engine rankings.

---

## Customers & Orders

### Can customers log in with their old passwords?
No. Customer passwords are encrypted and cannot be transferred between Shopify stores. Customers will need to use "Forgot Password" to set a new password in your new store.

**Tip:** Send customers a password reset email after migration.

### Will orders link to the correct customers?
Yes. Orders are linked to customers by email address. If a customer exists in the destination store (same email), the order will be associated with them.

### Can I view historical order data in Shopify reports?
Yes. Migrated orders appear in your order history and analytics, preserving your business insights.

### What about order financials and payments?
Order totals, payment status, and transaction history are preserved. However, these are historical records—you cannot process additional payments on migrated orders.

### Are order fulfillments migrated?
Orders migrate as unfulfilled by default. This gives you a clean slate for fulfillment in your new store. If you need historical fulfillment status, contact support.

---

## Discounts & Promotions

### Will my discount codes work immediately?
Yes, once migrated, discount codes are active in your destination store with the same rules (dates, limits, products, etc.).

### What if a discount targets specific products not yet migrated?
Migrate products first, then discounts. If referenced products aren't found in the destination, the discount may fall back to "all products" or fail with a clear error message.

### Are customer segments migrated for targeted discounts?
Customer segments are store-specific and cannot be directly migrated. Discounts targeting segments will fall back to "all customers." You can recreate segments in your new store manually.

### Do usage counts transfer?
No. Discount usage counts reset to zero. This means previously redeemed limits start fresh.

---

## Gift Cards

### Will gift card codes stay the same?
No. For security, Shopify generates new codes for migrated gift cards. You'll receive new codes that you can communicate to affected customers.

### What about partially used gift cards?
Gift card current balance isn't queryable via Shopify's API. Cards migrate with their **initial value**. If you have partially redeemed cards, you may need to manually adjust or issue new cards.

### Are gift card recipients notified?
Notifications are intentionally skipped during migration to avoid confusing customers. You control when and how to communicate new codes.

---

## Collections

### Do smart collection rules transfer?
Yes! Automated collections migrate with their full rule sets (by product title, tag, type, vendor, price, etc.).

### What about manual collections?
Manual collections migrate with their product associations. Products are matched by handle in the destination store.

### Why are some products missing from my migrated collections?
Products must exist in the destination store (same handle) for collection associations to work. If a product wasn't migrated or has a different handle, it won't appear in the collection.

---

## Content (Pages & Blogs)

### Is my page HTML preserved exactly?
Yes. Page content including HTML formatting, embedded media, and custom code is transferred directly.

### What about blog comments?
Blog comments are not available through Shopify's API and cannot be migrated.

### Will my page URLs stay the same?
Yes! Page and blog article handles (URLs) transfer directly, preserving your SEO and any bookmarks or links.

---

## Technical Questions

### What API does the migration use?
The platform uses Shopify's official GraphQL Admin API, ensuring secure and reliable data access.

### Is my data secure during migration?
Yes. Data is transferred securely using encrypted connections. No data is stored permanently by the migration platform—it only facilitates the transfer.

### What permissions are needed?
Your API credentials need read access to the source store and write access to the destination store for the entity types being migrated.

### Are there rate limits?
The platform respects Shopify's API rate limits and automatically handles throttling to ensure reliable migration without disruption.

---

## Troubleshooting

### "Entity already exists" - is this an error?
No! This is expected behavior. It means the record was found in your destination store (matched by email, handle, etc.) and was skipped to prevent duplicates. The migration marks this as success.

### Some products failed to migrate - why?
Common reasons include:
- **Missing images:** Source image URLs may be inaccessible
- **Invalid data:** Required fields may be empty or malformed
- **Shopify validation:** Destination store may have stricter requirements

Review the error log for specific details on each failure.

### Customers are missing their addresses
Addresses should migrate automatically. If missing:
- Verify the source customer has saved addresses
- Check error logs for validation failures

### My discount code isn't working
Verify that:
1. Products/collections referenced exist in the destination
2. The discount date range is still active
3. Customer eligibility requirements are met

---

## Still Have Questions?

If you have any questions or need clarification, please contact us at helpdesk@vortexiq.ai

Alternatively, to get assistance from our team, submit a support ticket by filling up this [<u>form</u>](../../ops/contact-support-form.html). We'll respond to your request as quickly as possible.
Contact support with:

- Your source and destination store URLs
- The entity types you're migrating
- Any error messages you've encountered

We're here to help ensure a smooth migration!

---

Click here → [Understanding the Staging App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [Staging Onboarding](staging-onboarding/index.md)

---

[← Back to Help Centre](../../index.md){ .md-button }
