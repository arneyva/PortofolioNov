/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        cyborg:["Cyborg"],
        circular:["Circular Std"],
        charmonman:["Charmonman Regular"],
      },
      colors: {
        ijo: "#0A5C33",
        ijonom: "#58AA25",
        grey: "#9E9E9E",
        coklit: "#8B644E",
       
      },
    },
  },
  plugins: [],
}

