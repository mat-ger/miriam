/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/miriam", // replace <repository-name> with your repository name
  assetPrefix: process.env.NODE_ENV === "production" ? "/miriam/" : "", // replace <repository-name> with your repository name
};

export default nextConfig;
