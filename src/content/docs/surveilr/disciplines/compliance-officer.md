---
title: Compliance Officers
description: explanation on how compliance officers make use of surveilr.
---

Compliance Officers ensure that the organization adheres to legal standards and internal policies. Their responsibilities include creating compliance frameworks, auditing processes, and ensuring that all activities comply with relevant regulations. This document outlines the key activities and best practices for Compliance Officers to ensure thorough and efficient compliance processes.

### Ensuring Compliance

A comprehensive [file ingestion](/surveilr/reference/ingest/files#ingest-files) [command](/surveilr/disciplines/software-engineer#common-commands) can be executed to ingest all files in the current working directory. These files are stored in a [Resource Surveillance State Database (RSSD)](/surveilr/reference/concepts/resource-surveillance) named `resource-surveillance.sqlite.db`, under the [uniform_resource](/surveilr/reference/db/surveilr-state-schema/uniform_resource) table.

### Evidence Types

- **Compliance Evidence**: Shows adherence to policies.
- **Non-Compliance Evidence**: Indicates violations of policies.

### Common Commands

When [ingesting files](/surveilr/reference/ingest/files) in the current directory, you can do the following:

```bash
surveilr ingest files
```

When running queries in [RSSDs](/surveilr/reference/concepts/resource-surveillance):

    $ sqlite3 resource-surveillance.sqlite.db "SELECT * FROM..."

Below are examples of Work Product Artifacts ( `WPAs` ) associated with quality engineers that `surveilr` can help gather compliance evidences:

## Creating a Compliance Framework

A company's policy might state: **“All compliance officers must create a comprehensive compliance framework for the organization.”** This policy can be broken down into the following requirements:

- Define the compliance objectives, scope, resources, and timelines.
- Ensure the framework is documented and accessible to all stakeholders.

The next step is to use `surveilr` to ensure compliance with these policies, capturing the necessary details and storing them under the database table.

### SQL Query for Verification of Compliance Framework

    SELECT d.state_sysinfo -> 'host_name' AS 'Host Name',
           cf.content -> 'compliance_framework' AS 'Compliance Framework'
    FROM compliance_framework cf
    JOIN device d ON cf.device_id = d.device_id;

### Compliance Evidence

| Host Name  | Compliance Framework |
| ---------- | -------------------- |
| HostName_1 | Detailed Framework 1 |
| HostName_2 | Detailed Framework 2 |

### Non-compliance Evidence

| Host Name  | Compliance Framework |
| ---------- | -------------------- |
| HostName_1 | Missing Framework    |
| HostName_2 | Incomplete Framework |

## Conducting Audits

A company's policy might state: **“All compliance officers must regularly conduct audits to ensure compliance with policies.”** This policy can be broken down into the following requirements:

- Schedule and conduct regular audits.
- Document the audit findings and corrective actions.

### SQL Query for Verification of Audits

    SELECT ur.content -> 'name' AS 'Audit Name',
           ur.content -> 'audit_results' AS 'Audit Results'
    FROM uniform_resource ur
    JOIN device d ON ur.device_id = d.device_id
    WHERE ur.uri LIKE '%audit_results.json';

### Compliance Evidence

| Host Name  | Audit Name | Audit Results |
| ---------- | ---------- | ------------- |
| HostName_1 | audit-1    | Passed        |
| HostName_2 | audit-2    | Passed        |

### Non-compliance Evidence

| Host Name  | Audit Name | Audit Results |
| ---------- | ---------- | ------------- |
| HostName_1 | audit-1    | Failed        |
| HostName_2 | audit-2    | Not Conducted |

## Monitoring Regulatory Changes

A company's policy might state: **“All compliance officers must monitor and implement changes in regulations.”** This policy can be broken down into the following requirements:

- Regularly monitor regulatory updates.
- Update the compliance framework and policies accordingly.

### SQL Query for Verification of Regulatory Monitoring

    SELECT ur.content -> 'name' AS 'Regulation Name',
           ur.content -> 'update_details' AS 'Update Details'
    FROM uniform_resource ur
    JOIN device d ON ur.device_id = d.device_id
    WHERE ur.uri LIKE '%regulatory_updates.json';

### Compliance Evidence

| Host Name  | Regulation Name | Update Details |
| ---------- | --------------- | -------------- |
| HostName_1 | regulation-1    | Updated        |
| HostName_2 | regulation-2    | Updated        |

### Non-compliance Evidence

| Host Name  | Regulation Name | Update Details |
| ---------- | --------------- | -------------- |
| HostName_1 | regulation-1    | Not Updated    |
| HostName_2 | regulation-2    | Not Updated    |

## Training Employees

A company's policy might state: **“All compliance officers must train employees on compliance policies.”** This policy can be broken down into the following requirements:

- Develop and conduct training sessions.
- Ensure employees understand and adhere to compliance policies.

### SQL Query for Verification of Training Sessions

    SELECT ur.content -> 'name' AS 'Training Name',
           ur.content -> 'attendance' AS 'Attendance'
    FROM uniform_resource ur
    JOIN device d ON ur.device_id = d.device_id
    WHERE ur.uri LIKE '%training_sessions.json';

### Compliance Evidence

| Host Name  | Training Name | Attendance |
| ---------- | ------------- | ---------- |
| HostName_1 | training-1    | Complete   |
| HostName_2 | training-2    | Complete   |

### Non-compliance Evidence

| Host Name  | Training Name | Attendance    |
| ---------- | ------------- | ------------- |
| HostName_1 | training-1    | Incomplete    |
| HostName_2 | training-2    | Not Conducted |

## Reporting and Documentation

A company's policy might state: **“All compliance officers must maintain thorough documentation and reporting of compliance activities.”** This policy can be broken down into the following requirements:

- Document all compliance activities and findings.
- Ensure regular reporting to senior management and stakeholders.

### SQL Query for Verification of Compliance Documentation

    SELECT ur.content -> 'name' AS 'Document Name',
           ur.content -> 'details' AS 'Details'
    FROM uniform_resource ur
    JOIN device d ON ur.device_id = d.device_id
    WHERE ur.uri LIKE '%compliance_docs.json';

### Compliance Evidence

| Host Name  | Document Name    | Details  |
| ---------- | ---------------- | -------- |
| HostName_1 | compliance-doc-1 | Complete |
| HostName_2 | compliance-doc-2 | Complete |

### Non-compliance Evidence

| Host Name  | Document Name    | Details        |
| ---------- | ---------------- | -------------- |
| HostName_1 | compliance-doc-1 | Incomplete     |
| HostName_2 | compliance-doc-2 | Not Documented |

## Managing Compliance Risks

A company's policy might state: **“All compliance officers must manage and mitigate compliance risks.”** This policy can be broken down into the following requirements:

- Identify and assess compliance risks.
- Implement measures to mitigate identified risks.

### SQL Query for Verification of Risk Management

    SELECT ur.content -> 'name' AS 'Risk Name',
           ur.content -> 'mitigation_plan' AS 'Mitigation Plan'
    FROM uniform_resource ur
    JOIN device d ON ur.device_id = d.device_id
    WHERE ur.uri LIKE '%risk_management.json';

### Compliance Evidence

| Host Name  | Risk Name | Mitigation Plan |
| ---------- | --------- | --------------- |
| HostName_1 | risk-1    | Detailed Plan 1 |
| HostName_2 | risk-2    | Detailed Plan 2 |

### Non-compliance Evidence

| Host Name  | Risk Name | Mitigation Plan |
| ---------- | --------- | --------------- |
| HostName_1 | risk-1    | Missing Plan    |
| HostName_2 | risk-2    | Incomplete Plan |
