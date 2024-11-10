/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"dark": "#1F2937",
				"light": "#f7fafc",
				"primary": "#3182ce",
				"secondary": "#2c5282",
				"danger": "#e53e3e",
				"success": "#38a169",
				"warning": "#dd6b20",
				"info": "#3182ce",
				"vulcan":{
					50: "#BACDD5",
					100: "#AEC2CE",
					200: "#94ACBE",
					300: "#7B95AF",
					400: "#617CA0",
					500: "#526587",
					600: "#424F6D",
					700: "#333A54",
					800: "#23273A",
					900: "#141521",			
				}
			},
		},
	},
	darkMode: "class",
	plugins: [],
}
