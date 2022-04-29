const { defineConfig } = require('@vue/cli-service')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const Components = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    workboxOptions: {
      navigateFallback: 'index.html',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts./,
          handler: 'CacheFirst',
          options: { cacheName: 'vue3-external-fonts' }
        }
      ]
    }
  },

  configureWebpack: {
    plugins: [
      Components({
        dirs: [], // todo: now unplugin-vue-component will not automatically import components from @/components folder,
        dts: false, // disables creation of components.d.ts for global types definition since we don't use components auto-import
        resolvers: [ElementPlusResolver({
          importStyle: true
        })]
      })
    ]
  },
  chainWebpack: config => {
    config.output.chunkFilename('js/[name].[id].[chunkhash:8].js')
  }
})
