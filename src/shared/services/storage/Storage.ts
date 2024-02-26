export class Storage {
  static getLocalStorage<T>(key: string): T | null {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem(key)
      return data ? (JSON.parse(data) as T) : null
    }
    return null
  }

  static setLocalStorage(key: string, value: unknown) {
    if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(value))
  }

  static removeLocalStorage(key: string) {
    if (typeof window !== 'undefined') localStorage.removeItem(key)
  }
}
