/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#020b26',
        secondary: '#0B666A',
        grey: '515585',
        lightBlue: '#46B5D1'
    }
    },
  },
  plugins: [],
}

