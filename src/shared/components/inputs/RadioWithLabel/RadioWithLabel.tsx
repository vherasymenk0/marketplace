import { FormControlLabel, FormControlLabelProps } from '@mui/material'
import { forwardRef } from 'react'

import { Radio } from '../Radio'
import type { RadioProps, RadioRef } from '../Radio'

type BaseProps = Pick<FormControlLabelProps, 'value' | 'disabled' | 'id' | 'label' | 'defaultValue'>

export type RadioWithLabelRef = RadioRef
export interface RadioWithLabelProps extends BaseProps, RadioProps {
  formControlProps?: Partial<Omit<FormControlLabelProps, 'label'>>
}

const defaultStyles = {
  sx: { p: 0, mr: 1.5 },
}

export const RadioWithLabel = forwardRef(
  (
    { id, value, label, disabled, formControlProps, ...restProps }: RadioWithLabelProps,
    ref: RadioWithLabelRef,
  ) => (
    <FormControlLabel
      id={id}
      label={label}
      value={value}
      disabled={disabled}
      componentsProps={{
        typography: {
          variant: 'body4',
          color: 'grey.900',
        },
      }}
      control={<Radio ref={ref} disabled={disabled} {...defaultStyles} {...restProps} />}
      {...formControlProps}
    />
  ),
)
