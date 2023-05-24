import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'

import { authRoutes } from '@/views/auth/auth.routes'
import { chatRoutes } from '@/views/chat/chat.routes'
import { settingsRoutes } from '@/views/settings/settings.routes'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.rootPage,
  redirect: { name: routeNames.chat },
  component: DefaultLayout,
  children: [
    // list of views that use default layout
    ...chatRoutes
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  authRoutes,
  settingsRoutes,
  defaultLayoutRoutes
]

export {
  routes,
  defaultLayoutRoutes
}
