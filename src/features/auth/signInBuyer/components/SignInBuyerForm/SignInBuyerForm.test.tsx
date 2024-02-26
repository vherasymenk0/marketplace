import { screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { renderTestComponent } from '~/app/tests/test.utils'

import { SignInBuyerForm } from './SignInBuyerForm'

const submit = async () => {
  const submitButton = screen.getByRole('button', {
    name: 'Sign In',
  })

  await userEvent.click(submitButton)
}

const render = () => renderTestComponent(<SignInBuyerForm />)

describe('SignInCustomerForm', () => {
  it('should be all required', async () => {
    render()

    await submit()

    const errors = screen.getAllByText('Required')
    expect(errors.length).toBe(2)
  })

  it('should invalidate email', async () => {
    render()
    const emailInput = screen.getByLabelText('Email *')

    await userEvent.type(emailInput, 'test')
    await submit()

    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  describe('Password', () => {
    it('should be at least 8 characters', async () => {
      render()
      const passwordInput = screen.getByLabelText('Password *')

      await userEvent.type(passwordInput, 'psw1234')
      await submit()

      expect(screen.getByText('Required min 8 symbols')).toBeInTheDocument()
    })

    it('should contain at least one number', async () => {
      render()
      const passwordInput = screen.getByLabelText('Password *')

      await userEvent.type(passwordInput, 'supper_password')
      await submit()

      expect(screen.getByText('Required at least one number')).toBeInTheDocument()
    })

    it('should contain at least one lower letter', async () => {
      render()
      const passwordInput = screen.getByLabelText('Password *')

      await userEvent.type(passwordInput, 'PASSWORD1234')
      await submit()

      expect(screen.getByText('Required at least one lowercase letter')).toBeInTheDocument()
    })
  })
})
