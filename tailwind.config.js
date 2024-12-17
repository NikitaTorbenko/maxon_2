/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FFC01E",
				"gray-light": "#3F3F3F",
				"primary-gradient":
					"linear-gradient(145.86deg, #FFC01E -5.59%, #FFA41C 129.55%)",
				"backround-primary": "#2A2A2A",
				'bg-secondary': '#2b2b2b'
			},
			fontFamily: {
				oswald: ["Oswald"]
			}
		}
	},
	plugins: []
}
