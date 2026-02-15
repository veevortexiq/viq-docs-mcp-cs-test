# Field Reference

This document provides detailed information about how each field is restored during a rollback operation.

---

## Products

### Basic Product Information

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Title | ✅ Yes | Restored to saved value |
| Description (HTML) | ✅ Yes | Full HTML content restored |
| Handle (URL slug) | ✅ Yes | Restored (ID used for matching) |
| Product Type | ✅ Yes | Category restored |
| Vendor | ✅ Yes | Supplier name restored |
| Tags | ✅ Yes | All tags restored |
| Status | ✅ Yes | Active, Draft, or Archived |
| Product Category | ✅ Yes | Shopify category restored |
| Template | ✅ Yes | Custom template preserved |

### SEO Information

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| SEO Title | ✅ Yes | Search engine title restored |
| SEO Description | ✅ Yes | Meta description restored |

### Product Variants

Each variant includes:

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Title | ✅ Yes | Variant name restored |
| SKU | ✅ Yes | Product code restored |
| Barcode | ✅ Yes | UPC/EAN restored |
| Price | ✅ Yes | Selling price restored |
| Compare At Price | ✅ Yes | Original price restored |
| Weight | ✅ Yes | Value and unit restored |
| Requires Shipping | ✅ Yes | Shipping flag restored |
| Taxable | ✅ Yes | Tax setting restored |
| Inventory Policy | ✅ Yes | Continue/stop when sold out |
| Option Values | ✅ Yes | Size, Color, etc. restored |
| Image | ✅ Yes | Variant image association |

### Inventory

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Available Quantity | ✅ Yes | Stock levels restored by location |
| Location | ✅ Yes | Matched by location name |
| Cost per Item | ✅ Yes | Unit cost restored |

> **Important:** Inventory is matched by location name. Ensure location names match between backup and current store.

### Product Images & Media

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Image URL | ✅ Yes | Image files restored |
| Alt Text | ✅ Yes | Accessibility text restored |
| Position | ✅ Yes | Image order preserved |

### Custom Fields (Metafields)

| Field Type | Restored | Notes |
|------------|----------|-------|
| Text fields | ✅ Yes | Single line and multi-line |
| Numbers | ✅ Yes | Integer and decimal |
| Dates | ✅ Yes | Date and datetime |
| URLs | ✅ Yes | Link values |
| True/False | ✅ Yes | Boolean values |
| JSON | ✅ Yes | Structured data |
| File references | ⚠️ Separate | Requires file rollback first |
| Product references | ⚠️ Separate | Referenced products must exist |

---

## Customers

### Basic Information

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Email | ✅ Yes | Restored (ID used for matching) |
| First Name | ✅ Yes | Restored |
| Last Name | ✅ Yes | Restored |
| Phone | ✅ Yes | International format preserved |
| Note | ✅ Yes | Internal notes restored |
| Tags | ✅ Yes | All customer tags restored |
| Locale | ✅ Yes | Language preference restored |
| Tax Exempt | ✅ Yes | B2B status restored |
| Tax Exemptions | ✅ Yes | Specific exemptions restored |

### Addresses

All customer addresses are restored:

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Address Line 1 | ✅ Yes | Street address |
| Address Line 2 | ✅ Yes | Apt, suite, etc. |
| City | ✅ Yes | City name |
| Company | ✅ Yes | Business name |
| Country | ✅ Yes | Country code |
| Province/State | ✅ Yes | Region code |
| Zip/Postal Code | ✅ Yes | Postal code |
| Phone | ✅ Yes | Address-specific phone |

### Marketing Consent

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Email Marketing State | ✅ Yes | Subscribed, Not Subscribed, Pending |
| Email Opt-in Level | ✅ Yes | Single or confirmed opt-in |
| Email Consent Date | ✅ Yes | When consent was given |
| SMS Marketing State | ✅ Yes | Subscribed or Not Subscribed |
| SMS Opt-in Level | ✅ Yes | Single or confirmed opt-in |
| SMS Consent Date | ✅ Yes | When consent was given |

---

## Collections

### Manual Collections

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Title | ✅ Yes | Collection name |
| Handle | ✅ Yes | URL slug restored |
| Description | ✅ Yes | Full HTML content |
| Sort Order | ✅ Yes | Product sorting method |
| Template | ✅ Yes | Custom template |
| Image | ✅ Yes | Collection image restored |
| Alt Text | ✅ Yes | Image description |
| Products | ✅ Yes | Product associations restored |

### Smart Collections

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Title | ✅ Yes | Collection name |
| Handle | ✅ Yes | URL slug |
| Description | ✅ Yes | Full HTML content |
| Sort Order | ✅ Yes | Product sorting |
| Rules | ✅ Yes | All automation rules |
| Rule Condition | ✅ Yes | Match all/any rules |

### Collection Rules

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Column | ✅ Yes | Field to match (title, type, etc.) |
| Relation | ✅ Yes | equals, contains, starts_with |
| Condition | ✅ Yes | Value to match |

---

## Gift Cards

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Initial Value | ✅ Yes | Original amount |
| Expiration Date | ✅ Yes | If applicable |
| Note | ✅ Yes | Internal notes |
| Customer | ✅ Yes | Linked by original customer ID |
| Recipient Message | ✅ Yes | Gift message |
| Code | ⚠️ New | New code generated for security |

> **Security:** Original gift card codes cannot be restored. New codes are generated and must be communicated to customers.

---

## Pages

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Title | ✅ Yes | Page title |
| Body HTML | ✅ Yes | Full content and formatting |
| Handle | ✅ Yes | URL slug restored |
| Published | ✅ Yes | Publish status |
| Published At | ✅ Yes | Publication date |
| Template | ✅ Yes | Custom template |

---

## Blogs & Articles

### Blogs

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Title | ✅ Yes | Blog name |
| Handle | ✅ Yes | URL slug |
| Comment Policy | ✅ Yes | Moderate, None, Auto |
| Template | ✅ Yes | Custom template |

### Articles

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Title | ✅ Yes | Article title |
| Body HTML | ✅ Yes | Full article content |
| Summary | ✅ Yes | Excerpt text |
| Handle | ✅ Yes | URL slug |
| Author Name | ✅ Yes | Writer attribution |
| Tags | ✅ Yes | Article categories |
| Template | ✅ Yes | Custom template |
| Featured Image | ✅ Yes | Image restored |
| Blog Association | ✅ Yes | Linked to correct blog |

---

## Files & Media

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| File URL | ✅ Yes | File content restored |
| Alt Text | ✅ Yes | Accessibility text |
| Content Type | ✅ Yes | IMAGE, VIDEO, FILE |
| Filename | ✅ Yes | Original filename |

### Supported File Types

| Type | Support |
|------|---------|
| Images (JPG, PNG, GIF, WebP) | ✅ Full support |
| Videos (MP4, MOV) | ✅ Full support |
| External Videos (YouTube) | ✅ URL reference |
| 3D Models | ✅ Full support |
| Documents (PDF, etc.) | ✅ Full support |

---

## Themes

| Field | Restored | Rollback Behavior |
|-------|----------|-------------------|
| Name | ✅ Yes | Theme name |
| Role | ✅ Yes | Main, unpublished |
| Settings | ⚠️ Manual | May require verification |

> **Note:** Theme files and customizations may need manual review after rollback.

