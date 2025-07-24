import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				heading: ['Poppins', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// New Vibrant Colors
				'electric-cyan': 'hsl(var(--electric-cyan))',
				'neon-green': 'hsl(var(--neon-green))',
				'hot-pink': 'hsl(var(--hot-pink))',
				'orange-burst': 'hsl(var(--orange-burst))',
				'purple-dream': 'hsl(var(--purple-dream))',
				'blue-sky': 'hsl(var(--blue-sky))',
				// Section backgrounds
				'section-1': 'hsl(var(--section-bg-1))',
				'section-2': 'hsl(var(--section-bg-2))',
				'section-3': 'hsl(var(--section-bg-3))'
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(135deg, hsl(var(--hero-gradient-start)) 0%, hsl(var(--hero-gradient-end)) 60%, hsl(var(--hero-gradient-accent)) 100%)',
				'glass-gradient': 'linear-gradient(135deg, hsl(var(--glass-bg) / 0.1) 0%, hsl(var(--glass-bg) / 0.05) 100%)',
				'vibrant-gradient': 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 33%, hsl(var(--accent)) 66%, hsl(var(--electric-cyan)) 100%)',
				'section-gradient-1': 'var(--bg-gradient-1)',
				'section-gradient-2': 'var(--bg-gradient-2)', 
				'section-gradient-3': 'var(--bg-gradient-3)',
				'rainbow-gradient': 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 20%, hsl(var(--accent)) 40%, hsl(var(--electric-cyan)) 60%, hsl(var(--neon-green)) 80%, hsl(var(--orange-burst)) 100%)',
				'mesh-gradient': `radial-gradient(at 40% 20%, hsl(var(--primary) / 0.3) 0px, transparent 50%),
                                  radial-gradient(at 80% 0%, hsl(var(--secondary) / 0.3) 0px, transparent 50%),
                                  radial-gradient(at 0% 50%, hsl(var(--accent) / 0.3) 0px, transparent 50%),
                                  radial-gradient(at 80% 50%, hsl(var(--electric-cyan) / 0.3) 0px, transparent 50%),
                                  radial-gradient(at 0% 100%, hsl(var(--hot-pink) / 0.3) 0px, transparent 50%),
                                  radial-gradient(at 80% 100%, hsl(var(--orange-burst) / 0.3) 0px, transparent 50%),
                                  radial-gradient(at 0% 0%, hsl(var(--neon-green) / 0.3) 0px, transparent 50%)`
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
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'fadeInUp': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slideInLeft': {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slideInRight': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'typewriter': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
				'slideInLeft': 'slideInLeft 0.8s ease-out forwards',
				'slideInRight': 'slideInRight 0.8s ease-out forwards',
				'typewriter': 'typewriter 2s steps(30) forwards',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
