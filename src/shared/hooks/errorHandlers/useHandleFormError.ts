'use client'

import { FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { ZodError } from 'zod'

import { mapSnakeToCamelCase } from '~/shared/helpers/cases'
import { isOfType } from '~/shared/helpers/isOfType'
import { ApiError } from '~/shared/services/api'
import { showErrorToast } from '~/shared/services/toastr'

export const useHandleFormError = <FormValues extends FieldValues>(
  setError: UseFormReturn<FormValues>['setError'],
) => {
  const handleError = (responseError: unknown) => {
    if (responseError instanceof ZodError) {
      showErrorToast(responseError.message)
    }

    if (responseError instanceof ApiError) {
      if (isOfType.string(responseError.error)) {
        showErrorToast(responseError.error)
      }

      if (isOfType.object(responseError.error)) {
        Object.entries(mapSnakeToCamelCase(responseError.error.errors)).forEach(
          ([fieldName, formErrors]) => {
            if (Array.isArray(formErrors) && typeof formErrors[0] === 'string') {
              setError(fieldName as Path<FormValues>, { message: formErrors[0] })
            }
          },
        )
      }
    } else {
      console.error(responseError)
      showErrorToast('Something went wrong')
    }
  }

  return handleError
}
