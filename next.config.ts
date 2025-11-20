import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure route groups work properly
  experimental: {
    // This helps with route groups
  },
};

export default withPayload(nextConfig);
