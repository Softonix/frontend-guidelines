import {
  ElButton,
  ElForm,
  ElCard,
  ElInput,
  ElLoading
} from 'element-plus'

import { i18n } from './i18n'
import { Plugin } from 'vue'
import TreeNode from 'element-plus/lib/components/tree/src/model/node'
type TElTreeNode = TreeNode

const ElementPlugin: Plugin = {
  install: (app) => {
    app.config.globalProperties.$ELEMENT = {
      size: 'small',
      i18n: i18n.global.t
    }

    app.use(ElLoading)
    app.use(ElCard)
    app.use(ElForm)
    app.use(ElInput)
    app.use(ElButton)
  }
}

export {
  ElementPlugin,
  TElTreeNode
}
