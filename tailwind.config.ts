import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			animationDuration: {
				'5000ms': '5000ms',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			prefix: 'tcgportal',
			// layout: {
			// 	disabledOpacity: 0.5,
			// 	radius: {
			// 		small: '0.5rem',
			// 		medium: '0.85rem',
			// 		large: '1.15rem',
			// 	},
			// 	fontSize: {
			// 		tiny: '0.75rem', // text-tiny
			// 		small: '0.875rem', // text-small
			// 		medium: '1rem', // text-medium
			// 		large: '1.5rem', // text-large
			// 	},
			// },
			themes: {
				light: {
					colors: {
						primary: {
							100: '#FDCECB',
							200: '#FC979A',
							300: '#F86376',
							400: '#F13C65',
							500: '#E9004C',
							600: '#C80055',
							700: '#A70057',
							800: '#870053',
							900: '#6F0050',
							DEFAULT: '#E9004C',
						},
						secondary: {
							100: '#E0FAF6',
							200: '#C2F6F1',
							300: '#9CE4E4',
							400: '#7AC5CA',
							500: '#4f9ba8',
							600: '#397D90',
							700: '#276078',
							800: '#194561',
							900: '#0F3250',
							DEFAULT: '#4f9ba8',
						},
						success: {
							100: '#EFFDD2',
							200: '#DCFBA6',
							300: '#C0F378',
							400: '#A3E755',
							500: '#7AD822',
							600: '#5EB918',
							700: '#459B11',
							800: '#307D0A',
							900: '#216706',
							DEFAULT: '#7AD822',
						},
						warning: {
							100: '#FEF9CC',
							200: '#FEF199',
							300: '#FCE666',
							400: '#FADB40',
							500: '#F7CA02',
							600: '#D4A901',
							700: '#B18A01',
							800: '#8F6C00',
							900: '#765700',
							DEFAULT: '#F7CA02',
						},
						danger: {
							100: '#FDD6CB',
							200: '#FCA697',
							300: '#F66A63',
							400: '#EC3C43',
							500: '#E1011F',
							600: '#C1002C',
							700: '#A20034',
							800: '#820035',
							900: '#6C0036',
							DEFAULT: '#E1011F',
						},
					},
				},
				dark: {
					colors: {
						primary: {
							100: '#FDCECB',
							200: '#FC979A',
							300: '#F86376',
							400: '#F13C65',
							500: '#E9004C',
							600: '#C80055',
							700: '#A70057',
							800: '#870053',
							900: '#6F0050',
							DEFAULT: '#E9004C',
						},
						secondary: {
							100: '#E0FAF6',
							200: '#C2F6F1',
							300: '#9CE4E4',
							400: '#7AC5CA',
							500: '#4f9ba8',
							600: '#397D90',
							700: '#276078',
							800: '#194561',
							900: '#0F3250',
							DEFAULT: '#4f9ba8',
						},
						success: {
							100: '#EFFDD2',
							200: '#DCFBA6',
							300: '#C0F378',
							400: '#A3E755',
							500: '#7AD822',
							600: '#5EB918',
							700: '#459B11',
							800: '#307D0A',
							900: '#216706',
							DEFAULT: '#7AD822',
						},
						warning: {
							100: '#FEF9CC',
							200: '#FEF199',
							300: '#FCE666',
							400: '#FADB40',
							500: '#F7CA02',
							600: '#D4A901',
							700: '#B18A01',
							800: '#8F6C00',
							900: '#765700',
							DEFAULT: '#F7CA02',
						},
						danger: {
							100: '#FDD6CB',
							200: '#FCA697',
							300: '#F66A63',
							400: '#EC3C43',
							500: '#E1011F',
							600: '#C1002C',
							700: '#A20034',
							800: '#820035',
							900: '#6C0036',
							DEFAULT: '#E1011F',
						},
					},
				},
			},
		}),
	],
};
export default config;
