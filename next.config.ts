import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/falke-media-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
