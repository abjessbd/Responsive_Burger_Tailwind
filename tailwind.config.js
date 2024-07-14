/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem'
      }
    },
    extend: {
      colors: {
        primaryColor: '#010A5E',
        primaryColorLight: '#010D78',
        yelloColor: '#FFCC00',
        redColor: '#CC3433',
        greenColor: '#007936',
        blackColor: '#000000',
        whiteColor: '#FFFFFF'
      }
    },
  },
  plugins: [],
}