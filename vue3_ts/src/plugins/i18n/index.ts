import { Plugin } from 'vue'
import { createI18n } from 'vue-i18n'

import { en, fr } from './translations'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }
    },
    fr: {
      short: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }
    }
  },

  messages: {
    ...en,
    ...fr
  }
})

const I18nPlugin: Plugin = {
  install: (app) => {
    app.config.globalProperties.$df = (date: number | Date, type: 'short' | 'long' | 'narrow' = 'short') => i18n.global.d(date, type)
    app.use(i18n)
  }
}

export {
  i18n,
  I18nPlugin
}
