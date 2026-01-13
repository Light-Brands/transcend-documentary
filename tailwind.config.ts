import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core Palette from Website Spec
        'void-black': '#0A0A0A',
        'ash': '#1A1A1A',
        'smoke': '#2D2D2D',
        'mist': '#8A8A8A',
        'cloud': '#C9C9C9',
        'light': '#F5F5F5',
        'sacred-gold': '#C9A962',
        'ember': '#D4A574',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Cormorant', 'Georgia', 'serif'],
        body: ['Source Sans 3', 'Source Sans Pro', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Display Headlines
        'display-lg': ['6rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '300' }],
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '300' }],
        'display-sm': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '300' }],
        // Section Headlines
        'section-lg': ['4rem', { lineHeight: '1.15', fontWeight: '400' }],
        'section': ['3rem', { lineHeight: '1.2', fontWeight: '400' }],
        'section-sm': ['2rem', { lineHeight: '1.25', fontWeight: '400' }],
        // Pull Quotes
        'quote-lg': ['2.5rem', { lineHeight: '1.3', fontWeight: '400' }],
        'quote': ['2rem', { lineHeight: '1.35', fontWeight: '400' }],
        'quote-sm': ['1.5rem', { lineHeight: '1.4', fontWeight: '400' }],
        // Body Copy
        'body-lg': ['1.25rem', { lineHeight: '1.7', fontWeight: '300' }],
        'body': ['1.125rem', { lineHeight: '1.7', fontWeight: '300' }],
        'body-sm': ['1rem', { lineHeight: '1.6', fontWeight: '300' }],
        // Captions
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.1em', fontWeight: '400' }],
        'caption-sm': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.12em', fontWeight: '400' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
        'gradient-warm': 'linear-gradient(180deg, #1A1A1A 0%, #2D2D2D 100%)',
      },
      transitionDuration: {
        '800': '800ms',
        '1200': '1200ms',
      },
    },
  },
  plugins: [],
};

export default config;
