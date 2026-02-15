---
title: Vortex Backup and Rollback
---

# What We Backup and Rollback

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
    .hub-content {
        display: none; /* Hidden by default */
        animation: fadeIn 0.3s ease;
    }

    .hub-content.active {
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
    <button class="hub-tab-btn active" onclick="openHubTab(event, 'tab-overview')">Getting Started</button>
    <button class="hub-tab-btn" onclick="openHubTab(event, 'tab-reference')">Field Reference</button>
    <button class="hub-tab-btn" onclick="openHubTab(event, 'tab-cases')">Use Cases</button>
    <button class="hub-tab-btn" onclick="openHubTab(event, 'tab-rollback')">What can be rolled back</button>
</div>


<!-------------------------------------------------------------------------------------------------------------------------->


<div id="tab-overview" class="hub-content active" markdown="1">

## Getting Started

This guide walks you through the rollback process step by step.

---

## Before You Begin

### Preparation Checklist

- [ ] **Identify the item to roll back** - Know the specific product, customer, or other entity you want to restore
- [ ] **Have the item ID ready** - You'll need the document ID to perform the rollback
- [ ] **Verify the stored version exists** - Ensure the item has a stored version available

---

## Step 1: Connect Your Store

Provide your store credentials to connect to the rollback platform. You'll need:

- Your Shopify store URL (e.g., `mystore.myshopify.com`)
- Access credentials for the rollback platform

> **Your data is secure.** The platform uses encrypted connections.

---

## Step 2: Identify the Item to Roll Back

Rollback works on individual items. You'll need to specify:

| Parameter | Description |
|-----------|-------------|
| **Index Name** | The entity type (e.g., products, customers, collections) |
| **Document ID** | The unique ID of the specific item to restore |

### Finding the Item ID

Each entity in your store has a unique ID. This ID is used to precisely identify which item to roll back.

---

## Step 3: Initiate the Rollback

Once you've identified the item:

1. Select the **index** (entity type)
2. Enter the **document ID**
3. Submit the rollback request

The platform will:
- Retrieve the stored version of that item
- Update (or recreate) the item in your store to match the stored version

---

## Step 4: Verify the Rollback

After rollback completes:

1. **Check the item in your store** - Verify the data is restored correctly
2. **Review any related data** - If you rolled back a product, check its variants and images
3. **Test functionality** - Ensure the item works as expected

---

## What Gets Restored

When you roll back an item, **all fields for that item** are restored:

| Entity Type | What's Restored |
|-------------|-----------------|
| **Products** | Title, description, variants, images, pricing, inventory, metafields |
| **Customers** | Name, email, addresses, tags, marketing consent |
| **Collections** | Title, handle, products (manual) or rules (smart) |
| **Pages** | Title, content, handle, publish status |

---

## Rolling Back Multiple Items

If you need to restore multiple items:

1. Perform a rollback for each item individually
2. Start with items that have dependencies (e.g., products before collections)
3. Verify each rollback before proceeding to the next

---

## Common Scenarios

| Scenario | What to Roll Back |
|----------|-------------------|
| Accidentally edited one product | Roll back that specific product ID |
| Wrong price on a product | Roll back that product to restore correct pricing |
| Customer data corrupted | Roll back that specific customer ID |
| Collection lost its products | Roll back that collection ID |



</div>


<!-------------------------------------------------------------------------------------------------------------------------->


<div id="tab-reference" class="hub-content" markdown="1">

## Field Reference {#reference}

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


</div>


<!-------------------------------------------------------------------------------------------------------------------------->


<div id="tab-cases" class="hub-content" markdown="1">

## Rollback Use Cases & Examples {#use-cases}

This guide provides practical examples of common rollback scenarios for your Shopify store.

---

## Use Case 1: Accidental Product Price Change

**Scenario:** You accidentally updated the price on a specific product and need to restore the correct price.

### Solution

| Step | Action |
|------|--------|
| 1 | Identify the product's document ID |
| 2 | Select the **products** index |
| 3 | Roll back that specific product ID |

### Result
The product's pricing (including all variant prices, compare-at prices) is restored to the stored version.

---

## Use Case 2: Product Description Corrupted

**Scenario:** A product's description was accidentally overwritten or corrupted during an edit.

### Solution

| Step | Action |
|------|--------|
| 1 | Find the product's ID |
| 2 | Roll back that product |

### What Gets Restored
- Product title and description (HTML)
- SEO title and meta description
- All variant information
- Tags and categories

---

## Use Case 3: Deleted Product Recovery

**Scenario:** A product was accidentally deleted and you need to bring it back.

### Solution

| Step | Action |
|------|--------|
| 1 | Find the deleted product's ID from your stored versions |
| 2 | Roll back that product ID |

### Result
The product is recreated with all its original data, including variants and images.

---

## Use Case 4: Collection Rules Changed Incorrectly

**Scenario:** You edited a smart collection's rules and now the wrong products are appearing.

### Solution

| Step | Action |
|------|--------|
| 1 | Identify the collection's ID |
| 2 | Roll back that collection |

### Result
- Smart collection rules restored
- Product matching conditions restored
- Collection settings restored

---

## Use Case 5: Customer Data Needs Restoration

**Scenario:** A customer's information was incorrectly modified and you need to restore their original data.

### Solution

| Step | Action |
|------|--------|
| 1 | Find the customer's ID |
| 2 | Roll back that customer |

### What Gets Restored
- Customer name and contact info
- All saved addresses
- Customer tags and notes
- Marketing preferences

---

## Use Case 6: Page Content Restoration

**Scenario:** Someone edited your About Us page incorrectly and you need the previous version.

### Solution

| Step | Action |
|------|--------|
| 1 | Find the page's ID |
| 2 | Roll back that page |

### Result
Page content, HTML formatting, and all styling restored to the stored version.

---

## Use Case 7: Gift Card Restoration

**Scenario:** A gift card record was incorrectly modified.

### Solution

| Step | Action |
|------|--------|
| 1 | Find the gift card's ID |
| 2 | Roll back that gift card |

### Important Note
> For re-created gift cards, new codes are generated for security. Communicate new codes to affected customers.

---

## Use Case 8: Blog Article Recovery

**Scenario:** A blog article was accidentally deleted or modified.

### Solution

| Step | Action |
|------|--------|
| 1 | Find the article's ID |
| 2 | Roll back that article |

### What Gets Restored
- Article title and content
- Author attribution
- Tags
- Featured image

---

## Best Practices

### Before Rolling Back

1. **Verify the ID** - Make sure you have the correct item ID
2. **Check dependencies** - If rolling back a collection, ensure referenced products exist
3. **Document changes** - Note what you're rolling back and why

### After Rolling Back

1. **Verify the item** - Check that the data is restored correctly
2. **Test functionality** - Ensure everything works as expected
3. **Check related items** - Verify any related data is consistent



</div>


<!-------------------------------------------------------------------------------------------------------------------------->


<div id="tab-rollback" class="hub-content" markdown="1">

## What Can Be Rolled Back {#rollback}

This guide details exactly what data can be restored and any limitations to be aware of.

---

## Supported Entity Types

### Products

Your complete product catalog can be rolled back, including:

| Data | Rollback Support |
|------|-----------------|
| Title & Description | ✅ Fully restored |
| Pricing (Price, Compare At) | ✅ Fully restored |
| Images & Media | ✅ Fully restored |
| Variants (Size, Color, etc.) | ✅ Fully restored |
| SKU & Barcode | ✅ Fully restored |
| Inventory Levels | ✅ Restored by location |
| Tags & Categories | ✅ Fully restored |
| SEO Title & Description | ✅ Fully restored |
| Product Status | ✅ Active, Draft, Archived |
| Custom Fields (Metafields) | ✅ Fully restored |
| Vendor & Product Type | ✅ Fully restored |

---

### Collections

Both manual and smart collections can be rolled back:

| Data | Rollback Support |
|------|-----------------|
| Title | ✅ Fully restored |
| Handle (URL) | ✅ Preserved |
| Description (HTML) | ✅ Fully restored |
| Sort Order | ✅ Restored |
| Template | ✅ Custom templates preserved |
| Collection Image | ✅ Fully restored |
| Products (Manual) | ✅ Product associations restored |
| Automation Rules (Smart) | ✅ All rules restored |
| Rule Conditions | ✅ Match all/any logic preserved |
| Metafields | ✅ Fully restored |

#### Supported Collection Rule Types

All smart collection rule types are preserved:
- Product title contains/equals
- Product type or vendor matches
- Price ranges
- Tag conditions
- Inventory levels

---

### Customers

Customer data rollback includes:

| Data | Rollback Support |
|------|-----------------|
| Name (First & Last) | ✅ Fully restored |
| Email Address | ✅ Fully restored |
| Phone Number | ✅ Fully restored |
| All Saved Addresses | ✅ Fully restored |
| Customer Tags | ✅ Fully restored |
| Internal Notes | ✅ Fully restored |
| Tax Exemptions | ✅ Fully restored |
| Marketing Consent | ✅ Email & SMS preferences |

> **Note:** Customer passwords cannot be rolled back for security reasons.

---

### Gift Cards

| Data | Rollback Support |
|------|-----------------|
| Initial Value | ✅ Restored |
| Expiration Date | ✅ Restored |
| Customer Association | ✅ Linked by original customer ID |
| Notes | ✅ Restored |
| Gift Card Code | ⚠️ New code generated for security |

> **Security Note:** For limitations on gift card codes, for re-created gift cards, the codes cannot be restored to previous values. Customers will receive new codes.

---

### Pages

Static content pages are fully supported:

| Data | Rollback Support |
|------|-----------------|
| Page Title | ✅ Fully restored |
| Page Content (HTML) | ✅ Fully restored |
| Handle (URL) | ✅ Preserved |
| Publish Status | ✅ Restored |
| Template | ✅ Custom templates preserved |

---

### Blogs & Articles

| Data | Rollback Support |
|------|-----------------|
| Blog Title & Handle | ✅ Fully restored |
| Comment Settings | ✅ Restored |
| Article Title & Content | ✅ Fully restored |
| Article Author | ✅ Restored |
| Article Tags | ✅ Restored |
| Featured Images | ✅ Restored |
| Publish Date | ✅ Preserved |

> **Note:** Blog comments cannot be rolled back as they're not accessible for backup.

---

### Files & Media

| File Type | Rollback Support |
|-----------|-----------------|
| Images | ✅ Fully restored |
| Videos | ✅ Fully restored |
| Documents (PDF, etc.) | ✅ Fully restored |
| 3D Models | ✅ Fully restored |

---

### Themes

| Data | Rollback Support |
|------|-----------------|
| Theme Name | ✅ Restored |
| Theme Role | ✅ Main/Unpublished status |
| Theme Files | ⚠️ May require additional setup |

> **Note:** Theme customizations and settings may require manual verification after rollback.

---

## What Cannot Be Rolled Back

Some data types have limitations:

| Data Type | Reason |
|-----------|--------|
| **Orders** | Protected to preserve financial/legal records |
| **Transactions** | Payment data is immutable |
| **Customer Passwords** | Security requirement |
| **Blog Comments** | Not available for backup |
| **Customer Segments** | Store-specific configurations |
| **App Data** | Managed by individual apps |

---

## Rollback Limitations

### Timing Considerations

- **Most recent backups** - Available within minutes of changes
- **Older restore points** - Check available dates in the platform

### Data Dependencies

Some data has relationships that matter:

| If Rolling Back... | Consider Also Rolling Back... |
|-------------------|------------------------------|
| Products | Collections (to maintain groupings) |
| Collections | Products (if referenced) |
| Gift Cards | Customers (for associations) |


</div>

<!-------------------------------------------------------------------------------------------------------------------------->

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
</script>


---

Click here → [Understanding the Backup App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [Backup Onboarding](backup-onboarding.md)

---

[← Back to Help Centre](../../index.md){ .md-button }