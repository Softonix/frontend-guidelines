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
      orange: colors.orange,

      // todo: with the following code you can use element colors
      primary: 'var(--el-color-primary)',
      success: 'var(--el-color-success)',
      warning: 'var(--el-color-warning)',
      danger: 'var(--el-color-danger)'
    }
  }
}
