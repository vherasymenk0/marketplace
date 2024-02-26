import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'

import { createBuyerAccount } from '~/entities/auth'

import { useHandleFormError } from '~/shared/hooks/errorHandlers'
import { useRouter } from '~/shared/hooks/useRouter'

import {
  CreateBuyerFormSchema,
  CreateBuyerFormValues,
  mapFormSchemaToRequest,
} from '../components/CreateBuyerForm/CreateBuyerForm.schema'

const defaultValues = {
  fullName: '',
  email: '',
  password: '',
}

export const useCreateBuyerForm = () => {
  const router = useRouter()
  const methods = useForm<CreateBuyerFormValues>({
    defaultValues,
    resolver: zodResolver(CreateBuyerFormSchema),
    mode: 'onTouched',
  })

  const {
    setError,
    formState: { isSubmitting, errors },
    handleSubmit: onSubmit,
  } = methods

  const handleFormError = useHandleFormError(setError)

  const isPending = isSubmitting || router.isPending
  const isError = !!Object.keys(errors).length

  const handleSubmit = onSubmit(async (values: CreateBuyerFormValues) => {
    try {
      const dto = mapFormSchemaToRequest(values)
      const { token } = await createBuyerAccount(dto)

      await signIn('credentials', {
        email: values.email,
        token,
        redirect: false,
      })
      router.refresh()
      router.push('/sign-up/verify-email')
    } catch (error) {
      handleFormError(error)
    }
  })

  return { methods, isPending, handleSubmit, isError }
}
