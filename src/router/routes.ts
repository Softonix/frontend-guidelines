import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'

import { authRoutes } from '@/views/auth/auth.routes'
import { exampleViewRoutes } from '@/views/example-view/example-view.routes'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.rootPage,
  redirect: { name: routeNames.exampleGeneral },
  component: DefaultLayout,
  children: [
    // list of views that use default layout
    ...exampleViewRoutes
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  authRoutes,
  defaultLayoutRoutes,
  {
    path: '/react-vs-vue',
    component: DefaultLayout,
    children: [{ path: '', name: 'react-vs-vue', component: () => import('@/views/react-vs-vue/Index.vue') }]

  }
]

export {
  routes,
  defaultLayoutRoutes
}
