/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "figureforgeapp.azurewebsites.net",
      },
      {
        protocol: "https",
        hostname: "figurestorage.blob.core.windows.net",
      },
    ],
    domains: ["i.etsystatic.com"],
  },
};
