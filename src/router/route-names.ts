import { exampleViewRouteNames } from '@/views/example-view/example-view.routes'
import { authRouteNames } from '@/views/auth/auth.routes'
import { chatRouteNames } from '@/views/chat/chat.routes'

export const routeNames = {
  rootPage: 'rootPage',

  ...exampleViewRouteNames,
  ...authRouteNames,
  ...chatRouteNames,

  additionalDefaultLayoutRoute: 'additionalDefaultLayoutRoute',
  additionalNoLayoutRoute: 'additionalNoLayoutRoute'
}
