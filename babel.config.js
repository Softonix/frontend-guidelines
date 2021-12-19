module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        // import component
        customName: (name) => {
          name = name.slice(3)
          return `element-plus/lib/components/${name}`
        }
      }
    ]
  ]
}
