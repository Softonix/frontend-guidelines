import enLocale from 'element-plus/lib/locale/lang/en'
import { generalTranslations as general } from './general.translation'
import { validationTranslations as validation } from './validation.translation'

export const en = {
  [enLocale.name]: {
    el: enLocale.el,

    general,
    validation
  }
}
