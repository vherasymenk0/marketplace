'use client'

import { MuiOtpInput, MuiOtpInputProps } from 'mui-one-time-password-input'

import { FormControl } from '~/shared/components/base/FormControl'

import { TextInputProps } from '../TextInput'

import { useStyles } from './CodeInput.styles'

type BaseTextInputProps = Pick<
  TextInputProps,
  'error' | 'errorMessage' | 'sx' | 'helperText' | 'FormControlProps'
>
export interface CodeInputProps extends BaseTextInputProps, MuiOtpInputProps {
  value: string
  isVerified?: boolean
  onlyNumbers?: boolean
}

export const CodeInput = ({
  length = 6,
  error,
  sx: rootStyles,
  errorMessage,
  placeholder = '_',
  isVerified,
  onlyNumbers,
  TextFieldsProps,
  FormControlProps,
  ...rest
}: CodeInputProps) => {
  const styles = useStyles({ isVerified })

  return (
    <FormControl
      error={error}
      errorMessage={errorMessage}
      sx={styles.FormControl}
      {...FormControlProps}
    >
      <MuiOtpInput
        length={length}
        TextFieldsProps={{
          placeholder,
          sx: styles.inputs,
          error,
          ...TextFieldsProps,
          inputProps: {
            'data-testid': 'otp-input',
            ...(onlyNumbers && { type: 'tel' }),
          },
        }}
        sx={{ ...styles.root, ...rootStyles }}
        {...rest}
      />
    </FormControl>
  )
}
