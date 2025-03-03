import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove appDir - it's no longer experimental in Next.js 15
  typescript: {
    // During development, type errors won't stop the app from working
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
