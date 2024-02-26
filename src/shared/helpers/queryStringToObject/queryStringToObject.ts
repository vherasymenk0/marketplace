import { QueryParams } from '~/shared/types/search'

export const queryStringToObject = <T extends QueryParams>(searchParams: string): T => {
  return searchParams
    .split('&')
    .map((pair) => pair.split('='))
    .reduce((acc, [key, value = '']) => {
      if (key) {
        acc[key as keyof T] = value as T[keyof T]
      }
      return acc
    }, {} as T)
}
