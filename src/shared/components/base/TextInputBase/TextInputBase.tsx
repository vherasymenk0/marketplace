'use client'

import { OutlinedInput, OutlinedInputProps } from '@mui/material'
import { forwardRef } from 'react'

export type TextInputBaseRef = OutlinedInputProps['ref']
export type TextInputBaseProps = Omit<OutlinedInputProps, 'ref'>

export const TextInputBase = forwardRef((props: TextInputBaseProps, ref: TextInputBaseRef) => {
  return <OutlinedInput ref={ref} size="small" {...props} />
})
