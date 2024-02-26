import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material'
import { forwardRef } from 'react'

import CheckboxCheckedIcon from '~/shared/assets/icons/checkbox-checked-icon.svg'
import CheckboxUncheckedIcon from '~/shared/assets/icons/checkbox-unchecked-icon.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'

import { useStyles } from './Checkbox.styles'

export type CheckboxRef = MuiCheckboxProps['ref']
export type CheckboxProps = Omit<MuiCheckboxProps, 'ref'>

export const Checkbox = forwardRef(({ disabled, ...props }: CheckboxProps, ref: CheckboxRef) => {
  const styles = useStyles({ disabled })

  return (
    <MuiCheckbox
      ref={ref}
      disabled={disabled}
      disableRipple
      icon={<SvgIcon icon={CheckboxUncheckedIcon} color={styles.uncheckedIcon.color} />}
      checkedIcon={<SvgIcon icon={CheckboxCheckedIcon} color={styles.checkedIcon.color} />}
      sx={styles.checkbox}
      {...props}
    />
  )
})
