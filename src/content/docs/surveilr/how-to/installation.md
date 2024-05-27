---
title: Installation
description: Descriptions on how to install surveilr.
---

## Quick Start ( TL;DR )

1. **Download:** Get the latest `surveilr` from the  [GitHub releases page](https://github.com/opsfolio/releases.opsfolio.com/releases)

2. **Extract:** Unzip the downloaded file.

3. **Move:** Place the extracted file in your desired directory.

4. **Navigate:** Open terminal and `cd` to the directory where you moved the file.
   
5. **Verify:** Run verification steps [here](/surveilr/how-to/installation#verify-installation). 


## Installation ( Detailed Instructions)

Get the latest Surveilr by following these steps to complete the installation:

1. Visit our GitHub Releases page:

    - Navigate to our [GitHub Releases](https://github.com/opsfolio/releases.opsfolio.com/releases) page to download the latest version of Surveilr that’s compatible with your operating system.
2. Download the appropriate version:

    - Select and download the version that matches your operating system (Windows, macOS, or Linux).
3. Extract the executable file from the downloaded archive:

   - **Windows:**
        - Right-click on the downloaded .zip file and select "Extract All..."
        - Choose the destination folder where you want to extract the files.
    - **macOS:**
        - Double-click the downloaded .tar.gz or .zip file to extract it.
    - **Linux:**
        - Open a terminal.
        - Navigate to the directory where the file was downloaded.
        - Use the appropriate command to extract the file. For **.tar.gz** files, use:
             ```bash
             tar -xvzf surveilr-version.tar.gz
             ```

            For **.zip** files, use:
            ```bash
            unzip surveilr-version.zip
            ```

4. Move the extracted file to your desired path or directory:

    - You can move the extracted executable file to a directory included in your system's PATH or to a directory of your choice.
    - **Windows:**
        - Open File Explorer and navigate to the extracted file.
        - Right-click the file and select "Cut".
        - Navigate to the desired directory, right-click, and select "Paste".
    - **macOS and Linux:**
        - Use the mv command in the terminal to move the file. For example:
            ```bash
            mv surveilr /usr/local/bin/
            ```
5. Open your terminal and change directory (cd) to where the extracted file was moved:

    - **Windows:**
        - Open Command Prompt.
        - Use the cd command to navigate to the directory. For example:
            ```bash
                cd C:\path\to\surveilr**
            ```
    - **macOS and Linux:**
        - Open Terminal.
        - Use the cd command to navigate to the directory. For example:
            ```bash
            cd /usr/local/bin/
     ```
6. Run verification steps [here](/surveilr/how-to/installation#verify-installation). 

### Alternative Installation for Linux Using Eget

1. Before you can get anything, you have to get [Eget](https://github.com/zyedidia/eget):

    ```bash
    $ curl https://zyedidia.github.io/eget.sh | sh
    ```
2. Now install `surveilr` using `eget`:

    ```bash
    $ eget opsfolio/releases.opsfolio.com --asset tar.gz
    ```
3. Run verification steps [here](/surveilr/how-to/installation#verify-installation). 

### Alternative Installation for Linux and Mac

1. Install in desired path by running any of the following commands:
    
    ```bash
    # install in current path
    $ curl -sL https://raw.githubusercontent.com/opsfolio/releases.opsfolio.com/main/surveilr/install.sh | sh

    # Install globally
    $ curl -sL https://raw.githubusercontent.com/opsfolio/releases.opsfolio.com/main/surveilr/install.sh | SURVEILR_HOME="$HOME/bin" sh

    # install in preferred path
    $ curl -sL https://raw.githubusercontent.com/opsfolio/releases.opsfolio.com/main/surveilr/install.sh | SURVEILR_HOME="/path/to/directory" sh
    ```

2. Run verification steps [here](/surveilr/how-to/installation#verify-installation).  


## Verify installation

Run the following command to verify that Surveilr is installed correctly:

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
