/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F64A8A",
          dark: "#db2777",
        },
        background: "#ffffff",
      },
    },
  },
  plugins: [],
};
