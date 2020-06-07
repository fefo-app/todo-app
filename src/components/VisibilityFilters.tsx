import React from 'react'
import cx from 'classnames'
import { VisibilityFilters as Filter } from '../types'
import styled from 'styled-components'

export interface VisibilityFiltersProps {
  filter: string
  setFilter: (newFilter: Filter) => void
}

const StylesWrapper = styled.div`
  margin: 4px auto;
  .filter {
    padding: 0.3rem 0;
    margin: 0 0.3rem;
    cursor: pointer;
  }

  .filter--active {
    border-bottom: 1px solid teal;
  }
`

export const VisibilityFilters = ({
  filter,
  setFilter
}: VisibilityFiltersProps) => {
  return (
    <StylesWrapper>
      {Object.keys(Filter).map((filterKey: string) => {
        //@ts-ignore
        const currentFilter = Filter[filterKey]
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              'filter',
              currentFilter === filter && 'filter--active'
            )}
            onClick={() => {
              setFilter(currentFilter)
            }}
          >
            {currentFilter}
          </span>
        )
      })}
    </StylesWrapper>
  )
}
