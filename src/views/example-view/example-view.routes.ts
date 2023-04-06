import type { RouteRecordRaw } from 'vue-router'

export const exampleViewRouteNames = {
  exampleView: 'exampleView',
  exampleColors: 'exampleColors'
}

export const exampleViewRoutes: Array<RouteRecordRaw> = [
  {
    path: 'example',
    name: exampleViewRouteNames.exampleView,
    meta: {
      label: 'general.navigation.exampleView' // translation key
    },
    component: () => import('./ExampleView.vue')
  },
  {
    path: 'example-colors',
    name: exampleViewRouteNames.exampleColors,
    component: () => import('./ExampleColors.vue'),
    meta: {
      label: 'Colors'
    }
  }
]
