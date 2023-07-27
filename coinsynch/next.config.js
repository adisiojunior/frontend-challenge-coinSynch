/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.coingecko.com'],
  },
  experimental: {
    fastRefresh: false,
  },
}

module.exports = nextConfig
