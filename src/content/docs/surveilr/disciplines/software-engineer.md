---
title: Software Engineers
description: explanation on how how software engineers make use of surveilr.
---

As a software engineer you regularly produce `Work Product Artifacts ( WPAs )` such as source code, documentation, commits, e.t.c. `Surveilr` can help you gather compliance evidences from these artifacts without having to worry about filling compliance forms. Below are some examples of `WPAs` that surveilr can help gather compliance evidences from;

## Source Code

A source code contains folders and files which means you can execute `surveilr ingest files -r source-code-path` which then processes all files in your source code and stores it in an RSSD under the `uniform resource` table. To learn more about `surveilr ingest files <COMMAND>`, visit [ingest files](/surveilr/reference/ingest/files#ingest-files).

#### Creating RSSD

Suppose your source code is folder is named `docs.opsfolio.com` and it is located within your current working directory, you can ingest the files in this folder by executing this script:

```bash
$ surveilr ingest files -r docs.opsfolio.com
```

if otherwise, specify the path to the folder as shown below:

```bash
$ surveilr ingest files -r <PATH>/docs.opsfolio.com
```

The outcome of the execution of this script above is a `resource-surveillance.sqlite.db` file ( known as `resource surveillance state database - RSSD` ) created in your root directory. The database consist of several tables which can be listed out by executing `sqlite3 resource-surveillance.sqlite.db` which navigates into an sqlite environment in order to run SQL queries against your database ( Note: make sure you have sqlite3 installed before: `sudo apt install sqlite3` ), and run the command `.tables` as shown below which outlines out all the tables that is found in the RSSD.

```bash
sqlite> $ .table
assurance_schema
behavior
code_notebook_cell
code_notebook_kernel
code_notebook_state
device
sqlpage_files
uniform_resource
uniform_resource_transform
ur_ingest_resource_path_match_rule
ur_ingest_resource_path_rewrite_rule
ur_ingest_session
ur_ingest_session_file_issue
ur_ingest_session_files_stats
ur_ingest_session_files_stats_latest
ur_ingest_session_fs_path
ur_ingest_session_fs_path_entry
ur_ingest_session_imap_account
ur_ingest_session_imap_acct_folder
ur_ingest_session_imap_acct_folder_message
ur_ingest_session_plm_account
ur_ingest_session_plm_acct_label
ur_ingest_session_plm_acct_project
ur_ingest_session_plm_acct_project_issue
ur_ingest_session_plm_acct_relationship
ur_ingest_session_plm_comment
ur_ingest_session_plm_issue_reaction
ur_ingest_session_plm_issue_type
ur_ingest_session_plm_milestone
ur_ingest_session_plm_reaction
ur_ingest_session_plm_user
ur_ingest_session_task
ur_ingest_session_tasks_stats
ur_ingest_session_tasks_stats_latest
sqlite>
```

The `uniform_resource` table is the table that contains the ingested files which you can execute SQL queries against in order to retrieve data that serves as compliance evidences.  
Suppose you want to check the columns present in the `uniform_resource` table and their structure , you can execute the sql query below:

```bash
sqlite> $ pragma table_info(uniform_resource);
```

which then returns this result:

```bash
0|uniform_resource_id|VARCHAR|1||1
1|device_id|VARCHAR|1||0
2|ingest_session_id|VARCHAR|1||0
3|ingest_fs_path_id|VARCHAR|0||0
4|ingest_imap_acct_folder_id|VARCHAR|0||0
5|ingest_issue_acct_project_id|VARCHAR|0||0
6|uri|TEXT|1||0
7|content_digest|TEXT|1||0
8|content|BLOB|0||0
9|nature|TEXT|0||0
10|size_bytes|INTEGER|0||0
11|last_modified_at|TIMESTAMPTZ|0||0
12|content_fm_body_attrs|TEXT|0||0
13|frontmatter|TEXT|0||0
14|elaboration|TEXT|0||0
15|created_at|TIMESTAMPTZ|0|CURRENT_TIMESTAMP|0
16|created_by|TEXT|0|'UNKNOWN'|0
17|updated_at|TIMESTAMPTZ|0||0
18|updated_by|TEXT|0||0
19|deleted_at|TIMESTAMPTZ|0||0
20|deleted_by|TEXT|0||0
21|activity_log|TEXT|0||0
```

### Examples

The following example shows various kinds of SQL queries that can be used to query the database to retrieve compliance evidences.

-

```bash
# Query
sqlite> $ select content from uniform_resource where uri="/mnt/c/Users/Hp/Documents/VisualStudioCode/projects/YEAR_2024/OPSFOLIO/docs.opsfolio.com/package.json";

# RESULT

{
  "name": "docs.opsfolio.com",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/check": "^0.5.10",
    "@astrojs/starlight": "^0.21.5",
    "astro": "^4.6.2",
    "sharp": "^0.32.5",
    "typescript": "^5.2.2"
  }
}

```

-

```bash

#QUERY
sqlite> $ select * from uniform_resource where uri="/mnt/c/Users/Hp/Documents/VisualStudioCode/projects/YEAR_2024/OPSFOLIO/docs.opsfolio.com/package.json";

# RESULT
01HWYW1HQMVVBANXFXGKYP5KFR|01HWT4PF3VJSSQH310H67FF4CN|01HWYW1GPEMX3F9S98YB6K9MT6|01HWYW1GQ7T37W9GH5Y84VRAVS|||/mnt/c/Users/Hp/Documents/VisualStudioCode/projects/YEAR_2024/OPSFOLIO/docs.opsfolio.com/package.json|2c6e3ce62332e5e193107273028d4c4770aacc03|{
  "name": "docs.opsfolio.com",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/check": "^0.5.10",
    "@astrojs/starlight": "^0.21.5",
    "astro": "^4.6.2",
    "sharp": "^0.32.5",
    "typescript": "^5.2.2"
  }
}
|json|430|2024-04-28 19:36:36.953083300 UTC||||2024-05-03 09:19:55|UNKNOWN|||||


```

## Unit Tests

`surveilr` can be used to store the result of running a test in a RSSD. Running a test is an action categorized under task ingestion. To learn more about `surveilr ingest tasks`, visit [ingest tasks](/surveilr/reference/ingest/tasks#task-ingestion).
