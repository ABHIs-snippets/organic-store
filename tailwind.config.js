/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
],
  content: [  "./src/**/*.{html,ts}","./node_modules/flowbite/**/*.js"],
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
