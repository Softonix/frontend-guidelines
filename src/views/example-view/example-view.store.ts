// the first argument is a unique id of the store across your application
export const useExampleViewStore = defineStore('exampleViewStore', () => {
  const exampleVar = ref<Partial<TBook>>()
  const highContrastMode = ref(false)

  function setExampleVar () {
    if (exampleVar.value) {
      exampleVar.value.description = 'changed description'
    }
  }

  async function getExampleVar () {
    exampleVar.value = await exampleViewService.getSomeData()
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
