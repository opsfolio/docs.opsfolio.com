import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/spry',
        destination: '/spry/getting-started/introduction',
        permanent: false,
      },
      {
        source: '/qualityfolio',
        destination: '/qualityfolio/getting-started/introduction',
        permanent: false,
      },
      {
        source: '/surveilr',
        destination: '/surveilr/getting-started/introduction',
        permanent: false,
      },
      {
        source: '/fleetfolio',
        destination: '/fleetfolio/getting-started/introduction',
        permanent: false,
      },
      {
        source: '/test',
        destination: '/test/getting-started/introduction',
        permanent: false,
      },
    ];
  }
};

export default withMDX(config);
