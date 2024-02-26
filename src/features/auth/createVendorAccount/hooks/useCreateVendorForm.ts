import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { createVendorAccount } from '~/entities/auth'
import { getPhoneDetailsByCountryName } from '~/entities/user'

import { useHandleFormError } from '~/shared/hooks/errorHandlers'
import { useRouter } from '~/shared/hooks/useRouter'

import { CreateVendorFormSchema, CreateVendorFormValues, mapFormSchemaToRequest } from '../model'

export const useCreateVendorForm = () => {
  const methods = useForm<CreateVendorFormValues>({
    resolver: zodResolver(CreateVendorFormSchema),
  })
  const router = useRouter()
  const handleFormError = useHandleFormError(methods.setError)

  const isPending = methods.formState.isSubmitting || router.isPending
  const country = methods.watch('country')

  const phoneDetails = useMemo(() => {
    return getPhoneDetailsByCountryName(country)
  }, [country])

  useEffect(() => {
    if (country) {
      methods.setValue('phone', '')
    }
  }, [country])

  const handleSubmit = methods.handleSubmit(async (values: CreateVendorFormValues) => {
    try {
      const dto = mapFormSchemaToRequest({
        ...values,
        phone: `+${phoneDetails.countryCode}${values.phone}`,
      })
      await createVendorAccount(dto)

      router.push('/vendor/sign-up/request-sent')
    } catch (error) {
      handleFormError(error)
    }
  })

  return {
    methods,
    isPending,
    handleSubmit,
    phoneDetails,
    phoneFieldDisabled: !country,
  }
}
