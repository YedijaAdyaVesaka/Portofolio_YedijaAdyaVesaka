import type { NextConfig } from "next";

/**
 * Next.js configuration.
 * `remotePatterns` is pre-configured so you can drop in Unsplash/CDN imagery
 * with next/image without touching config again.
 */
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
