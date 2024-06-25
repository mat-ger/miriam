/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  // basePath: "/_next/static/media",
  basePath: process.env.NODE_ENV === "production" ? "" : "", // replace <repository-name> with your repository name
  // assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
};

export default nextConfig;
