/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // NOTE: picsum.photos is used ONLY for temporary demo/mock imagery
    // (see src/mocks/*). Once the backend returns real product/artisan
    // photo URLs, add that host here (or remove this block if the
    // backend serves images from the same origin) and delete picsum.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
