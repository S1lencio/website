import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    basePath: "/website",
    output: "export",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
