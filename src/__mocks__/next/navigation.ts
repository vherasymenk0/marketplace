export const useRouter = jest.fn(() => ({
  route: '/',
  pathname: '',
  query: '',
  asPath: '',
  locale: 'en',
  defaultLocale: 'en',
  push: jest.fn(),
  replace: jest.fn(),
}))

export const useSearchParams = jest.fn(() => ({
  get: jest.fn(),
}))

export const usePathname = () => ''
