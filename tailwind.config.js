/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{html,ts}",],
  theme: {
    extend: {
      height:{
        '34rem':'34rem'
      },
      colors:{
        'primary':'#084f08',
        'danger':'#e04b19'
      }
    },
  },
  plugins: [],
}
