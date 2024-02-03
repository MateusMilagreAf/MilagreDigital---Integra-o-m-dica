/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ["antd"],
  experimental: {
    appDir: false,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
