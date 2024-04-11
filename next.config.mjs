import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/SportProgram/1", // Specify the route you want to open
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
