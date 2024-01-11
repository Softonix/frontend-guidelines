import deLocale from 'element-plus/es/locale/lang/de'

import { generalTranslations as general } from './general.translation'
import { validationTranslations as validation } from './validation.translation'

export const de = {
  [deLocale.name]: {
    el: deLocale.el,

    general,
    validation
  }
}
