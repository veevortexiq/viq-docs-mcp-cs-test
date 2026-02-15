# Shopify to Shopify Migration Guide

Welcome to the VortexIQ Migration Platform! This guide helps you understand how your store data moves from your **source Shopify store** to your **destination Shopify store** during a bulk migration.

## What Gets Migrated?

Our platform supports migrating the following types of store data:

| Data Type | Description |
|-----------|-------------|
| **Products** | Your complete product catalog including all variants, images, pricing, inventory, and metafields |
| **Collections** | Both manual and automated (smart) collections with their rules and product associations |
| **Customers** | Customer profiles including addresses, tags, marketing preferences, and notes |
| **Orders** | Historical orders with line items, payments, shipping details, and customer information |
| **Gift Cards** | Active gift cards with their balances and expiration dates |
| **Discount Codes** | Promotional codes including percentage, fixed-amount, BXGY, and free shipping discounts |
| **Pages** | Static pages like About Us, Contact, or custom content pages |
| **Blogs & Articles** | Blog posts with author information, tags, and featured images |
| **Files** | Media files including images, videos, and documents |
| **Themes** | Store theme configurations |

---

## How Does Migration Work?

The migration process follows these key steps:

### 1. Connect Your Stores
You'll provide access credentials for both your source store (where data comes from) and destination store (where data goes). This uses secure Shopify API connections.

### 2. Select What to Migrate
Choose which entity types to migrate. You can select all data types or specific ones based on your needs.

### 3. Data Extraction
The platform reads your source store data through Shopify's official API, ensuring accurate and complete data retrieval.

### 4. Intelligent Mapping
Your data is automatically transformed to work correctly in the destination store. This includes:
- Matching products by their unique handles (URL slugs)
- Linking customers by email address
- Associating orders with the correct customers and products
- Preserving collection rules and product relationships

### 5. Duplicate Detection
Before creating records, the platform checks if matching records already exist in the destination store to prevent duplicates.

### 6. Creation in Destination
New records are created in your destination store while preserving as much original data as possible.

---

## Key Migration Behaviors

### Duplicate Prevention
The platform automatically checks for existing records before creating new ones:

| Entity Type | Matched By |
|-------------|------------|
| Products | Product Handle (URL slug) |
| Collections | Collection Handle |
| Customers | Email Address or Phone Number |
| Orders | Order Name/Number |
| Gift Cards | Last 4 digits of code + value |
| Discount Codes | Discount Code |
| Pages | Page Handle |
| Blogs | Blog Handle |
| Files | Filename |

> **Note:** If a matching record exists, the migration skips that record and marks it as successful.

### What Happens to Original IDs?
Shopify assigns new unique IDs when records are created. While the original IDs from your source store cannot be preserved, the platform maintains relationships through identifying fields like email addresses, product handles, and SKUs.

### Order of Migration
For best results, migrate data in this recommended order:
1. **Locations** (if using multi-location inventory)
2. **Customers** (so orders can link to them)
3. **Files** (product images and media)
4. **Products** (your catalog)
5. **Collections** (which reference products)
6. **Gift Cards**
7. **Discount Codes** (which may reference products/customers)
8. **Orders** (which reference customers and products)
9. **Content** (Pages, Blogs, Articles)

---

## Common Use Cases

### Complete Store Migration
Migrating your entire store to a new Shopify account? Simply select all entity types and let the platform handle the data transfer.

### Merging Multiple Stores
Consolidating multiple Shopify stores into one? Run separate migrations from each source store. The duplicate detection ensures customer and product data won't be duplicated if they already exist.

### Testing on a Development Store
Want to test your theme or apps with real data? Migrate to a development store first. You can selectively migrate just products and collections, or include customer data for a more complete test.

### Updating Customer Lists
Need to transfer a customer list? Migrate just the Customers entity type. Existing customers (matched by email) will be skipped to avoid duplicates.

---

Click here → [Understanding the Staging App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [Staging Onboarding](staging-onboarding/index.md)

---

[← Back to Help Centre](../../index.md){ .md-button }