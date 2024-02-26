import { screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { renderTestComponent } from '~/app/tests/test.utils'

import { CreateVendorForm } from './CreateVendorForm'

const submit = async () => {
  const submitButton = screen.getByRole('button', {
    name: 'Send Request',
  })

  await userEvent.click(submitButton)
}

const render = () => renderTestComponent(<CreateVendorForm />)

describe('CreateVendorForm', () => {
  it('should be all required', async () => {
    render()

    await submit()

    const errors = screen.getAllByText('Required')
    expect(errors.length).toBe(5)
  })

  it('should invalidate email', async () => {
    render()
    const emailInput = screen.getByLabelText('Email *')

    await userEvent.type(emailInput, 'test')
    await submit()

    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })
})
