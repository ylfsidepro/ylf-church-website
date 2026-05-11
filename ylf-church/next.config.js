/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Sanity Studio to work inside Next.js App Router
  transpilePackages: ['next-sanity'],

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/studio/:path*',
        headers: [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }],
      },
    ]
  },
}

module.exports = nextConfig
