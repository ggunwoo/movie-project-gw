import withPlaiceholder from "@plaiceholder/next"

/** @type {import('next').NextConfig} */

const nextConfig = withPlaiceholder({
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },
})

export default nextConfig;