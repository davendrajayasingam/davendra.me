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
          primary: '#1d4486',
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