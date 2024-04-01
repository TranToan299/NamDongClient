const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles"), "./src"],
    prependData: `@import "sass/helpers/mixins.scss"; @import "sass/helpers/variables.scss";`,
  },
  images: {
    domains: ['nam-dong.s3-ap-southeast-1.amazonaws.com'],
  },
};

module.exports = nextConfig;
