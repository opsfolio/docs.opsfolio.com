---
title: Task Ingestion
description: Creating `RSSD`s by executing shell tasks.
---

By leveraging `surveilr ingest tasks`, users can automate the execution of shell tasks, transforming the outputs into structured JSON data that is inserted into the `uniform_resource` table in the RSSD. 

## Using `surveilr ingest tasks`
The `surveilr ingest tasks` command is designed to accept one or more lines of Deno Task Shell commands/tasks through STDIN, executing them sequentially. The output of each command is then formatted as JSON (or as specified) and stored in `uniform_resource`. Inputs can be categorized into two types:

- **Simple Text**: A line of text not in JSONL format is treated as an anonymous command string. It is executed assuming the output will be in JSON format.
- **JSONL Format**: A line of text in JSONL format is considered a JSON object with specific attributes (`key` and optional `nature`). The `key`'s value is executed as a command, with its output stored using `key` as the identifier.

## Examples

### Without Identifier
This sends a single, unnamed command to `surveilr` for execution, with the output expected in JSON format.
```bash
# single command without identifier or nature, surveilr expects JSON
$ echo "osqueryi \"select * from users\" --json" | surveilr ingest tasks
```

### With Identifier and Nature
```bash
# single command with identifier and nature
$ echo "{ \"my-osquery-test\": \"osqueryi 'select * from users'\", \"nature\": \"txt\" }" | surveilr ingest tasks
```

### Multiple Commands
Multiple commands where each line can be a JSONL formatted object. The following runs Deno to grab a local `package.json` file, extracts all scripts starting with `surveilr-` and sends them to surveilr to execute and store.
```bash
$ deno eval "Deno.readTextFile('package.json').then(text => { \
      const data = JSON.parse(text);                          \
      console.log(                                            \
        Object.entries(data.scripts ?? {})                    \
          .filter(([k]) => k.startsWith('surveilr-'))         \
          .map(([k, v]) => ({ [k]: v }))                      \
          .map((line) => JSON.stringify(line)).join('\n'),    \
      )                                                       \
    }).catch((err) => console.error(err));"                   \
  | surveilr ingest tasks
```

`surveilr ingest tasks` works with remote executions too. The following runs Deno to grab a remote `deno.jsonc` file, extract all tasks starting with `surveilr-` and sends them to surveilr to execute and store.
```bash
$ deno eval "fetch(                                                                  \
      'https://raw.githubusercontent.com/netspective-labs/sql-aide/main/deno.jsonc', \
    ).then((res) => res.json()).then((data) =>                                       \
      console.log(                                                                   \
        Object.entries(data.tasks ?? {})                                             \
          .filter(([k]) => k.startsWith('surveilr-'))                                \
          .map(([k, v]) => ({ [k]: v }))                                             \
          .map((line) => JSON.stringify(line)).join('\n'),                           \
      )                                                                              \
    ).catch((err) => console.error(err));"                                           \
  | surveilr ingest tasks
```

## Testing Shell Tasks
To test the output of shell tasks without persisting with `ingest tasks`, take a look at [capturable executables](/surveilr/ingest/capexec#testing-shell-tasks)