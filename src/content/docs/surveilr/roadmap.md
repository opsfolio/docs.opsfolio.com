---
title: Resource Surveillance Roadmap
description: surveilr roadmap
---
# Introduction

Welcome to the page for the Surveilr Roadmap! Our goal with this part is to give our users an open picture of our ongoing work and planned features. In-depth details on our next weekly releases as well as our longer-term goals and concepts may be found here. Our intention is to keep you updated and involved as we work to add new features and capabilities to Surveilr. We'll be updating this plan every week so you always have the most recent details regarding our development path.


## Weekly Releases (Next 4 Weeks)

### Week 1 (June 24 - 28, 2024)

1. [x] **Implement Email Filtering Capabilities**: Support for multiple filters while ingesting content from email boxes through IMAP.
    - [x] `--subject`: Filter messages that contain the specified string in the SUBJECT field.
    - [x] `--cc`: Filter messages that contain the specified string in the CC field.
    - [x] `--bcc`: Filter messages containing the specified BCC field string.
    - [x] `--filter-text`: Messages that contain the specified string in the header or body of the message.
    - [x] `--from`: Filter messages that contain the specified string in the FROM field.
    - [x] `--to`: Filter messages that contain the specified string in the TO field.
    - [x] `--sent-on`: Messages whose [RFC-2822] Date: header (disregarding time and timezone) is within the specified date. Note: the format must be like: 1-Feb-1994. Check this RFC (https://datatracker.ietf.org/doc/html/rfc2822) for more details.
    
2. [ ] **`.tm7` File Ingestion and Transformation Support**: Add support for ingesting `tm7` files and automatically transforming them to XML files which can then also be transformed into JSON.

3. [ ] **Fix `surveilr`'s Windows Release**

### Week 2 (July 1 - 5, 2024)

1. **Remote Automated Osquery Setup for `surveilr`**
    - Implement a remote automated setup for Osquery within `surveilr` using [`xxh`](https://github.com/xxh/xxh), enabling streamlined deployment and configuration.

2. **Integrate DataFusion in Place of UDI PGP Custom Query Engine**
    - Replace the UDI PGP query engine with DataFusion to enhance query performance and capabilities.
  
### Week 3 (July 8 - 12, 2024)

1. **RSSD Schema Migration**
    - Utilize Atlas with `surveilr` SQL notebooks to create migrations for RSSDs, ensuring smooth transitions and updates.
    
2. **Fix MacOS Release**
    - Address and resolve issues with the `surveilr` MacOS release to ensure compatibility and functionality.

### Week 4 (July 15 - 19, 2024)

1. **PII and PHI De-identification Strategy for "Edge" Data Ingestions**
    - Implement a robust de-identification process for PII and PHI data stored in our SQLite database. Use Rust and Rusqlite or consider DuckDB or other external tools if internal capabilities are insufficient.
    - De-identification is crucial for protecting sensitive information and ensuring compliance with privacy regulations. This strategy will outline the methods and best practices for de-identifying PII and PHI within our application.
  
## Longer-term Projections (Next 3 Months)

#### August
- **Integrate DuckDB Library to Orchestrate Ingestion Center Functionality**
    - Develop a new `surveilr transform` command with options for `--csv`, `--excel`, `--parquet`, and `--all`. This command will process all `uniform_resource` entries that match the specified file formats requested by the user. Currently, `surveilr` performs some transformations like converting `*.xml` to JSON and also `*.csv` with the `transform csv` command, but this currently uses the inbuilt `csv` conversion in `rusqlite`. The major aim of this new `transform tabular` feature will be to  perform ETL/ELT to tables.
    - When the `--sql` flag is used, generate DuckDB SQL to `STDOUT`. When the `--attach` flag is used, include `ATTACH` to the RSSD.
    - Ensure all code functions correctly with an external DuckDB call. If the `--sql` flag is not used, generate DuckDB SQL and utilize the Rust crate to execute the DuckDB SQL via `ATTACH` for the actual ETL/ELT process.

#### Month 2
- In progress...

#### Month 3
- In progress...



