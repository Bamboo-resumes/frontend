import formsPlugin from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': "#9FFFCB",
        'bamboo-green': "#7AE582",
        'dark-green': "#25A18E",
        'dark-gray': "#394141",
      }
    },
  },
  plugins: [
    formsPlugin,
  ],
}

