import { RouteRecordRaw } from 'vue-router'
import { FontAwesomeIconsList } from '@/plugins'

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
      label: 'general.navigation.exampleView', // translation key
      icon: FontAwesomeIconsList.farEnvelope
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
