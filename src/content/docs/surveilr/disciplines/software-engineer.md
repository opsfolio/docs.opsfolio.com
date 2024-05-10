---
title: Software Engineers
description: explanation on how how software engineers make use of surveilr.
---

As a software engineer you regularly produce `Work Product Artifacts ( WPAs )` such as source code, documentation, commits, e.t.c. `Surveilr` can help you gather compliance evidences from these artifacts without having to worry about filling compliance forms. Below are some examples of `WPAs` that surveilr can help gather compliance evidences from;

## Source Code

A source code contains folders and files which means you can perform a [file ingestion](/surveilr/reference/ingest/files#ingest-files) on it, which then processes all files in your source code and stores it in an [RSSD](/surveilr/reference/concepts/resource-surveillance) under the [uniform resource](http://localhost:4321/surveilr/reference/db/surveilr-state-schema/uniform_resource) table. Your end goal is to be able to query the generated `RSSD` for compliance proofs using a structured query language (SQL).

Assuming your source-code is named `resource-surveillance`, you can ingest the files in this folder by executing any of the command  separated by comments  below:

```bash
# ingest files from your desired directory
$ cd resource-surveillance
$ surveilr ingest files 

# Ingest files from specific directories by specifying the directory path
$ surveilr ingest files -r /<path>/resource-surveillance
```

Executing any of the commands above generates an [RSSD](/surveilr/reference/concepts/resource-surveillance) in the specified directory. The objective is to utilize structured query language (SQL) to query the generated `RSSD` for compliance proofs, as shown in the following examples.


### Examples

The following examples demonstrates the use of SQL to retrieve compliance evidences fom the generated `RSSD` as a result of executing `surveilr ingest` command on a **`Rust`** source code (folder) named `resource-surveillance`


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



