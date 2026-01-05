---
title: "Installation"
date: "2026-01-02"
author: "Documentation Team"
description: "Installation."
---

# Prerequisite Dependency

## Install [Homebrew](https://brew.sh/)

```bash 
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" && echo >> /home/kali/.zshrc && echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/kali/.zshrc && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)" && sudo apt-get install -y build-essential && brew install gcc
```

Note : Run this command inside a non-root user terminal. You will be prompted to enter the password, and then press Enter again to continue

## Install [Surveilr](https://www.surveilr.com/)

Get the latest Resource Surveillance & Integration Engine (surveilr) for Critical Systems by following these steps to complete the installation:

```bash 
wget https://github.com/surveilr/packages/releases/download/3.19.0/surveilr_3.19.0_x86_64-unknown-linux-gnu.tar.gz && \
tar -xvf surveilr_3.19.0_x86_64-unknown-linux-gnu.tar.gz && \
mv surveilr /usr/local/bin
```
- Please try to download the latest version. You can find latest releases [here](https://github.com/opsfolio/releases.opsfolio.com/releases)

Homebrew-installed tools not accessible when switching to root user (Solution: Add Homebrew to root’s shell environment)

```bash 
sudo su && echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /root/.zshrc && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```
- Paste it again after switching to the root user.
---

## Install [Spry](https://sprymd.org/)

- Before installing spry, make sure that you have installed deno.

```bash 
brew install programmablemd/packages/spry
```
Make sure you have installed `brew` using the steps above and that it is also available for the `root user`, as mentioned earlier.
