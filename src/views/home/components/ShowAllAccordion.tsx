import { MouseEvent } from 'react'
import { FormattedMessage } from 'react-intl'

import { Button } from '~/shared/components/base/Button'
import { Text } from '~/shared/components/base/Text'
import { useBoolean } from '~/shared/hooks/useBoolean'

interface Props {
  children: React.ReactNode
}

export const ShowAllAccordion = ({ children }: Props) => {
  const [isOpen, { on }] = useBoolean(false)

  const onShowAllClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.stopPropagation()
    e.preventDefault()

    on()
  }

  return (
    <>
      {isOpen ? (
        children
      ) : (
        <Button
          variant="text"
          size="small"
          onClick={onShowAllClick}
          sx={{ margin: '0 auto', mt: 2 }}
        >
          <Text variant="button2">
            <FormattedMessage defaultMessage="Show All" id="homePage.categoriesSection.showAll" />
          </Text>
        </Button>
      )}
    </>
  )
}
