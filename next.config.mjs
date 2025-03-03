/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
        },
        {
          protocol: "https",
          hostname: "i.ibb.co",
        },
        {
            protocol: "https",
            hostname: "sjc.microlink.io",
          },
      ],
    },
    eslint: {
      ignoreDuringBuilds: true, 
    },
  };
  
  export default nextConfig;
  