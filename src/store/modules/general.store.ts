export const useGeneralStore = defineStore('generalStore', () => {
  const testVar = ref('Hello')

  return {
    testVar
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
}
