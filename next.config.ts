import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 para retratos grandes, donde la compresión por defecto se nota.
    qualities: [75, 90],
  },
};

export default nextConfig;
