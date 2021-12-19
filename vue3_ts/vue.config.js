module.exports = {
  pwa: {
    workboxOptions: {
      navigateFallback: 'index.html',
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://fonts.'),
          handler: 'CacheFirst',
          options: { cacheName: 'vue3-external-fonts' }
        }
      ]
    }
  },

  chainWebpack: config => {
    config.output.chunkFilename('js/[name].[id].[chunkhash:8].js')
  }
}
