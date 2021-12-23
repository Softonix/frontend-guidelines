import { Plugin } from 'vue'
import { routeNames } from '@/router'
import { EComponentSize, EComponentType } from '@/types'
import { filters } from '@/core/filters'

export const VueGlobalPrototypesPlugin: Plugin = {
  install: (app) => {
    app.config.globalProperties.$componentSize = EComponentSize
    app.config.globalProperties.$componentType = EComponentType
    app.config.globalProperties.$routeNames = routeNames
    app.config.globalProperties.$filters = filters
  }
}
