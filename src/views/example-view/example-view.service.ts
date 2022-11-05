import type { IExampleInterface } from '@/types'

export const useExampleViewService = () => {
  function getSomeData () {
    return useHttp.get<IExampleInterface>('/posts/1')
  }

  return {
    getSomeData
  }
}
