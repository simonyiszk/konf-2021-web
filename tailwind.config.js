module.exports = {
	purge: ["./src/**/*.{js,ts,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				red: { DEFAULT: "#C14048", dark: "#A5323D" },
				yellow: { DEFAULT: "#E6A537", dark: "#C6882E" },
				teal: { DEFAULT: "#7FB3D7", dark: "#73A8C9" },
				blue: { DEFAULT: "#273343", dark: "#1E2833" },
			},
			fontFamily: {
				Roboto: "Roboto",
				GothamPro: "Gotham Pro",
			},
			boxShadow: {
				darker:
					"0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
