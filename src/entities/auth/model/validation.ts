import { z } from 'zod'

import * as messages from '~/shared/constants/messages'
import { stringLength, validatePassword } from '~/shared/helpers/validation'

export const ConfirmPasswordSchema = z
  .object({
    password: z
      .string()
      .nonempty({ message: messages.REQUIRED })
      .superRefine(stringLength())
      .superRefine(validatePassword),
    passwordConfirmation: z.string().nonempty({ message: messages.REQUIRED }),
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (password !== passwordConfirmation) {
      ctx.addIssue({
        path: ['passwordConfirmation'],
        code: 'custom',
        message: 'The passwords do not match',
      })
    }
  })
