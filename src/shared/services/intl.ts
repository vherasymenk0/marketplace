'server-only'

import { createIntl } from '@formatjs/intl'

export const getIntl = async (locale: string) => {
  return createIntl({
    locale,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    messages: (await import(`~/shared/locales/${locale}/${locale}.json`)).default,
  })
}
