---
title: Real-Time Detection & Alerts | Vortex IQ Help Centre
---

# Nerve Centre

## Overview
The **Nerve Centre** is the central observability hub within Vortex IQ. It aggregates data from external **Connectors** (Operations, Finance, and Monitoring) to provide a real-time health check of your business ecosystem.

Instead of logging into BigCommerce, Stripe, and Google Analytics separately, the Nerve Centre unifies these **Signals** into a single dashboard for tracking KPIs, historical trends, and setting automated alerts.

---

## Navigation Structure
 The Nerve Centre allows users to toggle between different data sources via the left-hand **Signals Sidebar**.

### Supported Connectors
| Category | Integrations | Purpose |
| :--- | :--- | :--- |
| **Operations** | BigCommerce, Shopify, Adobe Commerce, Marketing | Track orders, inventory flow, and marketing performance. |
| **Finance** | Stripe, Payment Gateways | Monitor revenue realization and refund rates. |
| **Monitoring** | Website, Analytics | Track Core Web Vitals, uptime, and traffic sources. |

> **Tip:** You can pin your most frequently used connectors to the "Pinned / Favorites" section for quick access.

---

## Dashboard Components
*Example View: BigCommerce Connector*

When a connector is active (e.g., BigCommerce), the dashboard presents data in two primary layers:

### KPI Snapshot Cards
The top row displays high-level, aggregate metrics for the selected period (default: 12 months).
* **Total No of Orders:** Volume of successful transactions.
* **Total Sales Amount:** Gross revenue generated.
* **Discount Metrics:** Tracking "No of Orders with Discount" and "Amount of Discount Used" to monitor margin health.

### Metrics & Historical Analysis Table
A detailed breakdown of specific metrics comparing performance across three time horizons to identify trends instantly.

| Metric | 7 Days (Short Term) | 30 Days (Mid Term) | 12 Months (Long Term) |
| :--- | :--- | :--- | :--- |
| **Trend Analysis** | Shows immediate volatility or spikes. | Establishes the current monthly baseline. | Provides macro-view for year-over-year growth. |
| **Data Points** | Average (Avg) & Total. | Average (Avg) & Total. | Average (Avg) & Total. |

---

## Alerting & Monitors
*Transforming static data into active monitoring.*

Users can configure custom thresholds for any metric listed in the table to prevent revenue loss or operational downtime.

### How to Set an Alert
1.  Locate the specific metric in the table (e.g., "Total Sales Amount").
2.  Click the **`+ Set Alert`** button on the far right column.
3.  **Define Threshold:**
    * *Condition:* (e.g., "If Sales drop below $X" or "If Discount usage exceeds Y%").
    * *Notification:* Choose channel (Email, Slack, Vortex Mind).
4.  **Status:** The dashboard will update the status to "Active" once configured.

> **Use Case:** Set an alert for **"No of Orders with Discount"**. If this spikes unexpectedly, it may indicate a coupon code leak or a pricing error.

---

## Vortex Integrations
The Nerve Centre does not operate in isolation. It feeds data into other Vortex IQ modules:
* **Vortex Mind:** AI analysis of the trends spotted in the Nerve Centre.
* **Vortex Memory:** Long-term storage of historical metric performance.
* **Ask Viq:** You can query this data via chat (e.g., *"Viq, why did BigCommerce sales drop last week?"*).

---

## Troubleshooting
**Data not refreshing?**
* Check the **Status** indicator in the top right corner (Should be green/Active).
* Click the **`↻ Refresh`** button to force a data pull from the connector API.



---

Glimpse of the app page

![nerve-centre.png](img/viq-docs/nerve-centre.png)


---

[← Back to Help Centre](index.md){ .md-button }