/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#c6c6c6',
				russian: '#202127',
				bastille: '#2B2B33',
				revolver: '#36373F'
			}
		}
	},
	plugins: []
};
