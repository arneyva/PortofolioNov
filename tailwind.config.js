/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        cyborg: ["Cyborg"],
        circular: ["Circular Std"],
        charmonman: ["Charmonman Regular"],
      },
      colors: {
        ijo: "#0A5C33",
        ijonom: "#58AA25",
        grey: "#9E9E9E",
        coklit: "#8B644E",
        oren: "#F1582C",
      },
      dropShadow: {
        myshadow: ["0px 4px 4px rgba(0, 0, 0, 0.25)"],
        "xl-shadow": [" 0px 41px 89px 0px #0000001A"],
      },
    },
  },
  plugins: [],
};
