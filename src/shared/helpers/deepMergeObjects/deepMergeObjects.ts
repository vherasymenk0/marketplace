/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * Deep merges two objets.
 * @param  {Object} object destination object
 * @param  {Object} source source obejct
 *
 * @returns {Object} new object
 */
export const deepMergeObjects = <
  TObject extends Record<string, any>,
  TSource extends Record<string, any>,
>(
  object: TObject,
  source: TSource,
) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (object === source) return object

  const newValue = {
    ...object,
    ...source,
  }

  Object.entries(source).forEach(([key, value]) => {
    if (object[key] && typeof object[key] === 'object') {
      newValue[key as keyof TSource | keyof TObject] = deepMergeObjects(object[key], value)
    } else {
      newValue[key as keyof TSource | keyof TObject] = value
    }
  })

  return newValue
}
