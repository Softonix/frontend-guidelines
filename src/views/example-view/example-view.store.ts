import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IExampleInterface, TNullableField } from '@/types'
import { exampleViewService } from '@/services'

// the first argument is a unique id of the store across your application
export const useExampleViewStore = defineStore('exampleViewStore', () => {
  const exampleVar = ref<TNullableField<IExampleInterface>>(null)

  function setStaticData () {
    exampleVar.value = {
      a: 'changed string',
      b: 12
    }
  }

  async function getTestVar () {
    exampleVar.value = await exampleViewService.getSomeData()
  }

  return {
    exampleVar,
    setStaticData,
    getTestVar
  }
})
