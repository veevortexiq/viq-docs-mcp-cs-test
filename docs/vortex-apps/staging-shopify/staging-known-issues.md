# Data Migration Known Issues

Vortex Staging cannot migrate every part of Shopify. Some limitations are known and may be addressed in future releases, while others are constrained by Shopify’s platform and APIs.

## **Gift Cards migration**

The following limitations apply when migrating Gift Cards on Shopify:

### **1) Gift Card redemption is not supported in Production**

Shopify encrypts gift card codes and only the last four digits are visible after creation. The full code cannot be retrieved or recreated through the Shopify API. As a result, gift cards cannot be redeemed after migration to a production store.

Impact: Gift cards may be migrated for staging or development environments where redemption is not required. Gift cards should not be migrated to production environments where customers are expected to use them. Gift card IDs may remain linked to orders and customers, but the code required for redemption is unavailable.

### **2) Gift Card lifecycle restrictions**

* Gift cards can be deactivated but cannot be deleted.
* Once deactivated, a gift card number cannot be reused.
* If a gift card is redeemed in the source store after migration, its status cannot be updated through Shopify.

### **3) Gift Card value limits**

* Gift cards created in the Shopify admin have a maximum value of $2,000 USD (or equivalent). This may be increased up to $10,000 USD for eligible merchants by contacting Shopify Support.
* Gift card products have a fixed maximum denomination of $10,000 USD.

&nbsp;

### **4) Customization and access constraints**

* Gift cards are treated as currency, and only the customer or recipient can access the full redemption code.
* Gift card values and redemption codes cannot be customized via themes.
* Gift cards are included in Shopify’s liabilities reporting.

### **5) Regulatory considerations**

Gift card regulations vary by region. Merchants are responsible for ensuring compliance with local laws, including rules on expiration, taxation, and consumer protection.

## **Image and Video Files**

The Files section in Shopify stores both image and video assets. Vortex Staging can migrate image files; however, video files cannot be migrated due to limitations in the Shopify API.

---

Click here → [Understanding the Staging App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [Staging Onboarding](staging-onboarding/index.md)

---

[← Back to Help Centre](../../index.md){ .md-button }