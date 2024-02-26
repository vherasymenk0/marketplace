import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export const formatCookiesToString = (cookies: RequestCookie[]): string =>
  cookies.map((cookie) => `${cookie.name}=${cookie.value}`).join('; ')
