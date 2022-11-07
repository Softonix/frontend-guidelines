import { type ComponentCustomProperties, getCurrentInstance } from 'vue'

export function useGlobalProperties () {
  // This composable simply directly returns your global properties with correct types which are defined in shims-vue.d.ts
  return getCurrentInstance()?.appContext.config.globalProperties as ComponentCustomProperties
}
