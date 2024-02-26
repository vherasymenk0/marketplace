import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { createVendorPassword } from '~/entities/auth'

import { useHandleFormError } from '~/shared/hooks/errorHandlers'
import { useRouter } from '~/shared/hooks/useRouter'

import {
  CreateVendorPasswordFormSchema,
  CreateVendorPasswordFormValues,
  mapFormSchemaToRequest,
} from '../model'

export const useCreateVendorPasswordForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const token = searchParams.get('token')

  const methods = useForm<CreateVendorPasswordFormValues>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
      create_password_token: token ?? '',
    },
    resolver: zodResolver(CreateVendorPasswordFormSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods
  const handleFormError = useHandleFormError(methods.setError)

  const onSubmit = handleSubmit(async (values) => {
    try {
      const dto = mapFormSchemaToRequest(values)
      await createVendorPassword(dto)

      router.push('sign-up/success')
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
