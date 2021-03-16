const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["images.ctfassets.net"],
	},
};

module.exports = withPlugins(
	[[withBundleAnalyzer, { enabled: process.env.ANALYZE === "true" }]],
	nextConfig,
);
