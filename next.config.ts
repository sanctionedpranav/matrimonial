import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ['s3.ap-south-1.amazonaws.com'],
  },
};

export default nextConfig;
