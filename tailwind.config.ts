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
        // Core Palette
        'charcoal': '#2C2C2C',
        'slate': '#4A4A4A',
        'stone': '#6B6B6B',
        'pebble': '#9A9A9A',
        'cloud': '#E8E8E8',
        'mist': '#F5F5F5',
        // Accent Colors
        'sage': {
          DEFAULT: '#8B9F8B',
          light: '#A8B8A8',
          muted: '#C4CFC4',
          pale: '#E8EDE8',
        },
        'gold': {
          DEFAULT: '#B8A068',
          light: '#D4C494',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
        accent: ['Special Elite', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Display Headlines - reduced
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.02em', fontWeight: '400' }],
        'display': ['2.75rem', { lineHeight: '1.15', letterSpacing: '0.02em', fontWeight: '400' }],
        'display-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '0.01em', fontWeight: '400' }],
        // Section Headlines - reduced
        'section-lg': ['2.25rem', { lineHeight: '1.2', fontWeight: '400' }],
        'section': ['1.75rem', { lineHeight: '1.25', fontWeight: '400' }],
        'section-sm': ['1.375rem', { lineHeight: '1.3', fontWeight: '400' }],
        // Pull Quotes - reduced
        'quote-lg': ['1.5rem', { lineHeight: '1.4', fontWeight: '400' }],
        'quote': ['1.25rem', { lineHeight: '1.45', fontWeight: '400' }],
        'quote-sm': ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }],
        // Body Copy
        'body-lg': ['1.0625rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['0.9375rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.55', fontWeight: '400' }],
        // Captions
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '400' }],
        'caption-sm': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.08em', fontWeight: '400' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
