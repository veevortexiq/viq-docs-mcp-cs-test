# Frequently Asked Questions

Common questions about Shopify data rollback.

---

## General Questions

### What data entities on my Shopify store are protected by the VIQ Backup app?

The following data items are currently protected:

· **Catalogue Data**: Products, Collections

· **Customer Data**: Customers, Orders, Discount Codes, Discount Automatic, Discount Nodes

· **Content Data**: Blogs, Pages, Files

· **Settings Data**: Themes, Gift Cards

Click on the following article to know which data entities and their fields are being taken backup and can be rolled back:

[Data Entities for Backup and Rollback](what-we-backup-and-rollback.md)

### What is the difference between ‘Realtime’ and ‘Manual’ backup?

**Realtime** means the Backup and Restore app is set to actively listen to the Shopify store webhooks and tracks changes in realtime.

<u>Realtime backup is done for these data items:</u>

· **Catalogue Data**: Products, Collections

· **Customer Data**: Customers, Orders, Discount Codes, Discount Automatic, Discount Nodes

· **Content Data**: Blogs, Pages, Files

· **Settings Data**: Themes, Gift Cards

**Manual** backups applicable for data entities which don’t have webhooks, so you can take full backups by clicking on ‘**Backup**’ button.

<u>Manual backup is done for these data items:</u>

· **Catalogue Data**: Products, Collections

· **Customer Data**: Customers, Orders, Discount Codes, Discount Automatic, Discount Nodes

· **Content Data**: Blogs, Pages, Files

· **Settings Data**: Themes, Gift Cards

!!! Important:
    <u>Users are advised to</u> **initiate manual backup compulsorily** <u>from the settings tab</u> **before** <u>as well as</u> **after** <u>making modifications or deletions to the data for the following mentioned entities.</u>

Click on “**Backup**” button corresponding to each of the data entities as applicable

### Can I restore backup data to another store?

No, currently the data can only be restored to the same store on which the VIQ Backup app is installed.

### What happens to my data during rollback?

During rollback, **only the specific item you select** is restored to its stored version. The rollback process:
- Updates that specific record to match the stored version
- Recreates the record if it was deleted
- Does not affect any other data in your store

### Can I roll back specific items?

Yes! Rollback is designed to work on **individual items**. You select the specific product, customer, collection, or other entity you want to restore by its ID.

### Will rollback affect my orders?

No. Order data is protected and not affected by rollback operations. Your order history, financial records, and fulfillment data remain intact.

### Can I undo a rollback?

There's no automatic "undo rollback" feature. However, if you need to reverse a rollback, you can select a different stored version of the same item.

---

## Products & Inventory

### Will my product images be restored?

Yes. Product images are stored as part of each version and will be restored during rollback. Image alt text and positioning are also restored.

### How is inventory handled during rollback?

Inventory levels are restored based on **location name matching**. If your store has locations with the same names as when the version was stored, inventory quantities will be correctly restored.

> **Tip:** If you've renamed locations since the version was stored, inventory may not match correctly.

### Are product metafields (custom fields) restored?

Yes. All standard metafield types (text, numbers, dates, JSON, etc.) are fully restored. Some reference-type metafields may require related entities to exist first.

---

## Customers

### Will customer passwords be restored?

No. For security reasons, customer passwords cannot be rolled back. Customers will keep their current passwords.

### What about customer marketing consent?

Marketing consent status is fully restored:
- Email subscription status
- SMS subscription status
- Consent dates and opt-in levels

### Are customer addresses restored?

Yes. All saved customer addresses are restored, including shipping and billing addresses.

---

## Collections

### Will my smart collection rules be restored?

Yes. All smart collection rules are restored, including:
- Match conditions (title, tag, price, etc.)
- Rule relationships (all/any)
- Sort order settings

### What about products in my collections?

For manual collections, product associations are restored based on product IDs. Products must exist in your store for the associations to work correctly.

---

## Gift Cards

### Will my gift card codes stay the same?

For re-created gift cards, new codes are generated for security. You'll need to communicate new codes to affected customers.

### What about partially used gift cards?

Gift cards are restored with their initial value as recorded in the stored version. Current balance information may not be available, so manual adjustment may be needed.

---

## Content (Pages & Blogs)

### Will my page formatting be preserved?

Yes. Page content including all HTML formatting, embedded media, and custom code is restored exactly as saved.

### Are blog comments restored?

No. Blog comments are not stored and cannot be rolled back.

### Will my URL structure change?

No. Page and blog handles (URLs) are preserved during rollback, maintaining your SEO and any existing links.

---

## How Rollback Works

### How are versions stored?

When data is synced from your store, each entity (product, customer, collection, etc.) is stored with its complete state at that moment. Each item has its own stored version that can be used for rollback.

### How do I identify which item to roll back?

Items are identified by their unique ID in the system. You'll select the specific index (entity type) and document ID for the item you want to restore.

### Can I roll back multiple items at once?

Each rollback operation restores one item at a time. To restore multiple items, you would perform separate rollback operations for each item.

---

## Troubleshooting

### "Record not found" - what does this mean?

This message appears when the rollback tries to update a record that no longer exists in your store. The record will be recreated if possible.

### Why did my rollback fail?

Common reasons include:
- **Missing dependencies:** Related data (like products for collections) doesn't exist
- **Validation errors:** Some saved data may not meet current store requirements
- **Permission issues:** Access restrictions may prevent certain changes

Check the rollback report for specific details.

### Inventory appears on wrong location

Inventory is matched by location name. If you've renamed locations since the version was stored, inventory may appear on the wrong location or not restore correctly.

---

## Security & Safety

### Is my data secure during rollback?

Yes. All data transfers use encrypted connections.

### Can anyone on my team perform a rollback?

Rollback access depends on your account permissions. Only authorized users can initiate rollback operations.

---

## Still Have Questions?
If you have any questions or need clarification, please contact us at helpdesk@vortexiq.ai

Alternatively, to get assistance from our team, submit a support ticket by filling up this [<u>form</u>](../../ops/contact-support-form.html). We'll respond to your request as quickly as possible.
Contact support with:
- Your store URL
- The data entity record you're trying to roll back
- The record ID
- Any error messages you've received

We're here to help ensure a smooth rollback!

---

Click here → [Understanding the Backup App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [Backup Onboarding](backup-onboarding.md)

---

[← Back to Help Centre](../../index.md){ .md-button }

