import { RouteRecordRaw } from 'vue-router'

export const exampleViewRouteNames = {
  exampleView: 'exampleView',
  exampleViewCreate: 'exampleViewCreate',
  exampleViewDetails: 'exampleViewDetails'
}

export const exampleViewRoutes: Array<RouteRecordRaw> = [
  {
    path: 'example',
    name: exampleViewRouteNames.exampleView,
    component: () => import('./ExampleView.vue')
  },
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
