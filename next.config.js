/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "flagcdn.com",
      "cdn.britannica.com",
      "upload.wikimedia.org",
      "cdn.sanity.io",
    ],
  },
};

module.exports = nextConfig;
