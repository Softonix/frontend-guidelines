import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    vue(),

    /* CONFIGURATION FOR SCRIPTS AUTO-IMPORT */
    AutoImport({
      dts: command === 'serve' && './dts/auto-imports.d.ts',

      dirs: [
        './src/composables',
        './src/composables/http'
      ],

      eslintrc: {
        enabled: true
      },

      imports: [
        'vue',
        'vue-router',
        'pinia',
        'vue-i18n'
      ],
      resolvers: [ElementPlusResolver()]
    }),

    /* CONFIGURATION FOR COMPONENTS AUTO-IMPORT */
    Components({
      dts: command === 'serve' && './dts/components.d.ts',
      dirs: [
        'src/components',
        'src/plugins/portal'
      ],
      resolvers: [ElementPlusResolver({ importStyle: false })]
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      colors: fileURLToPath(new URL('./tailwind/tailwind.colors.cjs', import.meta.url))
    }
  },

  optimizeDeps: {
    include: ['colors']
  }
}))
