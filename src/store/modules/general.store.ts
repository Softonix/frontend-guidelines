// the first argument is a unique id of the store across your application
export const useGeneralStore = defineStore('generalStore', () => {
  const exampleGeneralVar = ref<TBook>()
  const generalLoading = ref(false)

  async function getGeneralStoreVar () {
    try {
      generalLoading.value = true
      exampleGeneralVar.value = await exampleViewService.getSomeData((exampleGeneralVar.value?.id || 0) + 1)
    } finally {
      generalLoading.value = false
    }
  }

  return {
    exampleGeneralVar,
    generalLoading,
    getGeneralStoreVar
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
}
