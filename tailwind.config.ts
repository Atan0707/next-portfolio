import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		animation: {
  			'gradient': 'gradient 15s ease infinite',
  			'fade-in': 'fade-in 1.5s ease-out',
  			'slide-up': 'slide-up 1s ease-out',
  			'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  		},
  		keyframes: {
  			gradient: {
  				'0%, 100%': {
  					'background-size': '200% 200%',
  					'background-position': 'left center'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'right center'
  				},
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  				},
  				'100%': {
  					opacity: '1',
  				},
  			},
  			'slide-up': {
  				'0%': {
  					transform: 'translateY(100px)',
  					opacity: '0',
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1',
  				},
  			},
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  		},
  	}
  },
  plugins: [],
};
export default config;
