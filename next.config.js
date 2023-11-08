// @ts-check
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
  })
  const { withBlitz } = require("@blitzjs/next")
  
  /**
   * @type {import('@blitzjs/next').BlitzConfig}
   **/
  const config = {
    reactStrictMode: false,
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://azki8at90f.execute-api.us-east-1.amazonaws.com//:path*',
        },
      ]
    },
  }
  
  module.exports = withBlitz(withBundleAnalyzer(config))
  