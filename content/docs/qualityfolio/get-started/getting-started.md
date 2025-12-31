---
title: Quick Start Guide
description: This document provides step-by-step instructions to install and set up Qualityfolio, a Test Management as Code (TMaC) platform integrated with Surveilr.
---

This guide provides a complete, step-by-step walkthrough to help you install, configure, and successfully run your first Qualityfolio project. It covers prerequisites, environment setup, project structure, test authoring, execution, and how to interpret results. with Qualityfolio

Welcome to Qualityfolio. This guide helps you quickly set up your environment and run your first Markdown‑driven tests using Spry and the Runbook engine.

---

## Installation

To work with Spry and the runbook-based Qualityfolio framework, you need to install **Deno** and set up **Spry** in your system.

### Installation in a Linux Environment

1. Open your terminal and switch to your workspace directory:

   ```bash
   cd $HOME/workspaces
   ```

2. Install Deno using the following command:

   ```bash
   curl -fsSL https://deno.com/install.sh | sh
   ```

3. Verify your Deno installation:

   ```bash
   deno --version
   ```

4. Upgrade Deno to the latest version:

   ```bash
   deno upgrade
   ```

5. Clone the Spry repository:

   ```bash
   git clone https://github.com/programmablemd/spry.git github.com/programmablemd/spry
   ```

6. Verify the Spry installation by running:

   ```bash
   ../../../lib/runbook/cli.ts run Spryfile.md
   ```

7. Run Qualityfolio tests using:

   ```bash
   ../../../lib/runbook/cli.ts mdast tree qf-complex.md
   ```

---

## Folder Structure

A typical Qualityfolio project structure looks like this:

```bash
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

## Running Your First Test

From the integrated terminal inside the `qualityfolio` folder, run your first test using the following command:

```bash
../../../lib/runbook/cli.ts mdast tree qf-complex.md
```

Once executed, the framework will parse the Markdown structure, execute the test steps, and generate evidence automatically.

---

## Writing Tests in Markdown

Qualityfolio tests follow a structured Markdown hierarchy to ensure full traceability and machine-readable execution.

### Heading Hierarchy (Qualityfolio – Complex Model)

```
#   heading[depth="1"] → project
##  heading[depth="2"] → strategy
### heading[depth="3"] → plan
#### heading[depth="4"] → suite
##### heading[depth="5"] → case
###### heading[depth="6"] → evidence
```

Each test file must include the following frontmatter at the top of the document:

```yaml
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
```

---

## Test Case Structure Example

Below is a sample Markdown test structure:

```markdown
### Login Test Plan

#### TC-LOGIN-0001
- Open Login page
- Enter username and password
- Click Sign In

##### Evidence
- Test execution result
- Screenshot of error message
- Network logs
```

---

## YAML META / HFM Overrides

You can override classification at any level using `META` or `HFM` blocks.

Example:

```yaml
HFM:
  doc-classify:
    role: requirement
  requirementID: REQ-CMMC-001
  title: "CMMC Self Assessment Implementation"
  description: "Navigation structure completeness, navigation consistency, and readiness percentage accuracy for CMMC self-assessments."
```

---

## Evidence & Telemetry

### Evidence Folder

All execution artifacts are stored under:

```bash
support/assurance/qualityfolio/evidence/
```

Each test case generates its own folder containing:

* Execution logs
* Screenshots
* JSON results
* Network traces

---

## Example Project Files

Qualityfolio projects can range from simple to highly complex structures. You can explore ready-made examples based on real-world implementations.

**Reference Repository**

```
https://github.com/programmablemd/spry/tree/main/support/assurance/qualityfolio
```

These examples demonstrate:

* Header-based classification
* Hierarchical test design
* Evidence block patterns

---

## HTML UI Generation (Live Preview)

You can launch the server using the following command:

```bash
./spry.ts doc <markdown-files> --serve
```

Running this command loads the parsed Qualityfolio document(s) in your browser with:

* **Real-time ontology parsing**
* **Automatic live reload** whenever you save a file
* **A structured HTML UI** showing headings, roles, metadata, hierarchy, cases, and evidence
* **Built-in validation** of classification rules and document structure

This feature allows you to visually inspect and validate your Qualityfolio model directly from Markdown.

---

### Sample Terminal Output

When the server starts, a message similar to the following is displayed:

```
Listening on http://127.0.0.1:9876/
Serving ontology at http://127.0.0.1:9876 (Ctrl+C to stop)
Watching for changes in: qf-complex.md
```

You can click the link or open it in a browser to view the generated HTML interface.

---

### Serving a Single Markdown File

To generate the HTML UI for a single Qualityfolio document:

```bash
./spry.ts doc qf-complex.md --serve
```

A brief delay may occur while the UI is being built.

---

### Serving Multiple Files (Recommended for Full Model Review)

To generate a combined HTML UI for several Qualityfolio Markdown files:

```bash
./spry.ts doc qf-complex.md qf-large.md qf-medium.md qf-small.md Qualityfolio.md --serve
```

This HTML UI becomes the primary way to validate and review Qualityfolio documentation.
