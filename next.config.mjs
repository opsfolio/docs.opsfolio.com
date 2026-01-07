import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/spry/getting-started/introduction',
        permanent: false,
      }
    ];
  },
};

export default withMDX(config);
