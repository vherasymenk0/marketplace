import { api } from '~/shared/services/api'
import { ApiMethod, FlatRequestOptions } from '~/shared/services/fetch'

import { VendorModel, VendorSchemaRequest } from '../user/model/vendor'

import { AuthResponse, AuthSchemaResponse, VerifyEmailCodeRequest } from './model/auth'
import {
  CreateBuyerAccountRequest,
  ForgotBuyerPasswordRequest,
  ResendNewPasswordCreationLinkRequest,
  ResetBuyerPasswordRequest,
  SignInCustomerRequest,
  SignInCustomerResponse,
} from './model/buyer'
import {
  CreateVendorAccountRequest,
  CreateVendorPasswordRequest,
  ForgotVendorPasswordRequest,
  ResendVendorNewPasswordCreationLinkRequest,
  ResendVendorPasswordCreationLinkRequest,
  ResetVendorPasswordRequest,
  SignInVendorRequest,
  UploadFFLRequest,
} from './model/vendor'

/**
 * Vendor
 */
export const createVendorAccount: ApiMethod<void, CreateVendorAccountRequest> = async (data) => {
  await api.post('api/v1/vendors/registration', {
    data,
  })
}

export const verifyVendorAccount: ApiMethod<VendorModel, VerifyEmailCodeRequest> = async (
  data,
  options,
) => {
  const response = await api.post('api/v1/vendors/email_verification', { data, ...options })

  const { vendor } = VendorSchemaRequest.parse(response)
  return vendor
}

export const uploadFFL: ApiMethod<VendorModel, UploadFFLRequest> = async (data, options) => {
  const response = await api.post('api/v1/vendors/federal_license', { data, ...options })

  const { vendor } = VendorSchemaRequest.parse(response)
  return vendor
}

export const signInVendor = async (data: SignInVendorRequest) =>
  api.post<AuthResponse>('api/v1/vendors/authentication', {
    data,
  })

export const forgotVendorPassword = async (data: ForgotVendorPasswordRequest) =>
  api.post<void>('api/v1/vendors/forgot_password', {
    data,
  })

export const verifyVendorPasswordResetToken: ApiMethod = async (options) =>
  api.post('/api/v1/vendors/forgot_password/token_verification', options)

export const resetVendorPassword = async ({ token, ...data }: ResetVendorPasswordRequest) =>
  api.post<void>('api/v1/vendors/new_password', {
    data,
    authorizeToken: token,
  })

export const createVendorPassword = async ({
  create_password_token,
  ...data
}: CreateVendorPasswordRequest) =>
  api.post<void>('api/v1/vendors/create_password', {
    data: { vendor: data },
    authorizeToken: create_password_token,
  })

export const resendVendorPasswordCreationLink: ApiMethod<
  void,
  ResendVendorPasswordCreationLinkRequest
> = async ({ token }) =>
  api.post<void>('api/v1/vendors/create_password/resend', {
    authorizeToken: token,
  })

export const resendVendorNewPasswordCreationLink: ApiMethod<
  void,
  ResendVendorNewPasswordCreationLinkRequest
> = async ({ token }) =>
  api.post<void>('api/v1/vendors/forgot_password/resend', {
    authorizeToken: token,
  })

/**
 * Buyer
 */
export const createBuyerAccount: ApiMethod<AuthResponse, CreateBuyerAccountRequest> = async (
  data,
) => {
  const response = await api.post('api/v1/users/registration', {
    data,
  })

  const dto = AuthSchemaResponse.parse(response)
  return dto
}

export const verifyBuyerAccount: ApiMethod<void, VerifyEmailCodeRequest> = async (
  data,
  options,
) => {
  return api.post('api/v1/users/email_verification', { data, ...options })
}

export const resendBuyerVerifyCode: ApiMethod = async (options): Promise<void> => {
  return api.post('api/v1/users/email_verification/resend', options)
}

export const signInBuyer = async (
  data: SignInCustomerRequest,
  options: Pick<FlatRequestOptions, 'visitorToken'>,
) => api.post<SignInCustomerResponse>('api/v1/users/authentication', { data, ...options })

export const forgotBuyerPassword = async (data: ForgotBuyerPasswordRequest) =>
  api.post<void>('api/v1/users/forgot_password', {
    data,
  })

export const verifyBuyerPasswordResetToken: ApiMethod = async (options) =>
  api.post('api/v1/users/forgot_password/token_verification', options)

export const resetBuyerPassword = async ({ token, ...data }: ResetBuyerPasswordRequest) =>
  api.post<void>('api/v1/users/new_password', {
    data,
    authorizeToken: token,
  })

export const resendNewPasswordCreationLink: ApiMethod<
  void,
  ResendNewPasswordCreationLinkRequest
> = async ({ token }) =>
  api.post<void>('api/v1/users/forgot_password/resend', {
    authorizeToken: token,
  })
