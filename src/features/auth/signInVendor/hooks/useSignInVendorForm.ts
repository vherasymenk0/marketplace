import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'

import { signInVendor } from '~/entities/auth'

import { useHandleFormError } from '~/shared/hooks/errorHandlers'
import { useRouter } from '~/shared/hooks/useRouter'

import { SignInVendorFormSchema, SignInVendorFormValues, mapFormSchemaToRequest } from '../model'

const defaultValues = {
  email: '',
  password: '',
}

export const useSignInVendorForm = () => {
  const router = useRouter()

  const methods = useForm<SignInVendorFormValues>({
    defaultValues,
    resolver: zodResolver(SignInVendorFormSchema),
  })

  const { handleSubmit } = methods
  const handleFormError = useHandleFormError(methods.setError)

  const onSubmit = handleSubmit(async (values) => {
    try {
      const dto = mapFormSchemaToRequest(values)
      const { token } = await signInVendor(dto)

      await signIn('credentials', {
        email: values.email,
        token,
        redirect: false,
      })
      router.refresh()
      router.push('/vendor/authorize')
    } catch (error) {
      handleFormError(error)
    }
  })

  return {
    methods,
    onSubmit,
  }
}
