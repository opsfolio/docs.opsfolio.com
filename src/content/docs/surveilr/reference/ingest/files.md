---
title: Ingest Files
description: Documentation for the resource surveillance CLI tool.
---

File ingestion in `surveilr` imports and processes files from a file system into a structured database for monitoring and analysis. This process is called walking the filesystem.
In essence, it involves scanning directories and files, then transferring their metadata and content into an RSSD. 

## Preparing for Ingestion
Before initiating the ingestion process, it's crucial to understand what files and directories will be processed. `surveilr` provides a powerful feature called `--dry-run` to simulate this process without making any changes. This step is essential for ensuring that only the desired files and directories are ingested into the target RSSD.

**Example**
```bash
# Preview files in the current working directory (CWD)
$ surveilr ingest files --dry-run

# Preview files in specific directories
$ surveilr ingest files --dry-run -r /other -r /other2
```

## Setting Up The RSSD
`surveilr` uses a default SQLite database named `resource-surveillance.sqlite.db` for storing file system state data. However, in environments with multiple surveillance databases, it's beneficial to distinguish each `RSSD` by including unique identifiers in the filename, such as the hostname. This setup facilitates the merging of databases with the [`surveilr admin merge-sql`](/surveilr/admin/merge) command.

```bash
# Setting a custom RSSD path with a unique identifier
$ export SURVEILR_STATEDB_FS_PATH="resource-surveillance-$(hostname).sqlite.db"

# or
# Set the custom path by passing it as a value to the `-d` argument
$ surveilr ingest files -d "resource-surveillance-$(hostname).sqlite.db"
```

## Performing File Ingestions
With `surveilr`, you can easily ingest files from the current working directory or any specified directories. This section covers the commands to perform these ingestions, including how to display statistics about the ingested data.

For a file tree represented below:
```txt
/my-files
├── project-a
│   ├── data.csv
│   └── config.yml
|   └── schema.json
├── project-b
│   ├── draft.docx
│   └── references.puml
```

**Examples**
```bash
# Ingest files from the CWD
$ cd my-files
$ surveilr ingest files

# Ingest files from specific directories by specifying a regex combination
$ surveilr ingest files -r my-files/project*

# Ingest files from the CWD and display statistics
$ surveilr ingest files --stats
```