---
title: Surveilr
description: Documentation for the resource surveillance CLI tool.
---

`surveilr` is an extendable file system inspector for performing surveillance of
machine resources. It is used to walk resources like file systems and generate
an SQLite database which can then be consumed by any computing environment that
supports SQLite.

The SQLite file which `surveilr` prepares is called the _Resource Surveillance
State Database_ (`RSSD`) and once it's been generated it's no longer tied to
`surveilr` and can be used by any other tool, service, application, or ETL'd
into a data warehouse.

![Architecture](/images/architecture.drawio.svg)
