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
