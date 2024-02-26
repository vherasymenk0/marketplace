import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { forgotVendorPassword } from '~/entities/auth'

import { useHandleFormError } from '~/shared/hooks/errorHandlers'
import { useRouter } from '~/shared/hooks/useRouter'

import {
  ForgotVendorPasswordFormSchema,
  ForgotVendorPasswordFormValues,
  mapFormSchemaToRequest,
} from '../model'

export const useForgotVendorPasswordForm = () => {
  const router = useRouter()

  const methods = useForm<ForgotVendorPasswordFormValues>({
    defaultValues: { email: '' },
    resolver: zodResolver(ForgotVendorPasswordFormSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods

  const handleFormError = useHandleFormError(methods.setError)

  const onSubmit = handleSubmit(async (values) => {
    try {
      const dto = mapFormSchemaToRequest(values)
      await forgotVendorPassword(dto)

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
