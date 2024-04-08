import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */

const nextConfig = withPlaiceholder({
  reactStrictMode: true,
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },
});

export default nextConfig;
