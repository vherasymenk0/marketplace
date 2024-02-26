'use client'

import { InputAdornment } from '@mui/material'
import { forwardRef, useEffect, useState } from 'react'

import LoopIcon from '~/shared/assets/icons/loop.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { TextInputBaseRef } from '~/shared/components/base/TextInputBase'
import { useDebounce } from '~/shared/hooks/useDebounce'

import { TextInput, TextInputProps } from '../TextInput'

export type SearchInputProps = Omit<TextInputProps, 'onChange'> & {
  onChange?: (value: string) => void
  delay?: number
  defaultValue?: string
}

export const SearchInput = forwardRef(
  (
    { onChange, delay = 400, defaultValue = '', ...inputProps }: SearchInputProps,
    ref: TextInputBaseRef,
  ) => {
    const [inputValue, setInputValue] = useState(defaultValue)
    const debounceValue = useDebounce(inputValue, delay)

    useEffect(() => {
      onChange?.(debounceValue)
    }, [debounceValue])

    useEffect(() => {
      if (!defaultValue && defaultValue !== inputValue) {
        setInputValue('')
      }
    }, [defaultValue])

    return (
      <TextInput
        ref={ref}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <SvgIcon icon={LoopIcon} size={32} />
          </InputAdornment>
        }
        {...inputProps}
      />
    )
  },
)
