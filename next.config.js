/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "flagcdn.com",
      "cdn.britannica.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
