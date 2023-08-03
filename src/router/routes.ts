import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'

import { vueFeatureRoutes } from '@/views/vue3.3/vue3.3.routes'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.rootPage,
  redirect: { name: routeNames.home },
  component: DefaultLayout,
  children: [
    // list of views that use default layout
    ...vueFeatureRoutes
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  defaultLayoutRoutes
]

export {
  routes,
  defaultLayoutRoutes
}
