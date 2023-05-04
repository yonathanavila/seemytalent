/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    removeConsole: process.env.NODE_ENV === "production"

  },
  images: {
    domains: ['metadata.ens.domains'],
  }
}

module.exports = nextConfig
