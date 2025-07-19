import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/inventory-management-system' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/inventory-management-system/' : ''
};

export default nextConfig;
