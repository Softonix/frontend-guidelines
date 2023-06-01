import type { RouteRecordRaw } from 'vue-router'

export const chatRouteNames = {
  chat: 'chat',
  chatRoom: 'chatRoom'
}

export const chatRoutes: Array<RouteRecordRaw> = [
  {
    path: '/chat',
    name: chatRouteNames.chat,
    component: () => import('./Chat.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/chat/:id',
    name: chatRouteNames.chatRoom,
    component: () => import('./Chat.vue'),
    meta: {
      requireAuth: true
    }
  }
]
