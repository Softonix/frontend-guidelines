import { fileURLToPath, URL } from 'node:url'

import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

import { IconsPluginCustom } from './vite.config.icons'
import { ComponentsBuilder } from './vite.config.components'
import { ImportsBuilder } from './vite.config.imports'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
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
      colors: fileURLToPath(new URL('./tailwind/tailwind.colors.cjs', import.meta.url))
    }
  },

  optimizeDeps: {
    include: ['colors']
  },

  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url)),
    transformMode: {
      web: [/\.[jt]sx$/]
    }
  }
})
