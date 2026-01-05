---
title: "Installation & Workspace Setup Guide"
date: "2026-01-02"
author: "Documentation Team"
description: "A comprehensive guide to setting up your security environment with Kali Linux, VirtualBox, and essential dependencies."
---

# Installation & Workspace Setup

## 1. Setup Workspace

### Option A: Windows WSL (Kali Linux)
To spin up Kali Linux via Windows Subsystem for Linux, run:

```bash
wsl --install -d kali-linux
```

### Option B: Virtual Machine (VirtualBox)

#### Prerequisites

- **VirtualBox**: [Download VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- **Visual C++ Dependencies**: If you are using Windows as the host machine, you may encounter an error. To resolve this:
  1. Download [Visual C++ Redistributable Runtimes All-in-One](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one).
  2. Run the `install_all.bat` file.
- **Kali Linux VM Image**: [Download Kali Linux VM](https://www.kali.org/get-kali/#kali-platforms) (VirtualBox, ~3.3 GB, `.7z` file).
- **Compression Tool**: [WinRAR](https://www.win-rar.com/download.html?&L=0) (recommended) or **7-Zip**.

#### Setup Steps

1. **Download Kali Linux**
   - Select **Virtual Machine** and then **VirtualBox**.
   - The file will be in `.7z` format.

2. **Install VirtualBox**
   - Open the installer and follow the default prompts.

3. **Extract and Import**
   - Extract the `.7z` file.
   - Inside, you will find a `.vdi` file (orange icon) and a `.vbox` file (blue icon).
   - **Double-click the `.vbox` file** to automatically import the VM into VirtualBox.

4. **Configure the VM**
   - **Base Memory**: Set to `4096 MB` (recommended).
   - **Processor Cores**: Set to `2–3` (recommended).
   - Start the virtual machine.

5. **Login Credentials**
   - **Username**: `kali`
   - **Password**: `kali`

6. **Switch to Root User**
   - Open the terminal and type:
   ```bash
   sudo su
   ```
   *Note: This gives you full administrative privileges.*

7. **Update the System**
   ```bash
   sudo apt update && sudo apt upgrade -y && sudo apt full-upgrade -y
   ```

> **Note:** Always keep VirtualBox and Kali Linux updated to avoid compatibility issues.

#### Fixing Update Errors
If you encounter errors during the system update, run these commands:

```bash
# Force HTTPS for the sources list
sudo sed -i 's|http://http.kali.org|https://http.kali.org|' /etc/apt/sources.list

# Clean and fix missing dependencies
sudo apt-get clean && sudo apt-get update --fix-missing

# Re-run the update
sudo apt update && sudo apt upgrade -y && sudo apt full-upgrade -y
```

---

## 2. Prerequisite Dependencies

### [Homebrew](https://brew.sh/)
Run this command inside a **non-root user** terminal. You will be prompted for your password.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" && \
echo >> /home/kali/.zshrc && \
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/kali/.zshrc && \
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)" && \
sudo apt-get install -y build-essential && brew install gcc
```

### Go Language
```bash
sudo apt install golang-go -y
```

### [Deno](https://github.com/denoland/deno)
Deno is a modern, secure runtime for JS and TS. It includes a built-in formatter and test runner.

```bash
brew install deno
```

### [Surveilr](https://www.surveilr.com/)
Resource Surveillance & Integration Engine. To install the specific version:

```bash
wget https://github.com/surveilr/packages/releases/download/3.19.0/surveilr_3.19.0_x86_64-unknown-linux-gnu.tar.gz && \
tar -xvf surveilr_3.19.0_x86_64-unknown-linux-gnu.tar.gz && \
mv surveilr /usr/local/bin
```
*Check [latest releases here](https://github.com/opsfolio/releases.opsfolio.com/releases).*

#### Fix: Accessing Homebrew as Root
If `brew` is not found after switching to `sudo su`, run:
```bash
sudo su && echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /root/.zshrc && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```
- Paste it again after switching to the root user.

### [Spry](https://sprymd.org/)
Ensure Deno is installed before running this command:
```bash
brew install programmablemd/packages/spry
```

---

## 3. Prerequisite API Keys & Tokens

### [WPScan](https://wpscan.com/)
Security scanning tool specifically for WordPress.

1. Visit [WPScan Registration](http://wpscan.com/register/).
2. Verify your email and sign in.
3. Generate your API key.
4. Add the key to your `.env` file:
   ```bash
   OPSFOLIO_EAA_WP_TOKEN=your_key_here
   ```

### [VirusTotal](https://www.virustotal.com/)
Online threat intelligence platform for scanning files and URLs.

1. Visit [VirusTotal Signup](https://www.virustotal.com/gui/join-us).
2. Create and activate your account.
3. Copy your API key from the dashboard.
4. Add the key to your `.env` file:
   ```bash
   OPSFOLIO_EAA_VIRUSTOTAL_API_KEY=your_key_here
   ```
