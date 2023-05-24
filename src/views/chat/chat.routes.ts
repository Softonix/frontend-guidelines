import type { NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

export const chatRouteNames = {
  chat: 'chat',
  chatRoom: 'chatRoom'
}

export const chatRouteGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  // TODO: Implement load last chat or group
  const lastChatId = 1
  if (lastChatId) {
    next(`/chat/${lastChatId}`)
  } else {
    next()
  }
}

export const chatRoutes: Array<RouteRecordRaw> = [
  {
    path: '/chat/',
    name: chatRouteNames.chat,
    component: () => import('./Chat.vue'),
    meta: {
      requireAuth: true
    },
    beforeEnter: chatRouteGuard
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
