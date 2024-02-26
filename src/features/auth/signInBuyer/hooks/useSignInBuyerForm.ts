import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'

import { signInBuyer } from '~/entities/auth'

import { useHandleFormError } from '~/shared/hooks/errorHandlers'
import { useRouter } from '~/shared/hooks/useRouter'
import { getVisitorToken } from '~/shared/services/visitorToken'

import { SignInBuyerFormSchema, SignInBuyerFormValues, mapFormSchemaToRequest } from '../model'

export const useSignInBuyerForm = ({ redirectPath = '/authorize' }: { redirectPath?: string }) => {
  const router = useRouter()
  const initialValues = {
    email: '',
    password: '',
  }

  const methods = useForm<SignInBuyerFormValues>({
    defaultValues: initialValues,
    resolver: zodResolver(SignInBuyerFormSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods
  const handleFormError = useHandleFormError(methods.setError)

  const onSubmit = handleSubmit(async (values) => {
    try {
      const dto = mapFormSchemaToRequest(values)
      const visitorToken = getVisitorToken()
      const { token } = await signInBuyer(dto, { visitorToken })

      await signIn('credentials', {
        email: values.email,
        token,
        redirect: false,
      })
      router.refresh()
      router.push(redirectPath)
    } catch (error) {
      handleFormError(error)
    }
  })

  return {
    methods,
    onSubmit,
    isSubmitting,
  }
}
