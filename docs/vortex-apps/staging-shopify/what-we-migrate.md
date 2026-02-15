---
title: Migration Guide
hide:
  - toc
---

# Shopify Migration Hub

Welcome to the VortexIQ Migration Platform! 

This guide helps you understand how your store data moves from your **source Shopify store** to your **destination Shopify store** during a bulk migration.

!!! Important
    We never migrate payment cards or secrets.

<style>
    /* Tab Container */
    .hub-tabs {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 2px solid #e5e7eb;
        margin-bottom: 30px;
        gap: 5px;
    }

    /* Tab Buttons */
    .hub-tab-btn {
        background: none;
        border: none;
        padding: 15px 25px;
        font-family: inherit;
        font-size: 15px;
        font-weight: 500;
        color: #6b7280;
        cursor: pointer;
        border-bottom: 3px solid transparent;
        transition: all 0.2s;
        margin-bottom: -2px;
    }

    .hub-tab-btn:hover {
        color: #5529D6;
        background-color: #f9fafb;
    }

    .hub-tab-btn.active {
        color: #5529D6;
        border-bottom: 3px solid #5529D6;
        font-weight: 700;
    }

    /* Tab Content Areas */
    .hub-tab-content {
        display: none; /* Hidden by default */
        animation: fadeIn 0.3s ease;
    }

    .hub-tab-content.active {
        display: block; /* Show active */
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(5px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Mobile Handling */
    @media (max-width: 768px) {
        .hub-tabs {
            flex-direction: column;
            border-bottom: none;
            gap: 10px;
        }
        .hub-tab-btn {
            width: 100%;
            text-align: left;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            background: #f3f4f6;
        }
        .hub-tab-btn.active {
            background: #5529D6;
            color: white;
            border-color: #5529D6;
        }
    }
</style>

<div class="hub-tabs">
    <button class="hub-tab-btn active" onclick="openHubTab(event, 'tab-overview')">Overview</button>
    <button class="hub-tab-btn" onclick="openHubTab(event, 'tab-mapping')">Field Mapping</button>
    <button class="hub-tab-btn" onclick="openHubTab(event, 'tab-cases')">Use Cases</button>
    <button class="hub-tab-btn" onclick="openHubTab(event, 'tab-faqs')">FAQs</button>
</div>


<!-------------------------------------------------------------------------------------------------------------------------->

<div id="tab-overview" class="hub-tab-content active" markdown="1">


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
## **Products**

Vortex Staging programmatically mirrors your Shopify catalog in an isolated staging store. It transfers titles, descriptions, variants, pricing, and metadata, allowing teams to test theme changes or app integrations against real product data without risking the live customer experience.

## **Collections**

This feature recreates your store’s organizational structure, including how products are grouped and surfaced. By migrating collection data, developers can accurately test navigation, storefront filtering, and layout presentation before deploying changes.

## **Customers**

Bulk migration of customer records (names, contact info, and account associations) enables end-to-end testing of account-based features. This allows agencies to validate login workflows, segmentation, and personalized experiences using realistic datasets.

## **Discount Codes**

Vortex Staging transfers code-based promotions and their specific logic (usage limits, expiry, and eligibility) to staging. This ensures that marketing campaigns and checkout customizations work seamlessly together before a promotion officially launches.

## **Automatic Discounts**

This mirrors rule-driven promotions, such as tiered pricing or cart-based incentives. Recreating these in staging allows teams to test complex edge cases and overlapping discount conditions across various cart states.

## **Orders**

By migrating historical order data—including line items, totals, and timestamps—teams can test fulfillment workflows, admin logic, and reporting integrations against real-world scenarios rather than synthetic data.

## **Gift Cards**

To maintain security, only non-sensitive gift card attributes (like the last four digits and balance) are migrated. This allows for functional testing of gift card workflows while ensuring no actual currency is exposed. 

!!! Note

    Customer migration must be completed first for this data to link correctly.

## **Blogs and Blog Posts**

This replicates all editorial content, maintaining the relationships between blogs, posts, and metadata. It allows teams to preview how design updates or SEO optimizations affect the presentation of rich content and articles.

## **File Migration**

This ensures all supporting assets—such as product images, downloadable PDFs, and spec sheets—are available in staging. It prevents broken links and ensures that the staging environment is a high-fidelity replica of the production store.

## **Theme Migration**

Vortex Staging enables the controlled movement of themes between environments. This allows teams to iterate on visual identity and custom functionality in isolation, ensuring that the final update is fully compatible with the store's products and promotions.

---
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

</div>

<!-------------------------------------------------------------------------------------------------------------------------->

<div id="tab-mapping" class="hub-tab-content active" markdown="1">

## Field Mapping Reference

This document provides detailed information about how each field is migrated from your source Shopify store to your destination store.

---

## Products

Products are the core of your catalog. Here's what happens to each field:

### Basic Product Information

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Title | ✅ Title | Direct transfer |
| Description (HTML) | ✅ Description | Full HTML preserved |
| Handle (URL slug) | ✅ Handle | Direct transfer (used for duplicate check) |
| Product Type | ✅ Product Type | Direct transfer |
| Vendor | ✅ Vendor | Direct transfer |
| Tags | ✅ Tags | All tags transferred |
| Status | ✅ Status | Active, Draft, or Archived |
| Product Category | ✅ Category | Shopify taxonomy category ID |
| Template Suffix | ✅ Template | Custom template preserved |
| Is Gift Card | ✅ Gift Card flag | Product type indicator |

### SEO Information

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| SEO Title | ✅ SEO Title | Direct transfer |
| SEO Description | ✅ Meta Description | Direct transfer |

### Product Variants

Each variant includes:

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Title | ✅ Title | Direct transfer |
| SKU | ✅ SKU | Direct transfer |
| Barcode | ✅ Barcode | Direct transfer |
| Price | ✅ Price | Direct transfer |
| Compare At Price | ✅ Compare Price | Sale price reference |
| Weight | ✅ Weight | Value and unit |
| Requires Shipping | ✅ Shipping | Direct transfer |
| Taxable | ✅ Taxable | Direct transfer |
| Inventory Policy | ✅ Policy | Continue selling or stop |
| Option Values | ✅ Options | Size, Color, etc. |
| Image | ✅ Image | Linked by URL match |

### Inventory

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Available Quantity | ✅ Quantity | By matching location name |
| Location | ✅ Location | Matched by name |
| Cost per Item | ✅ Cost | Unit cost |
| Country Codes (HS) | ✅ HS Codes | Harmonized system codes |

> **Important:** Inventory is matched by location name. If your destination store has locations with the same names as the source, inventory quantities will be set correctly.

### Product Images & Media

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Image URL | ✅ Uploaded | Image downloaded and re-uploaded |
| Alt Text | ✅ Alt Text | Direct transfer |
| Position | ✅ Position | Image order preserved |

### Metafields

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Standard Metafields | ✅ Transferred | Text, numbers, dates, etc. |
| Metaobject References | ⚠️ Special handling | Requires metaobject migration |
| File References | ⚠️ Separate | Requires file migration first |
| Product/Collection References | ⚠️ Separate | References re-linked by handle |

---

## Customers

### Basic Information

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Email | ✅ Email | Primary identifier (duplicate check) |
| First Name | ✅ First Name | Direct transfer |
| Last Name | ✅ Last Name | Direct transfer |
| Phone | ✅ Phone | International format |
| Note | ✅ Note | Internal notes |
| Tags | ✅ Tags | All customer tags |
| Locale | ✅ Locale | Language preference |
| Tax Exempt | ✅ Tax Exempt | B2B tax status |
| Tax Exemptions | ✅ Exemption list | Specific exemption types |

### Addresses

All customer addresses are migrated:

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Address Line 1 | ✅ Address 1 | Direct transfer |
| Address Line 2 | ✅ Address 2 | Direct transfer |
| City | ✅ City | Direct transfer |
| Company | ✅ Company | Direct transfer |
| Country Code | ✅ Country | ISO country code |
| Province Code | ✅ Province | State/region code |
| Zip/Postal | ✅ Zip | Direct transfer |
| First Name | ✅ First Name | Address-specific name |
| Last Name | ✅ Last Name | Address-specific name |
| Phone | ✅ Phone | Address phone number |

### Marketing Consent

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Email Marketing State | ✅ State | Subscribed, Not Subscribed, Pending |
| Email Opt-in Level | ✅ Opt-in Level | Single or confirmed opt-in |
| Email Consent Date | ✅ Date | When consent was given |
| SMS Marketing State | ✅ State | Subscribed or Not Subscribed |
| SMS Opt-in Level | ✅ Opt-in Level | Single or confirmed opt-in |
| SMS Consent Date | ✅ Date | When consent was given |

> **Note:** SMS marketing consent requires a valid phone number.

---

## Orders

### Order Header

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Order Name | ✅ Name | "#1001" format preserved |
| Email | ✅ Email | Customer's email at order time |
| Phone | ✅ Phone | Customer's phone at order time |
| Note | ✅ Note | Order notes |
| Tags | ✅ Tags | All order tags |
| Currency | ✅ Currency | Shop and presentment currency |
| Financial Status | ✅ Financial | Paid, Pending, Refunded, etc. |
| Processed Date | ✅ Date | Original order date |
| Closed Date | ✅ Closed | If order was closed |
| Source Name | ✅ Source | "web", "pos", or custom |
| PO Number | ✅ PO Number | Purchase order reference |
| Buyer Marketing | ✅ Marketing | Opted into marketing |
| Taxes Included | ✅ Tax Setting | Price includes tax flag |

### Line Items

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Product Title | ✅ Title | Line item name |
| Variant Title | ✅ Variant | Option combination |
| SKU | ✅ SKU | Product identifier |
| Quantity | ✅ Quantity | Units ordered |
| Price | ✅ Price | Unit price (shop + presentment) |
| Vendor | ✅ Vendor | Product vendor |
| Requires Shipping | ✅ Shipping | Physical vs digital |
| Taxable | ✅ Taxable | Tax applies |
| Gift Card | ✅ Is Gift Card | Gift card line item |
| Variant ID | ⚠️ Matched | Attempted by SKU lookup |

> **Note:** Line items store product information at time of order. Variant linking is attempted by SKU.

### Addresses

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Billing Address | ✅ Billing | Full address with defaults |
| Shipping Address | ✅ Shipping | Full address with defaults |

Address required fields (name, address line) receive fallback values if missing to ensure valid data.

### Shipping Lines

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Title | ✅ Title | Shipping method name |
| Code | ✅ Code | Carrier code |
| Price | ✅ Price | Shop and presentment money |
| Source | ✅ Source | Shipping source |
| Tax Lines | ✅ Tax | Associated taxes |

### Transactions

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Kind | ✅ Kind | Sale, Refund, Authorization |
| Status | ✅ Status | Success, Pending, Failure |
| Amount | ✅ Amount | Transaction value |
| Gateway | ✅ Gateway | Payment gateway name |
| Authorization Code | ✅ Auth Code | If available |
| Processed Date | ✅ Date | Transaction timestamp |

> **Note:** Zero-amount transactions are skipped as Shopify requires positive amounts for sale transactions.

### Financial Status Logic

The migration intelligently determines financial status:
- If source says "Paid" but no payment transactions exist → Status set to "Pending"
- If payment transactions exist but status isn't "Paid" → Status set to "Paid"
- Otherwise → Original status preserved

---

## Collections

### Manual Collections

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Title | ✅ Title | Collection name |
| Handle | ✅ Handle | URL slug (duplicate check) |
| Description HTML | ✅ Description | Full HTML content |
| Sort Order | ✅ Sort Order | Product sorting method |
| Template Suffix | ✅ Template | Custom template |
| Image | ✅ Image | Re-uploaded from URL |
| Alt Text | ✅ Image Alt | Image description |
| Products | ✅ Products | Matched by product handle |

### Automated (Smart) Collections

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Title | ✅ Title | Collection name |
| Handle | ✅ Handle | URL slug |
| Description HTML | ✅ Description | Full HTML |
| Sort Order | ✅ Sort Order | Product sorting |
| Rules | ✅ Rules | Automation rules |
| Rule Condition | ✅ Condition | All/Any rules match |

### Collection Rules

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Column | ✅ Column | Field to match (title, type, etc.) |
| Relation | ✅ Relation | equals, contains, starts_with |
| Condition | ✅ Condition | Value to match |

### Sales Channel Publishing

Collections are automatically published to matching sales channels between source and destination stores (matched by channel name).

---

## Gift Cards

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Initial Value | ✅ Value | Original gift card amount |
| Expiration Date | ✅ Expires On | If applicable |
| Note | ✅ Note | Internal notes |
| Template Suffix | ✅ Template | Custom template |
| Customer | ✅ Customer ID | Matched by email lookup |
| Recipient Message | ✅ Message | Gift message |
| Code | ⚠️ Generated | New code assigned by Shopify |

> **Important:** For security reasons, Shopify generates new gift card codes. The original code cannot be migrated.

---

## Discount Codes

### Basic Discount (Percentage or Fixed)

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Title | ✅ Title | Internal name |
| Code | ✅ Code | Discount code string |
| Starts At | ✅ Start Date | Activation date |
| Ends At | ✅ End Date | Expiration date |
| Usage Limit | ✅ Total Uses | Maximum redemptions |
| Once Per Customer | ✅ Per Customer | One use per customer |
| Percentage | ✅ Percentage | If percentage discount |
| Fixed Amount | ✅ Amount | If fixed amount discount |
| Minimum Requirement | ✅ Minimum | Quantity or subtotal minimum |
| Customer Selection | ✅ Eligible | All, specific, or segments |
| Products/Collections | ✅ Items | Matched by handle |

### Buy X Get Y Discounts

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Customer Buys | ✅ Buy Items | Products/collections to buy |
| Buy Quantity | ✅ Quantity | Amount to purchase |
| Customer Gets | ✅ Get Items | Free/discounted items |
| Get Value | ✅ Discount | Percentage or amount off |
| Uses Per Order | ✅ Limit | How many times per order |

> **Note:** BXGY discounts require specific products/collections in both source and destination.

### Free Shipping Discounts

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Maximum Shipping Price | ✅ Max Price | Shipping cap |
| Shipping Destinations | ✅ Countries | All or specific countries |
| Include Rest of World | ✅ Rest of World | Include other countries |

### Stacking Rules

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Combines with Order | ✅ Order Discounts | Can stack with order discounts |
| Combines with Product | ✅ Product Discounts | Can stack with product discounts |
| Combines with Shipping | ✅ Shipping Discounts | Can stack with shipping discounts |

### Customer Selection Handling

| Selection Type | Destination Behavior |
|----------------|---------------------|
| All Customers | ✅ All customers eligible |
| Specific Customers | ✅ Matched by email |
| Customer Segments | ⚠️ Falls back to "All" (segments are store-specific) |

---

## Pages

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Title | ✅ Title | Page title |
| Body HTML | ✅ Body | Full content preserved |
| Handle | ✅ Handle | URL slug |
| Published | ✅ Published | Publish status |
| Published At | ✅ Publish Date | Publication date |
| Template Suffix | ✅ Template | Custom template |

---

## Blogs & Articles

### Blogs

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Title | ✅ Title | Blog name |
| Handle | ✅ Handle | URL slug |
| Comment Policy | ✅ Comments | Moderate, None, Automatically |
| Template Suffix | ✅ Template | Custom template |

### Articles

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Title | ✅ Title | Article title |
| Body HTML | ✅ Body | Full content |
| Summary | ✅ Excerpt | Article summary |
| Handle | ✅ Handle | URL slug |
| Author Name | ✅ Author | Writer attribution |
| Tags | ✅ Tags | Article categorization |
| Template Suffix | ✅ Template | Custom template |
| Featured Image | ⚠️ Separate | Handled after upload |
| Blog ID | ✅ Linked | Associated with correct blog |

---

## Files

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| URL | ✅ Source | Original file URL for upload |
| Alt Text | ✅ Alt | Accessibility text |
| Content Type | ✅ Type | IMAGE, VIDEO, FILE |
| Filename | ✅ Filename | Extracted from URL |
| Duplicate Mode | ✅ Replace | Replaces if exists |

### File Types

| Type | Migration Support |
|------|------------------|
| Images | ✅ Full support |
| Videos | ✅ Full support |
| External Videos (YouTube) | ✅ URL normalized |
| 3D Models | ✅ Full support |
| Generic Files (PDF, etc.) | ✅ Full support |

---

## Themes

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Name | ✅ Name | Theme name |
| Role | ✅ Role | Main, unpublished, etc. |
| Source | ⚠️ Manual | Theme source must be specified |

> **Note:** Theme files and customizations may require additional setup after migration.

---

## Locations

| Source Field | Destination | Migration Behavior |
|-------------|-------------|-------------------|
| Name | ✅ Name | Location name |
| Address | ✅ Address | Full address details |
| Metafields | ✅ Metafields | Location custom fields |

</div>


<!-------------------------------------------------------------------------------------------------------------------------->

<div id="tab-cases" class="hub-tab-content active" markdown="1">

## Migration Use Cases & Examples

This guide provides practical examples of common Shopify to Shopify migration scenarios.

---

## Use Case 1: Complete Store Replatform

**Scenario:** You're moving your entire business from one Shopify store to a new one (e.g., changing business name, region, or restructuring).

### What Gets Migrated
| Entity | Details |
|--------|---------|
| Products | All products with variants, images, SEO data, metafields |
| Customers | Full customer database with addresses and marketing consent |
| Orders | Complete order history for reporting and customer service |
| Collections | All collections maintain product associations |
| Discount Codes | Active promotions continue working |
| Gift Cards | Active gift cards remain redeemable |
| Content | Pages and blog posts preserve your SEO value |

### Recommended Approach
1. Migrate products and collections first (your catalog structure)
2. Migrate customers next
3. Migrate orders (will link to existing customers)
4. Migrate discount codes and gift cards
5. Finally migrate content pages and blogs

### Important Notes
- Order financial data (totals, payments) is preserved for historical reference
- Customer passwords cannot be migrated—customers will need to reset their passwords
- Product inventory levels are transferred based on matching locations

---

## Use Case 2: Store Consolidation

**Scenario:** You're merging multiple Shopify stores into a single unified store.

### How It Works
When migrating from multiple source stores:
- **Products** with the same handle are skipped (not duplicated)
- **Customers** with the same email are skipped (no duplicates)
- **Collections** with the same handle are skipped

### Example: Merging 3 Regional Stores
| Source Store | Unique Products | Shared Products | Result in Destination |
|--------------|----------------|-----------------|---------------------|
| Store US | 500 | 200 | 500 created |
| Store EU | 450 | 200 | 250 created (200 skipped) |
| Store UK | 400 | 200 | 200 created (200 skipped) |
| **Total** | - | - | **950 unique products** |

### Best Practice
Migrate your "primary" store first (the one with the most complete data), then migrate secondary stores to fill in any gaps.

---

## Use Case 3: Development Store Testing

**Scenario:** You want to create a copy of your production data in a development store for testing themes, apps, or workflows.

### What to Migrate for Testing
| Testing Focus | Recommended Entities |
|---------------|---------------------|
| Theme development | Products, Collections, Pages |
| Checkout testing | Products, Customers (sample) |
| App integration | Products, Collections, Orders |
| Full functionality | All entities |

### Tips
- Development stores have some limitations (e.g., card payments)
- Consider migrating a subset of products for faster testing
- You can re-run migrations if you need fresh data

---

## Use Case 4: Customer Database Transfer

**Scenario:** You need to move your customer list to a new store while preserving marketing consent and addresses.

### What Transfers
| Field | Preserved? | Notes |
|-------|-----------|-------|
| Email | ✅ Yes | Primary identifier |
| Name | ✅ Yes | First and last name |
| Phone | ✅ Yes | Including country code |
| Addresses | ✅ Yes | All saved addresses |
| Tags | ✅ Yes | Customer segments/labels |
| Notes | ✅ Yes | Internal notes |
| Marketing Consent | ✅ Yes | Email and SMS preferences |
| Tax Exemptions | ✅ Yes | For B2B customers |
| Order History | ❌ Separate | Orders migrated separately |

### Marketing Consent Details
Customer marketing preferences are fully preserved:
- **Email Marketing:** Subscribed, Not Subscribed, or Pending
- **SMS Marketing:** Opted in or out (requires phone number)
- **Consent Timestamp:** When they opted in/out

---

## Use Case 5: Promotional Campaign Migration

**Scenario:** You have discount codes and promotions set up in your source store that need to work immediately in the new store.

### Discount Code Types Supported
| Type | Example | What Transfers |
|------|---------|----------------|
| Percentage Off | "SAVE20" for 20% off | Percentage, usage limits, dates |
| Fixed Amount | "$10OFF" for $10 off | Amount, minimum requirements |
| Buy X Get Y | "BOGO" deals | Required products, free items |
| Free Shipping | "SHIPFREE" orders | Shipping rules, destinations |

### What to Know
- **Customer-specific discounts:** Customer eligibility is matched by email
- **Product-specific discounts:** Products are matched by handle/SKU
- **Collection discounts:** Collections are matched by handle
- **Date ranges:** Start and end dates are preserved
- **Usage limits:** Per-customer and total limits transfer

### Automatic Discounts
Automatic discounts (applied without codes) are migrated separately and work the same way.

---

## Use Case 6: Order History Migration

**Scenario:** You need historical order data in your new store for customer service, reporting, and analytics.

### What Order Data Transfers
| Data | Preserved? | Notes |
|------|-----------|-------|
| Order Number | ✅ Yes | Same order name (e.g., #1001) |
| Line Items | ✅ Yes | Products, quantities, prices |
| Customer Info | ✅ Yes | Linked by email |
| Shipping/Billing | ✅ Yes | Full addresses |
| Payment Details | ✅ Yes | Payment status, gateway used |
| Shipping Lines | ✅ Yes | Shipping method and cost |
| Order Status | ✅ Yes | Paid, pending, refunded |
| Processing Date | ✅ Yes | Original order date |
| Tags & Notes | ✅ Yes | Internal information |

### Important Notes
- **Product Linking:** Line items include product title and SKU; variant linking attempted by SKU match
- **Financial Status:** Accurately reflects paid/pending/refunded status
- **Fulfillment Status:** Orders migrate as unfulfilled by default for clean slate

---

## Use Case 7: Content Migration (Pages & Blogs)

**Scenario:** You want to preserve your content pages, blog posts, and SEO value in the new store.

### Pages
| Field | Transfers | Notes |
|-------|----------|-------|
| Title | ✅ Yes | Page title |
| Body/HTML | ✅ Yes | Full content including formatting |
| Handle/URL | ✅ Yes | Preserves your SEO URLs |
| Publish Status | ✅ Yes | Draft or published |
| Template | ✅ Yes | Custom template suffix |

### Blogs & Articles
| Field | Transfers | Notes |
|-------|----------|-------|
| Blog Title/Handle | ✅ Yes | Blog structure preserved |
| Article Title | ✅ Yes | Post titles |
| Article Body | ✅ Yes | Full HTML content |
| Author | ✅ Yes | Author name |
| Tags | ✅ Yes | Article categorization |
| Featured Image | ⚠️ Separate | Handled via Files migration |
| Comments | ❌ No | Comment history not available via API |

### SEO Tip
Migrating pages with the same handles ensures your URL structure remains intact, helping preserve search engine rankings.

---

## Use Case 8: Gift Card Transfer

**Scenario:** You have active gift cards customers are using, and they need to continue working in the new store.

### What Transfers
| Field | Transfers | Notes |
|-------|----------|-------|
| Initial Value | ✅ Yes | Original gift card amount |
| Current Balance | ⚠️ Initial | Shopify creates with initial value |
| Expiration Date | ✅ Yes | If applicable |
| Customer | ✅ Yes | Matched by email |
| Note | ✅ Yes | Internal notes |
| Code | ⚠️ New | Shopify generates a new secure code |

### Important Notes
- **New Codes Generated:** For security, Shopify generates new gift card codes. You'll need to communicate new codes to customers.
- **Balance Consideration:** Current balance is not queryable via API; cards migrate with their initial value.

</div>

<!-------------------------------------------------------------------------------------------------------------------------->

<div id="tab-faqs" class="hub-tab-content active" markdown="1">

## Frequently Asked Questions

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

Contact support with:
- Your source and destination store URLs
- The entity types you're migrating
- Any error messages you've encountered

We're here to help ensure a smooth migration!

</div>

<!--------------------------------------------------------------------------------------------------------------------------

<script>
    function openHubTab(evt, tabName) {
        // 1. Hide all tab content
        var i, content, tablinks;
        content = document.getElementsByClassName("hub-content");
        for (i = 0; i < content.length; i++) {
            content[i].style.display = "none";
            content[i].classList.remove("active");
        }

        // 2. Deactivate all buttons
        tablinks = document.getElementsByClassName("hub-tab-btn");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // 3. Show current tab and activate button
        document.getElementById(tabName).style.display = "block";
        setTimeout(() => {
             document.getElementById(tabName).classList.add("active");
        }, 10);
        evt.currentTarget.className += " active";
    }
</script> -->
<script>
function openHubTab(evt, tabId) {
  // Hide all tab content
  document.querySelectorAll('.hub-tab-content').forEach(el => {
    el.classList.remove('active');
  });

  // Remove active from all buttons
  document.querySelectorAll('.hub-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected tab
  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}

// Ensure Overview is active on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hub-tab-btn.active').click();
});
</script>


---

Click here → [Understanding the Staging App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [Staging Onboarding](staging-onboarding/index.md)

---

[← Back to Help Centre](../../index.md){ .md-button }
