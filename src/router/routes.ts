import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'

import { authRoutes } from '@/views/auth/auth.routes'
import { exampleViewRoutes } from '@/views/example-view/example-view.routes'
import { chatRoutes } from '@/views/chat/chat.routes'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.rootPage,
  redirect: { name: routeNames.chat },
  component: DefaultLayout,
  children: [
    // list of views that use default layout
    ...chatRoutes,
    ...exampleViewRoutes
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  authRoutes,
  defaultLayoutRoutes
]

export {
  routes,
  defaultLayoutRoutes
}
