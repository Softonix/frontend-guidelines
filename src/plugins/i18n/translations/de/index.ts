import deLocale from 'element-plus/lib/locale/lang/de'
import { generalTranslations as general } from './general.translation'
import { validationTranslations as validation } from './validation.translation'
import { authTranslations as auth } from '@/views/auth/translations/de'
import { exampleViewTranslations as exampleView } from '@/views/example-view/translations/de'

export const de = {
  [deLocale.name]: {
    el: deLocale.el,

    general,
    validation,
    auth,
    exampleView
  }
}
