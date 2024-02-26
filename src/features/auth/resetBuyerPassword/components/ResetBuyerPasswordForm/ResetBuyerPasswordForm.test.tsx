import { screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { renderTestComponent } from '~/app/tests/test.utils'

import { ResetBuyerPasswordForm } from './ResetBuyerPasswordForm'

const submit = async () => {
  const submitButton = screen.getByRole('button', {
    name: 'Confirm',
  })

  await userEvent.click(submitButton)
}

const render = () => renderTestComponent(<ResetBuyerPasswordForm />)

describe('ResetBuyerPasswordForm', () => {
  describe('Validation', () => {
    it('should be all required', async () => {
      render()

      await submit()

      const requiredErrors = screen.getAllByText('Required')

      expect(requiredErrors.length).toEqual(2)
    })

    describe('Password', () => {
      it('should be at least 8 characters', async () => {
        render()
        const passwordInput = screen.getByLabelText('New Password *')

        await userEvent.type(passwordInput, 'psw1234')
        await submit()

        expect(screen.getByText('Required min 8 symbols')).toBeInTheDocument()
      })

      it('should contain at least one number', async () => {
        render()
        const passwordInput = screen.getByLabelText('New Password *')

        await userEvent.type(passwordInput, 'supper_password')
        await submit()

        expect(screen.getByText('Required at least one number')).toBeInTheDocument()
      })

      it('should contain at least one lower letter', async () => {
        render()
        const passwordInput = screen.getByLabelText('New Password *')

        await userEvent.type(passwordInput, 'PASSWORD1234')
        await submit()

        expect(screen.getByText('Required at least one lowercase letter')).toBeInTheDocument()
      })

      it('should invalidate confirm password', async () => {
        render()
        const passwordInput = screen.getByLabelText('New Password *')
        const confirmPasswordInput = screen.getByLabelText('Confirm New Password *')

        await userEvent.type(passwordInput, 'Password1234')
        await userEvent.type(confirmPasswordInput, 'Password12345')
        await submit()

        expect(screen.getByText('The passwords do not match')).toBeInTheDocument()
      })
    })
  })
})
