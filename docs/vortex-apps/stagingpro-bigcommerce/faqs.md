
# Frequently Asked Questions

Find answers to the most common questions about using StagingPro.

---

## General Questions

### What is StagingPro?

StagingPro is an enterprise staging and deployment platform for BigCommerce. It allows you to safely test changes in a staging environment before deploying them to your live production store.

### How do I access StagingPro?

StagingPro is available through the BigCommerce App Marketplace. Once installed, access it from your BigCommerce control panel under Apps > StagingPro.

### Is my production store at risk?

No. StagingPro's staging environments are completely isolated from production. Changes in staging cannot accidentally affect your live store. You have complete control over what gets migrated to production and when.

---

## Migration Questions

### Can I undo a migration?

There is no automatic "undo" button for migrations. However, if you need to revert changes:


- **For themes:**Use the Rollback feature in History & Rollback > Code Deployment
- **For data:**Migrate corrected data from a known-good source environment
- **Prevention is best:**Always test thoroughly in staging before migrating to production

### What happens if data already exists in the destination?

When you migrate data to a destination that already contains matching items:


- Existing items may be updated with the source data
- New items will be created
- The exact behaviour depends on the data type and matching criteria

**Recommendation:**Use Selective Migration for precise control when destination data matters.

### How long do migrations take?

Migration duration depends on:


- Amount of data being migrated
- Number and size of images
- Current system load

**Typical timeframes:**


- Small migrations (< 100 items): A few minutes
- Medium migrations: 15-60 minutes
- Large bulk migrations: Several hours

You'll receive notifications when migrations complete if configured.

### Can I migrate while my store is open?

Yes, but for significant migrations:


- Schedule during lower-traffic periods
- Use the scheduled migration feature for precise timing
- Monitor closely after deployment

### What if something fails during migration?

If a migration fails:


- Check History & Rollback for the status
- Click View Details to see which items failed
- Note any error messages
- Retry the failed items or contact support if the issue persists

---

## Data Questions

### Is production data affected during migrations?

Migrations FROM production only read data; they don't modify production. Migrations TO production will update your live store, which is why testing in staging first is essential.

### Can I migrate only specific products?

Yes! Use Selective Content Migration > Products to select exactly which products you want to migrate.

### Do images get copied too?

Yes, product and category images are included in migrations. Note that large image libraries increase migration time.

### What about customer data?

Customer data can be migrated, with an option to anonymise it for non-production environments. This protects privacy whilst allowing realistic testing.

### Are orders migrated?

Order history can be included in Bulk Migration. This is useful for setting up test environments with realistic data patterns.

---

## Environment Questions

### What environments can I create?

Common environments include:


- **Production**— Your live customer-facing store
- **Staging**— Primary testing environment
- **UAT**— User acceptance testing
- **Integration**— Testing third-party integrations

The specific environments available depend on your StagingPro setup.

### How do I know which environment is which?

StagingPro clearly labels each environment by name (Production, Staging, etc.) throughout the interface. Always verify your source and destination before migrating.

### Can I have multiple staging environments?

Yes, depending on your subscription. Multiple environments allow for parallel workflows, such as separate environments for QA and UAT.

---

## Technical Questions

### Do I need technical skills to use StagingPro?

No. StagingPro is designed for non-technical users. The interface guides you through each step with clear labels and instructions.

### How do I connect my code repository?

Navigate to Settings > Connect Repository and choose your provider (GitHub, GitLab, or Bitbucket). Follow the on-screen instructions for your chosen platform.

### What notifications can I receive?

You can receive notifications via:


- Email
- Slack
- Microsoft Teams

Configure these in Settings > Status Notifications.

---

## Team and Access Questions

### How do I add team members?

Navigate to Settings > Connect Repository and click "Add Team Member." Enter their email address and set appropriate permissions.

### Can I grant agency access?

Yes. Navigate to Settings > Connect Agency to invite and manage agency partners.

### How do permissions work?

Team members can be assigned different permission levels controlling what they can view and do within StagingPro. Manage permissions through the Settings section.

---

## Billing and Support Questions

### How do I get help?

You can:


- Click the**Help**button in the top-right corner
- Contact StagingPro Support
- Review this documentation

### How do I contact support?

Contact StagingPro Support at:


- Phone: +44 20 4547 9292
- Email: Available through the Help section

### Is there a trial available?

Contact StagingPro for information about trials and subscription options.

---

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }