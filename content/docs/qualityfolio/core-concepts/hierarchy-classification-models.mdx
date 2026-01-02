---
title: Heading Hierarchy & Classification Models
description: This document explains the heading hierarchy and classification models used in Qualityfolio to interpret Markdown documents into structured, queryable data.
---

Qualityfolio uses a strict heading–role classification system to interpret Markdown-based test documentation. Each heading in a Markdown file is mapped to a specific assurance role. This mapping allows the execution engine to understand structure, intent, and execution order.

## Assurance Roles

The following roles are used across all hierarchy models:

* project – Top-level context for the work
* strategy – Governance or compliance strategy
* plan – Tactical execution plan
* suite – Logical grouping of related tests
* case – Individual test case
* evidence – Proof of execution and results

These mappings power:

* Execution hierarchy
* Evidence extraction
* SQL telemetry
* Cross-layer traceability
* Audit-ready reporting

---

## YAML Frontmatter Configuration

All hierarchy models are configured using YAML frontmatter via the `doc-classify` schema.

Example:

```yaml
doc-classify:
  - select: heading[depth="1"]
    role: project
  - select: heading[depth="2"]
    role: case
```

---

## Supported Hierarchy Models

Qualityfolio supports four hierarchy models based on documentation complexity:

1. Small
2. Medium
3. Large
4. Complex

---

## Small Model (qf-small.md)

### Purpose

Designed for lightweight and standalone validations.

### Structure

```
# Project
## Case
### Evidence
```

### Role Mapping

```yaml
doc-classify:
  - select: heading[depth="1"]
    role: project
  - select: heading[depth="2"]
    role: case
  - select: heading[depth="3"]
    role: evidence
```

### Best For

* Simple UI or API checks
* One-flow validations
* Minimal evidence requirements

---

## Medium Model (qf-medium.md)

### Purpose

Adds logical grouping using test suites.

### Structure

```
# Project
## Suite
### Case
#### Evidence
```

### Role Mapping

```yaml
doc-classify:
  - select: heading[depth="1"]
    role: project
  - select: heading[depth="2"]
    role: suite
  - select: heading[depth="3"]
    role: case
  - select: heading[depth="4"]
    role: evidence
```

### Best For

* Regression packs
* Feature-level testing
* Multi-step validations

---

## Large Model (qf-large.md)

### Purpose

Built for enterprise test repositories with formal planning.

### Structure

```
# Project
## Plan
### Suite
#### Case
##### Evidence
```

### Role Mapping

```yaml
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
```

### Best For

* Multi-plan repositories
* DevSecOps pipelines
* Modular test architecture

---

## Complex Model (qf-complex.md)

### Purpose

Designed for high-compliance and audit-heavy environments.

### Structure

```
# Project
## Strategy
### Plan
#### Suite
##### Case
###### Evidence
```

### Role Mapping

```yaml
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
```

### Best For

* SOC2, ISO27001, CMMC, PCI-DSS
* Regulatory audits
* Governance-heavy programs

---

## How Qualityfolio Uses Hierarchies

The Spry runbook engine converts Markdown into structured assurance data.

### Execution Order

Heading depth controls parent → child execution flow.

### Evidence Handling

All evidence blocks are treated as first-class audit artifacts.

### SQL Telemetry

Structured records are generated for:

* project
* strategy
* plan
* suite
* case
* evidence

### Traceability Graph

Qualityfolio automatically builds traceability matrices used for:

* Coverage reporting
* Compliance mapping
* Risk analysis
* Dashboards

---

## Metadata Overrides

You can override default roles using HFM blocks.

Example:

```yaml HFM
doc-classify:
  role: issue
issue_id: BUG-CMMC-001
test_case_id: TC-CMMC-0005
title: "No incorrect or partial percentage is shown"
status: open
```

---

## Best Practices

* Do not skip heading levels
* Always include valid YAML frontmatter
* Keep evidence only at the lowest level
* Use meaningful, concise headings
* Prefer Complex and Large models for compliance work
