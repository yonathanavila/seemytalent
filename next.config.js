/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,

  },
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: ['metadata.ens.domains'],
  }
}

module.exports = nextConfig
