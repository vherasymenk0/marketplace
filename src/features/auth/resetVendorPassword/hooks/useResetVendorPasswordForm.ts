import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { resetVendorPassword } from '~/entities/auth'

import { useHandleFormError } from '~/shared/hooks/errorHandlers'
import { useRouter } from '~/shared/hooks/useRouter'

import {
  ResetVendorPasswordFormSchema,
  ResetVendorPasswordFormValues,
  mapFormSchemaToRequest,
} from '../model'

export const useResetVendorPasswordForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const token = searchParams.get('token')

  const methods = useForm<ResetVendorPasswordFormValues>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
      token: token ?? '',
    },
    resolver: zodResolver(ResetVendorPasswordFormSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods
  const handleFormError = useHandleFormError(methods.setError)

  const onSubmitSuccess = () => {
    router.push('/vendor/reset-password/success')
  }

  const onSubmit = handleSubmit(async (values) => {
    try {
      const dto = mapFormSchemaToRequest(values)
      await resetVendorPassword(dto)
      onSubmitSuccess()
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
