/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/writing",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/writing/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
