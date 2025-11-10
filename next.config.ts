import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // 정적 사이트 생성
  trailingSlash: true,
  images: {
    unoptimized: true, // 정적 export 시 필요
  },
};

export default nextConfig;
