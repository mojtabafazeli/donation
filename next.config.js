/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tecdn.b-cdn.net",
      },
    ],
    deviceSizes: [16, 32, 48, 64, 96, 128],
  },
};

module.exports = nextConfig;


