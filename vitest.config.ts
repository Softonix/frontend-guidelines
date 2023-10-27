import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, '**/playwright/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/]
      },
      deps: {
        inline: ['element-plus']
      }
    }
  })
)
