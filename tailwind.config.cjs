/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#ff3e00',
				secondary: '#003e00'
			}
		}
	},
	plugins: []
};
