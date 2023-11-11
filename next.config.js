/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com","avatars.githubusercontent.com"],
  },
  plugins: ["react-hot-loader/babel"],
};

module.exports = nextConfig;
