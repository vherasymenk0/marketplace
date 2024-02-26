'use client'

import { InputAdornment } from '@mui/material'
import { useIntl } from 'react-intl'

import LoopIcon from '~/shared/assets/icons/loop.svg'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { SearchInput } from '~/shared/components/inputs/SearchInput'
import { SEARCH_PARAMS } from '~/shared/constants/constants'
import { useQueryParams } from '~/shared/hooks/useQueryParams'

import { useStyles } from './QueryListSearch.styles'

export const QueryListSearch = () => {
  const intl = useIntl()
  const styles = useStyles()

  const { setQueryParams, queryParams } = useQueryParams()
  const searchValue = queryParams.get(SEARCH_PARAMS.byQuery) ?? ''

  const handleChange = (value: string) => {
    setQueryParams({ [SEARCH_PARAMS.byQuery]: value, page: '' })
  }

  return (
    <SearchInput
      defaultValue={searchValue}
      onChange={handleChange}
      delay={200}
      placeholder={intl.formatMessage({
        defaultMessage: 'Search for Auto Parts',
        id: 'myListings.search.placeholder',
      })}
      sx={styles.input}
      fullWidth
      startAdornment={
        <InputAdornment position="start">
          <SvgIcon icon={LoopIcon} size={24} color={styles.loopIcon.color} />
        </InputAdornment>
      }
      endAdornment={undefined}
    />
  )
}
