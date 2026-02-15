# Field Mapping Reference

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

---

Click here → [Understanding the Staging App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [Staging Onboarding](staging-onboarding/index.md)

---

[← Back to Help Centre](../../index.md){ .md-button }