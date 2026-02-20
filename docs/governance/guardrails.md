---
title: AI Guardrails — Responsible AI Controls for Your eCommerce Business | Vortex IQ Help Centre
---

<!--
SEO METADATA
Primary Keyword: AI guardrails ecommerce
Secondary Keywords: AI safety controls ecommerce, human in the loop AI approval, brand voice AI configuration, responsible AI platform ecommerce, AI governance ecommerce
Search Intent: Informational / Navigational
Meta Title: AI Guardrails: Safe, Brand-Aligned AI for eCommerce
Meta Description: Vortex IQ's AI Guardrails keep every agent action under your control — with Human-in-the-Loop approval, brand voice configuration, and subscription-gated access across your entire digital workforce.
Schema Target: TechArticle / SoftwareApplication
-->

# AI Guardrails

**AI Guardrails are Vortex IQ's built-in safety and governance framework — the controls that ensure every AI agent in your workspace operates within the boundaries your business defines. Guardrails govern how AI communicates on your behalf, what actions it can propose, and what must be approved by a human before anything changes on your live store.**

---

## Why AI Governance Is Non-Negotiable

For eCommerce operators, deploying AI without governance controls is not a risk management choice — it is a liability. The question is not whether your AI platform has guardrails, but whether those guardrails are robust enough to protect you from the consequences of unchecked automation.

The data makes the stakes clear. According to IBM's 2025 Cost of a Data Breach Report, **97% of organisations that experienced an AI-related breach had no proper AI access controls in place** at the time of the incident (Source: [IBM — 83% of Organisations Reported Insider Threats 2024](https://www.ibm.com/think/insights/83-percent-organizations-reported-insider-threats-2024)). And as industry research has forecast, **by 2026, 90% of enterprise generative AI applications will require formal Human-in-the-Loop processes** — a recognition that autonomous AI without human checkpoints is no longer acceptable in a regulated business environment (Source: Gartner Enterprise AI Research, via [OpsVeda — Agentic AI You Can Trust](https://blogs.opsveda.com/agentic-ai-you-can-trust-guardrails-human-in-the-loop-and-the-road-to-self-optimizing-operations)).

The commercial case is equally compelling. Well-configured Human-in-the-Loop systems have been shown to **reduce AI errors by 63–78%**, while still delivering significant efficiency gains over fully manual processes (Source: Tredence Case Studies 2024, via [BRICS Economic Research — HITL for Generative AI](https://brics-econ.org/human-in-the-loop-operations-for-generative-ai-review-approval-and-exceptions)). And the AI governance industry itself is growing at a **CAGR of 45.3% from 2024 to 2029** — reflecting a market-wide recognition that AI capability without governance controls is commercially and legally untenable (Source: [CloudEagle — Best AI Governance Platforms 2026](https://www.cloudeagle.ai/blogs/10-best-ai-governance-platforms-in-2026)).

Vortex IQ's AI Guardrails framework was built to make responsible AI deployment the default — not an optional add-on.

---

## The Four Pillars of Vortex IQ's AI Guardrails

<div class="account-grid">
  <div class="type-card">
    <strong>Brand DNA</strong><br>
    Configure how Ask Viq and your activated agents communicate on your brand's behalf — setting the tone, language style, and brand voice that every AI response reflects.
  </div>
  <div class="type-card">
    <strong>Human-in-the-Loop Approval</strong><br>
    Every action that would change something on your live store — publishing content, adjusting a campaign, updating a product — requires explicit human approval before it executes.
  </div>
</div>

<div class="account-grid">
  <div class="type-card">
    <strong>Subscription-Gated Access</strong><br>
    Capabilities are matched to your subscription plan in real time. Your team can only access the agents, integrations, and features that your organisation has explicitly authorised.
  </div>
  <div class="type-card">
    <strong>Read-Only by Default</strong><br>
    All platform connections use read-only access as the default. Write-level actions — publishing, updating, modifying — only proceed after explicit approval from an authorised user.
  </div>
</div>

---

## Step-by-Step: Configuring Your AI Guardrails

### Step 1: Open the Guardrails Settings

Navigate to **Settings** in the left-hand navigation sidebar, then select the **Brand DNA & AI Guardrails** tab. This section controls the two Brand DNA configurations available to your workspace: **Brand Persona** and **Brand Voice Profile**.

### Step 2: Configure Your Brand Persona

The **Brand Persona** defines how Ask Viq presents itself and communicates within your workspace. This configuration shapes the character of every AI response your team receives — from the conversational tone of a product recommendation to the structure of a Vortex Mind report.

![Vortex IQ Settings — Brand DNA & AI Guardrails tab showing the Brand Persona configuration form for Ask Viq's communication style](<../../aios screenshots/settings brand dna and ai guardrails for brand persona that ask viq uses.png>)

*The Brand Persona configuration in the Brand DNA & AI Guardrails settings tab — define how Ask Viq presents itself and communicates on behalf of your brand.*

Configure the persona to reflect your brand's identity:

- **Persona Name** — the identity Ask Viq uses when communicating in your workspace.
- **Communication Style** — the tone and formality level Ask Viq adopts (e.g., professional, conversational, technical).
- **Focus Areas** — the business domains Ask Viq prioritises when forming responses.
- **Brand Guardrails** — specific constraints on what Ask Viq should or should not reference, recommend, or communicate.

Changes to the Brand Persona take effect immediately across all new conversations and agent activations in your workspace. Existing conversation threads retain the persona in use at the time they were started.

### Step 3: Define Your Brand Voice Profile

The **Brand Voice Profile** extends the persona with specific language guidelines — the vocabulary, phrasing preferences, and communication rules that make every AI-generated output consistent with your brand's written voice.

![Vortex IQ Settings — Brand Voice Profile configuration showing language guidelines, tone preferences, and brand-specific vocabulary fields](<../../aios screenshots/settings brand dna and ai guardrails for brand voice profile ui.png>)

*The Brand Voice Profile UI: specific language guidelines, tone preferences, and brand vocabulary settings that ensure every AI-generated output aligns with your written brand voice.*

Use the Brand Voice Profile to define:

- **Preferred terminology** — the words and phrases your brand uses consistently.
- **Tone guidelines** — how formal, warm, technical, or direct your communications should be.
- **Do-not-use vocabulary** — words, phrases, or references that should never appear in AI-generated content for your brand.

!!! tip "Brand DNA Applies Across the Platform"
    The Brand Persona and Brand Voice Profile you configure here apply to all AI responses across Vortex IQ — Ask Viq conversations, Vortex Mind reports, and agent-generated content. Configuring these settings once ensures consistent brand alignment across every interaction.

### Step 4: Understand Human-in-the-Loop Approval

Human-in-the-Loop approval is built into every agent action that would change your live store. This cannot be disabled — it is the core safety mechanism of the Vortex IQ platform.

When an agent (whether activated through Ask Viq or the Agent Hub) proposes a change to your store, campaign, or content, an **approval card** appears in the workspace before anything executes. The approval card shows:

1. **What the agent intends to do** — the specific action proposed (e.g., "Rewrite this product description", "Pause this ad campaign").
2. **What data informed the recommendation** — the metrics, trends, or analysis that led to the recommendation.
3. **The expected outcome** — what the agent predicts will happen if the action is approved.

You approve or decline with a single click. If you decline, the agent does not execute the action and logs the declined recommendation to your Audit Trail. If you approve, the action proceeds and is logged as an approved action under your identity.

!!! note "Who Can Approve Agent Actions"
    Only users with **Manager** or **Administrator** roles can approve agent actions. Users with the **Viewer** role can see approval cards and review their details, but cannot approve or decline them.

### Step 5: Review Subscription-Gated Access

Your subscription plan determines which agents, integrations, and features are available to your workspace. These limits are enforced in real time — your team cannot activate capabilities outside your plan, regardless of their role.

To review your current plan's capabilities and limits, navigate to **Settings → Subscription**. For agents and features that require a higher plan, an upgrade indicator appears in the Agent Hub catalogue and within the platform wherever that capability would appear.

---

## AI Safety & Guardrails

Vortex IQ's Guardrails framework operates as a platform-wide governance layer, not a feature that can be bypassed or selectively applied.

**Workspace Isolation:**
Every user's data is contained within their workspace. No agent can access data from a platform or store that has not been explicitly connected through **Settings → Connected Sources** and authorised by an Administrator.

**Immutable Approval Requirement:**
Human-in-the-Loop approval is a platform-level control. It cannot be disabled by any user role, including Administrator. Every write-level agent action requires human approval — this is by design, not configuration.

**Role Enforcement:**
Agent activation, approval authority, and configuration access are enforced by your workspace's role assignments. Access permissions reflect the role assigned to each team member and cannot be overridden at the session level.

**Audit Trail Integration:**
Every Guardrails configuration change — updates to the Brand Persona, Brand Voice Profile, or connected source permissions — is logged automatically in your [Audit Trail](audit-trails.md), with the identity of the user who made the change and the timestamp of the change.

---

## AI Guardrails Reference at a Glance

| Guardrail | What It Controls | Who Configures It |
| :--- | :--- | :--- |
| **Brand Persona** | How Ask Viq communicates — tone, style, identity | Administrator |
| **Brand Voice Profile** | Language guidelines, vocabulary, do-not-use terms | Administrator |
| **Human-in-the-Loop Approval** | Requires human sign-off before any live store action | Platform-enforced (cannot be disabled) |
| **Read-Only Default** | All integrations connected in read-only mode by default | Platform-enforced |
| **Subscription Gating** | Limits agent access, integrations, and features to plan allowances | Managed through Settings → Subscription |
| **Workspace Isolation** | Prevents any data crossing workspace boundaries | Platform-enforced |
| **Audit Trail Logging** | Every configuration change and approved action is recorded | Automatic (all users) |

---

## Frequently Asked Questions

**Q: Can I disable the Human-in-the-Loop approval requirement for specific agents?**
No. Human-in-the-Loop approval is a platform-level safety control built into every agent action that would modify your live store, campaigns, or data. It cannot be disabled for any agent, role, or subscription plan. This design ensures that your digital workforce never acts unilaterally on your live business.

**Q: How quickly do Brand Persona and Brand Voice Profile changes take effect?**
Changes take effect immediately for all new conversations and agent activations after you save them. Existing conversation threads in Ask Viq continue using the persona that was active when that thread was started. If you want a specific ongoing conversation to reflect updated persona settings, start a new thread.

**Q: Who can modify the Brand DNA and AI Guardrails settings?**
Brand Persona and Brand Voice Profile configurations can only be viewed and modified by users with the **Administrator** role. Manager-level users can read agent outputs and approve actions, but cannot modify the Guardrails configuration that governs how agents communicate.

**Q: What happens if a connected platform changes its access credentials?**
If a connected source's credentials change or expire, the platform connection will show as disconnected in **Settings → Connected Sources**. Any agents relying on that connection will pause their activity until the connection is restored. No agent will attempt to access a disconnected source or use stale credentials.

**Q: How do Guardrails interact with the Agent Hub's subscription-gated access?**
Subscription gating and Guardrails are complementary, not competing, controls. Subscription gating determines *which* agents your workspace can activate. Guardrails determine *how* those agents operate once activated — ensuring every activated agent operates within your brand standards and with human oversight, regardless of which plan you are on.

---

[← Back to Help Centre](../index.md){ .md-button }
