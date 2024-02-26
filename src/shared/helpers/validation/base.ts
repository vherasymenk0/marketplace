import { RefinementCtx } from 'zod'

import * as messages from '~/shared/constants/messages'
import { isOfType } from '~/shared/helpers/isOfType'

export const stringLength =
  (maxLength = 50, minLength = 1) =>
  (value: string | undefined, ctx: RefinementCtx) => {
    if (isOfType.isUndefined(value)) return

    if (value.trim().length < minLength) {
      ctx.addIssue({
        code: 'too_small',
        minimum: minLength,
        type: 'string',
        inclusive: true,
        message: messages.minLength(minLength),
      })
    }

    if (value.length > maxLength) {
      ctx.addIssue({
        code: 'too_big',
        maximum: maxLength,
        type: 'string',
        inclusive: true,
        message: messages.maxLength(maxLength),
      })
    }
  }

export const phoneNumber = (value: string | undefined, ctx: RefinementCtx) => {
  if (!value) return

  const VALID_PHONE_LENGTH = 8
  if (value.length !== VALID_PHONE_LENGTH) {
    ctx.addIssue({
      code: 'custom',
      message: 'Invalid phone number',
    })
  }
}
