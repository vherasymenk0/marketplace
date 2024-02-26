import { screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { renderTestComponent } from '~/app/tests/test.utils'

import { ForgotBuyerPasswordForm } from './ForgotBuyerPasswordForm'

const submit = async () => {
  const submitButton = screen.getByRole('button', {
    name: 'Submit',
  })

  await userEvent.click(submitButton)
}

const render = () => renderTestComponent(<ForgotBuyerPasswordForm />)

describe('ForgotBuyerPasswordForm', () => {
  it('should be all required', async () => {
    render()
    await submit()

    expect(screen.getByText('Required')).toBeInTheDocument()
  })

  it('should invalidate email', async () => {
    render()
    const emailInput = screen.getByLabelText('Email *')

    await userEvent.type(emailInput, 'test')
    await submit()

    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })
})
