'use client'

import { ResetPasswordExpiredLink } from '~/features/auth/resetPasswordExpiredLink'

import { resendVendorNewPasswordCreationLink } from '~/entities/auth'

export const ResetVendorPasswordLinkExpired = () => (
  <ResetPasswordExpiredLink resendCallback={resendVendorNewPasswordCreationLink} />
)
