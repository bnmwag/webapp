/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['cdn.discordapp.com'],
		unoptimized: true,
	},
};

module.exports = nextConfig;
