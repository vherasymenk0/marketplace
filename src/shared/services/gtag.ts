import { appConfig } from '@config/app'

declare global {
  interface Window {
    dataLayer: [any]
  }
}

export const GTM_ID = appConfig.private.gtmID

export const pageview = (url: string) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  } as unknown as Event)
}
