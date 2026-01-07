---
title: "Quick Start"
date: "2026-01-02"
author: "Documentation Team"
description: "Quick Start."
---

# Getting Started

## Step One

- Ensure you have generated an RSSD using EAA or that you already own an RSSD.
- Write SQL views and queries in `.sql` files and supporting queries in a Markdown file.
- Ingest these SQL views and queries into your RSSD and view the Web UI using Surveilr.

### First Project

- Create a directory for your project:

```bash
mkdir project-tem
```

- Copy or place your RSSD file into this directory (for example: `tem.sqlite.db`).
- Create a `sqlpage.json` file inside a sqlpage folder:

```bash
mkdir sqlpage && cd sqlpage

cat <<EOF > sqlpage.json
{
  "database_url": "sqlite://tem.sqlite.db?mode=rwc",
  "allow_exec": true,
  "port": 9227
}
EOF
```
- Write your SQL views in a file with a .sql extension (for example: `stateless.sql`).

- Write SQL queries that call these views inside a Markdown file (for example: `Spryfile.md`).

- Create interpretations and store them inside a folder named `interpretation` at the same level.

```
project-tem/
├─ Spryfile.md
├─ stateless.sql
├─ tem.sqlite.db
├─ interpretation/
   └─ *.md
├─ sqlpage/
   └─ sqlpage.json

```
Add the following executable blocks at the top of Spryfile.md.
#### Ingest Interpretations into sqlite.db

```bash ingest --descr "Use Surveilr to ingest EAA and Interpretation results into SQLite."
#!/usr/bin/env bash
surveilr ingest files -r interpretation -d tem.sqlite.db
```

#### Ingest SQL Views from stateless.sql into sqlite.db

```bash sql_views --descr "Load SQL views from stateless.sql"
#!/usr/bin/env bash
cat stateless.sql | sqlite3 tem.sqlite.db
```

#### Ingest SQL Query from Spryfile.md into sqlite.db

```bash sql_query --descr "Run using spry."
#!/usr/bin/env bash
spry sp spc --md Spryfile.md  --package --conf sqlpage/sqlpage.json | sqlite3 tem.sqlite.db
```

#### View the sqlite.db Locally Using Surveilr
 
```bash surveilr --descr "View via Surveilr web UI."
#!/usr/bin/env bash
surveilr web-ui -d tem.sqlite.db
```
#### Access the Web UI

Use the following command to start the local Web UI and open it in your browser:

```bash site_url --descr "Start the Web UI locally"
#!/usr/bin/env bash
echo "Visit http://localhost:9227"
```

## Final command to run all scripts and launch the Web UI:

```bash
spry rb run Spryfile.md --verbose rich
```
