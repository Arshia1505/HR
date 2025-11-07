// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // override some core color names so existing classes map to the new theme
      colors: {
        // map `blue` classes (bg-blue-600 etc) to a warm orange/red palette
        blue: {
          50:  '#fff6f3',
          100: '#ffece6',
          200: '#ffcdb8',
          300: '#ffa889',
          400: '#ff7a4f',
          500: '#ff5a26', // primary-ish (bg-blue-500 -> orange-red)
          600: '#e64518', // maps to bg-blue-600
          700: '#b93512',
          800: '#8b270e',
          900: '#591809',
        },
        // map gray/slate to deep charcoals / near-black neutrals
        gray: {
          50:  '#f7f7f8',
          100: '#efefef',
          200: '#d9d9da',
          300: '#bfbfc0',
          400: '#9c9c9d',
          500: '#7a7a7b',
          600: '#606061',
          700: '#444445',
          800: '#2b2b2c',
          900: '#0f0f10',
        },
        slate: {
          50:  '#fbfaf9',
          100: '#f3f1f0',
          200: '#e6e2df',
          300: '#d3c9c3',
          400: '#b89a90',
          500: '#8f6f5f',
          600: '#6e3f2b',
          700: '#4b291b',
          800: '#2f170f',
          900: '#120906',
        },
        // add an explicit 'accent' you can use across components if needed
        accent: {
          50:  '#fff7f5',
          100: '#fff0ea',
          200: '#ffdcc8',
          300: '#ffbfa0',
          400: '#ff9266',
          500: '#ff6f2e', // use as accent (like primary)
          600: '#e65113',
          700: '#b83d11',
          800: '#8d2d0c',
          900: '#531906',
        },
        // keep existing named colors you didn't override
      },
    },
  },
  plugins: [],
};
