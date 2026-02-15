# Migration Use Cases and Examples

{#use-case-12-same-store-channel-migration-multi-storefront}

<p>This guide provides practical examples of common BigCommerce product migration scenarios with real-world examples.</p><hr /><h2>Use Case 1: Single Product Migration</h2><p><strong>Scenario:</strong> You need to copy one specific product from your staging store to your production store, or from one store to another.</p><h3>What Gets Migrated</h3><table><thead><tr><th><p>Component</p></th><th><p>Example Data</p></th></tr></thead><tbody><tr><td><p>Product Base</p></td><td><p>"Premium Wireless Headphones" - $149.99</p></td></tr><tr><td><p>Images</p></td><td><p>5 product images with alt text</p></td></tr><tr><td><p>Options</p></td><td><p>Color (Black, Silver, Rose Gold)</p></td></tr><tr><td><p>Variants</p></td><td><p>3 variants with unique SKUs</p></td></tr><tr><td><p>Custom Fields</p></td><td><p>"Battery Life: 30 hours", "Warranty: 2 years"</p></td></tr></tbody></table><h3>Before Migration (Source Store)</h3><pre>
<code>Product: Premium Wireless Headphones
SKU: WH-PRO-2024
Price: $149.99
Description: "Experience crystal-clear audio..."
Brand: AudioTech
Category: Electronics &gt; Audio &gt; Headphones
<br>
Options:
  - Color: Black, Silver, Rose Gold
<br>
Variants:
  - WH-PRO-2024-BLK (Black) - $149.99, Stock: 50
  - WH-PRO-2024-SLV (Silver) - $149.99, Stock: 35
  - WH-PRO-2024-RSG (Rose Gold) - $159.99, Stock: 20
<br>
Custom Fields:
  - Battery Life: 30 hours
  - Connectivity: Bluetooth 5.2
  - Warranty: 2 years
<br>
Images: 5 images (front, back, side, lifestyle, packaging)
</code>
</pre><h3>After Migration (Destination Store)</h3><pre><code>Product: Premium Wireless Headphones (NEW ID: 789)
SKU: WH-PRO-2024
Price: $149.99
Description: "Experience crystal-clear audio..." (preserved)
Brand: AudioTech (ID: 45 - matched or created)
Category: Electronics &gt; Audio &gt; Headphones (hierarchy preserved)
<br>
Options:
  - Color (NEW ID: 201): Black (501), Silver (502), Rose Gold (503)
<br>
Variants (NEW IDs, option values mapped correctly):
  - WH-PRO-2024-BLK → Color: Black - $149.99, Stock: 50
  - WH-PRO-2024-SLV → Color: Silver - $149.99, Stock: 35
  - WH-PRO-2024-RSG → Color: Rose Gold - $159.99, Stock: 20
<br>
Custom Fields: All preserved with new IDs
Images: All 5 re-uploaded with alt text preserved
</code></pre><h3>Important Notes</h3><ul><li><p>Product ID changes but all data is preserved</p></li><li><p>Option and variant IDs are mapped automatically</p></li><li><p>Brand and categories are matched by name or created</p></li></ul><hr /><h2>Use Case 2: Bulk Product Migration</h2><p><strong>Scenario:</strong> You're launching a new product line and need to migrate 50 products from your development store to production.</p><h3>What Gets Migrated</h3><p>All 50 products with their complete data including: - Product base information - All images and videos - Options and variants - Custom fields and modifiers - Bulk pricing rules</p><h3>Example Product List</h3><table><thead><tr><th><p>Product Name</p></th><th><p>SKU</p></th><th><p>Options</p></th><th><p>Variants</p></th><th><p>Status</p></th></tr></thead><tbody><tr><td><p>Running Shoes Pro</p></td><td><p>RS-PRO-001</p></td><td><p>Size, Color</p></td><td><p>24</p></td><td><p>Success</p></td></tr><tr><td><p>Running Shoes Lite</p></td><td><p>RS-LITE-001</p></td><td><p>Size, Color</p></td><td><p>18</p></td><td><p>Success</p></td></tr><tr><td><p>Athletic Socks 3-Pack</p></td><td><p>AS-3PK-001</p></td><td><p>Size</p></td><td><p>4</p></td><td><p>Success</p></td></tr><tr><td><p>Sports Water Bottle</p></td><td><p>SWB-001</p></td><td><p>Color</p></td><td><p>5</p></td><td><p>Success</p></td></tr><tr><td><p>...</p></td><td><p>...</p></td><td><p>...</p></td><td><p>...</p></td><td><p>...</p></td></tr></tbody></table><h3>Migration Process</h3><ol><li><p><strong>First Pass</strong>: Products with shared brands and categories</p><ul><li><p>Brand "SportGear" created once</p></li><li><p>Category "Sports &gt; Running" created once</p></li></ul></li><li><p><strong>Subsequent Products</strong>: Use existing brands/categories</p><ul><li><p>Faster migration as dependencies already exist</p></li></ul></li></ol><h3>Timing Estimate</h3><table><thead><tr><th><p>Product Complexity</p></th><th><p>Count</p></th><th><p>Est. Time</p></th></tr></thead><tbody><tr><td><p>Simple (no variants)</p></td><td><p>10</p></td><td><p>2-3 minutes</p></td></tr><tr><td><p>With options/variants</p></td><td><p>35</p></td><td><p>15-20 minutes</p></td></tr><tr><td><p>Complex (modifiers, rules)</p></td><td><p>5</p></td><td><p>3-5 minutes</p></td></tr><tr><td><p><strong>Total</strong></p></td><td><p><strong>50</strong></p></td><td><p><strong>~25 minutes</strong></p></td></tr></tbody></table><h3>Important Notes</h3><ul><li><p>Products are migrated sequentially to maintain data integrity</p></li><li><p>If one product fails, others continue processing</p></li><li><p>Failed products can be retried individually</p></li></ul><hr /><h2>Use Case 3: Full Catalog Migration</h2><p><strong>Scenario:</strong> You're moving your entire product catalog to a new BigCommerce store—everything from your source store needs to go to the destination.</p><h3>How It Works</h3><p>When you don't specify product IDs, the system automatically: 1. Fetches all products from source store (250 at a time) 2. Processes each product with full component migration 3. Handles large catalogs efficiently</p><h3>Example Catalog Summary</h3><table><thead><tr><th><p>Category</p></th><th><p>Products</p></th><th><p>Variants</p></th><th><p>Est. Time</p></th></tr></thead><tbody><tr><td><p>Clothing</p></td><td><p>500</p></td><td><p>3,500</p></td><td><p>2-3 hours</p></td></tr><tr><td><p>Accessories</p></td><td><p>200</p></td><td><p>400</p></td><td><p>30-45 min</p></td></tr><tr><td><p>Footwear</p></td><td><p>150</p></td><td><p>1,200</p></td><td><p>1-1.5 hours</p></td></tr><tr><td><p>Home Goods</p></td><td><p>300</p></td><td><p>600</p></td><td><p>1-1.5 hours</p></td></tr><tr><td><p><strong>Total</strong></p></td><td><p><strong>1,150</strong></p></td><td><p><strong>5,700</strong></p></td><td><p><strong>5-7 hours</strong></p></td></tr></tbody></table><h3>Handling Large Catalogs</h3><p>For catalogs with 1,000+ products: - Migration runs in batches of 250 products - Progress is checkpointed after each batch - If interrupted, can resume from last checkpoint</p><h3>Important Notes</h3><ul><li><p>Start during off-peak hours for large catalogs</p></li><li><p>Monitor progress through status endpoints</p></li><li><p>Plan for multi-hour migrations for large stores</p></li></ul><hr /><h2>Use Case 4: Store Replication for Testing</h2><p><strong>Scenario:</strong> You want to create a copy of your production catalog in a development or staging store for testing themes, apps, or checkout flows.</p><h3>What to Migrate</h3><table><thead><tr><th><p>Testing Purpose</p></th><th><p>Recommended Data</p></th></tr></thead><tbody><tr><td><p>Theme testing</p></td><td><p>Products, Images, Options/Variants</p></td></tr><tr><td><p>App integration</p></td><td><p>Full product data including custom fields</p></td></tr><tr><td><p>Checkout testing</p></td><td><p>Products with variants, pricing, inventory</p></td></tr><tr><td><p>Full QA</p></td><td><p>Complete catalog including reviews</p></td></tr></tbody></table><h3>Example: Theme Development Testing</h3><p>Migrate a representative sample:</p><pre><code>Selected Products:
- 5 Simple products (different categories)
- 5 Products with variants (size/color)
- 3 Products with modifiers (customization)
- 2 Products with bulk pricing
- 3 Products with videos
<br>
Total: 18 products covering all display scenarios
</code></pre><h3>Benefits</h3><ul><li><p>Test with real product data</p></li><li><p>Verify option selectors work correctly</p></li><li><p>Check variant image switching</p></li><li><p>Test modifier forms and pricing</p></li></ul><h3>Important Notes</h3><ul><li><p>Development stores have some limitations</p></li><li><p>Can re-run migration to refresh test data</p></li><li><p>Consider migrating subset for faster iteration</p></li></ul><hr /><h2>Use Case 5: Multi-Language Store Migration</h2><p><strong>Scenario:</strong> Your store serves multiple countries/languages and you need to migrate products with all their translated content.</p><h3>What Gets Migrated Per Locale</h3><table><thead><tr><th><p>Locale Data</p></th><th><p>Example</p></th></tr></thead><tbody><tr><td><p>Basic Info</p></td><td><p>Spanish: "Auriculares Inalámbricos Premium"</p></td></tr><tr><td><p>Description</p></td><td><p>Translated product description</p></td></tr><tr><td><p>SEO Title</p></td><td><p>Locale-specific page title</p></td></tr><tr><td><p>Meta Description</p></td><td><p>Translated meta description</p></td></tr><tr><td><p>Custom URL</p></td><td><p>"/es/auriculares-premium"</p></td></tr><tr><td><p>Option Labels</p></td><td><p>"Color" → "Color", "Talla" → "Size"</p></td></tr><tr><td><p>Custom Fields</p></td><td><p>Translated field values</p></td></tr></tbody></table><h3>Example: English/Spanish/French Store</h3><p><strong>Source Product in English:</strong></p><pre><code>Name: "Premium Wireless Headphones"
Description: "Experience crystal-clear audio..."
Page Title: "Premium Wireless Headphones | Best Sound"
</code></pre><p><strong>Spanish Locale Override:</strong></p><pre><code>Name: "Auriculares Inalámbricos Premium"
Description: "Experimenta un audio cristalino..."
Page Title: "Auriculares Inalámbricos | Mejor Sonido"
URL: "/es/auriculares-inalambricos-premium"
</code></pre><p><strong>French Locale Override:</strong></p><pre><code>Name: "Casque Sans Fil Premium"
Description: "Découvrez un son cristallin..."
Page Title: "Casque Sans Fil Premium | Meilleur Son"
URL: "/fr/casque-sans-fil-premium"
</code></pre><h3>Migration Result</h3><p>All locale data migrated to destination: - Base product in default language - Spanish overrides applied - French overrides applied - SEO data preserved for all locales</p><h3>Important Notes</h3><ul><li><p>All 10 locale categories are migrated per locale</p></li><li><p>Option and modifier translations preserved</p></li><li><p>Custom URL paths maintained for SEO</p></li></ul><hr /><h2>Use Case 6: Product with Complex Options</h2><p><strong>Scenario:</strong> Migrating a product with multiple options that create many variant combinations (e.g., t-shirt with Size and Color options).</p><h3>Source Product Structure</h3><pre><code>Product: Classic Cotton T-Shirt
Base Price: $24.99
<br>
Option 1 - Size:
  - Small
  - Medium  
  - Large
  - X-Large
  - XX-Large
<br>
Option 2 - Color:
  - White
  - Black
  - Navy
  - Red
  - Gray
<br>
Total Variants: 5 sizes × 5 colors = 25 variants
</code></pre><h3>Variant Examples</h3><table><thead><tr><th><p>SKU</p></th><th><p>Size</p></th><th><p>Color</p></th><th><p>Price</p></th><th><p>Stock</p></th></tr></thead><tbody><tr><td><p>TS-CLR-S-WHT</p></td><td><p>Small</p></td><td><p>White</p></td><td><p>$24.99</p></td><td><p>100</p></td></tr><tr><td><p>TS-CLR-M-BLK</p></td><td><p>Medium</p></td><td><p>Black</p></td><td><p>$24.99</p></td><td><p>150</p></td></tr><tr><td><p>TS-CLR-L-NVY</p></td><td><p>Large</p></td><td><p>Navy</p></td><td><p>$24.99</p></td><td><p>75</p></td></tr><tr><td><p>TS-CLR-XL-RED</p></td><td><p>X-Large</p></td><td><p>Red</p></td><td><p>$26.99</p></td><td><p>50</p></td></tr><tr><td><p>TS-CLR-XXL-GRY</p></td><td><p>XX-Large</p></td><td><p>Gray</p></td><td><p>$28.99</p></td><td><p>25</p></td></tr><tr><td><p>... (20 more variants)</p></td><td><p>...</p></td><td><p>...</p></td><td><p>...</p></td><td><p>...</p></td></tr></tbody></table><h3>How Option Mapping Works</h3><p><strong>Step 1: Options Created in Destination</strong></p><pre><code>Source Option "Size" (ID: 100) → Destination (ID: 500)
  Small (101) → (501)
  Medium (102) → (502)
  Large (103) → (503)
  X-Large (104) → (504)
  XX-Large (105) → (505)
<br>
Source Option "Color" (ID: 200) → Destination (ID: 600)
  White (201) → (601)
  Black (202) → (602)
  Navy (203) → (603)
  Red (204) → (604)
  Gray (205) → (605)
</code></pre><p><strong>Step 2: Variants Created with Mapped IDs</strong></p><pre><code>Variant TS-CLR-M-BLK:
  Source: Size=102 (Medium), Color=202 (Black)
  Destination: Size=502 (Medium), Color=602 (Black)
</code></pre><h3>Important Notes</h3><ul><li><p>All 25 variants created with correct option mappings</p></li><li><p>Each variant's inventory, pricing, and images preserved</p></li><li><p>Variant-specific images linked correctly</p></li></ul><hr /><h2>Use Case 7: Promotional Product with Bulk Pricing</h2><p><strong>Scenario:</strong> Migrating a product that has quantity-based discounts for wholesale or bulk purchases.</p><h3>Source Product</h3><pre><code>Product: Office Supply Bundle
Base Price: $15.99 per unit
<br>
Bulk Pricing Rules:
| Quantity | Discount Type | Amount | Effective Price |
|----------|--------------|--------|-----------------|
| 10-24    | Percent Off  | 10%    | $14.39/unit     |
| 25-49    | Percent Off  | 15%    | $13.59/unit     |
| 50-99    | Percent Off  | 20%    | $12.79/unit     |
| 100+     | Fixed Price  | $10.00 | $10.00/unit     |
</code></pre><h3>After Migration</h3><p>All bulk pricing rules transferred exactly:</p><pre><code>Product: Office Supply Bundle (NEW ID)
Base Price: $15.99 per unit

Bulk Pricing Rules (NEW IDs):
| Qty Min | Qty Max | Type    | Amount | Result         |
|---------|---------|---------|--------|----------------|
| 10      | 24      | percent | 10     | 10% off        |
| 25      | 49      | percent | 15     | 15% off        |
| 50      | 99      | percent | 20     | 20% off        |
| 100     | 0       | price   | 10.00  | $10.00 each    |
</code></pre><h3>Important Notes</h3><ul><li><p>All discount tiers preserved</p></li><li><p>Quantity ranges maintained exactly</p></li><li><p>Discount types (percent, fixed, price) work correctly</p></li></ul><hr /><h2>Use Case 8: Content-Rich Product Migration</h2><p><strong>Scenario:</strong> Migrating a product with extensive additional content including custom fields, reviews, modifiers, and videos.</p><h3>Source Product</h3><pre><code>Product: Professional Camera Kit
Price: $1,299.99
<br>
Custom Fields:
- Sensor: "Full-frame 45MP CMOS"
- Video: "8K 30fps, 4K 120fps"
- ISO Range: "100-51,200"
- Warranty: "3 years manufacturer warranty"
- Included Items: "Body, 24-70mm lens, battery, charger, strap"
<br>
Modifiers:
- Extended Warranty (Checkbox): +$199
- Memory Card Bundle (Dropdown): 64GB (+$29), 128GB (+$49), 256GB (+$89)
- Cleaning Kit (Checkbox): +$24.99
<br>
Videos:
- "Product Overview" (YouTube)
- "Feature Highlights" (YouTube)
- "Unboxing and Setup" (YouTube)
<br>
Reviews: 47 reviews, 4.8 average rating
</code></pre><h3>After Migration</h3><p><strong>Custom Fields:</strong> All 5 fields preserved with exact values</p><p><strong>Modifiers:</strong></p><pre><code>Extended Warranty (Checkbox):
- Label: "Add 2-Year Extended Warranty"
- Price Adjustment: +$199.00
<br>
Memory Card Bundle (Dropdown):
- 64GB SD Card (+$29.00)
- 128GB SD Card (+$49.00) 
- 256GB SD Card (+$89.00)
<br>
Cleaning Kit (Checkbox):
- Label: "Include Professional Cleaning Kit"
- Price Adjustment: +$24.99
</code></pre><p><strong>Videos:</strong> All 3 videos linked with titles and descriptions</p><p><strong>Reviews:</strong></p><pre><code>47 reviews migrated:
- All titles and review text preserved
- Ratings (1-5 stars) maintained
- Reviewer names and dates preserved
- Review status (approved/pending) maintained
</code></pre><h3>Important Notes</h3><ul><li><p>Modifier price adjustments work immediately</p></li><li><p>Video links remain functional (YouTube/Vimeo)</p></li><li><p>Review dates show original submission dates</p></li><li><p>Average rating calculated from migrated reviews</p></li></ul><hr /><h2>Use Case 9: Product with Complex Rules (Conditional Pricing)</h2><p><strong>Scenario:</strong> Migrating a customizable product where certain modifier combinations trigger special pricing, weight changes, or purchasing restrictions.</p><h3>Source Product</h3><pre><code>Product: Custom Engraved Watch
Base Price: $299.99
<br>
Modifiers:
- Watch Band Material (Dropdown):
  - Leather ($0)
  - Stainless Steel (+$50)
  - Titanium (+$150)
<br>
- Engraving Style (Dropdown):
  - None ($0)
  - Simple Text (+$25)
  - Cursive Script (+$45)
  - Custom Logo (+$75)
<br>
- Gift Box (Checkbox):
  - Add Premium Gift Box (+$35)
<br>
Complex Rules:
1. "Premium Package" Rule:
   - IF Band = "Titanium" AND Engraving = "Custom Logo"
   - THEN: Add $25 (premium handling fee)
<br>
2. "Heavy Item" Rule:
   - IF Band = "Stainless Steel" OR Band = "Titanium"
   - THEN: Add 0.5 lbs to shipping weight
<br>
3. "Discontinued Combo" Rule:
   - IF Band = "Leather" AND Engraving = "Custom Logo"
   - THEN: Disable purchasing, show message "This combination is not available"
</code></pre><h3>How Complex Rules Migrate</h3><p><strong>Step 1: Modifiers Created First</strong></p><pre><code>Source Modifier "Watch Band Material" (ID: 100) → Destination (ID: 500)
  Leather (101) → (501)
  Stainless Steel (102) → (502)
  Titanium (103) → (503)
<br>
Source Modifier "Engraving Style" (ID: 200) → Destination (ID: 600)
  None (201) → (601)
  Simple Text (202) → (602)
  Cursive Script (203) → (603)
  Custom Logo (204) → (604)
</code></pre><p><strong>Step 2: Complex Rules Created with Mapped IDs</strong></p><pre><code>Rule 1 "Premium Package":
  Conditions:
    - Modifier 500, Value 503 (Titanium)
    - Modifier 600, Value 604 (Custom Logo)
  Price Adjuster: +$25.00 (relative)
<br>
Rule 2 "Heavy Item":
  Conditions:
    - Modifier 500, Value 502 (Stainless Steel) OR
    - Modifier 500, Value 503 (Titanium)
  Weight Adjuster: +0.5 lbs (relative)
<br>
Rule 3 "Discontinued Combo":
  Conditions:
    - Modifier 500, Value 501 (Leather)
    - Modifier 600, Value 604 (Custom Logo)
  Purchasing Disabled: true
  Message: "This combination is not available"
</code></pre><h3>After Migration</h3><p>All complex rules function identically: - Customer selects Titanium + Custom Logo → $25 added to price - Customer selects Stainless Steel → 0.5 lbs added to weight - Customer selects Leather + Custom Logo → Add to Cart disabled with message</p><h3>Complex Rules Migration Details</h3><table><thead><tr><th><p>Source Rule</p></th><th><p>Destination</p></th><th><p>Behavior</p></th></tr></thead><tbody><tr><td><p>Conditions</p></td><td><p>Mapped</p></td><td><p>Modifier/value IDs mapped to new IDs</p></td></tr><tr><td><p>Price Adjusters</p></td><td><p>Preserved</p></td><td><p>Amount and type (%, fixed, absolute)</p></td></tr><tr><td><p>Weight Adjusters</p></td><td><p>Preserved</p></td><td><p>Amount and type</p></td></tr><tr><td><p>Purchasing Disabled</p></td><td><p>Preserved</p></td><td><p>Restriction applies</p></td></tr><tr><td><p>Custom Messages</p></td><td><p>Preserved</p></td><td><p>Message text transferred</p></td></tr><tr><td><p>Enabled/Stop Flags</p></td><td><p>Preserved</p></td><td><p>Rule behavior intact</p></td></tr></tbody></table><h3>Deduplication Behavior</h3><p>If destination already has complex rules: - <strong>Matching rules</strong>: Preserved (not duplicated) - <strong>Auto-generated single-condition rules</strong>: Cleaned up - <strong>Non-matching rules</strong>: Created fresh</p><h3>Important Notes</h3><ul><li><p>Modifier IDs are automatically mapped in rule conditions</p></li><li><p>All adjuster types (percent, relative, absolute) supported</p></li><li><p>Rules work immediately after migration</p></li><li><p>Test complex modifier combinations after migration</p></li></ul><hr /><h2>Use Case 10: Updating Existing Products</h2><p><strong>Scenario:</strong> A product already exists in the destination store, and you want to update it with data from the source store.</p><h3>How Update Mode Works</h3><p><strong>Step 1: Product Resolution</strong></p><pre><code>Source Product: "Summer Dress Collection" (SKU: SDC-2024)
<br>
Destination Search:
1. Search by name "Summer Dress Collection" → Found! (ID: 456)
2. Mode: UPDATE (not CREATE)
</code></pre><p><strong>Step 2: Backup Created</strong> Before any changes, existing product data is backed up: - Product base information - All options and variants - Modifiers and complex rules - Custom fields - Bulk pricing rules - Videos</p><blockquote><p><strong>Important:</strong> The backup ensures you can rollback if something goes wrong.</p></blockquote><p><strong>Step 3: Component Cleanup (DELETE Phase)</strong></p><p>This is a <strong>critical step</strong>. In UPDATE mode, existing components are <strong>completely deleted</strong> before new ones are created. This is a <strong>replace strategy, not a merge</strong>.</p><table><thead><tr><th><p>Component</p></th><th><p>Cleanup Action</p></th></tr></thead><tbody><tr><td><p>Images</p></td><td><p>ALL existing images deleted</p></td></tr><tr><td><p>Options</p></td><td><p>ALL options deleted</p></td></tr><tr><td><p>Variants</p></td><td><p>Auto-deleted when options removed</p></td></tr><tr><td><p>Modifiers</p></td><td><p>ALL modifiers deleted</p></td></tr><tr><td><p>Custom Fields</p></td><td><p>ALL custom fields deleted</p></td></tr><tr><td><p>Bulk Pricing Rules</p></td><td><p>ALL rules deleted</p></td></tr><tr><td><p>Videos</p></td><td><p>ALL videos deleted</p></td></tr></tbody></table><blockquote><p><strong>Why delete everything?</strong> This ensures a clean slate and prevents orphaned data, duplicate entries, or mismatched IDs. The source data becomes the single source of truth.</p></blockquote><p><strong>Step 4: New Components Created</strong> Fresh data from source is created: - New options with new IDs - New variants linked to new options - New modifiers with new IDs - New complex rules with mapped modifier IDs - New custom fields - New bulk pricing rules - New videos - Product and variant metafields</p><p><strong>Step 5: Images Added</strong> - Source images are uploaded fresh - Display order and alt text preserved</p><h3>What Gets Updated vs. Preserved</h3><table><thead><tr><th><p>Component</p></th><th><p>Behavior</p></th><th><p>Notes</p></th></tr></thead><tbody><tr><td><p>Product base</p></td><td><p>Updated</p></td><td><p>Name, description, pricing, etc.</p></td></tr><tr><td><p>Images</p></td><td><p>Replaced</p></td><td><p>Old deleted, new uploaded</p></td></tr><tr><td><p>Options</p></td><td><p>Replaced</p></td><td><p>All deleted, recreated fresh</p></td></tr><tr><td><p>Variants</p></td><td><p>Replaced</p></td><td><p>All deleted, recreated with mappings</p></td></tr><tr><td><p>Modifiers</p></td><td><p>Replaced</p></td><td><p>All deleted, recreated fresh</p></td></tr><tr><td><p>Complex Rules</p></td><td><p>Smart Merge</p></td><td><p>Matching preserved, others created</p></td></tr><tr><td><p>Custom fields</p></td><td><p>Replaced</p></td><td><p>All deleted, recreated fresh</p></td></tr><tr><td><p>Bulk pricing</p></td><td><p>Replaced</p></td><td><p>All deleted, recreated fresh</p></td></tr><tr><td><p>Videos</p></td><td><p>Replaced</p></td><td><p>All deleted, recreated fresh</p></td></tr><tr><td><p>Reviews</p></td><td><p>Added</p></td><td><p>New reviews appended</p></td></tr><tr><td><p>Product Metafields</p></td><td><p>Replaced</p></td><td><p>Updated/created fresh</p></td></tr><tr><td><p>Variant Metafields</p></td><td><p>Replaced</p></td><td><p>Created on new variants</p></td></tr></tbody></table><h3>Understanding the Replace Strategy</h3><p><strong>Example: Before and After</strong></p><p><strong>Before Migration (Destination):</strong></p><pre><code>Product: Summer Dress Collection
Options: Size (S, M, L), Color (Red, Blue)
Variants: 6 variants
Modifiers: Gift Wrap, Custom Message
Custom Fields: Material, Care Instructions
</code></pre><p><strong>After Migration (From Source):</strong></p><pre><code>Product: Summer Dress Collection (UPDATED)
Options: Size (XS, S, M, L, XL), Color (Red, Blue, Green)  ← Different!
Variants: 15 variants  ← More variants!
Modifiers: Gift Wrap, Rush Processing  ← Different modifiers!
Custom Fields: Fabric, Season, Designer  ← Different fields!
</code></pre><p>The destination product now exactly matches the source, regardless of what was there before.</p><h3>Rollback Option</h3><p>If the update causes issues: 1. Trigger rollback using migration ID 2. Original product data restored from backup 3. Product returns to pre-migration state</p><p><strong>What gets restored:</strong> - Product base information - All original options and variants - Original modifiers - Original custom fields - Original bulk pricing rules - Original videos</p><p><strong>What is NOT restored:</strong> - Images (only added, not modified) - Reviews (only added) - Custom template associations</p><h3>Important Notes</h3><ul><li><p>Always verify source data before updating production products</p></li><li><p>Test with a sample product first</p></li><li><p>Backup is retained until explicitly cleaned up</p></li><li><p>Complex rules are handled intelligently to avoid duplicates</p></li></ul><hr /><h2>Use Case 11: Cross-Channel Migration</h2><p><strong>Scenario:</strong> Migrating products from one sales channel to another, or ensuring products are properly assigned to channels in the destination store.</p><h3>Channel Assignment</h3><pre><code>Source Store:
- Product assigned to Channel 1 (Storefront)
- Featured: Yes
<br>
Destination Store:
- Product created/updated
- Assigned to Channel 2 (different storefront)
- Featured status: Preserved

</code></pre><h3>What Transfers</h3><table><thead><tr><th><p>Setting</p></th><th><p>Behavior</p></th></tr></thead><tbody><tr><td><p>Channel Assignment</p></td><td><p>Product assigned to specified destination channel</p></td></tr><tr><td><p>Featured Status</p></td><td><p>Preserved per channel</p></td></tr><tr><td><p>Visibility</p></td><td><p>Controlled by channel assignment</p></td></tr></tbody></table><h3>Important Notes</h3><ul><li><p>Specify destination channel ID in migration request</p></li><li><p>Products can be assigned to different channels than source</p></li><li><p>Featured status transfers with the channel assignment</p></li></ul><hr />


<h2>Use Case 12: Same-Store Channel Migration (Multi-Storefront)</h2>{#use-case-12-same-store-channel-migration-multi-storefront}

<p><strong>Scenario:</strong> You have a multi-storefront BigCommerce setup and want to publish existing products from one channel (e.g., Retail) to another channel (e.g., Wholesale or B2B) within the <strong>same store</strong>.</p><h3>When This Applies</h3><p>The platform automatically detects same-store channel migration when: - Source store ID = Destination store ID (same store) - Source channel ID ≠ Destination channel ID (different channels)</p><h3>How It Differs from Full Migration</h3><p>This is a <strong>simplified workflow</strong> because the product already exists in the store. No need to recreate components.</p><table><thead><tr><th><p>Aspect</p></th><th><p>Full Migration</p></th><th><p>Channel Migration</p></th></tr></thead><tbody><tr><td><p>Product base data</p></td><td><p>Created/Updated</p></td><td><p>Not changed</p></td></tr><tr><td><p>Options &amp; Variants</p></td><td><p>Migrated</p></td><td><p>Not migrated</p></td></tr><tr><td><p>Modifiers &amp; Complex Rules</p></td><td><p>Migrated</p></td><td><p>Not migrated</p></td></tr><tr><td><p>Images &amp; Videos</p></td><td><p>Migrated</p></td><td><p>Not migrated</p></td></tr><tr><td><p>Custom Fields</p></td><td><p>Migrated</p></td><td><p>Not migrated</p></td></tr><tr><td><p>Reviews &amp; Metafields</p></td><td><p>Migrated</p></td><td><p>Not migrated</p></td></tr><tr><td><p>Backup/Rollback</p></td><td><p>Yes</p></td><td><p>No</p></td></tr><tr><td><p>Categories</p></td><td><p>To destination store</p></td><td><p>To destination channel's tree</p></td></tr><tr><td><p>Channel Assignment</p></td><td><p>Yes</p></td><td><p>Yes</p></td></tr><tr><td><p>Widget Templates</p></td><td><p>Yes</p></td><td><p>Yes</p></td></tr><tr><td><p>Locale Data</p></td><td><p>Yes</p></td><td><p>Yes</p></td></tr></tbody></table><h3>What Gets Migrated</h3><p>Only <strong>channel-specific content</strong> is migrated:</p><table><thead><tr><th><p>Component</p></th><th><p>What Happens</p></th></tr></thead><tbody><tr><td><p><strong>Categories</strong></p></td><td><p>Assigned to destination channel's category tree</p></td></tr><tr><td><p><strong>Channel Assignment</strong></p></td><td><p>Product becomes visible on new channel</p></td></tr><tr><td><p><strong>Widget Templates</strong></p></td><td><p>Product page widgets migrated</p></td></tr><tr><td><p><strong>Custom Template</strong></p></td><td><p>Template file association created</p></td></tr><tr><td><p><strong>Category Widgets</strong></p></td><td><p>Widgets for each category</p></td></tr><tr><td><p><strong>Locale Data</strong></p></td><td><p>All 10 locale categories for destination channel</p></td></tr></tbody></table><h3>Example: Retail to Wholesale Channel</h3><p><strong>Source Setup:</strong></p><pre><code>Store: "My Fashion Store" (store_abc123)
Product: "Premium Leather Jacket" (ID: 789)
Source Channel: Retail Storefront (Channel ID: 1)
  - Category: Apparel &gt; Jackets
  - Widget: Featured Product Banner
  - Locale: English (default), Spanish
</code></pre><p><strong>Migration Request:</strong></p><pre><code>Source Store: store_abc123
Destination Store: store_abc123  ← Same store!
Source Channel: 1 (Retail)
Destination Channel: 2 (Wholesale)
</code></pre><p><strong>What Happens:</strong> 1. Platform detects same store → Channel Migration mode 2. Categories assigned to Wholesale channel's category tree 3. Product assigned to Wholesale channel (now visible there) 4. Widget templates migrated to Wholesale channel 5. Locale data (English, Spanish) copied to Wholesale channel 6. <strong>Product base, options, variants, etc. UNCHANGED</strong></p><p><strong>Result:</strong></p><pre><code>Product "Premium Leather Jacket" (ID: 789):
- Still visible on Retail channel (unchanged)
- NOW ALSO visible on Wholesale channel
- Channel-specific widgets active on both
- Locale data available on both channels
</code></pre><h3>Step-by-Step Workflow</h3><pre><code>Step 1: Get Source Product
        ↓
Step 2: Get Custom Template Association (source channel)
        ↓
Step 3: Migrate Categories to Destination Channel's Tree
        ↓
Step 4: Update Product with Destination Category IDs
        ↓
Step 5: Assign Product to Destination Channel
        ↓
Step 6-7: Migrate Widget Templates
        ↓
Step 8: Migrate Category Widgets
        ↓
Step 9: Migrate Locale Data (10 categories)
        ↓
Step 10: Complete
</code></pre><h3>Why No Backup or Rollback?</h3><ul><li><p><strong>Same product</strong>: No new product created, just channel assignment added</p></li><li><p><strong>Nothing deleted</strong>: Original product data remains intact</p></li><li><p><strong>Non-destructive</strong>: Only adds visibility to new channel</p></li><li><p><strong>Reversible manually</strong>: Can remove channel assignment via BigCommerce admin</p></li></ul><h3>Common Use Cases</h3><table><thead><tr><th><p>Scenario</p></th><th><p>Source Channel</p></th><th><p>Destination Channel</p></th></tr></thead><tbody><tr><td><p>Launch B2B storefront</p></td><td><p>Retail (B2C)</p></td><td><p>Wholesale (B2B)</p></td></tr><tr><td><p>Regional expansion</p></td><td><p>US Storefront</p></td><td><p>UK Storefront</p></td></tr><tr><td><p>Brand separation</p></td><td><p>Main Brand</p></td><td><p>Sub-Brand</p></td></tr><tr><td><p>Outlet store</p></td><td><p>Full Price</p></td><td><p>Clearance</p></td></tr><tr><td><p>Partner portal</p></td><td><p>Public Store</p></td><td><p>Partner Store</p></td></tr></tbody></table><h3>Important Notes</h3><ul><li><p><strong>Product ID stays the same</strong> - No new product created</p></li><li><p><strong>Existing channel unaffected</strong> - Product remains visible on source channel</p></li><li><p><strong>Categories may differ</strong> - Each channel can have its own category tree</p></li><li><p><strong>Locale data per channel</strong> - Different translations per channel supported</p></li><li><p><strong>Faster than full migration</strong> - No component transfer needed</p></li><li><p><strong>No duplicate products</strong> - Same product, multiple channels</p></li></ul><h3>Timing Estimate</h3><p>Channel migration is significantly faster than full migration:</p><table><thead><tr><th><p>Product Type</p></th><th><p>Full Migration</p></th><th><p>Channel Migration</p></th></tr></thead><tbody><tr><td><p>Simple product</p></td><td><p>5-15 seconds</p></td><td><p>2-5 seconds</p></td></tr><tr><td><p>With locales</p></td><td><p>1-2 minutes</p></td><td><p>15-30 seconds</p></td></tr></tbody></table><hr /><h2>Summary: Choosing Your Migration Approach</h2><table><thead><tr><th><p>Scenario</p></th><th><p>Recommended Approach</p></th><th><p>Use Case</p></th></tr></thead><tbody><tr><td><p>One product to test</p></td><td><p>Single product migration</p></td><td><p>Use Case 1</p></td></tr><tr><td><p>New product line launch</p></td><td><p>Bulk migration with product list</p></td><td><p>Use Case 2</p></td></tr><tr><td><p>Complete store move</p></td><td><p>Full catalog migration</p></td><td><p>Use Case 3</p></td></tr><tr><td><p>Development testing</p></td><td><p>Selective product sample</p></td><td><p>Use Case 4</p></td></tr><tr><td><p>International expansion</p></td><td><p>Full migration with locale data</p></td><td><p>Use Case 5</p></td></tr><tr><td><p>Products with many variants</p></td><td><p>Complex options migration</p></td><td><p>Use Case 6</p></td></tr><tr><td><p>Wholesale products</p></td><td><p>Bulk pricing migration</p></td><td><p>Use Case 7</p></td></tr><tr><td><p>Customizable products</p></td><td><p>Complex rules migration</p></td><td><p>Use Case 9</p></td></tr><tr><td><p>Catalog refresh/sync</p></td><td><p>Update mode migration</p></td><td><p>Use Case 10</p></td></tr><tr><td><p>Different stores, different channels</p></td><td><p>Cross-store channel migration</p></td><td><p>Use Case 11</p></td></tr><tr><td><p>Same store, different channels</p></td><td><p>Same-store channel migration</p></td><td><p>Use Case 12</p></td></tr></tbody></table><hr />



---

Click here → [Understanding the StagingPro App pages](../../app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](../../stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }