export const useSession = jest.fn().mockReturnValue({
  data: {
    user: { id: '1234', email: 'user@test.com' },
  },
  status: 'authenticated',
  update: jest.fn(),
})
