---
title: Software Engineers
description: explanation on how how software engineers make use of surveilr.
---

As a software engineer you regularly produce `Work Product Artifacts ( WPAs )` such as source code, documentation, commits, e.t.c. `Surveilr` can help you gather compliance evidences from these artifacts without having to worry about filling compliance forms. Below are some examples of `WPAs` that surveilr can help gather compliance evidences from;

## Source Code

A source code contains folders and files which means you can execute `surveilr ingest files -d source-code-path` which then processes all files in your source code and stores it in an RSSD under the `uniform resource` table. To learn about `surveilr ingest files <COMMAND>`, visit [ingest files](/surveilr/reference/ingest/files#ingest-files).

### Example

Suppose your source code is folder is named `docs.opsfolio.com` and it is located within your current working directory, you can ingest the files in this folder by executing this script:

```bash
$ surveilr ingest files -r docs.opsfolio.com
```

if otherwise, specify the path to the folder as shown below:

```bash
$ surveilr ingest files -r <PATH>/docs.opsfolio.com
```
