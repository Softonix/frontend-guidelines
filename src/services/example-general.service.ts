import type { IExampleInterface } from '@/types'

export const useExampleGeneralService = () => {
  function getSomeData () {
    return useHttp.get<IExampleInterface>('/posts/1')
  }

  return {
    getSomeData
  }
}
