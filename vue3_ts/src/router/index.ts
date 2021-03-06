import { createRouter, createWebHistory, RouteRecordRaw, onBeforeRouteUpdate, useRoute } from 'vue-router'

import { routesNames } from './route-names'
import { routeGuard } from './route-guard'

import { exampleViewRoutes } from '@/views/example-view/example-view.routes'
import { authRoutes } from '@/views/auth/auth.routes'
import { veevalidateYupRoutes } from '@/views/veevalidate-yup/veevalidate-yup.routes'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'
import VeevalidateYupLayout from '@/layouts/vee-validate-yup/VeevalidateYupLayout.vue'

const routes: Array<RouteRecordRaw> = [
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
  {
    path: '/veevalidate-yup',
    name: routesNames.veevalidateYup,
    redirect: { name: routesNames.modelExample },
    component: VeevalidateYupLayout,
    children: veevalidateYupRoutes
  },

  // If you need some page to be out of both layouts, just register it down below
  {
    path: '/additional-no-layout-route',
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
  routes,
  onBeforeRouteUpdate,
  useRoute
}
