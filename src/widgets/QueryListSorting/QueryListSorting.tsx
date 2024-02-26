'use client'

import { Menu, MenuItem, Theme, useMediaQuery } from '@mui/material'
import { useMemo, useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import SortIcon from '~/shared/assets/icons/sort-icon.svg'
import { Button } from '~/shared/components/base/Button'
import { IconButton } from '~/shared/components/base/IconButton'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { useQueryParams } from '~/shared/hooks/useQueryParams'

type SortParams = Record<
  string,
  {
    value: string
    label: {
      defaultMessage: string
      id: string
    }
  }[]
>

interface Props {
  sortParams: SortParams
}

export const QueryListSorting = ({ sortParams }: Props) => {
  const intl = useIntl()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isOpen = Boolean(anchorEl)

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const { queryParams, setQueryParams } = useQueryParams()
  const currentSort = Object.keys(sortParams).find((key) => queryParams.get(key))

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const preparedSortParams = useMemo(() => {
    const preparedParams: { sortQuery: string; value: string; label: string }[] = []

    Object.keys(sortParams).forEach((sortKey) => {
      sortParams[sortKey]?.forEach((sortValue) => {
        preparedParams.push({
          sortQuery: sortKey,
          value: sortValue.value,
          label: intl.formatMessage(sortValue.label),
        })
      })
    })

    return preparedParams
  }, [sortParams])

  const handleSort = (sortQuery: string, value: string) => {
    if (queryParams.get(sortQuery) !== value) {
      const newQueryParams = { ...(currentSort && { [currentSort]: '' }), [sortQuery]: value }

      setQueryParams(newQueryParams)
    } else {
      setQueryParams({ [sortQuery]: '' })
    }

    handleClose()
  }

  return (
    <>
      {isMobile ? (
        <IconButton Icon={<SortIcon />} variant="outlined" onClick={handleOpen} />
      ) : (
        <Button
          id="basic-button"
          aria-controls={isOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : undefined}
          onClick={handleOpen}
          variant="outlined"
          startIcon={<SvgIcon icon={SortIcon} />}
        >
          <FormattedMessage defaultMessage="Sort by" id="myListings.sortBtn" />
        </Button>
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          sx: { width: 240 },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {preparedSortParams.map(({ label, sortQuery, value }, index) => {
          const selected = currentSort ? queryParams.get(sortQuery) === value : index === 0

          return (
            <MenuItem key={label} selected={selected} onClick={() => handleSort(sortQuery, value)}>
              {label}
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}
