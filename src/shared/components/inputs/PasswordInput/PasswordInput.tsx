import { IconButton, InputAdornment } from '@mui/material'
import { forwardRef, useState } from 'react'

import EyeOffIcon from '~/shared/assets/icons/eye-off.svg'
import EyeIcon from '~/shared/assets/icons/eye.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { TextInputBaseRef } from '~/shared/components/base/TextInputBase'

import { TextInput, TextInputProps } from '../TextInput'

type InputRef = TextInputBaseRef

export const PasswordInput = forwardRef((props: TextInputProps, ref: InputRef) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPasword = () => setShowPassword((prev) => !prev)

  return (
    <TextInput
      {...props}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={handleShowPasword} sx={{ p: 0 }}>
            <SvgIcon icon={showPassword ? EyeOffIcon : EyeIcon} />
          </IconButton>
        </InputAdornment>
      }
      ref={ref}
    />
  )
})
