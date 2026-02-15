
# Data Type Reference

This section provides detailed information about each data type you can migrate with StagingPro. Understanding these data types helps you make informed decisions about what to include in your migrations.

---

## Products

### Description

Products are the core of your BigCommerce store—the items you sell to customers. Each product can include:


- Basic information (name, description, price)
- Variants (size, colour, options)
- Images and media
- Inventory settings
- Category assignments
- Custom fields

### When to Migrate Products


- When launching new product lines
- After updating product descriptions or pricing
- When synchronising staging with production data
- Before major promotions or sales events

### Dependencies


- **Categories**— Products are assigned to categories. If categories don't exist in the destination, assignments may not be preserved.
- **Brands**— If your products reference brands, ensure brand data is current in both environments.

### Migration Options

| Method | Best For |
| --- | --- |
| **Bulk Migration** | Copying all products at once |
| **Selective Migration** | Updating specific products only |
| **Scheduled Migration** | Planning product updates for off-peak times |


### Limitations


- Very large product catalogues take longer to migrate
- Product images increase migration time
- Real-time inventory may require separate synchronisation

### Validation Checklist

After migrating products:


- Verify product names and descriptions
- Check pricing is correct
- Confirm images display properly
- Test product variants work correctly
- Verify category assignments

### Common Mistakes


- ❌ Migrating products before categories exist
- ❌ Not checking variant pricing
- ❌ Forgetting to verify images loaded correctly

---

## Categories

### Description

Categories organise your products into a navigable structure. They include:


- Category name and description
- Parent-child relationships (category tree)
- Display order and visibility settings
- Category images

### When to Migrate Categories


- When restructuring your store navigation
- Before migrating products that need category assignments
- When setting up a new environment
- After adding new category branches

### Dependencies


- **Parent Categories**— Child categories require their parent categories to exist first.

### Migration Options

| Method | Best For |
| --- | --- |
| **Bulk Migration** | Copying entire category structure |
| **Selective Migration** | Adding or updating specific categories |


### Order of Migration

Always migrate categories in hierarchical order:


- Top-level (root) categories first
- Second-level categories next
- Third-level and deeper categories last

Or use Bulk Migration to copy the entire tree structure at once.

### Validation Checklist

After migrating categories:


- Verify the category tree displays correctly
- Check parent-child relationships
- Confirm category names and descriptions
- Test category navigation on the storefront

### Common Mistakes


- ❌ Migrating child categories before parent categories
- ❌ Not verifying the complete tree structure
- ❌ Forgetting to check category display order

---

## Promotions

### Description

Promotions define discounts and special offers in your store. They include:


- Discount rules (percentage, fixed amount)
- Coupon codes
- Conditions and restrictions
- Start and end dates
- Customer eligibility rules

### When to Migrate Promotions


- When launching a new promotional campaign
- After testing a promotion in staging
- When replicating successful promotions
- Preparing for seasonal sales

### Dependencies


- Promotions may reference specific products or categories
- Customer group restrictions require matching customer groups

### Migration Options

| Method | Best For |
| --- | --- |
| **Selective Migration** | Moving individual promotions |
| **Scheduled Migration** | Launching promotions at specific times |


### Validation Checklist

After migrating promotions:


- Verify discount amounts/percentages
- Test coupon codes work correctly
- Check start and end dates
- Verify conditions apply correctly
- Test with sample orders

### Common Mistakes


- ❌ Not testing promotional rules before deploying to production
- ❌ Migrating promotions with incorrect date/time settings
- ❌ Forgetting to check currency settings

---

## Themes

### Description

Themes control the visual appearance of your storefront. They include:


- Design templates and layouts
- Styling and colours
- Custom code modifications
- Theme configuration settings

### When to Migrate Themes


- After completing design changes in staging
- When deploying new theme versions
- When synchronising theme updates across environments

### Dependencies


- Theme code should be tested thoroughly before production deployment
- Connected repository required for code deployments

### Migration Options

Themes can be migrated through:


- **Selective Content Migration > Themes**— Select specific theme variations
- **Code Deployment**— Deploy from connected repository with approval workflow

### Validation Checklist

After migrating themes:


- View the storefront to confirm appearance
- Check on multiple devices (desktop, mobile, tablet)
- Verify all pages render correctly
- Test interactive elements (menus, buttons, forms)
- Check page load performance

### Common Mistakes


- ❌ Deploying themes without thorough testing
- ❌ Not checking mobile responsiveness
- ❌ Forgetting to test checkout process appearance

---

## Pages (Custom Pages)

### Description

Custom pages are content pages in your store such as:


- About Us
- Contact Us
- FAQs
- Shipping & Returns
- Terms and Conditions
- Any custom landing pages

Each page includes:


- Page content (HTML/text)
- Page title and URL
- Visibility settings
- Channel assignments

### When to Migrate Pages


- When publishing new content
- After updating page content in staging
- When launching new landing pages
- During content refresh projects

### Dependencies


- Pages may reference global widgets
- Some pages depend on specific page templates

### Migration Options

| Method | Best For |
| --- | --- |
| **Selective Migration > Custom Pages** | Moving specific pages |
| **Migrate Global Widgets**checkbox | Include shared widget content |


### Page Visibility

The migration list shows visibility status:


- ✅ (Green tick) — Page is visible/published
- ❌ (Red cross) — Page is hidden/unpublished

### Validation Checklist

After migrating pages:


- Visit each page on the storefront
- Verify content displays correctly
- Check images and links work
- Test on mobile devices
- Verify SEO metadata

### Common Mistakes


- ❌ Migrating hidden pages that shouldn't be visible
- ❌ Not checking page links work in the new environment
- ❌ Forgetting to test forms on contact pages

---

## Page Templates

### Description

Page Templates define the layout structure for different types of pages:


- Homepage
- Account pages (addresses, orders, wishlist)
- Checkout pages
- Product listing pages
- Search results pages

### When to Migrate Page Templates


- After modifying template layouts
- When standardising templates across environments
- Before migrating custom pages that use specific templates

### Dependencies


- Custom pages may depend on specific templates
- Theme components may affect template appearance

### Template Types

Common templates include:


- Homepage
- Account > Add Address
- Account > Add Wishlist
- Account > Addresses
- Account > Edit
- Account > Inbox
- Account > Orders > All
- Account > Orders > Details
- Account > Recent Items

### Migration Options

Use**Selective Content Migration > Page Templates**to:


- Select specific templates to copy
- Use "Copy Layouts" to migrate selected templates

### Validation Checklist

After migrating templates:


- Test affected pages display correctly
- Check account pages function properly
- Verify checkout flow works
- Test on different devices

---

## Customers

### Description

Customer data includes:


- Customer accounts and profiles
- Contact information
- Order history associations
- Customer group memberships
- Saved addresses

### When to Migrate Customers


- When setting up test environments with realistic data
- When synchronising staging with production

### Special Considerations

**Anonymisation Option:**When migrating to non-production environments, you can choose to anonymise customer data. This replaces real customer information with fake data, protecting privacy while maintaining realistic testing scenarios.

### Migration Options

| Method | Best For |
| --- | --- |
| **Bulk Migration** | Copying all customers (with anonymisation option) |


### Validation Checklist

After migrating customers:


- Verify customer counts match expectations
- If anonymised, confirm real data is not present
- Test customer login functionality

### Common Mistakes


- ❌ Migrating real customer data to unsecured environments
- ❌ Not using anonymisation for non-production environments

---

## Orders

### Description

Order data includes:


- Order records and history
- Line items and quantities
- Shipping and billing information
- Order status and fulfilment

### When to Migrate Orders


- When setting up test environments with realistic data
- For order processing workflow testing
- When analysing historical patterns in staging

### Special Considerations

Order migration is typically for historical reference and testing purposes. Active orders should be managed through your normal BigCommerce processes.

### Migration Options

| Method | Best For |
| --- | --- |
| **Bulk Migration** | Copying order history |


### Validation Checklist

After migrating orders:


- Verify order counts are reasonable
- Check order details display correctly
- Test order search functionality

---

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }