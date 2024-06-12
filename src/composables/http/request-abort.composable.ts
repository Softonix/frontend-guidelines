import type { AxiosRequestConfig } from 'axios'

export type TRequestHash = Record<string | symbol, AbortController>

export const useRequestAbort = () => {
  const requestsList: Ref<TRequestHash> = ref({})

  const newAbortSignal = (timeoutMs: number) => {
    const abortController = new AbortController()

    if (timeoutMs) {
      setTimeout(() => abortController.abort(), timeoutMs)
    }

    return abortController
  }

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

  const setCancellation = (id: string, { timeout } = { timeout: 0 }): AxiosRequestConfig => {
    if (requestsList.value?.[id]) abort(id)

    const abortController = newAbortSignal(timeout)

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
