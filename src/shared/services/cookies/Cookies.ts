'use client'

interface CookieConfig {
  secure?: boolean
  maxAge?: number
  domain?: string
  path?: string
  expires?: Date | string
}

class CookiesManager {
  private config: CookieConfig = {}
  private separator = '; '
  private static toString = (value: Date): string =>
    typeof value.toUTCString === 'function' ? value.toUTCString() : value.toString()

  public getAll() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined')
      return document.cookie
        .split(this.separator)
        .filter((value) => !!value)
        .map((cookie) => cookie.split('='))
        .reduce((res: Record<string, string>, [key, value]) => {
          if (key !== undefined && value !== undefined) {
            res[decodeURIComponent(key.trim())] = decodeURIComponent(value.trim())
          }
          return res
        }, {})

    return {}
  }

  public get(key: string) {
    return this.getAll()[key] ?? null
  }

  public set(key: string, value: string, config?: CookieConfig) {
    const { secure, maxAge, domain, path, expires } = config ?? this.config

    let cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`

    if (secure) cookie += ';secure'

    if (maxAge && !Number.isNaN(maxAge)) cookie += `;max-age=${maxAge}`

    if (domain) cookie += `;domain=${domain}`

    if (path) cookie += `;path=${path}`

    if (expires) {
      const stringExpiresDate =
        typeof expires === 'string' ? expires : CookiesManager.toString(expires)
      cookie += `;expires=${stringExpiresDate}`
    }

    if (typeof window !== 'undefined' && typeof document !== 'undefined') document.cookie = cookie
  }

  public remove(key: string) {
    const cookieKey = this.get(key)

    if (cookieKey) {
      this.set(key, cookieKey, { maxAge: 0 })
    } else {
      console.error(`could\`t find a ${key} cookie`)
    }
  }
}

export const Cookies = new CookiesManager()
