import { authRouteNames } from '@/views/auth/auth.routes'
import { chatRouteNames } from '@/views/chat/chat.routes'

export const routeNames = {
  rootPage: 'rootPage',

  ...authRouteNames,
  ...chatRouteNames,

  additionalDefaultLayoutRoute: 'additionalDefaultLayoutRoute',
  additionalNoLayoutRoute: 'additionalNoLayoutRoute'
}
