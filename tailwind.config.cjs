/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent : "#0079FE",
        primary: "#1F2A48",
        secondary: "#151C2E",
      },
    },
  },
  plugins: [],
}
