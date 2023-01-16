/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: '#111b27',
          text: '#e3eaf2',
        },
        sidebar: {
          foreground: '#e3eaf2',
        },
      },
      fontFamily: {
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}