/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#39CDB6",
        },
        secondary: {
          DEFAULT: "#EAEAEA",
          dark: "#252A34",
        },
        highlight: {
          DEFAULT: "#FF2E63",
        },
        card: {
          DEFAULT: "#252A34",
        },
      },
    },
  },
  plugins: [],
};
