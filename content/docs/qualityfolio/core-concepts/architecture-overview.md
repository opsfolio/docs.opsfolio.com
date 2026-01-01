---
title: Architecture Overview
---

# Architecture Overview

Qualityfolio is a **Test‑Management‑as‑Code (TMaC)** platform built on a fully declarative, Markdown‑native architecture. It combines **Spry** for ontology‑driven parsing and orchestration, **Surveilr** for ingestion and ETL, and **SQLPage** for lightweight, query‑driven dashboards.

All test artifacts, execution evidence, telemetry, and dashboards are derived from structured files under version control, making Qualityfolio reproducible, auditable, and automation‑friendly.

---

## Architectural Philosophy

Qualityfolio is guided by the following core principles:

1. **Test Management as Code (TMaC)**
   Test plans, cases, cycles, execution evidence, and dashboards are managed as code artifacts rather than through a UI‑centric system.

2. **Markdown as the Source of Truth**
   Markdown files are both human‑readable and machine‑processable. The same documents drive validation, database generation, and visualization.

3. **Ontology‑Driven Processing**
   Spry parses Markdown into a structured ontology (AST/MDAST), enabling classification, hierarchy validation, and deterministic execution.

4. **Data‑First Reporting**
   All execution and traceability data is normalized into SQLite, enabling flexible analytics and dashboards without additional backend services.

---

## High‑Level Architecture

```text
Markdown Test Artifacts & Evidence
              │
              ▼
        Spry (Ontology Engine)
              │
              ▼
      Surveilr (Ingestion & ETL)
              │
              ▼
     SQLite Telemetry Database
              │
              ▼
        SQLPage Dashboards
```

---

## Core Components

### Spry (Ontology & Orchestration Engine)

Spry is the central execution and orchestration layer in Qualityfolio. It is responsible for:

* Parsing Markdown test artifacts
* Applying document classification and hierarchy rules
* Validating structure and metadata
* Running runbooks (`spry rb run`)
* Orchestrating SQLPage pipelines (`spry sp spc`)
* Providing live HTML previews via the Axiom Web UI

Spry treats documents as executable models rather than imperative scripts.

---

### Surveilr (Ingestion & ETL Engine)

Surveilr handles ingestion, transformation, and normalization of Qualityfolio data. It:

* Ingests JSON execution evidence and metadata
* Applies SQL‑based ETL logic
* Produces a normalized SQLite database
* Bundles SQLPage as the embedded reporting runtime

Surveilr ensures that raw artifacts are transformed into clean, query‑ready relational data.

---

### SQLPage (Dashboard & UI Layer)

SQLPage provides the Test Management Dashboard. It:

* Queries the generated SQLite database
* Renders dashboards defined using Markdown + SQL
* Runs as a lightweight local web server
* Supports live reload when used with Spry watch mode

SQLPage introduces no additional backend services and operates directly on SQLite.

---

## Document & Data Model

### Test Artifacts (Markdown)

Test artifacts are authored under the `test-artifacts/` directory using structured Markdown. These artifacts define:

* Project and test hierarchy
* Test plans, suites, cycles, and cases
* Metadata and identifiers
* Evidence linkage patterns

Spry parses these artifacts into an ontology used consistently across validation, database generation, and UI rendering.

---

### Execution Evidence (Filesystem)

Execution evidence is stored under the `evidence/` directory and may include:

* Result JSON files
* Auto‑generated run Markdown
* Screenshots and binary attachments

Evidence files are ingested by Surveilr and referenced within the SQLite database for traceability.

---

### SQLite Telemetry Database

The generated SQLite database (`resource-surveillance.sqlite.db`) is the **system of record**. It stores:

* Test hierarchy and metadata
* Execution status and timestamps
* Case‑ and cycle‑level results
* Evidence references and traceability mappings

This database is queried directly by SQLPage and can be inspected using any SQLite‑compatible tool.

---

## Folder Structure

Qualityfolio enforces a predictable and discoverable workspace layout:

```text
ASSURANCE-PRIME/
├── support/
│   └── assurance/
│       └── qualityfolio/
│           ├── evidence/
│           │   ├── TC-GLUE-001/
│           │   │   └── 1.1/
│           │   │       ├── result.auto.json
│           │   │       └── run.auto.md
│           │   └── TC-GLUE-002/
│           │       └── 1.1/
│           │           ├── loginButtonClick.png
│           │           ├── result.auto.json
│           │           └── run.auto.md
│           ├── sqlpage/
│           │   └── sqlpage.json                  # runtime configuration file for SQLPage, auto-generated
│           ├── test-artifacts/
│           │   └── example-artifact.md
│           ├── qualityfolio-json-etl.sql         # SQL ETL script for Qualityfolio data
│           ├── qualityfolio.md                   # SQLPage Markdown page (DB config + queries)
│           └── resource-surveillance.sqlite.db   # Database generated
```

This structure keeps artifacts, evidence, ETL logic, database, and dashboards co‑located and version‑controlled.

---

## End‑to‑End Execution Flow

### 1. Authoring

* Test artifacts are authored or updated under `test-artifacts/`
* Execution evidence is generated under `evidence/`

### 2. Ingestion & Database Generation

```bash
spry rb run qualityfolio.md
```

This step:

* Parses test artifacts
* Ingests evidence files
* Executes SQL‑based ETL via Surveilr
* Produces `resource-surveillance.sqlite.db`

---

### 3. Dashboard Generation

```bash
spry sp spc --fs dev-src.auto --destroy-first --conf sqlpage/sqlpage.json --md qualityfolio.md
spry sp spc --fs dev-src.auto --destroy-first --conf sqlpage/sqlpage.json --md qualityfolio.md --watch
```

This step:

* Configures SQLPage
* Loads dashboard queries from `qualityfolio.md`
* Enables continuous rebuilds in watch mode

---

### 4. Visualization

```bash
sqlpage
```

* Dashboards are served at `http://localhost:9227`
* Metrics, traceability, and execution details are displayed live

---

## HTML UI & Live Validation

Qualityfolio provides a live HTML UI for authoring and validation:

```bash
spry axiom web-ui test-artifacts/example-artifact.md
```

This UI supports:

* Real‑time ontology parsing
* Live reload on file save
* Structural and classification validation
* Visual inspection of hierarchy, roles, and metadata

This capability is intended for **design‑time validation**, not execution.

---

## Architectural Summary

Qualityfolio’s architecture is:

* **Declarative** – No imperative test scripts
* **File‑centric** – Everything is version‑controlled
* **Ontology‑driven** – Structure defines behavior
* **Data‑first** – SQLite is the analytics backbone
* **UI‑optional** – Dashboards are generated, not manually curated

This architecture enables scalable, auditable, and automation‑ready test management aligned with modern DevOps and CI/CD practices.
