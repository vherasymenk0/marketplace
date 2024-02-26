import { isEmptyValue } from '../isEmptyValue'
import { isOfType } from '../isOfType'

export const omitEmptyValues = <TObj extends Record<string, unknown>>(values: TObj) =>
  Object.entries(values).reduce((acc, [key, value]) => {
    if (!isEmptyValue(value)) {
      if (isOfType.object(value)) {
        acc[key] = omitEmptyValues(value)

        return acc
      }

      acc[key] = value
    }

    return acc
  }, {} as Record<string, unknown>)
