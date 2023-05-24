import type { RouteRecordRaw } from 'vue-router'

export const settingsRouteNames = {
  settings: 'settings'
}

export const settingsRoutes: RouteRecordRaw = {
  name: settingsRouteNames.settings,
  path: '/settings',
  component: () => import('./Settings.vue')
}
