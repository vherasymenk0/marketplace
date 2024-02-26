/* eslint-disable @typescript-eslint/no-unsafe-return */
const toSnakeCase = (value: string) =>
  value.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)

const snakeToCamelCase = (value: string) =>
  value.replace(/(_\w)/g, (key) => (key[1] ? key[1].toUpperCase() : ''))

type TargetObject = Record<string, any> | Record<string, any>[]

/**
 *  takes data with camel case and transforms it to snake case format
 * @param input - data
 * @returns transformed data
 */
export const mapCamelToSnakeCase = (input: TargetObject): TargetObject => {
  if (typeof input !== 'object' || input === null) {
    return input
  }

  if (Array.isArray(input)) {
    return input.map(mapCamelToSnakeCase)
  }

  const inputObject = input as Record<string, TargetObject>
  return Object.keys(inputObject).reduce((targetObject: typeof inputObject, key) => {
    const camelCaseKey = toSnakeCase(key)
    const nextValue = inputObject[key] as typeof targetObject

    return { ...targetObject, [camelCaseKey]: mapCamelToSnakeCase(nextValue) }
  }, {})
}

/**
 *  takes data with snake case and transforms it to snake camel format
 * @param input - data
 * @returns transformed data
 */
export const mapSnakeToCamelCase = (input: TargetObject): TargetObject => {
  if (typeof input !== 'object' || input === null) {
    return input
  }

  if (Array.isArray(input)) {
    return input.map(mapSnakeToCamelCase)
  }

  const inputObject = input as Record<string, TargetObject>
  return Object.keys(inputObject).reduce((targetObject: typeof inputObject, key) => {
    const snakeCaseKey = snakeToCamelCase(key)
    const nextValue = inputObject[key] as typeof targetObject

    return { ...targetObject, [snakeCaseKey]: mapSnakeToCamelCase(nextValue) }
  }, {})
}
