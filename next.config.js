const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["images.ctfassets.net"],
	},
	async redirects() {
		return [
			{
				source: "/hopin",
				destination: "https://hopin.com/events/xviii-simonyi-konferencia",
				permanent: true,
			},
			{
				source: "/2019",
				destination: "https://regi.konferencia.simonyi.bme.hu/",
				permanent: true,
			},
			{
				source: "/2018",
				destination: "https://regi.konferencia.simonyi.bme.hu/2018",
				permanent: true,
			},
			{
				source: "/2017",
				destination: "https://regi.konferencia.simonyi.bme.hu/2017",
				permanent: true,
			},
		];
	},
};

module.exports = withPlugins(
	[[withBundleAnalyzer, { enabled: process.env.ANALYZE === "true" }]],
	nextConfig,
);
