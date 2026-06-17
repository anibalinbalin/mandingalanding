import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve images directly — never route through Vercel's Image Optimizer.
  images: {
    unoptimized: true,
  },
  // This dev box is reached over Tailscale, not the LAN, so allow both origins.
  allowedDevOrigins: ["10.10.11.186", "claude-code-sec.tailf626.ts.net"],
};

export default nextConfig;
