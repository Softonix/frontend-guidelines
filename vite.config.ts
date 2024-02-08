import { fileURLToPath, URL } from 'node:url'

import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { IconsPluginCustom } from './vite.config.icons'
import { ComponentsBuilder } from './vite.config.components'
import { ImportsBuilder } from './vite.config.imports'

export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      open: true
    }),
    IconsPluginCustom(),
    ComponentsBuilder(),
    ImportsBuilder()
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@colors': fileURLToPath(new URL('./tailwind/tailwind.colors.ts', import.meta.url))
    }
  }
})
