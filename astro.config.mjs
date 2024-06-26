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
          items: [
            {
              label: "Introduction to Compliance Frameworks",
              link: "/compliance-processes/introduction",
            },
          ],
        },
        {
          label: "Resource Surveillance",
          items: [
            {
              label: "Getting Started",
              link: "/surveilr/getting-started",
            },
            {
              label: "How-To",
              items: [
                {
                  label: "Installation guide ",
                  link: "/surveilr/how-to/installation-guide",
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
                          label: "Device",
                          link: "/surveilr/reference/db/surveilr-state-schema/device",
                        },
                        {
                          label: "Behavior",
                          link: "/surveilr/reference/db/surveilr-state-schema/behavior",
                        },
                        {
                          label: "Ingest Resource Path Match",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_resource_path_match_rule",
                        },
                        {
                          label: "ingest Resource Path Rewrite",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_resource_path_rewrite_rule",
                        },
                        {
                          label: "Ingest Session",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session",
                        },
                        {
                          label: "Ingest Session Fs Path",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_fs_path",
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
                          label: "Ingest Session Fs Path Entry",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_fs_path_entry",
                        },
                        {
                          label: "Ingest Session Task",
                          link: "/surveilr/reference/db/surveilr-state-schema/ur_ingest_session_task",
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
