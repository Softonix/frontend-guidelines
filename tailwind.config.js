const colors = require('tailwindcss/colors')

// todo: you can use the default configuration or theme that can be imported as shown bellow
// const defaultTheme = require('tailwindcss/defaultTheme')
// const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      green: colors.green,

      // todo: with the following code you can use element colors
      primary: 'var(--el-color-primary)',
      success: 'var(--el-color-success)',
      warning: 'var(--el-color-warning)',
      danger: 'var(--el-color-danger)'
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
