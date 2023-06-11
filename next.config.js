/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["thumbnail.imgbin.com", "links.papareact.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
