import { routeNames } from '@/router/route-names'
import type { NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

export const chatRouteNames = {
  chat: 'chat',
  chatRoom: 'chatRoom'
}

const chatGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const chatStore = useChatStore()
  const { chats } = storeToRefs(chatStore)
  const { getChats } = chatStore

  await getChats()

  if (chats.value.length) {
    next({
      name: routeNames.chatRoom,
      params: {
        id: chats.value[0].id
      },
      replace: true
    })
  } else {
    next()
  }
}

export const chatRoutes: Array<RouteRecordRaw> = [
  {
    path: '/chat',
    name: chatRouteNames.chat,
    component: () => import('./Chat.vue'),
    meta: {
      requireAuth: true
    },
    beforeEnter: chatGuard
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
