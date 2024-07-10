---
title: Resource Surveillance Roadmap
description: surveilr roadmap
---
# Introduction

Welcome to the page for the Surveilr Roadmap! Our goal with this part is to give our users an open picture of our ongoing work and planned features. In-depth details on our next weekly releases as well as our longer-term goals and concepts may be found here. Our intention is to keep you updated and involved as we work to add new features and capabilities to Surveilr. We'll be updating this plan every week so you always have the most recent details regarding our development path.


## Weekly Releases (Next 4 Weeks)

### Week 1 (July 8 - 12, 2024)

1. Non-Interactive Authentication for Microsoft 365 Integration
   - [ ] Non-Interactive Authentication
     - [ ] Automatic retrieval of access and refresh tokens.
     - [ ] Secure cache for refresh tokens.
     - [ ] Command: `surveilr ingest imap microsft-365 -i="<CLIENT_ID>" -s="<CLIENT SECRET>" -t="<TENANT_ID>"`
    - [ ] Interactive Authentication
       - [ ] Require either `-m auth-code` or `-m device-code` to initiate interactive authentication.
  
### Week 2 (July 15 - 19, 2024)

1. 1. **Remote Automated Osquery Setup for `surveilr`**
    - Implement a remote automated setup for Osquery within `surveilr` using [`xxh`](https://github.com/xxh/xxh), enabling streamlined deployment and configuration.
2. **RSSD Schema Migration**
    - Utilize Atlas with `surveilr` SQL notebooks to create migrations for RSSDs, ensuring smooth transitions and updates.


### Week 3 (July 22 - 26, 2024)

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



