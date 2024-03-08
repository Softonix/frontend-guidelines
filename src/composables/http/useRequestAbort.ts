import type { AxiosRequestConfig } from 'axios'

export type TRequestHash = Record<string, AbortController>

export const useRequestAbort = () => {
  const requestsList: Ref<TRequestHash> = ref({})

  const abortAll = (): void => {
    if (Object.keys(requestsList.value).length > 0) {
      Object.values(requestsList.value).forEach(requestSaver => {
        if (!requestSaver.signal.aborted) requestSaver.abort()
      })

      requestsList.value = {}
    }
  }

  const abort = (id: string): void => {
    const request = requestsList.value?.[id]

    if (request && !request.signal.aborted) {
      request.abort()

      delete requestsList.value[id]
    }
  }

  const setCancellation = (id: string): AxiosRequestConfig => {
    if (requestsList.value?.[id]) abort(id)

    const abortController = new AbortController()

    requestsList.value[id] = abortController

    return { signal: abortController.signal }
  }

  return {
    requestsList,
    abortAll,
    abort,
    setCancellation
  }
}
