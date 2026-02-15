---
title: Vortex Backup Shopify | Vortex IQ Help Centre
---

<h1>
  <img src="../../assets/images/vortex-tp.png"
       style="height: 48px; vertical-align: middle; margin-right: 0.5rem;">
  <strong>Vortex Backup - Shopify</Strong>
</h1>



Welcome to the Vortex Backup Wiki, where you will find many articles on how best to use the Backup app or to undertake any required troubleshooting.
This guide helps you understand how to restore your Shopify store data to a previous state when you need to undo changes.

Refer to [Backup Onboarding](backup-onboarding.md) as reference to quickly get started.

---

## What is Data Rollback?

Data rollback allows you to restore **individual items** in your Shopify store to a previously saved version. Think of it as an "undo" button for specific records—if something goes wrong with a product, customer, or collection, you can quickly restore that specific item to how it was before.

### How It Works

1. **Your data is synced and stored** - Each entity (product, customer, etc.) is stored with its complete state
2. **You select the item to restore** - Choose the specific item by its ID
3. **We restore that item** - The platform updates that specific record to match the stored version

---

## What Can Be Rolled Back?

| Data Type | Description |
|-----------|-------------|
| **Products** | Individual products with variants, images, pricing, inventory, and custom fields |
| **Collections** | Individual collections with their product associations or rules |
| **Customers** | Individual customer profiles, addresses, tags, and marketing preferences |
| **Gift Cards** | Individual gift card details |
| **Pages** | Individual content pages |
| **Blogs & Articles** | Individual blog posts |
| **Files** | Individual media files |
| **Themes** | Theme configurations |

---

## When to Use Rollback

### ✅ Perfect For

- **Accidental changes** - Accidentally updated wrong prices or descriptions on specific items
- **Bad edits** - Need to undo changes to a specific product or customer
- **Testing gone wrong** - Restore specific items changed during testing
- **Recovery** - Restore a deleted or corrupted record

### ⚠️ Important Notes

- Rolling back restores the **specific item** to exactly how it was at the stored version
- Other items in your store are not affected
- Order data is not rolled back to preserve financial records

---

## Key Rollback Behaviors

### How Items are Matched

Each item is matched by its **original ID**:

| Entity Type | Matched By |
|-------------|------------|
| Products | Original Product ID |
| Collections | Original Collection ID |
| Customers | Original Customer ID |
| Gift Cards | Original Gift Card ID |
| Pages | Original Page ID |
| Blogs | Original Blog ID |
| Files | Original File ID |

> **Note:** This ensures precise rollback—even if you renamed a product's handle, the correct record will be updated based on its unique ID.

### What Happens During Rollback

1. **If the item exists** - It's updated to match the stored version
2. **If the item was deleted** - It's recreated with the stored data


---

Following are some of the other available pages:

[Backup App Pages](app-pages/index.md)
	
[Backup Features and Benefits](backup-features-and-benefits.md)
	
[Backup FAQs](backup-faqs.md)
	
[Backup How to Topics](backup-how-to-topics.md)
	
[Backup Known Issues](backup-known-issues.md)
	
[Backup Product Releases](backup-product-releases.md)


---

[← Back to Help Center](../../index.md){ .md-button }