/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F64A8A",
          dark: "#db2777",
          pinklight: "#ffe6f0",
          pinksoft: "#fcdde8",
        },
        background: "#fffff",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"], // untuk heading
        sans: ["Open Sans", "sans-serif"], // untuk body text
      },
    },
  },
  plugins: [],
};
