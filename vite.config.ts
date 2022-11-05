import { fileURLToPath, URL } from 'node:url'

import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { ComponentsBuilder } from './vite.config.components'
import { ImportsBuilder } from './vite.config.imports'

// https://vitejs.dev/config/
export default defineConfig((config) => ({
  plugins: [
    vue(),
    visualizer({
      open: true
    }),
    ComponentsBuilder(config),
    ImportsBuilder(config)
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
