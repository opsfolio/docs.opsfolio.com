---
title: Software Engineers
description: explanation on how how software engineers make use of surveilr.
---

As a software engineer you regularly produce `Work Product Artifacts ( WPAs )` such as source code, documentation, commits, e.t.c. `Surveilr` can help you gather compliance evidences from these artifacts without having to worry about filling compliance forms. Below are some examples of `WPAs` that surveilr can help gather compliance evidences from;

## Source Code

A source code contains folders and files which means you can perform a [file ingestion](/surveilr/reference/ingest/files#ingest-files) on it, which then processes all files in your source code and stores it in an [RSSD](/surveilr/reference/concepts/resource-surveillance) under the [uniform resource](http://localhost:4321/surveilr/reference/db/surveilr-state-schema/uniform_resource) table. Your end goal is to be able to query the generated `RSSD` for compliance proofs using a structured query language (SQL).

### Prerequisite

Ensure you have `sqlite3` installed on your machine before attempting to execute an SQL query.  


### Examples

The following examples demonstrates the use of SQL to retrieve compliance evidences fom the generated `RSSD` as a result of executing `surveilr ingest` command on a **`Rust`** source code (folder) named `resource-surveillance`

**1. Retrieve a Uniform Resource record by uniform_resource_id**

```bash
sqlite> $  SELECT * FROM uniform_resource WHERE uniform_resource_id = '01HXD14R8W247657GTNCVKC0AK';

01HXD14R8W247657GTNCVKC0AK|01HXD14MZ2J282TT831JWK6DSR|01HXD14MZ68QYMKEPTETPM1EK8|01HXD14MZ6ZC8AYFMWTKB694RR|||/home/a_temiye/resource-surveillance/src/udi_pgp/src/simulations/responses/pg_description.json|dc1805af867dbd312063895b2d2ce42b315791e4|[
        {
                "oid": 13360,
                "nspname": "information_schema",
                "nspowner": 10,
                "nspacl": "{postgres=UC\/postgres,=U\/postgres}",
                "description": "NULL"
        },
        {
                "oid": 11,
                "nspname": "pg_catalog",
                "nspowner": 10,
                "nspacl": "{postgres=UC\/postgres,=U\/postgres}",
                "description": "system catalog schema"
        },
        {
                "oid": 99,
                "nspname": "pg_toast",
                "nspowner": 10,
                "nspacl": "NULL",
                "description": "reserved schema for TOAST tables"
        },
        {
                "oid": 2200,
                "nspname": "public",
                "nspowner": 10,
                "nspacl": "{postgres=UC\/postgres,=UC\/postgres}",
                "description": "standard public schema"
        }
]|json|605|2024-05-08 21:06:40.449207418 UTC||||2024-05-08 21:18:25|UNKNOWN|||||
```

**2.  Retrieve Uniform Resources by Device ID and Nature**

```bash
sqlite> $  SELECT content FROM uniform_resource WHERE uniform_resource_id = '01HXD14R8WEGTZ061Q5YA216V8' AND nature = 'json';


[
        {
                "name" : "allow_in_place_tablespaces",
                "setting" : "off",
                "unit" : null,
                "category" : "Developer Options",
                "short_desc" : "Allows tablespaces directly inside pg_tblspc, for testing.",
                "extra_desc" : null,
                "context" : "superuser",
                "vartype" : "bool",
                "source" : "default",
                "min_val" : null,
                "max_val" : null,
                "enumvals" : null,
                "boot_val" : "off",
                "reset_val" : "off",
                "sourcefile" : null,
                "sourceline" : null,
                "pending_restart" : false
        },
        {
                "name" : "allow_system_table_mods",
                "setting" : "off",
                "unit" : null,
                "category" : "Developer Options",
                "short_desc" : "Allows modifications of the structure of system tables.",
                "extra_desc" : null,
                "context" : "superuser",
                "vartype" : "bool",
                "source" : "default",
                "min_val" : null,
                "max_val" : null,
                "enumvals" : null,
                "boot_val" : "off",
                "reset_val" : "off",
                "sourcefile" : null,
                "sourceline" : null,
                "pending_restart" : false
        },
        ......
]

```

**3.  Retrieve Uniform Resource Details and Corresponding Transforms**

```bash
sqlite> $ SELECT ur.uniform_resource_id AS ur_id, ur.uri AS ur_uri, ur.content_digest AS ur_content_digest
FROM uniform_resource ur 
INNER JOIN uniform_resource_transform urt 
ON ur.uniform_resource_id = urt.uniform_resource_id;


01HXD14N0HVYSXJAQXTAMV1FGS|/home/a_temiye/resource-surveillance/support/test-fixtures/xml-to-json-mtm.xml|842777b4a802953315f3fb5357c54e79e3ed57ae
01HXD14N0V6T52DJEQTB8TGJCP|/home/a_temiye/resource-surveillance/support/test-fixtures/sample-threat-model-mtm.xml|01327e16daef5c88c2ec512862d337939810299f
```



## Unit Tests

`surveilr` can be used to store the result of running a unit test in a `RSSD`. Running a test is an action categorized under task ingestion. To learn more about `surveilr ingest tasks`, visit [ingest tasks](/surveilr/reference/ingest/tasks#task-ingestion).

Suppose we want to store the result of executing the unit tests in `resource-surveillance` source code which is written in `rust` in our `RSSD`, the command below is executed:

```bash
$  echo "cargo test --lib --bins -- --test-threads=1" | surveilr ing
est tasks
```

As earlier mentioned, Your end goal is to be able to query the generated RSSD for compliance proofs using a structured query language (SQL).

### Example

The example below demonstrates the use of SQL to retrieve compliance evidence fom the generated `RSSD` as a result of piping `surveilr ingest tasks` with the command that runs the unit test.

**1. Retrieve Test Results from Uniform Resource Table by URI**

```bash
sqlite> $ SELECT * FROM uniform_resource WHERE uri = 'cargo test --lib --bins -- --test-threads=1';

01HXFJ7NETCT3Y51QF8XXYYT44|01HXFJ7GTNYJSBDACFZQ6PNVMV|01HXFJ7GTPXQJ0BME7B4KT6CRN||||cargo test --lib --bins -- --test-threads=1|9be7567194c97435eb8c66592f57404af8288935|
running 7 tests
test device::tests::test_device ... ok
test device::tests::test_state_info ... ok
test format::tests::test_to_sql_friendly_identifier_alphanumeric ... ok
test format::tests::test_to_sql_friendly_identifier_empty_string ... ok
test format::tests::test_to_sql_friendly_identifier_special_characters ... ok
test format::tests::test_to_sql_friendly_identifier_starting_with_number ... ok
test format::tests::test_to_sql_friendly_identifier_whitespace ... ok

test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s


running 10 tests
test frontmatter::tests::test_invalid_json_frontmatter ... ok
test frontmatter::tests::test_invalid_toml_frontmatter ... ok
test frontmatter::tests::test_invalid_yaml_frontmatter ... ok
test frontmatter::tests::test_json_frontmatter ... ok
test frontmatter::tests::test_no_frontmatter ... ok
test frontmatter::tests::test_toml_frontmatter ... ok
test frontmatter::tests::test_yaml_frontmatter ... ok
test shell::tests::test_command_execution ... ok
test shell::tests::test_custom_command_handling ... ok
test shell::tests::test_environment_variable_handling ... ok

test result: ok. 10 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s


running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 9 tests
test persist::tests::test_dbconn_init ... ok
test persist::tests::test_dbconn_new ... ok
test persist::tests::test_executable_code_hash_key ... ok
test persist::tests::test_executable_code_latest_anonymous_sql ... ok
test persist::tests::test_executable_code_latest_notebook_cell ... ok
test persist::tests::test_prepare_conn ... ok
test persist::tests::test_query_result_as_formatted_table ... ok
test persist::tests::test_query_result_as_json_value ... ok
test persist::tests::test_select_notebooks_and_cells ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.90s


running 2 tests
test ingest::tests::test_dry_run ... ok
test ingest::tests::test_file_ingestion ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.38s


running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 3 tests
test ssh::session::unix_impl::tests::validate_temp_keyfile ... ok
test ssh::tests::display_connection_string ... ok
test ssh::tests::parse_connection_string ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s


running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

|json|2807|2024-05-09 20:55:35.130563413 UTC||||2024-05-09 20:55:35|UNKNOWN|||||
```



