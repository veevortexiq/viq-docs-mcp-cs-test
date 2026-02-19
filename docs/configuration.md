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

**Vortex IQ becomes your AI Operating System the moment you connect your first data source. This guide walks you through linking your eCommerce store, marketing platforms, and team settings — all secured with industry-standard authorisation and encrypted credential storage. No technical knowledge required.**

---

## Why Your Connections Are the Foundation of Everything

Your AI agents are only as powerful as the data they can see. When you connect Shopify, Google Analytics, and your advertising platforms, the entire Vortex IQ OS gains a real-time, unified picture of your business — enabling the Nerve Centre to detect revenue anomalies before they cost you sales, Ask Viq to answer performance questions in plain English, and Vortex Mind to surface strategic opportunities you would otherwise miss.

The impact of this unification is measurable and immediate. Merchants using unified AI data platforms report an **80% improvement in lead generation efficiency** and a **45% improvement in marketing ROI** compared to those managing fragmented point tools separately (Source: [AI Automation in eCommerce: 2025 ROI Guide](https://aiautomation.cc/blog/ai-automation-in-ecommerce-2025-roi-guide)). Beyond marketing, **72% of eCommerce businesses that adopt unified AI platforms report measurable cost reductions within the first year** (Source: [EComposer — AI in eCommerce Statistics 2025](https://ecomposer.io/blogs/ecommerce/ai-in-ecommerce-statistics)). And companies that excel at data-driven personalisation through unified AI platforms generate **40% more revenue** than industry averages (Source: McKinsey & Company).

Connecting your sources in the first session is the single highest-leverage action you can take on the platform.

---

## Supported Platforms & Connection Methods

| Connector Type | Supported Platforms | Connection Method | Access Level |
| :--- | :--- | :--- | :--- |
| **eCommerce Storefronts** | Shopify, BigCommerce, Adobe Commerce | OAuth 2.0 / API Token | Read-only store data |
| **Analytics** | Google Analytics (GA4) | OAuth 2.0 | Analytics read access |
| **Paid Media** | Google Ads, Facebook Ads | API Token | Campaign read access |
| **Communications** | Slack, Microsoft Teams, Email | Secure Webhook | Inbound notifications only |
| **Payments** | Stripe, PayPal | API Token | Transaction read access |
| **Monitoring** | Datadog, New Relic, Cybersource | API Token | Metrics read access |
| **Marketing Platforms** | Dotdigital | API Token | Campaign read access |

!!! note "Read-Only by Default"
    All platform connections use the minimum permissions necessary. Vortex IQ requests **read-only** access to your store and analytics data as a default. Write-level access — for example, allowing an AI agent to publish a product update — requires your explicit approval each time the action is proposed. No agent can make changes to your live store without your sign-off.

To view and manage all your connected sources, navigate to **Settings → Connected Sources**.

![Connected Sources settings page showing all platform integration cards grouped by Ecommerce, Analytics, Marketing, Finance, Communications, and Monitoring categories](<../aios screenshots/settings connected sources.png>)

*The Connected Sources settings page, showing the full grid of available integrations grouped by category — Ecommerce, Analytics, Marketing, Finance, Communications, and Monitoring — with status indicators and connection controls for each.*

---

## Step-by-Step: Connecting Your Store

### Connecting Shopify

Shopify connects via OAuth 2.0 — the same secure authorisation flow used by Shopify's own partner apps. You do not need to copy or paste any API keys manually.

1. Go to **Settings → Connected Sources** and click **"Add Integration"**.
2. Select **Shopify** from the platform list.
3. Choose your environment: **Production** (live store) or **Sandbox** (development/staging store).
4. Enter your **Shopify store name** (the subdomain only — for example, enter `my-store`, not `my-store.myshopify.com`).
5. Click **"Connect to Shopify"** — you will be redirected to Shopify to review and authorise the connection.
6. Review the requested permissions and click **"Install"**.
7. You are returned to Vortex IQ. Your store appears as **Connected** within seconds and data synchronisation begins immediately.

<!-- screenshot: Shopify connection form showing the store name field, environment toggle (Production/Sandbox), and the Connect to Shopify button -->

!!! tip "What Permissions Does Vortex IQ Request?"
    Vortex IQ requests read access to products, orders, customers, and analytics. No write permissions are requested by default. Individual AI agents — such as the Product SEO Agent — may request additional scopes when you activate them. You will always be shown exactly what access is being requested before you approve.

---

### Connecting BigCommerce

BigCommerce uses a secure API token connection. You will generate a read-only token in your BigCommerce control panel and paste it directly into Vortex IQ.

1. In your **BigCommerce Admin**, navigate to **Settings → Store-level API Accounts**.
2. Create a new API Account with **Read-Only** permissions for: Products, Orders, Customers, and Analytics.
3. Copy your **Store Hash** and **API Access Token** from the generated credentials.
4. In Vortex IQ, go to **Settings → Connected Sources → Add Integration → BigCommerce**.
5. Enter your Store Hash, paste your Access Token, and give this integration a name.
6. Click **"Verify & Connect"** — Vortex IQ validates the connection in real time and confirms success.

<!-- screenshot: BigCommerce integration form with the Store Hash and Access Token input fields, and the Verify & Connect button -->

!!! warning "Protect Your API Token"
    Your BigCommerce API token is encrypted before it is stored and is never displayed in plain text after saving. If you suspect a token has been compromised, revoke it immediately in your BigCommerce admin panel and reconnect with a fresh token from Vortex IQ.

---

### Connecting Google Analytics (GA4)

Google Analytics connects via OAuth 2.0 — no manual API credentials are required.

1. In Vortex IQ, go to **Settings → Connected Sources → Add Integration → Google Analytics**.
2. Click **"Connect with Google"** — you will be redirected to Google to sign in and authorise read access.
3. Select the **GA4 property** you want to connect from your Google account.
4. Approve read-only analytics access and you are returned to Vortex IQ automatically.
5. Your GA4 data begins synchronising immediately. Initial population of historical data can take up to 24 hours.

<!-- screenshot: Google Analytics connection screen with the Connect with Google OAuth button and a GA4 property selector dropdown -->

---

### Connecting Facebook Ads

Facebook Ads connects using a manually generated system access token from your Facebook Business Manager.

1. In Facebook Business Manager, navigate to **Business Settings → System Users → Generate Token**.
2. Select **Ads Read** as the required permission scope and copy the generated token.
3. In Vortex IQ, go to **Settings → Connected Sources → Add Integration → Facebook Ads**.
4. Paste your system access token and enter your **Ad Account ID(s)** (comma-separated if you manage multiple accounts).
5. Click **"Verify & Connect"**.

<!-- screenshot: Facebook Ads integration form with the Access Token and Ad Account IDs fields, and the Verify & Connect button -->

---

### Connecting Adobe Commerce (Magento)

Adobe Commerce supports API token-based connections. Given the variety of hosting configurations, Adobe Commerce setup may require an additional step to configure your store's REST access.

1. In Vortex IQ, go to **Settings → Connected Sources → Add Integration → Adobe Commerce**.
2. Follow the on-screen instructions to generate a read-only integration token in your Adobe Commerce admin panel.
3. Enter your **store base URL** and paste the generated **access token**.
4. Click **"Verify & Connect"**.

!!! note "Need Help with Adobe Commerce?"
    Adobe Commerce configurations can vary depending on your hosting environment. If you need assistance, contact the Vortex IQ support team — we will guide you through the connection process at no additional cost.

---

## Managing Your Organisation Profile

Your organisation profile determines how Vortex IQ presents your brand across AI-generated reports, scheduled alerts, and team communications. Keeping this accurate ensures every output feels native to your business.

![Account Details settings page showing organisation name, contact information form, and regional settings](<../aios screenshots/settings-account information  account details .png>)

*The Account Information → Account Details page, where you can update your organisation name, website, contact details (phone, address, city, country), and primary contact information.*

To update your organisation profile, navigate to **Settings → Account Information**.

| Setting | What It Controls |
| :--- | :--- |
| **Organisation Name** | Used in all reports, AI communications, and exported files |
| **Contact Details** | Phone, address, city, and country for account records |
| **Primary Contact** | Name and email of the account owner for billing and alerts |

---

## Inviting Your Team

Vortex IQ is built for collaboration. You can invite colleagues with specific roles to ensure every team member operates within appropriate boundaries — protecting both your data and your AI configuration.

!!! warning "Administrator Access Required"
    Only users with **Administrator** privileges can invite new team members. If you do not see the **"Add User"** button, contact your workspace Administrator to request access.

### How to Invite a Team Member

![Users list showing name, email, role, status, date added, and actions columns with an Add User button](<../aios screenshots/settings-account information  users.png>)

*The Users list under Settings → Account Information, showing all team members with their assigned roles, status indicators (Active, Pending, Invited Expired), and action controls. Agency stats showing total users and partnership tier are displayed at the top.*

1. Go to **Settings → Account Information → Users**.
2. Click the **"Add User"** button.
3. Enter the team member's professional email address.
4. Select their **Role** from the dropdown (see the roles table below).
5. Click **"Send Invitation"**.

![Add New User modal showing email field, role selector, and Send Invitation button](<../aios screenshots/settings-account information  users add new user.png>)

*The Add New User form, where you enter the team member's email address, assign their access role, and send the invitation.*

The invited team member will appear as **Pending** until they accept the invitation via email. Once accepted, they have immediate access at their assigned permission level. No further setup is required.

### Team Role Permissions

| Capability | Administrator | Manager | User (Viewer) |
| :--- | :---: | :---: | :---: |
| View all dashboards and reports | ✅ | ✅ | ✅ |
| Activate and deactivate agents | ✅ | ✅ | — |
| Approve AI-proposed actions | ✅ | ✅ | — |
| Invite and remove team members | ✅ | — | — |
| Modify global security settings | ✅ | — | — |
| Add or remove data source connections | ✅ | — | — |
| Configure AI Guardrails | ✅ | — | — |

### Revoking Team Access

If a team member leaves your organisation or no longer requires access:

1. Go to **Settings → Account Information → Users**.
2. Find the user and click the action menu next to their name.
3. Select **Remove** and confirm the action.

Access is revoked immediately — the user cannot sign in or view any workspace data from that moment forward.

---

## Partner Accounts: Managing Multiple Client Workspaces

If you are on a Partner Account — for agencies and system integrators — you have access to a **multi-merchant workspace switcher** that lets you manage all your client workspaces from one login.

![Partner account multi-merchant workspace switcher dropdown showing a list of client workspaces](<../aios screenshots/Web acency - multi merchant dropdown.png>)

*The multi-merchant workspace switcher available on Partner Accounts, showing a dropdown list of client workspaces with one-click switching — each workspace is fully isolated with its own data, agents, and settings.*

Each client workspace is completely isolated. Their store data, agents, reports, and settings are never visible to other clients, even if they share the same Partner Account. Switching workspaces takes one click from the workspace dropdown in the top navigation.

---

## AI Safety & Guardrails: How Your Connected Data Is Protected

Every integration you create in Vortex IQ operates within a layered security framework designed to protect your business data and your customers' privacy simultaneously.

**Encrypted Credential Storage:**
Your platform access tokens and OAuth refresh tokens are encrypted before being saved. They are never displayed in plain text after the initial connection, and they are never shared with third parties.

**Minimal Permission Scopes:**
Vortex IQ requests only the access scopes it requires for each specific operation. All core connections use read-only access. When an AI agent needs write-level access to execute a specific task — such as updating a product description — you will be prompted for explicit approval. The action does not proceed automatically.

**Human-in-the-Loop Approval:**
Every proposed action that touches your live store data requires manual review and approval from a user with Manager or Administrator privileges. This "Human in the Loop" design means the AI works for you — it never acts unilaterally on high-impact operations.

**Audit Trail Logging:**
Every connection event — added, updated, disconnected — is logged in your [Audit Trail](governance/audit-trails.md) with a full timestamp and the identity of the user who made the change. This gives you complete accountability over your workspace configuration at all times.

**Session Security:**
All authentication sessions are managed via Google Cloud Identity — one of the most widely audited enterprise identity platforms available. Sessions expire automatically and are re-validated on each login to prevent unauthorised access.

!!! note "GDPR & CCPA Compliance"
    Vortex IQ processes business performance signals — it does not store your customers' Personally Identifiable Information (PII). All data processing is performed in compliance with GDPR and CCPA requirements.

---

## Troubleshooting Connected Sources

**"Connection failed" when linking Shopify:**
- Confirm your store name does not include `https://` or `.myshopify.com` — enter only the subdomain (e.g., `my-store`).
- Ensure you are logged into the correct Shopify account before authorising the connection.
- Verify that your Shopify plan supports third-party app integrations.

**"Invalid credentials" for BigCommerce:**
- Re-generate your API token in BigCommerce and ensure it has the required read-only scopes for Products, Orders, Customers, and Analytics.
- Copy the full Access Token carefully — avoid including any leading or trailing spaces.

**Google Analytics connected but no data appears:**
- Confirm you selected the correct GA4 property during the authorisation flow.
- GA4 data can take up to 24 hours to appear after the initial connection.

**Data stops refreshing for any platform:**
- Navigate to **Settings → Connected Sources** and check the status indicator next to the affected integration.
- Click **"Refresh Connection"** to force a new data synchronisation.
- If the status shows **"Error"**, disconnect the integration and reconnect to re-authorise with fresh credentials.

---

## Frequently Asked Questions

**Q: Can I connect more than one store of the same platform type?**
Yes. You can connect multiple Shopify or BigCommerce stores as separate integrations. Each integration is named independently and appears as its own data source in the Nerve Centre and Command Centre, with no cross-contamination between accounts.

**Q: Will connecting my store affect its loading speed or checkout performance?**
No. Vortex IQ uses read-only, scheduled data pulls to retrieve store information. These calls are rate-limited and staggered to ensure there is no impact on your store's real-time performance or customer checkout experience.

**Q: How do I disconnect a platform?**
Navigate to **Settings → Connected Sources**, locate the integration, and click **"Disconnect"**. All data previously pulled from that source is retained in Vortex IQ for 30 days but stops refreshing immediately. After 30 days, the disconnected source's data is removed from your dashboards.

**Q: Does Vortex IQ support Adobe Commerce (Magento)?**
Yes. Adobe Commerce is a fully supported storefront connector. The setup process requires generating a read-only integration token in your Adobe Commerce admin. Contact the Vortex IQ support team if you need assistance during configuration.

**Q: What happens if my OAuth token expires?**
OAuth access tokens are refreshed automatically in the background whenever possible. If a token expires and cannot be silently renewed — for example, if you revoked Vortex IQ's access from Shopify's app settings — your integration will display a **"Reconnect Required"** status. Simply click the reconnect button to re-authorise with a single click.

---

[← Back to Help Centre](index.md){ .md-button }
