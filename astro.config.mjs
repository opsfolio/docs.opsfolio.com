import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import pageInsight from "astro-page-insight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Opsfolio Docs",
      social: {
        github: "https://github.com/opsfolio/releases.opsfolio.com",
        discord: "https://discord.gg/TbfdKMDY",
      },
      sidebar: [
        {
          label: "Resource Surveillance",
          items: [
            {
              label: "Installation",
              link: "/surveilr/installation",
            },
            {
              label: "Ingestion",
              items: [
                {
                  label: "Files Ingestion",
                  link: "/surveilr/ingest/files",
                },
                {
                  label: "Tasks Ingestion",
                  link: "/surveilr/ingest/tasks",
                },
                {
                  label: "Capturable Executables",
                  link: "/surveilr/ingest/capexec",
                },
                {
                  label: "IMAP Emails Ingestion",
                  link: "/surveilr/ingest/imap",
                },
              ],
            },
            {
              label: "Admin",
              items: [
                {
                  label: "Merge",
                  link: "/surveilr/admin/merge",
                },
              ],
            },
            {
              label: "Code Notebooks",
              link: "/surveilr/notebooks/code",
            },
            {
              label: "UDI",
              items: [
                {
                  label: "PGP",
                  items: [
                    {
                      label: "Introduction",
                      link: "/surveilr/udi/pgp/intro",
                    },
                  ],
                },
              ],
            },
            {
              label: "Concepts",
              items: [
                {
                  label: "RSSD",
                  link: "/surveilr/concepts/rssd",
                },
              ],
            },
            {
              label: "Reference",
              items: [
                {
                  label: "Database",
                  items: [
                    {
                      label: "State Schema",
                      link: "/surveilr/reference/db/schema",
                    },
                    {
                      label: "Notebook Schema",
                      link: "/surveilr/reference/db/notebook",
                    },
                  ],
                },
                {
                  label: "CLI Commands",
                  link: "/surveilr/reference/cli/commands",
                },
              ],
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
