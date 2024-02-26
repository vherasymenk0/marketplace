import { getError } from '~/app/tests/test.helpers'

import { Config, RequestInterceptor, ResponseInterceptor } from './fetch.types'

import { Fetch } from './index'

const mockedData = { foo: 'bar' }
const mockResponse = {
  ok: true,
  json: () => Promise.resolve(mockedData),
}
const fetchMock = jest.fn()
global.fetch = fetchMock

describe('Fetch service', () => {
  beforeEach(() => {
    fetchMock.mockImplementation(() => {
      return Promise.resolve(mockResponse)
    })
  })

  afterAll(() => {
    fetchMock.mockReset()
  })

  it('should add interceptor', () => {
    const api = new Fetch()
    const interceptors = api.getInterceptors()

    expect(interceptors.request).toEqual([])

    const requestInterceptor = {
      onSuccess: (config: Config) => config,
      onError: (err: unknown) => err,
    }
    api.addRequestInterceptor(requestInterceptor)

    expect(interceptors.request).toEqual([requestInterceptor])
  })

  it('should remove interceptor', () => {
    const api = new Fetch()
    const interceptors = api.getInterceptors()

    const requestInterceptor = {
      onSuccess: (config: Config) => config,
      onError: (err: unknown) => err,
    }
    api.addRequestInterceptor(requestInterceptor)

    expect(interceptors.request).toEqual([requestInterceptor])

    api.removeRequestInterceptor(requestInterceptor)

    expect(interceptors.request).toEqual([])
  })

  describe('Data fetch', () => {
    describe('Success', () => {
      it('should provide flat response', async () => {
        const api = new Fetch()

        const data = await api.get('api/request', { isFullResponse: false })
        expect(data).toEqual(mockedData)
      })

      it('should provide full response', async () => {
        const api = new Fetch()

        const data = await api.get('api/request', { isFullResponse: true })
        expect(data).toEqual({
          ...data,
          ...mockResponse,
        })
      })
    })

    describe('Error', () => {
      it('should throw error on failed response', async () => {
        const mockedError = 'something went wrong'
        const negativeMockResponse = {
          ok: false,
          json: () => Promise.resolve(mockedError),
        }

        fetchMock.mockImplementation(() => {
          return Promise.resolve(negativeMockResponse)
        })

        const api = new Fetch({ handleError: (e) => e })

        const error = await getError(() => api.get('/api/request'))
        expect(error).toBe(mockedError)
      })
    })
  })

  describe('Request handler', () => {
    it('should invoke before fetching', async () => {
      const api = new Fetch()

      const mockConfig = { foo: 'bar' }
      const modifyInter = {
        onSuccess: () => mockConfig,
      }

      let testConfig
      api.addRequestInterceptor(modifyInter as RequestInterceptor)
      api.addRequestInterceptor({
        onSuccess: (config) => {
          testConfig = config

          return config
        },
      })

      await api.get('api/request')

      expect(testConfig).toEqual(mockConfig)
    })
  })

  describe('Response handler', () => {
    it('should invoke after response', async () => {
      const mockInitialResponse = {
        ok: true,
        json: () => Promise.resolve({}),
        status: '200',
      }
      global.fetch = jest.fn(() => {
        return Promise.resolve(mockInitialResponse)
      }) as jest.Mock

      const api = new Fetch()

      const modifyInter = {
        onSuccess: (response: Response) => ({ ...response, ...mockResponse }),
      } as ResponseInterceptor

      let testResponse
      api.addResponseInterceptor(modifyInter)
      api.addResponseInterceptor({
        onSuccess: (response) => {
          testResponse = response

          return response
        },
      })

      await api.get('api/request')

      expect(testResponse).toEqual({ ...mockInitialResponse, ...mockResponse })
    })

    it('should intercept errors after response', async () => {
      const mockError = 'something went wrong'
      global.fetch = jest.fn(() => {
        return Promise.reject(mockError)
      }) as jest.Mock

      const api = new Fetch()

      let testError = ''
      api.addResponseInterceptor({
        onError: async (error) => {
          await new Promise((resolve) => {
            setTimeout(resolve)
          })

          return error
        },
      })
      api.addResponseInterceptor({
        onError: (error) => {
          const { error: errorMessage } = error
          if (typeof errorMessage === 'string') testError = `${errorMessage}!!!`

          return error
        },
      })

      await getError(() => api.get('api/request'))
      expect(testError).toBe(`${mockError}!!!`)
    })
  })
})
