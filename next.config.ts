import type { NextConfig } from "next";

// Static export for GitHub Pages (served at /ribarski-dvori-v2/)
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/ribarski-dvori-v2" : "",
  images: { unoptimized: true },
};

export default nextConfig;
