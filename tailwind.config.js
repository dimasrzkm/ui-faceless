/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans-pro": "Source Sans Pro, sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
