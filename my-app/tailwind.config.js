/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#020b26',
        secondary: '#041828 ',
        grey: '515585',
        green: '#39bd2f',
        lightBlue: '#46B5D1',
        turquoise: '#044754'
    }
    },
  },
  plugins: [],
}

