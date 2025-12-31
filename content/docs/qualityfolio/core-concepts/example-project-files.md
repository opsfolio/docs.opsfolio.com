---
title: Example Project Files
---

Qualityfolio supports four reference models for increasing complexity.

## 1. qf-small.md
Ideal for simple UI/API validations.

Structure:
```
Project → Case → Evidence
```
```
---
doc-classify:
  - select: heading[depth="1"]
    role: project
  - select: heading[depth="2"]
    role: case
  - select: heading[depth="3"]
    role: evidence
---

# www.Opsfolio.com

@id opsfolio-project

This project ensures that all **CMMC Level 1** and **Level 2** self-assessment
sections are visible, correctly structured, and navigable — both from the left
navigation panel and through section navigation controls. Additionally, it
validates the **Opsfolio Login functionality** to ensure users can securely
authenticate and access the system without UI or backend issues.

**Objectives**

- Ensure the Login button is clearly visible and functional.
- Validate successful authentication using valid credentials.
- Confirm redirection to the correct post-login page.
- Verify appropriate error messages for invalid credentials.
- Support automation for regression and continuous testing.
- Validate that Level 1 and Level 2 sections display completely and in the
  correct order.
- Confirm that navigation controls (Next/Previous) function correctly.
- Provide audit-ready evidence for navigation and control consistency.

**Risks**

- Login button missing or misaligned on UI.
- Authentication failures for valid users.
- Broken redirects post successful login.
- Missing or unclear error messages for invalid attempts.
- Automation scripts failing due to unstable DOM or dynamic IDs.
- Inconsistent navigation rendering per level.
- Misconfigured section lists after release.
- Caching or feature-flag discrepancies across environments.
- Broken navigation buttons or incorrect sequence transitions.

## Verify Left Navigation Displays All Sections for Level 1 and Level 2

@id TC-CMMC-0001

```yaml HFM
doc-classify:
requirementID: REQ-CMMC-001
Priority: High
Tags: [CMMC Self-Assessment]
Scenario Type: Happy Path
```

**Description**

Verify that all CMMC Level 1 and Level 2 self-assessment sections are correctly
displayed in the left-side navigation panel.

**Preconditions**

- [x] Valid user credentials are available.
- [x] User account has access to both CMMC Level 1 and Level 2 self-assessment
      modules.
- [x] Application environment is loaded with all expected sections.

**Steps**

- [x] Login with valid credentials and verify that the landing page displays the
      **CMMC Level 1 Self-Assessment** section.
- [x] Verify the list of sections displayed on the left-side navigation panel.
- [x] Compare the displayed list with the **expected Level 1 sections**.
- [x] Navigate to the **CMMC Level 2 Self-Assessment** page.
- [x] Verify the list of sections displayed on the left panel.
- [x] Compare the displayed list with the **expected Level 2 sections**.

**Expected Results**

- [x] All expected sections are visible in the left navigation panel.
- [x] Sections appear in the correct defined order for each level.
- [x] No extra or unconfigured sections are displayed.

**Expected Level 1 Sections**

- [x] Company Information
- [x] Access Control
- [x] Identification & Authentication
- [x] Media Protection
- [x] Physical Protection
- [x] System & Communications Protection
- [x] System & Information Integrity
- [x] Policy Framework Assessment

**Expected Level 2 Sections**

- [x] Company Information
- [x] Access Control
- [x] Audit & Accountability
- [x] Awareness & Training
- [x] Configuration Management
- [x] Identification & Authentication
- [x] Incident Response
- [x] Maintenance
- [x] Media Protection
- [x] Personnel Security
- [x] Physical Protection
- [x] Risk Assessment
- [x] Security Assessment
- [x] System & Communications Protection
- [x] System & Information Integrity

### Evidence

@id TC-CMMC-0001

```yaml META
role: evidence
cycle: 1.1
assignee: prathitha
status: passed
```

**Attachment**

- [Results JSON](./evidence/TC-CMMC-0001/1.1/result.auto.json)
- [CMMC Level 1 navigation screenshot](./evidence/TC-CMMC-0001/1.1/cmmc1.auto.png)
- [CMMC Level 2 navigation screenshot](./evidence/TC-CMMC-0001/1.1/cmmc2.auto.png)
- [Run MD](./evidence/TC-CMMC-0001/1.1/run.auto.md/;)

---


## 2. qf-medium.md
Used when tests require suites:

```
Project → Suite → Case → Evidence
```
```
---
doc-classify:
  - select: heading[depth="1"]
    role: project
  - select: heading[depth="2"]
    role: suite
  - select: heading[depth="3"]
    role: case
  - select: heading[depth="4"]
    role: evidence
---

# www.Opsfolio.com

@id opsfolio-project

This project ensures that all **CMMC Level 1** and **Level 2** self-assessment
sections are visible, correctly structured, and navigable — both from the left
navigation panel and through section navigation controls. Additionally, it
validates the **Opsfolio Login functionality** to ensure users can securely
authenticate and access the system without UI or backend issues.

**Objectives**

- Ensure the Login button is clearly visible and functional.
- Validate successful authentication using valid credentials.
- Confirm redirection to the correct post-login page.
- Verify appropriate error messages for invalid credentials.
- Support automation for regression and continuous testing.
- Validate that Level 1 and Level 2 sections display completely and in the
  correct order.
- Confirm that navigation controls (Next/Previous) function correctly.
- Provide audit-ready evidence for navigation and control consistency.

**Risks**

- Login button missing or misaligned on UI.
- Authentication failures for valid users.
- Broken redirects post successful login.
- Missing or unclear error messages for invalid attempts.
- Automation scripts failing due to unstable DOM or dynamic IDs.
- Inconsistent navigation rendering per level.
- Misconfigured section lists after release.
- Caching or feature-flag discrepancies across environments.
- Broken navigation buttons or incorrect sequence transitions.

## Navigation Visibility

@id navigation-visibility-suite

Verifies visibility and ordering of CMMC Level 1 and Level 2 sections.

**Scope**

- Left navigation visibility for both levels.
- Order validation for all sections.
- Detection of missing or unconfigured items.
- Audit evidence capture.

### Verify Left Navigation Displays All Sections for Level 1 and Level 2

@id TC-CMMC-0001

```yaml HFM
doc-classify:
requirementID: REQ-CMMC-001
Priority: High
Tags: [CMMC Self-Assessment]
Scenario Type: Happy Path
```

**Description**

Verify that all CMMC Level 1 and Level 2 self-assessment sections are correctly
displayed in the left-side navigation panel.

**Preconditions**

- [x] Valid user credentials are available.
- [x] User account has access to both CMMC Level 1 and Level 2 self-assessment
      modules.
- [x] Application environment is loaded with all expected sections.

**Steps**

- [x] Login with valid credentials and verify that the landing page displays the
      **CMMC Level 1 Self-Assessment** section.
- [x] Verify the list of sections displayed on the left-side navigation panel.
- [x] Compare the displayed list with the **expected Level 1 sections**.
- [x] Navigate to the **CMMC Level 2 Self-Assessment** page.
- [x] Verify the list of sections displayed on the left panel.
- [x] Compare the displayed list with the **expected Level 2 sections**.

**Expected Results**

- [x] All expected sections are visible in the left navigation panel.
- [x] Sections appear in the correct defined order for each level.
- [x] No extra or unconfigured sections are displayed.

**Expected Level 1 Sections**

- [x] Company Information
- [x] Access Control
- [x] Identification & Authentication
- [x] Media Protection
- [x] Physical Protection
- [x] System & Communications Protection
- [x] System & Information Integrity
- [x] Policy Framework Assessment

**Expected Level 2 Sections**

- [x] Company Information
- [x] Access Control
- [x] Audit & Accountability
- [x] Awareness & Training
- [x] Configuration Management
- [x] Identification & Authentication
- [x] Incident Response
- [x] Maintenance
- [x] Media Protection
- [x] Personnel Security
- [x] Physical Protection
- [x] Risk Assessment
- [x] Security Assessment
- [x] System & Communications Protection
- [x] System & Information Integrity

#### Evidence

@id TC-CMMC-0001

```yaml META
role: evidence
cycle: 1.1
assignee: prathitha
status: passed
```

**Attachment**

- [Results JSON](./evidence/TC-CMMC-0001/1.1/result.auto.json)
- [CMMC Level 1 navigation screenshot](./evidence/TC-CMMC-0001/1.1/cmmc1.auto.png)
- [CMMC Level 2 navigation screenshot](./evidence/TC-CMMC-0001/1.1/cmmc2.auto.png)
- [Run MD](./evidence/TC-CMMC-0001/1.1/run.auto.md/;)

---

## 3. qf-large.md
Enterprise‑level:

```
Project → Plan → Suite → Case → Evidence
```

```
---
doc-classify:
  - select: heading[depth="1"]
    role: project
  - select: heading[depth="2"]
    role: plan
  - select: heading[depth="3"]
    role: suite
  - select: heading[depth="4"]
    role: case
  - select: heading[depth="5"]
    role: evidence
---

# www.Opsfolio.com

@id opsfolio-project

This project ensures that all **CMMC Level 1** and **Level 2** self-assessment
sections are visible, correctly structured, and navigable — both from the left
navigation panel and through section navigation controls. Additionally, it
validates the **Opsfolio Login functionality** to ensure users can securely
authenticate and access the system without UI or backend issues.

**Objectives**

- Ensure the Login button is clearly visible and functional.
- Validate successful authentication using valid credentials.
- Confirm redirection to the correct post-login page.
- Verify appropriate error messages for invalid credentials.
- Support automation for regression and continuous testing.
- Validate that Level 1 and Level 2 sections display completely and in the
  correct order.
- Confirm that navigation controls (Next/Previous) function correctly.
- Provide audit-ready evidence for navigation and control consistency.

**Risks**

- Login button missing or misaligned on UI.
- Authentication failures for valid users.
- Broken redirects post successful login.
- Missing or unclear error messages for invalid attempts.
- Automation scripts failing due to unstable DOM or dynamic IDs.
- Inconsistent navigation rendering per level.
- Misconfigured section lists after release.
- Caching or feature-flag discrepancies across environments.
- Broken navigation buttons or incorrect sequence transitions.

## CMMC Navigation Verification

@id navigation-plan

Define validation and verification cycles to confirm structural integrity and
navigational consistency for each CMMC level.

**Cycle Goals**

- Conduct manual verification for Level 1 and Level 2 navigation completeness.
- Capture evidence for audit reporting.
- Validate “Previous” and “Next” navigation transitions.

### Navigation Visibility

@id navigation-visibility-suite

Verifies visibility and ordering of CMMC Level 1 and Level 2 sections.

**Scope**

- Left navigation visibility for both levels.
- Order validation for all sections.
- Detection of missing or unconfigured items.
- Audit evidence capture.

#### Verify Left Navigation Displays All Sections for Level 1 and Level 2

@id TC-CMMC-0001

```yaml HFM
doc-classify:
requirementID: REQ-CMMC-001
Priority: High
Tags: [CMMC Self-Assessment]
Scenario Type: Happy Path
```

**Description**

Verify that all CMMC Level 1 and Level 2 self-assessment sections are correctly
displayed in the left-side navigation panel.

**Preconditions**

- [x] Valid user credentials are available.
- [x] User account has access to both CMMC Level 1 and Level 2 self-assessment
      modules.
- [x] Application environment is loaded with all expected sections.

**Steps**

- [x] Login with valid credentials and verify that the landing page displays the
      **CMMC Level 1 Self-Assessment** section.
- [x] Verify the list of sections displayed on the left-side navigation panel.
- [x] Compare the displayed list with the **expected Level 1 sections**.
- [x] Navigate to the **CMMC Level 2 Self-Assessment** page.
- [x] Verify the list of sections displayed on the left panel.
- [x] Compare the displayed list with the **expected Level 2 sections**.

**Expected Results**

- [x] All expected sections are visible in the left navigation panel.
- [x] Sections appear in the correct defined order for each level.
- [x] No extra or unconfigured sections are displayed.

**Expected Level 1 Sections**

- [x] Company Information
- [x] Access Control
- [x] Identification & Authentication
- [x] Media Protection
- [x] Physical Protection
- [x] System & Communications Protection
- [x] System & Information Integrity
- [x] Policy Framework Assessment

**Expected Level 2 Sections**

- [x] Company Information
- [x] Access Control
- [x] Audit & Accountability
- [x] Awareness & Training
- [x] Configuration Management
- [x] Identification & Authentication
- [x] Incident Response
- [x] Maintenance
- [x] Media Protection
- [x] Personnel Security
- [x] Physical Protection
- [x] Risk Assessment
- [x] Security Assessment
- [x] System & Communications Protection
- [x] System & Information Integrity

##### Evidence

@id TC-CMMC-0001

```yaml META
role: evidence
cycle: 1.1
assignee: prathitha
status: passed
```

**Attachment**

- [Results JSON](./evidence/TC-CMMC-0001/1.1/result.auto.json)
- [CMMC Level 1 navigation screenshot](./evidence/TC-CMMC-0001/1.1/cmmc1.auto.png)
- [CMMC Level 2 navigation screenshot](./evidence/TC-CMMC-0001/1.1/cmmc2.auto.png)
- [Run MD](./evidence/TC-CMMC-0001/1.1/run.auto.md/;)

---


## 4. qf-complex.md
Audit‑grade, deep hierarchy:

```
Project → Strategy → Plan → Suite → Case → Evidence
```

```
---
doc-classify:
  - select: heading[depth="1"]
    role: project
  - select: heading[depth="2"]
    role: strategy
  - select: heading[depth="3"]
    role: plan
  - select: heading[depth="4"]
    role: suite
  - select: heading[depth="5"]
    role: case
  - select: heading[depth="6"]
    role: evidence
---

# www.Opsfolio.com

@id opsfolio-project

This project ensures that all **CMMC Level 1** and **Level 2** self-assessment
sections are visible, correctly structured, and navigable — both from the left
navigation panel and through section navigation controls. Additionally, it
validates the **Opsfolio Login functionality** to ensure users can securely
authenticate and access the system without UI or backend issues.

**Objectives**

- Ensure the Login button is clearly visible and functional.
- Validate successful authentication using valid credentials.
- Confirm redirection to the correct post-login page.
- Verify appropriate error messages for invalid credentials.
- Support automation for regression and continuous testing.
- Validate that Level 1 and Level 2 sections display completely and in the
  correct order.
- Confirm that navigation controls (Next/Previous) function correctly.
- Provide audit-ready evidence for navigation and control consistency.

**Risks**

- Login button missing or misaligned on UI.
- Authentication failures for valid users.
- Broken redirects post successful login.
- Missing or unclear error messages for invalid attempts.
- Automation scripts failing due to unstable DOM or dynamic IDs.
- Inconsistent navigation rendering per level.
- Misconfigured section lists after release.
- Caching or feature-flag discrepancies across environments.
- Broken navigation buttons or incorrect sequence transitions.

## Navigation Stability & Completeness

@id navigation-strategy

Ensure that the left navigation and section navigation controls in the CMMC
Self-Assessment remain stable and complete across different levels and test
cycles.

**Key Goals**

- Verify completeness of navigation structure.
- Validate navigation control functionality.
- Detect missing, extra, or broken navigation paths early.

**CMMC Self Assessment Implementation (feature request)**

```yaml HFM
doc-classify:
  role: requirement
requirementID: REQ-CMMC-001
title: "CMMC Self Assessment Implementation"
description: "Navigation structure completeness, navigation consistency, and readiness percentage accuracy for CMMC self-assessments."
```

**Requirement Overview**

1. Navigation Structure Completeness
2. Section Navigation Consistency
3. Dynamic Readiness Percentage Updates
4. Readiness Percentage Calculation Accuracy
5. 100% Completion Validation

**Acceptance Criteria**

1. All expected CMMC Level 1 and Level 2 sections must be visible in the left
   navigation panel and displayed in the correct predefined order, with no
   missing, extra, or misconfigured sections.
2. The **Previous** and **Next** buttons must navigate sequentially between
   sections in the correct order across all levels and cycles, without skipped,
   duplicated, broken, or inconsistent transitions.
3. Readiness percentage must update **immediately and dynamically** after
   completing a section, with no delay, UI lag, or need for manual refresh.
4. The readiness bar must calculate progress accurately based on the number of
   completed sections versus the total required sections, and the displayed
   percentage must match the expected computed value with no inconsistencies.
5. Once all CMMC Level 1 assessment sections are completed, the readiness
   percentage must display 100% completion with no incorrect or partial
   percentage shown.

### CMMC Navigation Verification

@id navigation-plan

Define validation and verification cycles to confirm structural integrity and navigational consistency for each CMMC level.

**Cycle Goals**

- Conduct manual verification for Level 1 and Level 2 navigation completeness.
- Capture evidence for audit reporting.
- Validate “Previous” and “Next” navigation transitions.

#### Navigation Visibility

@id navigation-visibility-suite

Verifies visibility and ordering of CMMC Level 1 and Level 2 sections.

**Scope**

- Left navigation visibility for both levels.
- Order validation for all sections.
- Detection of missing or unconfigured items.
- Audit evidence capture.

##### Verify readiness percentage reaches 100% after completing all sections

@id TC-CMMC-0005

```yaml HFM
doc-classify:
FII: TC-CMMC-0005
requirementID: REQ-CMMC-006
Priority: High
Tags: [CMMC Self-Assessment, Analytics - Self-Assessment Tool]
Scenario Type: Happy Path
```

**Description**

Ensure that the readiness percentage becomes 100% once all sections in the CMMC
Level 1 self-assessment are completed.

**Preconditions**

- [x] Valid user credentials are available.
- [x] User has access to the CMMC Level 1 Self-Assessment module.
- [x] All assessment sections are visible and accessible.

**Steps**

- [x] Login with valid credentials and verify that the landing page displays the
      CMMC Level 1 Self-Assessment section.
- [x] Complete all sections in the Level 1 Self-Assessment.
- [x] Observe the readiness percentage displayed.
- [ ] Verify that the readiness bar reaches 100%.

**Expected Results**

- [x] Readiness bar should display 100% completion after all sections are
      completed.
- [x] Percentage updates immediately without delay.
- [ ] No incorrect or partial percentage is shown.

###### Evidence

@id TC-CMMC-0005

```yaml HFM
doc-classify:
  role: evidence
cycle: 1.5
assignee: arun-ramanan
status: failed
```

**Attachment**

- [Results JSON](./evidence/TC-CMMC-0005/1.5/result.auto.json)
- [Readiness screenshot1](./evidence/TC-CMMC-0005/1.5/cmmc1.auto.png)
- [Readiness screenshot2](./evidence/TC-CMMC-0005/1.5/cmmc2.auto.png)
- [Run MD](./evidence/TC-CMMC-0005/1.5/run.auto.md)

**Issue**

```yaml HFM
doc-classify:
  role: issue
issue_id: BUG-CMMC-001
test_case_id: TC-CMMC-0005
title: "No incorrect or partial percentage is shown"
status: open
```

**Issue Details**

- [Bug Details](https://github.com/surveilr/surveilr/issues/354)

---
