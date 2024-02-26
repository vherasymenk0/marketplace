import { FormControlLabel, FormControlLabelProps, FormHelperText } from '@mui/material'
import { forwardRef } from 'react'

import { Checkbox, CheckboxProps, CheckboxRef } from '../Checkbox'

type CheckboxControlEssentialProps = Pick<
  FormControlLabelProps,
  'value' | 'disabled' | 'id' | 'label' | 'defaultValue'
>

export type CheckboxWithLabelRef = CheckboxRef
export type CheckboxWithLabelProps = CheckboxControlEssentialProps &
  CheckboxProps & {
    error?: string | null
    label: FormControlLabelProps['label']
    formControlProps?: Partial<FormControlLabelProps>
    checked?: boolean
  }

const defaultStyles = {
  sx: { p: 0, mr: 1.5 },
}

export const CheckboxWithLabel = forwardRef(
  (
    { id, label, disabled, error, formControlProps, ...restProps }: CheckboxWithLabelProps,
    ref: CheckboxWithLabelRef,
  ) => (
    <>
      <FormControlLabel
        label={label}
        disabled={disabled}
        componentsProps={{
          typography: {
            variant: 'body4',
          },
        }}
        sx={{ color: (theme) => theme.palette.grey[900] }}
        control={
          <Checkbox id={id} ref={ref} disabled={disabled} {...defaultStyles} {...restProps} />
        }
        {...formControlProps}
      />
      {error ? (
        <FormHelperText error sx={{ mt: 0.5 }}>
          {error}
        </FormHelperText>
      ) : null}
    </>
  ),
)
