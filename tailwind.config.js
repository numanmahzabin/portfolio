/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "ovo" : ["Ovo"],
        "outfit" : ["Outfit"]
      },
      colors:{
        "blue" : "#110020"
      }
    },
  },
  plugins: [],
}

