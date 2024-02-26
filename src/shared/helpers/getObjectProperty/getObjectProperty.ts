import { isOfType } from '~/shared/helpers/isOfType'

/* eslint-disable no-useless-escape */
export const getObjectProperty = <T>(from: T, selector: string): unknown =>
  selector
    .replace(/\[([^\[\]]*)\]/g, '.$1.')
    .split('.')
    .filter((t) => t !== '')
    .reduce((prev: unknown, cur: string) => (isOfType.object(prev) ? prev[cur] : undefined), from)
