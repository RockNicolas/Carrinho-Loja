/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
		fontFamily: {
			sans: [
				'"Source Sans 3"',
				'sans-serif'
			]
		},
		container: {
			center: 'true',
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				primary_hover: {
					DEFAULT: 'var(--primary-hover)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				tertiary: {
					DEFAULT: 'var(--tertiary)'
				},
				hover: {
					DEFAULT: 'var(--hover)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'infinite-scroll': {
					'0%': {
						transform: 'translateX(10)'
					},
					'50%': {
						transform: 'translateX(-57%)'
					},
					'100%': {
						transform: 'translateX(10)'
					}
				},
				slide: {
					from: {
						transform: 'translateX(100%)'
					},
					to: {
						transform: 'translateX(0)'
					}
				},
				fill: {
					'0%': {
						transform: 'scale(0)',
						opacity: '0'
					},
					'50%': {
						transform: 'scaleY(1.2)'
					}
				},
				"keyframes-fill": {
					"0%": {
						transform: "scale(0)",
						opacity: "0",
					},
					"50%": {
						transform: "scaleY(1.2)",
					},
				},
				bounceIn: {
					"0%": { transform: "scale(0.8)", opacity: "0" },
					"50%": { transform: "scale(1.5)", opacity: "1" },
					"100%": { transform: "scale(1)" },
				},
				spin: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'infinite-scroll': 'infinite-scroll 20s linear infinite',
				slide: 'slide 0.7s ease-in-out forwards',
				'keyframes-fill': 'fill 0.8s forwards'
			}
		}
	},
	// eslint-disable-next-line no-undef
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.scrollbar-hide': {
					/* IE and Edge */
					'-ms-overflow-style': 'none',

					/* Firefox */
					'scrollbar-width': 'none',

					/* Safari and Chrome */
					'&::-webkit-scrollbar': {
						display: 'none'
					}
				}
			}
			)
		}),
		require("tailwindcss-animate"),
	],
}