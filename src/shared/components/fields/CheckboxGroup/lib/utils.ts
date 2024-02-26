import { isOfType } from '~/shared/helpers/isOfType'

export const getIsSelected = (selected: unknown, option: unknown) => {
  const isObject = isOfType.object(option)
  const compareValue = isObject ? option.value : option

  if (isOfType.object(selected)) {
    return selected.value === compareValue
  }

  return selected === compareValue
}
