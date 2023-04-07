import { localStorageUtils } from '@/core/localstorage.utils'

const flagNames = {
  'SX-1924-LOGIN-FLAG-EXAMPLE': false
}

type TFlagName = keyof typeof flagNames

export function useFlags () {
  const activeFlags = reactive(flagNames)

  Object.keys(flagNames).forEach(flag => {
    if (!activeFlags[flag]) {
      activeFlags[flag] = Boolean(localStorageUtils.getItem(flag))
    }
  })

  function changeFlag (flag: TFlagName, value: boolean) {
    if (value) {
      localStorageUtils.setItem(flag, true)
    } else {
      localStorageUtils.removeItem(flag)
    }
  }

  return {
    flags: activeFlags,
    changeFlag
  }
}
