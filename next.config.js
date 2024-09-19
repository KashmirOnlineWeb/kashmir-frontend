/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false, // Added this line
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