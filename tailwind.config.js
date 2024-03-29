const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#fff",
        black: "#000",
        gray: colors.blueGray,
        pink: colors.pink,
        orange: colors.orange,
        yellow: colors.yellow,
        teal: colors.teal,
      },
      fontFamily: {
        nunito: ['Mulish']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
