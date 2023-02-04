/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./base.scss";`,
  },
  images: {
    domains: ["avatars.githubusercontent.com", "res.cloudinary.com"],

    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "example.com",
    //     port: "",
    //     pathname: "/images/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
