import { screen } from '@testing-library/react'

import { renderTestComponent } from '~/app/tests/test.utils'

import { ApproximateValue } from '~/features/currency'

const queryData = { data: 'OMR', isFetching: false }
const price = {
  USD: 123.01,
  OMR: 333.33,
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: () => queryData,
}))

const render = (shortLabel = false) =>
  renderTestComponent(<ApproximateValue price={price} shortLabel={shortLabel} />)

describe('ApproximateValue', () => {
  it('should displays short label', () => {
    render(true)

    expect(screen.queryByText('Approximate')).not.toBeInTheDocument()
    expect(screen.getByText('Approx.')).toBeInTheDocument()
  })

  it('should display approximate value in the selected currency', () => {
    render()
    expect(screen.getByText('Approximate')).toBeInTheDocument()
    expect(screen.getByText(`OMR ${price.OMR}`)).toBeInTheDocument()
  })

  it('shouldn`t display approximate value while currency data is fetching', () => {
    queryData.isFetching = true
    render()
    expect(screen.queryByText('Approximate')).not.toBeInTheDocument()
    expect(screen.queryByText(`OMR ${price.OMR}`)).not.toBeInTheDocument()
  })

  it('shouldn`t display approximate value when using the default currency', () => {
    queryData.isFetching = false
    queryData.data = 'USD'
    render()

    expect(screen.queryByText('Approximate')).not.toBeInTheDocument()
    expect(screen.queryByText(`USD ${price.USD}`)).not.toBeInTheDocument()
  })

  it('shouldn`t display approximate value if data for the specified currency is unavailable', () => {
    queryData.data = 'AED'

    render()
    expect(screen.queryByText('AED')).not.toBeInTheDocument()
  })
})
