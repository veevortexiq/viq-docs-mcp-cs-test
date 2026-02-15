---
title: Custom Agent Development | Vortex IQ Help Centre
---

# Agent Hub (Builder)

## Overview: The Agent Hub
The **Agent Hub** is the central repository for your digital workforce. It displays all active, available agents in a grid view, categorized by function (e.g., *Analytics*, *E-Commerce Ops*, *Media Management*).

From this screen, users can:
* **Access Agents:** Launch existing agents like "Page Speed & Web Vitals" or "Product SEO" to perform tasks immediately.
* **Build New Agents:** Click the purple **"Agent Builder"** button in the top-right corner to enter the creation studio.

---

## The Visual Agent Builder
*Transforming APIs into autonomous workers.*

The Agent Builder Studio guides you through a strict 4-step pipeline to create safe, reliable agents:

1.  **Select Connectors**
2.  **Workflow Plan**
3.  **Review & Test**
4.  **Deploy Agent**

### API-to-Agent Mapping (Connecting Data)
The core of any agent is its ability to talk to external tools. You can map APIs using two methods:

**A. Select Existing Connector**
Choose from pre-integrated platforms like **BigCommerce** or **Shopify**. These come with pre-mapped "Skills" (e.g., *Sync Inventory*, *Update Product Metafields*).

**B. Build Custom Connector (API Mapping)**
If the integration doesn't exist, click **"+ Add Custom Connector"** to launch the interactive builder.
* **Conversational Mapping:** A chat assistant asks, *"Please describe what API or data source you need"*. You can simply type, *"Connect to the Stripe API to read transaction history."*
* **Postman Import:** For precise control, upload a **Postman Collection (.json)**. The builder parses this file to automatically map every API endpoint to a callable agent function.

---

## Version Control & Logic Management
*Iterating without breaking production.*

To meet enterprise standards, the Agent Hub enforces versioning on all custom agents.

* **Immutable Snapshots:** Every time you reach the **"Deploy Agent"** step, the system saves the current logic, API mappings, and prompt instructions as a distinct version (e.g., `v1.0`).
* **Rollback Capability:** If a new version (e.g., `v1.2` of "Product SEO Agent") introduces errors or "hallucinations," you can revert the agent to `v1.1` instantly. This restores the previous API mappings and logic flow, ensuring business continuity.

---

## Agent Categories & Use Cases
Once built, agents appear in the Hub under specific categories based on their capabilities:

| Category | Example Agents | Function |
| :--- | :--- | :--- |
| **Analytics** | `Google Analytics Insights` | Monitors traffic trends and alerts on anomalies. |
| **Operations** | `StagingPro - BigCommerce` | Manages environment migrations and safe rollbacks. |
| **Marketing** | `Campaign Manager - DotDigital` | Automates email creation and campaign tracking. |
| **Utils** | `Image Optimisation` | Compress and resize assets automatically via API. |

---

## Deployment
* **Public vs. Private:** Agents can be deployed for personal use or shared across the organization.
* **Status Indicators:** Look for the **"Connected"** (Green) tag on connectors to ensure the underlying API link is healthy before deploying.


---

[← Back to Help Centre](../index.md){ .md-button }