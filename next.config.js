/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com"],
  },
    transpilePackages:['tts-react']
}



module.exports = nextConfig;
