'use client'

import { ClickAwayListener, List, ListItem, RadioGroup } from '@mui/material'
import Fade from '@mui/material/Fade'
import Popper from '@mui/material/Popper'
import { FormattedMessage, useIntl } from 'react-intl'

import { LISTING_IMPORT_FILTER_OPTIONS } from '~/entities/import'

import FilterIcon from '~/shared/assets/icons/filter.svg'
import { Button } from '~/shared/components/base/Button'
import { SvgIcon } from '~/shared/components/base/SvgIcon'
import { RadioWithLabel } from '~/shared/components/inputs/RadioWithLabel'

import { useStyles } from './FilterImports.styles'
import { useFilterImports } from './useFilterImports'

export const FilterImports = () => {
  const { isShowFilter, filterBy, popperAnchorEl, handleOpen, handleClose, handleChange } =
    useFilterImports()

  const styles = useStyles({ isOpen: isShowFilter })
  const intl = useIntl()

  return (
    <>
      <Button
        sx={styles.btn}
        startIcon={<SvgIcon icon={FilterIcon} color="grey.25" />}
        id="filter-button"
        aria-selected={isShowFilter}
        aria-controls={isShowFilter ? 'filter-button' : undefined}
        aria-haspopup="true"
        aria-expanded={isShowFilter ? 'true' : undefined}
        onClick={handleOpen}
      >
        <FormattedMessage id="myImports.filter.btn" defaultMessage="Filter" />
      </Button>
      <Popper open={isShowFilter} anchorEl={popperAnchorEl} placement="bottom-end" transition>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Fade {...TransitionProps} timeout={100}>
              <List sx={styles.list}>
                <RadioGroup>
                  {LISTING_IMPORT_FILTER_OPTIONS.map(({ label: { id, defaultMessage }, value }) => (
                    <ListItem sx={styles.listItem} key={id}>
                      <RadioWithLabel
                        name="filterBy"
                        value={value}
                        label={intl.formatMessage({
                          id,
                          defaultMessage,
                        })}
                        checked={filterBy === value}
                        onChange={handleChange}
                      />
                    </ListItem>
                  ))}
                </RadioGroup>
              </List>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  )
}
