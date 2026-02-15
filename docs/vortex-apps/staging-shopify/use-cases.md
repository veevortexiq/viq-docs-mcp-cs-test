# Migration Use Cases & Examples

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

---

Click here → [Understanding the Staging App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [Staging Onboarding](staging-onboarding/index.md)

---

[← Back to Help Centre](../../index.md){ .md-button }
