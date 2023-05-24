import { authRouteNames } from '@/views/auth/auth.routes'
import { chatRouteNames } from '@/views/chat/chat.routes'
import { settingsRouteNames } from '@/views/settings/settings.routes'

export const routeNames = {
  rootPage: 'rootPage',

  ...authRouteNames,
  ...chatRouteNames,
  ...settingsRouteNames,

  additionalDefaultLayoutRoute: 'additionalDefaultLayoutRoute',
  additionalNoLayoutRoute: 'additionalNoLayoutRoute'
}
