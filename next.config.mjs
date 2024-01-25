/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/profile',
      },
    ]
  },
};

export default nextConfig;
