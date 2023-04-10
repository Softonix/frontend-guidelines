import { localStorageUtils } from '@/core/localstorage.utils'

const defaultFlags = {
  'FF-SX-1924-LOGIN-FLAG-EXAMPLE': false,
  'FF-SX-1234-TEST': false
}

export type TFlagName = keyof typeof defaultFlags

const flags = reactive<typeof defaultFlags>(structuredClone(defaultFlags))

export function useFlags () {
  setFlags()

  function setFlags () {
    Object.keys(defaultFlags).forEach(flag => {
      flags[flag] = defaultFlags[flag] || !!localStorageUtils.getItem(flag)
    })
  }

  function changeFlag (flag: TFlagName, value: boolean) {
    if (value) localStorageUtils.setItem(flag, true)
    else localStorageUtils.removeItem(flag)
  }

  return {
    defaultFlags,
    flags,
    changeFlag
  }
}
