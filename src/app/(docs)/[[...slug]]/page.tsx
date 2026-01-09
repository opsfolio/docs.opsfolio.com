import { getPageImage, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { Feedback } from '@/components/feedback';
import { saveFeedback } from '@/lib/feedback';
import { headers } from 'next/headers';
import { LLMCopyButton, ViewOptions } from '@/components/ai/page-actions';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { FleetFolioIcon, QualityFolioIcon, SurveilrIcon } from '@/components/icons';
import { AISearchTrigger } from '@/components/search';
import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';

function HomePage() {
  const packages = [
    {
      title: 'Spry',
      description: 'Compliance tracking and regulatory intelligence for operational excellence',
      href: '/spry/getting-started/introduction',
      color: 'from-blue-500 to-cyan-500',
      icon: '/icons/spry-icon.png'
    },
    {
      title: 'Qualityfolio',
      description: 'Quality assurance and standards management for consistent excellence',
      href: '/qualityfolio/introduction/overview-of-qualityfolio',
      color: 'from-green-500 to-emerald-500',
      icon: '/icons/qualityfolio-icon.png'
    },
    {
      title: 'Surveilr',
      description: 'Real-time surveillance and monitoring for proactive operational insights',
      href: '/surveilr/core/what-is-surveilr',
      color: 'from-purple-500 to-pink-500',
      icon: '/icons/surveilr-icon.png'
    },
    {
      title: 'Fleetfolio',
      description: 'Fleet management and logistics optimization for streamlined operations',
      href: '/fleetfolio/eaa/introduction',
      color: 'from-yellow-500 to-orange-500',
      icon: '/icons/fleetfolio-icon.png'
    },
  ];

  const quickLinks = [
    { label: 'Spry', href: '/spry/getting-started/introduction' },
    { label: 'Qualityfolio', href: '/qualityfolio/introduction/overview-of-qualityfolio' },
    { label: 'Surveilor', href: '/surveilr/core/what-is-surveilr' },
    { label: 'Fleetfolio', href: '/fleetfolio/eaa/introduction' },
  ];

  const features = [
    {
      title: 'Real-time Monitoring',
      description: 'Monitor operations in real-time with comprehensive dashboards and instant alerts for anomalies.'
    },
    {
      title: 'Analytics & Insights',
      description: 'Deep insights into operational metrics with customizable reports and predictive analytics.'
    },
    {
      title: 'Workflow Automation',
      description: 'Automate routine tasks and create intelligent workflows to boost team productivity.'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance certifications and advanced access controls.'
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with your existing tools and platforms with pre-built integrations.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team via chat, email, and phone.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div>
                <img src="Opsfolio-Logo.png" style={{ width: "190px" }} />
              </div>

            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/spry/getting-started/introduction" className="text-gray-600 hover:text-blue-600 transition font-medium">
                Spry
              </Link>
              <Link href="/qualityfolio/introduction/overview-of-qualityfolio" className="text-gray-600 hover:text-blue-600 transition font-medium">
                Qualityfolio
              </Link>
              <Link href="/surveilr/core/what-is-surveilr" className="text-gray-600 hover:text-blue-600 transition font-medium">
                Surveilor
              </Link>
              <Link href="/fleetfolio/eaa/introduction" className="text-gray-600 hover:text-blue-600 transition font-medium">
                Fleetfolio
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <a href="https://github.com/opsfolio" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <Link
                href="/spry/getting-started/introduction"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium text-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-blue-600 bg-blue-100">
                Documentation Hub
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Operational Excellence
              <span className="text-blue-600"> Made Simple</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive documentation for Spry, Surveilor, Fleetfolio, and Qualityfolio.
              Manage, monitor, and optimize your operations with intelligent tools designed for modern teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/spry/getting-started/introduction"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg"
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">Complete solutions for operational intelligence and compliance management</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <Link
                key={pkg.title}
                href={pkg.href}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                {/* Background gradient - subtle */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4">
                    <span className="text-4xl"><img src={pkg.icon} /></span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to manage operations at scale</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition bg-white">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between px-6 py-4 rounded-lg bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md text-gray-900 hover:text-blue-600 transition-all cursor-pointer font-semibold"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Explore our comprehensive documentation and discover how OpsFollio can streamline your workflows.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="//spry/getting-started/introduction"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
            >
              Start Reading <ArrowRight className="h-5 w-5" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg">OpsFollio</h3>
              </div>
              <p className="text-sm">Transforming operations management for modern teams.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="//spry/getting-started/introduction" className="hover:text-white transition">Spry</Link></li>
                <li><Link href="//surveilor/getting-started/introduction" className="hover:text-white transition">Surveilor</Link></li>
                <li><Link href="//fleetfolio/getting-started/introduction" className="hover:text-white transition">Fleetfolio</Link></li>
                <li><Link href="//qualityfolio/getting-started/introduction" className="hover:text-white transition">Qualityfolio</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
                <li><a href="#" className="hover:text-white transition">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <p>&copy; 2024 OpsFollio. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                <a href="#" className="hover:text-white transition">Terms of Service</a>
                <a href="#" className="hover:text-white transition">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default async function Page(props: PageProps<'/[[...slug]]'>) {
  const params = await props.params;

  // If no slug, render home page
  if (!params.slug || params.slug.length === 0) {
    return <HomePage />;
  }

  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  // Map folder dirname to custom icons
  const iconMap: { [key: string]: React.ReactNode } = {
    'surveilr': <SurveilrIcon />,
    'qualityfolio': <QualityFolioIcon />,
    'fleetfolio': <FleetFolioIcon />,
  };

  const docsContent = (
    <DocsPage toc={page.data.toc} full={page.data.full}
      tableOfContent={{ style: 'clerk' }}
      tableOfContentPopover={{ style: 'clerk' }}
      lastUpdate={page.data.lastModified ? new Date(page.data.lastModified) : undefined}
      footer={{
        enabled: true, // Enable footer with feedback
      }}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row flex-wrap gap-2 items-center border-b pb-6">
        <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
        {/* <ViewOptions
          markdownUrl={`${page.url}.mdx`}
          githubUrl={`https://github.com/${owner}/${repo}/blob/dev/apps/docs/content/docs/${page.path}`}
        /> */}
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents()}
        />
        {/* Add feedback at the bottom */}
        <Feedback
          onRateAction={async (url, feedback) => {
            'use server';

            try {
              const headersList = await headers();
              const userAgent = headersList.get('user-agent') || undefined;
              const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim()
                || headersList.get('x-real-ip')
                || headersList.get('cf-connecting-ip')  // Cloudflare
                || undefined;

              saveFeedback(url, {
                opinion: feedback.opinion,
                message: feedback.message,
                sessionId: feedback.sessionId,
                metadata: {
                  userAgent,
                  ip,
                  ...feedback.clientMetadata,
                },
              });
              console.log('Feedback saved:', { url, feedback });

              return {};
            } catch (error) {
              console.error('Error saving feedback:', error);
              return {};
            }
          }}
        />
      </DocsBody>
    </DocsPage>
  );

  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      sidebar={{
        collapsible: true,
        defaultOpenLevel: 0,
        tabs: {
          transform(option, node) {
            let menuKey = option.url?.split('/')[1] || '';
            menuKey = menuKey.toLowerCase();
            return {
              ...option,
              description: node.description ?? option.description,
              icon: iconMap[menuKey] || option.icon,
            };
          },
        },
      }}
    >
      {docsContent}
      <div className='fixed !right-0 w-[100px]'>
        <AISearchTrigger />
      </div>
    </DocsLayout>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}