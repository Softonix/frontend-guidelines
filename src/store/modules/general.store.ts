import { exampleGeneralService } from '@/services'
import type { IExampleInterface } from '@/types'

// the first argument is a unique id of the store across your application
export const useGeneralStore = defineStore('generalStore', () => {
  const exampleGeneralVar = ref<IExampleInterface>()
  const generalLoading = ref(false)

  async function getGeneralStoreVar () {
    console.log(1)
    try {
      generalLoading.value = true
      exampleGeneralVar.value = await exampleGeneralService.getSomeData()
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
