import {
  FormControlLabel,
  FormControlLabelProps as MuiFormControlLabelProps,
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from '@mui/material'
import { forwardRef } from 'react'

import { useStyles } from './Switch.styles'

export type SwitchRef = MuiSwitchProps['ref']
export interface SwitchProps extends Omit<MuiSwitchProps, 'ref'> {
  label: MuiFormControlLabelProps['label']
  formControlProps?: Partial<Omit<MuiFormControlLabelProps, 'label'>>
}

const defaultStyles = {
  sx: { mr: 1.5 },
}

export const Switch = forwardRef(
  ({ formControlProps, label, onChange, ...restProps }: SwitchProps, ref: SwitchRef) => {
    const styles = useStyles()

    return (
      <FormControlLabel
        label={label}
        componentsProps={{
          typography: {
            variant: 'subtitle4',
          },
        }}
        sx={styles.label}
        control={
          <MuiSwitch
            ref={ref}
            onChange={onChange}
            disableRipple
            {...defaultStyles}
            {...restProps}
          />
        }
        {...formControlProps}
      />
    )
  },
)
