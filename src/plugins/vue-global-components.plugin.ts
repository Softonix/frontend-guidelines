import { Plugin } from 'vue'
import Compute from '@/components/stateless/hoc/Compute.vue'

export const VueGlobalComponentsPlugin: Plugin = {
  install: (app) => {
    app.component(Compute.name, Compute)
  }
}
