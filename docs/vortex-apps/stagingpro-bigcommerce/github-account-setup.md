# GitHub Integration

## GitHub Account Setup

If you use GitHub for code deployments, you can integrate it with **StagingPro**.

Navigate to:

**Settings → Connect Repository → Connect to GitHub App**

---

!!! info "Authorization Types"
    There are **two distinct authorization types** supported by the GitHub App installation.

    === "Type 1 – Installer Access"
        - GitHub user has **write access**
        - Can **install the GitHub App** directly

    === "Type 2 – Approval Required"
        - GitHub user has **read access**
        - Must **request approval** from an organization admin

---

## GitHub App Installation Flow

### Step 1: Create a GitHub Account and Log In

- Sign up or log in to GitHub
- A **valid GitHub ID** is mandatory
- If you don’t have one, you can create a free account on GitHub

!!! warning "Mandatory Requirement"
    Without a valid GitHub ID, repository linking in StagingPro will fail.

---

### Step 2: Create Organization and Repository

#### Pre-Integration Checks

Before linking GitHub with StagingPro, complete the following validations.

---

#### 1️⃣ Repository Must Be Under an Organization

- Repository **must belong to a GitHub Organization**
- Personal repositories are **not supported**
- Organization settings:  
  <https://github.com/settings/organizations>

**Repository creation guidelines:**
- Repository Name: for example `StagingPro`
- Visibility: **Private** (recommended)
- Click **Create Repository**

---

#### 2️⃣ README File Must Exist

- Ensure **Add a README file** is selected during creation
- If missing, create a new repository with this option enabled

!!! danger "Critical Validation"
    If no file exists in the repository:
    - StagingPro cannot create branches
    - Repository linking will fail

> This validation must be completed **before** linking GitHub with StagingPro.

---

## Step 3: Link GitHub Repository to StagingPro

---

!!! tabs

    === "Type 1 – User Has Installation Rights"

        1. Log in to **StagingPro**
        2. Click **Connect to GitHub App**
        3. Click **Authorize**
        4. Select your **Organization**
        5. Choose **Only select repositories**
        6. Select the repository from the dropdown
        7. Click **Install**
        8. Return to **Settings → Connect Repository** to verify the connection

        !!! tip
            Allow **3–5 minutes** for base environment branches to be created.

    === "Type 2 – User Requires Approval"

        1. Requester logs in to **StagingPro**
        2. Click **Connect to GitHub App**
        3. Click **Authorize**
        4. Select the organization
        5. Choose **Only select repositories**
        6. Select the repository and click **Request**
        7. Request status appears under **Settings → Connect Repository**
        8. Approver logs into GitHub and clicks **Review request**
        9. Approver selects:
           - **Only select repositories**
           - Required repository
           - Click **Approve & Install**
        10. Repository appears as connected in StagingPro

        !!! tip
            Allow **3–5 minutes** for base environment branches to be created.

        !!! danger "If Request Is Rejected"
            - Requester must log a helpdesk ticket to reset the connection  
            - GitHub retains the App entry even after rejection  
            - The App must be **uninstalled from GitHub Apps** before raising a reset request

---

## Step 4: Add Team Members

1. Click **Add Team Member**
2. Enter:
   - GitHub Email ID
   - GitHub User ID
3. Use **Change Permission** to assign access levels
4. Select permissions per environment:
   - Production
   - Staging
   - UAT
   - Other environments

!!! info
    GitHub User ID is mandatory to associate users with StagingPro branches.

Click **Save** to add the team member.

---

## Branch Creation & Code Deployment

- StagingPro automatically creates branches based on linked environments
- User-specific branches are created per environment
- Allow **5–10 minutes** for:
  - Branch creation
  - Theme files to sync

Code commits appear under:

**History & Rollback → Code Deployment**

You can also view Git branch associations from the **Home** page.

---

## Step 5: Remove User

- Click **Remove** in StagingPro
- Removes user access from **StagingPro only**
- User remains active in GitHub

---

## Step 6: Change Permissions

- Navigate to **User Settings**
- Click **Change Permission**
- Assign environment-specific access

!!! warning "Best Practice"
    Restrict **Production** access to users who explicitly require it.

---

## References & Next Steps

- 📘 **StagingPro Deployment Workflow** – Code commit and deployment process
- 🚀 **StagingPro Onboarding** – Initial setup and configuration

---

!!! important
    GitHub Actions and workflow notifications must be reviewed and fixed by your development team.  
    StagingPro deployments will succeed only after all workflow issues are resolved.


---

Click here → [Understanding the StagingPro App pages](app-pages/index.md) to understand other pages of the app.

To view our Onboarding steps, please access the following article → [StagingPro Onboarding](stagingpro-onboarding/index.md)

---

[← Back to Help Center](../../index.md){ .md-button }