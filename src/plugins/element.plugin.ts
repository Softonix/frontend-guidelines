import { i18n } from './i18n'
import { Plugin } from 'vue'

const ElementPlugin: Plugin = {
  install: (app) => {
    app.config.globalProperties.$ELEMENT = {
      size: 'small',
      i18n: i18n.global.t
    }
  }
}

export {
  ElementPlugin
}
