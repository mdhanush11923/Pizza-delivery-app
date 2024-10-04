import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	colors: {
  		transparent: 'transparent',
  		current: 'currentColor',
  		white: '#ffffff',
  		purple: '#3f3cbb',
  		midnight: '#121063',
  		metal: '#565584',
  		limefrost: '#B4E380',
  		veggreen: '#C3FF93',
  		lemonburst: '#FFFF80',
  		myhouseblue: '#4C5D65',
  		peachblossom: '#fadfa1',
  		reddanger: '#FF204E',
  		charcoalgray: '#424242'
  	},
  	extend: {
  		fontFamily: {
  			montserrat: ["Montserrat", "sans-serif"],
  			poppins: ["Poppins", "sans-serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			'color-1': 'hsl(var(--color-1))',
  			'color-2': 'hsl(var(--color-2))',
  			'color-3': 'hsl(var(--color-3))',
  			'color-4': 'hsl(var(--color-4))',
  			'color-5': 'hsl(var(--color-5))'
  		},
  		animation: {
  			rainbow: 'rainbow var(--speed, 2s) infinite linear',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
  		},
  		keyframes: {
  			rainbow: {
  				'0%': {
  					'background-position': '0%'
  				},
  				'100%': {
  					'background-position': '200%'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			}
  		}
  	}
  },
  darkMode: ["class", "class"],
  darkMode: "class",
 plugins: [nextui(), require("tailwindcss-animate")],
};
