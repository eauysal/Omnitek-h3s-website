/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.omnitekh3s.com' }],
        destination: 'https://omnitekh3s.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
