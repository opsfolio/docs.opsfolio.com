---
title: Architecture Overview
---

This page explains the architecture of Qualityfolio and how it transforms declarative Markdown files into executable, traceable test workflows.

Qualityfolio uses a fully declarative, Markdown-driven execution model powered by Runbooks, MDAST processing, and SQL‑backed telemetry. At the core of the system is `lib/runbook/cli.ts`, which provides a unified execution layer for all Markdown-based test definitions.

---

## Architectural Philosophy

Qualityfolio is designed around three key principles:

1. Declarative by Design – Test logic is defined in Markdown, not in imperative scripts.
2. Traceability First – Every action, step, and result is recorded as structured evidence.
3. Execution as Data – MDAST is used as an intermediate, machine-readable format that drives execution.

This approach enables version‑controlled testing, human‑readable specifications, and machine‑executable workflows from the same source of truth.

---

## Core Components

### lib/runbook/cli.ts

This is the primary execution engine of Qualityfolio. It orchestrates the entire lifecycle of test execution.

Responsibilities include:

* Parsing Markdown via MDAST
* Applying document classification rules
* Triggering executable test steps
* Writing structured telemetry records to SQL databases

### CLI Dispatcher

The CLI layer is responsible for:

* Handling user commands
* Routing file paths
* Invoking the appropriate execution pipelines

It acts as the entry point for all user‑initiated operations.

### MDAST Parser

The MDAST parser converts Markdown content into a machine‑readable abstract syntax tree (AST). This enables:

* Programmatic traversal of document structure
* Role‑based classification of headings and blocks
* Deterministic execution of steps

### SQLite Telemetry Database

A local SQLite database (`*.sqlite.db`) is used to store:

* Execution metadata
* Step‑level pass/fail status
* Timestamps and durations
* Structured evidence references

### Evidence Folder

The file‑based evidence store captures physical artifacts generated during execution, including:

* Screenshots
* Log files
* JSON outputs
* Network traces

---

## Execution Flow

The standard execution flow inside Qualityfolio follows this logical path:

Markdown Test → lib/runbook/cli.ts → MDAST → Execution → Evidence → SQL → Reports

The typical command used to trigger execution from the `qualityfolio` folder is:

```bash
../../../lib/runbook/cli.ts mdast tree qf-complex.md
```

---

## Evidence Storage Architecture

Qualityfolio uses a hybrid storage model:

1. File‑based Storage

   * Located under the `evidence/` folder
   * Stores binary and large artifacts

2. Database‑backed Storage

   * Implemented using `*.sqlite.db`
   * Stores normalized, query‑ready telemetry

This dual model enables both human inspection and machine analytics.

---

## Execution Pipeline (Logical View)

```
Markdown File
   ↓
runbook/cli.ts
   ↓
MDAST Parsing
   ↓
Execution Engine
   ↓
Evidence Generation
   ↓
SQL Telemetry
   ↓
Reports & Dashboards
```

---

## Project Folder Structure

The expected project layout enforces consistency and discoverability:

```
support/
  assurance/
    qualityfolio/
      evidence/
      qf-small.md
      qf-medium.md
      qf-large.md
      qf-complex.md
      spry.ts
      Spryfile.md
lib/
  runbook/
    cli.ts
```

---

## How the Components Work Together

When a user runs a test:

1. The CLI receives the command and validates the input file.
2. The Markdown file is parsed into an MDAST structure.
3. Document classification rules map headings to execution roles.
4. The execution engine walks the AST and executes each step.
5. Evidence is written to both the filesystem and the telemetry database.
6. Reports and dashboards can then query the SQL telemetry layer.

This architecture ensures end‑to‑end traceability from specification to execution and reporting.