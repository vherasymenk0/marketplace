import { useEffect } from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'

interface UseFormScrollToErrorProps {
  isSubmitting: boolean
  errors: FieldErrors<FieldValues>
}

export const useFormScrollToError = ({ isSubmitting, errors }: UseFormScrollToErrorProps) => {
  useEffect(() => {
    const errorsKeys = Object.keys(errors) || []
    if (errorsKeys.length > 0) {
      document.querySelector(`[name=${errorsKeys[0]}]`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start',
      })
    }
  }, [isSubmitting, errors])
}
