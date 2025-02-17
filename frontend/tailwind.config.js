// eslint-disable-next-line no-undef
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        darkCard: "#18181b",
        darkColor: "#000000"
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}

