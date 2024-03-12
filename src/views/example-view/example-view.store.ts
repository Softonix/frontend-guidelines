import type { AxiosRequestConfig } from 'axios'

// the first argument is a unique id of the store across your application
export const useExampleViewStore = defineStore('exampleViewStore', () => {
  const exampleVar = ref<Partial<IExampleInterface>>({})
  const highContrastMode = ref(false)

  function setExampleVar () {
    exampleVar.value.title = 'changed title'
  }

  async function getExampleVar (id: number, config?: AxiosRequestConfig) {
    exampleVar.value = await exampleViewService.getSomeData(id, config)
  }

  return {
    highContrastMode,
    exampleVar,
    setExampleVar,
    getExampleVar
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useExampleViewStore, import.meta.hot))
}
