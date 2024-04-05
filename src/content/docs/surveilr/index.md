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



## Installation
1. Get the latest `surveilr` using either of the following one-liners:
   - An installation script: 
       ```bash
       $ curl -sL https://raw.githubusercontent.com/opsfolio/releases.opsfolio.com/main/surveilr/install.sh | sh

       # if you want a different install path
       $ SURVEILR_HOME="$HOME/bin" curl -sL https://raw.githubusercontent.com/opsfolio/releases.opsfolio.com/main/surveilr/install.sh | sh
       ```

   - Eget
     - Download `eget` [here](https://github.com/zyedidia/eget).
     - ```bash
           $ eget opsfolio/resource-surveillance --asset tar.gz
           ```

   - Get the releases from our github [releases page](https://github.com/opsfolio/releases.opsfolio.com/releases).

2. Run to verify the installation:
    ```bash
    $ surveilr --version                      # version information
    $ surveilr --help                         # get CLI help (pay special attention to ENV var names)
    ```
3. Checkout more commands in the [reference section](/surveilr/reference/cli/commands)
## Shell Completions
```bash
$ surveilr --completions fish | source    # setup shell completions to reduce typing
```