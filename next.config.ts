import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Replace 'musasdelbosque' with your actual repository name
  basePath: '/musasdelbosque',
  assetPrefix: '/musasdelbosque/',
};

export default nextConfig;
