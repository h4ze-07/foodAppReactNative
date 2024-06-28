/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainWhite: '#FFF',
        mainDark: '#000',
        primary: '#F9813A',
        secondary: '#fedac5',
        light: '#E5E5E5',
        mainGrey: '#908e8c',
      }
    },
  },
  plugins: [],
}

