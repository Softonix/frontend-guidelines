import enLocale from 'element-plus/lib/locale/lang/en'
import { generalTranslations as general } from './general.translation'
import { validationTranslations as validation } from './validation.translation'
import { authTranslations as auth } from '@/views/auth/translations/en'
import { exampleViewTranslations as exampleView } from '@/views/example-view/translations/en'

export const en = {
  [enLocale.name]: {
    el: enLocale.el,

    general,
    validation,
    auth,
    exampleView
  }
}
