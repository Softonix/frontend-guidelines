import type { RouteRecordRaw } from 'vue-router'

export const exampleViewRouteNames = {
  exampleView: 'exampleView',
  exampleViewCreate: 'exampleViewCreate',
  exampleViewDetails: 'exampleViewDetails'
}

export const exampleViewRoutes: Array<RouteRecordRaw> = [
  {
    path: 'example',
    name: exampleViewRouteNames.exampleView,
    meta: {
      label: 'general.navigation.exampleView' // translation key
    },
    component: () => import('./ExampleView.vue'),
    children: [
      {
        path: 'create',
        name: exampleViewRouteNames.exampleViewCreate,
        component: () => import('./ExampleViewCreate.vue')
      },
      {
        path: ':id/details',
        name: exampleViewRouteNames.exampleViewDetails,
        component: () => import('./ExampleViewDetails.vue')
      }
    ]
  }
]
