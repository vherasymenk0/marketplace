import { HTMLAttributes } from 'react'

import { UnknownSelectOption } from '~/shared/services/selectOptions'

export interface RenderOptionProps<TOption extends UnknownSelectOption> {
  option: TOption
  isSelected: boolean
  isMultiple: boolean
  itemProps: HTMLAttributes<HTMLLIElement>
}
