---
title: Audit Trail — Complete Activity Log for AI-Driven eCommerce | Vortex IQ Help Centre
---

<!--
SEO METADATA
Primary Keyword: ecommerce AI audit trail
Secondary Keywords: AI platform activity log ecommerce, ecommerce compliance activity tracking, AI agent action history, team activity monitoring platform, ecommerce workspace audit log
Search Intent: Informational / Navigational
Meta Title: Audit Trail: Complete Activity Log for Your Workspace
Meta Description: Every agent action, approval decision, user change, and configuration update is logged automatically. The Audit Trail gives you a complete, searchable record of everything that happened in your workspace.
Schema Target: TechArticle / SoftwareApplication
-->

# Audit Trail

**The Audit Trail is Vortex IQ's complete activity log — a searchable, tamper-evident record of every significant action taken in your workspace. Every AI agent action approved or declined, every configuration change made, every user invitation sent, and every monitoring event triggered is logged automatically with a timestamp, user identity, and full context. Nothing happens in your workspace without a record.**

---

## Why a Complete Audit Trail Is a Governance Requirement

For organisations deploying AI agents across their eCommerce operations, knowing *what* happened is not enough. Compliance, security, and operational accountability all require knowing *who* did it, *when* it happened, *what changed*, and *what data informed the decision*.

The regulatory and business case for comprehensive audit logging is strengthening every year. By 2026, **half of the world's governments are expected to require enterprises to adhere to AI laws and data governance frameworks** that mandate transparency and accountability for automated systems (Source: [Corporate Compliance Insights — 2026 Guide to AI Governance and Emerging Risks](https://www.corporatecomplianceinsights.com/2026-operational-guide-cybersecurity-ai-governance-emerging-risks/)). The AI governance industry is growing at a **CAGR of 45.3% from 2024 to 2029**, driven specifically by demand for audit trails, lifecycle documentation, and automated evidence workflows (Source: [CloudEagle — Best AI Governance Platforms 2026](https://www.cloudeagle.ai/blogs/10-best-ai-governance-platforms-in-2026)).

From an operational security perspective, the stakes are equally significant. **It takes an average of 81 days to detect and contain an insider threat incident**, and teams without comprehensive activity logs face the additional burden of reconstructing what happened after the fact — often from incomplete records (Source: [Ponemon Institute — 2025 Cost of Insider Risks Global Report, via Syteca](https://www.syteca.com/en/blog/insider-threat-statistics-facts-and-figures)). A complete, always-on audit trail compresses that detection window significantly by giving your team a clear, searchable record to work from from the moment an issue is suspected.

Vortex IQ's Audit Trail captures every significant action automatically — no configuration required, no opt-in process, and no gaps.

---

## What the Audit Trail Records

The Audit Trail captures every significant event across five categories of workspace activity:

<div class="account-grid">
  <div class="type-card">
    <strong>Agent Actions</strong><br>
    Every agent activation, agent-proposed recommendation, Human-in-the-Loop approval decision (approved or declined), and agent deactivation — with the agent name, platform, action proposed, and the user who approved or declined.
  </div>
  <div class="type-card">
    <strong>Configuration Changes</strong><br>
    Every update to Brand DNA settings, AI Guardrails, connected sources, monitoring thresholds, and alert configurations — with the previous value, new value, and the user who made the change.
  </div>
</div>

<div class="account-grid">
  <div class="type-card">
    <strong>User & Access Events</strong><br>
    Every user invitation, role assignment, status change, and permission update — with the target user, the change made, and the Administrator who authorised it.
  </div>
  <div class="type-card">
    <strong>Monitoring Events</strong><br>
    Every monitor trigger, alert fired, and alert configuration change — including the platform, metric, threshold breached, and the notification channels that were notified.
  </div>
</div>

---

## Step-by-Step: Using the Audit Trail

### Step 1: Open the Activity Log

Navigate to **Settings** in the left-hand navigation sidebar, then select the **Agency Activity** tab. The Agency Activity screen provides an overview of recent workspace activity, surfacing the most significant events at a glance.

![Vortex IQ Settings — Agency Activity tab showing an overview of recent workspace activity with action summaries and user attribution](<../../aios screenshots/settings-account information  agency activity .png>)

*The Agency Activity overview: recent workspace events surfaced at a glance — showing action types, user attribution, and timestamps for the most significant recent events in your workspace.*

The overview panel shows:

- **Recent actions** — the most recent agent activations, approvals, and configuration changes.
- **User activity** — which team members have been active and what categories of actions they have taken.
- **Event counts** — a summary of activity volume across key categories for the current period.

### Step 2: Review the Detailed Activity Log

Click **View Full Activity Log** (or select the log sub-section within the Agency Activity tab) to access the complete, chronological record of all logged events. Each entry in the log contains:

- **Action type** — what category of event occurred (e.g., agent action approved, user role updated, monitor triggered).
- **Subject** — the specific record or item affected (e.g., "Product SEO Agent for Shopify", "User: Sarah Chen", "Shopify Revenue Monitor").
- **User** — the team member who initiated or approved the action, identified by name and email.
- **IP address** — the network location from which the action was taken.
- **Timestamp** — the exact date and time the event was logged.
- **Properties** — the specific changes made (for update events: what changed from what to what).

![Vortex IQ Settings — Agency Activity Log showing a sample of logged events with action type, subject, user attribution, IP address, and timestamp columns](<../../aios screenshots/settings-account information  agency activity log sample.png>)

*A sample of the Activity Log: each row shows the action type, affected subject, the team member responsible, their IP address, and the precise timestamp — providing a complete, attributable record of every workspace event.*

### Step 3: Filter and Search the Log

Use the filter controls above the log to narrow your view:

- **Filter by action type** — view only specific categories of events (agent actions, configuration changes, user events, monitoring events).
- **Filter by user** — see only events attributable to a specific team member.
- **Filter by date range** — limit the log to a specific period for investigation or reporting.
- **Search by keyword** — type any term to find events involving a specific agent, platform, user name, or record.

### Step 4: Use the Audit Trail for Compliance and Accountability

The Audit Trail serves several distinct use cases for eCommerce teams:

**Post-incident investigation:** When an unexpected change appears on your store — an updated product description, a changed alert threshold, a new user invitation — the Audit Trail shows exactly when it happened, who initiated it, and what the prior state was.

**Compliance reporting:** If your organisation is subject to data governance requirements, the Audit Trail provides an automated evidence base for demonstrating that AI-generated actions required human approval, that access changes were authorised, and that your digital workforce operated within documented controls.

**Team onboarding review:** When a new team member joins, reviewing the Audit Trail gives them context on recent decisions and helps them understand the operational history of the workspace they are joining.

**Partner and agency oversight:** For organisations working with external partners or agencies, the Audit Trail provides a shared record of every action taken by partner team members in your workspace, accessible through the **Partner SI** view within the Agency Activity section.

![Vortex IQ Settings — Partner SI view within Agency Activity showing partner-level activity log access](<../../aios screenshots/settings-account information  partner si ui.png>)

*The Partner SI view: a dedicated interface for reviewing partner and agency team member activity within your workspace — providing accountability and transparency for every action taken by external collaborators.*

---

## AI Safety & Guardrails

The Audit Trail is not configurable or opt-in — it is an always-on, platform-enforced accountability layer.

**Automatic Capture:**
Every auditable event in the workspace is captured automatically, regardless of which interface it occurred in. Actions taken through Ask Viq, the Agent Hub, Nerve Centre, Vortex Mind, and Settings all appear in the same unified log.

**Tamper-Evident Design:**
Audit log entries cannot be edited, deleted, or modified by any user role — including Administrator. The log provides a reliable record of what occurred, not what was subsequently revised.

**User Attribution:**
Every entry is attributed to the specific user who initiated the action, including their network IP address at the time of the action. Automated system events (such as a scheduled Vortex Mind report delivery) are attributed to the system process rather than an individual user.

**Access Control:**
The Audit Trail is visible to Administrator and Manager roles. Users with the Viewer role do not have access to the Agency Activity section or the detailed log entries.

---

## Audit Trail Coverage at a Glance

| Event Category | What Is Logged | Who Can View |
| :--- | :--- | :--- |
| **Agent Activations** | Agent name, platform, activated by, timestamp | Administrator, Manager |
| **HITL Approvals & Declines** | Agent action proposed, decision made, deciding user, timestamp | Administrator, Manager |
| **Configuration Changes** | Setting name, previous value, new value, changed by | Administrator, Manager |
| **User Invitations** | Invited user email, assigned role, invited by | Administrator, Manager |
| **Role Assignments** | User affected, previous role, new role, changed by | Administrator, Manager |
| **Status Changes** | User affected, previous status, new status, changed by | Administrator, Manager |
| **Monitor Triggers** | Monitor name, metric, threshold, triggered timestamp | Administrator, Manager |
| **Alert Configurations** | Alert rule, notification channel, configured by | Administrator, Manager |
| **Connected Source Changes** | Platform connected or disconnected, changed by | Administrator, Manager |
| **Report Generation** | Report type, store, sections included, generated by | Administrator, Manager |

---

## Frequently Asked Questions

**Q: How far back does the Audit Trail go?**
The Audit Trail captures all events from the date your workspace was created. Historical log data is retained for the lifetime of your workspace — earlier entries are always accessible through the date range filter in the Activity Log.

**Q: Can I export the Audit Trail for external compliance reporting?**
The Audit Trail is searchable and filterable within the platform. For export requirements specific to your compliance framework, contact the Vortex IQ support team — export options depend on your subscription plan and the specific compliance standard you are reporting against.

**Q: If an agent action is declined in the Human-in-the-Loop approval step, is that logged?**
Yes. Both approved and declined agent actions are recorded in the Audit Trail. The log entry shows the agent's proposed action, the recommendation it made, and the decision (approved or declined) along with the user who made the decision and the timestamp.

**Q: Are scheduled Vortex Mind reports logged in the Audit Trail?**
Yes. Every Vortex Mind report generation event — including scheduled reports that run automatically — is logged with the report type, the store analysed, the sections included, and whether it was generated manually or by an automated schedule.

**Q: Can I set up alerts when specific types of events appear in the Audit Trail?**
The Audit Trail is a read-only record, not a monitoring trigger. For real-time alerting on operational metrics, use the **Nerve Centre** monitoring and alert configuration. For tracking user activity patterns — such as unusual configuration changes — reviewing the Audit Trail on a regular schedule through the Agency Activity tab is the recommended approach.

---

[← Back to Help Centre](../index.md){ .md-button }
