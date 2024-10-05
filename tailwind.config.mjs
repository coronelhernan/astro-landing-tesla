/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Gotham SSm A, sans-serif']
		},
		extend: {
			fontSize: {
				'xxs': '0.650rem'
			},
			colors: {
				'custom-blue': '#3E6AE1',
				'button-hover':'#221613'
			},
		},
	},
	plugins: [],
}