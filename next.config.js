/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "~@assets/scss/_variables.scss"; @import "~@assets/scss/_mixin.scss";`,
  },
  images: {
    domains: ["gscdn.hackers.co.kr", "cdn.hackers.com", "history.hackers.com", "i.ytimg.com", "todoproject-cdn.teamcode88.com"],
  },

  async rewrites() {
    return [
      {
        source: '/graphql/:path*',
        destination: `http://${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  }, 
};
