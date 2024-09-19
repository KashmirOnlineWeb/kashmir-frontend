/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/server/:path*",
        destination: process.env.NEXT_PUBLIC_SERVER_API_URL,
      },
    ];
  }
};

export default nextConfig;