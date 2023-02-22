/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        bgApp: '#D0E6FE',
      },
      backgroundColor: {
        BgHover: '#F8F9FE',
        bgApp: '#D0E6FE',
      },
    },
  },
  plugins: [],
}