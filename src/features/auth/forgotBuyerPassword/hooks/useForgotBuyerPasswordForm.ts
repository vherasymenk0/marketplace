import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { forgotBuyerPassword } from '~/entities/auth'

import { useHandleFormError } from '~/shared/hooks/errorHandlers'
import { useRouter } from '~/shared/hooks/useRouter'

import {
  ForgotBuyerPasswordFormSchema,
  ForgotBuyerPasswordFormValues,
  mapFormSchemaToRequest,
} from '../model'

export const useForgotBuyerPasswordForm = () => {
  const router = useRouter()

  const methods = useForm<ForgotBuyerPasswordFormValues>({
    defaultValues: { email: '' },
    resolver: zodResolver(ForgotBuyerPasswordFormSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods

  const handleFormError = useHandleFormError(methods.setError)

  const onSubmit = handleSubmit(async (values) => {
    try {
      const dto = mapFormSchemaToRequest(values)
      await forgotBuyerPassword(dto)

      router.push(`forgot-password/email-sent?email=${encodeURIComponent(values.email)}`)
    } catch (error) {
      handleFormError(error)
    }
  })

  return {
    methods,
    isPending: isSubmitting || router.isPending,
    onSubmit,
  }
}
