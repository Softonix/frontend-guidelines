const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      grey: colors.coolGray,
      red: colors.red
    },

    extend: {
      spacing: {
        5: '5px',
        10: '10px',
        30: '30px'
      },

      margin: (theme) => ({
        auto: 'auto',
        ...theme('spacing')
      }),

      padding: (theme) => ({
        ...theme('spacing')
      }),

      maxWidth: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        full: '100%',
        450: '450px'
      },

      backgroundColor: theme => theme('colors'),

      borderColor: theme => theme('colors')
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
