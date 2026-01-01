---
title: Core Principles
---

Qualityfolio is built on a set of foundational principles that ensure consistency, auditability, and scalability across quality, security, and compliance operations. These principles enable teams to treat testing, evidence, and governance as first-class, version-controlled assets.

## 1. Markdown-First Authoring

All Qualityfolio artifacts — including **projects, strategies, plans, suites, cases, and evidence** — are authored in **Markdown**.

This approach provides:

* Human-readable and developer-friendly documentation
* Machine-executable structure for automation
* Easy collaboration through standard code review processes
* Long-term maintainability of test assets

Markdown becomes the single source of truth for quality and compliance intent.

## 2. Runbook Execution Layer

Qualityfolio uses a structured execution engine powered by `runbook/cli.ts`.

This layer:

* Interprets Markdown using **MDAST (Markdown Abstract Syntax Tree)**
* Translates test definitions into executable operational steps
* Standardizes execution behavior across manual and automated tests
* Ensures repeatable, predictable outcomes

Runbooks act as the bridge between written intent and real system behavior.

## 3. Evidence-First Observability

Qualityfolio is designed with **evidence as a primary output**, not an afterthought.

Every test execution produces structured, verifiable evidence that is captured in:

* A **SQLite telemetry database** for structured queries and reporting
* **File-based evidence folders** for logs, screenshots, and system artifacts

This ensures:

* Real-time visibility into test outcomes
* Tamper-resistance through immutability patterns
* Strong audit defensibility

## 4. Git-Native Workflow

Qualityfolio adopts a **Git-native operating model** for all quality and compliance assets.

This enables teams to use:

* Branching strategies for parallel workstreams
* Pull requests for peer review and approvals
* Version history for traceability and audits
* Native integration with CI/CD pipelines

All changes are transparent, reviewable, and governed by standard software delivery practices.

## 5. Classification-Driven Interpretation

Qualityfolio uses a **classification-driven architecture** to interpret document structure.

Each Markdown heading depth is mapped to a functional role using the `doc-classify` schema. This allows the system to:

* Automatically assign semantic meaning to document structure
* Map Markdown content into SQL tables
* Enable structured analytics and reporting
* Maintain consistency across large and complex test hierarchies

This principle turns unstructured text into structured, queryable data.

---

These core principles allow Qualityfolio to function as a scalable, evidence-driven governance platform rather than a traditional test management tool.
