# Getting Started with Rollback

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


