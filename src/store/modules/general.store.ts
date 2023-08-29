export const useGeneralStore = defineStore('generalStore', () => {
  
  return {

  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
}