import { screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { renderTestComponent } from '~/app/tests/test.utils'

import { ListingModel } from '~/entities/listing'

import { EditListingForm } from './EditListingForm'

Element.prototype.scrollIntoView = jest.fn()

const defaultListing: ListingModel = {
  brand: 'test',
  description: 'test',
  id: 1,
  listingImages: [],
  originCountry: 'test',
  partAttributes: [],
  partNumber: '#1243254325',
  partType: 'test',
  price: {
    USD: 1000,
  },
  rating: 0,
  reviewCount: 0,
  shippingCost: 10,
  slug: 'test',
  status: 'draft',
  title: 'test',
  subcategory: {
    id: 13,
    name: 'Baby',
    slug: 'baby',
    category: {
      id: 13,
      name: 'Sports',
      slug: 'sports',
    },
  },
  vendor: {
    companyName: null,
    id: null,
  },
}

const submit = async () => {
  const submitButton = screen.getByRole('button', {
    name: 'Save Changes',
  })

  await userEvent.click(submitButton)
}

const render = () => renderTestComponent(<EditListingForm listing={defaultListing} />)

describe('EditListingForm', () => {
  describe('Validation', () => {
    it('Price should be required', async () => {
      render()
      const priceField = screen.getByLabelText('Price *')
      await userEvent.clear(priceField)

      await submit()

      expect(screen.getByText('Price is required')).toBeInTheDocument()
    })

    it('Price max value', async () => {
      render()
      const priceField = screen.getByLabelText('Price *')
      await userEvent.type(priceField, '1000000')

      await submit()

      expect(screen.getByText("Price can't exceed $999,999")).toBeInTheDocument()
    })

    it('Shipping Cost should be required', async () => {
      render()
      const shippingCostField = screen.getByLabelText('Shipping Cost *')
      await userEvent.clear(shippingCostField)

      await submit()

      expect(screen.getByText('Shipping Cost is required')).toBeInTheDocument()
    })

    it('Shipping Cost max value', async () => {
      render()
      const shippingCostField = screen.getByLabelText('Shipping Cost *')
      await userEvent.type(shippingCostField, '1000000')

      await submit()

      expect(screen.getByText("Shipping cost can't exceed $10,000")).toBeInTheDocument()
    })
  })
})
