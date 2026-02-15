
# History & Rollback

The History & Rollback section provides a complete record of all migrations and deployments. Use this section to monitor progress, review past activities, view detailed logs, and cancel scheduled jobs.

## Accessing History & Rollback

Click**History & Rollback**in the main navigation. You'll see three tabs:


- **Data Migrations**— History of content migrations
- **Code Deployment**— Theme deployment history
- **Scheduled Migration**— Pending scheduled jobs

📸 Screenshot: History & Rollback page

## Data Migrations Tab

The Data Migrations tab shows all content migration activity.

### Filtering Results

Use the filter controls at the top:


- **From**— Start date for the date range
- **To**— End date for the date range
- **Batch ID**— Search for a specific migration by its ID
- **Apply Filter**— Apply your filter criteria
- **Reset**— Clear filters and show all results

### Understanding the Migration List

Each migration entry displays:

| Column | Description |
| --- | --- |
| **Request ID** | Unique identifier for the migration (e.g., 20FDC58D-CC9D-4586-956B-B8AECC5B2C0C) |
| **Source Environment** | Where the data came from (e.g., Production) |
| **Destination Environment** | Where the data went (e.g., Staging) |
| **Started at** | When the migration began |
| **Status** | Current status (see status meanings below) |
| **Completed at** | When the migration finished |


### Status Meanings

| Status | Meaning |
| --- | --- |
| **Publish Completed** | Migration finished successfully and data is published |
| **Completed** | Migration processing finished |
| **In Progress** | Migration is currently running |
| **Pending** | Migration is queued to start |
| **Failed** | An error occurred—check details for more information |
| **Cancelled** | Migration was manually stopped |


### Viewing Migration Details

Click on a**Request ID**or**View Details**link to expand the migration and see entity-level information.

📸 Screenshot: Expanded migration details

The expanded view shows:

| Column | Description |
| --- | --- |
| **Entity** | Type of data that was migrated (e.g., Page Templates) |
| **Source** | Source environment for this entity |
| **Destination** | Destination environment for this entity |
| **Status** | Status indicator (● Completed, Failed, etc.) |
| **Errors** | Error details if any issues occurred |


A green**● Completed**indicator with "No errors" confirms successful migration of that entity.

### Viewing Individual Item Status

For large migrations, you can click to see item-by-item details showing:


- Individual item IDs (e.g., UUID references)
- Source and destination links
- Start and completion times
- Status for each item
- "View Details" for additional information

Use pagination (Previous, 1, 2, 3, ... Next) to navigate through large result sets.

## Code Deployment Tab

The Code Deployment tab tracks theme deployments from your connected repository.

### Code Deployment Information

Each entry shows:

| Column | Description |
| --- | --- |
| **Git ID / Revision ID** | Reference to the code commit |
| **Commit date time** | When the code was committed |
| **Branch Name / Environment URL** | Which branch and where it was deployed |
| **Channel ID** | The BigCommerce channel targeted |
| **Approval status** | Whether the deployment was approved |
| **Status** | Deployment status |
| **Design Release Version** | Theme version number |
| **Action** | Available actions (deploy, rollback, view logs) |


### Approval Workflow

Code deployments may require approval before going live:


- **Pending Approval**— Deployment is waiting for review
- **Approved**— Deployment has been approved and will proceed
- **Rejected**— Deployment was rejected and will not proceed

### Deployment Actions

Available actions depending on status:


- **Deploy**— Push the theme to the target environment
- **View Logs**— See detailed deployment logs
- **Rollback**— Revert to a previous theme version
- **Schedule**— Set a future deployment time

## Scheduled Migration Tab

The Scheduled Migration tab shows migrations scheduled for future execution.

### Scheduled Migration Information

Each entry shows:

| Column | Description |
| --- | --- |
| **Request ID** | Unique identifier |
| **Content Type** | What type of data is scheduled |
| **Source Environment** | Where data will come from |
| **Destination Environment** | Where data will go |
| **Created at** | When the schedule was created |
| **Scheduled at** | When it will run |
| **Completed at** | When it finished (if run) |
| **Status** | Current status |
| **Action** | Available actions |


### Cancelling a Scheduled Migration

If plans change, you can cancel a scheduled migration before it runs:


- Navigate to the**Scheduled Migration**tab
- Find the migration you want to cancel
- Click the**Cancel**button in the Action column
- Confirm cancellation when prompted

> 
**Note:**You can only cancel migrations that haven't started yet.

## Reading History Entries

### Finding Specific Migrations


- Use the date range filters to narrow results
- Search by Batch ID if you have a specific reference
- Check status to filter completed vs failed migrations
- Use pagination to browse older entries

### Understanding Timelines


- **Started at**— When processing began
- **Completed at**— When processing finished
- Time difference shows migration duration

### Interpreting Errors

When migrations fail:


- Click**View Details**to see the specific entities
- Note any error messages in the Errors column
- Common errors include:

  - Missing dependencies
  - Invalid data format
  - Network timeouts
  - Permission issues


## Audit Trail

The History & Rollback section provides a complete audit trail:


- **Who**— The system records which account initiated actions
- **What**— Exactly which entities were migrated
- **When**— Precise timestamps for all activities
- **Where**— Source and destination environments
- **Result**— Success, failure, or partial completion

This audit trail is valuable for:


- Troubleshooting issues
- Compliance reporting
- Team coordination
- Change management

## Best Practices

### Regular Review


- Check the History tab after any migration
- Review failed items promptly
- Monitor scheduled migrations

### Before Contacting Support

Gather this information from History:


- Request ID of the problematic migration
- Timestamps (started and completed)
- Error messages displayed
- Source and destination environments

### Maintaining Clean History


- Use meaningful timeframes when filtering
- Reference Request IDs in team communications
- Document any manual interventions

---

Click here → [Understanding the StagingPro App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }