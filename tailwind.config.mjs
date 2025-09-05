/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        'roboto': ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'golden-spoon-accent': '#C0A068',
        'golden-spoon-accent-dark': '#B09058',
      },
    },
  },
  plugins: [],
};