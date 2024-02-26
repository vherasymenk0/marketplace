import { useEffect, useState } from 'react'

import { CodeInputProps } from '~/shared/components/inputs/CodeInput'
import { isOfType } from '~/shared/helpers/isOfType'
import { ApiError } from '~/shared/services/api'
import { showErrorToast } from '~/shared/services/toastr'

import { Props } from '../VerifyCodeInput.types'

type CodeValue = CodeInputProps['value']

const CODE_LENGTH = 6

export const useVerifyCodeInput = ({ onVerify, onlyNumbers }: Props) => {
  const [codeValue, setCodeValue] = useState<CodeValue>('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const verifyCode = async (code: string) => {
    try {
      await onVerify(code)
      setIsSuccess(true)
      setErrorMessage('')
    } catch (error) {
      if (error instanceof ApiError && isOfType.string(error.error)) {
        setErrorMessage(error.error)
      } else {
        showErrorToast('Something went wrong')
        console.error(error)
      }
    }
  }

  const validateChar = (value: string) => {
    if (onlyNumbers) return value !== '' && !Number.isNaN(Number(value))
    return true
  }

  const handleChange = (value: CodeValue) => {
    setCodeValue(value)
  }

  useEffect(() => {
    if (codeValue?.length !== CODE_LENGTH) return

    void verifyCode(codeValue)
  }, [codeValue])

  return { value: codeValue, errorMessage, isSuccess, handleChange, validateChar }
}
