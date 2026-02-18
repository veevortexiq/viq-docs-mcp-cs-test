---
title: Connecting Data Sources & Configuring Your Workspace | Vortex IQ Help Centre
---

<!--
SEO METADATA
Primary Keyword: eCommerce platform integration setup
Secondary Keywords: connect Shopify to AI platform, BigCommerce analytics integration, Google Analytics AI connection, secure API integration eCommerce, eCommerce data source configuration
Search Intent: Informational / Transactional
Meta Title: Connect Your Store & Configure Vortex IQ | Help Centre
Meta Description: Connect Shopify, BigCommerce, Google Analytics, and more to Vortex IQ in minutes. Secure OAuth 2.0 integration with zero technical setup required.
Schema Target: HowTo / TechArticle
-->

# Connecting Data Sources & Configuring Your Workspace

**Vortex IQ becomes your AI operating system the moment you connect your first data source. This guide walks you through linking your eCommerce store, marketing platforms, and team settings — all secured with industry-standard OAuth 2.0 authorization and encrypted credential storage.**

---

## Why Connections Matter

Your AI agents are only as smart as the data they can access. When you connect Shopify, Google Analytics, and your ad platforms, the entire Vortex IQ OS gains a unified picture of your business — enabling the Nerve Centre to detect revenue anomalies, Ask Viq to answer data questions in plain English, and Vortex Mind to surface strategic opportunities you would otherwise miss.

Merchants using unified AI data platforms see an **80% surge in lead generation efficiency** and a **45% improvement in ROI** compared to those relying on fragmented point tools (Source: [AI Automation in Ecommerce: 2025 ROI Guide](https://aiautomation.cc/blog/ai-automation-in-ecommerce-2025-roi-guide)). Connecting your sources in the first session is the single highest-leverage action you can take.

---

## Supported Platforms & Connection Methods

| Connector Type | Supported Platforms | Connection Method | Permissions Required |
| :--- | :--- | :--- | :--- |
| **eCommerce Storefronts** | Shopify, BigCommerce, Adobe Commerce | OAuth 2.0 / API Token | Read-only store data |
| **Analytics** | Google Analytics (GA4) | OAuth 2.0 | Analytics read access |
| **Paid Media** | Google Ads, Facebook Ads | API Token | Campaign read access |
| **Communications** | Slack, Microsoft Teams, Email | Webhook | Incoming notifications |
| **Payments** | Stripe, PayPal | API Token | Transaction read access |

!!! note "Read-Only by Default"
    All platform connections use the minimum permissions necessary. Vortex IQ requests **read-only** access to your store and analytics data. Write-level access (for example, publishing a product update via an Agent) requires your explicit approval each time.

---

## Step-by-Step: Connecting Your Store

### Connecting Shopify

Shopify is connected via OAuth 2.0 — the same secure authorization flow used by Shopify's own apps. You do not need to copy API keys manually.

1. Go to **Settings → Connected Sources** and click **"Add Integration"**.
2. Select **Shopify** from the platform list.
3. Choose your environment: **Production** (live store) or **Sandbox** (development store).
4. Enter your **Shopify store domain** (e.g., `your-store`).
5. Click **"Connect to Shopify"** — you will be redirected to Shopify to authorise the connection.
6. Review the requested permissions and click **"Install"**.
7. You are redirected back to Vortex IQ. Your store appears as **Connected** within seconds.

<!-- screenshot: Shopify connection form showing the store domain field and environment toggle, with a "Connect to Shopify" button -->

!!! tip "What Permissions Does Vortex IQ Request?"
    Vortex IQ requests read access to products, orders, customers, and analytics. It does not request write permissions by default. Individual AI agents (such as the Product SEO Agent) may request additional scopes when activated — you will always be shown exactly what is requested before approving.

---

### Connecting BigCommerce

BigCommerce uses a secure API token connection. You will generate a read-only token in your BigCommerce control panel and paste it into Vortex IQ.

1. In your **BigCommerce Admin**, go to **Settings → Store-level API Accounts**.
2. Create a new API Account with **Read-Only** scope for: Products, Orders, Customers, and Analytics.
3. Copy your **Store Hash** and **Access Token**.
4. In Vortex IQ, go to **Settings → Connected Sources → Add Integration → BigCommerce**.
5. Enter your Store Hash, paste your Access Token, and name the integration.
6. Click **"Verify & Connect"** — Vortex IQ confirms the connection in real time.

<!-- screenshot: BigCommerce integration form showing the Store Hash and Access Token fields -->

!!! warning "Keep Your API Token Secure"
    Your BigCommerce API token is encrypted before it is stored in Vortex IQ and is never displayed in plain text after saving. If you suspect a token has been compromised, revoke it in your BigCommerce admin and reconnect with a new token.

---

### Connecting Google Analytics (GA4)

Google Analytics connects via OAuth 2.0 — no manual API keys required.

1. In Vortex IQ, go to **Settings → Connected Sources → Add Integration → Google Analytics**.
2. Click **"Connect with Google"** — you will be redirected to Google to sign in and authorise access.
3. Select the **Google Analytics property** you want to connect.
4. Approve read-only analytics access and return to Vortex IQ.
5. Your GA4 data begins syncing immediately.

<!-- screenshot: Google Analytics connection screen with the "Connect with Google" OAuth button and property selector -->

---

### Connecting Facebook Ads

Facebook Ads connects using a manually generated access token from your Facebook Business Manager.

1. In Facebook Business Manager, go to **Business Settings → System Users → Generate Token**.
2. Select **Ads Read** permission and copy the token.
3. In Vortex IQ, go to **Settings → Connected Sources → Add Integration → Facebook Ads**.
4. Paste your access token and enter your **Ad Account ID(s)** (comma-separated if multiple).
5. Click **"Verify & Connect"**.

<!-- screenshot: Facebook Ads integration form with the access token and account ID fields -->

---

## Managing Your Organisation Profile

Your organisation profile controls how Vortex IQ identifies your brand across reports, AI-generated content, and team notifications.

<!-- screenshot: Settings → Account Information page showing the Brand Details and Regional Settings cards side by side -->

<div class="account-grid">
  <div class="type-card">
    <strong>Brand Details</strong><br>
    Update your Company Name and Brand Name. All generated reports and AI communications will be correctly branded.
  </div>
  <div class="type-card">
    <strong>Regional Settings</strong><br>
    Set your Timezone and Currency. This is critical for accurate data sync and scheduled report delivery times.
  </div>
</div>

To update these settings, navigate to **Settings → Account Information**.

---

## Inviting Your Team

You can invite colleagues with pre-defined roles to control exactly what they can see and do within Vortex IQ.

!!! warning "Admin Access Required"
    Only users with **Administrator** privileges can invite new team members. If you do not see the "Invite User" button, contact your account owner to request access.

### How to Invite a Team Member

1. Go to **Settings → Team Members**.
2. Click the **"Invite User"** button.
3. Enter the team member's professional email address.
4. Select their **Role** (see table below).
5. Click **"Send Invitation"**.

The invited user will appear as **Pending** until they accept the invitation via email. Once accepted, they have immediate access at their assigned permission level.

### Team Roles at a Glance

| Role | View Dashboards | Manage Agents | Approve Agent Actions | Change Global Settings |
| :--- | :---: | :---: | :---: | :---: |
| **Administrator** | ✅ | ✅ | ✅ | ✅ |
| **Manager** | ✅ | ✅ | ✅ | — |
| **User (Viewer)** | ✅ | — | — | — |

### Revoking Access

If a team member leaves or no longer requires access:

1. Go to **Settings → Team Members**.
2. Find the user and click the **Remove** icon next to their name.
3. Confirm the removal.

Access is revoked immediately — the user can no longer log in or view any workspace data.

---

## AI Safety & Guardrails: How Connected Data is Protected

Every integration you create in Vortex IQ operates within a strict security framework:

**Encrypted Storage:** Your platform credentials (API tokens, OAuth refresh tokens) are encrypted before they are saved. They are never displayed in plain text after the initial connection.

**Minimal Permissions:** Vortex IQ requests only the access scopes it needs. All core connections use read-only permissions. When an AI agent needs write access to execute a specific task (such as updating a product price), you will be prompted for approval — the action does not happen automatically.

**Audit Trail:** Every connection event (added, updated, removed) is logged in your [Audit Trail](governance/audit-trails.md) with a timestamp and the user who made the change. This gives you full accountability over your workspace configuration.

**Session Security:** All authentication sessions are managed by Firebase/Google Cloud Identity, one of the most widely audited identity platforms in the world. Session tokens expire automatically and are re-validated on each login.

!!! note "GDPR & CCPA Compliance"
    Vortex IQ processes business performance insights — it does not store your customers' Personally Identifiable Information (PII). All data processing is performed in compliance with GDPR and CCPA requirements.

---

## Troubleshooting Connected Sources

**"Connection failed" when linking Shopify:**
- Confirm your store domain does not include `https://` or `.myshopify.com` — enter only the store name (e.g., `my-store`).
- Ensure you are logged into the correct Shopify account before authorising.
- Check that your Shopify plan supports third-party app integrations.

**"Invalid credentials" for BigCommerce:**
- Re-generate your API token in BigCommerce and ensure it has the required read scopes.
- Copy the full Access Token without any leading or trailing spaces.

**Google Analytics is connected but no data appears:**
- Confirm you selected the correct GA4 property during the OAuth flow.
- GA4 data can take up to 24 hours to appear after the first connection.

**Data stops refreshing:**
- Navigate to **Settings → Connected Sources** and check the status indicator next to your integration.
- Click **"Refresh Connection"** to force a new data pull.
- If the status shows "Error", disconnect and reconnect the integration to re-authorise.

---

## Frequently Asked Questions

**Q: Can I connect more than one store of the same type?**
Yes. You can connect multiple Shopify or BigCommerce stores as separate integrations. Each integration is named independently and appears as its own data source in the Nerve Centre and Command Centre.

**Q: Will connecting my store affect its performance or speed?**
No. Vortex IQ uses read-only API calls to fetch data at scheduled intervals. There is no impact on your store's performance or checkout experience.

**Q: How do I disconnect a platform?**
Go to **Settings → Connected Sources**, find the integration, and click **"Disconnect"**. All data pulled from that source will be retained in Vortex IQ for 30 days but will stop refreshing immediately.

**Q: Does Vortex IQ support Adobe Commerce (Magento)?**
Yes. Adobe Commerce is a supported storefront connector. Contact our support team for setup assistance, as Adobe Commerce connections may require additional configuration on your store.

**Q: What happens if my OAuth token expires?**
OAuth tokens are automatically refreshed in the background when possible. If a token expires and cannot be automatically renewed (for example, if you revoked access from Shopify's side), your integration will show a "Reconnect Required" status. Simply click the reconnect button to re-authorise with one click.

---

[← Back to Help Centre](index.md){ .md-button }
