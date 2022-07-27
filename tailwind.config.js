/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bizpotta-purple": "#121F4C",
        "bizpotta-green": "#94F236",
        "bizpotta-green-500": "rgba(148, 242, 54, 0.64)",
        "bizpotta-green-100": "#F2FFE4",
        "bizpotta-gray": {
          500: "#A5A5A5",
          600: "#565656",
          700: "#233245",
          800: "#282828",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
};
