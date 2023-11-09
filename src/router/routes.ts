import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'

import { authRoutes } from '@/views/auth/auth.routes'
import { exampleViewRoutes } from '@/views/example-view/example-view.routes'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.rootPage,
  redirect: { name: routeNames.exampleView },
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
    children: [{ path: '', name: 'react-vs-vue', component: () => import('@/views/react-vs-vue/index.vue') }]

  }
]

export {
  routes,
  defaultLayoutRoutes
}

const a = {
  pub: {
    action: 'taskCompleted',
    data: {
      dayIndex: 0,
      executionTimeData: null,
      logo: '/uploads/quest_points_discipline/login-2x.png',
      name: 'Join Quest',
      prize: {
        coins: 5000,
        entries: 0,
        points: 10,
        taskIndex: 0
      },
      type: 'questPoints'
    }
  }
}
