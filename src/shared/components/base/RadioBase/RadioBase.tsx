'use client'

import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material'
import { forwardRef } from 'react'

export type RadioRef = MuiRadioProps['ref']
export type RadioProps = Omit<MuiRadioProps, 'ref'>

export const RadioBase = forwardRef((props: RadioProps, ref: RadioRef) => {
  return <MuiRadio ref={ref} {...props} />
})
