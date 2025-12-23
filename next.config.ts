import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // allow builds even if type checks fail (user-requested)
  },
};

export default nextConfig;
