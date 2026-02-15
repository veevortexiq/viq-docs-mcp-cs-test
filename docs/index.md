---
title: Help Centre
layout: default
css: styles.css
hide:
  - toc        # Hide Table of Contents
  - path       # Hide breadcrumbs on Homepage
---

<style>
  .md-header + .md-container .md-grid {
    margin: 0 !important;
  }

  .md-typeset > h1:first-of-type {
    display: none;
  }

  .home-intro h2 {
    color: #ffffff !important;
    margin-top: 0px;
    margin-bottom: 0;
    border-bottom: 1px solid #e6e9ef00;
    padding-bottom: 0;
  }

  .home-intro p {
    margin: 0;
  }

  .home-intro {
    padding-left: 24px;
    padding-right: 24px;
  }

  .md-main__inner.md-grid {
    max-width: 100% !important;
  }

  @media screen and (min-width: 76.25em) {
    .md-main__inner.md-grid {
      margin-left: 40px;
    }
  }

  .md-content__inner {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .md-sidebar__scrollwrap {
    margin: 0px 1.2rem;
  }

  @media screen and (min-width: 76.25em) {
    .md-sidebar {
      width: 18.1rem;
    }
  }

  .md-footer {
    padding: 2rem 24px;
  }
</style>


<div class="container">
    <div class="home-intro">
        <h2>How can we help you?</h2>
        <p>Search the Vortex IQ OS documentation or browse topics below.</p>
    </div>
    <div class="grid-section-title"><img src="img/viq-docs/admin.png" alt="" width="26" height="26"> Getting Started & Admin</div>
    <div class="card-grid">
        <a href="getting-started/" class="card">
            <span class="card-icon"><img src="img/viq-docs/rocket.png" alt="" width="26" height="26"></span>
            <h3>Getting Started</h3>
            <p>Connect your store, set up your first agent, and tour the dashboard.</p>
        </a>
        <a href="configuration/" class="card">
            <span class="card-icon"><img src="img/viq-docs/settings.png" alt="" width="26" height="26"></span>
            <h3>Configuration</h3>
            <p>Manage platform connectors (Shopify, BigCommerce), API keys, and permissions.</p>
        </a>
        <a href="billing/" class="card">
            <span class="card-icon"><img src="img/viq-docs/billing.png" alt="" width="26" height="26"></span>
            <h3>Billing & Subscription</h3>
            <p>Manage your plan, view invoices, and update payment methods.</p>
        </a>
        <a href="support-community/" class="card">
            <span class="card-icon"><img src="img/viq-docs/support.png" alt="" width="26" height="26"></span>
            <h3>Support & Community</h3>
            <p>Contact our support team or chat with other Vortex IQ experts.</p>
        </a>
    </div>

    <div class="grid-section-title"><img src="img/viq-docs/vortex_360_blue.png" alt="" width="26" height="26"> Product Modules</div>
    <div class="card-grid">
        <a href="nerve-centre/" class="card">
            <span class="card-icon"><img src="img/viq-docs/nerve_512_black-outline.png" alt="" width="20" height="20"></span>
            <h3>Nerve Centre</h3>
            <p>Real-time monitoring, alerts, and anomaly detection.</p>
        </a>
        <a href="vortex-mind/" class="card">
            <span class="card-icon"><img src="img/viq-docs/mind_512_black-outline.png" alt="" width="20" height="20"></span>
            <h3>Vortex Mind</h3>
            <p>AI diagnosis, reports, and root-cause analysis.</p>
        </a>
        <a href="ask-viq/" class="card">
            <span class="card-icon"><img src="img/viq-docs/ask-viq_512_black-outline.png" alt="" width="20" height="20"></span>
            <h3>Ask Viq</h3>
            <p>Conversational AI commands and troubleshooting.</p>
        </a>
        <a href="vortex-apps/" class="card">
            <span class="card-icon"><img src="img/viq-docs/apps_512_black-outline.png" alt="" width="20" height="20"></span>
            <h3>Vortex Apps</h3>
            <p>Staging, Backups, and safe Rollback procedures.</p>
        </a>
        <a href="agent-hub/" class="card">
            <span class="card-icon"><img src="img/viq-docs/agent-hub_512_black-outline.png" alt="" width="20" height="20"></span>
            <h3>Agent Hub</h3>
            <p>Build, deploy, and manage your AI agent workforce.</p>
        </a>
    </div>

    <div class="grid-section-title"><img src="img/viq-docs/tech-doc.png" alt="" width="26" height="26"> Technical Documentation</div>
    <div class="card-grid">
        <a href="#" class="card">
            <span class="card-icon"><img src="img/viq-docs/agent-api.png" alt="" width="26" height="26"></span>
            <h3>AI Agents API</h3>
            <p>Complete API documentation including A2A (Agent-to-Agent) cards and protocols.</p>
        </a>
        <a href="https://stagingpro.apimatic.dev/#/rest/step-by-step-tutorial" class="card">
            <span class="card-icon"><img src="img/viq-docs/staging-api.png" alt="" width="26" height="26"></span>
            <h3>StagingPro API</h3>
            <p>Technical implementation guides and API references for StagingPro integration.</p>
        </a>
        <a href="#" class="card">
            <span class="card-icon"><img src="img/viq-docs/bigc-backup.png" alt="" width="26" height="26"></span>
            <h3>Vortex Backup (BigCommerce)</h3>
            <p>API documentation for BigCommerce backup and restore operations.</p>
        </a>
        <a href="#" class="card">
            <span class="card-icon"><img src="img/viq-docs/shopify-staging.png" alt="" width="26" height="26"></span>
            <h3>Vortex Staging (Shopify)</h3>
            <p>Developer guides for managing Shopify staging environments via API.</p>
        </a>
		<a href="#" class="card">
			<span class="card-icon"><img src="img/viq-docs/shopify-backup.png" alt="" width="26" height="26"></span>
			<h3>Vortex Backup (Shopify)</h3>
			<p>Technical reference for Shopify data protection and backup APIs.</p>
		</a>

		<a href="#" class="card">
			<span class="card-icon"><img src="img/viq-docs/commerce.png" alt="" width="26" height="26"></span>
			<h3>Adobe Commerce / Magento</h3>
			<p>Documentation for Adobe Commerce (Magento) staging and backup systems.</p>
		</a>
    </div>

    <div class="grid-section-title"><img src="img/viq-docs/uptime.png" alt="" width="26" height="26"> System Status Dashboard</div>

    <div class="card-grid">
	
        <a href="https://monitor.vortexiq.ai/" target="_blank" class="card">
            <div style="display: flex; align-items: center; width: 100%; justify-content: space-between; gap: 12px;">
                <div style="flex: 1; min-width: 0;">
                    <h3 style="margin-bottom: 5px;">Vortex IQ AI OS</h3>
                    <p>View real-time system uptime.</p>
                </div>
                <div style="text-align: right; white-space: nowrap; flex-shrink: 0;">
                    <span class="status-dot"></span><span style="font-size: 0.85rem; color: #2ecc71; font-weight: 600;">LIVE</span>
                </div>
            </div>
        </a>
        <a href="https://monitor.stagingpro.com/" target="_blank" class="card">
            <div style="display: flex; align-items: center; width: 100%; justify-content: space-between; gap: 12px;">
                <div style="flex: 1; min-width: 0;">
                    <h3 style="margin-bottom: 5px;">StagingPro BigCommerce</h3>
                    <p>Check status for StagingPro services.</p>
                </div>
                <div style="text-align: right; white-space: nowrap; flex-shrink: 0;">
                    <span class="status-dot"></span><span style="font-size: 0.85rem; color: #2ecc71; font-weight: 600;">LIVE</span>
                </div>
            </div>
        </a>
		<a href="https://monitor.rollbackpro.com/" target="_blank" class="card">
            <div style="display: flex; align-items: center; width: 100%; justify-content: space-between; gap: 12px;">
                <div style="flex: 1; min-width: 0;">
                    <h3 style="margin-bottom: 5px;">Vortex Backup BigCommerce</h3>
                    <p>View real-time system uptime.</p>
                </div>
                <div style="text-align: right; white-space: nowrap; flex-shrink: 0;">
                    <span class="status-dot"></span><span style="font-size: 0.85rem; color: #2ecc71; font-weight: 600;">LIVE</span>
                </div>
            </div>
        </a>
        <a href="https://monitor-shopifystg.vortexiq.ai/" target="_blank" class="card">
            <div style="display: flex; align-items: center; width: 100%; justify-content: space-between; gap: 12px;">
                <div style="flex: 1; min-width: 0;">
                    <h3 style="margin-bottom: 5px;">Vortex Staging Shopify</h3>
                    <p>Check status for StagingPro services.</p>
                </div>
                <div style="text-align: right; white-space: nowrap; flex-shrink: 0;">
                    <span class="status-dot"></span><span style="font-size: 0.85rem; color: #2ecc71; font-weight: 600;">LIVE</span>
                </div>
            </div>
        </a>
	    <a href="https://monitor-shopifybkp.vortexiq.ai/" target="_blank" class="card">
            <div style="display: flex; align-items: center; width: 100%; justify-content: space-between; gap: 12px;">
                <div style="flex: 1; min-width: 0;">
                    <h3 style="margin-bottom: 5px;">Vortex Backup Shopify</h3>
                    <p>View real-time system uptime.</p>
                </div>
                <div style="text-align: right; white-space: nowrap; flex-shrink: 0;">
                    <span class="status-dot"></span><span style="font-size: 0.85rem; color: #2ecc71; font-weight: 600;">LIVE</span>
                </div>
            </div>
        </a>
        <a href="https://monitor.dryrunpro.com/" target="_blank" class="card">
            <div style="display: flex; align-items: center; width: 100%; justify-content: space-between; gap: 12px;">
                <div style="flex: 1; min-width: 0;">
                    <h3 style="margin-bottom: 5px;">Vortex Staging Adobe</h3>
                    <p>Check status for StagingPro services.</p>
                </div>
                <div style="text-align: right; white-space: nowrap; flex-shrink: 0;">
                    <span class="status-dot"></span><span style="font-size: 0.85rem; color: #2ecc71; font-weight: 600;">LIVE</span>
                </div>
            </div>
        </a>
		
    </div>
	
</div>