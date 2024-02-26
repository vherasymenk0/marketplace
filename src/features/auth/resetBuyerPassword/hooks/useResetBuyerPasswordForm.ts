import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { resetBuyerPassword } from '~/entities/auth'

import { useHandleFormError } from '~/shared/hooks/errorHandlers'
import { useRouter } from '~/shared/hooks/useRouter'

import {
  ResetBuyerPasswordFormSchema,
  ResetBuyerPasswordFormValues,
  mapFormSchemaToRequest,
} from '../model'

export const useResetBuyerPasswordForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const token = searchParams.get('token')

  const methods = useForm<ResetBuyerPasswordFormValues>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
      token: token ?? '',
    },
    resolver: zodResolver(ResetBuyerPasswordFormSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods
  const handleFormError = useHandleFormError(methods.setError)

  const onSubmitSuccess = () => {
    router.push('/reset-password/success')
  }

  const onSubmit = handleSubmit(async (values) => {
    try {
      const dto = mapFormSchemaToRequest(values)
      await resetBuyerPassword(dto)
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
