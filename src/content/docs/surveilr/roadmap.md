---
title: Resource Surveillance Roadmap
description: surveilr roadmap
---
# Introduction

Welcome to the page for the Surveilr Roadmap! Our goal with this part is to give our users an open picture of our ongoing work and planned features. In-depth details on our next weekly releases as well as our longer-term goals and concepts may be found here. Our intention is to keep you updated and involved as we work to add new features and capabilities to Surveilr. We'll be updating this plan every week so you always have the most recent details regarding our development path.


## Weekly Releases (Next 4 Weeks)

### Week 1 (July 15 - 19, 2024)
1. PII and PHI Deidentification Strategy: Implementation of a scriptable deidentification process through SQL scripts for PII and PHI data stored in the SQLite database. Listed below are the SQLite functions to be implemented.
   - [x] `hash`: Hash data with the SHA256 algorithm.
   - [x] `mask_address`: Mask address with asterisks "*".
   - [x] `mask_dob`: Mask DOBs with "#".
   - [x] `mask_phone`: Replace phone number characters with "#".
   - [x] `anonymize_date`: Change a date to a random valid date.
   - [x] `mask_financial`: Mask any financial data or number.
   - [x] `anonymize_email`: Replaces the name part of the email while leaving the host intact. 
   - [x] `generalize_age`: Generalize ages or numbers.
   - [x] `mask`: Replace string characters with series of "*".
   - [x] `anonymize_name`: Replace random numeric free strings with strings.
   - [ ] `anonymize_ssn`
   - [ ] 
  
### Week 2 (July 22 - 26, 2024)

1. **Remote Automated Osquery Setup for `surveilr`**
    - Implement a remote automated setup for Osquery within `surveilr` using [`xxh`](https://github.com/xxh/xxh), enabling streamlined deployment and configuration.
1. **RSSD Schema Migration**
    - Utilize Atlas with `surveilr` SQL notebooks to create migrations for RSSDs, ensuring smooth transitions and updates.


### Week 3 (July 22 - August 2, 2024)

1. **PII and PHI De-identification Strategy for "Edge" Data Ingestions**
    1. Non-Interactive Authentication for Microsoft 365 Integration
   - [ ] Non-Interactive Authentication
     - [ ] Automatic retrieval of access and refresh tokens.
     - [ ] Secure cache for refresh tokens.
     - [ ] Command: `surveilr ingest imap microsft-365 -i="<CLIENT_ID>" -s="<CLIENT SECRET>" -t="<TENANT_ID>"`
    - [ ] Interactive Authentication
       - [ ] Require either `-m auth-code` or `-m device-code` to initiate interactive authentication.
  
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



