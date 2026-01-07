---
title: "Quick Start: Fleetfolio EAA & Security Tooling"
date: "2026-01-02"
author: "Documentation Team"
description: "Manual and automated installation guide for security tools and Fleetfolio pentest workflows."
---

# Quick Start Guide

This guide covers two methods for setting up and running the Fleetfolio Pentest Workflow: **Manually** (Local Installation) and **Automated** (Docker).

---

## Method 1: Manual Installation

### 1. Prerequisites (Pre-installed in Kali)
The following tools are generally pre-installed in Kali Linux:
`Whatweb`, `Nmap`, `Openssl`, `wafw00f`, `sqlmap`, `WPScan`, `Amass`, `Nikto`, `DNSEnum`, `TheHarvester`, `SSLyze`, and `smtp-user-enum`.

### 2. Install Additional Tools
Run the following block to install required dependencies, Go-based tools, and Python scripts:

```bash
# Install system packages and Corsy
sudo apt install -y subfinder dnsx httpx-toolkit naabu nuclei xq jq dirsearch testssl.sh paramspider commix && \
git clone https://github.com/s0md3v/Corsy.git && cd Corsy && pip3 install -r requirements.txt --break-system-packages

# Install Go-based tools and move to bin
go install github.com/projectdiscovery/katana/cmd/katana@latest && sudo cp ~/go/bin/katana /bin/ && \
go install github.com/projectdiscovery/tlsx/cmd/tlsx@latest && sudo cp ~/go/bin/tlsx /bin/ && \
go install -v github.com/PentestPad/subzy@latest && sudo cp ~/go/bin/subzy /bin/ && \
go install -v github.com/projectdiscovery/pdtm/cmd/pdtm@latest && sudo cp ~/go/bin/pdtm /bin/ && \
go install github.com/intigriti/misconfig-mapper/cmd/misconfig-mapper@latest && sudo cp ~/go/bin/misconfig-mapper /bin/

# Install pdtm tools and Ghauri
sudo apt install -y libpcap-dev && pdtm -install-all && sudo cp /home/kali/.pdtm/go/bin/* /bin && \
git clone https://github.com/r0oth3x49/ghauri.git && cd ghauri && sudo python3 setup.py install && \
pip install fierce --break-system-packages

# Install VulnAPI
wget https://github.com/cerberauth/vulnapi/releases/download/v0.8.9/vulnapi_0.8.9_linux_amd64.deb && \
dpkg -i vulnapi_0.8.9_linux_amd64.deb

# Install WAF Bypass and Brew-based tools
git clone https://github.com/nemesida-waf/waf_bypass.git waf_bypass && cd waf_bypass && pip3 install -r requirements.txt --break-system-packages && \
brew install rustscan dalfox trivy
```

### 3. Clone and Configure
Clone the repository and set up your scope in the `.env` file.

```bash
git clone https://github.com/surveilr/www.surveilr.com.git && \
cd www.surveilr.com/lib/service/fleetfolio/eaa
```

**Configure `.env`:**
Use the following command to create your environment configuration:

```bash
sudo tee -a .env > /dev/null << 'EOF'
# Scope configuration
OPSFOLIO_EAA_HOME=/opt/eaa/sessions
OPSFOLIO_EAA_TENANT_ID=NET1234
OPSFOLIO_EAA_TENANT_NAME=Netspective
OPSFOLIO_EAA_PURPOSE=Threat
OPSFOLIO_EAA_DESCRIPTION=Demo_Threat
OPSFOLIO_EAA_CONTEXT_JSON='{ "Sample": "Value" }'
OPSFOLIO_EAA_EXIT_EMAIL_ADDRESSES=example@nespective.com
OPSFOLIO_EAA_DOMAINS=netspective.com
OPSFOLIO_EAA_SUBDOMAINS=
OPSFOLIO_EAA_IP_RANGES=
OPSFOLIO_EAA_EXCLUDES=
OPSFOLIO_EAA_KEY_URLS=https://netspective.com/
OPSFOLIO_EAA_KEY_APIS=
OPSFOLIO_EAA_KEY_GIT_URLS=
OPSFOLIO_EAA_CORSY_PATH=/opt/eaa/Corsy
OPSFOLIO_EAA_WP_TOKEN=TOKEN
OPSFOLIO_EAA_VIRUSTOTAL_API_KEY=KEY
OPSFOLIO_EAA_RATE_LIMIT=200
OPSFOLIO_EAA_CONCURRENCY=50
OPSFOLIO_EAA_NAABU_PORTS=top-100
OPSFOLIO_EAA_NUCLEI_TEMPLATES=cves,default
EOF
```

### 4. Execute using Spry
Use the following commands to run the workflows. Refer to the [Spry documentation](https://sprymd.org/docs) for advanced usage.

- **Run entire code:**
  ```bash
  sudo spry rb run fleetfolio-eaa-pentest-lite.spry.md --verbose rich
  ```
- **Run a single task:**
  ```bash
  sudo spry rb task <task_id> fleetfolio-eaa-pentest-lite.spry.md --verbose rich
  ```
- **Run a specific cell (Required for scripts with graphs):**
  ```bash
  sudo spry rb run fleetfolio-eaa-pentest-lite.spry.md --graph <name> --verbose rich
  ```

---

## Method 2: Automated Method (Docker)

### 1. Install Docker
Ensure Docker is installed and running on your system.

```bash
sudo apt update && sudo apt install docker.io -y && sudo systemctl enable docker --now
```

**Error Fix:** If the update fails, run:
```bash
sudo sed -i 's|http://http.kali.org|https://http.kali.org|' /etc/apt/sources.list && sudo apt-get clean && sudo apt-get update --fix-missing
```

### 2. Clone and Configure
Clone the repository and set up the `.env` file as shown in the Manual Method above.

```bash
git clone https://github.com/surveilr/www.surveilr.com.git && \
cd www.surveilr.com/lib/service/fleetfolio/eaa
```

### 3. Build and Run
Execute the following commands to build the image and run the container. 

```bash
sudo docker build -t fleetfolio-eaa:latest . && \
sudo docker run --rm -it -v $(pwd)/results:/opt/eaa/sessions/ fleetfolio-eaa:latest
```

**Note:** After execution, a `results` directory will be created in your current local path containing all generated reports and data.
