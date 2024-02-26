'use client'

import { ResetPasswordExpiredLink } from '~/features/auth/resetPasswordExpiredLink'

import { resendNewPasswordCreationLink } from '~/entities/auth'

export const ResetPasswordLinkExpired = () => (
  <ResetPasswordExpiredLink resendCallback={resendNewPasswordCreationLink} />
)
