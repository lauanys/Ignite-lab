/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily:{
      sans:'Roboto, sans-serif',
    },
    extend: {
      colors:{
        purple:{
          600: '#3b0967',
        },
        blue:{
          100: '#46c1ec',
          300: '#311dcd',
          600: '#0a6eed',
        },
        pink:{
          100: '#d94bb5',
        },
        gray:{
          100:'#E1E1E6',
          200:'#C4C4CC',
          300:'#8D8D99',
          700:'#323238',
          800:'#121214',
          900:'#09090A',
        }


      }
    },
  },
  plugins: [],
}
