---
title: Installation
description: Descriptions on how to install surveilr.
---

## Download & Install

Get the latest `surveilr` by following these steps to complete the installation:

1. Visit our github [releases page](https://github.com/opsfolio/releases.opsfolio.com/releases) to download the latest version of `surveilr` that's compatible with your operating system. 

2. Extract the executable file from the downloaded archive.
   
3. Move the extracted file to your desired path or directory 
   
4. Open your terminal and change directory ( `cd` ) to where the extracted file was moved.
   
5. [Verify installation](/surveilr/installation#verify-installation).


## Alternative Installation Method for Linux and Mac

```bash
# install in current path
$ curl -sL https://raw.githubusercontent.com/opsfolio/releases.opsfolio.com/main/surveilr/install.sh | sh

# Install globally
$ curl -sL https://raw.githubusercontent.com/opsfolio/releases.opsfolio.com/main/surveilr/install.sh | SURVEILR_HOME="$HOME/bin" sh

# install in preferred path
$ curl -sL https://raw.githubusercontent.com/opsfolio/releases.opsfolio.com/main/surveilr/install.sh | SURVEILR_HOME="/path/to/directory" sh
```


## Verify installation
```bash
$ surveilr --version                      # version information
$ surveilr --help                         # get CLI help (pay special attention to ENV var names)
```

Checkout more commands in the [reference section](/surveilr/reference/cli/commands)

## Upgrading `surveilr`

The following commands shows how to upgrade `surveilr` on your:

```bash
$ surveilr upgrade ## Upgrades to the latest version

$ surveilr upgrade -v 0.1.2 ## Upgrades to version 0.1.2 if present
```

When using the command above, you will be prompted to confirm the upgrade by typing `yes`. However, if you are running the upgrade in a bash script, you won't be able to provide this confirmation interactively. To address this, we have provided the `--yes` or `--y` flag, which automatically skips the confirmation step. Here is how to use it:

```bash
## Upgrades to the latest version and skips confirmation
$ surveilr upgrade --yes

## Upgrades to version 0.1.2 if present and  skips the confirmation
$ surveilr upgrade -v 0.1.2 --yes
```

## Shell Completions
```bash
$ surveilr --completions fish | source    # setup shell completions to reduce typing
```