module.exports = {
  pwa: {
    workboxOptions: {
      navigateFallback: 'index.html',
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://fonts.'),
          handler: 'cacheFirst',
          options: { cacheName: 'vue3-external-fonts' }
        }
      ]
    }
  },

  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: process.env.NODE_ENV === 'production'
    }
  },
  chainWebpack: config => {
    config.output.chunkFilename('js/[name].[id].[chunkhash:8].js')
  }
}
