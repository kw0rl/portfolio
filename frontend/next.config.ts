import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    return [
      {
        source: '/resume.pdf',
        destination: '/Resume_Muhammad%20Azrul%20Mustaqqim.pdf',
      },
    ];
  },
};

export default nextConfig;
