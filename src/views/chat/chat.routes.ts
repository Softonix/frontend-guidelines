import type { RouteRecordRaw } from 'vue-router'

export const chatRouteNames = {
  chat: 'chat'
}

export const chatRoutes: Array<RouteRecordRaw> = [
  {
    path: '/chat',
    name: chatRouteNames.chat,
    component: () => import('./Chat.vue'),
    meta: {
      requireAuth: true
    }
  }
]
