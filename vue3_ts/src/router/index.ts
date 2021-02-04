import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { routesNames } from './route-names'
import { routeGuard } from './route-guard'

import { exampleViewRoutes } from '@/views/example-view/example-view.routes'
import { authRoutes } from '@/views/auth/auth.routes'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: routesNames.exampleView },
    name: routesNames.rootPage,
    component: DefaultLayout,
    children: [ // list of views that use default layout
      ...exampleViewRoutes,

      // You can also register additional routes like this =>
      {
        path: 'additional-default-layout-route',
        name: routesNames.additionalDefaultLayoutRoute,
        component: () => import('@/views/example-view/ExampleView.vue') // path to respective view
      }
    ]
  },
  {
    path: '/auth',
    name: routesNames.auth,
    redirect: routesNames.login,
    component: BlankLayout,
    children: authRoutes
  },

  // If you need some page to be out of both layouts, just register it down below
  {
    path: 'additional-no-layout-route',
    name: routesNames.additionalNoLayoutRoute,
    component: () => import('@/views/example-view/ExampleView.vue') // path to respective view
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(routeGuard)

export {
  routesNames,
  routeGuard
}
