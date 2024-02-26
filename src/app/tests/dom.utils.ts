Object.defineProperty(global, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
  })),
})

Object.defineProperty(global, 'localStorage', {
  writable: true,
  value: {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
  },
})

Object.defineProperty(global, 'sessionStorage', {
  writable: true,
  value: {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
  },
})

jest.mock('get-browser-fingerprint', () => ({
  getCanvasID: jest.fn(() => 'mocked-canvas-id'),
}))
