/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "imagedelivery.net",
      },
      {
        hostname: "velog.velcdn.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
