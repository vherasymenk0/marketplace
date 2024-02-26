import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material'
import { forwardRef } from 'react'

import RadioCheckedIcon from '~/shared/assets/icons/radio-checked-icon.svg'
import RadioUncheckedIcon from '~/shared/assets/icons/radio-unchecked-icon.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'

import { useStyles } from './Radio.styles'

export type RadioRef = MuiRadioProps['ref']
export type RadioProps = Omit<MuiRadioProps, 'ref'>

export const Radio = forwardRef(({ disabled, ...props }: RadioProps, ref: RadioRef) => {
  const style = useStyles({ disabled })

  return (
    <MuiRadio
      ref={ref}
      disabled={disabled}
      disableRipple
      icon={<SvgIcon icon={RadioUncheckedIcon} color={style.uncheckedIcon.color} />}
      checkedIcon={<SvgIcon icon={RadioCheckedIcon} color={style.checkedIcon.color} />}
      sx={style.radio}
      {...props}
    />
  )
})
