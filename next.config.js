/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/server/:path*",
          destination: process.env.NEXT_PUBLIC_BACKEND_API_PREFIX,
        },
      ];
    }
  
  };
  
  module.exports = nextConfig;
  