---
title: Installation
description: Descriptions on how to install surveilr.
---

## Download

Get the latest `surveilr` on:

### Linux

Execute the script below to install `surveilr` in:

1. your home (default) directory or path

    ```bash
    $ curl -sL https://raw.githubusercontent.com/opsfolio/releases.opsfolio.com/main/surveilr/install.sh | sh
    ```

2. your preferred installation directory or path
   
```bash
 $ curl -sL https://raw.githubusercontent.com/opsfolio/releases.opsfolio.com/main/surveilr/install.sh | SURVEILR_HOME="$HOME/bin" sh
```

### Windows

Installing `surveilr` on windows is straightforward. Follow these steps to complete the installation:

1. Visit our github [releases page](https://github.com/opsfolio/releases.opsfolio.com/releases) to download the latest executable version of `surveilr` ( you can download any version of your choice).
   
2. Move the downloaded executable file and paste in your desired folder path ( we recommend you paste it where it won't be deleted mistakenly which is your home directory. `C:/Users/<username>` for windows OS, and the corresponding path on Mac OS)
   
3. Open your preferred terminal (CMD or PowerShell) and navigate to the directory where the executable file is located using the `cd` command. If you placed the executable file in your home directory, you don't need to change directories because the terminal will default to your home directory.

4. Run the command `surveilr --help` to confirm installation. The resulting output of executing this command is shown below.
   
```bash
# command
   <PATH> surveilr --help

# result
   Usage: surveilr [OPTIONS] <COMMAND>

Commands:
  admin            Admin / maintenance utilities
  capturable-exec  Capturable Executables (CE) maintenance tools
  ingest           Ingest content from device file system and other sources
  notebooks        Notebooks maintenance utilities
  sqlpage          Configuration to start the SQLPage webserver
  udi              Universal Data Infrastructure
  transform        Resource transformation utilities for data stored in the RSSD
  upgrade          Update `surveilr` to latest or specific version
  help             Print this message or the help of the given subcommand(s)

Options:
      --device-name [<DEVICE_NAME>]  How to identify this device [env: SURVEILR_DEVICE_NAME=] [default:
                                     DESKTOP-1H9G3M4]
  -d, --debug...                     Turn debugging information on (repeat for higher levels) [env:
                                     SURVEILR_DEBUG=]
      --log-mode <LOG_MODE>          Output logs in json format [possible values: full, json, compact]
      --log-file <LOG_FILE>          File for logs to be written to
  -h, --help                         Print help
  -V, --version                      Print version
```

5. Congratulations!!! You have successfully installed `surveilr`


### Mac

Installing `surveilr` on Mac can be done using either the [Windows](/surveilr/installation#windows) or [Linux](/surveilr/installation#linux) installation method."



## Verify installation
```bash
$ surveilr --version                      # version information
$ surveilr --help                         # get CLI help (pay special attention to ENV var names)
```

Checkout more commands in the [reference section](/surveilr/reference/cli/commands)

## Upgrading `surveilr`

The following commands shows how to upgrade `surveilr` on your:

### Windows

```bash
$ surveilr upgrade ## Upgrades to the latest version

$ surveilr upgrade -v 0.1.2 ## Upgrades to version 0.1.2 if present
```

### Linux and Mac

You need to start the `surveilr upgrade` command with `sudo`, which will prompt you for your password and then proceeds with the upgrade successfully.

```bash
$ sudo surveilr upgrade ## Upgrades to the latest version

$ sudo surveilr upgrade -v 0.1.2 ## Upgrades to version 0.1.2 if present
```


## Shell Completions
```bash
$ surveilr --completions fish | source    # setup shell completions to reduce typing
```