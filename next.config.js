const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
	reactStrictMode: true,
};

module.exports = withPlugins(
	[[withBundleAnalyzer, { enabled: process.env.ANALYZE === "true" }]],
	nextConfig,
);
