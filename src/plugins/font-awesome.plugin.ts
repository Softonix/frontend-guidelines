import { defineComponent, h, Plugin, PropType } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { TIndexedObject } from '@/types'

import {
  faEnvelope as farEnvelope,
  faBell as farBell
} from '@fortawesome/free-regular-svg-icons'

import {
  faUser as fasUser
} from '@fortawesome/free-solid-svg-icons'

const FontAwesomeIconsList = {
  farEnvelope,
  farBell,
  fasUser
}

for (const key in FontAwesomeIconsList) {
  library.add((FontAwesomeIconsList as TIndexedObject<IconDefinition>)[key])
}

const IconComponent = defineComponent({
  name: 'Icon',
  props: {
    name: Object as PropType<IconDefinition>
  },
  render () {
    return this.name
      ? h(FontAwesomeIcon, { icon: this.name })
      : null
  }
})

const FontAwesomePlugin: Plugin = {
  install: (app) => {
    app.component(IconComponent.name, IconComponent)
    app.config.globalProperties.$icons = FontAwesomeIconsList
  }
}

export {
  FontAwesomeIconsList,
  FontAwesomePlugin
}
