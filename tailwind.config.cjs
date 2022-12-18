/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#FFFFFF',
        'light-secondary-bg': '#f5f5f5',
        'light-text': '#1F1F1F',
        'light-secondary-text': '#646464',
        'light-seclected': '#F1F4FF',

        'dark-bg': '#282828',
        'dark-secondary-bg': '#131313',
        'dark-text': '#D0D0D0',
        'dark-secondary-text': '#9B9B9B',
        'dark-selected': '#393939',


        'primary-color': '#5E95FF',
        'danger-color': '#FF0000'
      },
      boxShadow: {
        "my-shadow": '0px 0px 5px 3px rgb(0 0 0 / 0.05)'
      }
    },
  },
  plugins: [],
}