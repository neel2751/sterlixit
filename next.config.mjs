/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // External hosts used as next/image src. Each host that appears in an
    // <Image> src must be allow-listed here or Next throws "hostname is not
    // configured under images".
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "cdn.worldvectorlogo.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "www.interiorstudioltd.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "sterlixit.co.uk",
          },
        ],
        destination: "https://www.sterlixit.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
