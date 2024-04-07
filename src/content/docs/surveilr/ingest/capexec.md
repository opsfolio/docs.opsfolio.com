---
title: Capturable Executables
description: Creating `RSSD`s by executing shell tasks without persisting.
---

Capturable executables follow the same the execution method and description as `surveilr ingest tasks` with the only difference being that capturable executables don't persist a session for surveilr. It works in the background to handle the tasks.

## Testing Shell Tasks

### Simple Commands
```bash
$ surveilr capturable-exec test task --help
$ surveilr capturable-exec test task -t 'osqueryi "select * from users" --json'
$ surveilr capturable-exec test task -t 'osqueryi "select * from users"'
$ surveilr capturable-exec test task -t '{ "osquery result as plain text": "osqueryi \"SELECT * from users\" --json" }'
$ surveilr capturable-exec test task -t '{ "osquery result as plain text": "osqueryi \"SELECT * from users\"", "nature": "text/plain" }'
```

### Piping Tasks
```bash
$ echo 'osqueryi "select * from users" --json' | surveilr capturable-exec test task --stdin
$ echo '{ "query result as plain text": "osqueryi \"SELECT * from users\"", "nature": "text/plain" }' | surveilr capturable-exec test task --stdin
```

### Multiple Commands
Multiple commands can be passed as a capturable executable, just as is being passed to `ingest tasks`. 
For example, a file named `synthetic-tasks-via-stdin` which contains the below:
```txt
# [TEXT] run osquery and store results in `uniform_resource` as JSON;
# the `--json` is the instruction for osquery, `surveilr` assumes JSON.
osqueryi "SELECT * from users" --json

# [JSONL] the following is the same as above except it has a name
{ "custom name for task output in uniform_resource": "osqueryi \"SELECT * from users\" --json", "nature": "json" }

# [JSONL] the following is the same as above except we store the result as plain text
{ "osquery result as plain text": "osqueryi \"SELECT * from users\"", "nature": "text/plain" }

# [TEXT] this command should run the same as the first but should not be stored more than once
osqueryi "SELECT * from users" --json
```
To execute this file as a capturable executable:
```bash
$ cat synthetic-tasks-via-stdin | surveilr capturable-exec test task --stdin
```