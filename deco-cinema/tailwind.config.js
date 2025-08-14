/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "2rem",
				screens: {
					"2xl": "1400px",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				deco: {
					gold: "var(--deco-gold)",
					burgundy: "var(--deco-burgundy)",
					sage: "var(--deco-sage)",
					gray: "var(--deco-gray)",
					cream: "var(--deco-cream)",
					charcoal: "var(--deco-charcoal)",
				},
			},
			fontFamily: {
				display: ["var(--font-display)"],
				serif: ["var(--font-serif)"],
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};