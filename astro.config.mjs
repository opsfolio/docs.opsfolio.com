import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import pageInsight from "astro-page-insight";
import remarkMermaid from "remark-mermaidjs";

// https://astro.build/config
export default defineConfig({
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkMermaid],
  },
  integrations: [
    starlight({
      title: "Opsfolio Docs",
      customCss: ["./src/assets/css/custom.css"],
      social: {
        github: "https://github.com/opsfolio/releases.opsfolio.com",
        discord: "https://discord.gg/TbfdKMDY",
      },
      sidebar: [
        {
          label: "Understanding Compliance Processes for Technical Staff",
          collapsed: true,
          items: [
            {
              label: "Introduction to Compliance Frameworks",
              collapsed: true,
              items: [
                {
                  label: "Overview of Compliance Frameworks",
                  link: "/compliance-processes/introduction/intro",
                },
                {
                  label:
                    "Regulatory and Industry-Specific Compliance Frameworks",
                  link: "/compliance-processes/introduction/compliance-frameworks",
                },
                {
                  label: "Implementing Compliance Frameworks in Organizations",
                  link: "/compliance-processes/introduction/implement-comp-org",
                },
                {
                  label: "Case Studies and Practical Applications",
                  link: "/compliance-processes/introduction/case-studies",
                },
                {
                  label: "Conclusion and Next Steps",
                  link: "/compliance-processes/introduction/conclusion",
                },
              ],
            },
            // {
            //   label: "Introduction to Compliance Frameworks",
            //   link: "/compliance-processes/introduction",
            // },
            {
              label: "Key Concepts in Compliance",
              collapsed: true,
              items: [
                {
                  label: "Understanding Controls",
                  link: "/compliance-processes/key-concepts/concepts",
                },
                {
                  label: "Policies and Procedures",
                  link: "/compliance-processes/key-concepts/policies-and-procedures",
                },
                {
                  label:
                    "Human Attestation vs. Machine Attestation of Evidence",
                  link: "/compliance-processes/key-concepts/attestation",
                },
                {
                  label: "Documenting Compliance",
                  link: "/compliance-processes/key-concepts/documenting-compliance",
                },
                {
                  label: "Implementation of Technical Controls",
                  link: "/compliance-processes/key-concepts/implement-technical-controls",
                },
                {
                  label: "Automation in Compliance",
                  link: "/compliance-processes/key-concepts/automation",
                },
                {
                  label: "Continuous Compliance Monitoring",
                  link: "/compliance-processes/key-concepts/compliance-monitoring",
                },
                {
                  label: "Incident Response and Management",
                  link: "/compliance-processes/key-concepts/incident-response",
                },
                {
                  label: "Risk Management and Assessment",
                  link: "/compliance-processes/key-concepts/risk-management",
                },
                {
                  label: "Advanced Topics in Policies and Procedures",
                  link: "/compliance-processes/key-concepts/advanced-topics-in-policies",
                },
                {
                  label: "Practical Lab Exercises",
                  link: "/compliance-processes/key-concepts/lab-exercises",
                },
              ],
            },
            // {
            //   label: "Key Concepts in Compliance",
            //   link: "/compliance-processes/concepts",
            // },
            {
              label: "Implementing Compliance Frameworks in Organizations",
              collapsed: true,
              items: [
                {
                  label: "Implementing Controls",
                  link: "/compliance-processes/compliance-frameworks/frameworks",
                },
                {
                  label:
                    "Integration of Controls into Software Development, Operations, and Quality Assurance Processes",
                  link: "/compliance-processes/compliance-frameworks/integration",
                },
                {
                  label:
                    "Case Studies and Examples of Control Implementation in Real-World Scenarios",
                  link: "/compliance-processes/compliance-frameworks/case-studies",
                },
                {
                  label: "Developing Policies and Procedures",
                  link: "/compliance-processes/compliance-frameworks/developing-policies",
                },
              ],
            },
            // {
            //   label: "Implementing Compliance Measures",
            //   link: "/compliance-processes/implementing",
            // },
            {
              label: "Generating and Managing Evidence",
              collapsed: true,
              items: [
                {
                  label: "Types of Evidence",
                  link: "/compliance-processes/generating-evidence/types-of-evidence",
                },
                {
                  label: "Human Attestation vs. Machine Attestation",
                  link: "/compliance-processes/generating-evidence/attestation",
                },
                {
                  label: "Documenting Compliance",
                  link: "/compliance-processes/generating-evidence/documenting-compliance",
                },
                {
                  label: "Evidence Management Lifecycle",
                  link: "/compliance-processes/generating-evidence/evidence-management",
                },
                {
                  label:
                    " Advanced Techniques for Collecting and Preserving Evidence",
                  link: "/compliance-processes/generating-evidence/preserving-evidence",
                },
              ],
            },
            // {
            //   label: "Generating and Managing Evidence",
            //   link: "/compliance-processes/generating-evidence",
            // },
            {
              label: "Auditing and Assurance",
              collapsed: true,
              items: [
                {
                  label: "Overview of Auditing",
                  link: "/compliance-processes/auditing-and-assurance/auditing",
                },
                {
                  label: "Preparing for Audits",
                  link: "/compliance-processes/auditing-and-assurance/preparing-for-audits",
                },
                {
                  label: "Advanced Topics for a Technical Audience",
                  link: "/compliance-processes/auditing-and-assurance/advanced-topics",
                },
              ],
            },
            // {
            //   label: "Auditing and Assurance",
            //   link: "/compliance-processes/auditing",
            // },
            {
              label: "Case Studies and Practical Applications",
              link: "/compliance-processes/case-studies",
            },
          ],
        },
        {
          label: "Human Attestation vs Machine Attestation",
          collapsed: true,
          items: [
            {
              label:
                "Introduction to Human Attestation vs. Machine Attestation",
              link: "human-vs-machine-attestation/introduction",
            },
            {
              label: "Understanding Human Attestation",
              link: "human-vs-machine-attestation/human-attestation",
            },
            {
              label: "Understanding Machine Attestation",
              link: "human-vs-machine-attestation/machine-attestation",
            },
            {
              label: "Transitioning from Human to Machine Attestation",
              link: "human-vs-machine-attestation/transitioning",
            },
            {
              label: "Practical Applications and Case Studies",
              link: "human-vs-machine-attestation/practical-applications",
            },
            {
              label: " Future Trends in Attestation",
              link: "human-vs-machine-attestation/future-trends",
            },
          ],
        },
        {
          label: "Automating Compliance",
          collapsed: true,
          items: [
            {
              label: "Introduction to Automating Compliance Frameworks",
              collapsed: true,
              items: [
                {
                  label: "Overview of Automating Compliance Frameworks",
                  link: "/automating-compliance/introduction/intro",
                },
                {
                  label: "Key Components of Automated Compliance Frameworks",
                  link: "/automating-compliance/introduction/key-components",
                },
              ],
            },
            {
              label: "Automating Key Concepts in Compliance",
              collapsed: true,
              items: [
                {
                  label: "Automating Controls",
                  link: "/automating-compliance/automating-key-concepts/automating-controls",
                },
                {
                  label: "Automating Policies and Procedures",
                  link: "/automating-compliance/automating-key-concepts/automating-policies",
                },
              ],
            },
            {
              label:
                "Implementing Automated Compliance Frameworks in Organizations",
              collapsed: true,
              items: [
                {
                  label: "Implementing Automated Controls",
                  link: "/automating-compliance/implementing-automated-compliance-framework/implementing-automated-controls",
                },
                {
                  label:
                    "Integration of Automated Controls into Software Development, Operations, and Quality Assurance Processes",
                  link: "/automating-compliance/implementing-automated-compliance-framework/integration-of-automated-controls",
                },
              ],
            },
            {
              label: "Generating and Managing Evidence in an Automated Context",
              collapsed: true,
              items: [
                {
                  label: "Types of Evidence in Automated Compliance",
                  link: "/automating-compliance/generating-and-managing-evidence/types-of-evidence",
                },
                {
                  label:
                    "Techniques for Collecting and Preserving Automated Evidence",
                  link: "/automating-compliance/generating-and-managing-evidence/techniques",
                },
              ],
            },
            {
              label: "Automating Auditing and Assurance",
              collapsed: true,
              items: [
                {
                  label: "Automating Auditing and Assurance",
                  link: "/automating-compliance/automated-auditing-and-assurance/automated-auditing",
                },
                {
                  label: "Preparing for Automated Audits",
                  link: "/automating-compliance/automated-auditing-and-assurance/preparing-automated-audits",
                },
                {
                  label: "Advanced Topics for a Technical Audience",
                  link: "/automating-compliance/automated-auditing-and-assurance/advanced-topics",
                },
              ],
            },
          ],
        },
        {
          label: "Evidence Warehouse",
          items: [
            {
              label: "Getting Started",
              link: "/surveilr/getting-started",
            },
            {
              label: "How-to",
              items: [
                {
                  label: "Installation Guide",
                  link: "/surveilr/how-to/installation-guide",
                },
                {
                  label: "How to Collect Evidence",
                  link: "/surveilr/how-to/evidence-collection",
                },
                {
                  label: "How to Ingest and Query Large JSON Files",
                  link: "/surveilr/how-to/ingest-and-query-json-files",
                },
                {
                  label: "How to Prepare Evidence at The-Edge",
                  link: "/surveilr/how-to/prepare-evidence-at-the-edge",
                },
                {
                  label: "How to Orchestrate Evidence",
                  link: "/surveilr/how-to/orchestrate-evidence",
                },
                {
                  label:
                    "How to Preview Evidence via surveilr SQLPage Integration",
                  link: "/surveilr/how-to/preview-evidence",
                },
              ],
            },
            {
              label: "Tutorials",
              link: "/surveilr/tutorials",
            },
            {
              label: "Reference",
              collapsed: true,
              items: [
                {
                  label: "Database",
                  collapsed: true,
                  items: [
                    {
                      label: "State Schema",
                      collapsed: true,
                      items: [
                        {
                          label: "State Schema",
                          link: "/surveilr/reference/db/surveilr-state-schema/state_schema",
                        },
                        {
                          label: "Behavior",
                          link: "/surveilr/reference/db/surveilr-state-schema/behavior",
                        },
                        {
                          label: "Device",
                          link: "/surveilr/reference/db/surveilr-state-schema/device",
                        },
                        {
                          label: "Device Party Relationship",
                          link: "/surveilr/reference/db/surveilr-state-schema/device_party_relationship",
                        },
                        {
                          label: "Gender Type",
                          link: "/surveilr/reference/db/surveilr-state-schema/gender_type",
                        },
                        {
                          label: "Orchestration Nature",
                          link: "/surveilr/reference/db/surveilr-state-schema/orchestration_nature",
                        },
                        {
                          label: "Orchestration Session",
                          link: "/surveilr/reference/db/surveilr-state-schema/orchestration_session",
                        },
                        {
                          label: "Orchestration Session Log",
                          link: "/surveilr/reference/db/surveilr-state-schema/orchestration_session_log",
                        },
                        {
                          label: "Orchestration Session Entry",
                          link: "/surveilr/reference/db/surveilr-state-schema/orchestration_session_entry",
                        },
                        {
                          label: "Orchestration Session Exec",
                          link: "/surveilr/reference/db/surveilr-state-schema/orchestration_session_exec",
                        },
                        {
                          label: "Orchestration Session Issue",
                          link: "/surveilr/reference/db/surveilr-state-schema/orchestration_session_issue",
                        },
                        {
                          label: "Orchestration Session Issue Relation",
                          link: "/surveilr/reference/db/surveilr-state-schema/orchestration_session_issue_relation",
                        },
                        {
                          label: "Orchestration Session State",
                          link: "/surveilr/reference/db/surveilr-state-schema/orchestration_session_state",
                        },
                        {
                          label: "Organization",
                          link: "/surveilr/reference/db/surveilr-state-schema/organization",
                        },
                        {
                          label: "Organization Role",
                          link: "/surveilr/reference/db/surveilr-state-schema/organization_role",
                        },
                        {
                          label: "Organization Role Type",
                          link: "/surveilr/reference/db/surveilr-state-schema/organization_role_type",
                        },
                        {
                          label: "Party",
                          link: "/surveilr/reference/db/surveilr-state-schema/party",
                        },
                        {
                          label: "Party Type",
                          link: "/surveilr/reference/db/surveilr-state-schema/party_type",
                        },
                        {
                          label: "Party Relation",
                          link: "/surveilr/reference/db/surveilr-state-schema/party_relation",
                        },
                        {
                          label: "Party Relation Type",
                          link: "/surveilr/reference/db/surveilr-state-schema/party_relation_type",
                        },
                        {
                          label: "Person",
                          link: "/surveilr/reference/db/surveilr-state-schema/person",
                        },
                        {
                          label: "Uniform Resource",
                          link: "/surveilr/reference/db/surveilr-state-schema/uniform_resource",
                        },
                        {
                          label: "Uniform Resource Transform",
                          link: "/surveilr/reference/db/surveilr-state-schema/uniform_resource_transform",
                        },
                        {
                          label:
                            "Uniform Resource Ingest Resource Path Match Rule ",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_resource_path_match_rule",
                        },
                        {
                          label:
                            "Uniform Resource Ingest Resource Path Rewrite Rule ",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_resource_path_rewrite_rule",
                        },
                        {
                          label: "Uniform Resource Ingest Session",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session",
                        },
                        {
                          label: "Uniform Resource Ingest Session Attachment",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_attachment",
                        },
                        {
                          label: "Uniform Resource Ingest Session Fs Path",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_fs_path",
                        },
                        {
                          label:
                            "Uniform Resource Ingest Session Fs Path Entry",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_fs_path_entry",
                        },
                        {
                          label: "Uniform Resource Ingest Session IMAP Account",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_imap_account",
                        },
                        {
                          label:
                            "Uniform Resource Ingest Session IMAP Account Folder",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_imap_acct_folder",
                        },
                        {
                          label:
                            "Uniform Resource Ingest Session IMAP Account Folder Message",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_imap_acct_folder_message",
                        },
                        {
                          label: "Uniform Resource Ingest Session PLM Account",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_plm_account",
                        },
                        {
                          label:
                            "Uniform Resource Ingest Session PLM Account Label",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_plm_acct_label",
                        },
                        {
                          label:
                            "Uniform Resource Ingest Session PLM Account Project",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_plm_acct_project",
                        },
                        {
                          label:
                            "Uniform Resource Ingest Session PLM Account Project Issue",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_plm_acct_project_issue",
                        },
                        {
                          label:
                            "Uniform Resource Ingest Session PLM Account Relationship",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_plm_acct_relationship",
                        },
                        {
                          label: "Uniform Resource Ingest Session PLM Comment",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_plm_comment",
                        },
                        {
                          label:
                            "Uniform Resource Ingest Session PLM Issue Reaction",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_plm_issue_reaction",
                        },
                        {
                          label:
                            "Uniform Resource Ingest Session PLM Issue Type",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_plm_issue_type",
                        },
                        {
                          label:
                            "Uniform Resource Ingest Session PLM Milestone",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_plm_milestone",
                        },
                        {
                          label: "Uniform Resource Ingest Session PLM Reaction",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_plm_reaction",
                        },
                        {
                          label: "Uniform Resource Ingest Session PLM User",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_plm_user",
                        },
                        {
                          label: "Uniform Resource Ingest Session Task",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_task",
                        },
                        {
                          label: "Uniform Resource Ingest Session UDI-PGP SQL",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_udi_pgp_sql",
                        },
                      ],
                    },
                    {
                      label: "Notebooks Schema",
                      collapsed: true,
                      items: [
                        {
                          label: "Notebooks Schema",
                          link: "/surveilr/reference/db/surveilr-code-notebooks-schema/notebooks_schema",
                        },
                        {
                          label: "Assurance Schema",
                          link: "/surveilr/reference/db/surveilr-code-notebooks-schema/assurance_schema",
                        },
                        {
                          label: "Code Notebook Cell",
                          link: "/surveilr/reference/db/surveilr-code-notebooks-schema/code_notebook_cell",
                        },
                        {
                          label: "Code Notebook Kernel",
                          link: "/surveilr/reference/db/surveilr-code-notebooks-schema/code_notebook_kernel",
                        },
                        {
                          label: "Code Notebook State",
                          link: "/surveilr/reference/db/surveilr-code-notebooks-schema/code_notebook_state",
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "Ingestion",
                  collapsed: true,
                  items: [
                    {
                      label: "Files Ingestion",
                      link: "/surveilr/reference/ingest/files",
                    },
                    {
                      label: "Tasks Ingestion",
                      link: "/surveilr/reference/ingest/tasks",
                    },
                    {
                      label: "Capturable Executables",
                      link: "/surveilr/reference/ingest/capexec",
                    },
                    {
                      label: "IMAP Emails Ingestion",
                      link: "/surveilr/reference/ingest/imap",
                    },
                  ],
                },
                {
                  label: "Admin",
                  collapsed: true,

                  items: [
                    { label: "Merge", link: "/surveilr/reference/admin/merge" },
                  ],
                },
                {
                  label: "Extending Surveilr",
                  collapsed: true,
                  items: [
                    {
                      label:
                        "Content Extensibility with Capturable Executables",
                      link: "/surveilr/reference/extend/content-extensibility",
                    },
                    {
                      label: "SQL DDL Extensibility with SQL Notebooks",
                      link: "/surveilr/reference/extend/sql-ddl-extensibility",
                    },
                    {
                      label:
                        "Integrated TypeScript programmability and scriptability",
                      link: "/surveilr/reference/extend/integrated-ts",
                    },
                  ],
                },

                {
                  label: "UDI",
                  collapsed: true,
                  items: [
                    {
                      label: "PGP",
                      collapsed: true,
                      items: [
                        {
                          label: "Introduction",
                          link: "/surveilr/reference/udi/pgp/intro",
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "Concepts",
                  collapsed: true,
                  items: [
                    {
                      label: "RSSD",
                      link: "/surveilr/reference/concepts/resource-surveillance",
                    },
                    {
                      label: "WPAs",
                      link: "/surveilr/reference/concepts/work-product-artifacts",
                    },
                  ],
                },
                {
                  label: "Support",
                  collapsed: true,
                  items: [
                    {
                      label: "Filestash",
                      link: "/surveilr/reference/support/filestash",
                    },
                    {
                      label: "RCLONE",
                      link: "/surveilr/reference/support/rclone",
                    },
                  ],
                },

                {
                  label: "CLI Arguments",
                  link: "/surveilr/reference/arguments/cli-arguments",
                },
                {
                  label: "CLI Commands",
                  link: "/surveilr/reference/cli/commands",
                },
                {
                  label: "Aggregating RSSDs",
                  link: "/surveilr/reference/aggregate/aggregating-rssd",
                },
                {
                  label: "Code Notebooks",
                  link: "/surveilr/reference/code-notebooks",
                },
                {
                  label: "Terminologies",
                  link: "/surveilr/reference/terminology/terminologies",
                },
              ],
            },

            {
              label: "Disciplines and WPAs",
              collapsed: true,
              items: [
                {
                  label: "Software Engineers",
                  link: "/surveilr/disciplines/software-engineer",
                },
                {
                  label: "System Engineers",
                  link: "/surveilr/disciplines/system-engineer",
                },
                {
                  label: "QA Engineers",
                  link: "/surveilr/disciplines/qa",
                },
                {
                  label: "Security Analysts/Engineers",
                  link: "/surveilr/disciplines/security-analyst",
                },
                {
                  label: "Compliance Officers",
                  link: "/surveilr/disciplines/compliance-officer",
                },
                {
                  label: "Regulatory Affairs Specialists",
                  link: "/surveilr/disciplines/regulatory-affairs",
                },
                {
                  label: "Project Managers",
                  link: "/surveilr/disciplines/project-manager",
                },
                {
                  label: "Configuration Management Specialists",
                  link: "/surveilr/disciplines/configuration",
                },
                {
                  label: "Database Administrators",
                  link: "/surveilr/disciplines/database-admin",
                },
                {
                  label: "Network Administrators",
                  link: "/surveilr/disciplines/network-admin",
                },
                {
                  label: "DevOps Engineers",
                  link: "/surveilr/disciplines/devops",
                },
                {
                  label: "Technical Writers",
                  link: "/surveilr/disciplines/technical-writer",
                },
                {
                  label: "UI/UX Designers",
                  link: "/surveilr/disciplines/user-experience",
                },
                {
                  label: "Legal Counsel",
                  link: "/surveilr/disciplines/legal-counsel",
                },
                {
                  label: "Subject Matter Experts",
                  link: "/surveilr/disciplines/subject-matter-expert",
                },
                {
                  label: "Customer Support Representatives",
                  link: "/surveilr/disciplines/customer-support",
                },
                {
                  label: "Training and Education Specialists",
                  link: "/surveilr/disciplines/training",
                },
                {
                  label: "Risk Management Specialists",
                  link: "/surveilr/disciplines/risk-management",
                },
                {
                  label: "Incident Response Team Members",
                  link: "/surveilr/disciplines/incident-response",
                },
                {
                  label: "Performance and Reliability Engineers",
                  link: "/surveilr/disciplines/performance-reliability",
                },
                {
                  label: "Procurement Specialists",
                  link: "/surveilr/disciplines/procurement-specialist",
                },
                {
                  label: "Auditors",
                  link: "/surveilr/disciplines/auditors",
                },
                {
                  label: "External Assessors",
                  link: "/surveilr/disciplines/external-assessor",
                },
                {
                  label: "Ethical Hackers",
                  link: "/surveilr/disciplines/ethical-hacker",
                },
                {
                  label: "Penetration Testers",
                  link: "/surveilr/disciplines/penetration-tester",
                },
                {
                  label: "Compliance Automation Specialists",
                  link: "/surveilr/disciplines/compliance-automation",
                },
                {
                  label: "Business Analysts",
                  link: "/surveilr/disciplines/business-analyst",
                },
                {
                  label: "Product Owners",
                  link: "/surveilr/disciplines/product-owner",
                },
                {
                  label: "Product Managers",
                  link: "/surveilr/disciplines/product-managers",
                },
                {
                  label: "Human Factors Engineers",
                  link: "/surveilr/disciplines/human-factors-engineers",
                },
                {
                  label: "System Integrators",
                  link: "/surveilr/disciplines/system-integrators",
                },
                {
                  label: "Change Management Specialists",
                  link: "/surveilr/disciplines/change-management",
                },
                {
                  label: "Legal and Regulatory Consultants",
                  link: "/surveilr/disciplines/legal-consultants",
                },
                {
                  label: "Supply Chain Managers",
                  link: "/surveilr/disciplines/supply-chain-managers",
                },
                {
                  label: "Facilities Managers",
                  link: "/surveilr/disciplines/facilities-managers",
                },
                {
                  label: "Medical Device Specialists",
                  link: "/surveilr/disciplines/medical-device-specialists",
                },
                {
                  label: "Aerospace Engineers",
                  link: "/surveilr/disciplines/aerospace-engineers",
                },
                {
                  label: "Automotive Engineers",
                  link: "/surveilr/disciplines/automotive-engineers",
                },
              ],
            },

            {
              label: "FAQs",
              link: "/surveilr/faq/faqs",
            },
            {
              label: "Roadmap",
              link: "/surveilr/roadmap",
            },
            {
              collapsed: true,
              label: "Releases",
              items: [
                {
                  label: "v0.9.9",
                  link: "/surveilr/releases/v0_9_9",
                },
                {
                  label: "v0.9.10",
                  link: "/surveilr/releases/v0_9_10",
                },
                {
                  label: "v0.9.12",
                  link: "/surveilr/releases/v0_9_12",
                },
                {
                  label: "v0.9.13",
                  link: "/surveilr/releases/v0_9_13",
                },
                {
                  label: "v0.9.14",
                  link: "/surveilr/releases/v0_9_14",
                },
                {
                  label: "v0.9.16",
                  link: "/surveilr/releases/v0_9_16",
                },
                {
                  label: "v0.9.17",
                  link: "/surveilr/releases/v0_9_17",
                },
                {
                  label: "v0.10.0",
                  link: "/surveilr/releases/v0_10_0",
                },
                {
                  label: "v0.10.1",
                  link: "/surveilr/releases/v0_10_1",
                },
                {
                  label: "v0.10.2",
                  link: "/surveilr/releases/v0_10_2",
                },
                {
                  label: "v0.11.0",
                  link: "/surveilr/releases/v0_11_0",
                },
                {
                  label: "v0.13.0",
                  link: "/surveilr/releases/v0_13_0",
                },
                {
                  label: "v0.13.1",
                  link: "/surveilr/releases/v0_13_1",
                },
                {
                  label: "v0.13.2",
                  link: "/surveilr/releases/v0_13_2",
                },
                {
                  label: "v0.13.3",
                  link: "/surveilr/releases/v0_13_3",
                },
                {
                  label: "v0.13.4",
                  link: "/surveilr/releases/v0_13_4",
                },
                {
                  label: "v0.13.5",
                  link: "/surveilr/releases/v0_13_5",
                },
                {
                  label: "v0.13.6",
                  link: "/surveilr/releases/v0_13_6",
                },
                {
                  label: "v0.21.0",
                  link: "/surveilr/releases/v0_21_0",
                },
                {
                  label: "v0.22.1",
                  link: "/surveilr/releases/v0_22_1",
                },
                {
                  label: "v0.23.0",
                  link: "/surveilr/releases/v0_23_0",
                },
                {
                  label: "v0.24.0",
                  link: "/surveilr/releases/v0_24_0",
                },
                {
                  label: "v0.25.1",
                  link: "/surveilr/releases/v0_25_1",
                },
                {
                  label: "v0.26.0",
                  link: "/surveilr/releases/v0_26_0",
                },
                {
                  label: "v0.27.0",
                  link: "/surveilr/releases/v0_27_0",
                },
                {
                  label: "v0.27.1",
                  link: "/surveilr/releases/v0_27_1",
                },
                {
                  label: "v0.28.0",
                  link: "/surveilr/releases/v0_28_0",
                },
              ],
            },
          ],
        },
        {
          label: "Ecosystem Tools",
          items: [
            {
              label: "Microsoft Threat Modeling (MTM) Tool",
              link: "/ecosystem-tools/microsoft-threat-modeling",
            },
          ],
        },
        {
          label:
            'PII and PHI De-Identification Strategy for "edge" Data Ingestions',
          collapsed: true,
          items: [
            {
              label: "Introduction",
              link: "/pii-and-phi-deidentification/introduction",
            },
          ],
        },

        {
          label: "Opsfolio Suite",
          items: [
            {
              label: "Vision & Mission",
              link: "/opsfolio/",
            },
            {
              label: "Portfolio",
              items: [
                {
                  label: "Portfolio",
                  link: "/opsfolio/portfolio",
                },
              ],
            },
            {
              label: "Policies",
              items: [
                {
                  label: "Policies",
                  link: "/opsfolio/policies",
                },
              ],
            },
            {
              label: "Controls",
              items: [
                {
                  label: "Controls",
                  link: "/opsfolio/controls",
                },
              ],
            },
            {
              label: "FAQs",
              link: "/opsfolio/faq/faqs",
            },
          ],
        },
      ],
    }),
    pageInsight({
      lh: {
        weight: 0.5,
        breakPoint: 1024,
        pwa: true,
      },
      firstFetch: "open",
      cache: true,
      build: {
        bundle: true,
        showOnLoad: true, // This option is only available when `bundle` is `true`.
      },
    }),
  ],
});
