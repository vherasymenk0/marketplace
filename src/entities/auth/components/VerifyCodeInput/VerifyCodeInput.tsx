'use client'

import { CodeInput } from '~/shared/components/inputs/CodeInput'

import { useVerifyCodeInput } from './hooks/useVerifyCodeInput'
import { Props } from './VerifyCodeInput.types'

export const VerifyCodeInput = ({ codeLength = 6, onlyNumbers, onVerify }: Props) => {
  const { value, errorMessage, isSuccess, handleChange, validateChar } = useVerifyCodeInput({
    codeLength,
    onVerify,
    onlyNumbers,
  })

  return (
    <CodeInput
      value={value}
      error={!!errorMessage}
      errorMessage={errorMessage}
      isVerified={isSuccess}
      onChange={handleChange}
      validateChar={validateChar}
      onlyNumbers={onlyNumbers}
    />
  )
}
