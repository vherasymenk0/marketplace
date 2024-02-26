type Constructor<T = object> = new (...args: never[]) => T

export const isOfType = {
  null: (x: unknown): x is null => x === null,
  isUndefined: (x: unknown): x is undefined => x === undefined,
  nil(x: unknown): x is null | undefined {
    return this.null(x) || this.isUndefined(x)
  },
  string(x: unknown): x is string {
    return !this.nil(x) && (typeof x === 'string' || x instanceof String)
  },
  number(x: unknown): x is number {
    return (
      !this.nil(x) &&
      ((!Number.isNaN(x) && Number.isFinite(x) && typeof x === 'number') || x instanceof Number)
    )
  },
  boolean(x: unknown): x is boolean {
    return !this.nil(x) && (typeof x === 'boolean' || x instanceof Boolean)
  },
  array(x: unknown): x is unknown[] {
    return !this.nil(x) && Array.isArray(x)
  },
  object: <T extends Record<string, unknown> = Record<string, unknown>>(x: unknown): x is T => {
    return {}.toString.call(x) === '[object Object]'
  },
  type<T extends Constructor>(x: unknown, X: T): x is InstanceType<T> {
    return !this.nil(x) && x instanceof X
  },
  set(x: unknown) {
    return this.type(x, Set)
  },
  map(x: unknown) {
    return this.type(x, Map)
  },
  date(x: unknown) {
    return this.type(x, Date)
  },
  function: (fn: unknown): fn is (...arg: any[]) => any => typeof fn === 'function',
  promise(x: unknown): x is Promise<unknown> {
    return this.type(x, Promise<unknown>)
  },
}
