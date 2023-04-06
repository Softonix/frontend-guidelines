class LocalStorageUtils {
  removeItem (key: string) {
    return localStorage.removeItem(key)
  }

  getItem (key: string) {
    const item = localStorage.getItem(key) || ''

    try {
      return JSON.parse(item)
    } catch (e) {
      return null
    }
  }

  setItem (key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}

export const localStorageUtils = new LocalStorageUtils()
