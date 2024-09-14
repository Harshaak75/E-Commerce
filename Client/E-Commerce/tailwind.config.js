/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope:['Manrope','sans-serif'],
        roboto:['Roboto','sans-serif'],
      },
      colors: {
        customWhite: "#FFFFEC",
      }
    },
  },
  plugins: [],
}

