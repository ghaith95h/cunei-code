/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        secondary: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          dark: '#dee2e6',
        },
        purple: {
          light: '#6f6590',
          DEFAULT: '#4e338e',
          dark: '#3b2670',
        },
        lavender: {
          light: '#f5f5f9',
          DEFAULT: '#d7d7e6',
          dark: '#8883ae',
        },
        text: {
          dark: '#2b1e48',
          medium: '#2b2834',
          light: '#4e4860',
        },
        background: {
          white: '#ffffff',
          light: '#fcfcfc',
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};