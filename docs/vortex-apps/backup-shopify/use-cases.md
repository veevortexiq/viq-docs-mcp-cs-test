# Rollback Use Cases & Examples

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

---
