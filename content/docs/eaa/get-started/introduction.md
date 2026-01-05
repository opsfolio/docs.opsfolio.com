# Fleetfolio Enterprise Assets Assessment (EAA)

Enterprise Assets Assessment (EAA) is a core capability of the Fleetfolio platform, designed to provide organizations with a repeatable, evidence-driven methodology for discovering, evaluating, and documenting their external-facing digital assets. By leveraging industry-standard penetration testing tools, open-source security frameworks, and structured artifact management, EAA helps organizations maintain visibility and accountability over the security posture of their enterprise assets.

EAA is positioned within the Fleetfolio platform, which itself is a specialized service layer inside the broader Opsfolio and Opsfolio Compliance-as-a-Service (CaaS) ecosystem. Together, these platforms support continuous assurance of technology assets, compliance obligations, and security controls.

Fleetfolio EAA is not a one-off penetration testing toolkit—it is a reusable, auditable, and compliance-aligned assessment capability. By embedding EAA within Fleetfolio and the larger Opsfolio ecosystem, organizations gain a sustainable method for keeping external-facing assets visible, tested, and aligned with their compliance obligations.


## Usage Instructions

The EAA module is delivered as a containerized workflow:

1. Deploy the container
   * Based on OWASP Nightingale with Runme installed.
   * Mounts `/opt/eaa/sessions` as the working evidence directory.

2. Configure targets
   * Provide domains, IP ranges, and key URLs/APIs via environment variables.
   * Excludes may be set to respect customer scoping and authorization boundaries.

3. Run the assessment
   * A pre-configured [Spry](https://sprymd.org/) runbook (`eaa-pentest-lite.runme.md`) orchestrates a sequence of lightweight, authorized tests.
   * Outputs are generated consistently under `/opt/eaa/sessions/<timestamps>/<tool>/…` in JSON, JSONL, XML, or text formats.

4. Review artifacts
   * Evidence is automatically organized by tool.
   * Analysts can interpret logs and structured outputs directly or feed them into the broader Fleetfolio reporting pipeline.

## Benefits

* Consistency: Every assessment produces a predictable structure of artifacts, making it easier to compare results over time.
* Auditability: JSON/JSONL-first evidence formats ensure results are machine-readable and can be correlated across tools.
* Scalability: Designed to run across multiple customer environments, domains, and IP ranges.
* Compliance Fit: As part of Opsfolio CaaS, EAA supports audit preparation by linking evidence directly to compliance controls.
* Reusability: Runbooks and containerized workflows can be re-run against new scopes with minimal setup.

## Caveats & Considerations

* Scope Authorization: EAA assumes that all provided targets have been explicitly authorized for testing by the customer.
* Lightweight by Default: The included runbook (`pentest-lite`) runs “lite” tests intended for continuous or recurring assessments. Deeper, more aggressive scans should be handled by specialized teams.
* Artifacts Are Evidence, Not Conclusions: The JSON, XML, or text outputs produced by each tool are raw evidence. Interpretation, triage, and prioritization of risks remain the responsibility of analysts and compliance staff.
* Performance Controls: Rate limiting, target exclusions, and scheduling should be applied thoughtfully to avoid unintended impact on production systems.

## Relationship to Fleetfolio & Opsfolio

* Fleetfolio: EAA is one of several modules (alongside identity, assets, observability, etc.) that help organizations track and assure the lifecycle of enterprise assets.
* Opsfolio: EAA contributes to the evidence base that underpins security and compliance insights across the platform.
* Opsfolio CaaS: EAA outputs feed directly into compliance-as-a-service workflows, ensuring that asset assessment is not just a security activity but also a compliance deliverable.

## Implementation

```
eaa/
├─ ai-context-engineering/
├─ support/
├─ fixtures/
├─ Dockerfile
├─ docker-compose.yml
├─ env.sample
├─ fleetfolio-eaa-pentest-lite.spry.md
├─ fleetfolio-eaa.fhir-R4-questionnaire.json
├─ assessment.lhc-form.json
├─ directory-list.txt
├─ naabu_anomaly_report.poml
├─ whatweb_anomaly_report.poml
├─ whatweb-security-engineer.ctxe.md
└─ README.md

```

### Kali linux-based container that auto-runs the Spry runbook

* Dockerfile
  * Base: `kalilinux/kali-last-release:latest`
  * Installs Spry via official script.
  * Declares VOLUME for `/opt/eaa/sessions`.
  * Copies the runbook to `/opt/eaa/sessions/<timestamps>/.session/fleetfolio-eaa-pentest-lite.spry.md`.
  * CMD: runs the runbook on container start.
  * Env var knobs (overridable at runtime):
    * `OPSFOLIO_EAA_HOME` (default: `/opt/eaa/sessions`)
    * `OPSFOLIO_EAA_TENANT_ID` – tenant IDs, separated by commas or spaces
    * `OPSFOLIO_EAA_TENANT_NAME` – tenant names, separated by commas or spaces
    * `OPSFOLIO_EAA_PURPOSE` – required string
    * `OPSFOLIO_EAA_DESCRIPTION` – optional string
    * `OPSFOLIO_EAA_CONTEXT_JSON` – optional JSON object
    * `OPSFOLIO_EAA_EXIT_EMAIL_ADDRESS` – email addresses, comma- or space-separated
    * `OPSFOLIO_EAA_DOMAINS` – comma- or space-separated domains
    * `OPSFOLIO_EAA_IP_RANGES` – comma- or space-separated IPs/CIDRs
    * `OPSFOLIO_EAA_KEY_URLS` – comma- or space-separated URLs
    * `OPSFOLIO_EAA_KEY_APIS` – comma- or space-separated APIs
    * `OPSFOLIO_EAA_KEY_GIT_URLS` – comma- or space-separated URLs
    * `OPSFOLIO_EAA_EXCLUDES` – comma- or space-separated exclusions
    * `OPSFOLIO_EAA_CORSY_PATH` (default: `/opt/eaa/Corsy`)
    * `OPSFOLIO_EAA_WP_TOKEN` – required string
    * `OPSFOLIO_EAA_VIRUSTOTAL_API_KEY` – required string
    * `OPSFOLIO_EAA_RATE_LIMIT` (default: `200`)
    * `OPSFOLIO_EAA_CONCURRENCY` (default: `50`)
    * `OPSFOLIO_EAA_NAABU_PORTS` (default: `top-100`)
    * `OPSFOLIO_EAA_NUCLEI_TEMPLATES` (default: `cves,default`)


### Spry runbook (narrative + runnable)

* `fleetfolio-eaa-pentest-lite.runme.md` (see [Spry](https://sprymd.org/))
  * Clear documentation at the top on purpose, usage, and artifact model.
  * Snapshots all `$OPSFOLIO__EAA_*` env vars to `$OPSFOLIO_EAA_HOME/arguments.env`.
  * Stores a master log at `$OPSFOLIO_EAA_HOME/runbook.log`.
  * Normalizes env vars into newline-delimited files in `$OPSFOLIO_EAA_HOME/session/` (domains, ip\_ranges, key\_urls, excludes).
  * Narrative (markdown-friendly) explanations before each tool: what it is, link to official source, why it’s in the chain, and what it finds.
  * Runnable `{ name=<cell> }` code blocks.
  * Artifact guidance after each cell (file paths, formats, and what to look for).
  * Steps implemented (respecting excludes, rate/concurrency, templates, ports):
    * Prep (mkdir evidence dirs)
* Subfinder → JSONL `/opt/eaa/sessions/<timestamp>/subfinder/subfinder.jsonl`
  * Discovered subdomains and sources. Use as primary input for DNS, HTTP, and asset expansion.

* dnsx → JSONL `/opt/eaa/sessions/<timestamp>/dnsx/dnsx.jsonl`
  * DNS resolution results. Confirm live hosts and prune dead subdomains.

* httpx → JSONL `/opt/eaa/sessions/<timestamp>/httpx/httpx.jsonl`
  * HTTP probing results. Identify live web services, technologies, and response metadata.

* WhatWeb → per-target JSON `/opt/eaa/sessions/<timestamp>/whatweb/*.json`
  * Web technology fingerprinting. Review CMS, frameworks, and server components.

* Naabu → JSONL `/opt/eaa/sessions/<timestamp>/naabu/naabu.jsonl`
  * Fast port scan results. Feed into Nmap for deeper service enumeration.

* Nmap (+ xq) → XML + JSON `/opt/eaa/sessions/<timestamp>/nmap/services.xml|json`
  * Detailed service and version detection. Use for attack surface and exposure mapping.

* OpenSSL → text certs `/opt/eaa/sessions/<timestamp>/tls/*.txt`
  * Raw certificate details. Review expiry, issuer, and certificate chain issues.

* Nuclei → JSONL `/opt/eaa/sessions/<timestamp>/nuclei/nuclei.jsonl`
  * Template-based vulnerability findings. Sort by severity and manually validate high-impact issues.

* Katana (optional) → JSONL `/opt/eaa/sessions/<timestamp>/katana/katana.jsonl`
  * Crawled endpoints. Look for hidden APIs, admin paths, and sensitive resources.

* Dirsearch → JSON `/opt/eaa/sessions/<timestamp>/dirsearch/dirsearch.json`
  * Discovered directories and files. Review response codes for exposed or sensitive paths.

* wafw00f → text `/opt/eaa/sessions/<timestamp>/wafw00f/wafw00f.txt`
  * Detected WAFs. Use to tailor payloads and bypass strategies.

* Testssl → JSON `/opt/eaa/sessions/<timestamp>/tls/testssl.json`
  * TLS configuration analysis. Identify weak ciphers, protocols, and compliance gaps.

* sqlmap → text `/opt/eaa/sessions/<timestamp>/sqlmap/sqlmap.txt`
  * SQL injection findings. Document injection points, DBMS details, and extracted data.

* Subzy → text `/opt/eaa/sessions/<timestamp>/subzy/subzy.txt`
  * Subdomain takeover candidates. Validate and remediate abandoned DNS records.

* Corsy → text `/opt/eaa/sessions/<timestamp>/corsy/corsy.txt`
  * CORS misconfiguration analysis. Flag wildcard and reflection-based trust issues.

* Nikto → text `/opt/eaa/sessions/<timestamp>/nikto/nikto.txt`
  * Web server misconfigurations and outdated components. Use as supplemental signal.

* WPScan → JSON `/opt/eaa/sessions/<timestamp>/wpscan/wpscan.json`
  * WordPress core, plugin, and theme vulnerabilities. Recommend upgrades or removals.

* RustScan → text `/opt/eaa/sessions/<timestamp>/rustscan/rustscan.txt`
  * High-speed port discovery. Correlate with Nmap results.

* Amass → text `/opt/eaa/sessions/<timestamp>/amass/amass.txt`
  * Comprehensive subdomain and DNS discovery. Build full attack surface map.

* DNSEnum → XML `/opt/eaa/sessions/<timestamp>/dnsenum/dnsenum.xml`
  * DNS record enumeration and AXFR attempts. Identify DNS misconfigurations.

* TheHarvester → JSON `/opt/eaa/sessions/<timestamp>/theharvester/theharvester.json`
  * OSINT data (emails, hosts, subdomains). Cross-check against inventories.

* Paramspider → text `/opt/eaa/sessions/<timestamp>/paramspider/paramspider.txt`
  * URL parameters for injection testing. Feed into XSS, SSRF, and SQLi workflows.

* Ghauri → text `/opt/eaa/sessions/<timestamp>/ghauri/ghauri.txt`
  * Advanced SQL injection detection. Review payloads and exploitation paths.

* cdncheck → JSONL `/opt/eaa/sessions/<timestamp>/cdncheck/cdncheck.jsonl`
  * CDN identification. Look for exposed origin IPs bypassing CDN protection.

* ffuf → JSON `/opt/eaa/sessions/<timestamp>/ffuf/ffuf.json`
  * Fuzzing results for endpoints and parameters. Review for unauthorized access.

* Dalfox → JSONL `/opt/eaa/sessions/<timestamp>/dalfox/dalfox.jsonl`
  * XSS findings and reflection points. Validate confirmed vectors.

* SSLyze → JSON `/opt/eaa/sessions/<timestamp>/tls/sslyze.json`
  * SSL/TLS posture assessment. Review cipher suites, protocols, and cert issues.

* SMTP-User-Enum → text `/opt/eaa/sessions/<timestamp>/smtp-user-enum/smtp-user-enum.txt`
  * SMTP user enumeration. Identify valid users and correlate for phishing risk.

* Fierce → text `/opt/eaa/sessions/<timestamp>/fierce/fierce.txt`
  * DNS reconnaissance. Flag AXFR success, wildcard DNS, and unexpected PTRs.

* VirusTotal → JSON `/opt/eaa/sessions/<timestamp>/virustotal/virustotal.json`
  * Domain and file intelligence. Map external footprint and validate malware indicators.

* VulnAPI → text `/opt/eaa/sessions/<timestamp>/vulnapi/vulnapi.txt`
  * API security findings. Identify missing auth, headers, and insecure endpoints.

* Commix → text `/opt/eaa/sessions/<timestamp>/commix/commix.txt`
  * Command injection testing. Validate impact via execution outputs.

* WAF-Bypass → text `/opt/eaa/sessions/<timestamp>/waf-bypass/waf-bypass.txt`
  * WAF evasion attempts. Identify filtering weaknesses and bypass success.

* Trivy → text `/opt/eaa/sessions/<timestamp>/trivy/trivy.txt`
  * Vulnerabilities and misconfigurations in code, dependencies, images, and IaC.

  * Final summary section with quick counts and next-step hints.
  * Idempotent, safe defaults; uses `set -euo pipefail` and `jq` where helpful.

### Analyst deliverables as `fixtures/*`

* `fleetfolio-eaa-analyst-report-template.md` – structured template for reporting per tool + risk ratings + recommendations.
* `fleetfolio-eaa-analyst-sample-report.md` – dummy data example showing how to populate the template.
* Analyst’s Guide appendix embedded at the bottom of the runbook, explaining how to interpret each tool’s artifacts.

### Exec presentation (Reveal.js) in `fixtures/*`

* `fleetfolio-eaa-executive-summary-slides.md` – executive summary deck in Markdown (Reveal.js format).
* `fleetfolio-eaa-executive-summary.html` – minimal HTML wrapper that loads the Markdown slides via CDN Reveal.js.

### How to run (quick start)

Build and run with docker build:

```bash
git clone https://github.com/surveilr/www.surveilr.com.git && \
cd www.surveilr.com/lib/service/fleetfolio/eaa
```
```
mv env.sample .env
```
```
sudo docker build -t fleetfolio-eaa:latest . && \
sudo docker run --rm -it -v $(pwd)/results:/opt/eaa/sessions/ fleetfolio-eaa:latest

```
Typical variables to set (via `.env` or compose `environment:`):

```
# Copy this file to ".env" and adjust values as needed.
# docker-compose will automatically read .env in the same folder.
# Scope configuration (space- or comma-separated)

OPSFOLIO_EAA_HOME=/opt/eaa/sessions
OPSFOLIO_EAA_TENANT_ID=NET1234
OPSFOLIO_EAA_TENANT_NAME=Netspective
OPSFOLIO_EAA_PURPOSE=Threat
OPSFOLIO_EAA_DESCRIPTION=Demo_Threat
OPSFOLIO_EAA_CONTEXT_JSON='{ \"Sample\": \"Value\" }'
OPSFOLIO_EAA_EXIT_EMAIL_ADDRESSES=example@nespective.com,example2@nespective.com,example3@gmal.com
OPSFOLIO_EAA_DOMAINS=netspective.com
OPSFOLIO_EAA_KEY_URLS=https://www.netspective.com
OPSFOLIO_EAA_EXCLUDES=
OPSFOLIO_EAA_KEY_APIS=
OPSFOLIO_EAA_KEY_GIT_URLS=
OPSFOLIO_EAA_CORSY_PATH=/opt/eaa/Corsy
OPSFOLIO_EAA_WP_TOKEN=TOKEN
OPSFOLIO_EAA_VIRUSTOTAL_API_KEY=API-KEY
OPSFOLIO_EAA_RATE_LIMIT=200
OPSFOLIO_EAA_CONCURRENCY=50
OPSFOLIO_EAA_NAABU_PORTS=top-100
OPSFOLIO_EAA_NUCLEI_TEMPLATES=cves,default
```

Artifacts will be written under the container path `/opt/eaa/sessions/...` (mounted to `./sessions` volume on the host by default).
`surveilr files ingest` can be used to import all session details from `./sessions` mount into a Fleetfolio instance for visualizing reports, logs, etc.
