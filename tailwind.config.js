/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        blue: "#3490dc",
        red: "#e3342f",
        orange: "#f6993f",
        yellow: "#ffed4a",
        purple: "#9333ea",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin"), require("daisyui"), nextui()],
};
