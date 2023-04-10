import { localStorageUtils } from '@/core/localstorage.utils'

const defaultFlags = {
  'FF-SX-1924-LOGIN-FLAG-EXAMPLE': false,
  'FF-SX-1234-TEST': false
}

export type TFlagName = keyof typeof defaultFlags

const flags = ref<Record<TFlagName, boolean>>(structuredClone(defaultFlags))

const setFlags = () => {
  Object.keys(defaultFlags).forEach(flag => {
    flags.value[flag] = defaultFlags[flag] || !!localStorageUtils.getItem(flag)
  })
}

setFlags()

export function useFlags () {
  function changeFlag (flag: TFlagName, value: boolean) {
    if (value) localStorageUtils.setItem(flag, true)
    else localStorageUtils.removeItem(flag)

    setFlags()
  }

  return {
    defaultFlags,
    flags,
    changeFlag
  }
}
