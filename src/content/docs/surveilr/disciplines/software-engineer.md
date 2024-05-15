---
title: Software Engineers
description: explanation on how how software engineers make use of surveilr.
---

Companies usually have security, privacy, safety and regulatory compliance policies that must be adhered to by their software engineering teams and the adherence to these policies can be validated by using `surveilr` agent to extract compliance evidence from machine attestation artifacts. `Surveilr` can help you retrieve compliance evidence from these artifacts without having to worry about filling compliance forms.

Below are  examples of `WPAs` associated with software engineers that `surveilr` can help gather compliance evidences;


## Operating System

A company's policy might be: **"All Software engineers/developers who are not working on ‘Windows desktop’ or ‘iOS’ native applications are required to use Debian-based Linux as their base operating system for code development."** These policy could be further broken down into the following:

- Use the latest stable version of Debian-based Linux as the base operating system.
- All development environments, tools, and libraries must be installed on the Linux OS.
- Regularly update the OS and development environment for compatibility and security.

`surveilr` can be used to prove these policy is being followed by executing its ingestion command. A simple [file ingestion](/surveilr/reference/ingest/files#ingest-files) command ( `surveilr ingest` ) can  be executed which ingests all the files in the current working directory, stores them in a [Resource Surveillance State Database (RSSD)](/surveilr/reference/concepts/resource-surveillance) with a file name `resource-surveillance.sqlite.db`, under the [uniform_resource](/surveilr/reference/db/surveilr-state-schema/uniform_resource) table, and captures the machine's operating system information, storing it under the [device](/surveilr/reference/db/surveilr-state-schema/device) table as shown below:


```bash
$ surveilr ingest files 
```

 The objective is to utilize structured query language (SQL) to query the generated `RSSD` for compliance proofs, as shown below:

 ### SQL Query

 ```bash
 # navigate into the database environment (make sure sqlite3 is installed)
 $ sqlite3 resource-surveillance.sqlite.db

 # Query
 sqlite> $ SELECT d.state_sysinfo -> 'host_name' as 'Host Name', d.state_sysinfo -> 'name' as 'OS Name', d.state_sysinfo -> 'distribution_id' as 'Distribution Id', d.state_sysinfo -> 'kernel_version' as 'Kernel Version', d.state_sysinfo -> 'os_version' as 'OS Version', d.state_sysinfo -> 'long_os_version' as 'Long OS Version' FROM device d;

 ```

 ### Evidence

 | Host Name       | OS Name | Distribution Id | Kernel Version                     | OS Version | Long OS Version     |
|-----------------|---------|-----------------|------------------------------------|------------|---------------------|
| UNNIKRISHNAN-N  | Ubuntu  | ubuntu          | 5.15.133.1-microsoft-standard-WSL2 | 22.04      | Linux 22.04 Ubuntu  |
| ABDUL-RAZAK     | Ubuntu  | ubuntu          | 5.15.133.1-microsoft-standard-WSL2 | 22.04      | Linux 22.04 Ubuntu  |







## Unit Tests


A company's policy might be: **"All Software engineers/developers across all the projects must have a consistent code unit testing process."** These policy could be further broken down into the following:

- All developers who use ReactJS as programming language must use Jest and React Testing Library as the unit testing tools.
- All React developers must ensure they are following React reference Project for React code quality.

`surveilr` can be used to prove these policy is being followed by executing its ingestion command. A simple [file ingestion](/surveilr/reference/ingest/files#ingest-files) command ( `surveilr ingest` ) can  be executed which ingests all the files in the current working directory, stores them in a [Resource Surveillance State Database (RSSD)](/surveilr/reference/concepts/resource-surveillance) with a file name `resource-surveillance.sqlite.db`, under the [uniform_resource](/surveilr/reference/db/surveilr-state-schema/uniform_resource) table as shown below: 

```bash
$ surveilr ingest files 
```

 The objective is to utilize structured query language (SQL) to query the generated `RSSD` for compliance proofs, as shown below:


  

  ### SQL Query

  - **Verification Packages Installation**

 ```bash
 # navigate into the database environment (make sure sqlite3 is installed)
 $ sqlite3 resource-surveillance.sqlite.db

 # Query
 sqlite> $ SELECT d.name as 'host name', ur.content -> 'name' as 'project name', ur.content -> 'devDependencies' -> 'jest' as 'jest with version', ur.content -> 'devDependencies' -> 'jest-environment-jsdom' as 'jest-environment-jsdom with version', ur.content -> 'devDependencies' -> '@testing-library/react' as '@testing-library/react with version', ur.content -> 'devDependencies' -> '@testing-library/jest-dom' as '@testing-library/jest-dom with version', ur.content -> 'devDependencies' -> 'ts-jest' as 'ts-jest with version' FROM uniform_resource ur JOIN device d ON ur.device_id = d.device_id WHERE ur.uri LIKE '%package.json';

 ```

 ### Evidence

 | Host Name       | Project Name                        | Jest With Version | Jest-environment-jsdom With Version | @testing-library/react With Version | @testing-library/jest-dom With Version | Ts-Jest With Version |
|-----------------|--------------------------------------|-------------------|-------------------------------------|--------------------------------------|----------------------------------------|-----------------------|
| UNNIKRISHNAN-N  | react-code-quality-reference-project | ^29.6.2           | ^29.6.2                             | ^14.0.0                              | ^5.17.0                                | ^29.1.1               |
| ABDUL-RAZAK     | react-code-quality-reference-project | ^29.6.2           | ^29.6.2                             | ^14.0.0                              | ^5.17.0                                | ^29.1.1               |


  ### SQL Query

  - **Verification of Unit Test Script**

 ```bash
 # navigate into the database environment (make sure sqlite3 is installed)
 $ sqlite3 resource-surveillance.sqlite.db

 # Query
 sqlite> $SELECT d.name as 'host name', ur.content -> 'name' as 'project name', ur.content -> 'scripts' -> 'test' as 'Unit Test Script' FROM uniform_resource ur JOIN device d ON ur.device_id = d.device_id WHERE ur.uri LIKE '%package.json';

 ```

  ### Evidence

| Host Name      | Project Name                         | Unit Test Script |
| -------------- | ------------------------------------ | ---------------- |
| UNNIKRISHNAN-N | react-code-quality-reference-project | jest --json      |
| ABDUL-RAZAK    | react-code-quality-reference-project | jest --json      |




